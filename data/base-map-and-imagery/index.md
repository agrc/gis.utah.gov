---
layout: page
status: publish
published: true
title: Using SGID Base Map & Imagery Services
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
Do you need a quick, fast base map for your GIS, CAD or web services?

AGRC provides several multi-scale base map and imagery service options that deliver pre-rendered base map tiles to your platform as fast as your internet connection will allow. The Discover services utilize a Web Mercator WGS84 coordinate system (wkid: 3857). The Mapserv services utilize a UTM NAD83 coordinate system (wkid: 26912). Information about transformations between different coordinate systems can be found [here]({{ "/data/googleimagery/" | prepend: site.baseurl }} "Coordinate System and Datum") under `Coordinate System and Datum`.
### Discover Server
AGRC’s cloud-based server Discover provides imagery and base maps services in Open Geospatial Consortium (OGC) standard Web Map Tile Service (WMTS) and Web Map Service (WMS) in the Web Mercator WGS84 projection (wkid: 3857). One featured offering from Discover is statewide 6 inch imagery collected and licensed by Google. Due to this licensed content, access to the Discover server is currently only for **Utah’s cities, counties, special districts, state agencies, K12/Higher education, and tribes and contractors and formal partners of the immediate licensees.** To obtain access to the Discover server you need to fill out and understand the **Organizational Usage Agreement** available from the [Google Imagery License]({{"/data/google-imagery-license/" | prepend: site.baseurl }}) page. Once the Organizational Usage Agreement is completed you will receive information about the services and URL links to access the Discover server. The URLs to access the server will contain a quad-word (ex. `https://discover.agrc.utah.gov/login/path/dragon-vertigo-honey-satire/`) unique to each user or organization.

In addition to the Google imagery, Discover contains imagery services for NAIP and historical high and low resolution collections. The Discover base map services including terrain, lite, topo, and overlay. We expect in the near future to be able to provide public domain access to the un-licensed content on Discover.

For more information about using the Discover services in ArcMap visit [this page]({{"/data/sgid-base-map-services-arcmap" | prepend: site.baseurl }}).
### Mapserv Server
**The planned date to turn off Mapserv is 1/1/2017.** Unless you must utilize UTM services it is suggested that you utilize the services above from Discover.

AGRC has freely served online base maps and imagery services for many years. These caches are in the UTM NAD83 Zone 12 projection (wkid: 26912). The caches consist of between 3 to 17 million 256 pixel square jpg tiles and can range from 15G to over 200GB. These caches are standardized on a subset of the Google, Microsoft, and esri scale levels that apply to our state. For more information about Mapserv visit the links below.

For more information about using the Mapserv services in ArcMap visit [this page]({{"/data/sgid-base-map-services-arcmap" | prepend: site.baseurl }}).

Web developers can embed any of these base map services in web-based and internet-connected applications.

- More information about the base maps can be found on the [application developer]({{ "/developer/base-maps/" | prepend: site.baseurl }}) pages.
