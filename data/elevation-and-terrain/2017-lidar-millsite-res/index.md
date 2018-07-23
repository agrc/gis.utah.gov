---
tags:
  - dem
  - lidar
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
date: 2018-7-23 23:29:51
title: 2017 Millsite Reservoir LiDAR Elevation Data
categories: []
---
<img class="flex flex--center outline" src="{{ "/images/lidar_millsite.PNG" | prepend: site.baseurl }}" alt="Sample" />

[![Project area map]({{"/images/lidar_millsite_coverage_sm.png" | prepend:site.baseurl}} "click for map")]({{"/images/lidar_millsite_coverage.png" | prepend:site.baseurl}}){:.inline-text-right}

{%capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.elevation text='by request from' hide-punctuation=true %}{% endcapture %}

During the Fall of 2017 AGRC and the U.S. Department of Agriculture, Natural Resources Conservation Service acquired [~13 square miles]({{ "/images/lidar_millsite_coverage.png/" | prepend: site.baseurl }}) of 8 points per meter Quality Level 1 LiDAR of Millsite Reservoir, Utah. The .5 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .img format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS classified point clouds are also available {{ contact | strip_newlines }} or [The National Map](https://viewer.nationalmap.gov/basic/). This elevation data was collected October 21 and 25, 2017 when the reservoir was drained and has a UTM NAD83 (2011) zone 12 north meter NAVD88(GEOID12) projection.

<ul class="dotless">
  <li>
    <strong>
      <i class="fas fa-download"></i> <a href="https://raster.utah.gov/?cat=.5%20Meter%20%7B2017%20LiDAR%7D">Retrieve 2017 Bare Earth DEMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    <i class="fas fa-download"></i> Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/millsite-reservoir-2017/DEMs/MillsiteReservoir_Report.zip">Reports</a> and
      <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/millsite-reservoir-2017/DEMs/MillsiteReservoir_Metadata.zip">Metadata</a>
  </li>
  <li>
    <i class="fas fa-download"></i> Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/MillsiteReservoir-2017/DEMs/MillsiteReservoir_shps.zip">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)]( https://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection

{% capture elevation %}{% include contact.html subject=page.title contact=site.data.contacts.elevation %}{% endcapture %}
{{ elevation | strip_newlines }}
