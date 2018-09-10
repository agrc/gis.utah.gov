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
