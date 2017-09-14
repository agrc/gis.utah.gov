---
status: publish
layout: page
tags:
  - dem
  - lidar
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
published: true
date: 2017-11-1 23:29:51
title: 2015 Colorado, Green, and Yampa Rivers LiDAR Elevation Data
categories: []
---

<style type="text/css">
#logo {
  max-width: 400px;
  margin: 0 auto;
}
</style>
<div id="logo">
  <img src="{{ "/images/lidar_rivers.PNG" | prepend: site.baseurl }}" alt="Sample" />
</div>

[![Project area map]({{"/images/lidar_rivers_coverage_sm.png" | prepend:site.baseurl}} "click for map")]({{"/images/lidar_rivers_coverage.png" | prepend:site.baseurl}}){:.inline-text-right}

During late Fall of 2015 the Utah Division of Foresty, Fire & State Lands and the U.S. National Park Service acquired [~152 square miles]({{ "/images/lidar_rivers_coverage.png/" | prepend: site.baseurl }}) covering ~680 river miles of 8 points per meter LiDAR of the Colorado, Green, and Yampa rivers in Utah and Colorado. The LiDAR collection is mainly of the river course and not the surounding canyons. A small ~.8 square mile area was also collected in Arches N.P. The .5 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .tif format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS classified point clouds are also available [by request](mailto:buckehler@utah.gov). This elevation data was collected October and November of 2015 during low flow conditions.

<ul class="dotless">
  <li>
    <strong>
      <i class="fa fa-download"></i> <a href="http://raster.utah.gov/?cat=.5%20Meter%20%7B2015%20LiDAR%7D">Retrieve 2015 Bare Earth DEMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    <i class="fa fa-download"></i> Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/colorado-green-rivers-2015/DEMs/Rivers_Reports.zip">Reports</a> and
      <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/colorado-green-rivers-2015/DEMs/Rivers_Metadata.zip">Metadata</a>
  </li>
  <li>
    <i class="fa fa-download"></i> Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/colorado-green-rivers-2015/DEMs/Rivers_shps.zip">shapefiles</a> of the project area, tile indices, breaklines, and river centerlines
  </li>
</ul>

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection

{% capture lidar %}{% include contact.html subject=page.title contact=site.data.contacts.lidar_rivers %}{% endcapture %}
{{ lidar | strip_newlines }}
