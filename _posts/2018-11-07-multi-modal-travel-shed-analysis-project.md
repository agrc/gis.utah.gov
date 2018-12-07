---
title: 'Multimodal Travel Shed Project'
author:
  display_name: Bert Granberg
  email: bgranberg@wfrc.org
date: 2018-11-07 20:28:24
categories:
  - Guestblog
tags:
  - transportation
  - bike
  - pedestrian
  - transit
  - roads
  - networkanalyst
  - multimodal
  - planning
---

A travel shed is the set of all the destinations that can be reached from a location within a specified time budget. Travel sheds are valuable both for visualizing and analyzing residents’ access to key services, but also for defining service areas for businesses and other service provider locations, such as schools, transit stations, hospitals, and fire stations.

![Multimodal means all of these working together]({{ "/images/multimodal.png" | prepend: site.baseurl }}){: .inline-text-right .outline }
Geographic information systems (GIS) software can compute and display travel sheds using a set of techniques called _network analysis_. We’re all somewhat familiar with the power of network analysis as, behind the scenes, it’s what makes the basic navigation apps on our phones work. And, of course, network analysis algorithms are completely dependent on having high-quality GIS data, which forms a digital model of the real world travel "network."

Traditionally, much of the travel shed analysis has focused on vehicle travel using GIS data representing the geography of street segments and their characteristics, like speeds, intersections, and one-way restrictions. But thanks to a successful <abbr title="Federal Highway Administration">FHWA</abbr> grant application led by <abbr title="the Utah Department of Transportation">UDOT</abbr>, travel shed analysis capability is planned to be available next summer for bike, pedestrian, transit, and mixed-mode travel analysis along Utah’s Wasatch Front urban area. 

Utah's [Measuring Multimodal Network Connectivity Pilot project](https://drive.google.com/a/wfrc.org/file/d/0B0e8NYR9m9MTX091S3d5Ri00S2drVi16ZDNyZFRhb3dFT3VZ/view?usp=sharing), funded by FHWA, will make use of the excellent existing GIS data layers built and shared by counties and cities for road centerlines, bike lanes, and multiuse paths, together with the Utah Transit Authority’s transit routes and schedules. The goal will be to periodically bring all of these layers together into a cohesive multimodal dataset that can be used to identify transportation gaps and issues for use in prioritizing enhancements to the system, particularly for non-vehicle-only modes. 

UDOT and its partners&mdash;Wasatch Front Regional Council, Mountainland Association of Governments, and UTA&mdash;are eager to use [a set of techniques and metrics developed by FHWA](https://www.fhwa.dot.gov/environment/bicycle_pedestrian/publications/multimodal_connectivity/fhwahep18032.pdf) to quantify the performance of the existing multimodal transportation system and evaluate and prioritize potential future projects that will improve active transportation, transit, and the roadway systems, as well as how they work together to serve residents and visitors.

To give a tangible example of just one type of analysis that will be possible as a result of the project: it should be fairly straightforward to answer questions such as "Where can a resident of a Murray apartment complex get to in 45 minutes with a transit pass and a bike, scooter, or willingness to walk?" With the travel shed solution to the question in hand, the number of destinations, including potential job sites, can be then be counted within the travel shed. And that, in turn, provides insight into the relative accessibility to opportunities from that location.

In the future it should be possible to build upon this project’s deliverables to answer more complex questions like "What are my options for getting from BYU to Weber State for $20 using either light transportation or a ride share service paired with UTA trains and bus rapid transit?" Expanding the project to include analysis capabilities beyond the Wasatch Front urban area is another potential area of future work.

![Simple travelshed example around UTA transit stops]({{ "/images/travelshed.png" | prepend: site.baseurl }}){: .inline-text-right .outline }The major project tasks, expected to be complete by the summer of 2019, are:

- building region-wide mode-to-mode connectors as GIS features that interconnect transit stations, local roads, bike/pedestrian paths, and the local road network;
- densifying GIS path data around key destinations, such as campuses and major transit stations; 
- building both shortest-path and quality-weighted impedance (travel cost) values;
- automating the process for assembling future updates; and 
- automating common analysis needs with Python code.

As this project wraps up next year, the resulting GIS network analysis dataset and Python code to perform the analyses on the ArcGIS software platform will be publicly available and announced here on [gis.utah.gov](https://gis.utah.gov).

{% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.multimodal text="For more information contact" punctuation=true %}{% endcapture %}
{{ contact | strip_newlines }}
