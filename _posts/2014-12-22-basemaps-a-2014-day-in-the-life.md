---
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
tags:
  - basemap
date: 2014-12-22 10:45:14 -0700
title: 'Basemaps: A 2014 Day in the Life'
categories:
  - Developer
---
<h3>A day in the life of Utah’s ArcGIS Server Basemaps 2014</h3>
<p>On <a href="{% post_url 2014-01-14-a-day-in-the-life-of-utahs-arcgis-server-base-maps %}">Wednesday, November 6, 2013</a> we wrote about and displayed some charts displaying usage statistics for our basemaps. A year has passed and we have updated our graphs and included a few new ones. This year our usage stats were pulled from the first Wednesday in November which happened to be the 5th.</p>
<p><img src="{{ "/downloads/2014.basemaps.png" | prepend: site.baseurl }}" alt="web application basemap usage"><br><br />
Here you can see that the <i>Terrain</i> basemap is the most popular among web applications. Web developers seem to enjoy this basemap for it&#39;s reference data, muted tones, and overall good looks.  Another interesting take away here is the <strong>55</strong>% increase in the number of requested tiles from the previous year.</p>
<p><img src="{{ "/downloads/2014.basemaps.arcmap.png" | prepend: site.baseurl }}" alt="arc map basemap usage"><br><br />
When users are using desktop software things change. This may be because users tend to have their own reference data or can easily add it. The <i>Hybrid</i> map overtakes <i>Terrain</i> and the <i>Imagery</i> moves into second place as a clean slate to start overlaying reference data. Imagery is very popular amongst the desktop users and must be very important and useful for getting their job done effectively.</p>
<p><img src="{{ "/downloads/2014.request.user_.png" | prepend: site.baseurl }}" alt="tile requests per user"><br><br />
Over the course of a typical day, some end users, be they GIS staff or web applications, use the base map services in large volumes. Others end users only make a few requests and then move on. These users still make up the majority; Find what they were looking for and leave. The biggest difference between this year and last is the <strong>70</strong>% increase in unique users.</p>
<p><img src="{{ "/downloads/2014.refer_.png" | prepend: site.baseurl }}" alt="top referrers"><br><br />
This graph shows where most of the traffic for basemap tiles was coming from on this particular day. It was an election month so the elections site took first place. Our <i>mapserv</i> hosted applications came in second. The breakup of other state agency usage is quite interesting with ArcGIS Online becoming a presence. </p>
<p>You can find <a href="{{ "/data/base-map-and-imagery/" | prepend: site.baseurl }}">more information about our basemaps</a> on our <a href="{{ "/" | prepend: site.baseurl }}">website</a>. If you want to <a href="http://steveoh.github.io/Charts">interact with these charts</a>, the are hosted on <a href="http://steveoh.github.io/Charts">GitHub</a></p>
