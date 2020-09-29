---
title: SGID Database Policies
author:
  display_name: AGRC Office
  email: agrc@utah.gov
tags:
  - policy
  - sgid
categories: []
date: 2019-12-04 10:01:27 -0500
---

The following policies apply to data in the internal SGID Enterprise Geodatabase.

## Adding New Datasets to the SGID
{: .text-left }

We strive to achieve and maintain a high standard of quality for the SGID. One of the best ways to do this is making sure all datasets coming into the SGID are high-quality datasets. We use the following policies and procedures to guide this effort.

### Qualifying datasets
{: .text-left }

Datasets requested to be added to the SGID by a state or local agency or organization should meet all the following criteria:

- The dataset should cover a **state-wide** geographic extent, be part of a state-wide project or initiative (such as roads, address points, and parcels), or be relevant to broader projects or mandates that have a state-wide interest (hazard mapping or endangered species mapping).
- The dataset should be useful to the daily activities of **multiple agencies** or organizations. Datasets primarily used internally by a single agency don't belong in the SGID.
- The entity providing the dataset should be the **authoritative** or original source (for example, a county's parcels must come from the County government).
- The entity providing the dataset does not have the **ability** to publicly share data (such as an existing ArcGIS Online organization). An entity's data storage costs or server capacity may not be sufficient justification for adding data to the SGID.

We will periodically review the SGID for datasets that no longer meet these criteria. Specifically, we may consider removing datasets that see little to no usage for a prolonged period of time.

### Dataset Introduction Process
{: .text-left }

We use the [Porter](https://github.com/agrc/porter) project to outline and track the steps needed to add data to the SGID. A brief overview of these steps is included below.

We will add a corresponding record to the [Data Stewardship spreadsheet](https://docs.google.com/spreadsheets/d/11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ/edit#gid=1). This will contain at a minimum:

- The authoritative access from location
- The table name
- A description
- The data steward
- The steward contact name and email
- A link the the data page on the AGRC website
- A link to the SGID Open Data page

We will create a hosted feature service of the dataset in our ArcGIS Online organization. The ArcGIS Online item for this feature service will reside in the corresponding ISO category folder and contain the appropriate tags. If the dataset is authoritative, it will be marked as `authoritative`. We don't anticipate some datasets ever receiving updates, such as the boundary lines for adjacent counties in the surrounding states. These datasets will only exist in ArcGIS Online and will be tagged as `static`.

The [Auditor](https://github.com/agrc/auditor) project will regularly evaluate and update the ArcGIS Online item's information (tags, thumbnail, title, etc) based off of information from a separate table and from the SGID. It will also update the ArcGIS Online item's metadata from the SGID's geodatabase.

If the dataset is shared with our [Open Data site](https://opendata.gis.utah.gov/), we will enable the multiple formats download option in the ArcGIS Online item page to allow users to download File Geodatabases and other non default download options.

We will populate the [minimum metadata content]({% link about/policy/metadata/index.md %}) in the SGID geodatabase. We recommended that you use the [metadata form](https://docs.google.com/forms/d/1u7gwdmRN-83Kh5zizi-kHRObeoNyaakM3scPkLT3zKY/edit) to create new metadata for the SGID.

The domain values for any new database domains must match domain their descriptions. See the [domain document](https://docs.google.com/document/d/12bdtmtv-ZVF9g-lFshbobx8DbKX9LfbL44HawLjFTVw/edit?usp=sharing) for more information on this effort.

We will use [Sweeper](https://github.com/agrc/sweeper) (or some other form of automation) to remove all empty geometries and duplicate records.

The SGID uses the ESRI default Resolution and Tolerance:

- XY Resolution: 0.0001 Meter
- XY Tolerance: 0.001 Meter

### OpenSGID
{: .text-left }

All datasets in the SGID geodatabase are synced nightly with the [OpenSGID]({% link sgid/open-sgid/index.md %}) cloud-hosted PostGIS database. This open standards-centric database is accessible to anyone with an internet connection.

### Shelved Data
{: .text-left }

We remove datasets from the SGID geodatabase that are no longer current but do have historical value (such as older Census/ACS data or previous arrangements of tax district boundaries). Their hosted feature services are tagged as `shelved` and placed in the public "AGRC Shelf" ArcGIS Online group for future reference.

### Dates in Table Names
{: .text-left }

Dates are acceptable in table names when content belongs in either the `census`, `political`, or `tax` ISO categories to identify datasets where the most current data may not reflect the current calendar year. For all other categories, dates should only be used for tables that are no longer effective/active or soon-to-be effective/active. This implies that the **most current and relevant** data contains **no date suffix**. Historical or future data _will_ contain a date suffix to help identification at a glance. The best way to learn about a dataset is to view the data page metadata.

## Updating and Editing Existing Datasets
{: .text-left }

No edits will be made to the internal SGID from 7:00PM to 10:00AM MST to allow for automated scripts to push accurate updates to ArcGIS Online and ArcGIS Server. AGRC will ensure that data is production-ready before the editing windows ends.

All database updates will be done during the editing window using [Swapper](https://github.com/agrc/swapper) or some other automated process to reduce the amount of time with incomplete data.

All data updates being pushed into the SGID will have removed empty geometries and duplicate records with [Sweeper](https://github.com/agrc/sweeper) or another automated process.

All edits made to the internal SGID will be captured in the `Last update date` in the metadata, in the [SGID Update log](https://docs.google.com/spreadsheets/d/11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ/edit#gid=0), and as an update on the AGRC website data page.

If making a schema change, please consider updating any domain descriptions that do not match the domain value. See this [document](https://docs.google.com/document/d/12bdtmtv-ZVF9g-lFshbobx8DbKX9LfbL44HawLjFTVw/edit?usp=sharing) to learn more about this effort.

## Removing SGID Datasets
{: .text-left }

When deprecating data or services in the SGID, please follow the steps outlined in the [Porter](https://github.com/agrc/porter) project.
