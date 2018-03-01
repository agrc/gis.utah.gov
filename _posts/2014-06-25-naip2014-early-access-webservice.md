---
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
tags:
  - aerial photography
  - apfo
  - data
  - imagery
  - naip
  - raster
  - usda
date: 2014-06-25 12:57:48 -0600
title: National Agricultural Imagery Program (NAIP) 2014 - Early Access Web Service
categories:
  - Featured
  - SGID Blog
---
<p><a href="{{ "/downloads/NAIP2014_RGB-CIR.jpg" | prepend: site.baseurl }}"><img src="{{ "/images/NAIP2014_RGB-CIR.jpg" | prepend: site.baseurl }}" alt="" title="PLSSapp" width="250" height="250" class="inline-text-left" /></a></p>
<p>The USDA's 2014 New, statewide one meter 2014 aerial photography is currently being collected as part of the <a href="http://www.fsa.usda.gov/programs-and-services/aerial-photography/imagery-programs/naip-imagery/index" target="_blank">National Agricultural Imagery Program (NAIP).</a> </p>
<p>And, the preliminary 2014 NAIP imagery is available now for use as web services.</p>
<p>This year, the Utah NAIP contractors are required to make the preliminary imagery available through an Early Access Web Service, approximately 5 business days after an area has been acquired. The coverage area will grow until the project is complete (several weeks) and the contractors will continue to make the preliminary imagery web service available until 30 days after final delivery of the final Digital Orthophoto Quarter Quads (DOQQs) products. When the acquisition is finalized, which is expected to be this Fall, the collection will be statewide 1 meter 4-band imagery and will be available as web services and for download from AGRC's servers.</p>
<p>The Early Access Web Service for Utah is now active.  It can be accessed as a standalone webservice from here: http://gissvr.surdex.net/arcgis/rest/services/ImageServices/PILOT_EAWS_UT_2014_4b/ImageServer or by adding an ArcGIS Server to an ArcMap session using the following url: https://gissvr.surdex.net/arcgis/services . The imagery is in the imageservices folder (i.e. PILOT_EAWS_UT_2014_4b) and the acquisition dates layer is in the mapservices folder (i.e. NAIP2014UT).</p>
<p>To view the service as a WMS use the following url: http://gissvr.surdex.net/arcgis/services/ImageServices/PILOT_EAWS_UT_2014_4b/ImageServer/WMSServer?</p>
<p>{% include contact.html subject=page.title contact=site.data.contacts.imagery %}</p>
