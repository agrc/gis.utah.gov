---
status: publish
layout: page
tags:
  - dem
  - lidar
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
published: true
date: 2017-11-13 15:30:30
title: 2016 Great Salt Lake and Utah Lake LiDAR Elevation Data
categories: []
---

<style type="text/css">
#logo {
  max-width: 400px;
  margin: 0 auto;
}
</style>
<div id="logo">
  <img src="{{ "/images/lidar_gsl.PNG" | prepend: site.baseurl }}" alt="Sample" />
</div>

[![Project area map]({{"/images/lidar_gsl_coverage_sm.png" | prepend:site.baseurl}} "click for map")]({{"/images/lidar_gsl_coverage.png" | prepend:site.baseurl}}){:.inline-text-right}

During the Fall of 2016 AGRC, Utah Geological Survey, and the Utah Division of Forestry, Fire and State Lands acquired [~1,555 square miles]({{ "/images/lidar_gsl_coverage.png/" | prepend: site.baseurl }}) of 2 and 8 ppm Quality Level 1 and 2 LiDAR of the Great Salt Lake and Utah Lake. The GSL portion of the project, collected between September and November 2016, is a combination .5 QL1 and 1 meter QL2. Some areas are available as .5 meter however the entire GSL project areas is available as 1 meter. During the acquisition the GSL was at a historical low. The Utah Lake portion, collected between October and November 2016, is all .5 meter and is mainly the lake shoreline. More LiDAR around Utah Lake can be found in the [2013-2014 collection]({{"/data/elevation-terrain-data/2013-2014-lidar/" | prepend: site.baseurl }}). The .5 and 1 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .img format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS classified point cloud are also available [by request](mailto:rkelson@utah.gov) and eventually from [Open Topography](http://www.opentopography.org/). This elevation data was collected between September and November, 2017 and has a UTM NAD83 (2011) zone 12 north meter NAVD88(GEOID12) projection.

<ul class="dotless">
  <li>
    <strong>
      <i class="fa fa-download"></i> <a href="http://raster.utah.gov/?catGroup=.5%20Meter%20%7B2016%20LiDAR%7D,1%20Meter%20%7B2016%20LiDAR%7D&title=Utah%202016%20LiDAR" target="_blank">Retrieve 2016 Bare Earth DEMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    <i class="fa fa-download"></i> Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/great-salt-lake-2016/DEMs/GSL_Reports.zip" target="_blank">Reports</a> and
      <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/great-salt-lake-2016/DEMs/GSL_Metadata.zip" target="_blank">Metadata</a>
  </li>
  <li>
    <i class="fa fa-download"></i> Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/great-salt-lake-2016/DEMs/GSL_shps.zip" target="_blank">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)]( http://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection

If you need assistance contact Rick Kelson at [rkelson@utah.gov](mailto:rkelson@utah.gov)
