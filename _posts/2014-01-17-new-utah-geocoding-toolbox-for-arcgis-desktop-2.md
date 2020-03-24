---
author:
  display_name: AGRC Dev Team
  email: agrc@utah.gov
tags:
  - geocoding
date: 2014-01-17 11:57:08
title: 'New Utah Geocoding Toolbox for ArcGIS Desktop'
categories:
  - Featured
---

AGRC is proud to announce the release of a Utah-specific geocoding toolbox for ArcGIS Desktop.

This custom geocoding toolbox allows ArcGIS users to obtain geographic coordinates from AGRC's Web API [geocoding endpoint](https://api.mapserv.utah.gov/#geocoding) for any table of addresses in an ArcGIS accessible format.

While the geocoding endpoint was built primarily for web applications it also provides value as a toolbox in ArcGIS, as it uses current local data and solves for some common shortcomings with stock geocoding approaches by:

![geocoding toolbox]({% link images/geocodingtoolbox.png %}){: .inline-text-right }

- using hierarchical street name and address coordinate system aliasing
- use of either zip codes or place names as zones
- ignores placename and zip code errors within the same addressing system
- handles common placename usage and abbreviations (WVC, St George, Magna, Heber City, S Jordan, etc.)
- can find matches for numeric address 'reversals' (500 E 1991 S)
- can find address point matches, offset centerline matches, or best available.
- [more information]({% link _posts/2013-05-10-utah-statewide-address-geocoding-web-service-upgrade.md %})

Use the Street and Zone endpoint on the [API Explorer](https://api.mapserv.utah.gov/#geocoding) or the Find Address widget on [atlas.utah.gov](https://atlas.utah.gov) to test the results from your problem addresses against the API.

Installation is as easy as [downloading]({% link data/address-geocoders-locators/index.html %}?GeocodingToolbox) the `AGRC Geocode Tools.tbx` file to your desired location and then in ArcGIS, right clicking the [Add Toolbox](https://resources.arcgis.com/en/help/main/10.1/index.html#//003q0000001m000000) menu item.

Users must obtain an IP specific API key by [registering](https://developer.mapserv.utah.gov/AccountAccess) prior to use, as a unique API key is one of the required input parameters for running the tool.

The geocoding tool will produce as output a `.csv` file with the input unique identifier field, the input address information, and the match results. It also produces a `.dbf` file with the same information and will provide the user with the option to add this to the current ArcMap project. A user can use the `.dbf` file to join on the unique record identifier to connect with the original results, and also to Display XYEvents to create a map layer of the results.

Users can view/edit the python code associated with the geocoding toolbox by right clicking on the script and selecting 'Edit'.

![tool screenshot]({% link images/geocodetoolbox.png %})
