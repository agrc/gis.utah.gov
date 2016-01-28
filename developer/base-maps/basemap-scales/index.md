---
layout: page
status: publish
published: true
title: Online Base Map Scale Information
author:
  display_name: Steve Gourley
  login: Steve Gourley
  email: sgourley@utah.gov
  url: ''
author_login: Steve Gourley
author_email: sgourley@utah.gov
wordpress_id: 699
wordpress_url: http://gis.utah.gov/?page_id=699
date: '2011-08-04 23:56:06 -0600'
date_gmt: '2011-08-04 23:56:06 -0600'
categories: []
tags:
- basemap
- cache
---
### Base Map Cache Scales

![scale bar]({{ "/images/scales.png" | prepend: site.baseurl }}){: style="float:left"} Our strategy attempts to follow the [tile-caching scales utilized by Google and Microsoft](http://resources.arcgis.com/en/help/main/10.2/index.html#//0154000002r6000000") online maps. In addition we have created breakpoints between these tile scales for use with dynamic maps. Think of the breakpoints as the list of potential scale dependencies that can be used for the upper and lower scale criteria.


| AGRC Level | Google Tile Scale | Break Point |
|:-----------|:-----------------:|------------:|
| 14         | 1128.50           |             |
|            |                   | 1500        |
| 13         | 2256.99           |             |
|            |                   | 3000        |
| 12         | 4513.99           |             |
|            |                   | 6250        |
| 11         | 9027.98           |             |
|            |                   | 12500       |
| 10         | 18055.96          |             |
|            |                   | 25000       |
| 09         | 36111.91          |             |
|            |                   | 50000       |
| 08         | 72223.82          |             |
|            |                   | 100000      |
| 07         | 144447.64         |             |
|            |                   | 200000      |
| 06         | 288895.29         |             |
|            |                   | 400000      |
| 05         | 577790.58         |             |
|            |                   | 800000      |
| 04         | 1155581.15        |             |
|            |                   | 1600000     |
| 03         | 2311162.31        |             |
|            |                   | 3500000     |
| 02         | 4622324.61        |             |
|            |                   | 7000000     |
| 01         | 9244649.23        |             |
|            |                   | 14000000    |
| 00         | 18489298.45       |             |
|===
| AGRC Level | Google Tile Scale | Break Point |
