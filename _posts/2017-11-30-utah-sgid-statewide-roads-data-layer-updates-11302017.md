---
layout: post
status: publish
published: true
title: Utah SGID Statewide Roads Data Layer Updates 11/30/2017
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2017-11-30
categories:
  - Featured
tags:
  - centerlines
  - data
  - gis
  - roads
  - sgid
  - statewide
  - utah
---

Updates were recently made to the SGID10.Transportation.Roads and [SGID10.Transportation.RoadsODM]({{ site.baseurl }}{% post_url 2017-08-15-major-updates-coming-to-roads-data-model %}) feature classes that reside on the [Utah SGID ArcSDE database server]({{ "/sgid-database/" | prepend: site.baseurl }}).

Updated roads data is also available as shapefiles and file geodatabase files for download on the [SGID Roads and Highway System download page]({{ "/data/transportation/roads-system/" | prepend: site.baseurl }}).

These updates are also reflected in [AGRC's address locators]({{ "/data/address-geocoders-locators/" | prepend: site.baseurl }}).


The following are highlights from this month's update:

#### County Updates:

- **Davis County:** Obtained roads data on 10/30/2017: added new roads, updated road names and address ranges, etc. Previous update was on 10/27/2017.

- **Duchesne County:** Obtained roads data on 10/26/2017: added new roads, updated road names and address ranges, etc. Previous update was on 03/09/2017.

- **Iron County:** Obtained roads data on 10/24/2017: added new roads, updated road names and address ranges, etc. Previous update was on 08/15/2017.

- **Salt Lake County:** Obtained roads data on 09/30/2017: added new roads, updated road names and address ranges, etc. Previous update was on 11/03/2017.

- **Tooele County:** Obtained roads data on 10/31/2017: added new roads, road names and address ranges, etc. Previous update was on 09/29/2017.

- **Uintah County:** Obtained roads data on 10/26/2017: added new roads, road names and address ranges, etc. Previous update was on 11/09/2016.

- **Utah County:** Obtained roads data on 10/31/2017: added new roads, updated road names and address ranges, etc. Previous update was on 10/27/2017.

- **Washington County:** Obtained roads data on 10/31/2017: added new roads, road names and address ranges, etc. Previous update was on 10/27/2017.

- **Weber County:** Obtained roads data on 10/31/2017: added new roads, road names and address ranges, etc. Previous update was on 10/27/2017.

#### UDOT Route System:

- The `DOT_F_MP` (From Milepost) and `DOT_T_MP` (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated
- The `DOT_RTID` field that stores UDOT's unique numeric route identifiers was updated
