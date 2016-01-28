import os
import sys
import fileinput
import re


walk_dir = sys.argv[1]

print('walk_dir = ' + walk_dir)
print('walk_dir (absolute) = ' + os.path.abspath(walk_dir))

image_re = re.compile(r'src=["\']http://gis.utah.gov/wp-content/uploads/(.*?)["\']')
gallery_re = re.compile(r'src=["\']http://gis.utah.gov/gallery/(.*?)["\']')
downloads_re = re.compile(r'["\']/wp-content/uploads/(.*?)["\']')
css_re = re.compile(r'url\(["\']http://gis.utah.gov/wp-content/uploads/(.*?)["\']\)')
link_re = re.compile(r'href=["\']http://gis.utah.gov/(.*?)["\']')

for root, subdirs, files in os.walk(walk_dir):
    if root.startswith(walk_dir + 'images') or root.startswith(walk_dir + '_site'):
        continue

    for filename in files:
        _, extension = os.path.splitext(filename)
        if extension.lower() not in ['.html', '.scss']:
            continue

        file_path = os.path.join(root, filename)

        print('\t- file %s (full path: %s)' % (filename, file_path))


        with open(file_path, 'r') as original, open(file_path + '.bak', 'w') as updated:
            for line_content in original.readlines():
                replaced = image_re.sub('src="{{ "/images/\g<1>" | prepend: site.baseurl }}"', line_content)
                replaced = gallery_re.sub('src="{{ "/images/gallery/\g<1>" | prepend: site.baseurl }}"', replaced)
                replaced = css_re.sub('url(../images/\g<1>)', replaced)
                replaced = link_re.sub('href="{{ "/\g<1>" | prepend: site.baseurl }}"', replaced)
                replaced = downloads_re.sub('"/downloads/\g<1>"', replaced)

                updated.write(replaced)

        os.rename(file_path + '.bak', file_path)
