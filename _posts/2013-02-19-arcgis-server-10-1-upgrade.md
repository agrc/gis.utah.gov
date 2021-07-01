---
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
tags: []
published: false
date: 2013-02-19 15:56:15 -0700
title: ArcGIS Server 10.1 Upgrade
categories:
  - Developer
  - Featured
---
<p>AGRC is planning to upgrade our main ArcGIS Server instance (<a href="http://mapserv.utah.gov/arcgis/rest">mapserv.utah.gov/arcgis/rest</a>) to version 10.1 within the next few weeks. For the majority of our users, we do not think that this will have much affect on services. However, if you access our base map caches through SOAP/WMS (this includes ArcMap users) there will be breaking changes.</p>
<p>The URL's to our cached base map services will be changing. This is due to ArcGIS Server not supporting the "-" character in service names at 10.1. Here's a table mapping the URL changes:<br />
<iframe width='505' height='280' frameborder='0' src='https://docs.google.com/spreadsheet/pub?key=0Aqee4VOgQcXcdEpDUHg5ZC16SzRaR0RwQjRiZGloWGc&single=true&gid=0&output=html&widget=true'></iframe></p>
<p>We have been able to set up redirects from the old 9.3 URL's to the new 10.1 URL's that will work only for ESRI Web API's. This means that any application that requests base map tiles from the old URL's will automatically get the new tiles. Any apps that use the SOAP API, including ArcMap, will be broken. So this means that any layers that you have in ArcMap pointing to any of our cached base map services will be broken and you will need to create new layers pointing to the new base maps. These new URL's will be permanent and will not be changed in the future.</p>
<p>The other change that will affect web apps that overlay multiple cached services is that we have tweaked our tiling scheme cache scales to make them more standardized with ArcGIS Online, Google Maps and others. This will make our base map services more universal and easy to work with.</p>
<p>We'll post the exact date of the upgrade as we finalize our plans.</p>
<p>If you notice any other issues after the upgrade, please let us know at <a href='mailto:agrc@utah.gov'>agrc@utah.gov</a> so that we can address them as soon as possible.</p>
