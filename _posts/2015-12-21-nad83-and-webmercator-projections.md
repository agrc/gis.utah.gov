---
author:
  display_name: JP
  email: agrc@utah.gov
tags:
  - coordinates
  - datums
  - google
  - nad83
  - projections
  - web applications
date: 2015-12-21 12:11:45 -0700
title: The Earth is Not Round! Utah, NAD83 and WebMercator Projections
categories:
  - Featured
---
GIS users working on statewide projects in Utah need to know the specifics of three primary coordinate systems: Geographic (latitude/longitude), UTM NAD83, and WebMercator.

<a href="{% link images/projections.png %}"><img src="{% link images/projections-300x288.png %}" alt="" title="projections" style="padding:1px;border:thin solid black;" class="inline-text-left" /></a>

**Geographic** coordinates use latitude and longitude values to define positions on the 3D surface of the earth, which is of course, best modeled as an ellipsoid, not a sphere. The ellipsoid and its accompanying anchor point that ties it in to the real world, are known collectively as the WGS84 datum. The WGS84 datum is what the constellations of GPS satellites use natively.

**UTM NAD83** is a projected coordinate system that represents physical locations abstracted to a flat, cartesian coordinate system. The UTM NAD83 projection uses the GRS80 ellipsoid and a center-of-the-earth anchor point as its datum, both of which are slightly different than the WGS datum. The advantage of the NAD83 datum is more accuracy for modeling and analyzing locational data in North America. As almost all of Utah fits conveniently within one UTM NAD83 zone (12 North), it’s the best projection system for measuring distance and area when working with statewide GIS data.

**Web Mercator** is the projected coordinate system of Utah's latest statewide high-res imagery, licensed from Google.  It's also the native display coordinate system for Google Earth, Bing maps, ArcGIS Online, and AGRC's new cloud-hosted web mercator base maps. Web mercator is a recent addition to projected coordinate systems, introduced specifically to support worldwide map applications on the web. In short, it uses the same WGS84 datum as the GPS system. It attempts to preserve the shape of features in the areas where people are most interested, while making the behind the scenes coordinate conversion math run faster. The latter is important for thin clients like browsers and mobile apps.

So here are a few good rules of thumb that are worth reviewing:

- Latitude and Longitude are _useless_ for measuring distance and area because the unit of length, degrees, is not held constant for longitude, except along parallels -- individual perfectly east-west lines.
- UTM NAD83 is the best coordinate system for collecting and analyzing GIS data statewide, especially any business need that uses length, area, or geoprocessing. It is also nice because it does a great job of preserving the shape of real world objects modeled in your GIS. _NAD83 became the statewide datum standard beginning in 1997_. And, just in case your wondering there's not appreciable penalty for keeping our little, western-most slice of Utah in zone 12 coordinates.
- Web Mercator is relevant for 2 reasons and both reasons are related to basic, map display functions. First, it is great for maps of large areas, where more than the state of Utah may be needed. Second, it has become, and will likely remain for some time, the de facto coordinate system standard for web mapping applications, because, as mentioned above, it works well for maps depicting the portions of the globe we care about most, and because it performs coordinate conversion faster.
- Web Mercator's significant weakness is that measurements of distance and area in its native coordinates are _completely unusable_. Where accurate distance and area calculations are needed, web-mercator GIS data must be temporarily reprojected to a more suitable coordinate system (UTM NAD83). [AGRC has begun building web applications in Web Mercator]({% link _posts/2015-12-21-using-agrcs-new-web-mercator-services-in-your-web-maps.md %}) and uses web service calls that do the necessary temporary reprojection to get accurate lengths and areas for newly created or edited geographic features.
- Thick clients, like ArcMap can perform very quick loss-less conversion between coordinate systems, needed to display map layers together. Having all of your GIS in the same coordinate system matters little for display purposes, but may be important for moderate to complex geoprocessing. In addition to having less computational power, thin clients (browser and mobile apps) usually lack the algorithms necessary to make multiple on-the-fly coordinate conversions.
- **Geographic Transformations**. There is a slight difference between the WGS84 and NAD83 datums that requires an additional setting if users want to maximize the precision of their GIS work. Of course, you'll want the projection/coordinate system correctly defined for all your data. But, a second operation, called a Geographic Transformation, must be specified.

For example, if you're digitizing a man hole in UTM NAD83 or State Plane NAD83 coordinates, from Web Mercator-based aerial photography, you’ll remove an unwanted discrepancy of about 1 meter, by employing the best geographic transformation. In ArcMap, the transformation set by the software (which is determined by the intersection of the envelope of the transformation with the envelope of your data - ranked by accuracy) should be set in your dataframe and geoprocessing settings.

Additional background and information: [About Geographic Transformations and How to Choose the Right One (Esri)](https://blogs.esri.com/esri/arcgis/2009/05/06/about-geographic-transformations-and-how-to-choose-the-right-one/).
