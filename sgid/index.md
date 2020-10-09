---
title: The SGID
author:
  display_name: AGRC Office
  email: agrc@utah.gov
date: 2020-05-26 13:58:58 -0600
layout: page_nocrumb
categories: []
tags:
  - sgid
---

Established in State law in 1991, Utah’s State Geographic Information Database (SGID) provides one-stop download and web service access to hundreds of GIS map data layers developed, aggregated, or acquired by state government. Modern technologies have allowed us to transform the SGID from a single database to a broad collection of data sources under the SGID umbrella.

The many facets of the SGID include the curated Open SGID database, ArcGIS Online hosted feature services, our SGID Open Data site, the Raster Discovery web app, our Discover basemap and imagery services, and the AGRC Web API. Tying all these together is the SGID Index, which makes it easy to find the latest and highest quality GIS data resources no matter where they're hosted.

We are working hard to maintain this high-quality asset to help everyone discover, access, and use Utah GIS data resources.

## SGID Index

The SGID Index is the master source of information about SGID datasets from AGRC and other GIS resources from many other state agencies. It is a great resource to quickly find GIS information important to you. The index lists the resource's ISO category, name, and primary data steward, along with a short description of the resource and a link to a service endpoint (if available).

<!-- [Search the Index]({% link data/sgid-index/index.html %}) -->
<p class="section-read-more">
    <a href="{% link data/sgid-index/index.html %}" class="btn">Search the Index</a>
</p>

## Open SGID

The Open SGID is a cloud-hosted PostGIS database containing our curated collection of GIS datasets. You can use this publicly available database connection to directly access Utah spatial Data in a wide variety of applications, including most GIS software. You can find the most up-to-date information about the Open SGID, including troubleshooting tips and an issue tracker, in the [GitHub repository](https://github.com/agrc/open-sgid). Please read, understand, and abide by the [terms of use]({% link about/policy/open-sgid/index.md %}) prior to connecting.

<p class="section-read-more">
    <a href="{% link sgid/open-sgid/index.md %}" class="btn">Get Connected</a>
</p>

## ArcGIS Online

AGRC also uploads all our curated datasets to [ArcGIS Online](https://utah.maps.arcgis.com) as hosted feature services. You can search for these layers in Esri products and add them to your projects. All the SGID hosted feature services' names start with "Utah" (like "Utah Roads") and have a branded thumbnail. They are also shared with a Utah SGID group that matches their category.
Our ArcGIS Online organization also acts as a repository for "shelved" and "static" curated SGID datasets as described in our [SGID Database Policy]({% link about/policy/sgid/index.md%}).

<p class="section-read-more">
    <a href="https://utah.maps.arcgis.com/home/groups.html" class="btn">Browse ArcGIS Online</a>
</p>

## SGID Open Data Site

The [SGID Open Data site]("https://opendata.gis.utah.gov") leverages Esri's Open Data platform to create a single portal for GIS resources hosted in ArcGIS Online or ArcGIS Enterprise Portal. Each item in Open Data contains web service links for consuming the datasets in webmaps and other applications along with data download links. We share all our curated datasets through the site and encourage other agencies and organizations to [share]({% link gis-data-sharing/open-data/index.md %}) their datasets here as well to help us spread GIS data to the widest possible audience.
<p class="section-read-more">
    <a href="https://opendata.gis.utah.gov" class="btn">Browse Open Data</a>
</p>

## Raster Discover App

The Raster Discovery App allows users to search all of AGRC's raster datasets, including publicly-available imagery, elevation, lidar, and scanned maps. We have tiled many of these datasets to provide better access to individual areas, and the app allows you to search for and download only the tiles that cover your area of interest
<p class="section-read-more">
    <a href="https://raster.utah.gov" class="btn">Search Raster Data</a>
</p>

## Discover Basemap and Imagery Services

We use Discover, an implementation of AppGeo's [Giza](https://www.appgeo.com/giza/) platform, to overcome the difficulties of providing access to large amounts of raster data. In addition to both public-access and licensed aerial iamgery products, Discover also provides access to high-quality, Utah-specific basemaps created by AGRC's cartographers. Discover serves all these layers out as WMS and WMTS web services that anyone can use in a wide variety of desktop and web applciations.

<p class="section-read-more">
    <a href="{% link discover/index.html %}" class="btn">Sign Up for Discover Access</a>
</p>

## AGRC Web API

The AGRC Web API gives developers access to the whole breadth of our currated datasets and our Utah-centric geocoder through simple HTTP requests. We use this internally to power apps like the [Legislative district finder](https://le.utah.gov/GIS/findDistrict.jsp) and the [Watershed Restoration Initiative map](https://wri.utah.gov/). Visit our [getting started page](https://developer.mapserv.utah.gov/StartupGuide) for more information.
<p class="section-read-more">
    <a href="https://developer.mapserv.utah.gov/StartupGuide" class="btn">Explore the Web API</a>
</p>

Following are different ways to access SGID data.

- [Open SGID]({% link sgid/open-sgid/index.md %})
- [State Network SGID]({% link sgid/state-only/index.md %})
- [AGRC Open Data](https://opendata.gis.utah.gov)
- [Discover]({% link discover/index.html %})
- [SGID Index]({% link data/sgid-index/index.html %})
- [AGRC Web API](https://api.mapserv.utah.gov)
