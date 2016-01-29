---
layout: page_notitle
status: publish
published: true
title: Developers
author:
  display_name: Steve Gourley
  login: SteveGourley
  email: sgourley@utah.gov
  url: ''
author_login: SteveGourley
author_email: sgourley@utah.gov
wordpress_id: 19
wordpress_url: http://gis.utah.gov/?page_id=19
date: '2011-04-05 22:01:27 -0500'
date_gmt: '2011-04-05 22:01:27 -0500'
categories: []
tags:
- basemap
- widgets
- cache
- web services
- api
---
<div class="footer-col-wrapper">
<div class="footer-col footer-col-3">

<h4>Developer Resources</h4>

<img class="icon" src="{{ "/images/icon_map.png" | prepend: site.baseurl }}" width="26" height="26" /><a href="{{ "/developer/base-maps" | prepend: site.baseurl }}" title="Online Base Maps">Online Base Maps</a>

<p>AGRC's online map services are available for use at no cost, fast, accurate, and beautiful.</p>

<img class="icon" src="{{ "/images/icon_widget.png" | prepend: site.baseurl }}" width="26" height="30" /><a href="{{ "/developer/widgets" | prepend: site.baseurl }}" title="Geospatial Widgets">Geospatial Widgets</a>

<p>AGRC’s javascript widgets allow developers to quickly add spatial functionality to their website for no cost.</p>

<img class="icon" src="{{ "/images/icon_geowebservices.png" | prepend: site.baseurl }}" width="26" height="30" /><a href="{{ "/developer/web-services" | prepend: site.baseurl}}" title="Geospatial Web Services">Geospatial Web Services</a>

<p>AGRC’s Web API allow developers to access spatial data from their applications and websites for no cost.</p>

<img class="icon" src="{{ "/images/icon_blog.png" | prepend: site.baseurl }}" width="26" height="30" /><a href="{{ "/developer/blog" | prepend: site.baseurl }}">Developer Team Blog</a>

<p>Read about work done by developers.</p>

</div>

<div class="footer-col  footer-col-3">

  <h4>From the Developer Blog</h4>

  {% for post in site.categories.developer limit:6 %}
  <li>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span><br/>
    <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
  </li>
  {% endfor %}

</div>
</div>
