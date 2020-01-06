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
date: 2019-08-06 12:30:30
title: 2018 Uintah Basin and Heber Valley LiDAR Elevation Data
categories: []
---

![Sample]({{ "/images/lidar_heber_uintah_basin_2018.png" | prepend: site.baseurl }}){: .flex .flex--center .outline }

[![Project area map]({{"/images/lidar_heber_uintah_basin_2018_coverage_sm.png" | prepend:site.baseurl}} "click for map")]({{"/images/lidar_heber_uintah_basin_2018_coverage.png" | prepend:site.baseurl}}){:.inline-text-right}

{%- capture contact -%}
{%- include contact.html subject=page.title contact=site.data.contacts.elevation text='or by request from' -%}
{%- endcapture -%}
During 2018 the Federal Emergency Management Agency (FEMA) acquired [~4,693 square miles]({{ "/images/lidar_heber_uintah_basin_2018_coverage.png/" | prepend: site.baseurl }}) of 2 and 8 points per meter Quality Level 1 & 2 LiDAR for areas in Northern Utah that include the Uintah Basin (QL2) and Heber Valley (QL1). The .5 and 1 meter resolution bare earth DEMs in .tif format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS point clouds, classified to ground, are available from [The National Map](https://viewer.nationalmap.gov/basic/) {{ contact }} This elevation data was collected between June and October, 2018 and has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection. The project was acquired two weeks before the [Dollar Ridge Fire](https://inciweb.nwcg.gov/incident/5881/) started. [Postfire LiDAR and aerial photography of the Strawberry River]({{"/data/elevation-and-terrain/2019-lidar-strawberry-river/" | prepend:site.baseurl}}), collected August 15-18, 2019 is also available.

<ul class="dotless">
  <li>
    <strong>
      <i class="fa fa-download"></i> <a href="https://raster.utah.gov/?catGroup=.5%20Meter%20%7B2018%20Uintah%20Basin%20Heber%20Valley%20LiDAR%7D,1%20Meter%20%7B2018%20Uintah%20Basin%20Heber%20Valley%20LiDAR%7D&title=Uintah%20Basin%20and%20Heber%20Valley%202018%20LiDAR" target="_blank">Retrieve 2018 Bare Earth DEMs via Interactive Map</a>. First Return DSMs coming soon.
    </strong>
  </li>
  <li>
    <i class="fa fa-download"></i> Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/heber-valley-uintah-basin-2018/FEMAHQ_2018_Reports.zip" target="_blank">Reports</a> and
      <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/heber-valley-uintah-basin-2018/FEMAHQ_2018_Metadata.zip" target="_blank">Metadata</a>
  </li>
  <li>
    <i class="fa fa-download"></i> Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/heber-valley-uintah-basin-2018/FEMAHQ_2018_shps.zip" target="_blank">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)](https://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection.

{% include contact.html subject=page.title contact=site.data.contacts.elevation %}
