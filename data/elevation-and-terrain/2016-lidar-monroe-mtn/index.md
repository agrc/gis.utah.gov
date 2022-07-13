---
tags:
  - dem
  - lidar
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
date: 2017-05-22 23:29:51
title: 2016 Monroe Mountain LiDAR Elevation Data
categories: []
---

![Sample]({% link images/lidar_monroe.PNG %}){: .flex .flex--center .outline }

[![Project area map]({% link images/lidar_monroe_coverage_sm.png %} "click for map")]({% link images/lidar_monroe_coverage.png %}){:.inline-text-right}

{%- capture contact -%}
{%- include contact.html subject=page.title contact=site.data.contacts.elevation text='or by request from' -%}
{%- endcapture -%}
During the Summer of 2016 UGRC and the U.S. Forest Service acquired [292 square miles]({% link images/lidar_monroe_coverage.png %}) of 8 points per meter Quality Level 1 LiDAR on Monroe Mountain in central Utah. The acquisition took place with leaf-on conditions to model the forest canopy in addition to ground elevations. The .5 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .tif format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS classified point clouds are available from [The National Map](https://apps.nationalmap.gov/downloader), [Open Topography](https://portal.opentopography.org/lidarDataset?opentopoID=OTLAS.092018.6341.1), {{ contact }} This elevation data was collected between Aug. 27 and Sept. 11, 2016 and has a UTM NAD83 (2011) zone 12 north meter NAVD88(GEOID12) projection.

<ul class="dotless">
  <li>
    <strong>
      {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} <a href="https://raster.utah.gov/?cat=.5%20Meter%20%7B2016%20LiDAR%7D">Retrieve 2016 Bare Earth DEMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/monroe-mtn-2016/DEMs/MonroeMtn_2016_Report.zip">Reports</a> and <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/monroe-mtn-2016/DEMs/MonroeMtn_2016_Metadata.zip">Metadata</a>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/monroe-mtn-2016/DEMs/MonroeMtn_2016_shp.zip">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)](https://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection.

{% include contact.html subject=page.title contact=site.data.contacts.elevation %}

<div id="logo">
  <img src="{% link images/monroe_DEM.png %}" alt="Monroe Sample" loading="lazy" />
</div>
<div id="logo">
  <img src="{% link images/monroe_DSM.png %}" alt="Monroe Sample" loading="lazy" >
</div>
