---
title: The SGID - Then and Now
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2019-06-11T10:07:46.000Z
tags:
  - sgid
  - data
  - education
  - gis history
category: Uncategorized
---

Access to high-quality GIS data is a privilege, and the fact that it's open and free is nothing short of amazing. Yes, I’m talking about Utah's SGID. From a local perspective, we’re all accustomed to it being there. But really, the concept of readily available, mature, open data is somewhat unique. Over the years, many factors have played into the SGID’s development and current maturity, and it takes ongoing maintenance and planning to ensure its continued success.

This post explores some of the early milestones ("highlights") of the SGID, the current state of the SGID with usage stats, and, finally, where we are going next---with a poll requesting user input!

### Early History of the SGID

{: .text-left}

Interestingly enough, development of the SGID parallels a lot of the early innovative GIS work being done at the national level. Historically speaking, Utah has played a role in GIS history as an "Early-Adopter State."

As early as the late 1970s, Utah was discussing the idea of statewide geographic data. At that time, GIS was being tested in a few agencies, so a committee was formed to look at the needs of each state agency. The original concept was that Utah would create a centralized database for resource management, planning, and interagency coordination.

In 1980, ESRI was hired as a consultant to assist with Utah’s GIS implementation plan. The following year the State signed a contract with ESRI to purchase hardware, software, and training. The software the State purchased pre-dated ARC/INFO, which was released a year later in 1982 under the banner [“the first commercial GIS”](https://www.esri.com/content/dam/esrisites/sitecore-archive/Files/Pdfs/about-esri/esri-history-up-close.pdf). But, it was with this equipment that the State began creating Utah’s first statewide GIS database.

In 1982, the Automated Geographic Reference, or AGR, was established with the goal to catalog and maintain this data. AGR entered the modern era in 1984 with the purchase of ARC/INFO on a PRIME minicomputer.

In 1989, AGRC was created (replacing AGR). That change brought with it new GIS-related priorities and at the top of the list was the completion of the SGID. AGRC entered into a contract with the Governor’s Office of Planning and Budget for $80,000 to assist in the effort. As a result, the first SGID infrastructure was completed in 1991.

The SGID was further solidified in 1991 with the passage of [Senate Bill 21](https://le.utah.gov/xcode/Title63F/Chapter1/63F-1-S507.html). Passing unanimously, this bill created the AGRC and the SGID in state statute and eliminated many uncertainties such as future funding for the database and UGRC’s responsibilities.

During the 2021 General Session, the Utah Legislature agreed to [change the name of AGRC]({% link _posts/2021-04-05-agrc-name-change-to-utah-geospatial-resource-center-ugrc.md %}) to the Utah Geospatial Resource Center (UGRC), as passed in House Bill 261, “Geographic Reference Center Amendments.” (the new name took effect on May 5, 2021). This rebranding was an effort to better align the office with the larger geospatial industry as well as our current role within the state.

The SGID has been in continuous operation since its completion in 1991 and has seen numerous software and hardware configurations throughout the years.

Here are a few of the highlights that have brought the SGID to where it is now:

- **SGID User's Guide - 7th Edition (1994)**
  - This user guide was distributed in a three-ring binder. Data was then requested in the following available formats: ARC/INFO Coverages, USGS DLG, MOSS Export, and AutoCAD DXF. This guide also makes note of an "AGRC home page on the world wide web," which was set to debut in November 1994.

![1994 SGID User Guide Binder]({% link images/SGID_1994_binders_cover_sm.png %}){: .flex .flex--center}

- **The SGID on CD-ROM (1995)**
  - In 1995, AGRC, ESRI, and Utah State University combined forces and manufactured a CD-ROM containing SGID data and a built-in data viewer. To commemorate this milestone, we have made available the [original CD-ROM jacket](https://drive.google.com/file/d/1D_AI5EdonRLbLoJAdiVUORFycNwY1S3A/view?usp=sharing) as well as the [unaltered CD-ROM contents](https://drive.google.com/file/d/1iJ-oBpnCGK8XmPr9B4jvE1AhodTC85tp/view?usp=sharing).

![1995 SGID CD-ROM photo]({% link images/SGID_1995_cover_sm.png %}){: .flex .flex--center}

- **SGID User’s Guide - 10th Edition (1999)**
  - This version of the user guide was also distributed in a three-ring binder and talked about the AGRC home page as the place where you could get direct access to the SGID data, as well as view the FGDC metadata. It also mentioned an FTP site. It noted that this version would be the last printed user guide and that future guides would be available on the website for download in PDF format. With this version, users could request SGID data in the following formats: CD, 3.5 diskettes, 8mm tape, zip disc, or Coverages (which the guide mentioned were the most popular at that time).

![1999 SGID User Guide Binder]({% link images/SGID_1999_binders_cover_sm.png %}){: .flex .flex--center}

- **SGID Meets the World Wide Web (Early 2000s)**
  - By the early 2000s the SGID user guide, data, and data viewer were all solely available over the Web. AGRC was using ArcSDE 8.2 to maintain the data and ArcIMS for the interactive mapping website. Users could also use a separate ArcIMS site to create their own exportable map using a [custom map authoring tool]({% link images/SGID_early2000s_create_custom_map.gif %}).

[![SGID Early 2000s]({% link images/SGID_early2000s_sm.png %}){: .flex .flex--center}]({% link images/SGID_early2000s.png %})

### Where Is the SGID Now?

{: .text-left}

Technology and the use of GIS have come a long way since the inaugural SGID of 1991. What hasn't changed though is the notion of a centralized repository for searching and fetching statewide GIS data. Sure, file formats and how we access data have changed, but the need for open, readily accessible GIS data remains the same.

The current makeup of the SGID is distributed, by design. Internally, much of the framework data is managed on a SQL ArcSDE Database. From there, data layers are distributed accordingly.

The [SGID index]({% link data/sgid-index/index.html %}) and current user guide are located on [the SGID page of UGRC’s website]({% link data/index.html %}), where you will also find descriptions of the data, update dates, data downloads, and links to other places where you can access the data. If you're looking for data, that is the best place to start.

![SGID 2019 User Guide]({% link images/SGID_2019_webpage_data.png %}){: .flex .flex--center}

In order to meet the diverse needs of our users and applications, SGID data is served on a variety of platforms in a variety of formats, including direct database access, downloadable data, [ArcGIS Online](https://gis.utah.gov/data/), an [open data portal](https://opendata.gis.utah.gov/), and API web services.

Here are some current SGID stats showing top accessed data layers by platform:

- **[UGRC Website](https://gis.utah.gov/data/)** - Page views from the past 12 months (rounded to the nearest one-hundred)

  - Parcels - 30,900
  - Elevation and Terrain - 20,400
  - Aerial Photography - 20,100
  - Transportation - 18,200
  - USGS Scanned Topo Maps - 15,900
  - Boundaries - Landownership - 15,600
  - Boundaries - City, County, and State - 15,300
  - Oil and Gas - 8,000
  - Water - 7,600
  - Basemap and Imagery - 5,300

- **[ArcGIS Online](https://utah.maps.arcgis.com)** - The most popular content from June 2013 to May 2019, as measured in page views (rounded to the nearest one-thousand)

  - SBI Operations (which includes: Law Enforcement Boundaries, City Courts, County Courts, State District Courts, and UHP Dispatch Zones) - 67,000
  - Roads (minor and major roads combined stats) - 64,000
  - County Boundaries - 47,000
  - Municipal Boundaries - 35,000
  - Parcels - 28,000
  - Lakes - 26,000
  - Address Points - 17,000
  - Zip Codes - 17,000

- **SQL ArcSDE Database** - Desktop-user views from the past 12 months (approximately) rounded to the nearest one-hundred

  - Parcels, all counties combined - 14,000 table-locks
  - Counties - 8,000
  - Municipalities - 6,100
  - Landownership - 4,900
  - Roads - 4,700
  - Sections - 4,000
  - Townships - 3,600
  - Quarter-Quarter Sections - 1,500
  - Zip Codes - 2,100
  - Address Points - 2,100

- **[OpenData Website](https://opendata.gis.utah.gov/)**
  - Currently averaging 48 item views a day (17,413 views over the past year)

### Where Is the SGID Going?

{: .text-left}

One of the challenges of working in technology is that over time, file formats and the way we access data change. This is similarly true for the SGID. As a result, UGRC engages in regular discussions on where the SGID should be going.

Currently, we are working toward [trimming down the SQL ArcSDE enterprise database]({% link _posts/2018-09-10-the-incredible-shrinking-sgid.md %}), which is available to users on the State network. Moving forward, we will maintain only "live" datasets in the SDE. These would be datasets that receive regular modifications, such as address points, parcels, municipal boundaries, roads, etc. The idea is to use this database as our internal editing and staging database.

All data layers being maintained in the SDE will also be available in [AGOL](https://utah.maps.arcgis.com) and [UGRC’s open data portal](https://opendata.gis.utah.gov/). Here users can consume the web service or download the data. Obsolete data will be written to object storage for retention and will be available on request.

UGRC is testing the option of a public-facing PostgreSQL cloud database where users can make direct connections from their desktop client. This will bring new functionality and an additional access point for our end users. We are excited about this offering, so keep an eye on our [Twitter](https://twitter.com/maputah) or [newsletter](https://cdn.forms-content.sg-form.com/61e82d28-f0d5-11ec-847c-a26809937a38) for upcoming details.

Additionally, UGRC has established a workflow with our partner agencies to serve their authoritative data through AGOL. Essentially, their SGID-relevant data is cataloged and is discoverable on UGRC’s official AGOL page. We like to think of it as a live window into partner agencies' data. One of the biggest benefits to these partners is that their data no longer has a shelf life: in other words, the updates agencies make are available instantaneously. Currently we have set up workflows with [State History](https://history.utah.gov/) and [Water Rights](https://www.waterrights.utah.gov/). We are working to get other agencies on board in the coming months.

Ultimately, our goal is to provide the most current industry-accepted tools that allow our users to access high-quality, standardized, statewide GIS data for Utah. Additionally, we design our paths forward with a reasonable amount of backward capability.

_[GIS]: Geographic Information System
_[SGID]: State Geographic Information Database
_[FGDC]: Federal Geographic Data Committee
_[SBI]: State Bureau of Investigation
_[UHP]: Utah Highway Patrol
_[AGOL]: ArcGIS Online
