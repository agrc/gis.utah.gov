---
author:
  display_name: Bert Granberg
  email: agrc@utah.gov
date: 2011-11-03 18:11:05 -0600
title: SGID Base Map and Imagery Services
categories:
  - Developer
tags:
  - imagery
---
[![discover logo]({% link discover/images/discover-logo.png %}){: .flex .flex--center loading="lazy"}]({% link discover/index.html %})

Do you need a quick base map for your [GIS, CAD, or web services]({% link discover/index.html %}#connect)? AGRC provides several multiscale base map and imagery service options that deliver pre-rendered base map tiles to your platform as fast as your internet connection will allow.

<div class="grid">
  <div class="grid__col grid__col--1-of-3 text-center">
      <h5 class="text-center">Imagery plus overlay</h5>
      <img src="{% link images/stgeorge_hybrid_basemap.png %}" class="outline" loading="lazy" />
  </div>
  <div class="grid__col grid__col--1-of-3 text-center">
      <h5 class="text-center">Terrain</h5>
      <img src="{% link images/brianhead_terrain_basemap.png %}" class="outline" loading="lazy" />
  </div>
  <div class="grid__col grid__col--1-of-3 text-center">
      <h5 class="text-center">Lite</h5>
      <img src="{% link images/provo_lite_basemap.png %}" class="outline" loading="lazy" />
  </div>
</div>
<i class="fas fa-exclamation-triangle"></i> **If you want to use the AGRC base maps, you'll need to request a [free account]({% link discover/index.html %}#sign-up) so we can create a quad word key for you**. <i class="fas fa-exclamation-triangle"></i>
{: .pop .text-center }

AGRC’s [Discover]({% link discover/index.html %}) cloud-base server provides imagery and base map services in OGC-standard WMTS and WMS formats in the Web Mercator WGS84 projection (wkid: 3857). Discover provides over [20 services]({% link discover/index.html %}#services) that are free to use (**however, a few services do require a [signed license agreement]({% link discover/license/index.md %}))**.

<i class="fas fa-fw fa-info-circle"></i> Each cache consists of around **3 to 17 million** 256-pixel square tiles ranging from **15G to over 200GB**. These caches use the subset of the Google, Microsoft, and esri [scale levels]({% link developer/base-maps/basemap-scales/index.md %}) that apply to our state. The [update schedule]({% link developer/base-maps/basemap-maintenance-schedule/index.md %}) will keep you in the loop as to when the tiles were last updated. If you would like to download imagery, visit the [aerial photography]({% link data/aerial-photography/index.html %}) data page.

#### The Services on Discover

<i class="fas fa-fw fa-map"></i> The **Terrain** base map highlights the natural form of the land. It features mountain peak elevation labels, contour lines, and locations of ski resort locations and other places of interest.

<i class="fas fa-fw fa-map"></i> We also provide a minimal base map called **Lite**. It has muted colors that don't distract from data overlaid on top of it.

<i class="fas fa-fw fa-image"></i><i class="fas fa-fw fa-lock"></i> Discover includes aerial imagery as well, including the **Utah** base map. This layer shows either the 2018 NAIP or the latest Google aerial photography depending on your zoom level. For licensing reasons, you will need to qualify for an [organizational account login]({% link discover/license/index.md %}) to use to this base map.

<i class="fas fa-fw fa-image"></i> Don't fret if you don't qualify for the licensed imagery! The current and historical **NAIP** imagery layers are available for all users. These layers come in normal-color (RGB) and false-color infrared (NRG) versions.

<i class="fas fa-fw fa-map"></i> **Overlay** is an exciting layer that displays styled roads and place names on an otherwise transparent set of tiles, which allows it to be overlaid on other data as a reference layer. The **Hybrid** layer combines this with the **Utah** base map for an attractively labeled imagery base map.

<i class="fas fa-fw fa-map"></i> Discover also includes the **Topo** and **Address Points** base maps. The Topo map displays the most relevant USGS quad sheet (i.e., 250K, 100K, or 24K) depending on your scale. The Address Points layer lets you quickly and easily view around 2.5 million address points.

*[OGC]: Open Geospatial Consortium
*[WMTS]: Web Map Tile Service
*[WMS]: Web Map Service
