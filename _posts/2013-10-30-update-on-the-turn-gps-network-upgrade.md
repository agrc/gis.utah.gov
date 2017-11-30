---
status: publish
layout: post
author:
  display_name: JP
  email: agrc@utah.gov
tags:
  - gps network
  - surveyor
  - turn gps
published: true
date: 2013-10-30 11:36:07 -0600
title: Update on the TURN GPS Network Upgrade
categories:
  - Featured
  - GPS-surveyor
---
<p><a href="{{ "/downloads/TURNGPS_MapsOnTheHill_Poster.jpg" | prepend: site.baseurl }}"><img src="{{ "/images/TURNGPS_MapsOnTheHill_Poster-239x300.jpg" | prepend: site.baseurl }}" alt="" title="TURNGPS_MapsOnTheHill_Poster" width="239" height="300" class="inline-text-left" /></a> As announced in a previous <a href="{{ "/turn-gps-network-updates/" | prepend: site.baseurl }}" target="_blank">blogpost</a>, the TURN GPS Network is undergoing a system upgrade and a change in spatial reference from NAD 83 (CORS 96) epoch 2002 to NAD 83 (2011) epoch 2010. We are pleased to announce the new system is up and running and is currently in the testing phase. The two systems are running completely separate and independent of each other to avoid any confusion with the coordinate systems. </p>
<p>This <a href="{{ "/downloads/NAD83-CORS96-to-2011-comparison_email.pdf" | prepend: site.baseurl }}" target="_blank">spreadsheet</a> shows the coordinate comparison between NAD 83 (CORS 96) and NAD 83 (2011). You may notice from the data there is no evidence of a consistent shift in a single direction at a set distance which indicates a new site calibration is necessary to use the new system on existing projects.</p>
<p>To view the live sensor map of the network, click <a href="http://168.179.231.9/Map/SensorMap.aspx" target="_blank">here</a>.</p>
<p>If you are interested in registering with the GPS Network, or for instructions on how to access the new system, {% include contact.html subject=page.title contact=site.data.contacts.turn text='contact' %}</p>
