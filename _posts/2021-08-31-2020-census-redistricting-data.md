---
title: 2020 Census Redistricting Data in Easy to Use GIS Formats
author:
  display_name: Bert Granberg and Greg Bunce
  email: gbunce@utah.gov
date: 2021-08-31 10:01:46
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

In mid-August, the Census Bureau published the [PL 94-171 Redistricting Data Summary Files](https://www.census.gov/programs-surveys/decennial-census/about/rdo/summary-files.html) from the 2020 Census. This is a pre-release of the 2020 census data, in legacy format, and contains the elements that pertain to drawing new congressional districts and state legislative districts (state senate and house). 
 
The primary data characteristics released are down to the block level and show:
- population
- voting age population
- race/ethnicity identification
- occupied and vacant housing unit counts
- group quarters populations
 
The Census expects to release this data in more user-friendly formats on September 30, 2021 - and sometime in the not-so-distant future, the full 2020 Census summary files will be released (no announcement from Census yet). The more detailed files were released starting in October of 2011 for the last census, but this decade's release has been 5-6 months behind schedule so far. So make your own guess and cross your fingers.

In the meantime, UGRC, with collaboration from the Analytics Group at [WFRC](https://wfrc.org/), has worked with the mid-August release and has created ready-to-use GIS data in several formats that hopefully make the 2020 redistricting data easier to use. 

###  PL 94-171 Block-level Summary Flies in GIS format

The exciting news is that key elements from the PL 94-171 Summary Files are now available in the SGID [2020 census blocks GIS layer](data page). These elements combine the primary information pieces from across the tables and employ more user-friendly field names (for shapefile users) and field aliasing for geodatabase users.
 
{{{Insert screenshot here}}}
 
Note: These elements are available now in [Open SGID](https://gis.utah.gov/sgid/open-sgid/) and will be available in [Open Data](https://opendata.gis.utah.gov/) on Wednesday, September 1, 2021. 

### PL 94-171 Summary Files for all SGID geographies in tabular GIS format

For users looking for additional data elements, we’ve made available the full PL 94-171 Redistricting Data Summary Files in ESRI File Geodatabase tabular format. These tables can be downloaded on the UGRC 2020 Census 2020 data page and joined to the corresponding SGID GIS data layer, using the GeoID fields.

{{{Insert screenshot here}}}

Note that the field names in these tables follow the traditional census field naming convention. You can find detailed information on field names, including descriptions, in the Census PL 94-171 [technical documentation](https://www2.census.gov/programs-surveys/decennial/2020/technical-documentation/complete-tech-docs/summary-file/2020Census_PL94_171Redistricting_StatesTechDoc_English.pdf) or in [Excel spreadsheet](https://www2.census.gov/programs-surveys/decennial/rdo/about/2020-census-program/Phase3/SupportMaterials/2020_PLSummaryFile_FieldNames.xlsx) format. 

### Data for everyone

While PL 94-171 Summary File data is released under the banner of redistricting, let's not overlook that It's the first wave of census demographic data and it's wide open for use in any scenario that you can dream up.  

You can find more information on this data, including how to access it, on the UGRC 2020 Census data page. 

If you have any questions about the data or the processes used, please reach out to Bert Granberg or Greg Bunce.
