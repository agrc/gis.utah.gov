---
title: Utah SGID Statewide Roads Data Layer Updates 11/09/2021
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2021-11-09 10:30:00
categories:
  - Featured
tags:
  - Roads
---

UGRC recently completed updates to the SGID Roads feature class. Please visit our [Roads and Highway System]({% link data/transportation/roads-system/index.html %}) data page where you will find information about the Roads data model, as well as direct download links to the SGID Roads data in shapefile and geodatabase format.

These updates are also reflected in UGRC's [address locators]({% link data/address-geocoders-locators/index.html %}), Utah's [Next-Generation 911 GIS database]({% link data/911/index.html %}), and UGRC's [street network analysis datasets]({% link data/transportation/street-network-analysis/index.html %}).

The following are highlights from this month's update.

#### County Updates

New roads were added and road names and address ranges were updated for the following counties:

- **Carbon County:** Obtained roads data on 10/06/2021. Previous update was on 06/04/2021.
- **Davis County:** Obtained roads data on 10/21/2021. Previous update was on 08/06/2021.
- **Kane County:** Obtained roads data on 09/27/2021. Previous update was on 07/14/2021.
- **Millard County:** Obtained roads data on 07/27/2021. Previous update was on 10/09/2020.
- **Salt Lake County:** Obtained roads data on 10/25/2021. Previous update was on 08/06/2021.
- **Sevier County:** Obtained roads data on 10/15/2021. Previous update was on 05/07/2021.
- **Tooele County:** Obtained roads data on 09/27/2021. Previous update was on 11/06/2020.
- **Utah County:** Obtained roads data on 10/20/2021. Previous update was on 09/03/2021.
- **Wasatch County:** Obtained roads data on 10/17/2021. Previous update was on 05/07/2021.
- **Washington County:** Obtained roads data on 10/20/2021. Previous update was on 09/03/2021.
- **Weber County:** Obtained roads data on 10/26/2021. Previous update was on 08/06/2021.

#### Notes

- This month's road update combines data updates from September and October for the following counties: Davis, Salt Lake, Utah, Washington, Weber.
- Also worth mentioning this month, using a python script, the average direction of road centerline geometries was checked against their predirection to determine if they were likely pointed in the wrong direction. If so, the vertices were reversed, flipping the road centerline's primary direction to better align with its predirection.

#### UDOT Route System

- The [SGID LRS page]({% link data/transportation/roads-system/index.html %}#HighwayLinearReferencingSystemRoutes) now points to UDOT's newest Advanced LRS (ALRS) data.
