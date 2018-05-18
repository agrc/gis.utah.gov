---
layout: post
status: publish
published: true
title: '2018 Utah LiDAR Acquisition'
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
date: 2018-05-17 18:17:41
categories:
- Featured
tags:
- lidar
---

AGRC has awarded Aero-Graphics, Inc. (AGI) to acquire [*10,450 square miles*](https://arcg.is/H5CzO "view project areas in ArcGIS Online") of LiDAR Elevation data. The LiDAR will be a combination of USGS Quality Level 1 (_QL1_), 8 points per square meter and Quality Level 2 (_QL2_), 2 points per square meter depending on the area. The acquisitions have begun and will continue throughout the year. The acquisitions will be completed in 2018 and project deliverables are scheduled to be completed by June 30, 2019.

The Federal Emergency Management Agency and the U.S. Geological Survey National Map 3D Elevation Program (3DEP) are also acquiring [*4,690 square miles*](https://arcg.is/H5CzO "view project areas in ArcGIS Online") of LiDAR Elevation data this year. The LiDAR will be a combination of USGS Quality Level 1 (_QL1_), 8 points per square meter and Quality Level 2 (_QL2_), 2 points per square meter depending on the area. The acquisitions have begun and will continue throughout the spring. The acquisitions and project deliverables are scheduled to be completed around the end of December 2018.

[![Project area map]({{"/images/2018UtahLidarAcquisition_sm.png" | prepend:site.baseurl}} "view project area map")]({{"/images/2018UtahLidarAcquisition.png" | prepend:site.baseurl}}){:.inline-text-right}

### The Project Areas
{: .text-left }

- Greater Sevier Watershed
- 2017 Brianhead Fire area
- Cedar City Ranger District
- Bryce Canyon National Park
- Areas within:
  - 28 of the 29 Utah Counties
  - 136 of the 251 Utah Municipalities
  - 133 of the 326 Utah Cities

### The Project Deliverables
{: .text-left }

- Raw Point Cloud
- Classified Point Cloud (2 or 8 points per square meter with 10cm vertical RMSE)
  - Ground
  - Water
  - Bridge
  - Unclassified
- Bare-Earth Terrain Model (DTM) (0.5 or 1 meter cell size with 10cm vertical RMSE with Hydro-Flattening)
- First Return Surface Model (DSM) (0.5 or 1 meter cell size with 10cm vertical RMSE)
- Intensity Images (0.5 or 1 meter resolution GeoTIFFs)
- Metadata

### The Project Partners
{: .text-left }

- U.S. Geological Survey National Map: 3D Elevation Program (3DEP)
- National Resource Conservation Service
- National Geospatial Center of Excellence
- U.S. Forest Service
- U.S. National Park Service
- Utah Division of Emergency Management
- Utah Geological Survey
- Utah Division of Forestry, Fire and State Lands
- Utah Division of Water Resources
- Weber County
- City of Moab
- Park City Municipal Corp.
- Tooele Army Depot
- Wasatch Ski Resorts
- Cochino County, AZ


{% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.elevation %}{% endcapture %}
{{ contact | strip_newlines }}
