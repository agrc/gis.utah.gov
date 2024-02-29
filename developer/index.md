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
    <a href="/solutions/for-government/application-portfolio-highlights"> Applications</a>
    <p>Read about applications created by UGRC developers.</p>

    <a href="/products/base-maps" title="Online Base Maps">Online Base Maps</a>
    <p>UGRC's online map services are available for use at no cost, fast, accurate, and beautiful.</p>

    <a href="/products/api" title="Geospatial Widgets">Geospatial Widgets</a>
    <p>UGRC’s javascript widgets allow developers to quickly add spatial functionality to their website for no cost.</p>

    <a href="/products/api" title="Geospatial Web Services">Geospatial Web Services</a>
    <p>UGRC’s Web API allow developers to access spatial data from their applications and websites for no cost.</p>

    <a href="/blog">Developer Team Blog</a>
    <p>Read about work done by UGRC developers.</p>
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
