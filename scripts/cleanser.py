import os
import re
import sys


def replace(walk_dir):
    print('walk_dir = ' + walk_dir)
    print('walk_dir (absolute) = ' + os.path.abspath(walk_dir))

    for root, subdirs, files in os.walk(walk_dir):
        if (root.startswith(walk_dir + 'images') or root.startswith(walk_dir + '_site') or root.startswith(walk_dir + 'downloads') or
                root.startswith(walk_dir + '.grunt')):
            continue

        for filename in files:
            _, extension = os.path.splitext(filename)
            if extension.lower() not in ['.html', '.scss', '.py']:
                continue

            file_path = os.path.join(root, filename)

            print('\t- file %s (full path: %s)' % (filename, file_path))

            with open(file_path, 'r') as original, open(file_path + '.bak', 'w') as updated:
                file_content = []
                for line_content in original.readlines():
                    replaced = update_image_url(line_content)
                    replaced = update_gallery_links(replaced)
                    replaced = update_css_links(replaced)
                    replaced = update_page_links(replaced)
                    replaced = update_download_asset_links(replaced)
                    replaced = update_data_download_button(replaced)
                    replaced = update_caption(replaced)
                    replaced = update_columns(replaced)
                    replaced = update_divider(replaced)
                    replaced = update_icons(replaced)
                    replaced = update_tables(replaced)

                    file_content.append(replaced)

                replaced = update_tabs(file_content)
                updated.write(replaced)

            os.rename(file_path + '.bak', file_path)


def update_image_url(content):
    return re.sub(r'src=[\"\']http:\/\/gis\.utah\.gov\/wp-content\/uploads\/(.*?)["\']', 'src="{{ "/images/\g<1>" | prepend: site.baseurl }}"', content)


def update_image_tag(content):
    content = re.sub('(?:\[image.*?\])(.*?)\[\/image\]', '<img src="{{ "/images\g<1>" | prepend: site.baseurl }}" class="inline-text-left" />', content)
    return re.sub('(?:\[image.*?).*?source_value=\"(.*?)\".*?\]', '<img src="\g<1>" />', content)


def update_gallery_links(content):
    return re.sub(r'src=[\"\']http:\/\/gis\.utah\.gov\/gallery\/(.*?)["\']', 'src="{{ "/images/gallery/\g<1>" | prepend: site.baseurl }}"', content)


def update_css_links(content):
    return re.sub(r'url\([\"\']http:\/\/gis\.utah\.gov\/wp-content\/uploads\/(.*?)[\"\']\)', 'url(../images/\g<1>)', content)


def update_page_links(content):
    return re.sub(r'href=[\"\']http:\/\/gis\.utah\.gov\/(.*?)[\"\']', 'href="{{ "/\g<1>" | prepend: site.baseurl }}"', content)


def update_download_asset_links(content):
    return re.sub(r'[\"\']\/wp-content\/uploads\/(.*?)[\"\']', '"/downloads/\g<1>"', content)


def update_data_download_button(content):
    return re.sub(r'\[button size=\"medium\" color=\"white\" textColor=\"#923922"\ link=\"(.*?)\"\](Download.*?)\[\/button\]',
                  '<a href="\g<1>" class="button medium white"><span class="button-text">\g<2></span></a>', content)


def update_caption(content):
    try:
        replace = re.sub(
            r'(?:<p>)?\[caption id=.*? caption=\"(.*?)\".*?\](.*?)\[\/caption](?:<\/p>)?',
            '<div class="caption">\g<2><p class="caption-text">\g<1></p></div>',
            content,
            flags=re.S)
    except Exception:
        #: handle captions with no caption..... ....
        pass

    return re.sub(r'<p>\[caption id=.*?\](.*?/>)\[\/caption\]<\/p>', '<div class="caption">\g<1></div>', replace, flags=re.S)


def update_columns(content):
    replaced = re.sub(r'<p>\[one_half\]<\/p>', '<div class="grid"><div class="grid__col grid__col--1-of-2">', content)
    replaced = re.sub(r'<p>\[\/one_half\](<\/p>)?', '</div>', replaced)
    replaced = re.sub(r'(<p>)?\[one_half_last\]<\/p>', '<div class="grid__col grid__col--1-of-2">', replaced)
    replaced = re.sub(r'(<p>)?\[\/one_half_last\]<\/p>', '</div></div>', replaced)

    return replaced


def update_divider(content):
    replaced = re.sub(r'<p>\[divider_advanced.*\]<\/p>', '<div class="divider"></div>', content)
    replaced = re.sub(r'<p>\[divider_padding\](<br \/>|<\/p>)', '<div class="divider-padding"></div>', replaced)

    return replaced


def update_icons(content):
    return re.sub(r'(.*)\[icon(?:_link)? style=\"(.*?)\".*\](.*)\[\/icon(?:_link)?\](.*)', '\g<1><span class="icon-text icon-\g<2>">\g<3></span>\g<4>', content)


def update_tables(content):
    replaced = re.sub(r'<p>\[styled_table\]<br.*?\/>', ' ', content)
    replaced = re.sub(r'(<p>)?\[styled_table\]<\/p>', '<div class="table-style">', replaced)
    replaced = re.sub(r'<p>\[\/styled_table\]<\/p>', '</div>', replaced)

    return replaced


def update_tabs(content):

    def add_content(key, product, package, html_content):
        if key in package[product]:
            html_content.append(package[product][key])

    html = []
    package = {}

    ignore_list = ['<div class="clear"></div>\n', '\n', '<p>[/tab]</p>\n', '<p>[/tab] [/tabs]</p>\n', '<br />\n']
    data = enumerate(content)
    i, line = data.next()

    #: look for h4 product header
    while line is not None:
        match = re.search('class=\"product\">(.*?)<\/h4>', line, flags=re.S)
        if not match:
            #: we have some upfront data page stuff. abstract etc
            if line not in ignore_list:
                line = re.sub('\[\/tab\]', '', line)
                line = re.sub('\[\/tabs\]', '', line)
                html.append(line)

            try:
                i, line = data.next()
                continue
            except StopIteration:
                break

        #: we have a product dataset
        product = match.group(1)
        package[product] = {}

        #: create new package grid
        html.append('''<div class="grid package">
    <div class="grid__col grid__col--12-of-12">
        <h3 id="{0}">{1}</h3>
    </div>
    <div class="grid__col grid__col--12-of-12 package-content">
'''.format(product.replace(' ', ''), product))

        working_on_product = True
        while working_on_product:
            try:
                i, line = data.next()
            except StopIteration:
                break

            #: look for tab header
            match = re.search('\[tab title=\"(.*?)\"\](.*)', line, flags=re.S)
            if not match:
                continue

            tab = match.group(1).lower()
            tab_data = match.group(2)

            package[product][tab] = ''
            if tab_data not in ignore_list:
                package[product][tab] = tab_data

            working_on_tabs = True
            while working_on_tabs:
                try:
                    i, line = data.next()
                except StopIteration:
                    break

                if re.search('\[\/tabs\]', line, flags=re.S):
                    working_on_tabs = False
                    working_on_product = False
                elif re.search('\[\/tab\]', line, flags=re.S):
                    working_on_tabs = False
                else:
                    if line in ignore_list:
                        try:
                            i, line = data.next()
                            continue
                        except StopIteration:
                            break

                    line = re.sub('<p>\[tab[ ]title=\"(.*?)\"\](?:<br[ ]\/>)?(?:\n)?', '', line)
                    line = re.sub('\[\/tab\]', '', line)
                    line = re.sub('\[\/tabs\]', '', line)
                    package[product][tab] += line

            if working_on_product:
                continue

            add_content('description', product, package, html)
            add_content('usage', product, package, html)
            add_content('contact', product, package, html)

            html.append('''</div>
    <div class="grid__col grid__col--1-of-2">
    <div class="panel">
        <i class="fas fa-pull-right fa-download fa-2x"></i>
        <h5 id="{}-{}">Downloads</h5>
    </div>
    <div class="panel-content">'''.format(product.replace(' ', ''), 'downloads'))
            add_content('links | download', product, package, html)

            html.append('''
        </div>
    </div>
    <div class="grid__col grid__col--1-of-2">
        <div class="panel update">
            <i class="fas fa-pull-right fa-calendar fa-2x"></i>
            <h5 id="{}-{}">Updates</h5>
        </div>
        <div class="panel-content">'''.format(product.replace(' ', ''), 'updates'))

            add_content('updates', product, package, html)

            html.append('''
        </div>
    </div>
    </div>''')

    return ''.join(html)

    # return yaml.dump(front_matter, explicit_start=True, explicit_end=True) + content
    # return yaml_content.group(1) + '\n' + content


def get_unique_tags(content, tags):
    import yaml

    yaml_content = re.match('(---.*?---)', content, flags=re.S)
    if not yaml_content:
        return
    front_matter = yaml.load_all(yaml_content.group(1))

    for yml in front_matter:
        if yml is not None and 'tags' in yml:
            [tags.add(tag) for tag in yml['tags']]


def remove_shutter_set(content):
    return re.sub(r'class=[\"\']shutterset_[\"\']', '', content)


def update_inline_text_left(content):
    return re.sub(r'class=[\"\'](.*?)alignright(.*?)["\']', 'class="inline-text-left"', content)


def update_inline_text_right(content):
    return re.sub(r'class=[\"\'](.*?)alignleft(.*?)["\']', 'class="inline-text-right"', content)


def fix_codes(content):
    content = re.sub('\[code\]', '<code>', content)
    return re.sub('\[\/code\]', '</code>', content)


def fix_contacts(content):
    content = re.sub('display_name: kgreen', 'display_name: Data Queen', content)
    content = re.sub('kkgreen@utah\.gov', 'agrc@utah.gov', content)
    content = re.sub('801\.537\.9079', '801.538.3665', content)
    content = re.sub('display_name: rkelson', 'display_name: Rick Kelson', content)
    content = re.sub('display_name: Map Utah', 'display_name: AGRC Staff', content)
    content = re.sub('display_name: jpechmann', 'display_name: Jessie Pechmann', content)
    content = re.sub('display_name: mfoulger', 'display_name: Michael Foulger', content)
    content = re.sub('display_name: mheagin', 'display_name: Mike Heagin', content)

    return re.sub('Kelly Green', 'someone', content)


def one_offs(walk_dir):
    print('walk_dir = ' + walk_dir)
    print('walk_dir (absolute) = ' + os.path.abspath(walk_dir))

    for root, subdirs, files in os.walk(walk_dir):
        if (root.startswith(walk_dir + 'images') or root.startswith(walk_dir + '_site') or root.startswith(walk_dir + 'downloads') or
                root.startswith(walk_dir + '.grunt')):
            continue

        for filename in files:
            _, extension = os.path.splitext(filename)
            if extension.lower() not in ['.html', '.md']:
                continue

            file_path = os.path.join(root, filename)

            print('\t- file %s (full path: %s)' % (filename, file_path))

            with open(file_path, 'r') as original, open(file_path + '.bak', 'w') as updated:
                file_content = []
                for line_content in original.readlines():
                    replaced = remove_shutter_set(line_content)
                    replaced = update_inline_text_left(replaced)
                    replaced = update_inline_text_right(replaced)
                    replaced = update_image_tag(replaced)
                    replaced = fix_codes(replaced)
                    replaced = fix_contacts(replaced)

                    file_content.append(replaced)

                replaced = update_caption(''.join(file_content))
                updated.write(replaced)

            os.rename(file_path + '.bak', file_path)


if __name__ == '__main__':
    # replace(sys.argv[1])
    one_offs(sys.argv[1])
