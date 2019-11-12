---
layout: page_nocrumb
tags:
  - sharing
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
date: 2017-01-26 23:40:06
title: State - Local GIS Data Partnerships
categories: []
---

Statewide GIS map data layers fulfill a critical need for many organizational business needs, including:

| 911 & NextGen 911 (forthcoming) | Blue Stakes (811) Statewide Utility Notification | Utah Department of Transportation| State & Regional Economic Development |
| Complete Count Preparation for 2020 Census | Utah State Tax Commission | Utah Department of Natural Resources | Statewide Elections Management & Redistricting |

AGRC works with partner agencies and local government toward standardization and interoperability of GIS data resources for reliable and consistent information at a statewide level. The State Geographic Informformation Database provides a 'one-stop-shop' to make discovery, access, and publishing of GIS data efficient.

AGRC has also led partnership efforts to fund, procure, and distribute additional GIS data products, such as aerial photography and lidar purchased through cooperative efforts. Below are are examples of some of those products:

| Aerial Imagery Acquisition (Statewide Hi Res Program) | Aerial Photography Web Services | Custom Base Map Web Services (w/local&state Data) |
| Address Geocoding Web Service | Lidar Acquisition (Statewide 3DEP-Type Program) | Lidar Acquisition (3DEP-type Projects) |
| Realtime GPS Correction Service | Highway Milepost Reference | Highway Exit Numbers and Names |
| State Agency Data Layers in SGID (DNR, DEQ, SITLA) | USGS Topo Quad Web Services | State Cadastral Grant Funding |

GIS data can be shared to AGRC for publication in the State Geographic Information Database (and related web serves) via [email]({{ "/about/contact/" | prepend: site.baseurl }}), [Dropbox](https://www.dropbox.com/), [ShareFile](https://www.sharefile.com/), or we can pull from an ArcSDE connection or web-accessible file geodatabase or shapefile (https://, ftp://, etc.).

Listed below are the layers we hope to complete and keep current through partnership with county and local government, and the desired attribute information.

### Primary Datasets
{: .text-left}

- [Road Centerlines](#road_centerlines)
- [Address Points](#address_points)
- [Parcels](#parcels)
{: .dotless }

### Secondary Datasets
{: .text-left}

- [Boundaries](#boundaries)
- [Building Footprints](#building_footprints)
- [Trails](#trails)
{: .dotless}

![GIS Data Samples]({{"/images/DataRequest.png"| prepend:site.baseurl}}){: style="width:100%" }

---
{: .divider }

### [Road Centerlines]({{"/data/transportation/roads-system/" | prepend:site.baseurl}} "Road Centerlines page"){: #road_centerlines }

![Road Centerlines]({{"/images/90x90_utah-gis-highway-lrs-udot.png"| prepend:site.baseurl}}){: .pull-right .outline }

This is a multi-purpose statewide roads dataset for cartography and range based-address location. View our
[Transportation Data Model](https://drive.google.com/file/d/0Bz18jufMWioiU25icDNoQWlJa2M/view),
[attribute descriptions and definitions](https://docs.google.com/document/d/1ojjqCa1Z6IG6Wj0oAbZatoYsmbKzO9XwdD88-kqm-zQ/edit),
and [download the Transportation Data Model schema](ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/TRANSPORTATION/UnpackagedData/Roads/_Statewide/UtahRoadsDataSchema/UtahRoadsDataSchema_gdb.zip).

Listed below are considered the minimum attributes:

| PREDIR | STREETNAME | STREETTYPE | SUFDIR |
| L_F_ADD | L_T_ADD | R_F_ADD | R_T_ADD |
| ALIAS1 | ALIAS1TYPE | ALIAS2 | ALIAS2TYPE |
| ACSALIAS | ACSNAME | ACSSUF | CLASS |
| MODIFYDATE | | | |

### [Address Points]({{"/data/location/address-data/" | prepend:site.baseurl}} "Address Points page"){: #address_points }

![Address Points]({{"/images/90x90_address_points.png" | prepend:site.baseurl}}){: .pull-right .outline}

View our
[Address Points Data Model](https://docs.google.com/document/d/1eTgknNbA0UNXnyMDR5q9gFAm0-XtNYQpLLYPSZtCLTU/edit?usp=sharing) and samples of [what they are used for]({{ "/downloads/Address_Point_Database_Values_V1_051914.pdf" | prepend: site.baseurl }}).
Listed below are considered the minimum attributes:

| Full Address (physical/situs)(ex. 622 N KAYCIE LN) | City | Zip Code | Parcel ID |

### [Parcels]({{"/data/cadastre/parcels/" | prepend:site.baseurl}} "Basic Parcels page"){: #parcels}

![Parcels]({{"/images/90x90_parcels.png" | prepend:site.baseurl}}){: .pull-right .outline }

The information below pertains to the _Basic Parcels_ however _Land Information Record Parcels_ (LIR) are also requested. More information about the LIR Parcels can be found on the [Work Group Recomends Expanded GIS Parcel Sharing]({{site.baseurl}}{% post_url 2016-05-26-work-group-recommends-expanded-gis-parcel-sharing %}) page.

In addition to the parcel polygon geometry the following fields are a necessity and are considered the minimum attributes for the Basic Parcels:

| Parcel ID and/or Serial Number | Parcel Address (physical/situs)  _(this attribute is optional if accompanied by Address Points with a Parcel ID and/or Serial Number)_ |

### [Boundaries]({{"/data/recreation/trails/" | prepend:site.baseurl}} "Boundaries page"){: #boundaries }

![Boundaries]({{"/images/90x90_voter_precincts.png" | prepend:site.baseurl}}){: .pull-right .outline }

County and Municipal boundary changes should be submitted to the Lieutenant Governor's office and follow the requirements in state code. More information can be found on the [Utah Lieutenant Governor Municipal Certifications](https://municert.utah.gov/) website.

### [Building Footprints]({{"/data/location/building-footprint/" | prepend:site.baseurl}} "Building Footprints page"){: #building_footprints }

![Building Footprints]({{"/images/90x90_building_footprints.png" | prepend:site.baseurl}}){: .pull-right .outline}

This is a multi-purpose dataset of building footprint polygons for cartography and location purposes. The attributes below are optional:

| Name | Type | Address | Parcel ID | Source Year |

### [Trails]({{"/data/recreation/trails/" | prepend:site.baseurl}} "Trails page"){: #trails }

![Trails]({{"/images/trail.png" | prepend:site.baseurl}}){: .pull-right .outline }

View the [Trails Data Model](https://docs.google.com/spreadsheets/d/1OPGKmRrLYUBr9qO9EtbX6AwcRla82xMvc-BDr26ia9k/edit#gid=0). The following attributes are requested:

| Name | CartoCode |
