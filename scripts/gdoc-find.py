#!/usr/bin/env python
# * coding: utf8 *
'''
email.py
A module that finds all of the unique email addresses in our website
'''

import re
import sys
from os import path
from os import walk

known_extensions = ['.html', '.htm', '.md']
pattern = r'(:\/\/docs.google.com.*?)[\"|\'|>|\]|\)]'


def one_offs(walk_dir):
    things = set([])

    for root, subdirs, files in walk(walk_dir):
        if (root.startswith(walk_dir + 'images') or
           root.startswith(walk_dir + '_site') or
           root.startswith(walk_dir + 'downloads') or
           root.startswith(walk_dir + '.git') or
           root.startswith(walk_dir + 'node_modules') or
           root.startswith(walk_dir + 'bower_components') or
           root.startswith(walk_dir + '.grunt')):
            continue

        for filename in files:
            _, extension = path.splitext(filename)
            file_path = path.join(root, filename)

            if extension.lower() not in known_extensions:
                continue

            with open(file_path, 'r') as original:
                file_content = ''
                for line_content in original.readlines():
                    file_content += line_content

                matches = re.finditer(pattern, file_content, re.I | re.M | re.S)
                for index, match in enumerate(matches):
                    things.add((match.group(1), file_path.replace('./', 'https://github.com/agrc/gis.utah.gov/blob/master/', 1)))

    return things


if __name__ == '__main__':
    # replace(sys.argv[1])
    items = one_offs(sys.argv[1])
    print(items)
    print(len(items))
