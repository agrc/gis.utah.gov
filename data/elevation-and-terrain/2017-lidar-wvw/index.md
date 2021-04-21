---
tags:
  - dem
  - lidar
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
date: 2017-10-19 23:29:51
title: 2017 Washakie and Whites Valley LiDAR Elevation Data
categories: []
---

![Sample]({% link images/lidar_wvw.png %}){: .flex .flex--center .outline }

[![Project area map]({% link images/lidar_wvw_coverage_sm.png %} "click for map")]({% link images/lidar_wvw_coverage.png %}){:.inline-text-right}

{%- capture contact -%}
{%- include contact.html subject=page.title contact=site.data.contacts.elevation text='or by request from' -%}
{%- endcapture -%}
During the Spring of 2017 AGRC and the Utah Department of Natural Resources, Division of Water Resources acquired [~28 square miles]({% link images/lidar_wvw_coverage.png %}) of 8 points per meter Quality Level 1 LiDAR of Washakie, Utah and Whites Valley in Northern Utah. The .5 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .img format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS classified point clouds are available from [The National Map](https://apps.nationalmap.gov/downloader), [Open Topography](http://opentopo.sdsc.edu/lidarDataset?opentopoID=OTLAS.092018.6341.1), {{ contact }} This elevation data was collected April 15-16, 2017 and has a UTM NAD83 (2011) zone 12 north meter NAVD88(GEOID12) projection.

<ul class="dotless">
  <li>
    <strong>
      {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} <a href="https://raster.utah.gov/?cat=.5%20Meter%20%7B2017%20Washakie%20and%20Whites%20Valley%20LiDAR%7D">Retrieve 2017 Bare Earth DEMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/washakie-whites-valley-2017/DEMs/Washakie_WhitesValley_Report.zip">Reports</a> and <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/washakie-whites-valley-2017/DEMs/Metadata_ProjectLevel.zip">Metadata</a>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/washakie-whites-valley-2017/DEMs/Washakie_WhitesValley_shps.zip">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)](https://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection.

{% include contact.html subject=page.title contact=site.data.contacts.elevation %}
