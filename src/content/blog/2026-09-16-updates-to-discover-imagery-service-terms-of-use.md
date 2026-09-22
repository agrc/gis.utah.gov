---
title: Updates to Discover Imagery Service Terms of Use
author: UGRC Discover Admins
date: 2026-09-16 15:55:01 -0600
category: Discover
tags:
  - discover
  - imagery
  - ai
cover_image: /src/images/pillar-blog/default-social-card.png
cover_image_alt: ugrc social card
---

## Updated Regulations Regarding AI Analysis for Aerial Imagery

The users of our [Discover imagery and basemap services](https://gis.utah.gov/products/discover/) play a vital role in keeping Utah’s geospatial infrastructure fast, reliable, and accessible. To ensure these services remain financially sustainable and available to all public partners, we need your help addressing a growing challenge regarding automated data processing. 

The rapid growth of AI tools has made it easier than ever to perform complex analysis and automated processing of high-resolution aerial imagery. However, running these automated workflows directly against live Discover streaming endpoints (WMTS/WMS) creates large, unpredictable, and costly spikes in data transfer and cloud egress that are not budgeted for. As a result, it puts the services at-risk for everyone. A few recent instances of sudden, high-volume processing has prompted us to update our terms of service. 

## New Guidelines to Ensure Longevity and Stability

Automated, large-scale processing of imagery from the WMTS and WMS services is prohibited. This includes:

- Python scripting
- Computer vision or AI model training
- Any inference against the live service endpoints

A local copy of data can be provided, if it is needed for these purposes. UGRC reserves the right to cut off any users that are abusing the Discover service with exceedingly high-volume usage.

### Additional Guidelines

- Please don’t share your Discover quad-words outside of your organization.
- Only use the licensed Discover services for work associated with your organization (personal projects do not meet licensing requirements).
- Be mindful that the service is intended for desktop and web-based GIS usage. 

For more details on the licensing agreement for Discover, check out the [latest version](https://docs.google.com/forms/d/18FnT2fdg7nrA9xZYKUYV5UvxG0GO9w9DNFfeNG1D4TU/edit) of the terms of service.

If you have any questions or would like to reach out about a bulk data transfer, please contact our team at ugrc-discover-admins@utah.gov.

