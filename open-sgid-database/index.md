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

The Open SGID database is a PostGIS Cloud SQL mirror of the AGRC SGID database. This database compliments the web services and data downloads offered on our [Open Data site](https://opendata.gis.utah.gov/). 

To search the SGID, please visit the [SGID Index]({% link data/sgid-index/index.html %}). To learn more about the SGID and the data, please visit the [AGRC data page]({% link data/index.html %}).

### Before you Connect...
{: .text-left }

- Please take a moment to read over the [Open SGID Terms of Use]( {% link about/policy/open-sgid/index.md %}).
- Get familiar with the [Open SGID GitHub repository](https://github.com/agrc/open-sgid) where you can troubleshoot and track known issues.

### How to Connect
{: .text-left }

There are a variety of clients and application that connect to a PostgreSQL/PostGIS database. Here's how to connect using a few of the more common applications (ArcGIS Desktop, ArcGIS Pro, DBeaver, and QGIS). 

The username and password can be found on the [Open SGID GitHub repository](https://github.com/agrc/open-sgid#connection-information).

##### ArcGIS Desktop
- Open ArcCatalog and "Add Database Connection".
    - <img src="{% link images/desktop_opensgid_add_db.png %}" alt="ArcGIS Desktop Add Database" />
- Use the following connection properties:
    - <img src="{% link images/desktop_opensgid_conn.png %}" alt="ArcGIS Desktop Connectin Properties" />

##### ArcGIS Pro
- In ArcGIS Pro, open the Catalog pane, right-click "Databases", and "Add Database".
    - <img src="{% link images/pro_opensgid_add_db.png %}" alt="ArcGIS Pro Add Database" />
- Use the following connection properties:
    - <img src="{% link images/pro_opensgid_conn.png %}" alt="ArcGIS Pro Connectin Properties" />

##### DBeaver
- In DBeaver, click the "New Database Connection" button and choose PostresSQL.
    - <img src="{% link images/dbeaver_opensgid_add_db.png %}" alt="DBeaver Add Database" />
- Use the following connection properties:
    - <img src="{% link images/dbeaver_opensgid_conn.png %}" alt="DBeaver Connectin Properties" />

##### QGIS
- In QGIS, navigate to the Browser pane and right-click "PostGIS" then click "New Connection...".
    - <img src="{% link images/qgis_opensgid_add_db.png %}" alt="QGIS Add Database" />
- Use the following connection properties:
    - <img src="{% link images/qgis_opensgid_conn.png %}" alt="QGIS Connectin Properties" />
