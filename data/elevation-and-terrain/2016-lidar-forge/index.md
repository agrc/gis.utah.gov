---
tags:
  - dem
  - lidar
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
date: 2017-11-28 15:30:30
title: 2016 FORGE LiDAR Elevation Data
categories: []
---

![Sample]({% link images/lidar_forge.png %}){: .flex .flex--center .outline }

[![Project area map]({% link images/lidar_forge_coverage_sm.png %} "click for map")]({% link images/lidar_forge_coverage.png %}){:.inline-text-right}

{%- capture contact -%}
{%- include contact.html subject=page.title contact=site.data.contacts.elevation text='or by request from' -%}
{%- endcapture -%}
During the Fall of 2016 UGRC and the Utah Geological Survey acquired [~205 square miles]({% link images/lidar_forge_coverage.png %}) of 8 points per meter Quality Level 1 LiDAR of The Frontier Observatory for Research in Geothermal Energy ([FORGE](https://energy.gov/eere/forge/forge-home "more information")) area around Milford, Utah in Beaver and Millard Counties in western Utah. The .5 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .img format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS classified point clouds are available from [The National Map](https://apps.nationalmap.gov/downloader), [Open Topography](https://portal.opentopography.org/lidarDataset?opentopoID=OTLAS.092018.6341.1), {{ contact }} This elevation data was collected between October 26 and November 3, 2016 and has a UTM NAD83 (2011) zone 12 north meter NAVD88(GEOID12) projection.

<ul class="dotless">
  <li>
    <strong>
      {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} <a href="https://raster.utah.gov/?cat=.5%20Meter%20%7B2016%20LiDAR%7D" target="_blank" rel="noopener">Retrieve 2016 Bare Earth DEMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/forge-2016/FORGE_Reports.zip" target="_blank" rel="noopener">Reports</a> and <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/forge-2016/FORGE_Metadata.zip" target="_blank" rel="noopener">Metadata</a>
  </li>
  <li>
    {% include fa_icon.html download=true class="svg-inline--fa fa-w-16" %} Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/forge-2016/FORGE_shps.zip" target="_blank" rel="noopener">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

View [Geologic Photographs of the Utah FORGE Project](https://geodata.geology.utah.gov/pages/search.php?search=!collection207) from the Utah Geological Survey.

The naming convention for the tiles are based off the [U.S. National Grid (USNG)](https://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection.

{% include contact.html subject=page.title contact=site.data.contacts.elevation %}
