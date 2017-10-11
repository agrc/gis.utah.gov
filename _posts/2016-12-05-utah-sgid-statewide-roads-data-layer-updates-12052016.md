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
date: 2016-12-05
title: Utah SGID Statewide Roads Data Layer Updates 12/05/2016
categories:
  - Featured
---

Updates were made recently to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({{ "/sgid-database/" | prepend: site.baseurl }}).

The updated roads data is also available as shapefiles and file geodatabase files for download on the [SGID FTP site](ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/TRANSPORTATION/PackagedData/_Statewide/UtahRoadAndHighwaySystem/).

Geocoding services and ArcGIS Server Applications & Web Services are now using the updated SGID10.Transportation.Roads feature class.

The following are highlights from this update:

#### County Updates:

- **Cache County:** Obtained roads data on 11/28/2016: added new roads, updated road names and address ranges, etc. Previous update was on 07/11/2016.

- **Davis County:** Obtained roads data on 11/28/2016: added new roads, updated road names and address ranges, etc. Previous update was on 11/09/2016.

- **Tooele County:** Obtained roads data on 11/04/2016: added new roads, updated road names and address ranges, etc. Previous update was on 10/07/2015.

- **Utah County:** Obtained roads data on 11/28/2016: added new roads, updated road names and address ranges, etc. Previous update was on 11/09/2016.

- **Washington County:** Obtained roads data on 11/28/2016: added new roads, road names and address ranges, etc. Previous update was on 11/09/2016.

- **Weber County:** Obtained roads data on 11/23/2016: added new roads, road names and address ranges, etc. Previous update was on 11/09/2016.

#### UDOT Route System:

- The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated
- The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated
