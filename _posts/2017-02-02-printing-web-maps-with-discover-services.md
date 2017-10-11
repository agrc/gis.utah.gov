---
status: publish
layout: post
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
tags:
  - arcgis server
  - printing
  - wmts
published: true
date: 2017-02-02 21:04:30
title: Printing Web Maps with Discover Services
categories:
  - Developer
---
### Export Web Map Tool
The [Export Web Map](http://desktop.arcgis.com/en/arcmap/latest/tools/server-toolbox/export-web-map.htm) tool is a geoprocessing tool that comes published as a [service](http://resources.arcgis.com/en/help/rest/apiref/gp_exportwebmaptask.html) (`Utilities/PrintingTools`) out of the box with ArcGIS Server. From ESRI's docs:
> This tool takes the state of a web application (for example, included services, layer visibility settings, and client-side graphics) and returns a printable page layout or basic map of the specified area of interest.

This is most commonly used as a print service for web applications allowing the user to download a PDF of the current map extent.

### The Problem
AGRC's [base map services]({{ "/data/base-map-and-imagery/" | prepend: site.baseurl }}) (including the [Google imagery]({{ "/discover/license/" | prepend: site.baseurl }})) are hosted as WMTS services on `discover.agrc.utah.gov`. In order to use them an organization needs to [register]({{ "/data/base-map-and-imagery/" | prepend: site.baseurl }}) and request a quad word. To prevent unauthorized use they are each locked down to a specific domain or set of domains. So if someone tries to use your quad word from any other domain or server the request is blocked. This all works well until you send a web map to the PrintingTools service in ArcGIS Server. The web map contains URL's to Discover services that have quad words locked down to your web app's domain. When the service requests tiles, it does so from the server that is hosting the service not the browser. This causes Discover to reject the request because the origin of the request does not match what the quad word is locked down to.

### The Solution
To work around this issue AGRC developed a [print-proxy geoprocessing service](https://github.com/agrc/print-proxy). This service accepts the same parameters as Export Web Map with the addition of `ExportWebMapService_URL` which defines the Export Web Map Service that you want to proxy to. Then within the service, it simply switches out your locked down quad-word for a wide open one and passes the request onto the URL defined in `ExportWebMapService_URL`.

_Why don't I just use a wide open quad word in the first place?_ That's a great question. I'm glad you asked! Using wide open quad words in web applications would violate the [Organizational Usage Agreement](https://docs.google.com/a/utah.gov/forms/d/e/1FAIpQLScL5uUQIvw7op_ZcF4bijxcoOMGhNF0MXwJNGqSXS6IbjbKhA/viewform). It would be very easy for a savvy web developer to get your quad words and use them on their own site.

AGRC's print proxy service is open source and available for download and deployment to your own servers from: [https://github.com/agrc/print-proxy](https://github.com/agrc/print-proxy). Feedback and pull requests are welcome.


