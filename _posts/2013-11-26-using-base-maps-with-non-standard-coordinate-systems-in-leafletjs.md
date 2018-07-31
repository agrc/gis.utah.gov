---
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
tags:
  - base maps
  - javascript
  - open source
date: 2013-11-26 15:20:50 -0700
title: Using Base Maps with Non-standard Coordinate Systems in LeafletJS
categories:
  - Developer
  - Featured
---
<p>Since <a href="https://leafletjs.com/">LeafletJS</a> seems to be what all of the cool kids are using these days and <a href="https://www.mapbox.com/blog/vladimir-agafonkin-joins-mapbox/">it shows no signs of slowing down</a>, I thought that it would be fun to figure out how to use Leaflet to view AGRC's <a href="{{ "/data/base-map-and-imagery/" | prepend: site.baseurl }}">awesome base map services</a>. This presented a unique challenge since they are not in a projection that is supported out-of-the-box by Leaflet (UTM Zone 12 NAD83). However, I found that it is possible with the help of a few additional JavaScript libraries. So, here's the solution:</p>
<p><a class="jsbin-embed" href="https://jsbin.com/omazICu/6/embed?js,output">ESRI-Leaflet &amp; ArcGIS Basemaps</a><script src="https://static.jsbin.com/js/embed.js"></script></p>
<p>
You'll notice that I've loaded these libraries in addition to the latest version of Leaflet:</p>
<ul>
<li><a href="https://esri.github.io/esri-leaflet/">Esri-Leaflet Plugin</a></li>
<li><a href="https://github.com/proj4js/proj4js">Proj4js</a></li>
<li><a href="https://github.com/kartena/Proj4Leaflet">Proj4Leaflet Plugin</a></li>
</ul>
<p>
The implementation was not that complex once I got all of the numbers right. First I create a new Proj4Leaflet coordinate reference system which I pass into the map constructor. Then I use the Esri-Leaflet Plugin to set up a new TiledMapLayer and add it to the map.</p>
<p>
Now you can be one of the cool kids too!</p>
<style>
iframe {<br />
    height: 450px !important;<br />
    border: none !important;<br />
}<br />
</style>
