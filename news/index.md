---
layout: page
title: Recent Posts
---

#### AGRC's blog keeps partners informed on important GIS announcements in Utah. Blogposts cover important data updates, GIS tools, geospatial tips and tricks, as well as coordination opportunities and events. Blogposts are compiled into a monthly [newsletter]({{ "/agrc-newsletter" | prepend: site.baseurl }}). Subscribe to the newsletter at the bottom of any webpage on gis.utah.gov.

<div class="grid">
{% for post in site.posts %}
    <div class="grid__col grid__col--1-of-3">
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h5 class="blog-list">
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h5>
        <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
        <hr class="hr-separate"/>
    </div>
{% endfor %}
</div>
