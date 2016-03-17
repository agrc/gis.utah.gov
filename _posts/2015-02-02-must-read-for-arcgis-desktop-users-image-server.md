---
layout: post
status: publish
published: true
title: 'Must Read for ArcGIS Desktop Users: Image Server Deprecation'
author:
  display_name: jpechmann
  login: jpechmann
  email: jpechmann@utah.gov
  url: ''
author_login: jpechmann
author_email: jpechmann@utah.gov
wordpress_id: 16393
wordpress_url: http://gis.utah.gov/?p=16393
date: '2015-02-02 14:56:21 -0700'
date_gmt: '2015-02-02 21:56:21 -0700'
categories:
- Data
- Featured
- SGID Blog
tags:
- Data
- agrc
- image server
- image extension
- mapserv
- '10.3'
---
<p><a href="{{ "/downloads/MapservImage.jpg" | prepend: site.baseurl }}"><img src="{{ "/images/MapservImage.jpg" | prepend: site.baseurl }}" alt="" title="MapservImage" width="176" height="400" class="inline-text-left" /></a></p>
<p>Begining January 16, 2016 AGRC will no longer support legacy Image Server. This means that users of all versions of ArcGIS Desktop will <strong>not</strong> be able to connect to the SGID Image Server (connections established using the <em>Add Image Server Connection</em> button). All links to Image Server saved within an mxd will be broken as well. </p>
<p>AGRC recommends that ALL ArcGIS Desktop users access the aerial photography and scanned map data layers by using <em>Add Data > GIS Servers</em> to connect to AGRC's mapserv.utah.gov server. This method accesses these map layers via the ArcGIS Image Extension for Server, the replacement for the legacy version of Image Server. Here's how: </p>
<p><strong><em>Instructions for connecting to AGRC's mapserv:</em></strong></p>
<p>1. In ArcMap, click the Add Data button<br />
2. At the top of the Add Data window, set the 'Look In' drop down list to 'GIS Servers'<br />
3. Select 'Add ArcGIS Server' and click add<br />
4. In the window that pops up, choose the 'Use GIS Services' option<br />
4. Set the Server URL to:  <strong>http://mapserv.utah.gov/arcgis/services</strong><br />
5. Click Finish and then double click the newly added item “arcgis on mapserv.utah.gov" in ArcCatalog</p>
<p>Once connected to AGRC's mapserv, navigate to your folder of interest:</p>
<ul>
<li>AerialPhotography_Color</li>
<li>AerialPhotography_BlackWhite</li>
<li>BaseMaps</li>
<li>ScannedMaps</li>
</ul>
<p>For questions, please contact <a href="mailto:zbeck@utah.gov">Zach Beck</a> at AGRC.</p>
