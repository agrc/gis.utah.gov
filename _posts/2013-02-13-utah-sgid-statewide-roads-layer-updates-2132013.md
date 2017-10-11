---
status: publish
layout: post
author:
  display_name: Data Queen
  email: agrc@utah.gov
tags: []
published: true
date: 2013-02-13 17:54:58 -0700
title: Utah SGID Statewide Roads Layer Updates 2/13/2013
categories:
  - SGID Blog
---
<p>Updates were made recently to the SGID93.Transportation.Roads and SGID10.Transportation.Roads (new schema) feature classes that reside on the <a href="{{ "/sgid-database/" | prepend: site.baseurl }}">Utah SGID ArcSDE database server</a>.</p>
<p>The updated Roads data is also available as shapefiles and file geodatabase files for download on the <a href="ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/TRANSPORTATION/PackagedData/_Statewide/UtahRoadAndHighwaySystem/">SGID FTP site</a>.</p>
<p>Geocoding services and ArcGIS Server Applications & Web Services are now using the updated SGID93.Transportation.Roads feature class.</p>
<p>The following highlights what has been updated:</p>
<p><span style="text-decoration: underline;">County Updates:</span></p>
<ul>
<li><strong>Carbon:</strong> Received Carbon County's Master Address List (MAL) 1/8/2013: added new roads, road names, and address ranges; geocoding improvements</li>
<li><strong>Duchesne:</strong> Received centerline update 12/5/2012 : added new roads, road names, and address ranges; geocoding improvements</li>
<li><strong>Garfield:</strong> Received centerline update 1/14/2013 : added new roads, road names, and address ranges; geocoding improvements</li>
<li><strong>Kane:</strong> Received centerline update 1/11/2013 : added new roads, road names, and address ranges; geocoding improvements</li>
<li><strong>San Juan:</strong> Received centerline update 1/2/2013: added new roads, road names, and address ranges; geocoding improvements</li>
<li><strong>Weber:</strong> Received centerline update 1/8/2013: added new roads, road names, and address ranges; geocoding improvements</li>
</ul>
<p><span style="text-decoration: underline;">UDOT Route System:</span></p>
<ul>
<li>The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID93/10.Transportation.Roads were updated</li>
<li>The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated</li>
</ul>
<p><span style="text-decoration: underline;">Blue Stakes of Utah Feedback:</span></p>
<ul>
<li><strong>Duchesne:</strong> geocoding improvements</li>
<li><strong>Emery:</strong> geocoding improvements</li>
<li><strong>Salt Lake:</strong> geocoding improvements</li>
<li><strong>Uintah:</strong> geocoding improvements</li>
<li><strong>Utah:</strong> geocoding improvements</li>
<li><strong>Washington:</strong> geocoding improvements</li>
<li><strong>Weber:</strong> geocoding improvements</li>
</ul>
