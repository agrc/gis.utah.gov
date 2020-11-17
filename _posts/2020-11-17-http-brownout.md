---
title: AGRC ArcGIS Online HTTP Brownout Nov 20 - 22
author:
  display_name: Jake Adams
  email: jdadams@utah.gov
date: 2020-11-17 17:30:00
categories:
  - Featured
tags:
  - agol
---

## Heads up!

AGRC will be temporarily [enabling HTTPS-only](https://support.esri.com/en/Technical-Article/000022877) on our ArcGIS Online organization on **Friday morning, November 20th,** in preparation for Esri's [permanent switch](https://support.esri.com/en/https_only) on December 8th. We will disable the setting **Monday morning, November 23rd**. We will then set it permanently for our organization on December 1st, a week before Esri's deadline.

## Why?

By enabling the HTTPS-only setting over a weekend, it gives people using our ArcGIS Online layers in their maps a chance to see if things are broken in a lower-traffic period before Esri throws the switch permanently. [HTTPS](https://en.wikipedia.org/wiki/HTTPS) plays a major role in ensuring internet communications are private (can't be read by someone else) and authentic (weren't replaced by altered content in transit).

## Who is affected?

Anyone who is consuming any of our ArcGIS Online layers in a webmap or other application through an HTTP link (`http://utah.maps.arcgis.com/...`) may see errors, including a webmap popup saying "Layer such-and-such cannot be added to the map." This may be the case if you added the layer to a map by copying the URL, which is more likely for custom web applications as well as those built in ArcGIS Online.

## How do I fix my map?

In ArcGIS Online webmaps, you can use the "Update Layers to HTTPS" button in the Settings tab on the map's ArcGIS Online item page. See [Esri's documentation](https://doc.arcgis.com/en/arcgis-online/reference/faq.htm#LAYERS_HTTPS) for more info. For other applications, update your link text to HTTPS (`https://utah.maps.arcgis.com/...`).

## Who should I contact?
{%capture contact %}{% include contact.html subject='HTTP Brownout Post' contact=site.data.contacts.discover text='send an email to' hide-punctuation=true %}{% endcapture %}

If you have questions **specific to AGRC's ArcGIS Online services**, {{ contact }}. For general ArcGIS Online HTTPS questions, please contact Esri directly.