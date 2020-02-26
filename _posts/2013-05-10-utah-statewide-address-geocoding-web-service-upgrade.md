---
author:
  display_name: Bert Granberg
  email: agrc@utah.gov
tags:
  - address
  - api
  - locator
  - web service
date: 2013-05-10 14:22:13 -0600
title: Utah Statewide Address Geocoding Web Service Upgrade
categories:
  - Featured
  - SGID Blog
---
<p>
  <a href="{% link images/Geocode.png %}">
    <img src="{% link images/Geocode-300x223.png %}" alt="geocoding image" title="api.mapserv.utah.gov address locator" class="inline-text-left" />
  </a> Last week, AGRC finished a substantial upgrade to the Utah statewide address locator (geocoding) web service. This service utilizes point and road-based address map reference data compiled into the State Geographic Information Database (SGID) from local sources, and published on a bi-monthly basis.</p>
  <p>The publicly accessible geocoding service allows developers to include 'best effort' Utah address finding functionality into web applications at no cost.</p>
  <p>Just as important, this service enables database administrators to build processes that allow any database containing information tied to an address to pick up geographic coordinates so that information can be easily integrated and viewed on mapping platforms. </p>
  <p>The link below demonstrates just one of the many ways RESTful requests can be used to get coordinates for Utah addresses via http:</p>
  <ul class="dotless">
    <li><a href="https://api.mapserv.utah.gov/api/v1/Geocode/50%20W%20Capitol%20St/fillmore?spatialReference=4326&apikey=AGRC-CAAF88F2268506">https://api.mapserv.utah.gov/api/v1/Geocode/50 W Capitol St/fillmore</a></li>
  </ul>
  <p>Documentation for the service is integrated into a test/demo interface at <a href="https://api.mapserv.utah.gov">https://api.mapserv.utah.gov</a>. Registration information and api key access for desktop and web application users, and, metric/tracking for registered api keys can be accessed from the same site. A <a href="{% link _posts/2013-04-02-using-the-mapserv-utah-gov-api-to-geocode-address.md %}">previous post</a> provided a python sample script for bulk geocoding from arcgis-supported tabular file formats but could easily be modified to remove the arcpy dependency (which requires an esri ArcMap desktop license) for reading in the address table.</p>
  <p>The upgrades were funded by a partnership between the Department of Public Safety's Division of Highway Safety and the UDOT Traffic and Safety Division. AGRC will assist these agencies in using the new API to enhance mapping of crashes, citations, and other safety-related events.</p>
  <p>The updates are perhaps most easily described by the short series of Need/Solution statements below.</p>
  <h5>Need: Search Zones - Zipcodes and Place Names</h5>
  <p><strong><em>Solution:</em> </strong>Street addresses, like 120 S Main St, are obviously not unique across the entire state without additional information describing place. This makes a search zone required to locate an address within the desired area. Search zones can be a city/community name or a zip code. Often, the zip code or city information associated with a street addresses is either incorrect or unknown. With the exception of one's home and workplace, zip code and city boundaries are not well known and are not visible to data gatherers out in the physical world.</p>
  <p>Address system boundaries are actually more readily understood and are the real 'parent' objects of all assigned street addresses. The new geocoding api uses address system boundaries as the backend search zones and any zip code or community name within that address system can be used as a surrogate for that address system zone.  In other words, if you are looking to find an address within the Salt Lake County-wide address area, you can supply any zip code or community name within the Salt Lake County grid and the returned match location will also provide the correct zip code information. The correct city information can be found by using the Boundaries.Municipalities as parameters within the Attribute Search web service.</p>
  <p>Additionally, where County address assignment systems are used for unincorporated areas but addresses are supplied using the nearest city placename, the city address grid will be searched first and if no suitable match is found, the county address system will be searched as a secondary attempt to find a match location. This is especially useful in areas like northern Utah County where the addressing system changes on a block by block basis (for example from Lehi to Provo-based County grid and back) in some areas.</p>
  <h5>Need: Address Point or Street Centerline Match?</h5>
  <p><strong><em>Solution:</em> </strong>The new api release allows a preference to be stated for a match from the address point or the road centerline-based address reference data. The default is to first try for an address match, then if none is found, to try against the road centerlines. Voter addresses (address pt) and crash addresses (road) are examples of where an application area is likely to have a strongly preferred match dataset.</p>
  <h5>Need: Numeric Street Name 'Reversals'</h5>
  <p><strong><em>Solution:</em> </strong>With Utah's somewhat unique distinct 'numeric/directional' street names (600 West), occasionally residents will provide a 'coordinate pair' address that does not properly order the house number and street name address components. </p>
  <p>Where needed, the new api will switch the address components in an input address like '800 E 1237 N' to 1237 N 800 E before trying to find a match.</p>
  <h5>Need: Place Name Abbreviations</h5>
  <p><strong><em>Solution:</em> </strong> Placename abbreviations are often used and are not done so uniformly. The previous version of the api required the use of a standardized placename (we were using the placenames from the state highway map).</p>
  <p>The new api references a lookup table containing many common abbreviations like SLC, SALT LAKE, S JORDAN, WVC, HEBER, HEBER CITY, ST GEORGE, SAINT GEORGE, ST. GEORGE, etc)</p>
  <h5>Need: Support for common coordinate systems.</h5>
  <p><strong><em>Solution:</em> </strong> The new API uses an optional input parameter to set the spatial reference system of the output geographic coordinates (lat/long, utm, state plane, web mercator, etc)</p>
  <h5>Need: Finding locations specified by highway route and milepost.</h5>
  <p><strong><em>Solution:</em> </strong> A new, specific REST-based method has been added for finding Route and Milepost locations. It is described and testable within the Geocoding section of the api documentation and includes the option to set the side for all sections of highway defined by UDOT as divided.</p>
  <h5>Other key upgrades:</h5>
  <ul>
    <li>Addresses with delivery point ("dropoff") zip codes (such as 84190, 84114, 84148) are supported.
    <li>Requests can specify the minimum match score and the number of additional candidates locations to return.
    <li>Requests can specify the structure/format of the returned locational information : esriJSON, geoJSON, etc.
    <li>Instantaneous and periodic usage statistics can be viewed by the services' administrators.
  </ul>
