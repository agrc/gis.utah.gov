---
layout: page
status: publish
published: true
title: Ultra-fast cached online base map from AGRC
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
---
## <i class="fa fa-exclamation-triangle"></i> The UTM base maps are scheduled to expire in 2017
AGRC has freely served 7 online base maps for many years. These caches are in the UTM NAD83 Zone 12 projection (_wkid: 26912_). The caches consist of between **3 to 17 million** 256 pixel square jpg tiles and can range from **15G to over 200GB**. These caches are standardized on a subset of the Google, Microsoft, and esri [scale levels]({{ "/developer/base-maps/basemap-scales" | prepend: site.baseurl }}) that apply to our state.

These UTM base maps are being sunset in favor of [web mercator base maps served as WMS and WMTS]({{ "/data/base-map-and-imagery/" | prepend: site.baseurl }}). You will need to obtain a organizational login to connect to these base maps.

If you need continued support of the UTM base maps, we will be offering the tiles for on premise use. Please [contact AGRC]({{ "/about/contact/" | prepend: site.baseurl }}) for details.

#### The Base Maps
<i class="fa fa-fw fa-map"></i> We offer a **Terrain** base map. This base map highlights elevation with mountain peak elevations, contour lines, as well as many of the places of interest featured in our Streets map.

<i class="fa fa-fw fa-map"></i> AGRC maintains a very minimal cache called **Lite**. It is very muted in color and makes your data pop.

<i class="fa fa-fw fa-map"></i> Our next offering is the **Imagery** base map. This tile set shows aerial photography.

<i class="fa fa-fw fa-map"></i> An exciting offering, _that we call squiggles and dots internally_, is a service called **Overlay**. This is a transparent set of tiles that displays styled roads and placenames. This can be overlayed on data for reference. Combining this with **Imagery** can create a desired **Hybrid** effect.

<i class="fa fa-fw fa-map"></i> Finally, we have the **Color Infrared** and **Topo** caches. The Color Infrared is a neat way to look at vegetation while the Topo cache contains all of the USGS Quad Sheets. The Topo cache displays the most relevant quad sheet (250K, 100K and 24K) depending on your scale.

The [update schedule]({{ "/developer/base-maps/basemap-maintenance-schedule" | prepend: site.baseurl }}) will keep you in the loop as to when they were last updated.

These base maps are used in our [widgets library]({{ "/developer/widgets" | prepend: site.baseurl }}) and all of our online web apps. You can also [use them in ArcGIS Desktop]( {{ "/data/sgid-base-map-services-arcmap" | prepend: site.baseurl }}).
