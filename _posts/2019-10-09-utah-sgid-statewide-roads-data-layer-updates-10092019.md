---
title: Utah SGID Statewide Roads Data Layer Updates 10/9/2019
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2019-10-09 10:30:00
categories:
  - Featured
tags:
  - roads
---

AGRC recently completed updates to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({% link sgid-database/index.md %}). Updated roads data is also available as shapefiles and geodatabase files for download on the [SGID Roads and Highway System download page]({% link data/transportation/roads-system/index.html %}). These updates are also reflected in [AGRC's address locators]({% link data/address-geocoders-locators/index.html %}) and the [Utah Next-Generation 911 GIS Database]({% link data/911/index.html %}).

The following are highlights from this month's update.

#### County Updates

New roads were added and road names and address ranges were updated for the following counties:

- **Cache County:** Obtained roads data on 08/23/2019. Previous update was on 07/10/2019.
- **Davis County:** Obtained roads data on 09/30/2019. Previous update was on 09/5/2019.
- **Kane County:** Obtained roads data on 08/21/2019. Previous update was on 02/23/2019.
- **Morgan County:** Obtained roads data on 08/30/2019. Previous update was on 04/02/2019.
- **Salt Lake County:** Obtained roads data on 09/30/2019. Previous update was on 09/5/2019.
- **Tooele County:** Obtained roads data on 08/30/2019. Previous update was on 07/10/2019.
- **Utah County:** Obtained roads data on 09/30/2019. Previous update was on 09/5/2019.
- **Washington County:** Obtained roads data on 09/30/2019. Previous update was on 09/5/2019.
- **Weber County:** Obtained roads data on 09/30/2019. Previous update was on 09/5/2019.

Data was requested but not received for the following counties:

- **Juab County**

#### UDOT Route System

- The `DOT_F_MILE` (From Milepost) and `DOT_T_MILE` (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in `SGID10.Transportation.Roads` were updated.
- The following SGID feature classes were also updated: `SGID10.Transportation.UDOTMileposts`; `SGID10.Transportation.UDOTRoutes_LRS`; and `SGID10.Transportation.UDOTTenthMileRefPoints`.
