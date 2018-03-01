---
author:
  display_name: Data Queen
  email: agrc@utah.gov
tags:
  - geocoding
date: 2014-01-17 11:57:08 -0700
title: 'New: Utah Geocoding Toolbox for ArcGIS Desktop'
categories:
  - Featured
---
<p><a href="https://github.com/agrc/geocoding-toolbox/raw/master/AGRC%20Geocode%20Tools.tbx" class="button medium white"><span class="button-text">Download Geocoding Toolbox</span></a></p>
<p>AGRC is proud to announce the release of a Utah-specific geocoding toolbox for ArcGIS Desktop.<a href="{{ "/downloads/geocoding-example.png" | prepend: site.baseurl }}"><img src="{{ "/images/geocoding-example.png" | prepend: site.baseurl }}" alt="" title="geocoding example" width="113" height="144" class="inline-text-left" /></a></p>
<p>This custom geocoding toolbox allows ArcMap users to obtain geographic coordinates from <a href="{{site.baseurl}}{% post_url 2013-04-02-using-the-mapserv-utah-gov-api-to-geocode-address %}">AGRC's geocoding web service api</a> for any table of addresses in a ArcGIS accessible format.</p>
<p>While the geocoding api was built primarily for web applications it also provides value as a toolbox in ArcMap, as it uses current local data and solves for some common shortcomings with stock geocoding approaches by:</p>
<p><a href="{{ "/downloads/geocodingtoolbox.png" | prepend: site.baseurl }}"><img src="{{ "/images/geocodingtoolbox.png" | prepend: site.baseurl }}" alt="" title="geocodingtoolbox" width="190" height="333" class="inline-text-right" /></a>
<ul>
<li>using hierarchical street name and address coordinate system aliasing</li>
<li>use of either zip codes or place names as zones</li>
<li>ignores placename and zipcode errors within the same addressing system</li>
<li>handles common placename usage and abbreviations (WVC, St George, Magna, Heber City, S Jordan, etc.) </li>
<li>can find matches for numeric address 'reversals' (500 E 1991 S)</li>
<li>can find address point matches, offset centerline matches, or best available.</li>
<li><a href="{{site.baseurl}}{% post_url 2013-05-10-utah-statewide-address-geocoding-web-service-upgrade %}">more info</a></li>
</ul>
<p>Use the <a href="http://api.mapserv.utah.gov/#geocoding">Street and Zone method on the api page</a> or <a href="http://atlas.utah.gov">the Find Address gui at atlas.utah.gov</a> to test the results from your problem addresses against the api.</p>
<p>Installation is as easy as <a href="https://github.com/agrc/geocoding-toolbox/raw/master/AGRC%20Geocode%20Tools.tbx">downloading the AGRC Geocode Tools.tbx file</a> to your desired location and then in ArcToolbox, <a href="http://resources.arcgis.com/en/help/main/10.1/index.html#//003q0000001m000000">right clicking the Add Toolbox menu item</a>. Users must obtain an ip specific mapserv api key by <a href="http://developer.mapserv.utah.gov/AccountAccess">registering here</a> prior to use, as a unique api key is one of the required input parameters for running the tool.</p>
<p>The geocoding tool will produce as output a .csv file with the input unique identifier field, the input address information, and the match results. It also produces a .dbf file with the same information and will provide the user with the option to add this to the current ArcMap project. A user can use the .dbf file to join on the unique record identifier to connect with the original results, and also to Display XYEvents to create a map layer of the results. </p>
<p>The script runs by default in using http requests but, like all mapserv api methods, can be modified to send request via https. Users can view/edit the python code associated with the geocoding toolbox by right clicking on the script and selecting 'Edit'.</p>
<p><a href="{{ "/downloads/geocodetoolbox.png" | prepend: site.baseurl }}"><img src="{{ "/images/geocodetoolbox.png" | prepend: site.baseurl }}" alt="" title="geocodetoolbox" width="600" height="345" class="aligncenter size-full wp-image-14332" /></a></p>
