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
  - `Utah` – Combination of the most recent 1-meter NAIP and 6-inch Google imagery with scale dependent rendering **(licensed)**
  - `Google` – 6-inch statewide natural color aerial photography from Google collected within the last 3 years **(licensed)**  
  - `Google *year*archive` – Aerial photography blocks updated in `Google` service and archived by acquisition year **(licensed)**
  - `Basemap-Address_Points` – Base map of address point locations
  - `Basemap-Hybrid` - Base map combination of the Overlay base map and Utah imagery service **(licensed)**
  - `Basemap-Lite` – Base map of hillshade, HWYs/streets, cities, boundaries, etc. (gray, muted tone)
  - `Basemap-Overlay` – Base map of vector features HWYs/streets, cities, address points, parcels, etc. (transparent background)
  - `Basemap-Terrain` – Base map of hillshade, HWYS/streets, parks, forests, water, etc.
  - `Basemap-Topo` – Base map of USGS topographic maps
  - `DOQ 1990s BW` – 1-meter statewide black & white aerial photography collected in 1990’s
  - `HRO 2012 RGB` – 12.5-cm natural color aerial photography collected in 2012 of the Wasatch Front
  - `NAIP *year* RGB` – 1-meter statewide natural color aerial photography
  - `NAIP *year* NRG` – 1-meter statewide color infrared aerial photography
  - `Hillshade` – 10 meter statewide combined hillshade and slope
 
#### Notes:
{: .text-left}

- Information about [transformations between different coordinate systems]({{ "/data/googleimagery/" | prepend: site.baseurl }}).
- It is strongly suggested that you use `WMTS` for the best performance.
- If your software will only allow you to use `WMS`, adding a WMS connection is the same as above but substitute `Add WMS server` in step 1.
- More information about using the [Google Imagery and Discover Services]({{ "/data/googleimagery/" | prepend: site.baseurl }}).

### UTM Services
{: .text-left}

## <i class="fa fa-exclamation-triangle"></i> The UTM base maps were deprecated on January 31, 2017

_If you need continued support of the UTM base maps, we will be offering the tiles for on premise use. Please [contact AGRC]({{ "/about/contact/" | prepend: site.baseurl }}) for details._
 
