---
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
tags:
  - base maps
  - open source
date: 2019-08-16 07:51:04 -0700
title: How To Use AGRC Base Maps in QGIS
categories:
  - Developer
---
Most people know about AGRC's awesome [base maps]({{ "/data/base-map-and-imagery/" | prepend: site.baseurl }}). They are very popular and provide high quality cartography using the latest and greatest data from the [Utah SGID]({{ "/data/" | prepend: site.baseurl }}). But did you know that they provide a [WMTS](https://en.wikipedia.org/wiki/Web_Map_Tile_Service) service that can be consumed in non-ESRI products?
Here's how to load our base maps in [QGIS](https://www.qgis.org/en/site/) (v3.4.9 as of this writing):

1. The first step is to [sign up for a free account]({{ "/discover/" | prepend: site.baseurl }}) and request a quad word. This will enable you to authenticate with the `discover.agrc.utah.gov` base map server.
1. Open QGIS and right click on "WMS/WMTS" in the browser panel and select "New Connection".
1. Give the new connection a name and paste in this URL: `https://discover.agrc.utah.gov/login/path/{your-quad-word-here}/wmts/1.0.0/WMTSCapabilities.xml`
![QGIS screenshot new WMTS connection]({{ "/images/QGISNewWMTSConnection.png" | prepend: site.baseurl }})
1. You should now see a new connection in the browser panel under "WMS/WMTS". Expand the new connection and right-click on a layer and select "Add Selected Layer(s) to Canvas".
![QGIS screenshot add layer to canvas]({{ "/images/QGISAddWMTSLayer.png" | prepend: site.baseurl }})
1. You should now be able to view the base map as a layer in QGIS!
![QGIS Hybrid layer screenshot]({{ "/images/QGISHybrid.png" | prepend: site.baseurl }})
