---
title: Utah SGID Statewide Roads Data Layer Updates 07/10/2019
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2019-07-10 10:27:06
categories:
  - Featured
tags:
  - roads
---

AGRC recently completed updates to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({{ "/sgid-database/" | prepend: site.baseurl }}). Updated roads data is also available as shapefiles and geodatabase files for download on the [SGID Roads and Highway System download page]({{ "/data/transportation/roads-system/" | prepend: site.baseurl }}). These updates are also reflected in [AGRC's address locators]({{ "/data/address-geocoders-locators/" | prepend: site.baseurl }}) and the [Utah Next-Generation 911 GIS Database]({{ "/data/911/" | prepend: site.baseurl }}).

The following are highlights from this month's update.

#### County Updates

New roads were added and road names and address ranges were updated for the following counties:

- **Cache County:** Obtained roads data on 05/31/2019. Previous update was on 04/02/2019.
- **Daggett County:** Obtained roads data on 05/31/2019. Previous update was on 06/27/2018. 
- **Davis County:** Obtained roads data on 06/31/2019. Previous update was on 06/05/2019.
- **Salt Lake County:** Obtained roads data on 06/28/2019. Previous update was on 06/05/2019.
- **Tooele County:** Obtained roads data on 05/31/2019. Previous update was on 04/02/2019.
- **Utah County:** Obtained roads data on 06/28/2019. Previous update was on 06/05/2019.
- **Washington County:** Obtained roads data on 06/28/2019. Previous update was on 06/05/2019.
- **Weber County:** Obtained roads data on 06/31/2018. Previous update was on 06/05/2019.

Data was requested but not received for the following counties:

- **Morgan County:** Data requested but not yet received.

#### UDOT Route System:

- The `DOT_F_MILE` (From Milepost) and `DOT_T_MILE` (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in `SGID10.Transportation.Roads` were updated.
- The following SGID feature classes were also updated: `SGID10.Transportation.UDOTMileposts`; `SGID10.Transportation.UDOTRoutes_LRS`; and `SGID10.Transportation.UDOTTenthMileRefPoints`.
