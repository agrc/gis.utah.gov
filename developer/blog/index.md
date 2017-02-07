---
layout: page
status: publish
published: true
title: Dev Team Blog
author:
  display_name: Steve Gourley
  login: Steve Gourley
  email: sgourley@utah.gov
  url: ''
author_login: Steve Gourley
author_email: sgourley@utah.gov
wordpress_id: 206
wordpress_url: http://gis.utah.gov/?page_id=206
date: '2011-06-30 16:14:07 -0500'
date_gmt: '2011-06-30 16:14:07 -0500'
categories: [Developer]
tags:
- blog
---
<div class="grid">
{% for post in site.categories.Developer %}
  <div class="grid__col grid__col--1-of-3 grid__col--m-1-of-2">
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <h5 class="blog-list">
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h5>
    <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
    <hr class="hr-separate"/>
  </div>
 {% endfor %}
</div>
 
