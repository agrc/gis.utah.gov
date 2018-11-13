---
title: 'ArcGIS Server 10.6 Upgrade'
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
date: 2018-11-07 16:03:25
categories:
  - Featured
  - Developer
tags: []
---

AGRC is planning to upgrade the mapserv ArcGIS Server system to version 10.6.1 within the next few weeks. For the majority of our users, we do not expect any issues, as _most_ services are being migrated as is. _However_, if you are consuming image services, **a migration is necessary** since the image services will no longer be offered.

### AGRC Is Deprecating the Image Services on mapserv.utah.gov
{: .pop}

{% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.change_manager text="If you notice any issues after the upgrade, please let" hide-punctuation=true%}{% endcapture %}

We will post the exact date of the upgrade as we finalize our plans. {{ contact | strip_newlines }} know so that we can address them as soon as possible.

## Migration Options
{: .text-left style="margin-bottom:0px"}

### 1. Local Mosaic Datasets
{: .text-left}

The source data for the image services on mapserv.utah.gov is available for download from [raster.utah.gov](https://raster.utah.gov/). This data allows for the creation of local [mosaic datasets](https://desktop.arcgis.com/en/arcmap/latest/manage-data/raster-and-images/what-is-a-mosaic-dataset.htm) for visualization and analysis. Choose this option if you require advanced analysis of raster data.

### 2. Discover Services
{: .text-left}

The [Discover services](/discover) provided by AGRC intersect the image services. There is **not a complete one-to-one mapping**, as you will see in the table below, but coverage is adequate and Discover has **many more services** not offered as image services. Since the majority of consumers of the image services use them for reference and not advanced image analysis, histogram stretching, etc., the Discover services will provide a better end user experience. The prerendered tiles will be much faster than the on-the-fly processing from the image services.

Below is a table of services that will be removed during the software upgrade. The second column is the closest equivalent Discover service.

## Services Marked for Deprecation
{: .text-left style="margin-bottom:0px"}

| Deprecated Mapserv Service | Discover Alternative |
|:---------------------------|:---------------------|
| AerialPhotography_BlackWhite/DOQ1990s_1Meter | DOQ 1990s BW |
| AerialPhotography_BlackWhite/SCS_HistoricalImagery | N/A |
| AerialPhotography_Color/HRO2006_Color1Foot | N/A |
| AerialPhotography_Color/HRO2009_Color1Foot | N/A |
| AerialPhotography_Color/HRO2009_WestJordan_Color6Inch | N/A |
| AerialPhotography_Color/HRO2012_UintahBasin_Color1Foot | N/A |
| AerialPhotography_Color/HRO2012Color6Inch_4Band | HRO 2012 RGB |
| AerialPhotography_Color/NAIP2004_Color1Meter | N/A |
| AerialPhotography_Color/NAIP2006_Color1Meter | NAIP 2006 RGB & NAIP 2006 NRG |
| AerialPhotography_Color/NAIP2009_Color1Meter_4Band | NAIP 2009 RGB |
| AerialPhotography_Color/NAIP2011_Color1Meter_4Band | NAIP 2011 RGB & NAIP 2011 NRG |
| AerialPhotography_Color/NAIP2014_Color1Meter_4Band | NAIP 2014 RGB & NAIP 2014 NRG |
| AerialPhotography_Color/NAIP2016_Color1Meter_4Band | NAIP 2016 RGB & NAIP 2016 NRG |
| AerialPhotography_Color/UAO2003_Color1Foot | N/A |
| AerialPhotography_InfraRed/NAIP2006CIR_Color1Meter | NAIP 2006 NRG |
| Elevation/Hillshade_10Meter4way | Hillshade |
| Elevation/Hillshade_1MeterLidar | N/A |
| Elevation/Lidar2013_2014_DSM_Hillshade | N/A |
| Elevation/Lidar2013_2014_DSM_ShadedRelief | N/A |
| Elevation/Lidar2013_2014_DSM_Slope | N/A |
| Elevation/Lidar2013_2014_DSM | N/A |
| Elevation/Lidar2013_2014_DTM_Hillshade | N/A |
| Elevation/Lidar2013_2014_DTM_ShadedRelief | N/A |
| Elevation/Lidar2013_2014_DTM_Slope | N/A |
| Elevation/Lidar2013_2014_DTM | N/A |
| ScannedMaps/UGS_Geologic_100K | N/A |
| ScannedMaps/UGS_Geologic_24K | N/A |
| ScannedMaps/USGSTopographic_100K | Basemap-Topo |
| ScannedMaps/USGSTopographic_24K | Basemap-Topo |
| ScannedMaps/USGSTopographic_250K | Basemap-Topo |
| ScannedMaps/USGSTopographic_500K | Basemap-Topo |
| ScannedMaps/USGSVintageTopographic_125K | N/A |
| ScannedMaps/USGSVintageTopographic_62K | N/A |
| ScannedMaps/UtahLandForms | N/A |
