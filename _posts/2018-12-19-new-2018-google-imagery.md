---
title: 'New 2018 Google Imagery'
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
date: 2018-12-19 00:43:21
categories:
  - Featured
tags:
  - google
  - imagery
  - discover
---

The new 2018 high-resolution Google imagery (6" pixels) is available through AGRC's [Discover server]({{ "/discover/" | prepend:site.baseurl }})! Updated areas (map below) include the what Google calls the Salt Lake and Logan blocks which comprise most of the Wasatch Front urban area (Brigham City, Weber County, Davis County, Salt Lake County, and Utah County)

The new imagery is already loaded into the `Google`, `Utah`, `Basemap-Hybrid`, and `Google 2018archive` services. If you're using these services, you don't need to change a thing layer-wise, but you may need to clear your cache (instructions below). The new imagery is also available for download as geo-referenced jpeg files (.jp2) by all organizations that have signed up to use the licensed content on the Discover server.

If you have not signed up for access to the Google imagery visit the [Discover - Imagery and Base Map Server]({{ "/discover/" | prepend:site.baseurl }}) page for details and to access the links needed to request an account.

[![Google update]({{"/images/NewGoogle_2018_sm.png" | prepend:site.baseurl}} "2018 Google Imagery updates - click for larger image")]({{"/images/NewGoogle_2018.png" | prepend:site.baseurl}}){:.inline-text-right}

{% capture license %}{% include contact.html subject=page.title contact=site.data.contacts.google_imagery %}{% endcapture %}
{{ license | strip_newlines }}

#### Don't see the updated imagery?

**ArcMap/ArcGIS Pro users will need to clear their local caches to see the new imagery.** Users can clear their entire ArcMap/ArcGIS Pro caches or clear caches for just the `Google`, `Utah`, and `Basemap-Hybrid` layers.

#### Cache Clearing Instructions

- **ArcMap** Go to the service’s `Layer Properties -> Cache` tab and select `Clear Local Cache Now`. Be patient as this could take several minutes. If the blurry tiles persist you have the options to `Clear cache when the session ends` or `Don't cache any data locally`. Another option is to completely clear your ArcMap cache by going to `Customize -> ArcMap Options -> Display Cache -> Clear Cache`.

- **ArcGIS Pro** Go to the service’s `Layer Properties -> Cache` tab and select `Clear Cache`. You can also clear your entire Pro cache by going to the Pro project's `Options -> Display` and check `Clear cache` and selecting `OK`.
