---
title: SGID Database Policy
author:
  display_name: AGRC Office
  email: agrc@utah.gov
tags:
  - policy
  - sgid
categories: []
date: 2019-12-04 10:01:27 -0500
---

The following applies to data in the internal SGID database.

## Adding New Tables
{: .text-left }

When adding new data to the SGID, the steps outlined in the [Life Cycle](https://github.com/agrc/cemetery) project will be followed.

Additional, related info:

A corresponding record to the [Data Stewardship spreadsheet](https://docs.google.com/spreadsheets/d/11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ/edit#gid=1) will be added, and will contain at a minimum:

- The authoritative access from location
- The table name
- A description
- The data steward
- The steward contact name and email
- A link the the data page on the AGRC website
- A link to the SGID Open Data page

The ArcGIS Online Item will reside in the corresponding ISO category folder and contain the appropriate tags. If the data is authoritative, it will be marked as `authoritative`. If the data does not receive updates, it will be tagged as `static`. If the data has historical relevance **but is not the most recent data** it will be tagged as `shelved`. Note: the [AGOL Validator](https://github.com/agrc/agol-validator) project will transfer metadata from the Internal SGID database, including summary, description, and use limitations.

If the data is shared with the [SGID Open Data](https://opendata.gis.utah.gov/), it will have the enable multiple formats download option selected to allow for File Geodatabases and other non default downloads.

The [minimum metadata content](https://docs.google.com/document/d/1VkXRwfSn6MraI1VeLfei5tg6je4bd2pp_Vh1JuST9xs/edit?usp=sharing) will be populated. When creating new metadata, it is recommended that you use the [metadata form](https://docs.google.com/forms/d/1u7gwdmRN-83Kh5zizi-kHRObeoNyaakM3scPkLT3zKY/edit).

All empty geometries and duplicate records will be removed, with [Sweeper](https://github.com/agrc/sweeper) or some other form of automation.

All new database domains will comply with the following rule: Domain values must match domain descriptions. See this [document](https://docs.google.com/document/d/12bdtmtv-ZVF9g-lFshbobx8DbKX9LfbL44HawLjFTVw/edit?usp=sharing) to learn more about this rule.

The ESRI default Resolution and Tolerance will be used.

- XY Resolution: 0.0001 Meter
- XY Tolerance: 0.001 Meter



### Dates in Table Names
{: .text-left }

Dates are acceptable in table names when content is related to either `census`, `political`, or `tax` ISO categories. For all other categories, dates should only be used for tables that are no longer effective/active or soon-to-be effective/active. This implies that the **most current and relevant** data contains **no date suffix**. Historical or future data _will_ contain a date suffix to help identification at a glance. The best way to learn about a dataset is to view the data page metadata.

## Updating and Editing Existing Tables
{: .text-left }

No edits will be made to the internal SGID from 7:00PM to 10:00AM MST to allow for automated scripts to push accurate updates to ArcGIS Online and ArcGIS Server. AGRC will ensure that data is production-ready before the editing windows ends.

All database updates will be done during the editing window using [swapper](https://github.com/agrc/swapper) or some other automated process to reduce the amount of time with incomplete data. 

All data updates being pushed into the SGID will have removed empty geometries and duplicate records with [Sweeper](https://github.com/agrc/sweeper) or another automated process.

All edits made to the internal SGID will be captured in `Last update date` in the metadata, in the [SGID Update log](https://docs.google.com/spreadsheets/d/11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ/edit#gid=0), and as an update on the AGRC website data page.

If making a schema change, please consider updating any domain descriptions that do not match the domain value. See this [document](https://docs.google.com/document/d/12bdtmtv-ZVF9g-lFshbobx8DbKX9LfbL44HawLjFTVw/edit?usp=sharing) to learn more about this effort.

## Removing SGID Products
{: .text-left }

When deprecating data or services in the SGID, please follow the steps outlined in the [Life Cycle](https://github.com/agrc/cemetery) project.
