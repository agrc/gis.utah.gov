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

The new tools and processes built by AGRC staff to develop the Open SGID, as well as the new and improved [Open Data site](https://opendata.gis.utah.gov/), are numerous and worthy of their own blogpost---perhaps some foreshadowing there. In this post though, we'll note that a paradigm shift led to the creation of a new internal SGID database that serves as the sole editing environment and data source for the Open SGID and the Open Data site.  

### Why and How You Should Use the Open SGID

Automated processes provide nightly updates to both the Open SGID and the Open Data site in order to maintain consistency between them, so when you use the Open SGID, you can be sure that you are utilizing the most current data available. This nightly update schedule is especially helpful for datasets that change often, such as the statewide roads data layer and the address points data layer. 

And this is just one of the many benefits of using the Open SGID. The Open SGID makes it especially convenient to choose from a wide-ranging list of data, and to explore that data quickly. You can also use the Open SGID for other tasks, such as cartography (making cool maps), geoprocessing (solving problems), analyzing data (writing spatial queries), and scripting (clicking fewer buttons). 

A nearly month-long beta testing period was helpful to identify several issues and some inherent differences between the Open SGID and the enterprise geodatabase of the SGID10 era. A [GitHub repository](https://github.com/agrc/open-sgid) was created as the primary source of information for the Open SGID and to catalog and address [these issues and differences](https://github.com/agrc/open-sgid/issues) with explanations or troubleshooting techniques, or both. Tags are assigned to each issue to provide a level of categorization. 

#### Known Issues

- [Tables do not contain metadata.](https://github.com/agrc/open-sgid/issues/5)
- [Fields with domains currently only display coded values.](https://github.com/agrc/open-sgid/issues/7)

#### Differences from SQL SDE Database

- [Table names and casing](https://github.com/agrc/open-sgid/issues/12)
- [Attribute names and casing](https://github.com/agrc/open-sgid/issues/13)
- [Null value sorting behavior](https://github.com/agrc/open-sgid/issues/6)
- [Required  selection of unique ID field in ArcMap](https://github.com/agrc/open-sgid/issues/9)

If you come across a problem with or have a question about the Open SGID, visit the [issues page](https://github.com/agrc/open-sgid/issues). This repository not only acts as an important resource for Open SGID users to search for information about known issues, but also allows users to submit new issues they encounter, so AGRC staff and the general user population can collectively offer feedback and solutions. If you have not yet found an answer or solution to your topic, you can use the green _New issue_ button to submit it to the community. Also be sure to check out the [Open SGID Policy and Terms of Use page]({% link about/policy/open-sgid/index.md %}), which provides additional information. 


Although it may take some time for traditional Esri clients who are familiar with the SQL SDE database to adjust to the PostgresSQL database format, we view the Open SGID as an enhancement to AGRC’s data access points. It provides a direct SGID database connection that is no longer constrained to the Utah state government network, thereby living up to its name as a database that is truly open and accessible to all GIS platforms and users. We look forward to your feedback as both first-time and long-time SGID users utilize Utah’s most comprehensive and authoritative open-source geospatial database for your cartographic and analytical workflows.
