---
title: SGID Database Guidelines and Editing Policy
author:
  display_name: AGRC Office
  email: agrc@utah.gov
tags:
  - policy
  - sgid
categories: []
date: 2019-12-04 10:01:27 -0500
---
<i class="fas fa-2x fa-fw fa-clipboard-list"></i> These guidelines apply to data in the internal SGID database.


### Table Naming Convention
{: .text-left }

- Using Dates in Table Names
  - Dates are allowed in table names when content is related to either census, political, or tax.
  - For all other categories, dates should only be used for tables that are no longer effective/active or soon-to-be effective/active.


### Adding New Tables
{: .text-left }

- Populate metadata
  - Minimum content
    - Purpose of data
    - Owner of the data
    - Contact person
    - Date loaded
    - Last update date

- Remove records with empty geometry
  - Run [Sweeper](https://github.com/agrc/sweeper) to find and optionally remove geometry errors

- Remove duplicate records (duplicate geometry and duplicate attributes)
  - Run [Sweeper](https://github.com/agrc/sweeper) to find and optionally remove duplicate records

- Use ESRI default Resolution and Tolerance
  - XY Resolution: 0.0001 Meter
  - XY Tolerance: 0.001 Meter

- Use existing domains (if possible)
  - If loading a new domain to the database
    - When possible, use same value for code and description
      - Use the existing naming convention (ex: “CVDomain_DomainNameHere”)  

- Turn on Editor Tracking (on appropriate layers)

- Add a corresponding record to the Data Steward spreadsheet

- Give appropriate rights/permissions
  - SQL SGID
    - internal (if desired)
  - Open Data and AGOL
    - Create a new record in Meta.AGOLItems table
      - Populate ItemID
      - Create public layer name
    - Apply appropriate tags for SGID [Open Data](https://opendata.gis.utah.gov/)
      - static
      - ISO Category Group
    - If appropriate, mark as authoritative
    - If layer is exposed to Open Data, enable multiple format downloads

- PostGIS (this step is a work-in-progress)
  - If coded domains were affected, export the related domain table to a standalone table for use in PostGIS  


### Removing Existing Tables
{: .text-left }
- Use the [Cemetery](https://github.com/agrc/cemetery) project


### Updating and Editing Existing Tables
{: .text-left }

- Comply with the scheduled downtime
  - No edits during scheduled downtimes
    - 7:00 pm to 10:00 am MST (for now, also check Forklift email report to verify)
  - Ensure that data is production-ready before the scheduled update  
  - Database updates should be done during scheduled downtime
  - Batch scripts and large processes should be run during scheduled downtime    

- Long-term edits should be performed locally then loaded when complete

- Update the metadata
  - Last update date

- Remove records with empty geometry
    - Run [Sweeper](https://github.com/agrc/sweeper) to report and optionally remove geometry errors

- Remove duplicate records (duplicate geometry and duplicate attributes)
    - Run [Sweeper](https://github.com/agrc/sweeper) to report and optionally remove duplicate records
