---
author:
  display_name: Bert Granberg
  email: agrc@utah.gov
tags:
  - aerial photography
  - data
  - raster
  - terrain
  - topo
  - topographic
  - web services
date: 2013-12-04 17:07:30 -0700
title: A day in the life of the Utah's SGID ImageServer
categories:
  - Featured
  - SGID Blog
---
<p>As part of responsibilities for maintaining the Utah's State Geographic Information Database (SGID),  AGRC has operated web services that deliver aerial photography and other geographic imagery to applications and desktop GIS users since 2006. ImageServer, an Esri software product, allows very fast mosaicing and resampling of large imagery source data files for delivery as a small, single file  for a custom map extent, to internet-connected clients.</p>
<p>Available aerial photography layers include the most current statewide NAIP imagery (2011, 1 meter pixel resolution) and Wasatch Front urban area high resolution imagery (2012, 5 inch pixels). Other imagery layers include scanned USGS topographic maps, terrain hillshades, and older vintage or local (West Jordan, Uintah County) aerial photography series.</p>
<p>ImageServer produces daily log files that can be processed to detail the number of unique users, session counts for each imagery layer, and the total number of image requests. Snapshots for these counts are shown in the graphs below for an arbitrarily picked workday last month (Wednesday, November 6th).</p>
<p><strong><em>Note: </em></strong>these figures do not include usage of AGRC's pre-rendered aerial photography and 'hybrid' (aerials with superimposed streets and other features) base map services. The base map services, available via REST and WMS web service requests, are also quite popular and <a href="{% link _posts/2014-01-14-a-day-in-the-life-of-utahs-arcgis-server-base-maps.md %}">are the subject of a subsequent blog post</a>.</p>
<p><strong>Number of distinct users for each day</strong> (<em>click to enlarge</em>):<br />
<a href="{% link images/UsersPerDay.png %}"><img src="{% link images/uniqueusersperday.png %}" alt="" title="UsersPerDay" width="600" height="216" class="aligncenter" /></a></p>
<p><strong>Number of distinct users within each hour:</strong><br />
<a href="{% link images/Users11062013.png %}"><img src="{% link images/Users11062013.png %}" alt="" title="Users11062013" width="585" height="447" class="aligncenter size-full wp-image-14200" /></a></p>
<p><strong>Number of Image Server sessions per hour, by image product category:</strong><br />
<a href="{% link images/sessions11062013.png %}"><img src="{% link images/sessions11062013.png %}" alt="" title="sessions11062013" width="695" height="471" class="aligncenter size-full wp-image-14201" /></a></p>
<p><strong>Number of ImageServer requests (views) per hour:</strong><br />
<a href="{% link images/Requests11062013.png %}"><img src="{% link images/Requests11062013.png %}" alt="" title="Requests11062013" width="567" height="459" class="aligncenter size-full wp-image-14202" /></a></p>
