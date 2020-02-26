---
title: Utah SGID Statewide Roads Data Layer Updates 06/27/2018
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2018-06-27
categories:
  - Featured
tags:
  - roads
---

Updates were recently made to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({% link sgid-database/index.md %}).

Updated roads data is also available as shapefiles and file geodatabase files for download on the [SGID Roads and Highway System download page]({% link data/transportation/roads-system/index.html %}).

These updates are also reflected in [AGRC's address locators]({% link data/address-geocoders-locators/index.html %}) and the [Utah Next-Generation 911 GIS Database]({% link data/911/index.html %}).


The following are highlights from this month's update:

#### County Updates: Beaver

- **Cache County:** Obtained roads data on 05/17/2018: added new roads, updated road names and address ranges, etc. Previous update was on 03/16/2018.

- **Daggett County:** Obtained roads data on 05/21/2018: added new roads, updated road names and address ranges, etc. Previous update was on 06/19/2017.

- **Davis County:** Obtained roads data on 06/08/2018: added new roads, updated road names and address ranges, etc. Previous update was on 05/30/2018.

- **Morgan County:** Obtained roads data on 06/09/2018: added new roads, updated road names and address ranges, etc. Previous update was on 03/16/2018.

- **Salt Lake County:** Obtained roads data on  05/31/2018: added new roads, updated road names and address ranges, etc. Previous update was on 05/30/2018.

- **Tooele County:** Obtained roads data on 05/16/2018: added new roads, road names and address ranges, etc. Previous update was on 03/16/2018.

- **Utah County:** Obtained roads data on 05/31/2018: added new roads, road names and address ranges, etc. Previous update was on 05/30/2018.

- **Washington County:** Obtained roads data on 05/31/2018: added new roads, road names and address ranges, etc. Previous update was on 05/30/2018.

- **Weber County:** Obtained roads data on 05/31/2018: Data was received but no updates were detected. Previous update was on 05/30/2018.

#### UDOT Route System:

- The `DOT_F_MILE` (From Milepost) and `DOT_T_MILE` (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated.
- The following SGID feature classes were also updated: SGID10.Transportation.UDOTMileposts; SGID10.Transportation.UDOTRoutes_LRS; and SGID10.Transportation.UDOTTenthMileRefPoints.

#### General Update Notes for this Month:
- To conform to the domain, field values were converted from upper to title casing in the following fields: `ADDRSYS_L`, `ADDRSYS_R`, `INCMUNI_L`, `INCMUNI_R`.
