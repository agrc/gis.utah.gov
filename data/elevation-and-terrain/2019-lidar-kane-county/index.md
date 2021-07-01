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
date: 2020-11-16 12:30:30
title: 2019 Kane County Lidar Elevation Data
categories: []
---

![Sample]({% link images/lidar_kane_county_2019.png %}){: .flex .flex--center .outline }

[![Project area map]({% link images/lidar_kane_county_2019_coverage_sm.png %} "click for map")]({% link images/lidar_kane_county_2019_coverage.png %}){:.inline-text-right}

{%- capture contact -%}
{%- include contact.html subject=page.title contact=site.data.contacts.elevation text='or by request from' -%}
{%- endcapture -%}
During 2019 AGRC and the Utah Division of Emergency Management acquired [~6,114 square miles]({% link images/lidar_kane_county_2019_coverage.png %}) of 2 points per meter Quality Level 2 LiDAR of Kane County and portions of the Greater Sevier Watershed. The 1 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .tif format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS point clouds are available from [The National Map](https://apps.nationalmap.gov/downloader) {{ contact }}
_**Please note:** Out of respect for federally recognized Tribal lands, project deliverables over these lands have been withheld until permission to release has been granted._

<ul class="dotless">
  <li>
    <strong>
      {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} <a href="https://raster.utah.gov/?cat=1%20Meter%20%7B2019%20Kane%20County%20LiDAR%7D" target="_blank">Retrieve 2019 Bare Earth DTMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/kane-county-2019/KaneCounty_2019_Reports.zip" target="_blank">Reports</a> and <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/kane-county-2019/KaneCounty_2019_Metadata.zip" target="_blank">Metadata</a>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/kane-county-2019/KaneCounty_2019_shps.zip" target="_blank">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)](https://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection.

{% include contact.html subject=page.title contact=site.data.contacts.elevation %}
