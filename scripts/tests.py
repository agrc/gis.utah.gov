import unittest
import cleanser
#: run with python -m unittest discover scripts

class TestCleanser(unittest.TestCase):

  def test_update_image_url(self):
    test = '<p>[image title="Students watch a portion of "The Geospatial Revolution" to learn about GIS." size="medium" align="left" icon="zoom" lightbox="true" quality="100"]/gallery/agrc-general/gis_day_slcc_2011.jpg[/image]For'
    valid = '<p><img src="{{ "/images/gallery/agrc-general/gis_day_slcc_2011.jpg" | prepend: site.baseurl }}" class="inline-text-left" />For'

    self.assertEqual(cleanser.update_image_tag(test), valid)

  def test_update_gallery_links(self):
    # self.fail('write a test')
    pass

  def test_update_css_links(self):
    # self.fail('write a test')
    pass

  def test_update_page_links(self):
    # self.fail('write a test')
    pass

  def test_update_download_asset_links(self):
    # self.fail('write a test')
    pass

  def test_update_data_page_buttons(self):
    test = '<a href="ftp://ftp.agrc.utah.gov" class="button medium white"><span class="button-text">Download Locators</span></a>'
    valid = '<a href="ftp://ftp.agrc.utah.gov" class="button medium white"><span class="button-text">Download Locators</span></a>'

    self.assertEqual(cleanser.update_data_download_button(test), valid)

  def test_captions(self):
    test = '<div class="caption"><img class="size-full wp-image-4794" src="{{ "/images/AddPointsGC2.png" | prepend: site.baseurl }}" alt="ChangeMeLarge"/><p class="caption-text">Concept of an Address Locator</p></div>'
    valid = '<div class="caption"><img class="size-full wp-image-4794" src="{{ "/images/AddPointsGC2.png" | prepend: site.baseurl }}" alt="ChangeMeLarge"/><p class="caption-text">Concept of an Address Locator</p></div>'

    self.assertEqual(cleanser.update_caption(test), valid)

    test = '<div class="caption"><img class="size-full wp-image-4794" src="{{ "/images/AddPointsGC2.png" | prepend: site.baseurl }}" alt="ChangeMeLarge"/></div>'
    valid = '<div class="caption"><img class="size-full wp-image-4794" src="{{ "/images/AddPointsGC2.png" | prepend: site.baseurl }}" alt="ChangeMeLarge"/></div>'

    self.assertEqual(cleanser.update_caption(test), valid)

    test = '<p>[caption id="attachment_18156" align="alignright" width="300" caption="The pendulum swings back and forth..."]<a href="{{ "/downloads/Screen-Shot-2015-11-27-at-12.39.23-PM.png" | prepend: site.baseurl }}"><img src="{{ "/images/Screen-Shot-2015-11-27-at-12.39.23-PM-300x220.png" | prepend: site.baseurl }}" alt="" title="The pendulum swings back and forth..." width="300" height="220" class="size-medium wp-image-18156" /></a>[/caption]</p>'
    valid = '<div class="caption"><a href="{{ "/downloads/Screen-Shot-2015-11-27-at-12.39.23-PM.png" | prepend: site.baseurl }}"><img src="{{ "/images/Screen-Shot-2015-11-27-at-12.39.23-PM-300x220.png" | prepend: site.baseurl }}" alt="" title="The pendulum swings back and forth..." width="300" height="220" class="size-medium wp-image-18156" /></a><p class="caption-text">The pendulum swings back and forth...</p></div>'

    self.assertEqual(cleanser.update_caption(test), valid)

  def test_half_columns(self):
    test = '''<div class="grid"><div class="grid__col grid__col--1-of-2">
    <h3>Overview</h3>
    </div>
    <div class="grid__col grid__col--1-of-2">
    <h3>SGID Datasets</h3>
    </div></div>'''
    valid = '''<div class="grid"><div class="grid__col grid__col--1-of-2">
    <h3>Overview</h3>
    </div>
    <div class="grid__col grid__col--1-of-2">
    <h3>SGID Datasets</h3>
    </div></div>'''

    self.assertEqual(cleanser.update_columns(test), valid)

  def test_divider(self):
    test = '<div class="divider"></div>'
    valid = '<div class="divider"></div>'

    self.assertEqual(cleanser.update_divider(test), valid)

    test = '<div class="divider-padding"></div>'
    valid = '<div class="divider-padding"></div>'

    self.assertEqual(cleanser.update_divider(test), valid)

    test = '<div class="divider-padding"></div>'

    self.assertEqual(cleanser.update_divider(test), valid)

  def test_icons(self):
    test = '<span class="icon-text icon-download"><a title="Download available HRO imagery" href="http://raster.utah.gov/?catGroup=HRO%202012%20(12.5cm),HRO%202012%20(1ft),HRO%202009%20(25cm),HRO%202006%20(25cm),HRO%202003%20(30cm)&title=Utah%20HRO%20Imagery">HRO Orthophotography Interactive Map</a></span><br />'
    valid = '<span class="icon-text icon-download"><a title="Download available HRO imagery" href="http://raster.utah.gov/?catGroup=HRO%202012%20(12.5cm),HRO%202012%20(1ft),HRO%202009%20(25cm),HRO%202006%20(25cm),HRO%202003%20(30cm)&title=Utah%20HRO%20Imagery">HRO Orthophotography Interactive Map</a></span><br />'

    self.assertEqual(cleanser.update_icons(test), valid)

    test = '<p><span class="icon-text icon-calendar">Last Update: March, 2013</span><br />'
    valid = '<p><span class="icon-text icon-calendar">Last Update: March, 2013</span><br />'

    self.assertEqual(cleanser.update_icons(test), valid)

  def test_tables(self):
    test = ' '
    valid = ' '

    self.assertEqual(cleanser.update_tables(test), valid)

    test = '<div class="table-style">'
    valid = '<div class="table-style">'

    self.assertEqual(cleanser.update_tables(test), valid)

    test = '<div class="table-style">'

    self.assertEqual(cleanser.update_tables(test), valid)

    test = '<div class="table-style">'

    self.assertEqual(cleanser.update_tables(test), valid)

    test = '</div>'
    valid = '</div>'

    self.assertEqual(cleanser.update_tables(test), valid)

  def maybelater_tabs(self):
        test = '<p><br />'
        valid = '<p><br />'
        self.assertEqual(cleanser.update_tabs(test), valid, msg='1')

        test = '<p><br />'
        self.assertEqual(cleanser.update_tabs(test), valid, msg='2')

        test = '<p></p>'
        valid = '<p></p>'
        self.assertEqual(cleanser.update_tabs(test), valid, msg='3')

        test = '<p><br />'
        valid = '<p><br />'
        self.assertEqual(cleanser.update_tabs(test), valid, msg='4')

        test = '<p> </p>'
        valid = '<p> </p>'
        self.assertEqual(cleanser.update_tabs(test), valid)

        test = '<p></p>'
        valid = '<p></p>'
        self.assertEqual(cleanser.update_tabs(test), valid, msg='6')

        test = 'This dataset was last updated in 2002.</p>'
        valid = 'This dataset was last updated in 2002.</p>'
        self.assertEqual(cleanser.update_tabs(test), valid)

        test = '<h5 class="tab-title">Contact</h5><br />'
        valid = '<h5 class="tab-title">Contact</h5>'
        self.assertEqual(cleanser.update_tabs(test), valid)

        test = '<h5 class="tab-title">Contact</h5><br />'
        self.assertEqual(cleanser.update_tabs(test), valid)

  def create_data_package_page(self):
      from os.path import join, dirname
      file_path = join(dirname(__file__), 'data', 'index.html')
      with open (file_path, 'r') as test_file, open(file_path.replace('index.html', 'testoutput.html'), 'wb') as updated:
          file_content = []
          for line_content in test_file.readlines():
              file_content.append(line_content)

          replaced = cleanser.update_tabs(file_content)
          updated.writelines(replaced)

  def test_get_tags(self):
      from os.path import join, dirname
      file_path = join(dirname(__file__), 'data', 'index.html')
      with open (file_path, 'r') as test_file, open(file_path.replace('index.html', 'testoutput.html'), 'wb') as updated:
          file_content = ''
          for line_content in test_file.readlines():
              file_content += line_content

          tags = set([])
          cleanser.get_unique_tags(file_content, tags)

          post_tags = [
            'sgid',
            'Data',
            'utah',
            'gis',
            'map',
            'mapping',
            'address ranges',
            'Transportation',
            'Roads',
            'Streets',
            'address',
            'dataset',
            'download',
            'agrc',
            'layer',
            'shapefile',
            'geodatabase',
            'metadata',
            'shp',
            'gdb',
            'kml',
            'lyr',
            'digital',
            'geographic',
            'information',
            'database',
            'state',
            'statewide',
            'highway',
            'freeway',
            'centerlines',
            'udot',
            'tiger',
            'fhwsa',
            'gis-t',
            'routes',
            'county',
            'city',
            'b roads',
            'd roads',
            'cfcc',
            'alignment'
          ]

      self.assertSetEqual(tags, set(post_tags))
