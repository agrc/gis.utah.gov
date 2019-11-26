---
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
tags:
  - data
  - roads
date: 2017-03-09
title: Utah SGID Statewide Roads Data Layer Updates 03/09/2017
categories:
  - Featured
---

Updates were made recently to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({{ "/sgid-database/" | prepend: site.baseurl }}).

Geocoding services and ArcGIS Server Applications & Web Services are now using the updated SGID10.Transportation.Roads feature class.

The following are highlights from this update:

#### County Updates

- **Cache County:** Obtained roads data on 02/03/2017: added new roads, updated road names and address ranges, etc. Previous update was on 12/05/2016.

- **Davis County:** Obtained roads data on 02/28/2017: added new roads, updated road names and address ranges, etc. Previous update was on 02/08/2017.

- **Duchesne County:** Obtained roads data on 03/02/2017: added new roads, updated road names and address ranges, etc. Previous update was on 10/03/2016.

- **Piute County:** Obtained roads data on 02/17/2017: added new roads, updated road names and address ranges, etc. Previous update was on 01/2016.

- **Salt Lake County:** Obtained roads data on 02/02/2017: added new roads, updated road names and address ranges, etc. Previous update was on 02/08/2017.

- **Tooele County:** Obtained roads data on 01/25/2017: added new roads, updated road names and address ranges, etc. Previous update was on 12/05/2016.

- **Utah County:** Obtained roads data on 02/21/2017: added new roads, updated road names and address ranges, etc. Previous update was on 02/08/2017.

- **Washington County:** Obtained roads data on 02/21/2017: added new roads, road names and address ranges, etc. Previous update was on 02/08/2017.

- **Weber County:** Obtained roads data on 02/28/2017: added new roads, road names and address ranges, etc. Previous update was on 02/08/2017.

#### E911 Feedback

- **Morgan County:** geocoding improvements

- **Weber County:** geocoding improvements

#### UDOT Route System

- The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated
- The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated
