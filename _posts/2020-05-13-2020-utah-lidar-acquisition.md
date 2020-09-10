---
title: '2019 and 2020 Utah Aerial Lidar Acquisition'
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
date: 2020-05-13 12:10:00
categories:
- Featured
tags:
- lidar
- 3dep
---

AGRC has awarded Aero-Graphics, Inc. and The Sanborn Map Company, Inc. to acquire [**20,958 square miles**](http://arcg.is/08W4bS "view project areas in ArcGIS Online") of aerial lidar elevation data. The lidar will be a combination of USGS Quality Level 1 (_QL1_), 8 points per square meter and Quality Level 2 (_QL2_), 2 points per square meter depending on the area. The 2019 QL2 project covering portions of Kane County, Utah was acquired last fall, is going through USGS Quality Assurance, and is scheduled to be completed by June 30, 2020. ( _Due to Covid-19 related setbacks deliverables shoudd available by November 2020._ ) The 2020 acquisitions have begun and will continue throughout the year. These project areas will be completed in 2021 and project deliverables are scheduled to be completed by June 30, 2021.

The Federal Emergency Management Agency, the U.S. Forest Service, and the U.S. Geological Survey (USGS) National Map 3D Elevation Program (3DEP) are also acquiring [**13,681 square miles**](http://arcg.is/08W4bS "view project areas in ArcGIS Online") of aerial lidar in Utah this year. The lidar will mostly be QL2, with a few small areas as QL1. The acquisitions will begin in the fall of 2020 and project deliverables are scheduled to be completed by June 30, 2022.

You are welcome to download the boundaries for all the project areas as a [shapefile](https://drive.google.com/a/utah.gov/uc?id=1-oxmHxLEDPAhM2SKKKh_Df8Pa0iUWKvD&export=download).

[![Project area map]({% link images/2020UtahLidarAcquisition_5_17_20_sm.png %} "view project area map")]({% link images/2020UtahLidarAcquisition_5_17_20.png %}){:.inline-text-right}

### The Project Areas Include
{: .text-left }

- Grand Staircase-Escalante National Monument
- Bears Ears National Monument
- Capitlol Reef National Park
- Arches National Park
- Flaming Gorge National Recreation Area
- Glen Canyon National Recreation Area
- Sections of the Green and Colorado Rivers
- Portions of the Greater Sevier Watershed
- Portions of the Manti-La Sal, Fishlake, Ashley, Wasatch-Cache, Uintah, and Dixie National Forests
- Areas within:
  - All 29 Utah Counties
  - 58 of the 253 Utah Municipalities
  - 30 of the 249 Utah Cities & Towns

### The Project Deliverables
{: .text-left }

- Raw Point Cloud
- Classified Point Cloud (2 or 8 points per square meter with 10cm vertical RMSE)
  - Ground (bare earth)
  - Water
  - Bridge decks
  - Snow (if present and identifiable)
  - Low and High Noise
  - Processed, but unclassified
- Bare-Earth Terrain Model (DTM) (0.5 or 1 meter cell size with 10cm vertical RMSE with Hydro-Flattening)
- First Return Surface Model (DSM) (0.5 or 1 meter cell size with 10cm vertical RMSE) (_not available for FEMA HQ areas_)
- Intensity Images (0.5 or 1 meter resolution GeoTIFFs) (_not available for FEMA HQ areas_)
- Metadata

### The Project Partners
{: .text-left }

- U.S. Geological Survey National Map: 3D Elevation Program (3DEP)
- Federal Emergency Management Agency (FEMA)
- Utah Division of Emergency Management
- National Resource Conservation Service
- U.S. Forest Service
- Utah Geological Survey
- Cryq Energy, Inc.


{% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.elevation %}{% endcapture %}
{{ contact }}
