---
title: Utah SGID Statewide Roads Data Layer Updates 12/23/2019
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2019-12-23 10:30:00
categories:
  - Featured
tags:
  - roads
---

AGRC recently completed updates to the SGID Roads feature class. Please visit our [Open Data](https://opendata.gis.utah.gov/datasets/utah-roads) site where you preview and obtain SGID Roads data. Also, please visit our [Roads and Highway System]({% link data/transportation/roads-system/index.html %}) data page where you will find information about the Roads data model, as well as direct download links to the SGID Roads data in shapefile and geodatabase format.

These road updates are also reflected in [AGRC's address locators]({% link data/address-geocoders-locators/index.html %}), [AGRC's Network Analysis dataset]({% link data/transportation/street-network-analysis/index.html %}), and [Utah's Next-Generation 911 GIS Database]({% link data/911/index.html %}).

The following are highlights from this month's update.

#### County Updates

New roads were added and road names and address ranges were updated for the following counties:

- **Cache County:** Obtained roads data on 11/31/2019. Previous update was on 10/09/2019.
- **Davis County:** Obtained roads data on 11/30/2019. Previous update was on 10/09/2019.
- **Duchesne County:** Obtained roads data on 10/09/2019. Previous update was on 06/05/2019.
- **Iron County:** Obtained roads data on 10/31/2019. Previous update was on 09/05/2019.
- **Morgan County:** Obtained roads data on 11/30/2019. Previous update was on 10/09/2019.
- **Rich County:** Obtained roads data on 11/12/2019. Previous update was on 02/23/2019.
- **Salt Lake County:** Obtained roads data on 11/27/2019. Previous update was on 10/09/2019.
- **Summit County:** Obtained roads data on 11/31/2019. Previous update was on 09/05/2019.
- **Tooele County:** Obtained roads data on 10/08/2019. Previous update was on 10/09/2019.
- **Utah County:** Obtained roads data on 11/30/2019. Previous update was on 10/09/2019.
- **Washington County:** Obtained roads data on 12/04/2019. Previous update was on 10/09/2019.
- **Weber County:** Obtained roads data on 11/30/2019. Previous update was on 10/09/2019.

Data was requested but not received for the following counties:

- **Box Elder County**
- **Millard County**
- **Wasatch County**

#### UDOT Route System

- The `DOT_F_MILE` (From Milepost) and `DOT_T_MILE` (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in `SGID10.Transportation.Roads` were updated.
- The following SGID feature classes were also updated: `SGID10.Transportation.UDOTMileposts`; `SGID10.Transportation.UDOTRoutes_LRS`; and `SGID10.Transportation.UDOTTenthMileRefPoints`.
