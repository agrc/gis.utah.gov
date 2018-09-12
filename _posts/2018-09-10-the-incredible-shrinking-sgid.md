---
title: 'The Incredible Shrinking SGID'
author:
  display_name: Matt Peters
  email: mpeters@utah.gov
date: 2018-09-10 21:37:46
categories:
  - Featured
tags:
  - SGID
  - data content
---

Over the past several months, AGRC has been reviewing the usage of the State Geographic Information Database (SGID) data layers in order to determine how to most effectively be a steward of the state’s GIS data. 

Established by state law in 1991, Utah’s SGID ensures that GIS map layers are developed in a coordinated fashion and are shared openly. In the early days of the SGID, the layers it contained were the result of data creation for a project. As the years rolled by, however, many local, county, agency, and federal partners contributed data. There were also efforts at the state and federal levels to identify and develop framework layers. Today, the SGID’s framework layers largely consist of layers that receive the most use, including transportation, land ownership, and administrative boundaries. 

In any shared system, especially a system as important as the SGID, review of the data, as well as how it is delivered and made available to users, should occur on a continual basis to ensure the accuracy and quality of that data. With that in mind, AGRC has been reviewing the SGID’s data layers and gathering information from a variety of sources within our data warehouse and services infrastructure. We have four areas we watch where data is accessed or stored: 

- the gis.utah.gov site and associated downloads, 
- the AGRC organizational account in ArcGIS Online/Open Data, 
- the SQL Server database that houses the SGID, and 
- api.mapserv.utah.gov, which is the web services gateway.   

Each of these areas is monitored differently: GIS.utah.gov is watched through Google Analytics; ArcGIS online has its own accounting; the SQL Server database, which contains the SGID, tracks each time a layer is accessed; and api.mapserv.utah.gov has logging associated with web services requests, both in geocoding and point in area queries. 

While watching these areas, AGRC is specifically assessing which data layers are being used most frequently and infrequently. These stats can help us understand the best use of our time and efforts in enhancing the data that is being used and help us determine what to do with the data that is not being used, or is being used less frequently. If we move these less frequently used layers to a lower cost storage, they will still be available for users to download, however they will not be available via the SGID database connection. 
At this time AGRC has been monitoring the SGID database for about a week and the results are not altogether surprising. Transportation, land ownership, and parcel boundaries were all at the top of the list of most commonly used data layers. We are currently unaware of how long we will monitor the layers and how many layers, if any, we will move to a lower cost storage. At some point though, user input will be needed when we start assessing the tier two data layers (i.e., those layers that are accessed but not with the higher frequency of others layers). 

Once we have gathered the stats and user input, we will plan a course of action that will allow us to enhance the layers that are most essential for users. We hope that this effort can build greater collaboration among users—that users provide helpful feedback on how a layer could be enhanced so it would provide the greatest benefit to the widest audience and we can act on that feedback. 
