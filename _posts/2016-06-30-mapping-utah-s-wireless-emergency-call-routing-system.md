---
layout: post
status: publish
published: true
title: 'Mapping Utah’s Wireless Emergency Call Routing System'
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2016-06-30 15:04:18
categories:
- Featured
tags:
- GIS
- AGRC
- PSAP
- 911
- Utah Communications Authority
---

The AGRC recently joined efforts on a project with the Utah Communications Authority to spatially map and analyze wireless emergency call routing throughout the State of Utah.  The goal of the project was to determine whether wireless emergency calls are being routed to the correct Public-Safety Answering Points (PSAP).

Typically, each cell tower has one or more sectors.  Depending on your geographic location, one of these sectors on the tower will route the call.  The routing is extremely important if it’s an emergency call (911), so it’s critical that each sector is routing to the appropriate PSAP.  Routing sheets, maintained by the wireless providers, essentially determine how these calls get routed.

The initial idea for this project grew from the concern that incorrectly routed calls often result in call transferring between the PSAPs, costing the caller valuable time.

As far as we know this type of analysis had never been done before, so an important part of the project was to define a process that could be repeated and eventually automated.

The first step was to obtain the routing sheets from West (formerly Intrado), who provide the PSAPs with 911 call handling equipment and services.  The routing sheets contain data for each cell sector including location (lat/long), beamwidth, azimuth, and range.  We requested routing sheets for the four dominant cell providers in the state (AT&T, Sprint, T-Mobile, and Verizon).  This data, however, is tabular so we needed to convert it to spatial data for use in our GIS.  Using scripts developed in-house, we spatially mapped each cell sector in the routing sheets, projecting its location and broadcast extent (see Map 1).

The next step was to look at each sector’s broadcast in relation to AGRC’s PSAP boundaries.  Using spatial analysis and geoprocessing we intersected both datasets to determine the PSAP, or portion of the PSAP, each sector’s broadcast overlapped.  Essentially, this process produced a new GIS layer with attributes from both the original routing sheets as well as attributes from its overlapping PSAP boundary (see Map 2).

Now with attributes from both dataset, we were able to query the data and map where sectors were split between two or more PSAP areas.  Of these sectors, we chose to focus the project on sectors where greater than fifty-percent of the broadcast area resides in the adjacent PSAP.

The final step of the project was to make a map document for each sector where this overlapping occurred.  We automated the map production process and organized them by PSAP area as well as wireless provider.  The final product was a set of maps, per provider, for each PSAP showing these specific sectors.

Future phases of this project have been discussed and may include actual call locations plotted on the map.  As of now this data is not in the routing sheets but we are in the process of getting it there.  This would enable the PSAPs, when making routing decisions, to better understand the geographic extent of the cell sector areas by displaying the location of the calls within them.

For this phase, It is our recommendation that each PSAP further investigate and review these sectors and, if necessary, submit changes to the appropriate wireless providers.  The hope is that the wireless providers would then, in turn, update their routing call sheets to reflect the most logical PSAP routing.  Ultimately, this will greatly improving 911 call response time and cut down on emergency call transfers between the PSAPs.

![Map One: Mapping Cell Sectors]({{ "/images/SectorsBearLake.png" | prepend: site.baseurl }})
![Map Two: Cell Sector Overlap]({{ "/images/SectorsWithPsaps.png" | prepend: site.baseurl }})
