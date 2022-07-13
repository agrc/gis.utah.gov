---
title: 2016 Bear Lake, Bear River, Cache Valley, and Upper Weber Valley LiDAR Elevation Data
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
date: 2017-11-13 15:30:30
categories: []
tags:
  - dem
  - lidar
---

![Sample]({% link images/lidar_blbrcvuwv.png %}){: .flex .flex--center .outline }

[![Project area map]({% link images/lidar_blbrcvuwv_coverage_sm.png %} "click for map")]({% link images/lidar_blbrcvuwv_coverage.png %}){:.inline-text-right}

{%- capture contact -%}
{%- include contact.html subject=page.title contact=site.data.contacts.elevation text='or by request from' -%}
{%- endcapture -%}
During the Fall of 2016 UGRC, Cache and Weber County, and the Utah Department of Emergency Management acquired [~790 square miles]({% link images/lidar_blbrcvuwv_coverage.png %}) of 8 points per meter Quality Level 1 LiDAR. The project areas cover the Cache Valley, Upper Weber Valley, Bear River from Cache County to the Great Salt Lake, and the Bear Lake shoreline. The .5 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .img format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS classified point clouds are also available from [The National Map](https://apps.nationalmap.gov/downloader), [Open Topography](https://portal.opentopography.org/lidarDataset?opentopoID=OTLAS.092018.6341.1), {{ contact }} This elevation data was collected between September, 2016 and November, 2017 and has a UTM NAD83 (2011) zone 12 north meter NAVD88(GEOID12) projection.

<ul class="dotless">
  <li>
    <strong>
      {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} <a href="https://raster.utah.gov/?cat=.5%20Meter%20%7B2016%20LiDAR%7D">Retrieve 2016 Bare Earth DEMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/cache-valley-2016/DEMs/BLBRCVUWV_Reports.zip">Reports</a> and <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/cache-valley-2016/DEMs/BLBRCVUWV_Metadata.zip">Metadata</a>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/cache-valley-2016/DEMs/BLBRCVUWV_shps.zip">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)](https://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection.

{% include contact.html subject=page.title contact=site.data.contacts.elevation %}
