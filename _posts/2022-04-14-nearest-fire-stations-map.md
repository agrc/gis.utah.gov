---
title: Is Your Home Close Enough to the Nearest Fire Station?
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2022-04-14 9:26:46
categories:
  - Featured
tags:
  - sgid
  - fire
  - emergency response
  - network
---

Living close to a fire station can be noisy, but on the other hand, not living close enough can result in delayed, or even worse, inadequate fire service. The National Fire Protection Association (NFPA) recommends a total response time of [six minutes](https://www.purvis.com/current-state-of-turnout-times/). This includes one minute for dispatch, one minute for turnout (getting out of the station), and four minutes for travel. Ideally, all occupied buildings in the US would be located within this six-minute window, or response zone. This is where Geographic Information Systems (GIS) come into play. GIS can help us visualize these response zones and also identify neighborhoods with inadequate service.
  
### The SGID
{: .text-left}
  
In Utah, the best place to begin any GIS project is with the [State Geographic Information Datasource]({% link data/index.html %}#welcome-to-the-state-geographic-information-database-sgid) (SGID). The SGID is hosted by the [Utah Geospatial Resource Center]({% link index.html %}) (UGRC) and contains hundreds of statewide geospatial datasets, many of which are considered framework data that are used in larger government systems such as 911, voting, and taxation. Because of this, data in the SGID is updated frequently and adheres to established [policies and standards]({% link about/policy/sgid/index.md %}#internal-database-standards).
  
![SGID Logo]({% link images/sgid_logo_sm.png %})
{: .flex .flex--center}

### Show me the map!
{: .text-left}
  
When exploring the question _Is Your Home Close Enough to the Nearest Fire Station?_, I was able to [search the SGID]({% link data/sgid-index/index.html %}) data offerings and quickly locate the statewide fire stations layer, the road centerline network dataset, and a basemap. After applying some basic network analysis, I was then able to create an interactive map showing the **[Standard Network Travel Times from Fire Stations in Utah](https://arcg.is/0T01i4)**.
  
This map shows standard travel times (aka: keeping the speed limit) at intervals of two, four, and six minutes. As you explore the interactive map, you will notice that some areas in Utah fall outside of a reasonable response time. Mapping this data allows us to easily identify and explore these areas.

![Fire Station Travel Times]({% link images/fire_station_travel_times.png %})
{: .flex .flex--center}

### Maps and Visualization
{: .text-left}
  
Maps are a great starting point for conversations such as what areas are being serviced, and where are the best locations for new or enhanced services? The fire stations map is a good example of this.

Using maps to visualize data is powerful. If a picture can paint a thousand words, then a map can initiate a thousand conversations. 

With the SGID, access to high-quality, authoritative data is a few clicks away. I encourage you to begin your next spatially-oriented question with the [SGID Index search tool]({% link data/sgid-index/index.html %}).

GIS enables us to ask big questions and get reliable answers.

If you have any questions about geospatial data or mapping please reach out to us at {% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.agrc text=' ' hide-punctuation=true %}{% endcapture %}
{{ contact }}.
