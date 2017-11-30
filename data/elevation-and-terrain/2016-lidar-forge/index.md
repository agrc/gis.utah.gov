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
date: 2017-11-28 15:30:30
title: 2016 FORGE LiDAR Elevation Data
categories: []
---

<style type="text/css">
#logo {
  max-width: 400px;
  margin: 0 auto;
}
</style>
<div id="logo">
  <img src="{{ "/images/lidar_forge.PNG" | prepend: site.baseurl }}" alt="Sample" />
</div>

[![Project area map]({{"/images/lidar_forge_coverage_sm.png" | prepend:site.baseurl}} "click for map")]({{"/images/lidar_forge_coverage.png" | prepend:site.baseurl}}){:.inline-text-right}

{% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.elevation text='by request' hide-punctuation=true %}{% endcapture %}

During the Fall of 2016 AGRC and the Utah Geological Survey acquired [~205 square miles]({{ "/images/lidar_forge_coverage.png/" | prepend: site.baseurl }}) of 8 points per meter Quality Level 1 LiDAR of The Frontier Observatory for Research in Geothermal Energy ([FORGE](https://energy.gov/eere/forge/forge-home "more information")) area around Milford, Utah in Beaver and Millard Counties in western Utah. The .5 meter resolution bare earth DEMs and first-return/highest-hit DSMs in .img format have a 10.0cm vertical RMSE accuracy and are available for download. The LAS classified point cloud are also available {{ contact | strip_newlines }} and eventually from [Open Topography](http://www.opentopography.org/). This elevation data was collected between October 26 and November 3, 2016 and has a UTM NAD83 (2011) zone 12 north meter NAVD88(GEOID12) projection.

<ul class="dotless">
  <li>
    <strong>
      <i class="fa fa-download"></i> <a href="http://raster.utah.gov/?cat=.5%20Meter%20%7B2016%20LiDAR%7D" target="_blank">Retrieve 2016 Bare Earth DEMs and First Return DSMs via Interactive Map</a>
    </strong>
  </li>
  <li>
    <i class="fa fa-download"></i> Download project <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/forge-2017/FORGE_Reports.zip" target="_blank">Reports</a> and
      <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/forge-2017/FORGE_Metadata.zip" target="_blank">Metadata</a>
  </li>
  <li>
    <i class="fa fa-download"></i> Download <a href="https://storage.googleapis.com/state-of-utah-sgid-downloads/lidar/forge-2017/FORGE_shps.zip" target="_blank">shapefiles</a> of project area, tile indices, and breaklines
  </li>
</ul>

The naming convention for the tiles are based off the [U.S. National Grid (USNG)]( http://www.fgdc.gov/usng/how-to-read-usng/index_html).

This elevation data has a UTM NAD83 (2011) zone 12 north meters NAVD88(GEOID12) projection

{% capture elevation %}{% include contact.html subject=page.title contact=site.data.contacts.elevation %}{% endcapture %}
{{ elevation | strip_newlines }}
