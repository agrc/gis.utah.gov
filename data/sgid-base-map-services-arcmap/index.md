---
layout: page
status: publish
published: true
title: Using SGID Base Map & Imagery Services in ArcMap
author:
  display_name: Bert Granberg
  login: Bert Granberg
  email: bgranberg@utah.gov
  url: ''
author_login: Bert Granberg
author_email: bgranberg@utah.gov
wordpress_id: 3141
wordpress_url: http://gis.utah.gov/?page_id=3141
date: '2011-11-03 18:11:05 -0600'
date_gmt: '2011-11-04 00:11:05 -0600'
categories: []
tags: []
---
Do you need a quick, fast base map for your ArcMap project?

AGRC provides several multi-scale base map and imagery service options that deliver pre-rendered base map tiles to your ArcMap session as fast as your internet connection will allow. The Discover services utilize a Web Mercator WGS84 coordinate system. The Mapserv services utilize a UTM Zone 12N, NAD83 coordinate system. Information about transformations between different coordinate systems can be found [here]({{ "/data/googleimagery/" | prepend: site.baseurl }}).

### Discover Server

AGRC’s cloud-based server Discover provides imagery and base maps services in Open Geospatial Consortium (OGC) standard Web Map Tile Service (WMTS) and Web Map Service (WMS) in the Web Mercator WGS84 projection. Due to some licensed content access to the Discover server is currently only for **Utah’s cities, counties, special districts, state agencies, K12/Higher education, and tribes and contractors and formal partners of the immediate licensees.** We expect in the near future to be able to provide access to the Discover server to almost anyone. To obtain access to the Discover server you need to fill out and understand the **Organizational Usage Agreement** available from the [Google Imagery License]({{"/data/google-imagery-license/" | prepend: site.baseurl }}) page.

Once the Organizational Usage Agreement is completed you will receive information about the services and URL links to access the Discover server. The URLs to access the server will contain a quad-word (ex. `https://discover.agrc.utah.gov/login/path/dragon-vertigo-honey-satire/`) unique to each user or organization.

Instructions for using the Discover links in ArcMap 10.x:

1.	In ArcMap go to `Add Data -> GIS Server -> Add WMTS server`
1.	Paste the WMTS link you have been provided into the `URL:` line then hit OK
1.	Navigate to the newly added connection `utah imagery – WMTS on discover.agrc.utah.gov` and double click the connection. You can rename the connection after it has been added
1.	You should see a list of imagery and base map services (explained below):
  -	`utah` – 6-inch statewide natural color aerial photography collected within the last 3 years
  -	`utah_2012archive` – Aerial photography updated in `utah` service and archived by acquisition year
  -	`utah_2013archive` – Aerial photography updated in `utah` service and archived by acquisition year
  -	`doq_1990’s_bw` – 1-meter statewide black & white aerial photography collected in 1990’s
  -	`hro_2012_rgb` – 12.5-cm natural color aerial photography collected in 2012 of the Wasatch Front
  -	`naip_2009_rgb` – 1-meter statewide natural color aerial photography collected in 2009
  -	`naip_2011_nrg` – 1-meter statewide color infrared aerial photography collected in 2011
  -	`naip_2011_rgb` – 1-meter statewide natural color aerial photography collected in 2011
  -	`lite-basemap` – Base map of hillshade, HWYs/streets, cities, boundaries, etc.(gray, muted tone)
  -	`overlay-basemap` – Base map of vector features HWYs/streets, cities, address points, parcels, etc. (transparent background)
  -	`terrain-basemap` – Base map of hillshade, HWYS/streets, parks, forests, water, etc.
  -	`topo-basemap` – Base map of USGS topographic maps

#### Notes:

It is strongly suggested that you use WMTS for the best performance.  
If your software will only allow you to use WMS, adding a WMS connection is the same as above just substitute `Add WMS server` in step 1.  
More information about using the Discover services found [here.]()  
Latest update about the Discover services found [here.]()

### Mapserv Server
**The Mapserv server will be turned off 1/1/2017.** Unless you must utilize UTM services it is suggested that you utilize the services above from Discover.

Instructions for using Mapserv in ArcMap 10.x:

  1. In ArcMap, click the `Add Data` button
  1. At the top of the `Add Data` window, set the Look In: pick list to point at `GIS Servers`
  1. Select `Add ArcGIS Server` and then choose the `Use GIS Services` option
  1. Set the Internet Server URL to:  `http://mapserv.utah.gov/arcgis/services`
  1. Click Finish and then double click the newly added item `arcgis on mapserv.utah.gov`
  1. From the **`BaseMaps`** folder, `Select` the base map(s) of your choice from the list below then click `Add` or `OK`:  
    - `AddressPoints` (address points with labels)
    - `Hillshade`
    - `Hybrid` (streets and other vector layers atop imagery)
    - `Lite` (gray, muted tone)
    - `Terrain` (hillshade, streets, parks, forest, water, etc)
    - `Topo` (multiscale mosaic of USGS topo maps)
    - `Vector` (streets, land ownership, and boundaries)
  1. From the `AerialPhotography__BlackWhite`, `AerialPhotography__Color`, or `AerialPhotography__InfraRed` folder, _Select_ the imagery service(s) of your choice then click `Add` or `OK`:  

Web developers can embed any of these base map services in web-based and internet-connected applications.

- More information about the base maps can be found on the [application developer]({{ "/developer/base-maps/" | prepend: site.baseurl }}) pages.
