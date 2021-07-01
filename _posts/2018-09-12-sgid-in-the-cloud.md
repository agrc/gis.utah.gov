---
title: 'Public SGID in the Cloud'
published: false
author:
  display_name: Zach Beck
  email: zbeck@utah.gov
date: 2018-09-12 16:09:58
categories:
  - Featured
tags:
  - sgid
  - cloud
---

For those of you who would prefer to access the State Geographic Information Database (SGID) via ESRI’s ArcGIS Desktop software rather than ArcGIS Online or downloads from gis.utah.g\ov, you’re in luck. AGRC is testing a public connection to an instance of the SGID hosted in the Amazon cloud.

This instance of the SGID is recommended if you are outside the State of Utah network and you lost your connection when AGRC stopped supporting SDE application server connections. If you are already within the State network and are connecting to the SGID, you should continue to do so using your existing database connection.

To connect, use the following connection properties:

- **Database Platform**: `SQL Server`
- **Instance**: `cloudsgid.agrc.utah.gov`
- **Authentication Type**: `Database authentication`
- **Username**: `agrc`
- **Password**: `agrc`


You will notice a significant difference in performance between ArcGIS Pro and ArcMap when accessing the database. When making the initial connection, ArcGIS Pro is about three times faster than ArcMap; however, ArcMap is faster than Pro when a layer is added and is first drawn. Go figure . . .

{% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.sgid %}{% endcapture %}
{{ contact }}
