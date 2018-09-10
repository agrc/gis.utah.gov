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

I believe that a review of a system should occur on a continual basis, especially a system as important as the State Geographic Information Database (SGID). In the early days of the SGID the layers it contained were the result of data creation for a project.  As the years rolled by many  agency,county, local and federal partners contributed data.  There were efforts at the state and federal level to identify "framework" layers.  These consisted of Transporation, Landownership, Administrative Boundaries, etc.  The framework layers largely consist of the layers that recieve the most use today.  AGRC has been gathering information from a variety of sources within our data warehouse and services infrastructure.  We have three areas we watch,  the gis.utah.gov site and associated downloads, The AGRC organizational account in ArcGIS Online/Open Data, and the SQL Server database that houses the SGID and also api.mapserv.utah.gov which is the web services gateway. Each time a layer is accessed in the SQL Server database that contains the SGID a record is written in a log. ArcGIS online has its own accounting, gis.utah.gov is watched through google analytics, and api.mapserv.utah.gov has logging associated with web services requests, both in geocoding and point in area queries. 
AGRC will be using these stats to help us understand where we should best focus our time and efforts in enhancing data.  This effort will also allow us to move the layers that are no longer being used to a lower cost storage, the layers will still be available for users to download, however they will not be available via the SGID database connection.  At this time AGRC has been monitoring the SGID database for a week or so and the results are not alltogether surp
