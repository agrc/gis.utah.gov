---
layout: page
status: publish
published: true
title: 'GIS Data Sharing'
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
date: 2017-01-26 23:40:06
categories:

tags:
- sharing
- gis

---

Data sharing facilitates the consolidation of Utah's GIS resources into one central statewide repository. These statewide data facilitate consumption of the information by organization such as E911, 811 one call centers, Utah Department of Transportation, Governor's Office of Management and Budget, Governor’s Office of Economic Development, Utah State Tax Commission, Utah Division of Wildlife Resources, voting and elections, etc. and promotes the standardization of GIS resources for reliable and consistent information at a statewide level. Having a centralized data warehouse also takes the burden off of you by providing one place to contribute your GIS data.

Data can be provided via email, drop box, sharefile, or we can pull from your SDE, Distributed Geodatabase, FTP, etc. 

Listed below are the layers you can share and the desired attributes.

### **Primary Datasets**
{: .text-left}

- [**Road Centerlines**](#road_centerlines)  
- [**Address Points**](#address_points)  
- [**Parcels**](#parcels)
{: .dotless }

### **Secondary Datasets**
{: .text-left}

- [**Boundaries**](#boundaries)  
- [**Trails**](#trails)
{: .dotless}

![GIS Data Samples]({{"/images/DataRequest.png"| prepend:site.baseurl}})

---
{: .divider }

### [**Road Centerlines**]({{"/data/sgid-transportation/roads-system/" | prepend:site.baseurl}} "Road Centerlines page")  
{: #road_centerlines}

![Road Centerlines]({{"/images/front-page/90x90_utah-gis-highway-lrs-udot.png"| prepend:site.baseurl}})
{: .pull-right}

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

### [**Address Points**]({{"/data/location/address-data/" | prepend:site.baseurl}} "Address Points page")  
{: #address_points}

![Address Points]({{"/images/front-page/90x90_address_points.png" | prepend:site.baseurl}})
{: .pull-right}

View our
[Address Points Data Model](https://docs.google.com/document/d/1eTgknNbA0UNXnyMDR5q9gFAm0-XtNYQpLLYPSZtCLTU/edit?usp=sharing).  
Listed below are considered the minimum attributes:  
- Full Address (physical/situs)(ex. 622 N KAYCIE LN)
- City
- Zip Code
- Parcel ID

### [**Parcels**]({{"/data/sgid-cadastre/parcels/" | prepend:site.baseurl}} "Basic Parcels page")  
{: #parcels}

![Parcels]({{"/images/front-page/90x90_parcels.png" | prepend:site.baseurl}})
{: .pull-right}

In addition to the parcel polygon geometry the following fields are a necessity:  
Listed below are considered the minimum attributes:  
- Parcel ID and/or Serial Number
- Parcel Address (physical/situs)  _(this attribute is optional if accompanied by Address Points with a Parcel ID and/or Serial Number)_


### [**Boundaries**]({{"/data/recreation/trails/" | prepend:site.baseurl}} "Boundaries page")  
{: #boundaries}

![Boundaries]({{"/images/front-page/90x90_voter_precincts.png" | prepend:site.baseurl}})
{: .pull-right}

text needed

- asfda
- asfdas


### [**Trails**]({{"/data/recreation/trails/" | prepend:site.baseurl}} "Trails page")  
{: #trails}

![Trails]({{"/images/trail.png" | prepend:site.baseurl}})
{: .pull-right}

 View the [Trails Data Model](https://docs.google.com/spreadsheets/d/1OPGKmRrLYUBr9qO9EtbX6AwcRla82xMvc-BDr26ia9k/edit#gid=0)

- Name
- CartoCode
 
