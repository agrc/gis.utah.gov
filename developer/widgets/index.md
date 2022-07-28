---
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
date: 2011-06-30 18:22:37 -0500
---
#### Save yourself some time and use our widgets!

UGRC is actively developing and maintaining a core set of geospatial javascript widgets, and ArcGIS Toolbox and Add-ins. These widgets allow for developers and non-developers to incorporate geospatial functionality into their website, blog, or GIS environment. All of our widgets and add-ins are powered by our [geospatial web APIs]({% link developer/web-services/index.md %}) that you can use to solve spatial problems, derive spatial context, or create your own add-ins, toolbox, and widgets.

### JavaScript

A great place to get started with web mapping javascript and our widgets is the [atlas](https://github.com/agrc/atlas) project. This is the [atlas.utah.gov](https://atlas.utah.gov) website source code and is a great example of best practices and how to structure your next project. We maintain all of our widgets in a monorepo called [kitchen-sink](https://github.com/agrc/kitchen-sink) and each of them are [published to NPM](https://www.npmjs.com/search?q=keywords%3Aagrc%2Cugrc). All of our public websites use the agrc widgets in some capacity so you may already be familiar with them!

A few key pieces of functionality that our widgets offer are:

- [**Geocoding addresses**](https://www.npmjs.com/package/@ugrc/dart-board) - This widget provides the UI/UX and code to allow a user to input an address and provides the developer with the coordinates for the address.
- [**Finding places**](https://www.npmjs.com/package/@ugrc/sherlock) - With this widgets, a developer can quickly setup type ahead functionality for any layer in the SGID. The geometry for the selected element is returned. Popular uses for this are, Township, Range and Section queries, and other political boundary queries.
- **UGRC Base maps** - You can also quickly add common mapping elements, like a map and [layer selector](https://www.npmjs.com/package/@ugrc/layer-selector), to your website or blog.

Our widget library, and most all of the work that we do, is open source and accepting contributions. This easily allows for other developers to make improvements to the code. Browse our [GitHub organization](https://github.com/agrc) and fork the code!

<hr class="divider"/>

### ArcGIS Tools

We have a few publicly distributed ArcGIS Tools. Tools, in the form of a toolbox or add-in, allow users to bring the convenience of our API and web widgets in to the desktop GIS environment. You can [batch geocode](https://github.com/agrc/masquerade#batch-geocoding) addresses against our [geospatial web APIs]({% link developer/web-services/index.md %}) to get the best matches possible or [zoom to township, range, section polygons](https://github.com/agrc/trs-zoom-addin) to name a few.
