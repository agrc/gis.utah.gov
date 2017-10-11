---
status: publish
layout: post
author:
  display_name: Data Queen
  email: agrc@utah.gov
tags:
  - address
  - centerline
  - data
  - geocoding
  - roads
published: true
date: 2014-11-13 17:13:28 -0700
title: Utah SGID Statewide Roads Data Layer Updates 11/13/2014
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
<li><strong>Beaver:</strong> Received centerline update 10/15/2014: added new roads, road name and address range changes since last update on 5/26/2011; geocoding improvements</li>
<li><strong>Box Elder:</strong> Received centerline update 10/1/2014: added new roads, road name and address range changes since last update on 9/24/2013; geocoding improvements</li>
<li><strong>Davis:</strong> Received centerline update 10/27/2014: added new roads, road name and address range changes since last update on 9/4/2014; geocoding improvements</li>
<li><strong>Salt Lake:</strong> Received VECC's centerline update 11/10/2014: added new roads since last update on 9/30/2014; geocoding improvements</li>
<li><strong>Utah:</strong> Received centerline update 10/22/2014: added new roads since last update on 9/25/2014; geocoding improvements</li>
<li><strong>Washington:</strong> Received centerline update 10/23/2014: added new roads since last update on 9/23/2014; geocoding improvements</li>
<li><strong>Weber:</strong> Received centerline update 10/27/2014: added new roads, road name and address range changes since last update on 9/25/2014; geocoding improvements</li>
</ul>
<p><span style="text-decoration: underline;">Blue Stakes of Utah Feedback:</span></p>
<ul>
<li><strong>Salt Lake:</strong> geocoding improvements</li>
<li><strong>San Juan:</strong> geocoding improvements</li>
<li><strong>Utah:</strong> geocoding improvements</li>
<li><strong>Washington:</strong> geocoding improvements</li>
<li><strong>Weber:</strong> geocoding improvements</li>
</ul>
<p><span style="text-decoration: underline;">UDOT Route System:</span></p>
<ul>
<li>The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated</li>
<li>The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated</li>
