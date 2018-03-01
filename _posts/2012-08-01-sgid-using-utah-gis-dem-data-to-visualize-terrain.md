---
author:
  display_name: Zach Beck
  email: zbeck@utah.gov
tags: []
date: 2012-08-01 15:10:36 -0600
title: ' Using Utah GIS Elevation Data to Visualize Terrain'
categories:
  - Featured
  - SGID Blog
---
<p><a href="{{ "/?attachment_id=10526" | prepend: site.baseurl }}" rel="attachment wp-att-10526"><img style="padding-right: 20px;" title="Using ArcMap color ramp symbology to provide an initutive elevation coloring" src="{{ "/images/symbology_sml.png" | prepend: site.baseurl }}" alt="" width="400" height="356" align="right" /></a></p>
<p>To highlight elevation in the <a href="http://mapserv.utah.gov/cacheviewer/?map=Terrain">Utah Terrain Base Map</a>, a custom color ramp symbol was created to enhance the basic gray-scale hillshading. By editing the color ramp properties of the DEM, a user can define colors stretched between the maximum and minimum elevation values to represent biomes across the state. In the case of the Utah Terrain Base Map, 11 algorithmic 1-2 value color ramps were stretched between a minimum value of 500 meters and a maximum of 3375 meters. Overlaying this symbology upon a hillshade will represent lower elevations in shades of tan, increasing to green in more mountainous regions, and ending with white representing a snow line at about 9,500 feet. The resulting <a href="ftp://ftp.agrc.utah.gov/DEM/10meter_dem/SGID10.RASTER.DEM_10METER_Terrain.lyr">downloadable composite layer (.lyr) file</a>, references an ArcSDE-based 10 meter DEM and an ImageServer-based hillshade layer. It can be used by ArcMap v10.x users with a high speed internet connection.</p>
<p><strong>Tips &amp; Tricks</strong><br />
To highlight terrain features beyond what can be shown with a hillshade, consider adding slope data as well. A slope raster is derived from a DEM and can represent slope as a percentage or degree. When symbolized with a grey scale, flat areas will appear white highlighting the darker, steeper areas. When used with a hillshade terrain features become more pronounced. Ideally the hillshade and slope data should be blended together, however, adjusting the transparency of one or both of the layers achieves a similar effect.</p>

Stand alone hillshade Vs. hillshade slope combination
<a href="{{ "/sgid-using-utah-gis-dem-data-to-visualize-terrain/bookcliffs_hillshd_sml/" | prepend: site.baseurl }}" rel="attachment wp-att-10615"><img style="padding-left: 20px;" title="Terrain: Hillshade + Elevation Color Ramp + Slope Emphasis, Book Cliffs Area" src="{{ "/images/BookCliffs_slope_sml.png" | prepend: site.baseurl }}" alt="" width="350" height="303" align="left" /></a>
