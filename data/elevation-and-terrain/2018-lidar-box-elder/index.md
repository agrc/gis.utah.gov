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
date: 2019-06-23 12:30:30
title: 2018 Box Elder County LiDAR Elevation Data
categories: []
---

![Sample]({% link images/lidar_box_elder_2018.png %}){: .flex .flex--center .outline }

[![Project area map]({% link images/lidar_box_elder_2018_coverage_sm.png %} "click for map")]({% link images/lidar_box_elder_2018_coverage.png %}){:.inline-text-right}

{%- capture contact -%}
{%- include contact.html subject=page.title contact=site.data.contacts.elevation text='or by request from' -%}
{%- endcapture -%}
During 2018 UGRC, the Natural Resource Conservation Service (NRCS), and the Utah Geological Survey (UGS) acquired [~2,271 square miles]({% link images/lidar_box_elder_2018_coverage.png %}) of 8 points per meter Quality Level 1 LiDAR for areas in Northern Utah. The .5 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .tif format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS point clouds, classified to ground, are available from [The National Map](https://apps.nationalmap.gov/downloader) {{ contact }} This elevation data was collected between April and October, 2018 and has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection.

<ul class="dotless">
  <li>
    <strong>
      {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} <a href="https://raster.utah.gov/?cat=.5%20Meter%20%7B2018%20Box%20Elder%20LiDAR%7D" target="_blank">Retrieve 2018 Bare Earth DEMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/box-elder-2018/BoxElder_2018_Reports.zip" target="_blank">Reports</a> and <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/box-elder-2018/BoxElder_2018_Metadata.zip" target="_blank">Metadata</a>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/box-elder-2018/BoxElder_2018_shps.zip" target="_blank">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)](https://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection.

{% include contact.html subject=page.title contact=site.data.contacts.elevation %}
