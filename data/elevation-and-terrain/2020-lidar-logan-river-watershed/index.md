---
title: 2020 Logan River Watershed Lidar Elevation Data
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
tags:
  - dem
  - lidar
  - elevation
categories: []
date: 2023-06-14 12:30:30
---

![Sample]({% link images/lidar_logan_river_watershed_utah_2020.png %}){: .flex .flex--center .outline }

[![Project area map]({% link images/lidar_logan_river_watershed_utah_2020_coverage_sm.png %} "click for map")]({% link images/lidar_logan_river_watershed_utah_2020_coverage.png %}){:.inline-text-right}

{%- capture contact -%}
{%- include contact.html subject=page.title contact=site.data.contacts.elevation text='or by request from' -%}
{%- endcapture -%}
During 2020 Utah State University, Utah Water Research Laboratory acquired [~216 square miles]({% link images/lidar_logan_river_watershed_utah_2020_coverage.png %}) of 8 points per meter LiDAR of the Logan River Watershed in Northern Utah. The 0.5 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .tif format have been tested to a 0.106 ft vertical RMSE accuracy and are available for download. This elevation data was collected August 12-13, 2020.

<ul class="dotless">
  <li>
    <strong>
      {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} <a href="https://raster.utah.gov/?cat=.5%20Meter%20%7B2020%20Logan%20River%20Watershed%20LiDAR%7D" target="_blank">Retrieve 2020 Bare Earth DTMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download all project area <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/logan-river-watershed-2020/DEMS/2020_LoganRiverWatershed_DEM.zip" target="_blank">DEMs</a> or <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/logan-river-watershed-2020/DSMS/2020_LoganRiverWatershed_DSM.zip" target="_blank">DSMs</a> (approx. 9GB each)
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/logan-river-watershed-2020/LoganRiverWatershed_AerialLiDAR_Report.zip" target="_blank">Project Report</a>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/logan-river-watershed-2020/LoganRiverWatershed_AerialLiDAR_Shapefiles.zip" target="_blank">shapefiles</a> of project area and tile index
  </li>
</ul>

This elevation data has a State Plane Utah North NAD83(CORS96) NAVD88 projection with units in US Feet.

{% include contact.html subject=page.title contact=site.data.contacts.elevation %}
