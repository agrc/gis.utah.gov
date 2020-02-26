---
title: Utah SGID Statewide Roads Data Layer Updates 08/8/2019
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2019-08-08 10:27:06
categories:
  - Featured
tags:
  - roads
---

AGRC recently completed updates to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({% link sgid-database/index.md %}). Updated roads data is also available as shapefiles and geodatabase files for download on the [SGID Roads and Highway System download page]({% link data/transportation/roads-system/index.html %}). These updates are also reflected in [AGRC's address locators]({% link data/address-geocoders-locators/index.html %}) and the [Utah Next-Generation 911 GIS Database]({% link data/911/index.html %}).

The following are highlights from this month's update.

#### County Updates

New roads were added and road names and address ranges were updated for the following counties:

- **Beaver County:** Obtained roads data on 06/07/2019. Previous update was on 08/14/2018.
- **Box Elder County:** Obtained roads data on 06/07/2019. Previous update was on 05/08/2019.
- **Davis County:** Obtained roads data on 07/31/2019. Previous update was on 07/10/2019.
- **Emery County:** Obtained roads data on 07/31/2019. Previous update was on 08/14/2018.
- **Salt Lake County:** Obtained roads data on 07/31/2019. Previous update was on 07/10/2019.
- **Utah County:** Obtained roads data on 07/31/2019. Previous update was on 07/10/2019.
- **Wasatch County:** Obtained roads data on 06/17/2019. Previous update was on 05/08/2019.
- **Washington County:** Obtained roads data on 07/31/2019. Previous update was on 07/10/2019.
- **Weber County:** Obtained roads data on 07/31/2019. Previous update was on 07/10/2019.

#### UDOT Route System:

- The `DOT_F_MILE` (From Milepost) and `DOT_T_MILE` (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in `SGID10.Transportation.Roads` were updated.
- The following SGID feature classes were also updated: `SGID10.Transportation.UDOTMileposts`; `SGID10.Transportation.UDOTRoutes_LRS`; and `SGID10.Transportation.UDOTTenthMileRefPoints`.
