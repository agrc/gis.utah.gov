---
title: Utah SGID Statewide Roads Data Layer Updates 08/15/2017
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2017-08-15
categories:
  - Featured
tags:
  - data
  - roads
---

**Major changes to the Statewide Roads Data Model are coming on September 13th, 2017.  Please take the time to read the [blog post]({% link _posts/2017-08-15-major-updates-coming-to-roads-data-model.md %}) detailing the changes.**

Updates were recently made to the SGID10.Transportation.Roads and [SGID10.Transportation.Roads_NextGen]({% link _posts/2017-08-15-major-updates-coming-to-roads-data-model.md %}) feature classes that resides on the [Utah SGID ArcSDE database server]({% link sgid-database/index.md %}).

Updated roads data is also available as shapefiles and file geodatabase files for download on the [SGID Roads and Highway System download page]({% link data/transportation/roads-system/index.html %}).  Please consider using the [new data model]({% link _posts/2017-08-15-major-updates-coming-to-roads-data-model.md %}) when downloading these datasets.

The following are highlights from this month's update:

#### County Updates:

- **Davis County:** Obtained roads data on 07/31/2017: added new roads, updated road names and address ranges, etc. Previous update was on 07/18/2017.

- **Iron County:** Obtained roads data on 07/27/2017: added new roads, updated road names and address ranges, etc. Previous update was on 02/08/2017.

- **Salt Lake County:** Obtained roads data on 07/28/2017: added new roads, updated road names and address ranges, etc. Previous update was on 07/18/2017.

- **Summit County:** Obtained roads data on 07/31/2017: added new roads, updated road names and address ranges, etc. Previous update was on 05/17/2017.

- **Utah County:** Obtained roads data on 07/31/2017: added new roads, updated road names and address ranges, etc. Previous update was on 07/18/2017.

- **Washington County:** Obtained roads data on 07/28/2017: added new roads, road names and address ranges, etc. Previous update was on 07/18/2017.

- **Weber County:** Obtained roads data on 07/31/2017: added new roads, road names and address ranges, etc. Previous update was on 07/18/2017.

#### UDOT Route System:

- The `DOT_F_MP` (From Milepost) and `DOT_T_MP` (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated
- The `DOT_RTID` field that stores UDOT's unique numeric route identifiers was updated

#### General Dataset Maintenance
Duplicate vertices (ie: vertices located within 1 meter of eachother) were identified and removed. This cleanup was performed on the entire statewide dataset.
