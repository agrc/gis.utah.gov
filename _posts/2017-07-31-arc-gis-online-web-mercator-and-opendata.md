---
title: ArcGIS Online Web Mercator and Opendata
author:
  display_name: Michael M. Foulger
  email: MICHAELFOULGER@utah.gov
date: 2017-07-31 19:10:45
categories: []
tags:
  - arcgis online
---

AGRC is transitioning State Geographic Information Database (SGID) web services from UTM NAD83 to the Web Mercator projection.  Overall, we feel that this will allow users to more efficiently consume SGID data via web services without the need for reprojecting the data on the fly. This is because the vast majority of browser-based web applications (thin clients) are displaying map data in Web Mercator, and desktop GIS software (thick clients, big brains) have been sufficiently capable and resourced to reproject map data ‘on the fly’ for more than a decade now.

It is our intent to update existing AGOL services without changing the service reference (URL) to the item in question.  This should mean little to no disruption for SGID services within AGOL.  For services where this proves to not be possible, we will try to name the resulting new data with the same name structure and tags as the previous service to make it easier to find.

The initial push will be to the regularly updated ~20 services that are considered SGID framework data: roads, address points, parcels, boundaries etc.  As we roll these services out as Web Mercator, we are also looking at possibly creating some web maps that will allow users to more easily consume the most popular map layers with large feature counts.

In addition to the transition to Web Mercator, we have rolled out an updated Open Data site using Esri’s open data extension to AGOL.  The address for the site is [opendata.gis.utah.gov](https://opendata.gis.utah.gov/).  We will continue to populate Utah’s authoritative framework data into this site for data exploration and download, either directly or via ‘portal federation’ made possible in ArcGIS 10.5.

