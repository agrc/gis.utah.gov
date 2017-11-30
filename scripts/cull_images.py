import os
import pprint
import re
import shutil
import sys

known_extensions = [
    '.png_backup', '.jpg', '.xml', '.idx', '.jpeg', '.bak', '.sample', '.gif', '.jpg_backup', '.svg', '.pack', '.doc', '.bmp', '.png', '.css', '.m4v', '.ico',
    '.txt', '.pdf'
]
pattern = '["\'][/]?((?:images|downloads)+[^"\']+?(?:{}))["\'?]'.format('|'.join(known_extensions))


def one_offs(walk_dir):
    print('walk_dir = ' + walk_dir)
    print('walk_dir (absolute) = ' + os.path.abspath(walk_dir))
    files_on_disk = set([])
    things_being_used = set([])

    for root, subdirs, files in os.walk(walk_dir):
        for filename in files:
            _, extension = os.path.splitext(filename)
            file_path = os.path.join(root, filename)

            if extension.lower() in known_extensions:
                #: put all the static assets in set
                parent = os.path.dirname(file_path).replace('./_site/', '')
                files_on_disk.add(os.path.join(parent, filename))

            if extension.lower() not in ['.html', '.htm', '.md']:
                continue

            with open(file_path, 'r') as original:
                file_content = ''
                for line_content in original.readlines():
                    file_content += line_content

                matches = re.findall(pattern, file_content, re.I | re.M | re.S)

                if matches:
                    [things_being_used.add(match) for match in matches]

    unused = files_on_disk - things_being_used
    pprint.pprint(unused, indent=2)
    print(len(things_being_used))
    print(len(files_on_disk))
    print(len(unused))

    for item in unused:
        destination = os.path.join('/Users/sgourley/Projects/agrc.github.io/timeout/', item)
        item = os.path.abspath(item)
        if os.path.exists(item):
            os.makedirs(destination)
            shutil.move(item, destination)


if __name__ == '__main__':
    # replace(sys.argv[1])
    one_offs(sys.argv[1])
