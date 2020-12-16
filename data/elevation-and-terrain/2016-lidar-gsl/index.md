---
tags:
  - dem
  - lidar
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
date: 2017-11-13 15:30:30
title: 2016 Great Salt Lake and Utah Lake LiDAR Elevation Data
categories: []
---

![Sample]({% link images/lidar_gsl.png %}){: .flex .flex--center .outline }

[![Project area map]({% link images/lidar_gsl_coverage_sm.png %} "click for map")]({% link images/lidar_gsl_coverage.png %}){:.inline-text-right}

{%- capture contact --%}
{%- include contact.html subject=page.title contact=site.data.contacts.elevation text='or by request from' -%}
{%- endcapture -%}
During the Fall of 2016 AGRC, Utah Geological Survey, and the Utah Division of Forestry, Fire and State Lands acquired [~1,555 square miles]({% link images/lidar_gsl_coverage.png %}) of 2 and 8 ppm Quality Level 1 and 2 LiDAR of the Great Salt Lake and Utah Lake. The GSL portion of the project, collected between September and November 2016, is a combination of .5 QL1 and 1 meter QL2. Some areas are available as .5 meter although the entire GSL project areas is available as 1 meter. During the acquisition the GSL was at a historical low. The Utah Lake portion, collected between October and November 2016, is all .5 meter and is mainly the lake shoreline. More LiDAR around Utah Lake can be found in the [2013-2014 collection]({% link data/elevation-and-terrain/2013-2014-lidar/index.html %}). The .5 and 1 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .img format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS classified point clouds are available from [The National Map](https://viewer.nationalmap.gov/basic/), [Open Topography](http://opentopo.sdsc.edu/lidarDataset?opentopoID=OTLAS.092018.6341.1), {{ contact }} This elevation data has a UTM NAD83 (2011) zone 12 north meter NAVD88(GEOID12) projection.

<ul class="dotless">
  <li>
    <strong>
      <i class="fas fa-download"></i> <a href="https://raster.utah.gov/?catGroup=.5%20Meter%20%7B2016%20LiDAR%7D,1%20Meter%20%7B2016%20LiDAR%7D&title=Utah%202016%20LiDAR">Retrieve 2016 Bare Earth DEMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    <i class="fas fa-download"></i> Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/great-salt-lake-2016/GSL_Reports.zip">GSL Reports</a> and <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/great-salt-lake-2016/GSL_Metadata.zip">GLS Metadata</a> or <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/great-salt-lake-2016/UtahLake_Reports.zip">Utah Lake Reports</a> and <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/great-salt-lake-2016/UtahLake_Metadata.zip">Utah Lake Metadata</a>
  </li>
  <li>
    <i class="fas fa-download"></i> Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/great-salt-lake-2016/GSL_shps.zip">GSL shapefiles</a> or <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/great-salt-lake-2016/UtahLake_shps.zip">Utah Lake shapefiles</a> of the project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)](https://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection.

{% include contact.html subject=page.title contact=site.data.contacts.elevation %}
