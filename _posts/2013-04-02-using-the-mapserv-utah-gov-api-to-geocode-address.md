---
status: publish
layout: post
author:
  display_name: Bert Granberg
  email: agrc@utah.gov
tags:
  - address
  - geocoding
published: true
date: 2013-04-02 08:51:51 -0600
title: Using the mapserv.utah.gov api to geocode address
categories:
  - Featured
---
<p>Geographic coordinates for Utah addresses can now be located using the AGRC's ArcGIS Server-based apis. These are the same apis that are used by AGRC web applications.
<div style="float:right"><a href="http://api.mapserv.utah.gov"><img src="{{ "/images/agrcapiexplorer-150x150.png" | prepend: site.baseurl }}" alt="" title="agrcapiexplorer" width="150" height="150"/></a></div>
<p>The geocoding-related apis currently include single address geocoding, bulk geocoding, reverse geocoding, route and milepost lookup. The apis and their parameters can be viewed and tested at <a href="http://api.mapserv.utah.gov">api.mapserv.utah.gov</a>.</p>
<p>The basic geocoding service will accept 5 digit zip code or city names using the spelling convention used on the state highway map (ex. Salt Lake City, Orem, Heber City, Saint George).</p>
<p>Sample python code for geocoding a table of addresses is available via <a href="https://gist.github.com/BGranberg/5272025">github</a>.</p>
<p>Register to receive an api username/key at: <a href="http://developer.mapserv.utah.gov/AccountAccess">http://developer.mapserv.utah.gov/AccountAccess</a></p>
<p>{% include contact.html subject=page.title contact=site.data.contacts.agrc %}</p>
