---
title: Utah SGID Statewide Roads Data Layer Updates 05/30/2018
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2018-05-30
categories:
  - Featured
tags:
  - roads
---

Updates were recently made to the SGID10.Transportation.Roads feature class that resides on the [Utah SGID ArcSDE database server]({{ "/sgid-database/" | prepend: site.baseurl }}).

Updated roads data is also available as shapefiles and file geodatabase files for download on the [SGID Roads and Highway System download page]({{ "/data/transportation/roads-system/" | prepend: site.baseurl }}).

These updates are also reflected in [AGRC's address locators]({{ "/data/address-geocoders-locators/" | prepend: site.baseurl }}) and the [Utah Next-Generation 911 GIS Database]({{ "/data/911/" | prepend: site.baseurl }}).


The following are highlights from this month's update:

#### County Updates:

- **Davis County:** Obtained roads data on 05/03/2018: added new roads, updated road names and address ranges, etc. Previous update was on 04/12/2018.

- **Duchesne County:** Obtained roads data on 05/01/2018: added new roads, updated road names and address ranges, etc. Previous update was on 11/30/2017.
 
- **Iron County:** Obtained roads data on 04/23/2018: change detection was run, but zero new roads or updates were found. Previous update was on 02/15/2018.

- **Salt Lake County:** Obtained roads data on 05/01/2018: added new roads, updated road names and address ranges, etc. Previous update was on 04/12/2018.

- **Summit County:** Obtained roads data on 04/30/2018: added new roads, road names and address ranges, etc. Previous update was on 02/15/2018.

- **Utah County:** Obtained roads data on 05/03/2018: added new roads, road names and address ranges, etc. Previous update was on 04/12/2018.

- **Wasatch County:** Obtained roads data on 05/03/2018: added new roads, road names and address ranges, etc. Previous update was on 01/19/2018.

- **Washington County:** Obtained roads data on 04/13/2018: added new roads, road names and address ranges, etc. Previous update was on 04/12/2018.

- **Weber County:** Obtained roads data on 05/03/2018: added new roads, updated road names and address ranges, etc. Previous update was on 04/12/2018.

#### UDOT Route System:

- The `DOT_F_MILE` (From Milepost) and `DOT_T_MILE` (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated.
- The following SGID feature classes were also updated: SGID10.Transportation.UDOTMileposts; SGID10.Transportation.UDOTRoutes_LRS; and SGID10.Transportation.UDOTTenthMileRefPoints.

#### General Update Notes for this Month:
- Vertical Level field (VERT_LEVEL) attributes were assigned on non-highway roads based on semi-automated process of finding segments that had significant intersect, which were then visually inspected to assign vertical level.  All other segments were assigned ground level, for now.  Work is currently being done to look at highways and other suspect areas.
- Significant work was done to orient Interstate arc directions based on mileposts (arcs were oriented based address systems if address ranges were present - ie: Utah County, etc). One way attributes were also updated to reflect these changes.
- The DOT Left and Right ownership fields (DOT_OWN_L and DOT_OWN_R) were appropriately populated and a domain was added for future maintenance.
