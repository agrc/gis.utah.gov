---
title: New Political Districts & Voting Precincts datasets
published: false
author: Bert Granberg
date: 2012-05-02 15:55:01 -0600
category: SGID
tags:
  - political
  - redistricting
  - voting
cover_image: /src/images/pillar-blog/default-social-card.png
cover_image_alt: ugrc social card
---

### New Utah Political Districts

[Political districts for state-level offices](/products/sgid/political/) (Congressional, State House, State Senate, and State Board of Education) are available as a GIS data layers. These districts are for elections in 2012 and ongoing representation after the new representatives are installed on Jan 1, 2013.

The new political district boundaries, originally formed from 2010 Census Block files have been adjusted by UGRC, working together with the Utah Legislature, the Lt. Governor's Elections Office and the County Clerks' offices to make recommendations that increased the geographic accuracy and ease of use in the elections process. Legislation to make recommended minor changes to the political districts changes was passed by the Legislature during the 2013 General Session and signed into law by the Governor.

<figure class="caption caption--right">
  <a href="/images/404.png">
    <img class="caption__image" title="Political and Precinct Boundaries sample" src="/images/404.png" />
  </a>
  <figcaption class="caption__text">Political and Precinct Boundaries</figcaption>
</figure>

Specifically, efforts were made to

- move boundary lines off of residential structures visible in the 2009 aerial photography;
- accurately adjust to existing municipal and county boundaries in cases where the Legislative intent was to follow the boundary but the 2010 Census Blocks did not accurately represent portions of a boundary; and
- make technical adjustments proposed by the County Clerks to improve district/precinct implementation, as passed by the Legislature during the first 2 weeks of the 2012 general session which include reassignment of specific census blocks and several changes made by boundary description.

### New Utah Voting Precincts

[Political.VistaBallotAreas, a statewide GIS data layer](/products/sgid/political/voter-precincts/) depicting voting precinct and subprecinct boundaries is also available. This dataset is compiled from the County Clerks and is actively used in the 26 of 29 counties that have adopted a GIS-based process to manage precinct-to-residence assignment within VISTA, the statewide voter registration database.

Precincts can be formed (and subprecinct divisions eliminated) by performing a gis 'dissolve' operation on the Precinct field. This dataset has not yet been edited to eliminate very small gap and overlap slivers and or to align to the highest resolution of the county boundaries.

Utah is one of only several states to integrate GIS functionality into elections management, a task that requires data standards, coordination, and geospatial services and infrastructure for accurately locating addresses and making spatial queries.

This dataset is expected to change annually as counties need to realign precincts to agree with local boundary changes and to divide precincts whose voter count grows over the course of the year to exceed the maximum number of voters allowed per precinct (currently 1250 voters).
