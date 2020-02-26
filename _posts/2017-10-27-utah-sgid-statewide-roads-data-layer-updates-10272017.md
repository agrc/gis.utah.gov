---
title: Utah SGID Statewide Roads Data Layer Updates 10/27/2017
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2017-10-27
categories:
  - Featured
tags:
  - data
  - roads
---

Updates were recently made to the SGID10.Transportation.Roads and [SGID10.Transportation.RoadsODM]({% post_url 2017-08-15-major-updates-coming-to-roads-data-model %}) feature classes that resides on the [Utah SGID ArcSDE database server]({% link sgid-database/index.md %}).

Updated roads data is also available as shapefiles and file geodatabase files for download on the [SGID Roads and Highway System download page]({% link data/transportation/roads-system/index.html %}).

These updates are also reflected in [AGRC's address locators]({% link data/address-geocoders-locators/index.html %}).


The following are highlights from this month's update:

#### County Updates:

- **Box Elder County:** Obtained roads data on 09/15/2017: added new roads, updated road names and address ranges, etc. Previous update was on 07/18/2017.

- **Carbon County:** Obtained roads data on 09/30/2017: added new roads, updated road names and address ranges, etc. Previous update was on 04/06/2017.

- **Davis County:** Obtained roads data on 09/30/2017: added new roads, updated road names and address ranges, etc. Previous update was on 09/28/2017.

- **Salt Lake County:** Obtained roads data on 09/30/2017: added new roads, updated road names and address ranges, etc. Previous update was on 09/28/2017.

- **Utah County:** Obtained roads data on 10/06/2017: added new roads, updated road names and address ranges, etc. Previous update was on 09/28/2017.

- **Washington County:** Obtained roads data on 09/30/2017: added new roads, road names and address ranges, etc. Previous update was on 08/15/2017.

- **Weber County:** Obtained roads data on 08/31/2017: added new roads, road names and address ranges, etc. Previous update was on 09/28/2017.

#### UDOT Route System:

- The `DOT_F_MP` (From Milepost) and `DOT_T_MP` (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated
- The `DOT_RTID` field that stores UDOT's unique numeric route identifiers was updated

#### General Dataset Maintenance
- Implemented a more complete and standardized street (post) type domain for `POSTTYPE`, `A1_POSTTYPE`, and `A2_POSTTYPE` then ensured that all existing values in `POSTTYPE` conform to this new domain.
