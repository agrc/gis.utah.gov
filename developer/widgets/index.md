---
status: publish
layout: page
title: Geospatial Widgets
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
tags:
  - add-on
  - javascript
  - widgets
categories:
  - Developer
published: true
date: 2011-06-30 18:22:37 -0500
---
#### Save yourself some time and use our widgets!

<i class="fas fa-2x fa-fw fa-terminal"></i> AGRC is actively developing and maintaining a core set of geospatial javascript widgets and ArcMap Add-ins. These widgets allow for developers and non-developers to incorporate geospatial functionality into their website, blog, or GIS environment. All of our widgets and add-ins are powered by our [geospatial web APIs]({{ "/developer/web-services/" | prepend: site.baseurl }}) that you can use to solve spatial problems, derive spatial context, or create your own add-ins and widgets.

### JavaScript

A great place to get started with web mapping javascript and our widgets is the [atlas](https://github.com/agrc/AGRCJavaScriptProjectBoilerPlate) project. This is the [atlas.utah.gov](https://atlas.utah.gov) website source code and is a great example of dojo best practices and how to structure your next project. We have started to split our [widgets](https://github.com/agrc/agrc.widgets) into their own [organization](https://github.com/agrc-widgets) on github so be sure to check both places and opt for the projects in the **agrc-widgets** organization. All of our public websites are using the agrc widgets in some capacity so you may already be familiar with them!

A few key pieces of functionality that our widgets offer are:

 - [**Geocoding addresses**](https://github.com/agrc-widgets/dart-board) - This widget provides the UI/UX and code to allow a user to input an address and provides the developer with the coordinates for the address.
 - [**Finding places**](https://github.com/agrc-widgets/sherlock) - With this widgets, a developer can quickly setup type ahead functionality for any layer in the SGID. The geometry for the selected element is returned. Popular uses for this are, [Township, Range and Section](https://github.com/agrc/agrc.widgets/blob/master/widgets/locate/TRSsearch.js) queries, and other political boundary queries.
 - **AGRC Base maps** - You can also quickly add common mapping elements, like a map and [layer selector](https://github.com/agrc-widgets/layer-selector), to your website or blog.
 - **Notifications** - You can notify your users with event notification by adding the [toaster widget](https://github.com/agrc-widgets/layer-selector) to your website. This enables a developer to popup or "toast" messages to users when things go well or poorly.

Our widget library, and most all of the work that we do, is open source and accepting contributions. This easily allows for other developers to make improvements to the code. Browse our [both](http://github.com/agrc) of our [github organizations](http://github.com/agrc-widgets) and fork the code!

<hr class="divider"/>

### ArcMap Add-ins

We have a few publicly distributed ArcMap add-ins. Add-ins allow users to bring the convenience of our web widgets in to the desktop GIS environment. You can [batch geocode](https://github.com/agrc/geocoding-addin) addresses against our [geospatial web APIs]({{ "/developer/web-services/" | prepend: site.baseurl }}) to get the best matches possible or [zoom to township, range, section polygons](https://github.com/agrc/trs-zoom-addin) to name a few.
