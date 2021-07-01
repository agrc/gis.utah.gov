---
author:
  display_name: Data Queen
  email: agrc@utah.gov
tags:
  - address
  - cartography
  - data
  - geocoding
  - location
  - roads
date: 2015-12-03 14:55:21 -0700
title: Utah SGID Statewide Roads Data Layer Updates 12/3/2015
published: false
categories:
  - Featured
---
Updates were made recently to the SGID10.Transportation.Roads feature class that resides on the Utah SGID ArcSDE database server.

Geocoding services and ArcGIS Server Applications & Web Services are now using the updated SGID10.Transportation.Roads feature class.

The following highlights what has been updated:

County Updates:

- **Davis:** Received centerline update 12/2/2015: added new roads, road name and address range changes since last update on 10/7/2015; geocoding improvements
- **Emery:** Received centerline update 11/19/2015: added new roads, road name and address range changes since last update on 11/24/2014; geocoding improvements
- **Grand:** Received Thompson Springs Master Address List (MAL) 10/15/2015: joined MAL addresses to parcel data layer and generated address points from the parcel centroid: added new roads, road name and address range changes; geocoding improvements
- **Salt Lake:** Received VECC's centerline update 11/23/2015: added new roads, road name and address range changes since last update on 10/27/2015; geocoding improvements
- **Utah:** Received centerline update 11/25/2015: added new roads, road name and address range changes since last update on 11/3/2015; geocoding improvements
- **Washington:** Received centerline update 11/25/2015: added new roads, road name and address range changes since last update 10/27/2015; geocoding improvements
- **Wayne:** Received centerline update 11/24/2015: added new roads, road name and address range changes since last comprehensive update on 5/20/2014; geocoding improvements
- **Weber:** Received centerline update 11/11/2015: added new roads, road name and address range changes since last comprehensive update on 5/19/2015; geocoding improvements

Blue Stakes of Utah Feedback:

- **Salt Lake:** geocoding improvements
- **Tooele:** geocoding improvements

UDOT Route System:

- The DOT\_F\_MP (From Milepost) and DOT\_T\_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated
- The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated
