---
layout: post
status: publish
published: true
title: 'Must Read for ArcGIS Desktop 10.3 Users: Image Server'
author:
  display_name: jpechmann
  login: jpechmann
  email: jpechmann@utah.gov
  url: ''
author_login: jpechmann
author_email: jpechmann@utah.gov
wordpress_id: 16393
wordpress_url: http://gis.utah.gov/?p=16393
date: '2015-02-02 14:56:21 -0500'
date_gmt: '2015-02-02 21:56:21 -0500'
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
<p><a href="http://gis.utah.gov/wp-content/uploads/MapservImage.jpg"><img src="http://gis.utah.gov/wp-content/uploads/MapservImage.jpg" alt="" title="MapservImage" width="176" height="400" class="alignright size-full wp-image-16421" /></a><strong>Connecting to ArcGIS Image Extension for Server<br />
</strong><br />
ArcGIS Desktop 10.3 users will <strong>not</strong> be able to connect to the legacy SGID Image Server (connections established using the <em>Add Image Server Connection</em> button).</p>
<p>AGRC recommends that ALL ArcGIS Desktop users access the aerial photography and scanned map data layers by using <em>Add Data > GIS Servers</em> to connect to AGRC's mapserv.utah.gov server. This method accesses these map layers via the ArcGIS Image Extension for Server, the replacement for the legacy version of Image Server. Here's how: </p>
<p><em>Instructions for connecting to AGRC's mapserv:</em></p>
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
<p><a href="http://gis.utah.gov/wp-content/uploads/ImageServer_cropped.jpg"><img src="http://gis.utah.gov/wp-content/uploads/ImageServer_cropped.jpg" alt="" title="ImageServer_cropped" width="150" height="110" class="alignleft size-full wp-image-16426" /></a><strong>The legacy version of Image Server is not compatible with 10.3. ArcGIS Desktop Projects may not open or properly function at 10.3 when you have artifacts of the old Image Server in your .mxd project files. Remove the layers that access the old Image Server and remove the custom 'Add Image Service Connection' button from projects prior to installing 10.3</strong>. </p>
<p>AGRC is working on a python script to remove legacy Image Server connection layers from 10.3 .mxd project files.<br />
For questions, please contact <a href="mailto:zbeck@utah.gov">Zach Beck</a> at AGRC.</p>
