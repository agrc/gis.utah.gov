---
status: publish
layout: post
author:
  display_name: Bert Granberg
  email: agrc@utah.gov
tags:
  - political
  - redistricting
  - voting
published: true
date: 2012-05-02 15:55:01 -0600
title: New Political Districts & Voting Precincts datasets
categories:
  - Featured
  - SGID Blog
---
<p><strong>New Utah Political Districts:</strong></p>
<p><a href="{{ "/data/political/2012-2021-house-senate-congressional-districts/" | prepend: site.baseurl }}">Political districts for state-level offices</a> (Congressional, State House, State Senate, and State Board of Education) are available as a GIS data layers. These districts are for elections in 2012 and ongoing representation after the new representatives are installed on<br />
Jan 1, 2013.</p>
<p>The new political district boundaries, originally formed from 2010 Census Block files have been adjusted by AGRC, working together with the Utah Legislature, the Lt. Governor's Elections Office and the County Clerks' offices to make recommendations that increased the geographic accuracy and ease of use in the elections process. Legislation to make recommended minor changes to the political districts changes was passed by the Legislature during the 2013 General Session and signed into law by the Governor.</p>
<div class="caption"><a href="{{ "/downloads/political12.png" | prepend: site.baseurl }}"><img class=" wp-image-8502 " title="Political and Precinct Boundaries sample" src="{{ "/images/political12-300x261.png" | prepend: site.baseurl }}" alt="" width="300" height="261" /></a><p class="caption-text">Political and Precinct Boundaries</p></div>
<p>Specifically, efforts were made to</p>
<ol>
<li>move boundary lines off of residential structures visible in the 2009 aerial photography;</li>
<li>accurately adjust to existing municipal and county boundaries in cases where the Legislative intent was to follow the boundary but the 2010 Census Blocks did not accurately represent portions of a boundary; and</li>
<li>make technical adjustments proposed by the County Clerks to improve district/precinct implementation, as passed by the Legislature during the first 2 weeks of the 2012 general session which include reassignment of specific census blocks and several changes made by boundary description.</li>
</ol>
<p>&nbsp;</p>
<p><strong>New Utah Voting Precincts:</strong></p>
<p><a href="{{ "/data/political/voter-precincts/" | prepend: site.baseurl }}">Political.VistaBallotAreas, a statewide GIS data layer</a> depicting voting precinct and subprecinct boundaries is also available. This dataset is compiled from the County Clerks and is actively used in the 26 of 29 counties that have adopted a GIS-based process to manage precinct-to-residence assignment within VISTA, the statewide voter registration database.</p>
<p>Precincts can be formed (and subprecinct divisions eliminated) by performing a gis 'dissolve' operation on the Precinct field. This dataset has not yet been edited to eliminate very small gap and overlap slivers and or to align to the highest resolution of the county boundaries.</p>
<p>Utah is one of only several states to integrate GIS functionality into elections management, a task that requires data standards, coordination, and geospatial services and infrastructure for accurately locating addresses and making spatial queries.</p>
<p>This dataset is expected to change annually as counties need to realign precincts to agree with local boundary changes and to divide precincts whose voter count grows over the course of the year to exceed the maximum number of voters allowed per precinct (currently 1250 voters).</p>
 