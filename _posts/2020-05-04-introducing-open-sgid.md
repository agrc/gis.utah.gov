---
title: Introducing the Open SGID Database - A New Publicly Available Data Offering
author:
  display_name: Nathan Kota
  email: nathankota@utah.gov
date: 2020-05-04
categories:
  - Featured
tags:
  - sgid
  - open source
  - cloud
---

It seems so long ago now, but it was less than a year ago when we first [hinted at the possibility]({% link _posts/2019-06-11-sgid-then-and-now.md %}#where-is-the-sgid-going) of a new SGID offering [(then again last fall)]({% link _posts/2019-11-12-sgid-product-relaunch-update.md %}#potential-google-cloud-managed-postgis). We are finally ready to announce the debut of a new open source SGID database---the Open SGID---a cloud-hosted PostgreSQL PostGIS database.

<div class="flex flex--center pop" style="max-width:50%;justify-content:center">
  <h4 style="margin-bottom:0;padding-top:0"><strong>Database Platform</strong>: PostgresSQL</h4>
  <h4 style="margin-top:0;margin-bottom:0;padding-top:0"><strong>Instance</strong>: opensgid.agrc.utah.gov</h4>
  <h4 style="margin-top:0;margin-bottom:0;padding-top:0"><strong>Username</strong>: agrc <strong>Password</strong>: agrc</h4>
</div>

The timing could not be more perfect with the sudden increase in teleworking, which is not expected to wane any time soon, especially here in Utah with the implementation of the [Governor’s teleworking initiative](https://governor.utah.gov/2019/07/16/state-of-utah-introduces-teleworking-program-for-employees/). Not only does the Open SGID benefit Utahns, but it also signals the return to a truly publicly available, direct database connection that can be utilized on a multitude of GIS platforms. Furthermore, it initiates the sunsetting of the state network-only SGID10 database, although both databases (i.e., the Open SGID and the SGID10) will run in parallel for some time to allow users to transition and adapt to the Open SGID.

The new tools and processes developed collectively by AGRC staff to accomplish the Open SGID, as well as the new and improved [Open Data site](https://opendata.gis.utah.gov/), are numerous and worthy of their own blogpost - perhaps some foreshadowing there. However, it is worth noting that a paradigm shift led to the creation of a new internal SGID database that serves as the sole editing environment and data source for the Open SGID and the Open Data site. Automated processes provide nightly updates to both data resources to maintain consistency between them, so you can be sure that you are utilizing the most current data available.

A nearly month-long beta testing period was helpful to identify several issues and some inherent differences between the Open SGID and the enterprise geodatabase of the SGID10 era. A [GitHub repository](https://github.com/agrc/open-sgid) was created as the primary source of information for the Open SGID, and to catalog and address [these issues and differences](https://github.com/agrc/open-sgid/issues) with explanations or troubleshooting techniques.

#### Known issues

- [Tables do not contain metadata](https://github.com/agrc/open-sgid/issues/5)
- [Fields with domains currently only display coded values](https://github.com/agrc/open-sgid/issues/7)

#### Differences from SQL SDE database

- [Table names and casing](https://github.com/agrc/open-sgid/issues/12)
- [Attribute names and casing](https://github.com/agrc/open-sgid/issues/13)
- [Null value sorting behavior](https://github.com/agrc/open-sgid/issues/6)
- [ArcMap requires selection of unique ID field](https://github.com/agrc/open-sgid/issues/9)

Tags are assigned to each issue to provide a level of categorization. This repository will be an important reference for Open SGID users to search for information about known issues, and to submit new issues they encounter, so that AGRC staff and the general user population can collectively offer feedback and solutions. Use the green New issue button on the [issues page](https://github.com/agrc/open-sgid/issues) to submit yours, and visit this page when you first come across a problem with, or question about, the Open SGID to see if others have already found a solution.

Although it may take some time to adjust to the PostgresSQL database format for traditional Esri clients that are familiar with the SQL SDE database, we view the Open SGID as an enhancement to AGRC’s data access points. It provides a direct SGID database connection that is no longer constrained to the Utah state government network, thereby living up to its name as a database that is truly open and accessible to all GIS platforms and users. We look forward to your feedback as both first-time and long-time SGID users utilize Utah’s most comprehensive and authoritative, open source, geospatial database for your cartographic and analytical workflows.
