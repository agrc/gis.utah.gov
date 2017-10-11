---
status: publish
layout: page
tags:
  - SGID
  - SDE
  - how to
author:
  display_name: Zach Beck
  email: zbeck@utah.gov
published: true
date: 2012-04-10 13:58:58 -0600
title: How to Connect to the SGID via ArcSDE
categories: []
---
The SGID is a collection of vector-format GIS feature classes. Its' content is available for download from the [data pages]({{ "/data/" | prepend: site.baseurl }}) on this website or via an ArcSDE database connection **for users within the State of Utah network**. Users with ArcGIS desktop clients that are at 10.2.1 or higher can use this resource.

The SGID's organization is based on ISO Topic Categories. AGRC treats the ISO categories as a guideline, and the main goal is to maximize usability for GIS users.

#### When to use?

Using a database connection to the most current ArcSDE server can be advantageous as users will see and query the most updated version of all feature classes housed at AGRC. Live connections are excellent for browsing, exploring, or making quick maps with SGID data layers. However, users are encouraged to download or export data files where editing, archiving project data, or optimal performance is required. Additionally, it is recommended and in some cases required that users' ArcMap release version be at or above the level of AGRC's ArcSDE server.

#### Connecting

1. In ArcCatalog or ArcMap (from Add Data), browse to `Add Spatial Database Connections`
  - <img src="{{ "/images/connect_tree.png" | prepend: site.baseurl }}" alt="ArcMap Add Spatial Connection Screenshot" />
1. Provide the following connection information, including the password `agrc`.
  - <img src="{{ "/images/sgidconnect.png" | prepend: site.baseurl }}" title="database connection dialog" alt="database connection dialog" />

After these steps you will be able to browse the entire SGID catalog and add data to your projects.
