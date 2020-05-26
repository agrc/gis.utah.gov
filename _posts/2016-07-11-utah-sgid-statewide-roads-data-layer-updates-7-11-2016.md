---
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
date: 2016-07-11 22:09:10
title: Utah SGID Statewide Roads Data Layer Updates 7/11/2016
published: false
categories:
  - Featured
---

Updates were made recently to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({% link sgid/state-only/index.md %}).

Geocoding services and ArcGIS Server Applications & Web Services are now using the updated SGID10.Transportation.Roads feature class.

The following highlights were updated:

#### County Updates

- **Cache:** Received centerline update 06/10/2016: added new roads, road name and address range changes since last update on 01/25/2016; geocoding improvements
- **Salt Lake:** Received VECC's centerline update 06/20/2016: added new roads, road name and address range changes since last update 03/21/2016; geocoding improvements
- **Summit:** Received centerline update 02/17/2016: added new roads, road name and address range changes since last update 04/01/2015; geocoding improvements

#### Blue Stakes of Utah Feedback

- **Box Elder:** geocoding improvements
- **Morgan:** geocoding improvements
- **Wasatch** geocoding improvements

#### Granite School District Feedback

- **Salt Lake:** geocoding improvements

#### Box Elder County Feedback

- **Box Elder:** geocoding improvements

#### UDOT Route System

- The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated
- The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated
