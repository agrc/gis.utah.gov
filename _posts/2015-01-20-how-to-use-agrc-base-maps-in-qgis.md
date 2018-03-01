---
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
tags:
  - base maps
  - open source
date: 2015-01-20 07:51:04 -0700
title: How To Use AGRC Base Maps in QGIS
categories:
  - Developer
---
<p>Most people know about AGRC&#39;s awesome <a href="{{ "/data/sgid-base-map-services-arcmap/" | prepend: site.baseurl }}">base maps</a>. They are <a href="{{site.baseurl}}{% post_url 2014-12-22-basemaps-a-2014-day-in-the-life %}">very popular</a> and provide high quality cartography using the latest and greatest data from the <a href="{{ "/data/" | prepend: site.baseurl }}">Utah SGID</a>. But did you know that they provide a <a href="http://en.wikipedia.org/wiki/Web_Map_Tile_Service">WMTS</a> service that can be consumed in non-ESRI products?</p>
<p>Here&#39;s how to load our base maps in <a href="http://www.qgis.org/en/site/">QGIS 2.6.1</a>:</p>
<ol>
<li>The first step is to find the URL to the service that you are interested in. Most of AGRC&#39;s base maps are within a folder called &quot;<a href="http://mapserv.utah.gov/arcgis/rest/services/BaseMaps">BaseMaps</a>&quot; on our main ArcGIS Server instance. Once you find the specific layer that you are interested in, copy the URL for the WMTS link at the top of the services directory page:<br><img src="{{ "/images/WMTSLink.jpg" | prepend: site.baseurl }}" alt="link" width='760'></li>
<li>Open QGIS and click on the &quot;Add WMS/WMST Layer&quot; button to open the &quot;Add Layer(s) from a WM(T)S Server&quot;.</li>
<li>Click on the &quot;New&quot; button to open the &quot;Create a new WCS connection&quot; dialog and add a name for the layer and the URL to the WMTS service and click &quot;OK&quot; to close the dialog.<br><img src="{{ "/images/QGISAddWMTS.jpg" | prepend: site.baseurl }}" alt="dialog" width='760'></li>
<li>You should now see a new layer in the add layer dialog. Select the new layer and click on the &quot;Add&quot; button to add it to the map.<br><img src="{{ "/images/QGISAddWMTSLayer.jpg" | prepend: site.baseurl }}" alt="dialog" width='760'></li>
<li>You should now be able to view the base map as a layer in QGIS!<br><img src="{{ "/images/QGISTerrain.jpg" | prepend: site.baseurl }}" alt="map" width='760'></li>
</ol>
<h2 id="bonus-tip">Bonus Tip</h2>
<p>If you are having performance issues using our cached services through ArcMap, try loading them via these WMTS services. You can do this by double-clicking on the &quot;Add WMTS Server&quot; node in the ArcCatalog tree under &quot;GIS Servers&quot; and then pasting the same URL as above.<br />
<img src="{{ "/images/ArcMapWMTS.jpg" | prepend: site.baseurl }}" alt="arcmap"></p>
