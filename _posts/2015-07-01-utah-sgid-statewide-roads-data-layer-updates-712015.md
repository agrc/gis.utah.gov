---
status: publish
layout: post
author:
  display_name: Data Queen
  email: agrc@utah.gov
tags:
  - address
  - data
  - geocoding
  - location
  - roads
  - service
  - topography
published: true
date: 2015-07-01 16:29:33 -0600
title: Utah SGID Statewide Roads Data Layer Updates 7/1/2015
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
<li><strong>Davis:</strong> Received centerline update 6/24/2015: added new roads, road name and address range changes since last update on 6/1/2015; geocoding improvements</li>
<li><strong>Kane:</strong> Received centerline update 6/18/2015: added new roads, road name and address range changes since last update on 2/10/2014; geocoding improvements</li>
<li><strong>Salt Lake:</strong> Received VECC's centerline update 6/22/2015: added new roads, road name and address range changes since last update on 5/27/2015; geocoding improvements</li>
<li><strong>Utah:</strong> Received centerline update 6/22/2015: added new roads, road name and address range changes since last update on 6/2/2015; geocoding improvements</li>
<li><strong>Washington:</strong> Received centerline update 6/18/2015: added new roads, road name and address range changes since last comprehensive update on 1/5/2015; geocoding improvements</li>
<li><strong>Weber:</strong> Received centerline update 6/23/2015: added new roads, road name and address range changes since last update on 5/19/2014; geocoding improvements </li>
</ul>
<p><span style="text-decoration: underline;">Blue Stakes of Utah Feedback:</span></p>
<ul>
<li><strong>Davis:</strong> geocoding improvements</li>
<li><strong>Grand:</strong> geocoding improvements</li>
<li><strong>Salt Lake:</strong> geocoding improvements</li>
<li><strong>Utah:</strong> geocoding improvements</li>
<li><strong>Washington:</strong> geocoding improvements</li>
<li><strong>Weber:</strong> geocoding improvements</li>
</ul>
<p><span style="text-decoration: underline;">UDOT Route System:</span></p>
<ul>
<li>The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated</li>
<li>The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated</li>
