---
status: publish
layout: post
author:
  display_name: Data Queen
  email: agrc@utah.gov
tags:
  - address
  - centerline
  - location
published: true
date: 2014-12-03 10:16:00 -0700
title: Utah SGID Statewide Roads Data Layer Updates 12/3/2014
categories:
  - Featured
  - SGID Blog
---
<p>Updates were made recently to the SGID10.Transportation.Roads feature class that resides on the <a href="{{ "/sgid-database/" | prepend: site.baseurl }}">Utah SGID ArcSDE database server</a>.</p>
<p>The updated Roads data is also available as shapefiles and file geodatabase files for download on the <a href="ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/TRANSPORTATION/PackagedData/_Statewide/UtahRoadAndHighwaySystem/">SGID FTP site</a>.</p>
<p>Geocoding services and ArcGIS Server Applications & Web Services are now using the updated SGID10.Transportation.Roads feature class.</p>
<p>The following highlights what has been updated:</p>
<p><span style="text-decoration: underline;">County Updates:</span></p>
<ul>
<li><strong>Davis:</strong> Received centerline update 11/26/2014: added new roads, road name and address range changes since last update on 10/27/2014; geocoding improvements</li>
<li><strong>Emery:</strong> Received centerline update 11/25/2014 (in progress): added new roads, road name and address range changes since last comprehensive update on 11/4/2013; geocoding improvements</li>
<li><strong>Salt Lake:</strong> Received VECC's centerline update 11/26/2014: added new roads since last update on 11/10/2014; geocoding improvements</li>
<li><strong>Uintah:</strong> Received centerline update 10/6/2014: added new roads, road name & address range changes since last comprehensive update on 11/1/2013; geocoding improvements</li>
<li><strong>Utah:</strong> Received centerline update 12/2/2014: added new roads since last update on 10/22/2014; geocoding improvements</li>
<li><strong>Weber:</strong> Received centerline update 11/25/2014: added new roads, road name and address range changes since last comprehensive update on 6/24/2014; geocoding improvements</li>
</ul>
<p><span style="text-decoration: underline;">Blue Stakes of Utah Feedback:</span></p>
<ul>
<li><strong>Salt Lake:</strong> geocoding improvements</li>
<li><strong>Summit:</strong> geocoding improvements</li>
<li><strong>Wasatch:</strong> geocoding improvements</li>
</ul>
<p><span style="text-decoration: underline;">UDOT Route System:</span></p>
<ul>
<li>The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated</li>
<li>The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated</li>
