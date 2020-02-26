---
author:
  display_name: Bert Granberg
  email: agrc@utah.gov
tags:
  - aerial photography
  - cad
  - discover
  - google
  - imagery
  - orthophotography
  - web services
  - wms
  - wmts
date: 2016-09-30 16:55:53
title: Where and How? High Resolution Base Maps and Google Imagery Usage
categories:
  - Featured
---
[![Google Imagery Usage Map]({% link images/HighResImageryAndBaseMaps_Sept2016thumb.jpg %} "view high res usage map")]({% link downloads/HighResImageryAndBaseMaps_Sept2016.pdf %}){:.inline-text-right}
It has been about 18 months since the statewide high resolution (6") aerial photography content and services, licensed from Google and funded through the Utah Mapping and Information Partnership (UMIP), were made available to state and local government through AGRC's Discover imagery server.

*So, what have we learned so far?* A lot actually, thanks to two resources: an extensive user survey and metrics collected by the server itself.

The user survey, conducted late this Spring, identifies how the aerial photography services are being used, what the benefits are to organizations using the license, and suggestions for future updates and enhancements. A [summary of the Utah High Res (6") Aerial Photography User Survey](https://docs.google.com/presentation/d/1VbTqkHDGoprPYwGtmnOZ-BUVdfFnBz4Sk9VAZMs3mbM/edit?usp=sharing) is now available, and includes a list of [responses](https://docs.google.com/document/d/1iwLi8icm3OqF0GvEnblD6REiwcmUdug03Dny2vvXMMM/edit?usp=sharing) to free-text questions.

Additionally, usage metrics from the Discover server identify who is using the services, how much, and maybe most importantly, WHERE use is the highest, and how it varies around the state. The server metrics emphatically show usage has steadily increased and, that usage, as expected, varies greatly in different parts of the state. It is worth noting that the server metrics  understate use, as they do not account for the use of large-area custom mosaics created for 911 dispatch centers and others who require on-premise copies of the imagery. Caching of imagery tiles that have already been viewed, by ArcGIS and other applications, also means the numbers do not reflect full usage.

The **WHERE** piece to the imagery question is quite important, as the single most expensive component for all models of aerial photography acquisition, is the size of the area of interest. And, as Utah considers what areas to re-acquire or subscribe to, having a spatial representation of current usage is critical. Where there's current use, there's probably future use and the accompanying expectation for periodic update.

While high resolution aerial photography is potentially valuable anywhere in the state, there is nothing better than a map to shows where it has been used the most. The [**map**]({% link downloads/HighResImageryAndBaseMaps_Sept2016.pdf %}) shown above depicts the number of imagery tiles requested from the Discover server, since its inception, at scales where 6" pixel resolution makes a substantial difference to users (scales between of 1:2000 and 1:500). The data shown on the map is aggregated, so that the number of tiles requested is shown for each grid cell (approximately 1 square mile in size).

Here are several overview-scale observations:

- Use is highest in the urban areas but includes all settled areas or areas with economic development or along transportation corridors. Many rural areas are thrilled to finally have access to 6" imagery for use on their own mapping systems.
- The 111 survey respondents (of 270+ organizations with user accounts) estimated usage at their organization, that when totaled suggested almost 1000 daily users across the state.
- The imagery is used by a diverse set of levels and sectors of the public sector (and private sector partners), to support a great variety of needs.
- Respondents cited benefits from improving their data quality and collection efficiency, that resulted in improved analysis to support decision-making.
- 80% of respondents report a high level of satisfaction and perceived value (an 8, 9, or 10 out of 10).
- Image quality, resolution, horizontal positioning of the imagery, and update frequency are all important but in varying degrees to different organizations.
- The web service delivery mechanism provides efficient access to the aerial photography. Speed increases last Fall were a significant improvement. CAD users report more issues (than GIS users) with their software's ability to consume the web services.

Information from the recent user survey and from server logs that describe and depict usage will greatly impact the imagery recommendations and business plan (currently in progress) that AGRC will present to the UMIP Steering Committee and partners, as we consider next steps in this arena.
