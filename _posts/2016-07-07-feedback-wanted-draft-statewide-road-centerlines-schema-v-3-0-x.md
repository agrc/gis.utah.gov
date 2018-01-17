---
status: publish
layout: post
author:
  display_name: Bert Granberg
  email: agrc@utah.gov
tags:
  - roads
  - schema
published: true
date: 2016-07-07 21:21:51
title: 'Feedback Wanted: Draft Statewide Road Centerlines Schema v3.0.x'
categories:
  - Featured
---

Since 2003, AGRC has maintained a statewide aggregation of road centerline GIS layers sourced from local data stewards. This layer is one of the hardest working GIS data assets in the state and is put to task in high profile uses, including 911/public safety, transportation management and planning, voter registration, sales tax, and Census block geography used for demographics and redistricting.

Occasionally, AGRC revisits the data schema (aka data model) that we use to store the descriptive attributes of each road feature in the statewide database. If you attended the regional road centerline workshops hosted by UDOT last month  in Logan, Cedar City, Price, and Salt Lake, you’re well aware that some road centerline changes are coming. The two main drivers for these changes are the Next Generation 911 GIS requirements and the Federal Highway Administration’s all roads network (ARNOLD) reporting requirements for state DOTs.

In response to the updated requirements, AGRC has developed a [new schema proposal for the statewide road centerlines](https://docs.google.com/spreadsheets/d/1jQ_JuRIEtzxj60F0FAGmdu5JrFpfYBbSt3YzzCjxpfI/edit#gid=811360546). We’ve borrowed a great idea from the Utah County GIS office, organizing the data elements into color-coded functional areas (Thanks Patrick and Mary Jane!).

For data users, any schema change will be reflected in how AGRC publishes the data for download and as web services.
For data stewards, the schema will be the structure into which AGRC will be mapping the data that you provide in the short term.
One future possibility is that the new schema may be used to pilot a shared editing platform for road centerlines — one possible recommendation from the regional road centerline workshops.

__Please note that the road centerlines schema proposal is a starting point, and AGRC is looking forward to input as to errors, omissions, and suggestions for better ways to organize the information. Please [submit all feedback](http://goo.gl/forms/fdzA8sV4nuarXGDV2) by August 15, 2016.__

<a href="https://docs.google.com/spreadsheets/d/1jQ_JuRIEtzxj60F0FAGmdu5JrFpfYBbSt3YzzCjxpfI/edit#gid=811360546 "><img src="{{ "/images/roadcenterlinenewschema.png" | prepend: site.baseurl }}" alt="" title="Centerlines Datasets Schema V3.0.3" class="inline-text-right" /></a>

A few notes about the new schema:

- For ease of data editing, the schema is **flat** and handles road centerline aliasing using additional columns instead of a relational table, although the flat structure could be derived into a more normalized form.
- Coded value domains are suggested for many of the most stable attributes; the domains are accessible from the tabs at the bottom of spreadsheet.
- The schema is informed from the GIS data model currently under review within NENA - the national 911 professional association.
- To provide for flexibility for attributes that may be of specific local interest, a text field called `CUSTOM_TAGS` is provided to hold JSON-styled attribute tags (ex: `{"GarbageLeft":Tuesday,"GarbageRight":Wednesday}`. If there are **mainstream** attributes missing from the standard portion of the schema, they should be submitted as suggestions for addition to the schema as standalone fields.
- A placeholder has been added for 911 jurisdictional areas that will be used for NG911 call routing and/or emergency dispatch. More work is needed in this area and will be done in consultation with 911 center staff in the near future.
- On street bicycle infrastructure is now included as fields and coded domains.
- No road centerline schema post should omit the early contributions made by the Canyon Country Partnership counties in SE Utah that got the GIS road data sharing going with the `share codes` assembled in the 1990's. Hats off to their pioneering efforts in rural Utah!

*[NENA]: National Emergency Number Association
*[NG911]: Next Generation 911
