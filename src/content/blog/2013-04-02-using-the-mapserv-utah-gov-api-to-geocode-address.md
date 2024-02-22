---
author:
  display_name: Bert Granberg
  email: ugrc@utah.gov
tags:
  - address
  - geocoding
date: 2013-04-02T08:51:51.000Z
title: Using the UGRC Web API to geocode addresses
published: false
category: Uncategorized
---

Geographic coordinates for Utah addresses can now be located using the UGRC's Web API. This is the same API that are used by UGRC web applications.

[![API Explorer](deleted)](https://api.mapserv.utah.gov)


The geocoding-related endpoints currently include single address geocoding, reverse geocoding, route and milepost lookup. The APIs and their parameters can be viewed and tested using the [API Explorer](https://api.mapserv.utah.gov).

The street zone geocoding endpoint will accept a 5 digit zip code or common city names and abbreviations.

Sample code for geocoding an address is available via [github](https://github.com/agrc/GeocodingSample).

Register to receive an API key at [developer.mapserv.utah.gov](https://developer.mapserv.utah.gov/AccountAccess)

{% include contact.html subject=page.title contact=site.data.contacts.agrc %}
