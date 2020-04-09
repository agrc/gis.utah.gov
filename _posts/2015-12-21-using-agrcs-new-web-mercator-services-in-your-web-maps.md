---
author:
  display_name: Scott Davis and Steve Gourley
  email: stdavis@utah.gov
tags:
  - aerial imagery
  - google imagery
  - hybrid
  - web mercator
date: 2015-12-21 08:58:29 -0700
title: Using AGRC's new Web Mercator Services in Your Web Maps
categories:
  - Developer
  - Featured
---
<p class="pop text-center">
  <strong>Note:</strong> Please go to <a href="{% link developer/base-maps/discover/index.md %}">this page</a> for more updated information on using Discover services with the Esri JavaScript API v4.x.
</p>

<p>Recently, AGRC, in conjunction with DNR, hosted an <a href="https://www.youtube.com/watch?v=Wch2M2rBJhU">open house</a> discussing AGRC’s basemap and imagery strategies. During this open house, AGRC discussed details of new web mercator (WGS84) basemaps as the default presentation layer moving forward. Most of the UTM basemaps have been converted to web mercator and are hosted and served through discover.agrc.utah.gov. <strong>The plan is to sunset the UTM basemaps at the end of 2016.</strong></p>
<p>While upgrading the UTM basemaps to web mercator, AGRC decided to modify the map services offered. Based on usage analytics and user feedback, the hillshade and vector basemap were removed. The Hybrid service was replaced by combining the Google imagery service and a new overlay service (a long-requested feature allowing users to “sandwich” their data within the basemap). The Lite, Terrain and Topo basemaps were converted with no changes. Finally, there is a new Color Infrared service derived from the 2011 NAIP.</p>
<p class="text-center">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/Wch2M2rBJhU" frameborder="0" allowfullscreen></iframe>
</p>
<p>The new services are delivered via <a href="https://en.wikipedia.org/wiki/Web_Map_Tile_Service">WMTS</a>. WMTS is an OGC standard for delivering tiled map data. The Esri JavaScript API provides a class for consuming with these services called a <a href="https://developers.arcgis.com/javascript/jsapi/webtiledlayer-amd.html">WebTiledLayer</a>. Using this class is as simple as passing in the URL to the WMTS service with the appropriate level, column and row tokens. For example:</p>
<p><script src="https://gist.github.com/stdavis/67de602cd095dd3fcf3c.js"></script></p>
<p>You’ll notice that the URL to the service includes a quad word that is unique to your organization and project. If you don’t have an account set up or a quad word, you can <a href="{% link discover/license/index.md %}">register on our website</a> to get started.<strong> If you are planning on putting your quad word into a website or somewhere that it is publicly accessible, you will need to {% include contact.html subject=page.title contact=site.data.contacts.discover hide-punctuation=true text='contact' %} to receive a special quad word for licensing reasons.</strong> </p>
<p>All of our base maps are cached from levels 5 through 19 with the exception of Topo which is cached to level 17. The Google imagery service has an additional level, 20, to allow users to take full advantage of the high resolution (6” pixels). You can see a table of min and max zoom levels on the <a href="https://discover.agrc.utah.gov/layer">discover.agrc.utah.gov website</a>. This can create problems when using the Esri JavaScript API <a href="https://developers.arcgis.com/javascript/jsapi/map-amd.html">map class</a>. The map sets the zoom levels based on the first layer that is added to it. For example, if a service is added to the map that is cached to level 19 and then the Google imagery service is added, the map will not allow you to zoom into level 20. </p>
<p>WebTiledLayer and WMTS integrate together slightly different than  <a href="https://developers.arcgis.com/javascript/jsapi/arcgistiledmapservicelayer-amd.html">ArcGISTiledMapServiceLayer</a> and ArcGIS Server cached map services. The main caveat being ArcGIS services store metadata about the service that WebTiledLayers do not. The piece of metadata that will affect developers the most is the cache level information. WebTiledLayers cache levels are based on a suggested set that is common amongst popular tile providers. The suggested set uses 0 through 19. If the tile set you are using deviates from these levels, you will be responsible for setting those values or you will not be given the UI to see the full tile set. As you can see in the sample below it takes a fair amount of work.</p>
<p><script src="https://gist.github.com/stdavis/6e5c721d50401ddbf126.js"></script></p>
<p>AGRC has a new widget called the <a href="https://github.com/agrc-widgets/layer-selector">layer-selector</a> that handles these issues as well as makes working with basemaps more streamlined. It’s main purpose is to provide users the ability to quickly switch between basemaps and toggle associated overlays.</p>
<link rel="stylesheet" href="https://js.arcgis.com/3.15/esri/css/esri.css">
<script src="https://js.arcgis.com/3.15/"></script>
<link rel='stylesheet' href='https://mapserv.utah.gov/cdn/blog_support/web-mercator-services/resources/LayerSelector.css'>
<div id='mapDiv' style='border: 1px solid #ddd;'></div>
<script type="javascript">
require({
    packages: [{
        name: 'layer-selector',
        location: 'https://mapserv.utah.gov/cdn/blog_support/web-mercator-services'
    }]
},[
    'layer-selector',
    'esri/geometry/Extent',
    'esri/map',
    'dojo/domReady!'
], function(LayerSelector, Extent, Map) {
    var map = new Map('mapDiv', {
        center: [-112, 41.5],
        zoom: 12,
        smartNavigation: false
    });
    map.on('load', function () {
        map.disableScrollWheelZoom();
    });
    var layerSelector = new LayerSelector({
        map: map,
        quadWord: 'bottle-apple-crater-oberon',
        baseLayers: [
            'Imagery',
            { token: 'Hybrid', selected: true },
            'Topo',
            'Terrain',
            'Color IR'
        ],
        overlays: ['Overlay']
    });
    layerSelector.startup();
});
</script>
<p>Basemaps and overlays can be defined by passing in layer factories that define a constructor and parameters.</p>
<p><script src="https://gist.github.com/stdavis/b8582911f12e45bfb873.js"></script></p>
<p>Alternatively, developers can pass in their discover.agrc.utah.gov quad word and simple token strings that are associated with each of the AGRC basemaps. This greatly simplifies the amount of code required.</p>
<p><script src="https://gist.github.com/stdavis/4d9f5134d852615db004.js"></script></p>
<p>We hope that this new widget will help ease your transition to the new web mercator services. The layer selector <a href="https://github.com/agrc-widgets/layer-selector">code</a> is on Github and is registered on <a href="https://bower.io/search/?q=agrc-layer-selector">bower</a> as "agrc-layer-selector". More <a href="https://github.com/agrc-widgets/layer-selector/blob/master/doc/Readme.md">documentation</a> and <a href="https://github.com/agrc-widgets/layer-selector/tree/master/tests">examples</a> can be found in the repository. If you run into any trouble please use the <a href="https://github.com/agrc-widgets/layer-selector/issues">issue tracker</a>.</p>
