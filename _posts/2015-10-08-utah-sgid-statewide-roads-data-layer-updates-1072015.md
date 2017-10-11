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
  - topography
  - transportation
published: true
date: 2015-10-08 08:44:38 -0600
title: Utah SGID Statewide Roads Data Layer Updates 10/7/2015
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
<li><strong>Davis:</strong> Centerline update not received</li>
<li><strong>Juab:</strong> Received centerline update 9/16/2015 & address points update 8/3/2015: geocoded address point addresses against Roads data layer: added new roads, road name and address range changes since last roads update on 6/24/2014; geocoding improvements</li>
<li><strong>Salt Lake:</strong> Received VECC's centerline update 9/28/2015: added new roads, road name and address range changes since last update on 8/26/2015; geocoding improvements</li>
<li><strong>Tooele:</strong> Received centerline update 8/31/2015: added new roads, road name and address range changes since last comprehensive update on 8/12/2014; geocoding improvements</li>
<li><strong>Utah:</strong> Received centerline update 10/5/2015: added new roads since last update on 8/19/2015; geocoding improvements</li>
<li><strong>Washington:</strong> Received centerline update 9/29/2015: added new roads since last update on 8/31/2015; geocoding improvements</li>
<li><strong>Weber:</strong> Centerline update not received</li>
</ul>
<p><span style="text-decoration: underline;">Blue Stakes of Utah Feedback:</span></p>
<ul>
<li><strong>Juab:</strong> geocoding improvements</li>
<li><strong>Salt Lake:</strong> geocoding improvements</li>
<li><strong>Utah:</strong> geocoding improvements</li>
</ul>
<p><span style="text-decoration: underline;">UDOT Route System:</span></p>
<ul>
<li>The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated</li>
<li>The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated</li>
