---
title: 'The Gecoding Toolbox Is Being Deprecated'
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
date: 2024-01-15 16:30:36
categories:
  - Featured
  - Developer
tags:
  - geocoding
  - python
---


## First, Some History

Back in 2014, we released a custom python toolbox for ArcGIS Desktop called the [Geocoding Toolbox](https://github.com/agrc/geocoding-toolbox). It allowed users to geocode Utah addresses using our [web API](https://api.mapserv.utah.gov/#geocoding). It was a great tool for the time, but there are now better options available. For this reason we have decided to deprecate the toolbox to allow us to focus our efforts and simplify our offerings.

## What Are the Better Options?

For those who are using Esri products including ArcGIS Pro and ArcGIS Online, our [Masquerade](https://github.com/agrc/masquerade) service will allow you to access our geocoding service without any special software. This service enables you to geocode Utah addresses and search for features in our [Open SGID](https://gis.utah.gov/data/) datasets. It can be used in the same way as any other locator. See the [project page](https://github.com/agrc/masquerade?tab=readme-ov-file#masquerade) for more details.

If you are not using Esri-products, our [API Client](https://github.com/agrc/api-client) is a great option. It is a small downloadable desktop application that requires no Esri licensing. It is super-streamlined and easy to use. See the [introductory blog post]({% link _posts/2021-11-29-introducing-the-official-ugrc-api-client.md %}) for more details.

## What If I Still Want to Use the Toolbox?

The toolbox will continue to work for the foreseeable future. However, we will not be making any updates to it. We encourage you to migrate to one of the other options when you have the opportunity.
