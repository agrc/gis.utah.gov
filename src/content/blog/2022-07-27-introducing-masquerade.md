---
title: Introducing Masquerade
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
date: 2022-08-01T12:20:21.000Z
tags:
  - geocoding
  - tools
  - sgid
category: SGID Updates
cover_image: '/src/images/pillar-blog/default-social-card.png'
cover_image_alt: ugrc social card
---

Masquerade is a new proxy service hosted by UGRC that makes [our geocoding service](https://api.mapserv.utah.gov/) and Open SGID datasets easily accessible in Esri products. It does this by impersonating an Esri locator service. You should be able to use the URL below anywhere you would normally use an Esri geocode service:

[https://masquerade.ugrc.utah.gov/arcgis/rest/services/UtahLocator/GeocodeServer](https://masquerade.ugrc.utah.gov/arcgis/rest/services/UtahLocator/GeocodeServer)

## Capabilities

- Single line address geocoding (convert an address to an x,y coordinate). Powered by the [UGRC web API](https://api.mapserv.utah.gov/#geocoding).
- Provides typeahead suggestions from a variety of datasets in [Open SGID](/documentation/sgid/open-sgid) such as political districts, municipal and county boundaries, and GNIS place names.

_Give Masquerade's awesome searching capabilities a try in this [simple web app](https://arcg.is/0na9Lf0)._

### Supported Esri Geocode Service Operations

✅ Find Address Candidates

✅ Geocode Addresses

✅ Suggest

Reverse Geocode has not been implemented. [Let us know](https://github.com/agrc/masquerade/issues/new) if you are interested in this feature!

[Esri REST API Reference](https://developers.arcgis.com/rest/services-reference/enterprise/geocode-service.htm)

## Common Use Cases

### ArcGIS Pro

#### Locate Pane

If you are looking for a way to quickly navigate your map to Utah addresses or points of interest within ArcGIS Pro, Masquerade can help. By adding [UGRC's "Utah Locator (Masquerade)"](https://utah.maps.arcgis.com/home/item.html?id=f19e6205b9bd49e8a39ed51ddd58164a) (hosted in ArcGIS Online) [to your project](https://pro.arcgis.com/en/pro-app/latest/help/data/geocoding/add-locators-to-a-project.htm) it becomes available to use within the [Locate pane](https://pro.arcgis.com/en/pro-app/latest/help/data/geocoding/find-places-on-the-map.htm). To accomplish this, follow these steps (see the [project page](https://github.com/agrc/masquerade#locate-pane) for more details):

1. Add the "Utah Locator (Masquerade)" locator (hosted in AGOL) to your project
1. Open any map and then go to the "Locate" pane
1. Select the newly added locator as a search option
1. Start typing in the search box and type-ahead suggestions will start appearing. Click on any suggestion to zoom the map to it.
1. For geocoding single line addresses that do not show up in the type-ahead suggestions, type in the complete address with a zip or city and press enter. (e.g. `123 S Main Street, Holladay`).

#### Batch Geocoding

Once Masquerade has been added as a locator to your project, you can also use it as an input address locator with the [Geocode Addresses geoprocessing tool](https://pro.arcgis.com/en/pro-app/latest/tool-reference/geocoding/geocode-addresses.htm) for batch geocoding of address data.

### Web AppBuilder/Experience Builder

Masquerade can be used to power the search widget in [Web AppBuilder](https://doc.arcgis.com/en/web-appbuilder/latest/create-apps/widget-search.htm) or [Experience Builder](https://developers.arcgis.com/experience-builder/guide/search-widget/). To configure, use the following URL as the "Geocoder URL" (WAB) or "Locator URL" (EB) value in the search widget settings:

[https://masquerade.ugrc.utah.gov/arcgis/rest/services/UtahLocator/GeocodeServer](https://masquerade.ugrc.utah.gov/arcgis/rest/services/UtahLocator/GeocodeServer)

## Alternatives

### UGRC API Client Desktop Application

If you are not already using Esri products, you likely want to check out the [Official UGRC API Client](/blog/2021-11-29-introducing-the-official-ugrc-api-client). This is a streamlined, stand-alone desktop application that requires no Esri products or licenses.
