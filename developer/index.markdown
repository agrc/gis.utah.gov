---
layout: page
status: publish
published: true
title: Developers
author:
  display_name: UI_user
  login: UI_user
  email: rory@utahinteractive.org
  url: ''
author_login: UI_user
author_email: rory@utahinteractive.org
wordpress_id: 19
wordpress_url: http://gis.utah.gov/?page_id=19
date: '2011-04-05 22:01:27 -0500'
date_gmt: '2011-04-05 22:01:27 -0500'
categories: []
tags:
- basemap
- base map
- widgets
- javascript
- web services
- web api
- developers
---
<h6>From the Developer Blog</h6>

<ul>
{% for post in site.categories.developer limit:6 %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

<h6>Developer Resources</h6>
<h4><img class="alignleft size-full wp-image-61" style="margin-right: 5px;" title="map" src="http://gis.utah.gov/wp-content/uploads/map.png" alt="" width="26" height="26" /><a href="{{  "base-maps" | prepend: site.baseurl }}" title="Online Base Maps">Online Base Maps</a></h4>
<p>AGRC's online map services are available for use at no cost, fast, accurate, and beautiful.</p>
<h4><img class="alignleft size-full wp-image-5185" title="widget" src="http://gis.utah.gov/wp-content/uploads/widget.png" alt="" width="26" height="30" /><a href="{{"widgets" | prepend: site.baseurl}}" title="Geospatial Widgets">Geospatial Widgets</a></h4>
<p>AGRC’s javascript widgets allow developers to quickly add spatial functionality to their website for no cost.</p>
<h4><img class="alignleft size-full wp-image-5187" title="geowebservices" src="http://gis.utah.gov/wp-content/uploads/geowebservices.png" alt="" width="26" height="30" /><a href="{{"web-services" | prepend: site.baseurl}}" title="Geospatial Web Services">Geospatial Web Services</a></h4>
<p>AGRC’s Web API allow developers to access spatial data from their applications and websites for no cost.</p>
<h4><img class="alignleft size-full wp-image-5188" title="devblog" src="http://gis.utah.gov/wp-content/uploads/devblog.png" alt="" width="26" height="30" /><a href="{{"blog" | prepend: site.baseurl }}">Developer Team Blog</a></h4>
<p>Read about work done by developers.</p>
