---
layout: page
status: publish
published: true
title: Online Base Maps
author:
  display_name: Steve Gourley
  login: Steve Gourley
  email: sgourley@utah.gov
  url: ''
author_login: Steve Gourley
author_email: sgourley@utah.gov
wordpress_id: 621
wordpress_url: http://gis.utah.gov/?page_id=621
date: '2011-07-20 02:11:01 -0500'
date_gmt: '2011-07-20 02:11:01 -0500'
categories: [Developer]
tags:
- basemap
- cache
---
### Ultra-fast cached online base map from AGRC
AGRC freely serves 6 online base maps; 4 of them are actively maintained on a regular [schedule]( {{ "/developer/base-maps/basemap-maintenance-schedule" | prepend: site.baseurl }}). All of these caches are currently in the UTM NAD83 Zone 12 projection (_wkid: 26912_). The caches consist of between 3 to 17 million 256 pixel square jpg tiles and can range from 15G to over 200GB. These caches are standardized on a subset of the Google, Microsoft, and esri [scale levels]( {{ "/developer/base-maps/basemap-scales" | prepend: site.baseurl }}) that apply to our state.

#### The Base Maps
![basemaps thumbnail]( {{ "/images/thumb_basemap_selection.png" | prepend: site.baseurl }})

We offer a [Streets](http://mapserv.utah.gov/cacheviewer/?map=Streets) base map that displays roads, places of interest, land ownership, and boundaries without imagery.

We also offer a [Terrain](http://mapserv.utah.gov/cacheviewer/?map=Terrain) base map. This base map highlights elevation with mountain peak elevations, contour lines, as well as many of the places of interest featured in our Streets map.

Our next offering is the [Hybrid](http://mapserv.utah.gov/cacheviewer/?map=Hybrid) base map. This map shows many of the same places of interest as the Streets base map, but underlays our most current imagery and the Google imagery beneath the geographic line work.

AGRC maintains a very minimal as to not interfere with the data you may or may not overlay on top of it. We call this the [Lite](http://mapserv.utah.gov/cacheviewer/?map=Lite) cache. It is very muted in color and makes your data stand out beautifully.

Finally, we have the [Hillshade](http://mapserv.utah.gov/cacheviewer/?map=Hillshade) and [Topo](http://mapserv.utah.gov/cacheviewer/?map=Topo) caches. The Hillshade is a 4 way <acronym title="Digital Raster Graphic">DRG</acronym> and the Topo cache contains all of the USGS Quad Sheets. The Topo cache displays the most relevant quad sheet (250K, 100K and 24K) depending on your scale.

These basemaps are used in our widgets library and all of our online web apps. You can also [use them in ArcGIS Desktop]( {{ "/data/sgid-base-map-services-arcmap" | prepend: site.baseurl }})
