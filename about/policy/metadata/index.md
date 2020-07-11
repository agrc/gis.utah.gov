---
author:
  display_name: AGRC Office
  email: agrc@utah.gov
tags: []
date: 2020-07-09 09:33:34 -0600
title: Basic Metadata Guidelines
categories: []
---

By most accounts, creating metadata is right up there with organizing your garage - it's a chore. But it doesn't have to be. And while it might not be fun, there is no doubt that good metadata is extremely useful.

At AGRC, we have decided to take a more conversational approach to the process. In other words, instead of looking at a long list of metadata requirements, we thought it would be easier to answer a few questions about the data. This is our solution to metadata procrastination.

We have distilled the basic elements of metadata into a few approachable questions. If you can answer these simple questions about your data, then you officially have good metadata.

#### Can you answer these questions about your data?
{: .text-left}

##### Summarize your Data
{: .text-left}

- What is this dataset?
- What is the purpose of this dataset?

##### Describe your Data
{: .text-left}

- What does this dataset represent?
  - ex: road centerlines represent the centerline of a physical road
- How was this dataset created?
  - ex: digitized, GPS, etc.
- How reliable and accurate is the dataset?
  - ex: survey-grade, mapping-grade, etc.
- What is the general update schedule for this dataset?
  - ex: monthly, yearly, as needed, etc.
- Are there any warnings or limitations on the data?
  - ex: don’t use parcels as a legal boundary depiction
  - ex: don’t use parcels as a complete dataset for geocoding
  - ex: don’t use zip codes for demographic generalization
- Are there any common misconceptions or assumptions about this data that should be further explained?

##### Allow for Feedback and Collaboration
{: .text-left}

- Who created this dataset?
- What is the best point of contact for this dataset?
  - if someone had further questions or would like to get involved, who should they contact?

Your answers to these questions can be plugged into the basic metadata elements (discussed below). It's that simple - answer a few questions, transfer the responses, and you officially have informative, standardized metadata.

*Note: If you contribute data to Utah's State Geographic Information Database (SGID), we encourage you to use our [metadata form](https://docs.google.com/forms/d/1u7gwdmRN-83Kh5zizi-kHRObeoNyaakM3scPkLT3zKY/edit). It's a great way to update your metadata and make it more discoverable. It covers all the questions above -and best of all- after you submit your responses, your portion of the process is done! AGRC, in collaboration with the DTS editor, will handle the remaining details.*

The above questions were derived from the ESRI [Item Description](https://desktop.arcgis.com/en/arcmap/10.7/manage-data/metadata/metadata-standards-and-styles.htm#ESRI_SECTION1_29222DC149544E89A4147541A4ACAF86) style. We have found this style to be a good balance for creating useful, as well as achievable, metadata.  

Let's take a closer look at the basic elements of SGID metadata. We like to think of these as minimum requirements.

### Basic SGID Metadata
{: .text-left}

#### Title
{: .text-left}

The title should match the dataset name. If it's a statewide dataset, the title should begin with the word "Utah".

`example: Utah County Boundaries`

#### Tags
{: .text-left}

Tags are included in data searches, so at minimum, each SGID dataset should include the stewarding agency (ie: AGRC), SGID, and the appropriate ISO category tag. We also recommend adding any additional, relevant tags that might help with data discoverability. However, there is no need to include words that are contained in the layer's title (these will be omitted).

All words in tags should be title-cased except for articles (“of”, “the”, “and”, etc.) or abbreviations. Each tag should be separated by a comma. Please refer to [Using tags effectively](https://www.esri.com/arcgis-blog/products/arcgis-online/data-management/using-tags-effectively/) for more ideas and information.

`example: AGRC, SGID, Recreation, Paths, Biking, Hiking, Horseback Riding`

#### Summary
{: .text-left}

The summary should summarize the description in approximately 2 to 3 sentences.  

When creating a summary, consider the questions presented above in the 'summarize the data' section.

#### Description
{: .text-left}

The Description is a more in-depth version of the summary and it should stand on its own. The description should expand on the summary. This is important, particularly, in the event that the summary is missing in the metadata (which is currently the case with [Open Data](https://opendata.gis.utah.gov/) datasets).

The first line of the description should be a date, indicating the last update.

This section should also contain a link to the corresponding [gis.utah.gov data page]({% link data/index.html %})

Additionally, consider the questions presented above in the 'describe the data' section.

#### Credits (as in the source of the data)
{: .text-left}

This should cover who created the dataset and how you can get in contact with them.

Consider the questions presented above in the 'allow for feedback and collaboration' section.

#### Use Limitations
{: .text-left}

This section covers limitation and licensing on the data.

The language presented here is for reference only and is populated automatically via our [Sweeper](https://github.com/agrc/sweeper) project.

- *The data herein, including but not limited to geographic data, tabular data, analytical data, electronic data structures or files, are provided "as is" without warranty of any kind, either expressed or implied, or statutory, including, but not limited to, the implied warranties or merchantability and fitness for a particular purpose. The entire risk as to the quality and performance of the data is assumed by the user.*

- *Creative Commons License: This work is licensed under a Creative Commons Attribution 4.0 International License.*
