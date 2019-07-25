---
layout: post
status: publish
published: true
title: '2018 Utah LiDAR Acquisition - Completed'
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
date: 2018-05-17 18:17:41
update_date: 2019-07-16 18:17:41
categories:
- Featured
tags:
- lidar
---

AGRC has awarded Aero-Graphics, Inc. (AGI) to acquire [*10,450 square miles*](http://utah.maps.arcgis.com/home/webmap/viewer.html?webmap=579b517bd8d040969fc3418328c31f31 "view project areas in ArcGIS Online") of LiDAR Elevation data. The LiDAR will be a combination of USGS Quality Level 1 (_QL1_), 8 points per square meter and Quality Level 2 (_QL2_), 2 points per square meter depending on the area. The acquisitions have begun and will continue throughout the year. The acquisitions will be completed in 2018 and project deliverables are scheduled to be completed by June 30, 2019.

The Federal Emergency Management Agency and the U.S. Geological Survey (USGS) National Map 3D Elevation Program (3DEP) are also acquiring [*4,690 square miles*](http://utah.maps.arcgis.com/home/webmap/viewer.html?webmap=579b517bd8d040969fc3418328c31f31 "view project areas in ArcGIS Online") of LiDAR Elevation data this year. The LiDAR will be a combination of USGS QL1, 8 points per square meter, and QL2, 2 points per square meter, depending on the area. The acquisitions have begun and will continue throughout the spring. The acquisitions and project deliverables are scheduled to be completed around the end of December 2018.

#### UPDATE 9/11/2018
{: .text-left }

Three additional areas in Utah have been added to the 2018 project areas:

- The Box Elder project (~2,238 square miles) covers areas of northern Box Elder County.
- The Brian Head Addition (~216 square miles) completes the coverage of the Cedar City Ranger District and the 2017 Brian Head Fire area.
- The Sanpete Valley project (~441 square miles) covers areas in Sanpete County and will be acquired by Aerial Surveys International, LLC.

All three project areas will be acquired as USGS QL1, 8 points per square meter. The acquisition of these areas will be completed in 2018, and project deliverables are scheduled to be completed by August 31, 2019. You are welcome to download the boundaries for all the project areas as a [geodatabase and shapefile](https://drive.google.com/a/utah.gov/uc?id=1BkO7aWhFARM-U--KGi4Wn3diNIx7kban&export=download).

[![Project area map]({{"/images/2018UtahLidarAcquisition_8_30_18_sm.png" | prepend:site.baseurl}} "view project area map")]({{"/images/2018UtahLidarAcquisition_8_30_18.png" | prepend:site.baseurl}}){:.inline-text-right}

#### UPDATE 7/17/2019
{: .text-left }

With the exception of the Unitah Basin / Heber Valley project, managed through the USGS Geospatial Product and Service Contracts (GPSC), all other 2018 project areas are completed and available for download. The Unitah Basin / Heber Valley project should be completed and delivered soon. All other 2018 projects are available from [Raster.utah.gov](https://raster.utah.gov). Below are links to the individual web pages for each project.

- [Northern Utah]({{"/data/elevation-and-terrain/2018-lidar-northern-utah/" | prepend:site.baseurl}})
- [Central Utah]({{"/data/elevation-and-terrain/2018-lidar-central-utah/" | prepend:site.baseurl}})
- [Southern Utah]({{"/data/elevation-and-terrain/2018-lidar-southern-utah/" | prepend:site.baseurl}}) (includes Brian Head Addition)
- [Sanpete Valley]({{"/data/elevation-and-terrain/2018-lidar-sanpete-valley/" | prepend:site.baseurl}})
- [Box Elder]({{"/data/elevation-and-terrain/2018-lidar-box-elder/" | prepend:site.baseurl}})

### The Project Areas
{: .text-left }

- Greater Sevier Watershed
- 2017 Brian Head Fire Area
- Cedar City Ranger District
- Bryce Canyon National Park
- Uintah Basin
- Areas within:
  - 28 of the 29 Utah Counties
  - 150 of the 251 Utah Municipalities
  - 153 of the 326 Utah Cities

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
- Mohave County, AZ

{% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.elevation %}{% endcapture %}
{{ contact }}
