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
date: 2017-11-13 15:30:30
title: 2017 Washington County LiDAR Elevation Data
categories: []
---

<style type="text/css">
#logo {
  max-width: 400px;
  margin: 0 auto;
}
</style>
<div id="logo">
  <img src="{{ "/images/lidar_washington_co.PNG" | prepend: site.baseurl }}" alt="Sample" />
</div>

[![Project area map]({{"/images/lidar_washington_co_coverage_sm.png" | prepend:site.baseurl}} "click for map")]({{"/images/lidar_washington_co_coverage.png" | prepend:site.baseurl}}){:.inline-text-right}

{%capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.elevation text='by request from' hide-punctuation=true %}{% endcapture %}

During the Spring of 2017 AGRC, Washington County, and the Utah Department of Emergency Management acquired [~516 square miles]({{ "/images/lidar_washington_co_coverage.png/" | prepend: site.baseurl }}) of 2 points per meter Quality Level 2 LiDAR of areas within Washington County in Southwestern Utah. The 1 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .img format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS classified point clouds are also available {{ data | strip_newlines }} and eventually from [Open Topography](http://www.opentopography.org/). This elevation data was collected between January and July, 2017 and has a UTM NAD83 (2011) zone 12 north meter NAVD88(GEOID12) projection.

<ul class="dotless">
  <li>
    <strong>
      <i class="fas fa-download"></i> <a href="https://raster.utah.gov/?cat=1%20Meter%20%7B2017%20LiDAR%7D">Retrieve 2017 Bare Earth DEMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    <i class="fas fa-download"></i> Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/washington-county-2017/DEMs/WashingtonCo_Reports.zip">Reports</a> and
      <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/washington-county-2017/DEMs/WashingtonCo_Metadata.zip">Metadata</a>
  </li>
  <li>
    <i class="fas fa-download"></i> Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/washington-county-2017/DEMs/WashingtonCo_shps.zip">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)]( http://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection

{% capture elevation %}{% include contact.html subject=page.title contact=site.data.contacts.elevation %}{% endcapture %}
{{ elevation | strip_newlines }}
