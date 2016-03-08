---
layout: page
title: Recent Posts
---

#### View our past [Newsletters]({{ "/agrc-newsletter" | prepend: site.baseurl }})

<div class="grid">
{% for post in site.posts %}
  <div class="grid__col grid__col--1-of-3">
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
  <h5>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </h5>
  <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
  <hr class="hr-separate"/>
  </div>
 {% endfor %}
</div>
