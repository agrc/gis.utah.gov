---
status: publish
layout: page
title: Ultra-fast cached online base map from AGRC
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
tags:
  - basemap
categories:
  - Developer
published: true
date: 2011-07-20 02:11:01 -0500
---
AGRC has freely served online base maps for many years. These caches are in the Web Mercator projection (_wkid: 3857_). The caches consist of between **3 to 17 million** 256 pixel square tiles and can range from **15G to over 200GB**. These caches are standardized on a subset of the Google, Microsoft, and esri [scale levels]({{ "/developer/base-maps/basemap-scales/" | prepend: site.baseurl }}) that apply to our state.

<i class="fa fa-exclamation-triangle"></i> **Everyone wanting to use the AGRC base maps needs to have a [free account]({{ "/data/base-map-and-imagery/" | prepend: site.baseurl }} "#web-mercator-services-on-discover") and a quad word created for them**. We now require this account so we can track usage metrics.

#### The Base Maps
<i class="fa fa-fw fa-map"></i> **Terrain**: This base map highlights elevation with mountain peak elevation labels, contour lines, ski resorts, as well as many other places of interest.

<i class="fa fa-fw fa-map"></i> AGRC maintains a very minimal cache called **Lite**. It is very muted in color and does not distract from data overlayed on top of it.

<i class="fa fa-fw fa-map"></i> Up next is the **Imagery** base map. This tile set shows the Google aerial photography. You will need to qualify for an [organizational account login]({{ "/data/base-map-and-imagery/" | prepend: site.baseurl }}) to use to this base map for licensing reasons.

<i class="fa fa-fw fa-map"></i> An exciting offering, _that we call squiggles and dots internally_, is a service called **Overlay**. This is a transparent set of tiles that displays styled roads and placenames. This can be overlayed on data for reference. Combining this with **Imagery** can create a desired **Hybrid** effect.

<i class="fa fa-fw fa-map"></i> Finally, we have the **Color Infrared**, **Address Points** and **Topo** caches. The Color Infrared is a neat way to look at vegetation while the Topo cache contains all of the USGS Quad Sheets. The Topo cache displays the most relevant quad sheet (250K, 100K and 24K) depending on your scale. The Address Points cache is a fast way to view around 2.5 million address points.

The [update schedule]({{ "/developer/base-maps/basemap-maintenance-schedule/" | prepend: site.baseurl }}) will keep you in the loop as to when they were last updated. You can also [use them in ArcGIS Desktop]( {{ "/data/sgid-base-map-services-arcmap/" | prepend: site.baseurl }}).
