---
status: publish
layout: page
tags:
  - dem
  - lidar
  - elevation
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
published: true
date: 2019-06-26 12:30:30
title: 2015 Zion National Park LiDAR Elevation Data
categories: []
---

![Sample]({% link images/lidar_zion_np_2015.png %}){: .flex .flex--center .outline }

[![Project area map]({% link images/lidar_zion_np_2015_coverage_sm.png %} "click for map")]({% link images/lidar_zion_np_2015_coverage.png %}){:.inline-text-right}

{%- capture contact -%}
{%- include contact.html subject=page.title contact=site.data.contacts.elevation text='or by request from' -%}
{%- endcapture -%}
During 2015 and 2016 the U.S. Geological Survey and the U.S. Park Service acquired [~239 square miles]({% link images/lidar_zion_np_2015_coverage.png %}) of 2 and 8 points per meter Quality Level 1 & 2 LiDAR for Zion National Park in Utah. The .5 and 1 meter resolution bare earth DEMs '.img' format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS point clouds, classified to ground, low, medium, and high vegetation, are available from [The National Map](https://apps.nationalmap.gov/downloader) {{ contact }} This elevation data was collected between November 2015 and July 2016 and has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12B) projection.

<ul class="dotless">
  <li>
    <strong>
      {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} <a href="https://raster.utah.gov/?catGroup=.5%20Meter%20%7B2015%20Zion%20NP%20LiDAR%7D,1%20Meter%20%7B2015%20Zion%20NP%20LiDAR%7D&title=Zion%20National%20Park%202015%20LiDAR" target="_blank">Retrieve 2015 Bare Earth DEMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/zion-np-2016/ZionNP_2015_Reports.zip" target="_blank">Reports</a> and
      <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/zion-np-2016/ZionNP_2015_Metadata.zip" target="_blank">Metadata</a>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/zion-np-2016/ZionNP_2015_shps.zip" target="_blank">shapefiles</a> of project area, tile indices, and breaklines
  </li>
  <li>
      {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download <a href="ftp://rockyftp.cr.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/USGS_LPC_UT_ZionNP_QL1_2016_LAS_2017/" target="_blank">QL1 Point Clouds</a> from the USGS FTP site
  </li>
  <li>
      {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download <a href="ftp://rockyftp.cr.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/USGS_LPC_UT_ZionNP_QL2_2016_LAS_2017/" target="_blank">QL2 Point Clouds</a> from the USGS FTP site
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)](https://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12B) projection.

{% include contact.html subject=page.title contact=site.data.contacts.elevation %}
