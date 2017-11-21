---
status: publish
layout: post
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
tags:
  - dem
  - elevation
  - lidar
  - topo
  - topographic
published: true
date: 2015-03-05 10:44:24 -0700
title: Wasatch Front LiDAR Services Now Available
categories:
  - Featured
  - SGID Blog
---
<div class="caption"><a href="{{ "/downloads/Lidar_slope_lg.jpg" | prepend: site.baseurl }}"><img src="{{ "/images/Lidar_slope_lg.jpg" | prepend: site.baseurl }}" alt="" title="LiDAR service sample" width="300" height="226" /></a><p class="caption-text">Click to view large format map detail</p></div>
<p>The <a href="{{ "/data/elevation-and-terrain/2013-2014-lidar/" | prepend: site.baseurl }}">Wasatch Front LiDAR</a> elevation data collected 2013-2014 is now available as a service.
These services utilize the .5 meter DEMs derived from the LiDAR collection. Once you have established a GIS Server <a href="{{ "/imagery-server/" | prepend: site.baseurl }}">connection to mapserv.utah.gov</a> in the <b><em>Elevation</em></b> folder you will find the following layers:
</p>
<p><b><em>Bare Earth DTM layers:</em></b>
</p>
<ul>
    <li><em>Elevation\Lidar2013_2014_DTM</em> - use this layer to get elevation values, derive contours and generate surfaces etc.</li>
    <li><em>Elevation\Lidar2013_2014_DTM_Hillshade</em></li>
    <li><em>Elevation\Lidar2013_2014_DTM_ShadedRelief</em></li>
    <li><em>Elevation\Lidar2013_2014_DTM_Slope</em></li>
</ul>
<p><b><em>First Return DMS layers:</em></b></p>
<ul>
    <li><em>Elevation\Lidar2013_2014_DSM</em></li>
    <li><em>Elevation\Lidar2013_2014_DSM_Hillshade</em></li>
    <li><em>Elevation\Lidar2013_2014_DSM_ShadedRelief</em></li>
    <li><em>Elevation\Lidar2013_2014_DSM_Slope</em></li>
</ul>
<p><b>PLEASE NOTE:</b> If using the services for geoprocessing (generate contours, custom surfaces, etc.) be sure to set the geoprocessing
tool's <b><em>Environment Settings - Processing Extent</em></b> to something other than the default that will use the entire dataset and blow your computer up.
For instance select a polygon feature class as your area of interest or select <em>Same as Display</em>. For most geoprocessing you will want to use the bare earth DTM <em>Elevation\Lidar2013_2014_DTM</em>.</p>
<p>Here is a link to an <a href="ftp://ftp.agrc.utah.gov/Imagery/LIDAR/WasatchFront_2013_2014/WasatchFront_LiDAR_2013-2014.lyr">ArcMap layer file</a> for the elevation data services to get you started.
</p>
<p>The hillshade, slope, and shaded relief surfaces are reference raster mosaics.
</p>
<td>If you have any questions contact <a href="mailto:rkelson@utah.gov"><strong>Rick Kelson</strong></a> at (801-538-3237)
</td>
<p><a href="{{ "/downloads/Lidar_shaded.jpg" | prepend: site.baseurl }}"><img src="{{ "/images/Lidar_shaded.jpg" | prepend: site.baseurl }}" alt="" title="LiDAR service sample" width="300" height="226" /></a></p>
