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
### Web Mercator Services
{: .text-left}

Instructions for using Discover services in ArcMap 10.x:

1. In ArcMap go to `Add Data -> GIS Server -> Add WMTS server`
1. Paste the `WMTS` link [you have been provided]({{ "/data/base-map-and-imagery/" | prepend: site.baseurl }} "view Discover sign up information") into the `URL:` line and click `OK`
1. Navigate to the newly added `utah imagery – WMTS on discover.agrc.utah.gov` connection and **double click** to connect.
  - You can rename the connection after it has been added
1. You should see a list of imagery and base map services (explained below):
  - `utah` – 6-inch statewide natural color aerial photography collected within the last 3 years **(licensed)**
  - `utah_*year*archive` – Aerial photography blocks updated in `utah` service and archived by acquisition year **(licensed)**
  - `doq_1990’s_bw` – 1-meter statewide black & white aerial photography collected in 1990’s
  - `hro_2012_rgb` – 12.5-cm natural color aerial photography collected in 2012 of the Wasatch Front
  - `naip_*year*_rgb` – 1-meter statewide natural color aerial photography
  - `naip_*year*_nrg` – 1-meter statewide color infrared aerial photography
  - `hillshade` – 10 meter 4-way statewide shaded relief
  - `address_points-basemap` – Base map of address point locations
  - `lite-basemap` – Base map of hillshade, HWYs/streets, cities, boundaries, etc. (gray, muted tone)
  - `overlay-basemap` – Base map of vector features HWYs/streets, cities, address points, parcels, etc. (transparent background)
  - `terrain-basemap` – Base map of hillshade, HWYS/streets, parks, forests, water, etc.
  - `topo-basemap` – Base map of USGS topographic maps

#### Notes:
{: .text-left}

- Information about [transformations between different coordinate systems]({{ "/data/googleimagery/" | prepend: site.baseurl }}).
- It is strongly suggested that you use `WMTS` for the best performance.
- If your software will only allow you to use `WMS`, adding a WMS connection is the same as above but substitute `Add WMS server` in step 1.
- More information about using the [Google Imagery and Discover Services]({{ "/data/googleimagery/" | prepend: site.baseurl }}).

### UTM Services
{: .text-left}

**The planned date to turn off UTM base maps is 1/31/2017.** Unless you must utilize UTM services it is suggested that you utilize the services above from Discover. [Contact]({{ "/about/contact/" | prepend: site.baseurl }}) AGRC if you will need continued support of UTM base map tiles.


