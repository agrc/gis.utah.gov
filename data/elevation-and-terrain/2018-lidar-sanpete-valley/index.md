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
date: 2019-06-24 12:30:30
title: 2018 Sanpete Valley LiDAR Elevation Data
categories: []
---

<style type="text/css">
#logo {
  max-width: 400px;
  margin: 0 auto;
}
</style>
<div id="logo">
  <img src="{{ "/images/lidar_sanpete_valley_2018.png" | prepend: site.baseurl }}" alt="Sample" />
</div>

[![Project area map]({{"/images/lidar_sanpete_valley_2018_coverage_sm.png" | prepend:site.baseurl}} "click for map")]({{"/images/lidar_sanpete_valley_2018_coverage.png" | prepend:site.baseurl}}){:.inline-text-right}

{% capture pcloud-dload %}{% include contact.html subject=page.title contact=site.data.contacts.elevation text='by request. Reach out to'%}{% endcapture %}

During 2018 AGRC, the Natural Resource Conservation Service (NRCS), and the Utah Geological Survey (UGS) acquired [~440 square miles]({{ "/images/lidar_sanpete_valley_2018_coverage.png/" | prepend: site.baseurl }}) of 2 and 8 points per meter Quality Level 1 & 2 LiDAR for areas in Northern Utah. The .5 and 1 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .tif format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS point clouds, classified to ground, are also available {{ pcloud-dload | strip_newlines }} This elevation data was collected between April and October, 2018 and has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection.

<ul class="dotless">
  <li>
    <strong>
      <i class="fa fa-download"></i> <a href="https://raster.utah.gov/?cat=.5%20Meter%20%7B2017%20Box%20Elder%20LiDAR%7D" target="_blank">Retrieve 2018 Bare Earth DEMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    <i class="fa fa-download"></i> Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/sanpete-valley-2018/SanpeteValley_2018_Reports.zip" target="_blank">Reports</a> and
      <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/sanpete-valley-2018/SanpeteValley_2018_Metadata.zip" target="_blank">Metadata</a>
  </li>
  <li>
    <i class="fa fa-download"></i> Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/sanpete-valley-2018/SanpeteValley_2018_shps.zip" target="_blank">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)](https://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection

{% capture elevation %}{% include contact.html subject=page.title contact=site.data.contacts.elevation %}{% endcapture %} {{ elevation | strip_newlines }}
