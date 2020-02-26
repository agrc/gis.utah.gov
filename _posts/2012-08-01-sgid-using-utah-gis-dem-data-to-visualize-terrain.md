---
author:
  display_name: Zach Beck
  email: zbeck@utah.gov
tags: []
date: 2012-08-01 15:10:36 -0600
title: 'Using Utah GIS Elevation Data to Visualize Terrain'
categories:
  - Featured
  - SGID Blog
---
<p><img style="padding-right: 20px;" title="Using ArcMap color ramp symbology to provide an intuitive elevation coloring" src="{% link images/symbology_sml.png %}" alt="" width="400" height="356" align="right" /></p>

To highlight elevation in the Utah Terrain Base Map, a custom color ramp symbol was created to enhance the basic gray-scale hillshading. By editing the color ramp properties of the DEM, a user can define colors stretched between the maximum and minimum elevation values to represent biomes across the state. In the case of the Utah Terrain Base Map, 11 algorithmic 1-2 value color ramps were stretched between a minimum value of 500 meters and a maximum of 3375 meters. Overlaying this symbology upon a hillshade will represent lower elevations in shades of tan, increasing to green in more mountainous regions, and ending with white representing a snow line at about 9,500 feet.

**Tips & Tricks**
To highlight terrain features beyond what can be shown with a hillshade, consider adding slope data as well. A slope raster is derived from a DEM and can represent slope as a percentage or degree. When symbolized with a grey scale, flat areas will appear white highlighting the darker, steeper areas. When used with a hillshade terrain features become more pronounced. Ideally the hillshade and slope data should be blended together, however, adjusting the transparency of one or both of the layers achieves a similar effect.
