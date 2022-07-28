---
title: 'Introducing Masquerade'
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
date: 2022-07-27 16:20:21
categories:
  - Featured
  - Developer
  - SGID Blog
tags:
  - geocoding
  - tools
  - sgid
---

Masquerade is a new proxy service hosted by UGRC that makes [our geocoding service](https://api.mapserv.utah.gov/) and Open SGID datasets easily accessible in Esri products. It does this by impersonating an Esri locator service. You should be able to use the URL below anywhere you would normally use an Esri geocode service:

> [https://masquerade.ugrc.utah.gov/arcgis/rest/services/UtahLocator/GeocodeServer](https://masquerade.ugrc.utah.gov/arcgis/rest/services/UtahLocator/GeocodeServer)

This makes geocoding Utah addresses and searching for common points of interest in Esri products a snap. Check out [the project page](https://github.com/agrc/masquerade#readme) for details on how to use it.
