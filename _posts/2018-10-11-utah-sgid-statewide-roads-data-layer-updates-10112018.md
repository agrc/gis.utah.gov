---
title: Utah SGID Statewide Roads Data Layer Updates 10/11/2018
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2018-10-11
categories:
  - Featured
tags:
  - roads
---

AGRC recently completed updates to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({{ "/sgid-database/" | prepend: site.baseurl }}). Updated roads data is also available as shapefiles and geodatabase files for download on the [SGID Roads and Highway System download page]({{ "/data/transportation/roads-system/" | prepend: site.baseurl }}). These updates are also reflected in [AGRC's address locators]({{ "/data/address-geocoders-locators/" | prepend: site.baseurl }}) and the [Utah Next-Generation 911 GIS Database]({{ "/data/911/" | prepend: site.baseurl }}).


The following are highlights from this month's update.  

Note: This update includes two separate road updates, spanning September and October:

#### County Updates
New roads were added and road names and address ranges were updated for the following counties:

- **Cache County:** Obtained roads data on 08/13/2018. Previous update was on 06/27/2018.

- **Davis County:** Obtained roads data on 09/10/2018. Previous update was on 08/14/2018.

- **Salt Lake County (2 updates):** Obtained roads data on 08/09/2018 and 09/10/2018. Previous update was on 08/14/2018.

- **San Juan County:** Obtained roads data on 08/16/2018. Previous update was on 01/2016.

- **Summit Juan County:** Obtained roads data on 08/30/2018. Previous update was on 05/30/2018.

- **Tooele Juan County:** Obtained roads data on 08/10/2018. Previous update was on 06/27/2018.

- **Utah County (2 updates):** Obtained roads data on 08/09/2018 and 09/10/2018. Previous update was on 08/14/2018.

- **Washington County (2 updates):** Obtained roads data on 08/29/2018 and 09/11/2018. Previous update was on 08/14/2018.

- **Weber County (2 updates):** Obtained roads data on 08/30/2018 and 09/28/2018. Previous update was on 06/27/2018.

Data was requested but not received for the following counties:

- **Juab County:** Data requested on 08/10/2018.

- **Millard County:** Data requested on 08/10/2018 and 09/10/2018.

- **Morgan County:** Data requested on 08/10/2018 and 09/10/2018.

- **Wasatch County:** Data requested on 08/10/2018 and 09/10/2018.

#### UDOT Route System:

- The `DOT_F_MILE` (From Milepost) and `DOT_T_MILE` (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated.
- The following SGID feature classes were also updated: SGID10.Transportation.UDOTMileposts; SGID10.Transportation.UDOTRoutes_LRS; and SGID10.Transportation.UDOTTenthMileRefPoints.


#### General Update Notes:
-  This road update includes the Incorporation of Bluff, Utah - which is reflected in the `INCMUNI_L` and `INCMUNI_R` fields.
