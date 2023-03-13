---
title: "Trailheads, a Collaborative Approach"
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2023-03-13 12:00:00
categories:
  - Featured
tags:
  - data
  - trailheads
  - OSM
  - OpenStreetMap
---

Certain datasets are best managed collectively. These datasets tend to be dynamic and have more than one steward. 

Trailheads are great examples of this. They receive frequent updates and are governed by a variety of entities including cities and towns, counties, land preservation trusts, BLM, USFS, State Parks, and National Parks, to name a few. Because of this, it can be a challenge to keep this layer current in the SGID. But, what if we used a collaborative approach to manage this data?


### OpenStreetMap and Collective Stewardship
{: .flex .flex--left}

At UGRC, we see [OpenStreetMap](https://www.openstreetmap.org/) (OSM) as an ideal platform for managing and maintaining datasets such as trails, trailheads, campgrounds, and a variety of other layers - because who better to steward this data than all of us? 

OpenStreetMap (OSM) is a collaborative platform for collectively editing data in real-time. In the case of trailheads, mapping enthusiasts can work side-by-side (so to speak) along the data stewards to keep the data up-to-date.  

We already have an [established OSM workflow]({% link _posts/2022-03-21-introducing-open-source-places.md %}) for the [Open Source Places SGID layer]({% link data/society/open-source-places/index.html %}). This workflow allows us to source the data directly from OSM. Our goal is to eventually incorporate this collective stewardship model into as many suitable datasets as we can. For now, we have identified [trailheads]({% link data/recreation/trails/index.html %}) as the next suitable SGID layer for this collaborative editing model.

### Collaborate Trailheads
{: .flex .flex--left}

The first step is to incorporate the [existing SGID Trailheads](https://opendata.gis.utah.gov/datasets/utah-trailheads/explore) into OSM. Essentially, we need to conflate –or merge– the two datasets to ensure we’re getting the best of both worlds.

To make this process fun (and easy), we created a simple [map challenge](https://maproulette.org/browse/challenges/28673) and opened it up to the mapping community at large. So, if you’ve ever ventured out in Utah, it’s likely you’ll have something to contribute.

In the map challenge, there are essentially two scenarios:

- In the first scenario, the SGID trailhead is marked as new to OSM. In that case, you would review the information supplied and either add the missing trailhead to OSM or decline it with a valid reason.
- In the second scenario, the SGID trailhead is marked as not new to OSM. In this case, you're working on a task to review (and possibly update) existing OSM data. The task is to look at both features and ensure that the most current information is in OSM.

Three short vidoes are linked below that walk you through the map challenge.

### What’s Next for the Trailheads Dataset?
{: .flex .flex--left}

Once the map challenge is complete, we’ll then direct all maintenance for the trailheads layer to OSM. 

At that point, we will source the SGID Trailheads layer from OSM much like we do with the SGID Open Source Places layer. This involves bringing the OSM data in-house, running a few validations and quality checks, and then serving it through the SGID so it can be consumed as a GIS layer. 

The beauty of this collective stewardship model is that, collectively, we have the tools to keep the data current.

As we move forward with this model, we will also be working with the authoritative stewards to see how this project fits into similar initiatives that are already underway such as the [OSM for Government](https://wiki.openstreetmap.org/wiki/OpenStreetMap_for_Government) and the [Public Domain Map](https://publicdomainmap.org/).

At UGRC, our ultimate goal is to serve relevant, high-quality data that can be used across platforms. By moving certain layers to OSM, we unlock their potential and open them up to the larger mapping community. With increased visibility they become better and more accessible to a variety of users and decision makers.

We hope you’ll join us in this effort.

### Get Involved in the Map Challenge!
{: .flex .flex--left}

If you’d like to contribute to the project, you can start by watching our three short how-to videos. 

- How to [create an OSM account and link it to the map challenge](https://vimeo.com/807581370)
- How to [add a new trailhead to OSM](https://vimeo.com/807595086)
- How to [update an existing OSM trailhead](https://vimeo.com/807604623)

### Follow Along with the Project
{: .flex .flex--left}

You can follow along with this project by visiting our [collaborative trailheads GitHub repository](https://github.com/agrc/collaborative-trailheads) or by reaching out to {% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.agrc text=' ' hide-punctuation=true %}{% endcapture %}
{{ contact }}.


Happy mapping!
