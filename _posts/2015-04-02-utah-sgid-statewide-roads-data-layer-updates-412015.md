---
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
date: 2015-04-02 12:25:17 -0600
title: Utah SGID Statewide Roads Data Layer Updates 4/1/2015
categories:
  - SGID Blog
---
<p>Updates were made recently to the SGID10.Transportation.Roads feature class that resides on the <a href="{{ "/sgid-database/" | prepend: site.baseurl }}">Utah SGID ArcSDE database server</a>.</p>
<p>The updated Roads data is also available as shapefiles and file geodatabase files for download on the <a href="ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/TRANSPORTATION/PackagedData/_Statewide/UtahRoadAndHighwaySystem/">SGID FTP site</a>.</p>
<p>Geocoding services and ArcGIS Server Applications & Web Services are now using the updated SGID10.Transportation.Roads feature class.</p>
<p>The following highlights what has been updated:</p>
<p><span style="text-decoration: underline;">County Updates:</span></p>
<ul>
<li><strong>Davis:</strong> Received centerline update 3/9/2015: added new roads since update on 3/3/2015; road name and address range changes since last comprehensive update on 7/1/2014; geocoding improvements</li>
<li><strong>Salt Lake:</strong> Received VECC's centerline update 3/30/2015: added new roads since last update on 2/25/2015; geocoding improvements</li>
<li><strong>Sanpete:</strong> addressing improvements based on Master Address List (MAL) qa/qc; geocoding improvements</li>
<li><strong>Summit:</strong> Received centerline update 2/17/2015: road name and address range changes since last update on 11/8/2013; geocoding improvements</li>
<li><strong>Uintah:</strong> Received centerline update 3/10/2015: added new roads, road name and address range changes since last update in April 2014; geocoding improvements</li>
<li><strong>Utah:</strong> Received centerline update 4/1/2015: added new roads since last update on 2/19/2015; geocoding improvements</li>
<li><strong>Washington:</strong> Received centerline update 3/24/2015: added new roads since last update on 2/25/2015; geocoding improvements</li>
<li><strong>Weber:</strong> no changes were made during the month of March</li>
</ul>
<p><span style="text-decoration: underline;">Blue Stakes of Utah Feedback:</span></p>
<ul>
<li><strong>Davis:</strong> geocoding improvements</li>
<li><strong>Salt Lake:</strong> geocoding improvements</li>
<li><strong>Uintah:</strong> geocoding improvements</li>
<li><strong>Utah:</strong> geocoding improvements</li>
</ul>
<p><span style="text-decoration: underline;">UDOT Route System:</span></p>
<ul>
<li>The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated</li>
<li>The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated</li>
