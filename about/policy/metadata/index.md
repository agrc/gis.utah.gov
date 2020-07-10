---
author:
  display_name: AGRC Office
  email: agrc@utah.gov
tags: []
date: 2020-07-09 09:33:34 -0600
title: Basic Metadata Guidelines
categories: []
---
By some accounts, no one in their right mind could claim to enjoy geospatial metadata. But that doesn't mean it should be hard. And while it might not be fun, there is no doubt that good metadata is extremely useful.

On this page we have tried to make it easy for those contributing data to Utah's State Geographic Information Database (SGID) to provide at least the basic set of metadata elements that we would like to see available for all SGID data. We recommended that you begin by using AGRC's [metadata questionnaire form](https://docs.google.com/forms/d/1u7gwdmRN-83Kh5zizi-kHRObeoNyaakM3scPkLT3zKY/edit). Our goal with this form is to make the process more conversational. And best yet, after you submit your responses, we will take care of the remaining details.

### Basic SGID Metadata
{: .text-left}

#### Style
{: .text-left}

AGRC maintains geospatial metadata in an in-house ESRI database, using the [Item Description](https://desktop.arcgis.com/en/arcmap/10.7/manage-data/metadata/metadata-standards-and-styles.htm#ESRI_SECTION1_29222DC149544E89A4147541A4ACAF86) style.

#### Title
{: .text-left}

The title should match the dataset name. If it's statewide dataset, the title should begin with the word, Utah.

#### Tags
{: .text-left}

Tags are included in data searches, so at minimum, each SGID dataset should include the stewarding agency (ie: AGRC), SGID, and the appropriate ISO category tag. We also recommend adding any additional, relevant tags that might help with data discoverability. However, there is no need to include words that are contained in the layer's title (these will be omitted).

All words in tags should be title-cased except for articles (“of”, “the”, “and”, etc.) or abbreviations. Each tag should be separated by a comma. Please refer to [Using tags effectively](https://www.esri.com/arcgis-blog/products/arcgis-online/data-management/using-tags-effectively/) for more ideas and information.

#### Summary
{: .text-left}

The summary should summarize the Description in approximately 2 to 3 sentences.  Consider the following questions:

- What is this dataset?
- What is the purpose of this dataset?

#### Description
{: .text-left}

The Description is a more in-depth version of the summary and it should stand on its own. This is important, particularly, in the event that the Summary is missing in the metadata (as is the case, currently, with [Open Data](https://opendata.gis.utah.gov/) datasets).

- When was the dataset last updated? (this should be the first line of the Description)
- A link to corresponding [gis.utah.gov data page]({% link data/index.html %})
- What is this dataset (please expand on the content provided in the Summary)?
- What is the purpose of this dataset?
- What does this dataset represent (in layman's terms)?
  - ex: geographic coordinates of a location that has been assigned a USPS address by a local governing entity
  - ex: road centerlines represent the centerline of a physical road
- How was this dataset created?
  - ex: digitized, GPS, etc.
- How reliable/accurate is the dataset?
  - ex: survey-grade vs mapping-grade
- What is the general update schedule for this dataset (monthly, yearly, as needed, etc.)?
- Are there any warnings or limitations on the data?
  - ex: don’t use parcels as a legal boundary depiction
  - ex: don’t use parcels as a complete dataset for geocoding
  - ex: don’t use zip codes for demographic generalization

#### Credits (as in the source of the data)
{: .text-left}

This should cover who created the dataset and how you can get in contact with them.

#### Use Limitations
{: .text-left}

The language presented here is for reference only. This language will be populated automatically via our [Sweeper](https://github.com/agrc/sweeper) project.

- *The data herein, including but not limited to geographic data, tabular data, analytical data, electronic data structures or files, are provided "as is" without warranty of any kind, either expressed or implied, or statutory, including, but not limited to, the implied warranties or merchantability and fitness for a particular purpose. The entire risk as to the quality and performance of the data is assumed by the user.*

- *Creative Commons License: This work is licensed under a Creative Commons Attribution 4.0 International License.*
