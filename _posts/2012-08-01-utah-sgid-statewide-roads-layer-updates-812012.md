---
status: publish
layout: post
author:
  display_name: Data Queen
  email: agrc@utah.gov
tags:
  - data
  - transportation
published: true
date: 2012-08-01 18:44:44 -0600
title: Utah SGID Statewide Roads Layer Updates 8/1/2012
categories:
  - SGID Blog
---
<p>Updates were made recently to the SGID93.Transportation.Roads and SGID10.Transportation.Roads (new schema) feature classes that reside on the <a href="{{ "/sgid-database/" | prepend: site.baseurl }}">Utah SGID ArcSDE database server</a>.</p>
<p>The updated Roads data is also available as shapefiles and file geodatabase files for download on the <a href="ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/TRANSPORTATION/PackagedData/_Statewide/UtahRoadAndHighwaySystem/">SGID FTP site</a>.</p>
<p>Geocoding services, ArcIMS Applications, and ArcGIS Server Applications &amp; Web Services are now using the updated SGID93.Transportation.Roads feature class.</p>
<p>The following highlights what has been updated:</p>
<p><span style="text-decoration: underline;">County Updates:</span></p>
<ul>
<li><strong>Duchesne:</strong> Received centerline update 6/20/2012: added new roads, road names, and address ranges; geocoding improvements</li>
<li><strong>Iron: </strong>Received centerline update 6/15/2012: added new roads, road names, and address ranges; geocoding improvements</li>
<li><strong>Rich:</strong> Received centerline update 7/5/2012: added new roads, road names, and address ranges; geocoding improvements</li>
<li><strong>Salt Lake:</strong> Received Salt Lake County's centerline update 6/12/2012: added new roads, road names, and address ranges; geocoding improvements</li>
<li><strong>Salt Lake:</strong> Received VECC's centerline update 6/17/2012: added new roads, road names, and address ranges; geocoding improvements</li>
<li><strong>Uintah:</strong> Received centerline update 7/17/2012: added new roads, road names, and address ranges; geocoding improvements</li>
<li><strong>Weber:</strong> Received centerline update 6/5/2012: added new roads, road names, and address ranges; geocoding improvements</li>
</ul>
<p><span style="text-decoration: underline;">UDOT Route System:</span></p>
<ul>
<li>The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID93.Transportation.Roads were updated</li>
<li>The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated</li>
</ul>
<p><span style="text-decoration: underline;">Blue Stakes of Utah Feedback:</span></p>
<ul>
<li><strong>Davis:</strong> geocoding improvements</li>
<li><strong>Duchesne:</strong> geocoding improvements</li>
<li><strong>Salt Lake:</strong> geocoding improvements</li>
<li><strong>Sanpete:</strong> geocoding improvements</li>
<li><strong>Tooele:</strong> geocoding improvements</li>
<li><strong>Uintah:</strong> geocoding improvements</li>
<li><strong>Utah:</strong> geocoding improvements</li>
</ul>
