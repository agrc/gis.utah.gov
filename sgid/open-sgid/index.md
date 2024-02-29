---
title: Connect to the Open SGID
author:
  display_name: UGRC Office
  email: ugrc@utah.gov
date: 2020-05-26 13:58:58 -0600
layout: page_nocrumb
categories: []
tags:
  - how to
  - sgid
  - open sgid
---

The Open SGID is a cloud hosted, publicly available PostGIS database containing our currated SGID data. This database is one part of the [SGID](/documentation/sgid) and complements the web services and data downloads offered on our [Open Data site](https://opendata.gis.utah.gov/).

To search the SGID, please visit the [SGID Index](/products/sgid/sgid-index). To learn more about the data categories available in the SGID, please visit the [UGRC data page](/products/sgid).

### Before you Connect...
{: .text-left }

- Please take a moment to read over the [Open SGID Terms of Use]( /documentation/policy/open-sgid).
- Get familiar with the [Open SGID GitHub repository](https://github.com/agrc/open-sgid), where you can troubleshoot and track known issues.

### How to Connect
{: .text-left }

There are a variety of clients and applications that can connect to a PostgreSQL database. Here are a few of the more common applications and how to connect with them.

- [ArcGIS Desktop](#arcgis-desktop)
- [ArcGIS Pro](#arcgis-pro)
- [DBeaver](#dbeaver)
- [QGIS](#qgis)
- [Global Mapper](#global-mapper)

The username and password to use to connect to the Open SGID can be found on the [Open SGID GitHub repository](https://github.com/agrc/open-sgid#connection-information).

##### ArcGIS Desktop

1. Open ArcCatalog and `Add Database Connection`.

    ![ArcGIS Desktop Add Database]({% link images/desktop_opensgid_add_db.png %}){: .outline loading="lazy" }

1. Enter the connection information from the [Open SGID repository](https://github.com/agrc/open-sgid#connection-information):

    ![ArcGIS Desktop Connection Properties]({% link images/desktop_opensgid_conn.png %}){: .outline loading="lazy" }

##### ArcGIS Pro

1. Open the Catalog pane, right-click `Databases`, and select `New Database Connection`.

    ![ArcGIS Pro Add Database]({% link images/pro_opensgid_add_db.png %}){: .outline loading="lazy" }

1. Enter the connection information from the [Open SGID repository](https://github.com/agrc/open-sgid#connection-information):

    ![ArcGIS Pro Connection Properties]({% link images/pro_opensgid_conn.png %}){: .outline loading="lazy" }

##### DBeaver

1. In DBeaver, click the `New Database Connection` button and choose `PostgreSQL`.

    ![DBeaver Add Database]({% link images/dbeaver_opensgid_add_db.png %}){: .outline loading="lazy" }

1. Enter the connection information from the [Open SGID repository](https://github.com/agrc/open-sgid#connection-information):

    ![DBeaver Connection Properties]({% link images/dbeaver_opensgid_conn.png %}){: .outline loading="lazy" }

##### QGIS

1. In QGIS, navigate to the Browser pane and right-click `PostGIS` then click `New Connection...`.

    ![QGIS Add Database]({% link images/qgis_opensgid_add_db.png %})

1. Enter the connection information from the [Open SGID repository](https://github.com/agrc/open-sgid#connection-information):

    ![QGIS Connection Properties]({% link images/qgis_opensgid_conn.png %}){: .outline loading="lazy" }

##### Global Mapper

1. In Global Mapper, click `File`, and select `Open Spatial Database....`.

    ![Global Mapper Add Database]({% link images/gm_opensgid_add_db.png %}){: loading="lazy" }

1. Enter the connection information from the [Open SGID repository](https://github.com/agrc/open-sgid#connection-information):

    ![Global Mapper Connection Properties]({% link images/gm_opensgid_conn.png %}){: .outline loading="lazy" }
