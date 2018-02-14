---
layout: post
status: publish
published: true
title: Utah SGID Statewide Roads Data Layer Updates 02/15/2018
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2018-02-15
categories:
  - Featured
tags:
  - centerlines
  - roads
  - streets
  
---

Updates were recently made to the SGID10.Transportation.Roads and [SGID10.Transportation.RoadsODM]({{ site.baseurl }}{% post_url 2017-08-15-major-updates-coming-to-roads-data-model %}) feature classes that resides on the [Utah SGID ArcSDE database server]({{ "/sgid-database/" | prepend: site.baseurl }}).

Updated roads data is also available as shapefiles and file geodatabase files for download on the [SGID Roads and Highway System download page]({{ "/data/transportation/roads-system/" | prepend: site.baseurl }}).

These updates are also reflected in [AGRC's address locators]({{ "/data/address-geocoders-locators/" | prepend: site.baseurl }}) and the [Utah Next-Generation 911 GIS Database]({{ "/data/911/" | prepend: site.baseurl }}).


The following are highlights from this month's update:

#### County Updates:

- **Davis County:** Obtained roads data on 02/01/2018: added new roads, updated road names and address ranges, etc. Previous update was on 01/19/2018.

- **Grand County:** Data requested on 01/03/2018 and 01/11/2018, but not received.

- **Iron County:** Obtained roads data on 01/17/2018: added new roads, updated road names and address ranges, etc. Previous update was on 11/30/2017.

- **Salt Lake County:** Obtained roads data on 01/26/2018: added new roads, updated road names and address ranges, etc. Previous update was on 01/19/2018.

- **Summit County:** Obtained roads data on 01/17/2018: added new roads, updated road names and address ranges, etc. Previous update was on 01/04/2018.

- **Utah County:** Obtained roads data on 01/26/2018: added new roads, road names and address ranges, etc. Previous update was on 01/19/2018.

- **Washington County:** Obtained roads data on 01/26/2018: added new roads, road names and address ranges, etc. Previous update was on 01/19/2018.

- **Weber County:** Obtained roads data on 01/30/2018: added new roads, road names and address ranges, etc. Previous update was on 01/19/2018.

#### UDOT Route System:

- The `DOT_F_MP` (From Milepost) and `DOT_T_MP` (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated
- The `DOT_RTID` field that stores UDOT's unique numeric route identifiers was updated
