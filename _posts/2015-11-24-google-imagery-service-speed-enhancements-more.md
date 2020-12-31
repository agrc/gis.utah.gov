---
author:
  display_name: Bert Granberg
  email: agrc@utah.gov
tags: []
date: 2015-11-24 15:57:20 -0700
title: Google Imagery Service Speed Enhancements & More
categories:
  - Featured
---

<div class="grid pop">
  <p class="text-center">The information on this page could be outdated. For the most recent information visit the <a href="{% link discover/index.html %}">Discover</a> page.</p>
</div>

<p><img src="{% link images/Screen-Shot-2015-11-24-at-3.45.51-PM-300x251.png %}" alt="" title="Screen Shot 2015-11-24 at 3.45.51 PM" width="300" height="251" class="inline-text-left" loading="lazy" />
<h4>1. Quick Update! WMTS Speeds Much Improved.</h4>
<p>Last week, several behind-the-scenes changes were made by AppGeo to significantly increase the performance of the discover.agrc.utah.gov WMTS service. We’ve received consistent feedback from our test users indicating that the latest updates meet speed-level expectations for desktop GIS and web app use, including aggressive panning. WMTS should now, by far, out perform the older WMS protocol, the latter of which should really only be used as a last resort.</p>
<p>For inquiring minds, these changes included offloading https/ssl handling from the application-level to the Google Cloud platform. This had the side benefit of enabling faster transfer from tile storage using the http2 protocol. The addition of a hard 2 second timeout on tile requests should also prevent the occasional latency spikes that were reported.</p>
<p><em>Three additional items of interest...</em></p>
<h4>2. WMTS URLs: Quad-Word-Access-Convenience</h4>
<p>We recommend that all organizations use the quad word service URL that is specific to your organization, rather that the username and passwords that were given out to early adopters. The quad word URLs are more convenient, removing the requirements of both periodically re-authenticating and sharing passwords. <em>Please remember that we expect organizations, through their designated point of contact (POC), to request additional quad word URLs for use of the imagery service within ArcGIS Online or any other public-facing web applications where the service information will be necessarily exposed. Please send these requests {% include contact.html subject=page.title contact=site.data.contacts.discover text='to' %}</em></p>
<h4>3. Lite and USGS Topo Base Maps Now Available in WMTS & WMS</h4>
<p>In recent weeks, we've added the "Lite-themed" and USGS topographic map mosaic to the WMTS/WMS server. If you don't see these new layers in your desktop client, right click and refresh the connection. To view any of the now 6 available WGS84 web mercator layers from the imagery appliance in a browser, simply modify the URL to have '/layer' after your unique quadruplet. The 'Preview' button will open a web browser viewer application to explore the layer.</p>
<ul>
<li>example: https://discover.agrc.utah.gov/login/path/YOUR-QUAD-WORDS-HERE/layer </li>
</ul>
<p>To make a web app tile request, replace 'layer' with 'tiles/LAYERNAMEHERE/{z}/{x}/{y}' for any specific layer accessed from the link above. <em>Remember to get a web app specific quad word URL (see italics under section 2)</em>.</p>
<p>We are working on adding a terrain-themed basemap and an overlay that will allow for a 'hybrid' style map to be created on top of the 6 inch Google imagery. Look for updates on both of these in December. All are natively in the Web Mercator projection.</p>
<h4>4. Small Batch Downloads of the Google Imagery Jpgs.</h4>
<p>All POC's for the Google imagery license, within the service information email sent by AGRC, have access to the discover.agrc.utah.gov footprint viewer. This allows the raw Google imagery jpg files to be downloaded in small batches (ex. neighborhoods, projects areas, etc). For large areas, please make a request and send us a flash or hard drive.</p>
<ul>
<li>example: https://discover.agrc.utah.gov/login/path/YOUR-QUAD-WORDS-HERE/footprint/utah/preview</li>
</ul>
<p>To download, after loading the footprint viewer after modifying the URL directly above (or clicking the Image Footprints link from the 'layer' view, see first URL in this post), zoom into your area of interest. At level 16 (~1:9,000) the footprints will change to a red/blue checkerboard pattern. Click an individual tile to download it or use the Download Most Recent or Download All Tiles button in the upper right corner to get a zip file of all the jpgs that intersect the visible extent of the viewer.</p>
