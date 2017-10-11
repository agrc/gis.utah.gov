---
status: publish
layout: page
author:
  display_name: Zach Beck
  email: zbeck@utah.gov
date: 2015-03-03 13:59:32 -0700
tags:
  - imagery
  - how to
categories: []
published: true
title: Connecting to Image Services from AGRC
---
AGRC hosts a collection of image services that may or may not be available from the [Discover]({{ "/discover" | prepend: site.baseurl }}) server. These services do not require a login. They are live services to a raster mosaic and will draw slower than the Discover server. You have the ability to fine tune the settings on the image services for instance, Computing a Histogram. If you do not need advanced image processing capabilities and want a faster experience, look for the service on the [Discover]({{ "/discover" | prepend: site.baseurl }}) server.

#### Connecting

1. In ArcMap, click the `Add Data button`
1. At the top of the Add Data window, set the `Look In` drop down list to `GIS Servers`
1. Select `Add ArcGIS Server` and click add
1. In the window that pops up, choose the `Use GIS Services` option
1. Set the Server URL to `http://mapserv.utah.gov/arcgis/services`
1. Click `Finish `and then double click the newly added item `arcgis on mapserv.utah.gov` in ArcCatalog

Once connected to AGRC's mapserv, navigate to your folder of interest. The available optiosn are:

- AerialPhotography_BlackWhite
- AerialPhotography_Color
- AerialPhotography_InfraRed
- Elevation
- ScannedMaps

![Warning]({{ "/images/ImageServer_cropped.jpg" | prepend: site.baseurl }})
{:.inline-text-left .productImage-Thumb}

The legacy version of Image Server is not compatible with 10.3. ArcGIS Desktop Projects may not open or properly function at 10.3 when you have artifacts of the deprecated Image Server in your `.mxd` project files. Remove the layers that access the deprecated Image Server and remove the custom `Add Image Service Connection` button from projects prior to installing 10.3.

For questions, please contact [Zach Beck](mailto:zbeck@utah.gov) at AGRC.
