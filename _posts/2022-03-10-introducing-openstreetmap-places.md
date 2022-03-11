---
title: 'Introducing OpenStreetMap Places'
author:
  display_name: Erik Neemann
  email: eneemann@utah.gov
date: 2022-03-10 10:00:00
categories:
  - Featured
  - SGID Blog
tags:
  - openstreetmap
  - OSM
  - places
  - points of interest
  - businesses
---

![OpenStreetMap]({% link images/osm_logo.png %} "OpenStreetMap"){: style="float: right"}

There's an exciting new data layer that has been recently added to the State Geographic Information Datasource (SGID): OpenStreetMap Places. This is a brand-new offering that is created from open source data and is intended to represent places of interest in the state of Utah. These may include businesses, restaurants, places of worship, airports, parks, schools, event centers, apartment complexes, hotels, car dealerships, etc., etc., …almost anything that you can find in OpenStreetMap (OSM). There are over 23,000 features in the data, and the best part of all? You can make updates and contribute directly to this layer through [OpenStreetMap](http://openstreetmap.org)! (more on that later)

### What kind of points of interest are in the data?
{: .text-left}

All kinds! There are businesses, restaurants, churches, schools, banks, hotels, viewpoints, attractions, and more. Take a look at this chart showing the counts of the 25 most popular types of locations.

![OpenStreetMap Feature Counts]({% link images/osm_counts.png %} "OpenStreetMap Feature Counts"){: .flex .flex--center}

### How can it be used?
{: .text-left}

We think there will be numerous potential use cases for such a large and varied dataset, for state and local agencies, citizens, and even researchers. The data could be used to perform different analyses on certain business types or even specific businesses. How many Beans and Brews locations are within a half-mile of Starbucks? The businesses and landmarks could be used as a reference for 911 call-takers, first responders, or emergency managers. This can be particularly helpful because we don't always know the address of our emergencies, but we usually know a point of interest or place name. The data could even be used to quality control other datasets by looking for features that we may be missing. Are we missing any schools, fire stations, liquor stores, or cemeteries from our authoritative datasets?

### How can I contribute?
{: .text-left}

It's pretty easy, really. All you need to do is create a free [OSM account](https://www.openstreetmap.org/user/new), login, start editing or creating places (iD is the default editor), and save your updates. Then, the next time we run our python script to update this layer, your changes will be included and published in the SGID. In addition to the default, web-based editor on openstreetmap.org ([iD](https://www.openstreetmap.org/edit?editor=id)), there are several desktop and mobile (Android and iOS) editors that can be used, including, [JOSM](https://josm.openstreetmap.de/), [Vespucci](https://vespucci.io/), and [GoMap!!](https://apps.apple.com/app/id592990211). The [ArcGIS OpenStreetMap Editor](https://github.com/Esri/arcgis-osm-editor) (ArcGIS Desktop 10+ only) is also available for ESRI users. A larger list of editors is maintained on the [OSM Wiki](https://wiki.openstreetmap.org/wiki/Comparison_of_editors). If creating an OSM account and using an editor are too cumbersome, you can also submit businesses anonymously with a simple form entry and pin-location at [OnOSM](http://onosm.org). Your submissions through OnOSM will be reviewed and added by an OSM user.

![OSM Handshake]({% link images/osm_handshake.png %} "OSM Handshake"){: .flex .flex--center}

### How does it differ from other SGID data?
{: .text-left}

- It's **not** authoritative - due to the nature of crowdsourced data, we can't guarantee that it's perfect or accurate
- It has a different license - instead of our usual [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license, it carries the [ODbL 1.0](https://opendatacommons.org/licenses/odbl/summary/) license
- It's more dynamic - it gets updated frequently, is constantly growing, and anyone can contribute to it

> OpenStreetMap® is _open data_, licensed under the [Open Data Commons Open Database License](https://opendatacommons.org/licenses/odbl/) (ODbL) by the [OpenStreetMap Foundation](https://osmfoundation.org/) (OSMF).

### How is it similar to other SGID data?
{: .text-left}

- It may include locations that are represented in other, authoritative, SGID datasets
   - Examples: schools, parks, liquor stores, libraries, fire stations, etc.
- It's available in a variety of ways and data formats
   - ArcGIS Online services
   - OpenData
   - OpenSGID
   - Downloads in your favorite data format (shapefile, file geodatabase, GeoJSON, KML, CSV)

### What else should I know?
{: .text-left}

- The OSM data isn't perfect, so you may find some typos, missing locations, locations that no longer exist, etc.
- OSM data tends to have a European 'flavour' (see what I did there?). Be mindful that many categories or attributes may be spelled in a British/European English manner.  Business or location names shouldn't be affected, but attribute examples you might encounter include:
   - centre (instead of center, ex: sports_centre, arts_centre, garden_centre)
   - theatre (instead of theater)
   - caravan_site (instead of rv_park or trailer_park
   - archaeological (instead of archeological)
   - chemist (instead of pharmacy)
   - tyres (instead of tires)
- There are two types of addresses provided in the data:
   1. The address contained in the OSM data (`osm_addr`). These were input by OSM contributors, but only a small percentage of the points come with an address (~24%).
   1. The address of the nearest UGRC address point (`ugrc_addr`). These are not official addresses of the businesses or points of interest, but provide a very close address for a greater percentage of points (~59%). They are the nearest address (within 25m) in the [UGRC Address Points]({% link data/location/address-data/index.html %}#AddressPoints) dataset. The `addr_dist` field provides the distance (in meters) from the OSM point to the nearby address point.
- The attributes can be used to filter the data down to your desired types of points
   - The `category` field represents a general classification for a location. Examples include: restaurant, fast_food, viewpoint, fire_station, etc.
   - The other fields provide additional details about the location, where available
      - `cuisine` - type of food available, may have multiple, separated by a ';' (american, italian, indian, burger, pizza, sandwich, ice_cream, etc.)
      - `amenity` - often similar to the category field (restaurant, post_office, place_of_worship, social_facility)
      - `shop` - type of shop (supermarket, toys, hardware, convenience, etc.)
   - Some attributes might be duplicated among these fields
- Additional information is provided in the other attributes, where available (`website`, `phone`, `open_hours`)
- Several locations simply have a category of 'building' - these are prime for user-contributed improvements in [OpenStreetMap](https://www.openstreetmap.org/)! Stayed tuned for a future project to improve the `category` and attributes of these features…

### What are the details on how this data is created?
{: .text-left}

The OSM Places layer is created by a Python script that pulls statewide OSM data from a nightly archive provided by [Geofabrik](https://www.geofabrik.de/data/download.html). The archive data contains nearly 20 shapefiles, some that are relevant and some that aren't. So, the OSM Places layer is built by filtering the data in those shapefiles down to a single point dataset with specific categories and attributes. Additional de-duplication and spatial filtering are done along the way, to ensure the data is as clean as possible. Then, additional fields are created and assigned from UGRC's SGID data (county, city, zip, nearby address, etc.) via point-in-polygon analysis. Finally, additional attributes (OSM address, open hours, cuisine, etc.) are pulled from the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) and joined to the filtered data using the 'osm_id' field as the join key. Additional information can be found on the OpenStreetMap Places data page.

If you really want to get into the _nitty gritty_ details, come to my [2022 UGIC Conference](https://ugic.org/uncategorized/ugic-registration-open/) presentation or keep your eyes peeled 👀 for a future blog post.

Let us know what you think and reach out to {% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.osm_places text=' ' hide-punctuation=true %}{% endcapture %}
{{ contact }} or on Twitter ([@maputah](https://twitter.com/maputah)).
