---
author:
  display_name: JP
  email: agrc@utah.gov
tags: []
date: 2013-07-02 09:33:34 -0600
title: Basic Metadata Instructions
categories: []
---
By some accounts, no one in their right mind could claim to enjoy geospatial metadata. But that doesn't mean its hard. And while it might not be fun there is no doubt that it can be quite useful.

Since the majority of people in Utah use ArcCatalog to create and maintain geospatial metadata, we've tried to make it easy for those contributing data to Utah's State Geographic Information Database (SGID) to provide at least the basic set of metadata that we'd like to see available for all SGID data.

What follows below is a step by step guide to authoring good metadata using the ArcCatalog FGDC Metadata Editor. These are just guidelines that we have adapted and interpreted from the [FGDC Metadata Quick Guide](http://www.fgdc.gov/metadata/documents/MetadataQuickGuide.pdf) to work specifically within ArcCatalog.

#### Notes

  - We've omitted some of the metadata items that are normally managed automatically by ArcCatalog (projection, units, feature  counts).
  - We've omitted other metadata items that will be dealt by AGRC processes we use with all SGID data (disclaimer, online linkage, keywords).

## Basic Metadata Instructions
To begin editing metadata, open ArcCatalog and add the Metadata Toolbar from the Tools menu-> Customize-> Toolbars and selecting Metadata check box. Highlight the feature class who's metadata you would like to edit and select the Metadata tab. The tools in the Metadata Toolbar are now available, click the Edit metadata tool to begin.

### Identification - General Tab
#### Item 1: Abstract

Be sure to include:

  - general content and features
  - data set form (GIS, CAD, image, Dbase)
  - geographic coverage (county/city name)
  - time period of content (begin and end date or single date)
  - special data characteristics or limitations

#### Item 2: Purpose

  - Why was this dataset created/maintained. Be brief.

#### Item 3: Supplemental Information

This is a basically an open-ended comment field in which you can:

  - front important information such as related studies, data set limitations, and notifications
  - place information that is not elsewhere covered

#### Item 4: Access Constraints.

If data are exempt from public records laws such as endangered species, personal health, and intellectual properties, please describe and inform AGRC via email as our normal procedure for SGID data is to offer it to a public audience with no access constraints.

#### Item 5: Data Set Credit

Identify others that should be recognized for their contributions to the data set. This includes data development contractors as discussed, below, for Originator.

### Identification - Contact Tab
#### Item 6: Point_of_Contact

The individual or organization that is knowledgeable about the data set and should be contacted with questions.

#### Item 7: Citation Details

`Publication_Date`: The date that the data was published or otherwise made available. Remember format: `YYYYMMDD`.

### Identification - Citation Tab (ESRI FGDC Metadata Editor)
#### Item 8: Title

  - Minimum - where, what, when,
  - Best practice – who, why, resolution, filename, source. Example: Aquifer Systems and Recharge Potential in Louisiana from LDEQ  source data, Geographic NAD83, LOSCO (1999)

#### Item 9: Originator

It is recommended that you indicate the party responsible for the data set. While that is most commonly the organization that developed the data set, in some cases, it is not. For example, if a county planning department hires a contractor to build a street centerline road file, the planning department, not the contractor should be identified as the Originator. The contractor should be fully cited using the Data_Set_Credit (1.11) element, e.g. this data set was developed for the Wayne County Planning Department by Smith Engineering, Inc.

#### Item 10: Publication Date

 The date that the data was published or otherwise made available. Remember format `YYYYMMDD`.

### Identification - Time Period Tab
#### Item 11: Currentness Reference
The context for the Time_Period_of_Content. For example: an orthophotograph may have been compiled and delivered in June (publication date) but flown in February (ground condition).

#### Item 12: Time_Period_of_Content
The relevant date of the data content. Can be a single date, multiple dates, or a range of dates.

### Identification - Status Tab
#### Item 13: Progress

The status of the data set, this field has a fixed domain of: `Complete`, `In Work`, and `Planned`.

### Data Quality - General Tab
#### Item 14: Completeness Report

Is there anything I might expect to be in the data set that isn't? Identification of data omitted from the data set that might normally be expected, as well as the reason for the exclusion. This may include geographic exclusions, `data was not available for the South Shores neighborhood`; categorical exclusions `municipalities with populations under 1,000 were not included`; and definitions used `floating marsh was mapped as land`.

### Data Quality - Attribute Accuracy Tab
#### Item 15: Attribute Accuracy Report

How sure are you that it _IS_ a pine tree? Assessments as to how **true** the attribute values may be. May refer to field checks, cross-checks with other documents, statistical analysis of values, and parallel independent measures. It does NOT refer to the positional accuracy of the feature.

### Data Quality - Positional Accuracy Tab
#### Item 16: Positional Accuracy Report

  - How sure are you that the pine tree is where you say it is?
  - Assessments as to the horizontal and/or vertical location of the feature. May refer to field checks, Maximum Allowable PDOP,  survey quality, cross-checks with other locational references, etc.

### Entity Attribute Tab
#### Item 17. Attribute/Field Descriptions

Functionally, this is quite possibly the most important section of the metadata. Describe the use of 3 strategies (user should choose 1) for describing attribute values for each field

  1. Use `Detailed Description --> Attribute --> General` tab to create a description for each field describing what the attribute values represent
  1. Use `Detailed Description --> Attribute --> General` tab to create a general field description and then use the `Attribute Domain Values` tab to enter codes and descriptions for each field.
  1. Use Overview Description Tab's Entity and Attribite Overview or Entity and Attribite Detail Citation Link to an external (URL) or imbedded (and hopefully non-proprietary format) document within the metadata

### Metadata Reference Tab
#### Item 18. Metadata contact

Provide metadata contact name or organization

That's it, we're done. But there are a lot more possibilities for documenting your data within the FGDC metadata framework. There are even strategies for feature-by-feature level data documentation (using the ISO standard or just an attribution field/value strategy to store important items in the data table itself.

Good luck and thanks for your attention to metadata.
