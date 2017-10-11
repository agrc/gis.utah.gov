---
status: publish
layout: post
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
tags:
  - address
  - cartography
  - data
  - geocoding
  - location
  - roads
published: true
date: 2016-05-24 09:57:01 -0700
title: Utah SGID Statewide Roads Data Layer Updates 5/24/2016
categories:
  - Featured
---

Updates were made recently to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({{ "/sgid-database/" | prepend: site.baseurl }}).

The updated Roads data is also available as shapefiles and file geodatabase files for download on the <a href="ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/TRANSPORTATION/PackagedData/_Statewide/UtahRoadAndHighwaySystem/">SGID FTP site</a>.

Geocoding services and ArcGIS Server Applications & Web Services are now using the updated SGID10.Transportation.Roads feature class.

The following highlights what has been updated:

#### County Updates:

 - **Morgan:** Received centerline update 03/15/2016: added new roads, road name and address range changes since last update on 01/14/2016; geocoding improvements
 - **Washington:** Received centerline update 04/28/2016: added new roads, road name and address range changes since last update 01/14/2016; geocoding improvements

#### Blue Stakes of Utah Feedback:

 - **Davis:** geocoding improvements
 - **Cache:** geocoding improvements

#### Granite School District Feedback:

 - **Salt Lake:** geocoding improvements

#### UDOT Route System:

 - The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated
 - The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated
