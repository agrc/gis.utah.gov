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
pattern = 'mailto:\\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}\\b'


def one_offs(walk_dir):
    print('walk_dir = ' + walk_dir)
    print('walk_dir (absolute) = ' + path.abspath(walk_dir))
    unique_emails = set([])

    for root, subdirs, files in walk(walk_dir):
        if (root.startswith(walk_dir + 'images') or
           root.startswith(walk_dir + '_site') or
           root.startswith(walk_dir + 'downloads') or
           root.startswith(walk_dir + '.git') or
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

                matches = re.findall(pattern, file_content, re.I | re.M | re.S)
                if matches:
                    print(matches)
                    [unique_emails.add(match) for match in matches]

    return unique_emails


if __name__ == '__main__':
    # replace(sys.argv[1])
    print(one_offs(sys.argv[1]))
