---
title: Utah SGID Statewide Roads Updates and More!
author: Erik Neemann
date: 2026-10-13T08:00:00.000Z
category: SGID Updates
tags:
  - roads
cover_image: /src/images/pillar-blog/road-update-social-card.png
cover_image_alt: ugrc sgid road update social card
---

## New Tools! :toolbox:

UGRC recently upgraded several of the tools that we use to process road updates from the counties. These tools will allow us aggregate and edit road data in a more modern, sustainable framework and with a simpler code base. We've also incorporated [Attribute Rules](https://doc.esri.com/en/arcgis-pro/latest/help/data/geodatabases/overview/create-modify-and-delete-attribute-rules.html) into our editing database to perform data cleanup and field calculation tasks. This should help ensure cleaner, more consistent data and prevent human/data entry errors.

You can find more information about these tools in our [utrans-tools repo](https://github.com/agrc/utrans-tools/tree/main) on Github.

Specific updates include the following:

- New pythons scripts to detect changes and translate data between schemas
- JSON-based county profiles to more effectively map county data into our statewide schema and handle customized processing
- New ArcGIS Pro add-in to review and accept changes from source datasets
- Added Attribute Rules for:
  - Text field cleanup
  - Auto-Calculating the "FULLNAME" attribute from street component fields
  - Auto-calculate UNIQUEID from street component fields and segment midpoint
  - Spatially-assigning left/right fields based on segment midpoint and polygon layers
  - Constraining certain fields to Attribute Domains
- Added default values to specific fields:
  - ONEWAY = '0' (two way)
  - VERT_LEVEL = '0' (ground/lowest)
  - STATUS = Active'
  - CARTOCODE = '11' (Other Local, Neighborhood, Rural Roads)
  - STATE_L = 'UT'
  - STATE_L = 'UT'
- Added new "TrailSystem" text field to enable integration with Trails and Pathways data
- Converting blanks and empty strings to NULLs
- Domain updates on certain fields

## Fresh Data

While our developers were building and finalizing the tool upgrades over the last couple of months, we incurred a backlog of county updates to process. That backlog has now been processed and the data updates have been pushed into our SGID Roads data layer. Please visit our [Roads and Highway System](/products/sgid/transportation/road-centerlines/) data page where you will find information about the Roads data model, as well as a web service layer to the SGID Roads data and direct download links in shapefile and geodatabase format.

These updates are also reflected in UGRC's [address locators](/products/sgid/address/).

The following are highlights from this month's update.

## County Updates :eyes:

New roads were added and road names and address ranges were updated for the following counties:

- **Box Elder County:** Obtained roads data on 09/23/2026. Previous update was on 06/24/2026.
- **Cache County:** Obtained roads data on 08/24/2026. Previous update was on 05/14/2026.
- **Davis County:** Obtained roads data on 09/17/2026. Previous update was on 08/24/2026.
- **Emery County:** Obtained roads data on 06/11/2026. Previous update was on 07/17/2025.
- **Garfield County:** Obtained roads data on 09/17/2026. Previous update was on 04/27/2026.
- **Grand County:** Obtained roads data on 07/22/2026. Previous update was on 05/14/2026.
- **Iron County:** Obtained roads data on 08/31/2026. Previous update was on 06/25/2026.
- **Morgan County:** Obtained roads data on 09/30/2026. Previous update was on 05/19/2026.
- **Salt Lake County:** Obtained roads data on 09/17/2026. Previous update was on 08/31/2026.
- **Tooele County:** Obtained roads data on 08/24/2026. Previous update was on 05/14/2026.
- **Utah County:** Obtained roads data on 09/17/2026. Previous update was on 08/24/2026.
- **Washington County:** Obtained roads data on 09/17/2026. Previous update was on 07/22/2026.
- **Weber County:** Obtained roads data on 09/17/2026. Previous update was on 08/31/2026.

## UDOT Route System

- Visit the [SGID LRS page](/products/sgid/transportation/highway-routes-lrs/) for information on UDOT's Advanced LRS (ALRS) data.
