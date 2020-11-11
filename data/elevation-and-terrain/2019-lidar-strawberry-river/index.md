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
date: 2019-12-31 12:30:30
title: 2019 Strawberry River LiDAR Elevation Data
categories: []
---

![Sample]({% link images/lidar_strawberry_river_2019.png %}){: .flex .flex--center .outline }

[![Project area map]({% link images/lidar_strawberry_river_2019_coverage_sm.png %} "click for map")]({% link images/lidar_strawberry_river_2019_coverage.png %}){:.inline-text-right}

{%- capture contact -%}
{%- include contact.html subject=page.title contact=site.data.contacts.elevation text='or by request from' -%}
{%- endcapture -%}
During 2019 AGRC and the Utah Reclamation Mitigation Conservation Commission (URMCC) acquired [~92 square miles]({% link images/lidar_strawberry_river_2019_coverage.png %}) of 8 points per meter Quality Level 1 LiDAR and 10cm 4-band aerial photography of the Strawberry River, from Soldier Creek Dam to The Pinnacles, after the [Dollar Ridge Fire](https://inciweb.nwcg.gov/incident/5881/) in 2018. The .5 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .tif format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS point clouds, colorized and classified to ground, are available from [The National Map](https://viewer.nationalmap.gov/basic/) {{ contact }} This elevation data was collected August 15-18, 2019 and has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection.

<ul class="dotless">
  <li>
    <strong>
      <i class="fa fa-download"></i> <a href="https://raster.utah.gov/?catGroup=.5%20Meter%20%7B2019%20Strawberry%20River%20LiDAR%7D,HRO%202019%20(10cm)&title=2019%20Strawberry%20River%20Lidar%20DEMs%20and%20Aerial%20Photography" target="_blank">Retrieve 2019 Bare Earth DEMs, First Return DSMs, and Aerial Photography via Interactive Map</a>
    </strong>
  </li>
  <li>
    <i class="fa fa-download"></i> Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/strawberry-river-2019/StrawberryRiver_2019_Reports.zip" target="_blank">Reports</a> and <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/strawberry-river-2019/StrawberryRiver_2019_Metadata.zip" target="_blank">Metadata</a>
  </li>
  <li>
    <i class="fa fa-download"></i> Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/strawberry-river-2019/StrawberryRiver_2019_shps.zip" target="_blank">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)](https://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection.

{% include contact.html subject=page.title contact=site.data.contacts.elevation %}
