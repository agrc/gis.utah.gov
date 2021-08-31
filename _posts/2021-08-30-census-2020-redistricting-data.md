---
title: 2020 Census Redistricting Data in Easy to Use GIS Formats
author:
  display_name: Bert Granberg and Greg Bunce
  email: gbunce@utah.gov
date: 2021-08-30 10:01:46
categories:
  - Featured
tags:
  - gis
  - census
  - redistricting
  - elections
  - voting
  - demographic
---

Good news, 2020 census redistricting data is now available for Utah in easy to use GIS formats!

In mid-August, the Census Bureau published the [PL 94-171 Redistricting Data Summary Files](https://www.census.gov/programs-surveys/decennial-census/about/rdo/summary-files.html) from the 2020 Census. This is a pre-release of the 2020 census data, in legacy file format, and contains the elements that pertain to drawing new congressional districts and state legislative districts (state senate and house).
 
The primary data characteristics released are for most geographies, down to the block level, and show:
- population
- voting age population
- race/ethnicity identification
- occupied and vacant housing unit counts
- group quarters populations
 
The Census expects to release this redistricting data in more user-friendly formats on September 30, 2021. The full 2020 Census summary files will be released sometime in the not-so-distant future (no announcement from Census yet). The more detailed files were released starting in October of 2011 for the last census, but this decade's release has been 5-6 months behind schedule so far. So make your own guess and cross your fingers.

In the meantime, UGRC, with collaboration from the Analytics Group at [WFRC](https://wfrc.org/), has worked with the mid-August release and has created ready-to-use GIS data in several formats that hopefully make the 2020 redistricting data easier to use. 

###  PL 94-171 Summary Flies for Census Blocks in GIS format
{: .text-left}

The exciting news is that key elements from the PL 94-171 Summary Files are now available in the SGID [Utah Census Blocks 2020 GIS layer]({% link data/demographic/census/index.html %}#2020Census). These elements combine the primary information pieces from across the summary file tables and employ more user-friendly field names (for shapefile users) and field aliasing for geodatabase users.
 
![Alias Fields Naming Convention]({% link images/census2020_block_pl_94_171_alias_fields.png %}) 
{: .flex .flex--center}
 
> Note: These elements are available now in [Open SGID]({% link sgid/open-sgid/index.md %}) and will be available in [Open Data](https://opendata.gis.utah.gov/) on Wednesday, September 1, 2021. 

### PL 94-171 Summary Files for all SGID geographies in tabular GIS format
{: .text-left}

For users looking for additional data elements, we’ve made available the full PL 94-171 Redistricting Data Summary Files for [download](https://drive.google.com/uc?id=1p8-tWujKXXlH-VjFDLkRJ06VB207_Rmx&export=download) in ESRI File Geodatabase tabular format. These tables can be joined to the corresponding SGID GIS data layer, using the `GEOID` fields.

![Tabular Summary Files in FGDB Format]({% link images/census2020_pl_94_171_summaryfiles.png %}) 
{: .flex .flex--center}

![Joining Summary Files to GIS data]({% link images/census2020_pl_94_171_summaryfiles_join_tables.png %}) 
{: .flex .flex--center}

Note that the field names in these tables follow the traditional census field naming convention. You can find detailed information on field names, including descriptions, in the Census PL 94-171 [technical documentation](https://www2.census.gov/programs-surveys/decennial/2020/technical-documentation/complete-tech-docs/summary-file/2020Census_PL94_171Redistricting_StatesTechDoc_English.pdf) or in [Excel spreadsheet](https://www2.census.gov/programs-surveys/decennial/rdo/about/2020-census-program/Phase3/SupportMaterials/2020_PLSummaryFile_FieldNames.xlsx) format.


### Data for everyone
{: .text-left}

While PL 94-171 Summary File data is released under the banner of redistricting, let's not overlook that it's the first wave of census demographic data and it's open for use in any scenario that you can dream up.  

You can find more information on this data, including how to access it, on the UGRC [2020 Census data page]({% link data/demographic/census/index.html %}#2020Census). 

If you have any questions about the data or the processes used, please reach out to Bert Granberg (bgranberg@wfrc.org) or Greg Bunce (gbunce@utah.gov).
