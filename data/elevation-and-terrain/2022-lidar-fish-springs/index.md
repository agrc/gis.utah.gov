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
date: 2023-12-06 11:00:00
title: 2022 Fish Springs Topobathymetric Lidar Elevation Data
categories: []
---

![Sample]({% link images/lidar_fish_springs_2022.png %}){: .flex .flex--center .outline }

[![Project area map]({% link images/lidar_fish_springs_2022_coverage_sm.png %} "click for map")]({% link images/lidar_fish_springs_2022_coverage.png %}){:.inline-text-right}

{%- capture contact -%}
{%- include contact.html subject=page.title contact=site.data.contacts.elevation text='or by request from' -%}
{%- endcapture -%}
In 2022 the U.S. Geological Survey (USGS) acquired [29.5 square miles]({% link images/lidar_fish_springs_2022_coverage.png %}) of 8 points per meter Quality Level 1 Topobathymetric LiDAR of Fish Springs National Wildlife Refuge in Utah. The .5 resolution topo-bathy DEMs in .tif format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS point clouds, intensity images, and orthophotography are available from [The National Map](https://apps.nationalmap.gov/lidar-explorer/#/). This elevation data was collected September 24, 2022.

<ul class="dotless">
  <li>
    <strong>
      {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} <a href="https://raster.utah.gov/?cat=.5%20Meter%20%7B2022%20Fish%20Springs%20LiDAR%7D&title=Fish%20Springs%202022%20Topo-Bathy%20LiDAR" target="_blank">Retrieve 2022 Topobathymetric DEMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/fish-springs-2022/FishSprings_2022_Reports.zip" target="_blank">Reports</a> and <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/fish-springs-2022/FishSprings_2022_Metadata.zip" target="_blank">Metadata</a>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/fish-springs-2022/FishSprings_2022_shps.zip" target="_blank">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)](https://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID18) projection.

{% include contact.html subject=page.title contact=site.data.contacts.elevation %}
