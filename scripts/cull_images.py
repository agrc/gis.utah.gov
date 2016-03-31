import os
import sys
import re

image_extensions = ['.png_backup', '.jpg', '.xml', '.idx', '.jpeg',
                    '.htm', '.bak', '.sample', '.gif', '.jpg_backup',
                    '.scss', '.svg', '.pack', '.doc', '.bmp', '.js',
                    '.png', '.json', '.css', '.m4v', '.ico', '.txt',
                    '.html', '.pdf']


def one_offs(walk_dir):
    print('walk_dir = ' + walk_dir)
    print('walk_dir (absolute) = ' + os.path.abspath(walk_dir))
    files_on_disk = set([])

    for root, subdirs, files in os.walk(walk_dir):
        if (root.startswith(walk_dir + '_site') or
                root.startswith(walk_dir + 'node_modules') or
                root.startswith(walk_dir + 'bower_components') or
                root.startswith(walk_dir + '_sass') or
                root.startswith(walk_dir + 'scripts') or
                root.startswith(walk_dir + '.grunt')):
            continue

        for filename in files:
            _, extension = os.path.splitext(filename)
            file_path = os.path.join(root, filename)

            if extension.lower() in image_extensions:
                #: put all the static assets in set
                files_on_disk.add(file_path)

            if extension.lower() not in ['.html', '.md']:
                continue

            #
            # print('\t- file %s (full path: %s)' % (filename, file_path))
            #
            with open(file_path, 'r') as original:
                file_content = []
                for line_content in original.readlines():
                    assets = find_assets(line_content)


if __name__ == '__main__':
    # replace(sys.argv[1])
    one_offs(sys.argv[1])
