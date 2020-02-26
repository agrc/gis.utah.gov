---
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
tags: []
date: 2013-07-15 11:31:37 -0600
title: AGRC Web Mapping Services Demo
categories:
  - Developer
---
<p>AGRC offers a variety of mapping-related web services that make it easy to add authoritative Utah web maps to your applications. The two most popular are our <a href="{% link data/base-map-and-imagery/index.md %}">base maps</a> and <a href="https://api.mapserv.utah.gov/#geocoding">geocoding service</a>. These web services, together with a custom map service that shows your own agency/business-specific data, can add great geographic context to your web applications.</p>
<p>This post will show you how simple it is to leverage AGRC's services with JavaScript. We will develop a simple web app that contains a dynamic map and simple address finding controls. Please note that we've added a simple glossary of terms at the bottom of this page.</p>
<h2 id="esri-javascript-api">ESRI JavaScript API</h2>
<p>The first thing to do is create a simple <code>.html</code> page and import <a href="https://developers.arcgis.com/en/javascript/">ESRI's ArcGIS API for JavaScript</a>. You can load their API by a CSS file:</p>

```html
<link rel="stylesheet" href="https://serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/esri/css/esri.css">
```
<p>and a script file: </p>
```html
<script src="https://serverapi.arcgisonline.com/jsapi/arcgis/3.5/"></script>
```

<p>This will load all necessary dependencies including <a href="https://developers.arcgis.com/en/javascript/jshelp/inside_dojo.html">Dojo</a> into your application. Dojo is a widely used javascript library containing commonly used functionality for cross-browser compatible user interface presentation and management. Because it's built on top of Dojo, ESRI's API also employs the new <a href="https://en.wikipedia.org/wiki/Asynchronous_module_definition">Asynchronous Module Definition (AMD)</a> standard for loading external JavaScript libraries. With both Dojo and ESRI development teams using AMD, it is highly recommended that you also use the AMD loading syntax, as this should maximize the life-expectancy for the map-service consuming code that you write. All code examples in this post will be using the new AMD syntax. If you are unfamiliar with AMD you may want to check out <a href="https://dojotoolkit.org/documentation/tutorials/1.9/modules/">Dojo's excellent tutorial</a> on the subject.</p>
<h2 id="base-maps">Base Maps</h2>
<p>AGRC provides <a href="{% link data/base-map-and-imagery/index.md %}">seven high-quality, pre-rendered base map services</a>. These services are published through ESRI's <a href="https://www.esri.com/software/arcgis/arcgisserver">ArcGIS Server software</a>. The service directory end points can be found here: </p>
<ul>
<li><a href="https://mapserv.utah.gov/arcgis/rest/services/BaseMaps">https://mapserv.utah.gov/arcgis/rest/services/BaseMaps</a></li>
</ul>
<p>Adding one of these services to a map is relatively easy. First, we need to import a few ESRI modules. Then create a new map and tiled layer. Finally, we add the newly created layer to the map. Here's what the code looks like:</p>
<p><script src="https://gist.github.com/stdavis/5979421.js"></script></p>
<h2 id="geocoding-address-matching">Geocoding (Address Matching)</h2>
<p>To <a href="https://en.wikipedia.org/wiki/Geocoding">geocode</a> an address means to find it's corresponding geographic coordinates (think latitude and longitude). AGRC provides a highly authoritative service for geocoding addresses which is regularly updated from <a href="{% link data/transportation/index.html %}">road centerline</a> and <a href="{% link data/address/index.html %}">address point data</a> available to AGRC through its local government partners across the state. In addition, the service has been optimized for the State of Utah's somewhat unique placename and addressing system conventions.</p>
<p>Before you can use any of AGRC's web API services you will need to create an account and an API key for your domain. Check out the <a href="https://developer.mapserv.utah.gov/StartupGuide">Getting Started Guide</a> for more information. Once you have a key you can start using services such as <a href="https://api.mapserv.utah.gov/#geocoding">geocoding</a>. Here's an example of a typical geocoding request that finds coordinates for 123 S Main St, SLC:</p>
<ul>
<li><a href="https://api.mapserv.utah.gov/api/v1/geocode/123%20S%20Main%20St/Salt%20Lake%20City?spatialReference=4326&amp;apiKey=AGRC-CAAF88F2268506">https://api.mapserv.utah.gov/api/v1/geocode/123%20S%20Main%20St/Salt%20Lake%20City?spatialReference=4326&amp;apiKey=AGRC-CAAF88F2268506</a></li>
</ul>
<p>There are samples of how to use this service in several popular languages in our <a href="https://github.com/agrc/GeocodingSample">GeocodingSample GitHub repository</a>.</p>
<p>Perhaps the easiest way for you to use this service is to use the <code>FindAddress</code> widget in our <a href="https://github.com/agrc/agrc.widgets">AGRC Dojo Widget Library</a>. You can do this by adding a config object to your <code>require</code> call that defines an <code>agrc</code> package and its location. Here we have it pointing at the 'agrc' package on our CDN resource:</p>
<p><script src="https://gist.github.com/stdavis/5985759.js"></script></p>
<p>Once we have defined our <code>agrc</code> package, we can import modules just like any other package. This example shows how to import the <code>FindAddress</code> widget and initializing it with our <code>map</code> object and our <a href="https://api.mapserv.utah.gov/">AGRC Web API</a> key:</p>
<p><script src="https://gist.github.com/stdavis/2ba58254c56fee72373bf016461547d4.js"></script></p>
<h2 id="custom-data-overlays">Custom Data Overlays</h2>
<p>The next step in our demo will be to add a data overlay on top of the base map. To do this you need to have access to a map web service, that points at your own data on a server and makes it accessible to web-based map requests. This is most commonly done using ESRI's <a href="https://www.esri.com/software/arcgis/arcgisserver">ArcGIS Server</a> or similar software or via cloud-hosted data and services platform such as <a href="https://www.arcgis.com/features/">ArcGIS Online</a>. If you do not have access to this software, you may want to <a href="{% link about/contact/index.html %}">contact</a> us about getting a service set up on our servers for you. For this demo we will use a service that we host that shows the Utah Division of Fleet Operations' vehicle refueling sites around the state. The endpoint for this service is here:</p>
<ul>
<li><a href="https://mapserv.utah.gov/arcgis/rest/services/UtahDFOFuelSites/MapServer">https://mapserv.utah.gov/arcgis/rest/services/UtahDFOFuelSites/MapServer</a>.</li>
</ul>
<p>To add this map service to our map we need to import the <code>esri/layers/ArcGISDynamicMapServiceLayer</code> module and create a new layer using the url to the service. Then we can add it to the map. Here's what it looks like:</p>
<p><script src="https://gist.github.com/stdavis/6b42bfd619927f43ff54e0cd34d8540a.js"></script></p>
<h2>Spatial Queries</h2>
<p>
Another useful AGRC web API service is the ability to search for geographic features in any of the datasets in the SGID. This functionality is found in the Search service. You can check out the <a href="https://api.mapserv.utah.gov/#search">api docs for an example request and response</a>. We will use this service to display a message that tells us what city we are in when we click on the map. Within the map's click event we pass the coordinates from the map click event to the search service along with the feature class name (SGID10.BOUNDARIES.Municipalities) and the field name (NAME).  Then when the service returns, we populate the page with the data. Here's what it looks like:</p>
<p data-height="304" data-theme-id="0" data-slug-hash="QBxGPX" data-default-tab="js,result" data-user="stdavis" data-pen-title="QBxGPX" class="codepen">See the Pen <a href="https://codepen.io/stdavis/pen/QBxGPX/">QBxGPX</a> by Scott Davis (<a href="https://codepen.io/stdavis">@stdavis</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<p>
Please note that the <a href="https://api.mapserv.utah.gov/#info">api has services for accessing schema information for SGID database server content</a>. Feature class (map data layer) names are available by category (<a href="https://api.mapserv.utah.gov/api/v1/info/FeatureClassNames?sgidCategory=Political&sgidVersion=10&apikey=AGRC-CAAF88F2268506">example request for feature classes in Political category</a>). With a feature class name and category, the names of the fields/columns can be accessed via the Feature Class Attribute Names service (<a href="https://api.mapserv.utah.gov/api/v1/info/FieldNames/Municipalities?category=Boundaries&sgidVersion=10&apikey=AGRC-CAAF88F2268506">example for Municipalities feature class</a>).</p>
<h2 id="wrap-up">Wrap-up</h2>
<p>This is just a small sampling of what AGRC has to offer in terms of web mapping services. If you are interested in an advanced example of one of our web applications you can check out our <a href="https://github.com/agrc/AGRCJavaScriptProjectBoilerPlate">AGRCJavaScriptBoilerPlate</a>. A <a href="https://video.esri.com/watch/2326/how-i-work-utah-agrc-javascript-boilerplate-project-tour">presentation</a> detailing how this sample was engineered was given at the ESRI Dev Summit in March 2013.</p>
<style>
/* override wordpress yellow background */<br />
.highlight {<br />
   background-color: transparent !important;<br />
}<br />
code {<br />
    display: inline-block;<br />
    margin-bottom: 0;<br />
}<br />
iframe {<br />
    height: 450px !important;<br />
    border: none !important;<br />
}<br />
</style>
