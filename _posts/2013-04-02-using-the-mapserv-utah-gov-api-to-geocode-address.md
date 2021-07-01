---
author:
  display_name: Bert Granberg
  email: agrc@utah.gov
tags:
  - address
  - geocoding
date: 2013-04-02 08:51:51
title: Using the AGRC Web API to geocode addresses
categories:
  - Featured
---

Geographic coordinates for Utah addresses can now be located using the AGRC's Web API. This is the same API that are used by AGRC web applications.

[![API Explorer]({% link images/agrcapiexplorer-150x150.png %})](https://api.mapserv.utah.gov)
{: .inline-text-right .outline}

The geocoding-related endpoints currently include single address geocoding, reverse geocoding, route and milepost lookup. The APIs and their parameters can be viewed and tested using the [API Explorer](https://api.mapserv.utah.gov).

The street zone geocoding endpoint will accept a 5 digit zip code or common city names and abbreviations.

Sample code for geocoding an address is available via [github](https://github.com/agrc/GeocodingSample).

Register to receive an API key at [developer.mapserv.utah.gov](https://developer.mapserv.utah.gov/AccountAccess)

{% include contact.html subject=page.title contact=site.data.contacts.agrc %}
