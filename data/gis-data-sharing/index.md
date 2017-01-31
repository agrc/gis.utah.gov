---
layout: page
status: publish
published: true
title: 'GIS Data Requests'
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
date: 2017-01-26 23:40:06
categories:

tags:

---
***GIS Data Sharing***  
_The thought is that a link to this page would be at the very bottom of the /data/ page_ `Contributing to the SGID`  
 
Why? bring the world into harmony  
How? should we make a drop box, email, pull from SDE/FTP/Dropbox  
What? listed below are the layers and desired attributes

*** Primary Datasets ***  
[**Road Centerlines**](#road_centerlines)  
[**Address Points**](#address_points)  
[**Parcels**](#parcel)  

*** Secondary Datasets ***  
[**Boundaries**](#boundaries)  
[**Trails**](#trails)  

---
{: .divider }

[**Road Centerlines**]({{"/data/sgid-transportation/roads-system/" | prepend:site.baseurl}} "Road Centerlines page")  
{: #road_centerlines}
![Road Centerlines]({{"/images/front-page/90x90_utah-gis-highway-lrs-udot.png"| prepend:site.baseurl}})
{: .pull-right}
- Street name
- Street type
- Prefix & Suffix directions
- Address ranges

[**Address Points**]({{"/data/location/address-data/" | prepend:site.baseurl}} "Address Points page")  
{: #address_points}
![Address Points]({{"/images/front-page/90x90_address_points.png" | prepend:site.baseurl}})
{: .pull-right}
- Full Address (physical/situs)(ex. 622 N KAYCIE LN)
- City
- Zip Code
- Parcel ID

[**Parcels**]({{"/data/data/sgid-cadastre/parcels/" | prepend:site.baseurl}} "Basic Parcels page")  
{: #parcels}
![Parcels]({{"/images/front-page/90x90_parcels.png" | prepend:site.baseurl}})
{: .pull-right}
In addition to the parcel polygon geometry the following fields are a necessity:  
- Parcel ID and/or Serial Number
- Parcel Address (physical/situs)_(this attribute is optional if accompanied by Address Points with a Parcel ID and/or Serial Number)_

[**Boundaries**]({{"/data/recreation/trails/" | prepend:site.baseurl}} "Boundaries page")  
{: #boundaries}
![Boundaries]({{"/images/gallery/sgid/zipmain.png" | prepend:site.baseurl}})
{: .pull-right}
- asfda
- asfdas

[**Trails**]({{"/data/recreation/trails/" | prepend:site.baseurl}} "Trails page")  
{: #trails}
![Trails]({{"/images/trail.png" | prepend:site.baseurl}})
{: .pull-right}
A trail, in this context, is defined as .........................

- Name
- CartoCode [(see this)]({{}})
