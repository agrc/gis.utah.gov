---
layout: post
status: publish
published: true
title: Utah SGID Statewide Roads Data Layer Updates 6/4/2014
author:
  display_name: kgreen
  login: kgreen
  email: kkgreen@utah.gov
  url: ''
author_login: kgreen
author_email: kkgreen@utah.gov
wordpress_id: 15110
wordpress_url: http://gis.utah.gov/?p=15110
date: '2014-06-05 10:23:10 -0600'
date_gmt: '2014-06-05 16:23:10 -0600'
categories:
- Data
- Featured
- SGID Blog
tags:
- SDE
- sgid
- Data
- utah
- gis
- map
- mapping
- Transportation
- Roads
- Streets
- location
- address
- dataset
- download
- agrc
- shapefile
- geodatabase
- geographic
- database
- state
- statewide
- centerlines
- vector
- arcgis
- geocode
- road
---
<p>Updates were made recently to the SGID10.Transportation.Roads feature class that resides on the <a href="{{ "/data/how-to-connect-to-the-sgid-via-sde/" | prepend: site.baseurl }}">Utah SGID ArcSDE database server</a>.</p>
<p>The updated Roads data is also available as shapefiles and file geodatabase files for download on the <a href="ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/TRANSPORTATION/PackagedData/_Statewide/UtahRoadAndHighwaySystem/">SGID FTP site</a>.</p>
<p>Geocoding services and ArcGIS Server Applications & Web Services are now using the updated SGID10.Transportation.Roads feature class.</p>
<p>The following highlights what has been updated:</p>
<p><span style="text-decoration: underline;">County Updates:</span></p>
<ul>
    <li><strong>Salt Lake:</strong> Received VECC's centerline update 5/28/2014: added new roads since the last update on 4/30/2014; geocoding improvements</li>
    <li><strong>San Juan:</strong> AGRC is providing ongoing GIS data support to San Juan County: added new roads, road names, and address ranges; geocoding improvements</li>
    <li><strong>Sevier</strong> Received centerline update 5/20/2014: added new roads, road names, address ranges; geocoding improvements</li>
    <li><strong>Utah:</strong> Received centerline update 5/28/2014: added new roads since the last update on 4/30/2014; geocoding improvements</li>
    <li><strong>Washington:</strong> Received centerline update 5/29/2014: added new roads since the last update on 4/30/2014; geocoding improvements</li>
    <li><strong>Wayne:</strong> Received centerline update 5/20/2014: added new roads, road names, and address ranges; geocoding improvements</li>
    <li><strong>Weber:</strong> Received centerline update 5/1/2014: added new roads, road names, and address ranges; geocoding improvements</li>
</ul>

<p><span style="text-decoration: underline;">Blue Stakes of Utah Feedback:</span></p>
<ul>
    <li><strong>Davis:</strong> geocoding improvements</li>
    <li><strong>Salt Lake:</strong> geocoding improvements</li>
    <li><strong>Tooele:</strong> geocoding improvements</li>
    <li><strong>Utah:</strong> geocoding improvements</li>
    <li><strong>Uintah:</strong> geocoding improvements</li>
    <li><strong>Wasatch:</strong> geocoding improvements</li>
    <li><strong>Washington:</strong> geocoding improvements</li>
    <li><strong>Weber:</strong> geocoding improvements</li>
</ul>

<p><span style="text-decoration: underline;">UDOT Route System:</span></p>
<ul>
    <li>The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated</li>
    <li>The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated</li>
</ul>
