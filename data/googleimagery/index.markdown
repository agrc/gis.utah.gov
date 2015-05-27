---
layout: page
status: publish
published: true
title: Google Imagery
author:
  display_name: rkelson
  login: rkelson
  email: rkelson@utah.gov
  url: ''
author_login: rkelson
author_email: rkelson@utah.gov
wordpress_id: 16519
wordpress_url: http://gis.utah.gov/?page_id=16519
date: '2015-02-09 08:00:09 -0500'
date_gmt: '2015-02-09 15:00:09 -0500'
categories: []
tags:
- agrc
- imagery
- google
- hi res
---
<p><em><strong>Background</em></strong><br />
At the beginning of the year (2015), a coalition of state, regional, and local government agencies purchased a license to Google's high resolution (6 inch pixels) aerial photography [<a href="http://gis.utah.gov/utah-acquires-high-resolution-aerial-photography-license/">more info</a>]. The license will allow Utah's <strong><em>cities, counties, special districts, state agencies, K12/Higher ed, and tribes</em></strong> to use this imagery in web and desktop mapping applications as a streaming web service or, where needed, on premise from downloaded local files. Also included is <strong><em>use by contractors and formal partners of the immediate licensees</strong></em>.</p>
<p><em><strong>Coordinate System and Datum</em></strong><br />
The native coordinate system for the Google files and services is Web Mercator with a WGS 1984 datum. Many end users in Utah work in coordinate systems with a different datum (NAD 1983 for example). It will be critical for end users that require the highest locational precision to set up their working environment through the use of the appropriate geographic transformation (Esri software users should use NAD_1983_To_WGS_1984_5). The geographic transformation parameter is needed to overcome the locational difference between the WGS84 and NAD83 datum's “realization points” that are about a meter apart. Without the proper geographic transformation, reprojection algorithms will not be able to resolve the last meter of positional accuracy. In order for the imagery to be positioned as accurately as possible when there is a difference between the native projection and datums of the imagery and the client viewing application, a datum conversion must be set. For ArcMap users, the appropriate datum conversion for Utah is NAD_1983_To_WGS_1984_5. The default (no transformation specified) will likely introduce several feet of horizontal positional error. More information : <a href="http://support.esri.com/en/knowledgebase/techarticles/detail/24159">NAD_1983_To_WGS_1984_5</a></p>
<p><em><strong>Horizontal Positional Accuracy</em></strong><br />
Stated horizontal positional accuracy of the imagery is expected to achieve or exceed one meter (CE90) in most areas without significant vertical relief. Higher precision is expected in urban areas, where existing supplemental ground control was more abundant.</p>
<p><em><strong>Adding a WMTS service to ArcMap</em></strong><br />
Adding a WMTS service to ArcMap is very simple. Go to <em>Add Data -> GIS Servers -> Add WMTS Server</em> and paste the WMTS link you have been provided into the <em>URL:</em> line, also add the User and Password<a href="http://gis.utah.gov/wp-content/uploads/AddWMTS.jpg">(see example)</a> then hit OK. Now navigate to the newly added WMTS <em><strong>'utah imagery - WMTS on discover.agrc.utah.gov'</em></strong> by going to <em>Add Data -> GIS Servers</em>. If you drill down through the service folders you will find the <em>'utah'</em> layer to add <a href="http://gis.utah.gov/wp-content/uploads/AddWMTS_tree.jpg">(see example)</a>. The WMS service can be added by following the instructions above just substitute GIS Servers -> Add WMS Server.</p>
<p><em><strong>ArcMap User Considerations</em></strong><br />
When opening ArcMap projects that already contain the imagery service you will need to double-click the service in the table of contents, go to the <em>Source</em> tab, and re-enter your password. A better way is to double-click the server connection in the ArcMap Catalog window to re-establish or ‘wake up’ the connection <a href="http://gis.utah.gov/wp-content/uploads/ArcMap_Catalog_window.jpg">(see example)</a>. You may need to refresh the view too.<br />
ArcMap users experiencing problem with the service may need to clear their local cache by going to the service’s Layer Properties -> Cache tab and selecting Clear Local Cache Now.<br />
<strong>ArcMap 10.1 users</strong> should use the WMS service and not the WMTS. The WMTS in ArcMap 10.1 does not render correctly.</p>
<p><em><strong>Adding a WMTS service to CAD</em></strong><br />
Take a look at this <a href="ftp://ftp.agrc.utah.gov/Temp/MicroStationGoogleWMS_HowTo.pdf">How To document</a> and wherever you see <em>WMS</em> substitute <em>WMTS</em>.</p>
<p><em><strong>Usage Tracking</em></strong><br />
To access the GCP services individual organizations will be provided usernames and passwords for their organization. This will allow for tracking usage metrics and performance of the imagery service. Do not distribute the usernames and passwords outside of your organization or division.</p>
<p><em><strong>Google Logos</em></strong><br />
<a href="ftp://ftp.agrc.utah.gov/Google/google_logos.zip">Download zipfile of Google logos</a><br />
<img src="http://gis.utah.gov/wp-content/uploads/ImageryCGoogle_WhiteTransparent.png" alt="white transparent" width="132" height="19"> <img src="http://gis.utah.gov/wp-content/uploads/ImageryCGoogle_WhiteOnBlack.png" alt="white on black" width="132" height="19"></p>
<p><em><strong>Requests for On-Premise Use</em></strong><br />
Request can be made to consume the imagery off-line when the provided imagery service does not suffice or if you are not state, regional, local or tribal government, public safety, K-12, or higher education. Please provide the following information for consideration:</p>
<ul>
<li>Name & organization:</li>
<li>Reason for request:</li>
<li>Working on behalf of:</li>
<li>Project names:</li>
<li>Project locations:</li>
</ul>
<p><em><strong>Answers to questions we have been asked...(look for future additions to this list)</em></strong></p>
<ul>
<li>When future imagery updates are received, the older imagery will be kept online in an archive layer and will continue to be available.</li>
<li>Since the Google acquisition flight blocks are not done all at once (as opposed to the NAIP product for example), there will certainly be color and positional changes at flight block boundaries. For large area maps, the color-balanced NAIP may be a more aesthetically pleasing cartographic choice. </li>
<li>AGRC will host a polygon map of the Google flight blocks and their date of collection. The Google flight blocks are available from our SDE as SGID10.INDICES.Google_GCP or as a download <a href="ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/INDICES/UnpackagedData/Google_GCP/_Statewide/">from here</a>. There is also an  ArcGIS Online map of the flight blocks available <a href="http://arcg.is/1E0wq3b">from here</a>.</li>
<li>A tile index of the .jp2 images that make up the service is available from our SDE as SGID10.INDICES.Google_Tiles or as a download <a href="ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/INDICES/UnpackagedData/Google_Tiles/_Statewide/">from here</a>.</li>
<li>For future updates, Utah can certainly pass along requests to Google for additional update areas or for specific collection periods. But there is no provision in the current contract to create any expectation that those requests will be acted upon.</li>
<li>AGRC will develop a process to register for access to the service and ensure that terms of service are communicated to end users. </li>
<li>AGRC will download a statewide master set of the image files for redistribution, as the download process directly from Google incurs transactional costs for cloud server & bandwidth usage.</li>
<li>AGRC will provide a feedback reporting form for imagery users around the state to report imagery and service issues so these can be passed along to Google. The feedback form can be found <a href="https://docs.google.com/a/utah.gov/forms/d/1UGU77SPM_HX0r8zblIs05C-H5mLyRja1gRT7Fu4aKZk/viewform?fbzx=-6743712545663240221">here</a>.</li>
</ul>
