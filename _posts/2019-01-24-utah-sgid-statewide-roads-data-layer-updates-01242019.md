---
title: Utah SGID Statewide Roads Data Layer Updates 01/24/2019
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2019-01-24 10:27:06
categories:
  - Featured
tags:
  - roads
---

AGRC recently completed updates to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({{ "/sgid-database/" | prepend: site.baseurl }}). Updated roads data is also available as shapefiles and geodatabase files for download on the [SGID Roads and Highway System download page]({{ "/data/transportation/roads-system/" | prepend: site.baseurl }}). These updates are also reflected in [AGRC's address locators]({{ "/data/address-geocoders-locators/" | prepend: site.baseurl }}) and the [Utah Next-Generation 911 GIS Database]({{ "/data/911/" | prepend: site.baseurl }}).


The following are highlights from this month's update.

#### County Updates
New roads were added and road names and address ranges were updated for the following counties:

- **Cache County:** Obtained roads data on 11/19/2018. Previous update was on 10/11/2018.

- **Davis County:** Obtained roads data on 12/06/2018. Previous update was on 11/29/2018.

- **Morgan County:** Obtained roads data on 11/30/2018. Previous update was on 11/29/2018.

- **Salt Lake County:** Obtained roads data on 11/30/2018. Previous update was on 11/29/2018.

- **Tooele County:** Obtained roads data on 10/12/2018. Previous update was on 10/11/2018.

- **Utah County:** Obtained roads data on 11/30/2018. Previous update was on 11/29/2018.

- **Washington County:** Obtained roads data on 11/30/2018. Previous update was on 11/29/2018.

- **Weber County:** Obtained roads data on 11/30/2018. Previous update was on 11/29/2018.

Data was requested but not received for the following counties:

- **Sanpete County:** Data requested on 12/06/2018.

- **Wasatch County:** Data requested on 12/06/2018.

#### UDOT Route System:

- The `DOT_F_MILE` (From Milepost) and `DOT_T_MILE` (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated.
- The following SGID feature classes were also updated: SGID10.Transportation.UDOTMileposts; SGID10.Transportation.UDOTRoutes_LRS; and SGID10.Transportation.UDOTTenthMileRefPoints.
