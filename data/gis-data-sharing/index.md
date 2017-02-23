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
- agrc
- gis
- data
- sharing
---
Why? bring the world into harmony  
How? should we make a drop box, email, pull from SDE/FTP/Dropbox  
What? listed below are the layers and desired attributes

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

{: .divider }
![Road Centerlines]({{"/images/front-page/90x90_utah-gis-highway-lrs-udot.png"| prepend:site.baseurl}})
{: .pull-right}
### [**Road Centerlines**]({{"/data/sgid-transportation/roads-system/" | prepend:site.baseurl}} "Road Centerlines page")  
{: #road_centerlines}
This is a multi-purpose statewide roads dataset for cartography and range based-address location. View our
[Transportation Data Model](https://drive.google.com/file/d/0Bz18jufMWioiU25icDNoQWlJa2M/view),
[attribute descriptions and definitions](https://docs.google.com/document/d/1ojjqCa1Z6IG6Wj0oAbZatoYsmbKzO9XwdD88-kqm-zQ/edit),
and [download the Transportation Data Model schema](ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/TRANSPORTATION/UnpackagedData/Roads/_Statewide/UtahRoadsDataSchema/UtahRoadsDataSchema_gdb.zip).  
Listed below are considered the minimum attributes:  
- PREDIR
- STREETNAME
- STREETTYPE
- SUFDIR
- L_F_ADD
- L_T_ADD
- R_F_ADD
- R_T_ADD
- ALIAS1
- ALIAS1TYPE
- ALIAS2
- ALIAS2TYPE
- ACSALIAS
- ACSNAME
- ACSSUF
- CLASS
- MODIFYDATE

![Address Points]({{"/images/front-page/90x90_address_points.png" | prepend:site.baseurl}})
{: .pull-right}
### [**Address Points**]({{"/data/location/address-data/" | prepend:site.baseurl}} "Address Points page")  
{: #address_points}
View our
[Address Points Data Model](https://docs.google.com/document/d/1eTgknNbA0UNXnyMDR5q9gFAm0-XtNYQpLLYPSZtCLTU/edit?usp=sharing).  
Listed below are considered the minimum attributes:  
- Full Address (physical/situs)(ex. 622 N KAYCIE LN)
- City
- Zip Code
- Parcel ID

![Parcels]({{"/images/front-page/90x90_parcels.png" | prepend:site.baseurl}})
{: .pull-right}
### [**Parcels**]({{"/data/sgid-cadastre/parcels/" | prepend:site.baseurl}} "Basic Parcels page")  
{: #parcels}
In addition to the parcel polygon geometry the following fields are a necessity:  
Listed below are considered the minimum attributes:  
- Parcel ID and/or Serial Number
- Parcel Address (physical/situs)  _(this attribute is optional if accompanied by Address Points with a Parcel ID and/or Serial Number)_

![Boundaries]({{"/images/front-page/90x90_voter_precincts.png" | prepend:site.baseurl}})
{: .pull-right}
### [**Boundaries**]({{"/data/recreation/trails/" | prepend:site.baseurl}} "Boundaries page")  
{: #boundaries}
- asfda
- asfdas

![Trails]({{"/images/trail.png" | prepend:site.baseurl}})
{: .pull-right}
### [**Trails**]({{"/data/recreation/trails/" | prepend:site.baseurl}} "Trails page")  
{: #trails}
A trail, in this context, is defined as .........................

- Name
- CartoCode [(see this)]({{}})
 
