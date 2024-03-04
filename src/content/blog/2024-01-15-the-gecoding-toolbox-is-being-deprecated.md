---
title: The Geocoding Toolbox Is Being Deprecated
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
date: 2024-01-15T16:30:36.000Z
tags:
  - geocoding
  - python
category: Developer
cover_image: "/src/images/pillar-blog/default-social-card.png"
cover_image_alt: ugrc social card
---

## First, Some History

Back in 2014, we released a custom python toolbox for ArcGIS Desktop called the [Geocoding Toolbox](https://github.com/agrc/geocoding-toolbox). It allowed users to geocode Utah addresses using the [UGRC API](https://api.mapserv.utah.gov/#geocoding). It was a great tool for the time, but we have better options available now. For this reason we have decided to deprecate the toolbox to focus our efforts and simplify our offerings.

## What Are the Better Options?

For those who are using Esri products including ArcGIS Pro and ArcGIS Online, our [Masquerade](https://github.com/agrc/masquerade) service will allow you to access our geocoding service without any downloaded software. This service enables you to geocode Utah addresses and search for features in our [Open SGID](/products/sgid) datasets. It can be used in the same way as any other locator. See the [project page](https://github.com/agrc/masquerade?tab=readme-ov-file#masquerade) for more details.

If you are not using Esri-products, our [API Client](https://github.com/agrc/api-client) is a great option. It is a small downloadable desktop application that requires no licensing. It is streamlined and easy to use. See the [introductory blog post](/blog/2021-11-29-introducing-the-official-ugrc-api-client) for more details.

## What If I Still Want to Use the Toolbox?

The toolbox will continue to work for the foreseeable future. However, we will not be making any updates to it. We encourage you to migrate to one of the other options when you have the opportunity.
