---
status: publish
layout: page
author:
  display_name: Bert Granberg
  email: bgranberg@utah.gov
published: true
date: 2011-11-03 18:11:05 -0600
title: Using SGID Base Map & Imagery Services
categories:
  - Developer
tags:
  - imagery
---
<style type="text/css">
#logo {
  max-width: 250px;
  margin: 0 auto;
}
</style>
<div class="grid__col grid__col--1-of-3 text-center">
    <h5 class="text-center">Imagery plus Overlay base maps</h5>
    <img src="{{ "/images/stgeorge_hybrid_basemap.png" | prepend: site.baseurl }}">
</div>
<div class="grid__col grid__col--1-of-3 text-center">
    <h5 class="text-center">Terrain</h5>
    <img src="{{ "/images/brianhead_terrain_basemap.png" | prepend: site.baseurl }}">
</div>

<div class="grid__col grid__col--1-of-3 text-center">
    <h5 class="text-center">Lite base map</h5>
    <img src="{{ "/images/provo_lite_basemap.png" | prepend: site.baseurl }}">
</div>

---
{: .hr-separate }

Do you need a quick, fast base map for your GIS, CAD or web services?

AGRC provides several multi-scale base map and imagery service options that deliver pre-rendered base map tiles to your platform as fast as your internet connection will allow. The Discover services utilize a Web Mercator WGS84 coordinate system (wkid: 3857). Information about transformations between different coordinate systems can be found [here]({{ "/discover/resources/" | prepend: site.baseurl }} "Coordinate System and Datum") under `Coordinate System and Datum`.

### Web Mercator Services on Discover

<div id="logo">
  <img src="{{ "/discover/images/discover-logo.png" | prepend: site.baseurl }}" alt="discover logo" />
</div>

AGRC’s cloud-based server Discover provides imagery and base maps services in Open Geospatial Consortium (OGC) standard Web Map Tile Service (WMTS) and Web Map Service (WMS) in the Web Mercator WGS84 projection (wkid: 3857).

One featured offering from **[Discover]({{"/discover/" | prepend: site.baseurl }})** is statewide 6 inch imagery collected and licensed by Google. Due to this licensed content, access to the Google imagery is only for **Utah’s cities, counties, special districts, state agencies, K12/Higher education, and tribes and contractors and formal partners of the immediate licensees** free of charge. To obtain access to the Google imagery on the Discover server you need to fill out and understand the **[Organizational Usage Agreement](https://docs.google.com/a/utah.gov/forms/d/e/1FAIpQLScL5uUQIvw7op_ZcF4bijxcoOMGhNF0MXwJNGqSXS6IbjbKhA/viewform)** available from the **[Discover]({{"/discover/" | prepend: site.baseurl }})** page. Once the Organizational Usage Agreement is completed, you will receive information about the services and URL links to access the Discover server. The URLs to access the server will contain a quad-word (ex. `https://discover.agrc.utah.gov/login/path/your-unique-quad-word/`) unique to each user or organization.

If you are not covered by the license agreement for the Google imagery service you will need to fill out the **[Discover Server Access](https://docs.google.com/a/utah.gov/forms/d/e/1FAIpQLScvASb37-R9WeFHNUsbIYEcVzQ_ceT__G4PZUaCx_xZxTuEpA/viewform "If you are one of the organizations covered by the Google license in the paragraph above Do Not fill out this form. Please fill out the Organizational Usage Agreement above.")** form for access to the non-licensed services. Once the form has been completed, you will receive information about the services and URL links to access the Discover server. The URLs to access the server will contain a quad-word (ex. `https://discover.agrc.utah.gov/login/path/your-unique-quad-word/`) unique to each user or organization. ***If you already have a Discover account, you do not need to create another account to access the base maps and imagery services.***

- For imagery downloads visit [this page]({{ "/data/aerial-photography/" | prepend: site.baseurl }}).
- Instructions on how to [use the Discover services in Pro/ArcMap]({{ "/data/sgid-base-map-services-arcmap/" | prepend: site.baseurl }}).

_If you need continued support of the UTM base maps, we will be offering the tiles for on premise use. Please [contact AGRC]({{ "/about/contact/" | prepend: site.baseurl }}) for details._
