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

  def test_half_columns(self):
    test = '<p>[one_half]</p><h3>Overview</h3><p>[/one_half]</p><p>[one_half_last]</p><h3>SGID Datasets</h3>[/one_half_last]</p>'
    valid = '<div class="grid"><div class="grid__col grid__col--1-of-2"><h3>Overview</h3></div><div class="grid__col grid__col--1-of-2"><h3>SGID Datasets</h3></div></div>'

    self.assertEqual(cleanser.update_columns(test), valid)
