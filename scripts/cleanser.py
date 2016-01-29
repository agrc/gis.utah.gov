import os
import sys
import re


image_re = re.compile(r'src=["\']http://gis.utah.gov/wp-content/uploads/(.*?)["\']')
gallery_re = re.compile(r'src=["\']http://gis.utah.gov/gallery/(.*?)["\']')
downloads_re = re.compile(r'["\']/wp-content/uploads/(.*?)["\']')
css_re = re.compile(r'url\(["\']http://gis.utah.gov/wp-content/uploads/(.*?)["\']\)')
link_re = re.compile(r'href=["\']http://gis.utah.gov/(.*?)["\']')
button_re = re.compile(r'\[button size="medium" color="white" textColor="#923922" link="(.*?)"\](Download.*?)\[/button\]')

def replace(dir):
  walk_dir = sys.argv[1]

  print('walk_dir = ' + walk_dir)
  print('walk_dir (absolute) = ' + os.path.abspath(walk_dir))

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
                  replaced = update_image_url(line_content)
                  replaced = update_gallery_links(replaced)
                  replaced = update_css_links(replaced)
                  replaced = update_page_links(replaced)
                  replaced = update_download_asset_links(replaced)

                  updated.write(replaced)

          os.rename(file_path + '.bak', file_path)


def update_image_url(content):
  return image_re.sub('src="{{ "/images/\g<1>" | prepend: site.baseurl }}"', content)

def update_gallery_links(content):
  return gallery_re.sub('src="{{ "/images/gallery/\g<1>" | prepend: site.baseurl }}"', content)

def update_css_links(content):
  return css_re.sub('url(../images/\g<1>)', content)

def update_page_links(content):
  return link_re.sub('href="{{ "/\g<1>" | prepend: site.baseurl }}"', content)

def update_download_asset_links(content):
  return downloads_re.sub('"/downloads/\g<1>"', content)

def update_data_download_button(content):
  return button_re.sub('<a href="\g<1>" class="button medium white"><span class="button-text">\g<2></span></a>', content)
