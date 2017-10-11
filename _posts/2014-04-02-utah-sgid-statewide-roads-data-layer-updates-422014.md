---
status: publish
layout: post
author:
  display_name: Data Queen
  email: agrc@utah.gov
tags:
  - address
  - geocoding
  - location
  - roads
  - transportation
published: true
date: 2014-04-02 15:54:01 -0600
title: Utah SGID Statewide Roads Data Layer Updates 4/2/2014
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
<li><strong>Davis:</strong> Received centerline update 2/25/2014 (in progress): added new roads, road names, and address ranges; geocoding improvements</li>
<li><strong>Millard:</strong> Received centerline update 3/19/2014: added new roads, road names, and address ranges; geocoding improvements
<li><strong>Piute:</strong> Received centerline update 3/10/2014: added new roads, road names, and address ranges; geocoding improvements</li>
<li><strong>Salt Lake:</strong> Received VECC's centerline update 3/26/2014: added new roads since the last update on 2/20/2014; geocoding improvements</li>
<li><strong>Washington:</strong> Received centerline update 3/27/2014: added new roads and incorporated changes since the last update on 2/28/2014; geocoding improvements</li>
<li><strong>Weber:</strong> Received centerline update 3/28/2014: added new roads and incorporated changes since the last update on 2/26/2014; geocoding improvements</li>
</ul>
<p><span style="text-decoration: underline;">UDOT Route System:</span></p>
<ul>
<li>The DOT_F_MP (From Milepost) and DOT_T_MP (To Milepost) fields that store the milepost attributes of the UDOT state and federal routes in SGID10.Transportation.Roads were updated</li>
<li>The DOT_RTID field that stores UDOT's unique numeric route identifiers was updated</li>
</ul>
</ul>
</ul>
