import os
import sys

walk_dir = sys.argv[1]

print('walk_dir = ' + walk_dir)
print('walk_dir (absolute) = ' + os.path.abspath(walk_dir))

for root, subdirs, files in os.walk(walk_dir):
    if root.startswith(walk_dir + 'images') or root.startswith(walk_dir + '_site'):
        continue

    for filename in files:
        if os.path.splitext(filename)[1][1:].strip().lower() != 'html':
            continue
        file_path = os.path.join(root, filename)

        print('\t- file %s (full path: %s)' % (filename, file_path))

        # with open(file_path, 'rb') as f:
        #     f_content = f.read()
        #     list_file.write(('The file %s contains:\n' % filename).encode('utf-8'))
        #     list_file.write(f_content)
        #     list_file.write(b'\n')
