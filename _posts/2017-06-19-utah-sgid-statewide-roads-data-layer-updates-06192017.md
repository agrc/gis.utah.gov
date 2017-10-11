---
status: publish
layout: post
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
tags:
  - data
  - roads
published: true
date: 2017-06-19
title: Utah SGID Statewide Roads Data Layer Updates 06/19/2017
categories:
  - Featured
---

Updates were made recently to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({{ "/sgid-database/" | prepend: site.baseurl }}).

The updated roads data is also available as shapefiles and file geodatabase files for download on the [SGID FTP site](ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/TRANSPORTATION/PackagedData/_Statewide/UtahRoadAndHighwaySystem/).

Geocoding services and ArcGIS Server Applications & Web Services are now using the updated SGID10.Transportation.Roads feature class.

The following are highlights from this update:

#### County Updates:

- **Cache County:** Obtained roads data on 05/04/2017: added new roads, updated road names and address ranges, etc. Previous update was on 03/09/2017.

- **Daggett County:** Obtained roads data on 05/31/2017: added new roads, updated road names and address ranges, etc. Previous update was on 02/15/2016.

- **Davis County:** Obtained roads data on 05/24/2017: added new roads, updated road names and address ranges, etc. Previous update was on 05/17/2017.

- **Morgan County:** Obtained roads data on 05/02/2017: added new roads, updated road names and address ranges, etc. Previous update was on 05/24/2016.

- **Salt Lake County:** Obtained roads data on 05/23/2017: added new roads, updated road names and address ranges, etc. Previous update was on 05/17/2017.

- **Tooele County:** Obtained roads data on 05/31/2017: added new roads, updated road names and address ranges, etc. Previous update was on 03/09/2017.

- **Utah County:** Obtained roads data on 05/23/2017: added new roads, updated road names and address ranges, etc. Previous update was on 05/17/2017.

- **Washington County:** Obtained roads data on 05/23/2017: added new roads, road names and address ranges, etc. Previous update was on 05/17/2017.

- **Weber County:** Obtained roads data on 05/25/2017: added new roads, road names and address ranges, etc. Previous update was on 05/17/2017.

#### UDOT Route System:

- The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated
- The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated

#### General Updates

- A statewide update was made to remove curves (Bezier curves) from the SGID Roads database.
