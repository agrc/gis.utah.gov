import unittest
import cleanser
#: run with python -m unittest discover scripts

class TestCleanser(unittest.TestCase):

  def test_update_image_url(self):
    self.fail('write a test')

  def test_update_gallery_links(self):
    self.fail('write a test')

  def test_update_css_links(self):
    self.fail('write a test')

  def test_update_page_links(self):
    self.fail('write a test')

  def test_update_download_asset_links(self):
    self.fail('write a test')

  def test_update_data_page_buttons(self):
    test = '[button size="medium" color="white" textColor="#923922" link="ftp://ftp.agrc.utah.gov"]Download Locators[/button]'
    valid = '<a href="ftp://ftp.agrc.utah.gov" class="button medium white"><span class="button-text">Download Locators</span></a>'

    self.assertEqual(cleanser.update_data_download_button(test), valid)
