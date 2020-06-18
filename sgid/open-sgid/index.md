---
title: Connect to the Open SGID
author:
  display_name: AGRC Office
  email: agrc@utah.gov
date: 2020-05-26 13:58:58 -0600
layout: page_nocrumb
categories: []
tags:
  - how to
  - sgid
  - open sgid
---

The Open SGID is a cloud hosted, publicly available PostGIS database containing SGID data. This database complements the web services and data downloads offered on our [Open Data site](https://opendata.gis.utah.gov/).

To search the SGID, please visit the [SGID Index]({% link data/sgid-index/index.html %}). To learn more about the SGID and the data, please visit the [AGRC data page]({% link data/index.html %}).

### Before you Connect...
{: .text-left }

- Please take a moment to read over the [Open SGID Terms of Use]( {% link about/policy/open-sgid/index.md %}).
- Get familiar with the [Open SGID GitHub repository](https://github.com/agrc/open-sgid), where you can troubleshoot and track known issues.

### How to Connect
{: .text-left }

There are a variety of clients and applications that can connect to a PostgreSQL database. Here are a few of the more common applications and how to connect with them.

- [ArcGIS Desktop](#arcgis-desktop)
- [ArcGIS Pro](#arcgis-pro)
- [DBeaver](#dbeaver)
- [QGIS](#qgis)

The username and password to use to connect to the Open SGID can be found on the [Open SGID GitHub repository](https://github.com/agrc/open-sgid#connection-information).

##### ArcGIS Desktop

1. Open ArcCatalog and `Add Database Connection`.

    ![ArcGIS Desktop Add Database]({% link images/desktop_opensgid_add_db.png %}){: .outline}

1. Use the following connection properties:

    ![ArcGIS Desktop Connection Properties]({% link images/desktop_opensgid_conn.png %}){: .outline}

##### ArcGIS Pro

1. Open the Catalog pane, right-click `Databases`, and select `Add Database`.

    ![ArcGIS Pro Add Database]({% link images/pro_opensgid_add_db.png %}){: .outline}

1. Use the following connection properties:

    ![ArcGIS Pro Connection Properties]({% link images/pro_opensgid_conn.png %}){: .outline}

##### DBeaver

1. In DBeaver, click the `New Database Connection` button and choose `PostresSQL`.

    ![DBeaver Add Database]({% link images/dbeaver_opensgid_add_db.png %}){: .outline}

1. Use the following connection properties:

    ![DBeaver Connection Properties]({% link images/dbeaver_opensgid_conn.png %}){: .outline}


##### QGIS

1. In QGIS, navigate to the Browser pane and right-click `PostGIS` then click `New Connection...`.

    ![QGIS Add Database]({% link images/qgis_opensgid_add_db.png %})

1. Use the following connection properties:

    ![QGIS Connection Properties]({% link images/qgis_opensgid_conn.png %}){: .outline}
