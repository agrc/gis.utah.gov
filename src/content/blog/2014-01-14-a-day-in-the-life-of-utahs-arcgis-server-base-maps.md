---
title: A day in the life of Utah's ArcGIS Server Base Maps
published: false
author: Steve Gourley
date: 2014-01-14 14:58:59 -0700
category: SGID
tags:
  - base maps
cover_image: /src/images/pillar-blog/default-social-card.png
cover_image_alt: ugrc social card
---

<p>"Base map web services" provides access to pre-rendered multi-scale maps that show more detailed map features at finer scales and less detail at larger scales.</p>
<p>When (ArcMap) web applications use the UGRC base map services, the applications make behind the scenes requests to the web service for a specific set of 256 x 256 pixel map tile images. These 256 x 256 pixel map tiles are assembled to display a specific geographic area at a desired scale. Depending on the display size of the end users device, a typical "single view" of a base map can consist of between 4 and 20 tiles. It's also important that requested base map tiles are typically cached locally in both browser and desktop applications so if areas are looked at again, new tile requests do not need to be made in most cases. </p>
<p>UGRC built its first base map service in 2007 for the first ArcGIS Server-hosted version of the <a href="https://enviro.deq.utah.gov/">DEQ Interactive Map</a>. Since then, UGRC has developed <a href="/products/sgid/base-maps/">7 base maps</a> that display commonly needed map background layers. The chart below shows the number of tile requests made, on a typical day (November 6, 2013), to each of the current base map themes.</p>
<p><a href="/images/404.png"><img src="/images/404.png" alt="" title="basemapmetrics20131106_bymap" width="600" height="569" class="aligncenter size-full wp-image-14348" /></a></p>
<p>The Hybrid base map, which contains aerial photography and an overlay of basic street-themed geographic context is the most popular of the base maps. These metrics, taken together <a href="/blog/2013-12-04-a-day-in-the-life-of-the-utah-sgid-imageserver/">with similar metrics from UGRC's dynamic ImageServer service</a> clearly demonstrate the great importance and utility of the State's collection of aerial photography in supporting end user needs.</p>
<p>Over the course of a typical day, some end users, be they GIS staff or web applications, use the base map services in large volumes. Others end users only make a few requests and then move on. The ArcGIS Server log file was analyzed to create the chart below that shows the range of requests made number by unique users (by ip address) on November 6th. </p>
<p><a href="/images/404.png"><img src="/images/404.png" alt="" title="basemapmetrics20131106_peruser" width="600" height="627" class="aligncenter size-full wp-image-14349" /></a></p>
<p><a href="/products/sgid/base-maps/">More information about UGRC's base map services</a>.</p>
