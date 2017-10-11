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
date: 2016-10-03
title: Utah SGID Statewide Roads Data Layer Updates 10/03/2016
categories:
  - Featured
---

Updates were made recently to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({{ "/sgid-database/" | prepend: site.baseurl }}).

The updated Roads data is also available as shapefiles and file geodatabase files for download on the [SGID FTP site](ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/TRANSPORTATION/PackagedData/_Statewide/UtahRoadAndHighwaySystem/).

Geocoding services and ArcGIS Server Applications & Web Services are now using the updated SGID10.Transportation.Roads feature class.

The following highlights were updated:

#### County Updates:

- **Cache County:** Obtained centerline update on 09/07/2016: added new roads, road name and address range changes since last update on 07/11/2016; geocoding improvements.

- **Davis County:** Obtained centerline update on 09/27/2016: added new roads, road name and address range changes since last update on 08/31/2016; geocoding improvements.

- **Duchesne County:** Obtained centerline update on 09/01/2016: added new roads, road name and address range changes since last update 02/22/2016; geocoding improvements

- **Salt Lake County:** Obtained centerline update from VECC on 09/21/2016: added new roads, road name and address range changes since last update on 08/31/2016; geocoding improvements.

- **Utah County:** Obtained centerline update on 09/21/2016: added new roads, road name and address range changes since last update 08/31/2016; geocoding improvements

- **Washington County:** Obtained centerline update on 09/21/2016: added new roads, road name and address range changes since last update 08/31/2016; geocoding improvements

- **Weber County:** Obtained centerline update on 09/23/2016: added new roads, road name and address range changes since last update 08/31/2016; geocoding improvements

#### Blue Stakes (811) Feedback:

 - **Morgan County:** geocoding improvements
 - **Utah County:** geocoding improvements

#### UDOT Route System:

- The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated
- The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated
 