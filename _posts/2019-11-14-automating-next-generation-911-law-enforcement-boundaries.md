---
title: 'Automating Next-Generation 911 Law Enforcement Boundaries'
author:
  display_name: Erik Neemann
  email: eneemann@utah.gov
date: 2019-11-14 17:03:29
categories:
  - Featured
tags:
  - law enforcement
  - ng911
  - python
  - boundaries
  - psap
  - sgid
---

AGRC has created a Python script for law enforcement boundaries that automatically builds jurisdiction polygons based on existing boundaries (primarily county and municipal boundaries) in the State Geographic Information Database (SGID). In order to understand how this automation will improve law enforcement response, it's important to understand Next-generation 911 (NG911).

## Background
{: .text-left}

NG911 will change the paradigm for emergency call-routing from a table-based system to a GIS-based system. With NG911, each 911 call will be registered as a geographic point based on the location (i.e., latitude and longitude) of the cell phone or the address of the landline from which the call originates. Once that geographic point is determined, NG911 can determine which dispatch center, or public safety answering point (PSAP), boundary the point falls within, and the call can be routed appropriately. As a result, the GIS data informing the NG911 system is critical for ensuring that calls are routed to the correct PSAP. The new internet-based network infrastructure will also provide additional GIS-based information to the PSAP when the call is delivered. This information will include a recommendation on which agencies (i.e., which city’s/county’s law enforcement, fire, or emergency medical service agencies) should be dispatched according to the call's geographic location.

In order to facilitate Utah's transition to the NG911 system, AGRC is preparing statewide GIS data sets that will drive the call-routing and agency recommendations. Although the transition is still many months away, we are already working on preparing the GIS data. The emergency service boundaries will need to be accurate, with no gaps or overlaps, to ensure that every location has appropriate and unambiguous responding agency recommendations. For additional information on AGRC's NG911 efforts, read [Utah's NG911 GIS Roadmap]({% link _posts/2018-08-31-utah-ng911-gis-roadmap-v1.md %}).

## Python Script

With that information in mind, let's get back to AGRC's Python script. Our new script will automatically build jurisdiction polygons based on other boundaries that are maintained in the SGID (e.g., counties, municipalities). Police departments generally cover their own municipal boundaries, while county sheriff's offices generally cover the rest of the county land that doesn't belong to a municipality. However, not all municipalities have their own police department, and some police departments cover multiple municipalities. Further, there are unique law enforcement agencies that aren't associated with either county or municipal boundaries (e.g., Ute tribal police). Each of these nuances is handled by the Python script, which references external files that list which police departments cover which municipalities or contain static boundaries for the unique law enforcement agencies. ![NG911 Law Enforcement Boundaries]({% link images/201911_NG911LawEnforcementBoundaries.jpg %})

This script will allow the NG911 boundaries to be dynamically updated as boundaries are adjusted, new municipalities form, or annexations occur. The basic script logic is as follows:

1. Generate sheriff's office jurisdictions from SGID county boundaries
1. Generate police department jurisdictions from SGID municipal boundaries
   - Only build boundaries for municipalities that have their own police department
   - Merge boundaries of municipalities that share a police department
1. Insert police department boundaries into sheriff's office boundaries to create a combined boundaries layer
4. Insert unique jurisdiction boundaries into combined boundaries layer

A web map of the current law enforcement boundaries (November 2019) can be viewed [here](http://utah.maps.arcgis.com/home/webmap/viewer.html?useExisting=1). Please explore this map and let us know if there are any errors or discrepancies in your area. We want to ensure that these boundaries are as accurate as possible, and we welcome feedback that leads to better data.
