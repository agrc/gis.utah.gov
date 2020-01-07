---
title: Developers
layout: page_nocrumb
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
tags:
  - api
  - basemap
  - cache
  - web services
  - widgets
categories: []
date: 2011-04-05 22:01:27 -0500
---
<div class="grid">
  <div class="grid__col grid__col--1-of-2">
    <h4>Developer Resources</h4>
    <a href="{% link developer/applications/index.html %}"><i class="fas fa-2x fa-fw fa-laptop"></i> Applications</a>
    <p>Read about applications created by AGRC developers.</p>

    <a href="{% link data/base-map-and-imagery/index.md %}" title="Online Base Maps"><i class="fas fa-2x fa-fw fa-map"></i> Online Base Maps</a>
    <p>AGRC's online map services are available for use at no cost, fast, accurate, and beautiful.</p>

    <a href="{% link developer/widgets/index.md %}" title="Geospatial Widgets"><i class="fas fa-2x fa-fw fa-terminal"></i> Geospatial Widgets</a>
    <p>AGRC’s javascript widgets allow developers to quickly add spatial functionality to their website for no cost.</p>

    <a href="{% link developer/web-services/index.md %}" title="Geospatial Web Services"><i class="fas fa-2x fa-fw fa-magic"></i> Geospatial Web Services</a>
    <p>AGRC’s Web API allow developers to access spatial data from their applications and websites for no cost.</p>

    <a href="{% link developer/blog/index.md %}"><i class="fas fa-2x fa-fw fa-comments"></i> Developer Team Blog</a>
    <p>Read about work done by AGRC developers.</p>
  </div>
  <div class="grid__col grid__col--1-of-2">
    <h4>From the Developer Blog</h4>
    {% for post in site.categories.Developer limit:6 %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span><br/>
      <a href="{% link  {{ post.path }} %}">{{ post.title }}</a>
      <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
    </li>
    {% endfor %}
  </div>
</div>
