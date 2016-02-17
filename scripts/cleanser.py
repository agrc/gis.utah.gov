import os
import sys
import re


def replace(walk_dir):
  print('walk_dir = ' + walk_dir)
  print('walk_dir (absolute) = ' + os.path.abspath(walk_dir))

  for root, subdirs, files in os.walk(walk_dir):
      if (root.startswith(walk_dir + 'images') or
         root.startswith(walk_dir + '_site') or
         root.startswith(walk_dir + 'downloads') or
         root.startswith(walk_dir + '.grunt')):
          continue

      for filename in files:
          _, extension = os.path.splitext(filename)
          if extension.lower() not in ['.html', '.scss', '.py']:
              continue

          file_path = os.path.join(root, filename)

          print('\t- file %s (full path: %s)' % (filename, file_path))

          with open(file_path, 'r') as original, open(file_path + '.bak', 'w') as updated:
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
                  replaced = update_tabs(replaced)

                  updated.write(replaced)

          os.rename(file_path + '.bak', file_path)


def update_image_url(content):
  return re.sub(r'src=[\"\']http:\/\/gis\.utah\.gov\/wp-content\/uploads\/(.*?)["\']',
                'src="{{ "/images/\g<1>" | prepend: site.baseurl }}"',
                content)

def update_gallery_links(content):
  return re.sub(r'src=[\"\']http:\/\/gis\.utah\.gov\/gallery\/(.*?)["\']',
                'src="{{ "/images/gallery/\g<1>" | prepend: site.baseurl }}"',
                content)

def update_css_links(content):
  return re.sub(r'url\([\"\']http:\/\/gis\.utah\.gov\/wp-content\/uploads\/(.*?)[\"\']\)',
                'url(../images/\g<1>)',
                content)

def update_page_links(content):
  return re.sub(r'href=[\"\']http:\/\/gis\.utah\.gov\/(.*?)[\"\']',
                'href="{{ "/\g<1>" | prepend: site.baseurl }}"',
                content)

def update_download_asset_links(content):
  return re.sub(r'[\"\']\/wp-content\/uploads\/(.*?)[\"\']',
                '"/downloads/\g<1>"',
                content)

def update_data_download_button(content):
  return re.sub(r'\[button size=\"medium\" color=\"white\" textColor=\"#923922"\ link=\"(.*?)\"\](Download.*?)\[\/button\]',
                '<a href="\g<1>" class="button medium white"><span class="button-text">\g<2></span></a>',
                content)

def update_caption(content):
  try:
    replace = re.sub(r'<p>\[caption id=.*? caption=\"(.*?)\".*?\](.*?/>)\[/caption\]<\/p>',
                      '<div class="caption">\g<2><p class="caption-text">\g<1></p></div>',
                      content)
  except:
    #: handle captions with no caption..... ....
    pass

  return re.sub(r'<p>\[caption id=.*?\](.*?/>)\[/caption\]<\/p>',
                    '<div class="caption">\g<1></div>',
                    replace)

def update_columns(content):
  replaced = re.sub(r'<p>\[one_half\]<\/p>',
                   '<div class="grid"><div class="grid__col grid__col--1-of-2">',
                   content)
  replaced = re.sub(r'<p>\[\/one_half\](<\/p>)?',
                   '</div>',
                   replaced)
  replaced = re.sub(r'(<p>)?\[one_half_last\]<\/p>',
                   '<div class="grid__col grid__col--1-of-2">',
                   replaced)
  replaced = re.sub(r'(<p>)?\[\/one_half_last\]<\/p>',
                   '</div></div>',
                   replaced)

  return replaced

def update_divider(content):
    replaced = re.sub(r'<p>\[divider_advanced.*\]<\/p>',
                      '<div class="divider"></div>',
                      content)
    replaced = re.sub(r'<p>\[divider_padding\](<br \/>|<\/p>)',
                      '<div class="divider-padding"></div>',
                      replaced)

    return replaced

def update_icons(content):
    return re.sub(r'(.*)\[icon(?:_link)? style=\"(.*?)\".*\](.*)\[\/icon(?:_link)?\](.*)',
                  '\g<1><span class="icon-text icon-\g<2>">\g<3></span>\g<4>',
                  content)

def update_tables(content):
  replaced = re.sub(r'<p>\[styled_table\]<br.*?\/>',
                    ' ',
                    content)
  replaced = re.sub(r'(<p>)?\[styled_table\]<\/p>',
                    '<div class="table-style">',
                    replaced)
  replaced = re.sub(r'<p>\[\/styled_table\]<\/p>',
                    '</div>',
                    replaced)

  return replaced

def update_tabs(content):
  replaced = re.sub(r'\[(\/)?tabs?\]',
                    '',
                    content)
  replaced = re.sub(r'(?:<p>)?\[tab title=\"(.*?)\"\](.*)',
                    '<h5 class="tab-title">\g<1></h5>\g<2>',
                    replaced,
                    flags=re.S)

  return replaced

if __name__ == '__main__':
    replace(sys.argv[1])
