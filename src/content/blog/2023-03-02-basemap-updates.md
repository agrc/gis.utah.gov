---
title: 'Base maps: Out With the Old, In With the New'
author: Zach Beck
date: 2023-03-02T11:00:00.000Z
category: SGID
tags:
  - base maps
  - cartography
  - data
cover_image: /src/images/pillar-blog/2023-03-02-basemap-updates/new_terrain.png
cover_image_alt: New Terrain base map
---

It has been almost a decade since UGRC has updated the look and feel of any of the base maps but changes are on the way! The current suite of base maps were originally authored in ArcMap. These projects have been imported into ArcGIS Pro to continue to provide data updates. But to take advantage of the advancements in ArcGIS Pro, we decided to create new base map projects from the ground up using all of the new features available. These new documents are less complex and easier to maintain.

We were most excited to start this process and make improvements to the Terrain base map. Similar to version 1 of the Terrain base map, version 2 will be served from Discover as WMS and WMS-T raster tiles and features a number of improvements including:

- New shaded relief from Jake “255 Shades of Gray” Adams
- Improved contours
- 2016 Great Salt Lake level
- Water related land use agricultural areas
- ArcGIS Pro symbology

![New Terrain base map](../../images/pillar-blog/2023-03-02-basemap-updates/new_terrain.png)

The version 2 Terrain base map tiles are set to be published in the coming weeks and will replace the existing tiles. If you have connections to the v1 Terrain base map in a web, ArcMap, or Pro project, the newly styled tiles will start to display after the switch is made. Version 2 will use the same connection url and the version 1 symbology will no longer be accessible. Since the style of the v2 Terrain base map is similar to, but different than v1, overlaid layer symbology may need to be adjusted to visually match the new symbology.

Be on the lookout this spring for more base map updates from us, including vector tile services.

#### UPDATE 3/22/2023

The new and improved Terrain base map has been published. It is suggested that users clear their local cache. Please look at the [Pro/ArcMap User Considerations](/documentation/discover/) for instructions on how to accomplish this.
