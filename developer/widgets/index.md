---
layout: page
status: publish
published: true
title: Geospatial Widgets
author:
 display_name: Steve Gourley
 login: Map Utah
 email: sgourley@utah.gov
 url: ''
author_login: Map Utah
author_email: sgourley@utah.gov
wordpress_id: 219
wordpress_url: http://gis.utah.gov/?page_id=219
date: '2011-06-30 18:22:37 -0500'
date_gmt: '2011-06-30 18:22:37 -0500'
categories: [Developer]
tags:
- widgets
- javascript
- add-on
---
#### Save yourself some time and use our widgets!

![widgets]({{ "/images/icon_widget.png" | prepend: site.baseurl }}) AGRC is actively developing and maintaining a core set of geospatial javascript widgets and ArcMap Add-ins. These widgets allow for developers and non-developers to incorporate geospatial functionality into their website, blog, or GIS environment. All of our widgets and add-ins are powered by our [geospatial web APIs]({{ "/developer/web-services" | prepend: site.baseurl }}) that you can use to solve spatial problems, derive spatial context, or create your own add-ins and widgets.

### JavaScript

A great place to get started with web mapping javascript and our widgets is the [AGRC javascript boilerplate](https://github.com/agrc/AGRCJavaScriptProjectBoilerPlate) project. This is the [atlas.utah.gov](http://atlas.utah.gov) website source code. It uses all of our [widgets](https://github.com/agrc/agrc.widgets) and is a great example of how to structure your next project. All of our public websites are using the agrc widget module to some degree so you may already be familiar with them!

A few key pieces of functionality that our widgets offer are:

 - Geocoding addresses. This widget provides the UI/UX and code to allow a user to input an address and provides the developer with the coordinates for the address.
 - Finding places - With these widgets, a developer can quickly setup type ahead functionality for any layer in the SGID. The geometry for the selected element is returned. Popular uses for this are, Township, Range and Section queries, and other political boundary queries.
 - AGRC Basemaps - You can also quickly add common mapping elements, like a map and base map selector, to your website or blog.

Our widget library and mostly all of the work that we do is open source and accepting contributions. This easily allows for other developers to make improvements to the code. Browse our [agency github](http://github.com/agrc) page and fork the code!

### ArcMap Add-ins

We have a few publicly distributed ArcMap add-ins. Add-ins allow users to bring the convenience of our web widgets in to the desktop GIS environment. You can [batch geocode](https://github.com/agrc/geocoding-addin) addresses against our [geospatial web APIs]({{ "/developer/web-services" | prepend: site.baseurl }}) to get the best matches possible or zoom to township, range, section polygons to name a few.
