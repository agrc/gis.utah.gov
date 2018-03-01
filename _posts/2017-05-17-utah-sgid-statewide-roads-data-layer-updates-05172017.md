---
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
tags:
  - data
  - roads
date: 2017-05-17
title: Utah SGID Statewide Roads Data Layer Updates 05/17/2017
categories:
  - Featured
---

Updates were made recently to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({{ "/sgid-database/" | prepend: site.baseurl }}).

The updated roads data is also available as shapefiles and file geodatabase files for download on the [SGID FTP site](ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/TRANSPORTATION/PackagedData/_Statewide/UtahRoadAndHighwaySystem/).

Geocoding services and ArcGIS Server Applications & Web Services are now using the updated SGID10.Transportation.Roads feature class.

The following are highlights from this update:

#### County Updates:

- **Davis County:** Obtained roads data on 04/25/2017: added new roads, updated road names and address ranges, etc. Previous update was on 04/06/2017.

- **Iron County:** Obtained roads data on 04/11/2017: added new roads, updated road names and address ranges, etc. Previous update was on 02/08/2017.

- **Juab County:** Obtained roads data on 04/18/2017: added new roads, updated road names and address ranges, etc. Previous update was on 10/07/2015.

- **Salt Lake County:** Obtained roads data on 04/20/2017: added new roads, updated road names and address ranges, etc. Previous update was on 04/06/2017.

- **Summit County:** Obtained roads data on 05/05/2017: added new roads, updated road names and address ranges, etc. Previous update was on 07/12/2016.

- **Utah County:** Obtained roads data on 04/30/2017: added new roads, updated road names and address ranges, etc. Previous update was on 04/06/2017.

- **Wasatch County:** Obtained roads data on 04/18/2017: added new roads, updated road names and address ranges, etc. Previous update was on 02/08/2017.

- **Washington County:** Obtained roads data on 04/26/2017: added new roads, road names and address ranges, etc. Previous update was on 04/06/2017.

- **Weber County:** Obtained roads data on 04/21/2017: added new roads, road names and address ranges, etc. Previous update was on 04/06/2017.

#### UDOT Route System:

- The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated
- The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated

#### General Updates

- A statewide update was made to assign prefix directions from nearest matching address point, where the road segment did not already have a prefix direction and where the segment was an alpha named road with address ranges.
