---
title: 'Bike-Related GIS Data Resources'
author:
  display_name: Bert Granberg
  email: bgranberg@wfrc.org
date: 2020-05-26 22:29:00
categories:
  - Featured
tags:
  - bike
  - wfrc
  - road centerlines
  - multimodal
---

It’s been said that “four wheels move your body, two wheels move your soul.”

With that spirit in mind, and with the increasing focus on our transportation system working holistically to best serve our communities, there’s been an uptick in bicycle-related GIS work in Utah over the last year or two. And a portion of that work has aimed at building on the good bike map and data work performed at the municipal and county levels. 

The goal of the regional, and eventually statewide, bike datasets assembled by UDOT, AGRC, WFRC, MAG, and others is to build information resources that can be used to inform not only cyclists, but also those tasked with planning and securing funding for future bike facilities. Similar to the need for GIS road centerlines data, large area data aggregation and standardization of bike datasets allows for a better inventory—and better communication of—existing bike pathways and lanes, planned additions and enhancements, and the bike network’s performance in serving community needs.

So, if you’ve got an interest or use for GIS bike data, here are some of the latest developments that you are invited to explore. Keep in mind that we are hoping that these datasets will continue to improve and stay current, so please consider how you might share feedback or data updates or otherwise help improve these processes and data products.

- **Existing On-street Bike Lanes and Near-street Bike Paths.** Thanks to work being done by UDOT Traffic and Safety and UDOT Planning staff, the existing bike facility attributes stored within [Utah’s statewide road centerline GIS dataset]({% link data/transportation/roads-system/index.html %}) have been revised to the most up-to-date 2018 aerial photography. Initial work for the Wasatch Front metro area (i.e., Salt Lake, Utah, Davis, Weber, and southern Box Elder counties) has been completed and is now available in the [May road centerline update]({% link _posts/2020-05-20-utah-sgid-statewide-roads-data-layer-updates-05202020.md %}) available from AGRC. Attributes are stored in the Bike_L and Bike_R fields using a [coded-value domain](https://docs.google.com/spreadsheets/d/1jQ_JuRIEtzxj60F0FAGmdu5JrFpfYBbSt3YzzCjxpfI/edit#gid=2110432100). UDOT plans to complete the photo revision of road-based bike facilities for other areas of the state in upcoming months.  
- **Existing and Planned Off-street Bike Paths.** [Utah’s Recreation.Trails dataset]({% link data/recreation/trails/index.html %}), hosted by AGRC, contains known off-street bike paths like the Jordan River Parkway. Paved trails can be queried from this dataset by using this SQL expression: [CARTOCODE] = 3 and not [STATUS] = “PROPOSED”  
- **Planned Bike Lanes and Pathways for the WFRC Area.** WFRC staff have worked to integrate local and regional bike facility plans into the AGRC-hosted road centerline and trails datasets for (Salt Lake, Davis, Weber, and southern Box Elder counties). In the road centerline dataset, the planned facilities are stored in the BIKE_PLN_L and BIKE_PLN_R fields using the same coded-value domain noted above. WFRC has coordinated with AGRC to add planned off-street pathways for the same area. They can be found by querying Recreation.Trails with this SQL expression: [CARTOCODE] = 3 and [STATUS] = “PROPOSED”  
- **WFRC-area Bike Plan Areas.** WFRC has created a polygon dataset with links to recent local completed and in-progress bike plans. This dataset is featured in an interactive map on [BikeUtah’s webpage](https://www.bikeutah.org/wbp) and has links to local plan documents.   
- **Multimodal Network.** The new [Multimodal Network Dataset](https://drive.google.com/a/utah.gov/uc?id=1DK1eYvl7NAHeL0zdFe8MgwSP2NA9XQcN&export=download) allows shortest-path and travel shed calculations using roads and trails with built-in bike, pedestrian, transit, and vehicle travel cost (impedance) values. This dataset will be updated periodically to reflect road attribute and trail updates. The [process for creating this dataset](https://docs.google.com/document/d/1OsXexJTap9tDY89Y_v2woGatK_u5nYd_jDdlMwWRhog/edit) was developed by UDOT and AGRC through an [FHWA funded project]({% link _posts/2018-11-07-multi-modal-travel-shed-analysis-project.md %}).

Other bike-related information resources that are _coming soon_ (i.e., over the next few months):

- **Wasatch Front Bike and Pedestrian Demand Score.** This is an update of the 2013 UCATS “Latent Demand” methodology that assigned a variety of demand-related indicators to the road network. [This dataset](http://wfrc.maps.arcgis.com/home/webmap/viewer.html?webmap=8ca837a9d3ff4b1299468e40b3eac383) will incorporate new and updated GIS data and will be published as a stand-alone layer that uses the road centerline geometry. Future enhancements building on this methodology are also planned by WFRC and partners.  
- **Network Quality.** Metrics for nearby bike network quality implemented by UDOT and AGRC will also soon be available for the Wasatch Front metro area, 
Bike Data Resources Webmap. This integrated web map application allows all of the above datasets to be explored and downloaded for the Wasatch Front metro area.  
- **Observed Bike Counts.** Observed bike counts are from fixed and mobile bike counters being deployed in urban areas. This is more "aspirational" than "project" at the moment, so expect the timeframe to be a bit longer.

*[UDOT]: Utah Department of Transportation  
*[AGRC]: Utah Automated Geographic Reference Center  
*[WFRC]: Wasatch Front Regional Council  
*[MAG]: Mountainland Association of Governments  
*[UCATS]: Utah Collaborative Active Transportation Study  
*[FHWA]: Federal Highway Administration
