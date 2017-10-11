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
date: 2016-08-04 15:50:09
title: Utah SGID Statewide Roads Data Layer Updates 08/04/2016
categories:
  - Featured
---

Updates were made recently to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({{ "/sgid-database/" | prepend: site.baseurl }}).

The updated Roads data is also available as shapefiles and file geodatabase files for download on the [SGID FTP site](ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/TRANSPORTATION/PackagedData/_Statewide/UtahRoadAndHighwaySystem/).

Geocoding services and ArcGIS Server Applications & Web Services are now using the updated SGID10.Transportation.Roads feature class.

The following highlights were updated:

#### County Updates:

- **Box Elder:** Received centerline update 07/13/2016: added new roads, road name and address range changes since last update on 02/22/2016; geocoding improvements.

- **Daggett:** Received centerline update 07/15/2016: added new roads, road name and address range changes since last update 01/19/2016; geocoding improvements


#### Granite School District Feedback:

 - **Salt Lake:** geocoding improvements

#### Sevier County Feedback:
 
  - **Sevier County:** geocoding improvements

#### Piute County Feedback:
  
   - **Piute County:** geocoding improvements
 

#### UDOT Route System:

- The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated
- The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated
