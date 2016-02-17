import unittest
import cleanser
#: run with python -m unittest discover scripts

class TestCleanser(unittest.TestCase):

  def test_update_image_url(self):
    # self.fail('write a test')
    pass

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
    test = '[button size="medium" color="white" textColor="#923922" link="ftp://ftp.agrc.utah.gov"]Download Locators[/button]'
    valid = '<a href="ftp://ftp.agrc.utah.gov" class="button medium white"><span class="button-text">Download Locators</span></a>'

    self.assertEqual(cleanser.update_data_download_button(test), valid)

  def test_captions(self):
    test = '<p>[caption id="attachment_4794" align="alignright" width="256" caption="Concept of an Address Locator"]<img class="size-full wp-image-4794" src="{{ "/images/AddPointsGC2.png" | prepend: site.baseurl }}" alt="ChangeMeLarge"/>[/caption]</p>'
    valid = '<div class="caption"><img class="size-full wp-image-4794" src="{{ "/images/AddPointsGC2.png" | prepend: site.baseurl }}" alt="ChangeMeLarge"/><p class="caption-text">Concept of an Address Locator</p></div>'

    self.assertEqual(cleanser.update_caption(test), valid)

    test = '<p>[caption id="attachment_4794" align="alignright" width="256" caption=]<img class="size-full wp-image-4794" src="{{ "/images/AddPointsGC2.png" | prepend: site.baseurl }}" alt="ChangeMeLarge"/>[/caption]</p>'
    valid = '<div class="caption"><img class="size-full wp-image-4794" src="{{ "/images/AddPointsGC2.png" | prepend: site.baseurl }}" alt="ChangeMeLarge"/></div>'

    self.assertEqual(cleanser.update_caption(test), valid)


  def test_half_columns(self):
    test = '''<p>[one_half]</p>
    <h3>Overview</h3>
    <p>[/one_half]</p>
    <p>[one_half_last]</p>
    <h3>SGID Datasets</h3>
    [/one_half_last]</p>'''
    valid = '''<div class="grid"><div class="grid__col grid__col--1-of-2">
    <h3>Overview</h3>
    </div>
    <div class="grid__col grid__col--1-of-2">
    <h3>SGID Datasets</h3>
    </div></div>'''

    self.assertEqual(cleanser.update_columns(test), valid)

  def test_divider(self):
    test = '<p>[divider_advanced color="#C36E00" paddingTop="2" paddingBottom="2"]</p>'
    valid = '<div class="divider"></div>'

    self.assertEqual(cleanser.update_divider(test), valid)

    test = '<p>[divider_padding]<br />'
    valid = '<div class="divider-padding"></div>'

    self.assertEqual(cleanser.update_divider(test), valid)

    test = '<p>[divider_padding]</p>'

    self.assertEqual(cleanser.update_divider(test), valid)

  def test_icons(self):
    test = '[icon_link style="download" color="gray" href="Link" target="_self"]<a title="Download available HRO imagery" href="http://raster.utah.gov/?catGroup=HRO%202012%20(12.5cm),HRO%202012%20(1ft),HRO%202009%20(25cm),HRO%202006%20(25cm),HRO%202003%20(30cm)&title=Utah%20HRO%20Imagery">HRO Orthophotography Interactive Map</a>[/icon_link]<br />'
    valid = '<span class="icon-text icon-download"><a title="Download available HRO imagery" href="http://raster.utah.gov/?catGroup=HRO%202012%20(12.5cm),HRO%202012%20(1ft),HRO%202009%20(25cm),HRO%202006%20(25cm),HRO%202003%20(30cm)&title=Utah%20HRO%20Imagery">HRO Orthophotography Interactive Map</a></span><br />'

    self.assertEqual(cleanser.update_icons(test), valid)

    test = '<p>[icon style="calendar" color="gray"]Last Update: March, 2013[/icon]<br />'
    valid = '<p><span class="icon-text icon-calendar">Last Update: March, 2013</span><br />'

    self.assertEqual(cleanser.update_icons(test), valid)
