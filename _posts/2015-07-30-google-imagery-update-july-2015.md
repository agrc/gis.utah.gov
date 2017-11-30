---
status: publish
layout: post
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
tags:
  - aerial photography
  - flights
  - google
  - imagery
  - update
published: true
date: 2015-07-30 15:06:19 -0600
title: Google Imagery (Update, July 2015)
categories:
  - Featured
  - SGID Blog
---

<div class="grid pop">
  <p class="text-center">The information on this page could be outdated. For the most recent information visit the <a href="{{ "/discover/" | prepend: site.baseurl }}">Discover</a> page.</p>
</div>

<p>A lot has happened since the initial Google Imagery license purchase at the first of the year. Top on the list is that over 180 Utah organizations have signed up to use the license. </p>
<p>Below are some important information updates and highlights.</p>
<p><strong>URL-based Service Links (NCPU)</strong><br />
We have been exploring improved access methods to the Google imagery service. The service is now available as a Web Map Tile Service (WMTS) and a Web Map Service (WMS) that authenticate through Non-Credentialed Public URLs (NCPU), as opposed to a username and password. The older connections that require a username and password will continue to work, but the new NCPU connection should be more convenient as it does not require refreshing the service connection or inputting a password to connect. We are working to get the new links to everyone in the next few weeks.</p>
<p><strong>Using the NCPU links in public web apps including ArcGIS Online (AGOL)</strong><br />
The new NCPU URLs <em>will</em> work in web applications including ArcGIS Online (AGOL), <strong>but</strong>, your organization-specific URL link will be publicly exposed through the service connection information within the app. </p>
<p>For this reason, if you would like to publish the imagery services to an AGOL or other public facing web applications we ask that you request an additional custom 'lock-down' URL link for these purposes. The 'lock-down' link will allow use to be constrained to specific domains, hosts, and/or IP addresses, using regular expressions. This will honor the terms of the license, and will keep the usage statistics accurate for your organization. To request a 'lock-down' link, contact {% include contact.html subject=page.title contact=site.data.contacts.discover text='contact' hide-punctuation=true %} with the web domains or IP ranges that will be making requests to the image service.</p>
<p><strong>New Flights</strong><br />
Many areas of the state were re-flown by Google this spring and summer. When the imagery has finished the QA process it will be incorporated into the imagery services. There may be additional updated areas later in the year. The outdated imagery will be available later via archive image services, one for each flight year.</p>
<p><strong>Cache Level 20</strong><br />
Currently the imagery services are cached down to level 19. After the current round of 2015 imagery updates is integrated, the service will be cached down to level 20 providing an extra level of detail in the imagery service at the finest scales. While this extra level of detail in the imagery service is great news, it poses a few problems. By default ArcMap versions prior to 10.3 will only display down to level 19 and you will not be able to view level 20 if you are zoomed into the scale where the service renders level 20. For ArcMap 10.2.2 users <a href="http://support.esri.com/en/downloads/patches-servicepacks/view/productid/160/metaid/2148">there is a patch</a> that will allow you to consume level 20. The effect on CAD and Microstation users is unknown at this time. Stay tuned and we will post more information when the level 20 service capabilities are available.</p>
<p><strong>Hybrid Base Map</strong><br />
Work to incorporate the Google imagery into our Hybrid Base Map for developed areas and transportation corridors is in process. Currently only the <a href="http://arcg.is/1SLeHRQ" target="_blank">Wasatch Front area</a> has been added. For these areas, the Hybrid Base Map displays the 2014 NAIP imagery until you zoom in past approximately 1:6,770.</p>
<p><strong>Download</strong><br />
The discover.agrc.utah.gov allows the raw .jp2 image files to be downloaded in small quantities from a browser. To utilize the download functionality, login to the server with your organizational username and password. Next, select the Download viewer link (link ending in <em>footprint/utah/preview</em>). Then, simply zoom into your area of interest and once you have zoomed in far enough you will start to see a red and black checkerboard pattern. You can either click on a tile to download it or click the button in the upper right corner to Download Tiles in Current View. The .jp2 tiles are in WGS84 coordinates.</p>
<p><strong>On-premise Request</strong><br />
AGRC has a full collection of the original 6" .jp2 imagery tiles. If you prefer not to use the download viewer you can arrange to get copies of the image tiles by {% include contact.html subject=page.title contact=site.data.contacts.discover text='contacting' %}</p>
<p><strong>Troubleshooting</strong><br />
Having trouble using or connecting to the imagery services? <a href="https://docs.google.com/a/utah.gov/document/d/1pp9Q-zjaBwWXYPTC_4ndp0IueOPxhluJy65pjBa0RMo/edit?usp=sharing">Here is a document</a> we will update as needed that attempts to address some of the common problems and fixes various users have encountered.</p>
<p><strong>Want to use the WMTS?</strong><br />
A Web Map Tile Services (WMTS) provides superior performance to Web Mapping Services (WMS). This is because the WMS has to create a composite image on the server side while the WMTS just passes  pre-rendered map tile files, and because the WMTS takes advantage of client side caching. WMTS is an Open Geospatial Consortium (OGC) standard protocol map service like WMS but is not yet supported by some of the AutoCAD and Microstation software. If your software provider does not yet support the WMTS standard, chances are its already on their drawing board, but, hearing from customers that this is important, will usually help expedite the implementation schedule. Tell them it's work worth doing.</p>
