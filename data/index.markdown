---
layout: page_notitle
status: publish
published: true
title: Data
author:
  display_name: Zach Beck
  login: Zach Beck
  email: zbeck@utah.gov
  url: ''
author_login: Zach Beck
author_email: zbeck@utah.gov
wordpress_id: 4884
wordpress_url: http://demoone.pastedata.com/?page_id=78
date: '2012-01-20 07:46:07 -0500'
date_gmt: '2012-01-20 07:46:07 -0500'
categories: []
tags: []
---
<h3>SGID Datasets</h3>

<p>Our datsets are organized loosely by <a href="http://gcmd.nasa.gov/User/difguide/iso_topics.html">topic categories</a>, obtain detailed information about Utah GIS data layers, and to download files or access services.</p>

<p>Utah's State Geographic Information Database (SGID) is the central clearing house for all digital mapping (GIS) information (<a href="http://le.utah.gov/~code/TITLE63F/htm/63F01_050700.htm">Utah Code 63F-1-507</a>). Includes both data and services for use by state agencies, partnering organizations, and others.</p>

<a href="{{ " /basic-metadata-instructions " | prepend: site.baseurl }}">FGDC Metadata</a>

<div class="footer-col-wrapper">
  <div class="footer-col footer-col-3">

    <h4>Popular Datasets</h4>
    <h4><a href="/data/aerial-photography/"><img class="alignleft size-full wp-image-5253" title="Aerial Imagery" src="{{ "/images/icon_airplane.png" | prepend: site.baseurl }}" width="26" height="30" />Aerial Photography</a></h4>

    <p>Highres Color and Black and White aerial photography.</p>

    <h4><a href="/data/boundaries/"><img class="alignleft size-full wp-image-5253" title="Boundary Data" src="{{"/images/icon_widget.png" | prepend: site.baseurl}}" width="26" height="30" />Boundary GIS Data</a></h4>

    <p>Public land, city, county, parcel, political dists, etc.</p>

    <h4><a href="/data/elevation-terrain-data/"><img class="alignleft size-full wp-image-5253" title="Elevation/Terrain" src="{{"/images/icon_elevation.png" | prepend: site.baseurl }}" width="26" height="30" /> Elevation and Terrrain Data</a></h4>

    <p>DEMs, LIDAR, Contours, &amp; Topographic Maps</p>

    <h4><img class="alignleft size-full wp-image-5253" title="PLSS" src="http://gis.utah.gov/wp-content/uploads/data_mark.png" width="26" height="30" /><a href="/data/sgid-cadastre/plss/">Public Land Survey System (PLSS) Data</a></h4>

    <p>Townships, sections, section divs, &amp; control points.</p>

  </div>
  <div class="footer-col footer-col-3">

    <h4><a href="/data/sgid-transportation/roads-system/"><img class="alignleft size-full wp-image-5253" title="Roads &amp; Highways" src="{{"/images/icon_roads.png" | prepend: site.baseurl }}" width="26" height="30" /> Roads &amp; Highway System Data</a></h4>

    <p>Statewide road centerlines with address ranges, etc.</p>

    <h4><a href="/data/usgs-scanned-topographic-maps-drgs/"><img class="alignleft size-full wp-image-5253" title="USGS Topos" src="{{"/images/radar.png" | prepend: site.baseurl }}" width="26" height="26" />USGS Topographic Maps</a></h4>

    <p>USGS topographic (contour) map scans, various scales</p>

    <h4><a href="/data/water-data-services/"><img class="alignleft size-full wp-image-5253" title="Water" src="{{"/images/icon_mapmarker.png" | prepend: site.baseurl }}" width="26" height="30" />Water Related Data</a></h4>

    <p>Lakes, streams, springs, dams, water use.</p>
  </div>
</div>
  <div class="footer-col-wrapper">
  <div class="footer-col footer-col-3">
    <h3>SGID Data Services</h3>

    <h4><a title="Base Map Services" href="{{ "/data/sgid-base-map-services-arcmap" | prepend: site.baseurl }}"><img class="alignleft size-full wp-image-61" style="margin-right: 5px;" title="Base Map Services" src="{{ "/images/icon_map.png" | prepend: site.baseurl }}" width="26" height="26" />Online Base Maps</a></h4>

    <p>Fast and free online map services from AGRC featuring local data.</p>

    <h4><a title="Using the Utah SGID Image Server" href="{{ "/data/sgid-imagery-services" | prepend: site.baseurl }}"><img class="alignleft size-full wp-image-5247" title="Using Image Server" src="{{ /"images/boundary.png" | prepend: site.baseurl }}" width="26" height="30" /> SGID Image Services</a></h4>

    <p>Utah aerial photography without the need to download data.</p>

    <h4><a title="How to Connect to the SGID via ArcSDE" href="{{ "/data/how-to-connect-to-the-sgid-via-sde" | prepend: site.baseurl}}"><img class="alignleft size-full wp-image-5253" title="Connect to ArcSDE" src="{{ "images/data.png" | prepend: site.baseurl }}" width="26" height="26" />SGID ArcSDE Database Server</a></h4>

    <p>Direct connect to AGRC's ArcSDE database, the most current data.</p>

    <h4><a title="Open Raster Discovery App" href="http://raster.utah.gov"><img class="alignleft  wp-image-10111" title="Utah Raster Discovery Application" src="{{ "/images/icon_geowebservices.png" | prepend: site.baseurl }}" width="26" height="30" />SGID Raster Discovery Application</a></h4>

    <p>Download aerial photography, LiDAR, DEMs, contour lines and USGS topographic maps via the Utah Raster Discovery App.</p>

    <h4><a title="Download via FTP" href="ftp://ftp.agrc.utah.gov/"><img class="alignleft  wp-image-10111" title="Download Data Via FTP" src="{{ "/images/icon_ftp.png" | prepend: site.baseurl }}" width="26" height="30" />Download SGID Data Via FTP</a></h4>

    <p>Download data directly through AGRC's FTP site.</p>

  </div>
  <div class="footer-col footer-col-3">
    <h4><img class="icon" src="{{ "/images/icon_blog.png" | prepend: site.baseurl }}" width="26" height="30" /><a href="{{ "blog" | prepend: site.baseurl }}">Data Team Blog</a></h4>

    <ul>
      {% for post in site.categories.data limit:3 %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <br/>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
      </li>
      {% endfor %}
    </ul>
  </div>
</div>
