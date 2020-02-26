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
### A day in the life of Utah’s ArcGIS Server Basemaps 2014


On [Wednesday, November 6, 2013]({% link _posts/2014-01-14-a-day-in-the-life-of-utahs-arcgis-server-base-maps.md %}) we wrote about and displayed some charts displaying usage statistics for our basemaps. A year has passed and we have updated our graphs and included a few new ones. This year our usage stats were pulled from the first Wednesday in November which happened to be the 5th.

![web application basemap usage]({% link images/2014.basemaps.png %})

Here you can see that the _Terrain_ basemap is the most popular among web applications. Web developers seem to enjoy this basemap for it&#39;s reference data, muted tones, and overall good looks.  Another interesting take away here is the **55**% increase in the number of requested tiles from the previous year.

![arc map basemap usage]({% link images/2014.basemaps.arcmap.png %})

When users are using desktop software things change. This may be because users tend to have their own reference data or can easily add it. The _Hybrid_ map overtakes _Terrain_ and the _Imagery_ moves into second place as a clean slate to start overlaying reference data. Imagery is very popular amongst the desktop users and must be very important and useful for getting their job done effectively.

![tile requests per user]({% link images/2014.request.user_.png %})

Over the course of a typical day, some end users, be they GIS staff or web applications, use the base map services in large volumes. Others end users only make a few requests and then move on. These users still make up the majority; Find what they were looking for and leave. The biggest difference between this year and last is the **70**% increase in unique users.

![top referrers]({% link images/2014.refer_.png %})

This graph shows where most of the traffic for basemap tiles was coming from on this particular day. It was an election month so the elections site took first place. Our _mapserv_ hosted applications came in second. The breakup of other state agency usage is quite interesting with ArcGIS Online becoming a presence.

You can find [more information about our basemaps]({% link data/base-map-and-imagery/index.md %}) on our [website]({% link index.html %}). If you want to [interact with these charts](https://steveoh.github.io/Charts), the are hosted on [GitHub](https://steveoh.github.io/Charts).
