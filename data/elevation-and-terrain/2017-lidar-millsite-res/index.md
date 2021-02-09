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
![Sample]({% link images/lidar_millsite.png %}){: .flex .flex--center .outline }

[![Project area map]({% link images/lidar_millsite_coverage_sm.png %} "click for map")]({% link images/lidar_millsite_coverage.png %}){:.inline-text-right}

{%- capture contact -%}
{%- include contact.html subject=page.title contact=site.data.contacts.elevation text='or by request from' -%}
{%- endcapture -%}
During the Fall of 2017 AGRC and the U.S. Department of Agriculture, Natural Resources Conservation Service acquired [~13 square miles]({% link images/lidar_millsite_coverage.png %}) of 8 points per meter Quality Level 1 LiDAR of Millsite Reservoir, Utah. The .5 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .img format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS classified point clouds are available from [The National Map](https://apps.nationalmap.gov/downloader), [Open Topography](http://opentopo.sdsc.edu/lidarDataset?opentopoID=OTLAS.092018.6341.1), {{ contact }} This elevation data was collected October 21 and 25, 2017 when the reservoir was drained and has a UTM NAD83 (2011) zone 12 north meter NAVD88(GEOID12) projection.

<ul class="dotless">
  <li>
    <strong>
      <i class="fas fa-download"></i> <a href="https://raster.utah.gov/?cat=.5%20Meter%20%7B2017%20Millsite%20Reservoir%20LiDAR%7D">Retrieve 2017 Bare Earth DEMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    <i class="fas fa-download"></i> Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/millsite-reservoir-2017/DEMs/MillsiteReservoir_Report.zip">Reports</a> and <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/millsite-reservoir-2017/DEMs/MillsiteReservoir_Metadata.zip">Metadata</a>
  </li>
  <li>
    <i class="fas fa-download"></i> Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/millsite-reservoir-2017/DEMs/MillsiteReservoir_shps.zip">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)](https://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection.

{% include contact.html subject=page.title contact=site.data.contacts.elevation %}
