---
author:
  display_name: JP
  email: agrc@utah.gov
tags:
  - address points
  - best practices
date: 2014-09-24 15:04:25 -0600
title: 'Statewide Address Points: Best Practices'
categories:
  - Featured
---

AGRC has been working with county addressing authorities and GIS staff to develop a statewide address point dataset.  We are now using address points as the primary means of locating an address, with the location along a street segment as an alternate means.  Address points can provide a more accurate location than a geolocated point along a street segment.  This is particularly important for quickly dispatching public safety response to a home, business or other location.

We have developed what we believe are best practices for address points:

- Each inhabited structure (residence or business) should have a point.
- Each point should have a unique address, either from a unique house number or a unique unit number.  If a garage or out building is assigned a point, the address should be different from that of the primary structure. (Figure 1)
- Points should be located at the structure. For multi-unit residences or multiple office suites, all the points for units accessed from each outside entrance should be located on or near each other. (Figures 2 & 3)
- A vacant parcel may have a point if it has a unique address.
- The address for a point should be derived from the primary street name.  Additional points can also exist that are derived from alternate street names.

The full Address Point dataset schema and schema definitions are available <a href="https://docs.google.com/document/d/1eTgknNbA0UNXnyMDR5q9gFAm0-XtNYQpLLYPSZtCLTU/edit#">here</a>. Address points are available for download <a href="{% link data/location/address-data/index.html %}">here</a>.
<figure class="caption caption--left"><a href="{% link images/Basemap.jpg %}"><img class="caption__image" src="{% link images/Basemap.jpg %}" alt="" title="Basemap" width="325" height="256"/></a><figcaption class="caption__text">Figure 1: Multiple structures with the same house number, but unique unit numbers</figcaption></figure>
<figure class="caption caption--left"><a href="{% link images/BasemapB.jpg %}"><img class="caption__image" src="{% link images/BasemapB.jpg %}" alt="" title="BasemapB" width="325" height="256"/></a><figcaption class="caption__text">Figure 2: Structure located far from street from which it is addressed.</figcaption></figure>
<figure class="caption caption--left"><a href="{% link images/BasemapC.jpg %}"><img class="caption__image" src="{% link images/BasemapC.jpg %}" alt="" title="Unique Unit Numbers" width="325" height="256" /></a><figcaption class="caption__text">Figure 3: Points for multi-unit structures grouped near entrances</figcaption></figure>
