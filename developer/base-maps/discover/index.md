---
title: Using Discover Base Maps in your Web Applications
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
tags:
  - discover
  - web services
categories:
  - Developer
date: 2020-04-09 00:00:00
---

Base map services hosted on discover.utah.gov are delivered via [WMTS](https://en.wikipedia.org/wiki/Web_Map_Tile_Service). WMTS is an [OGC](https://www.ogc.org/) standard for delivering tiled map data. The [Esri JavaScript API](https://developers.arcgis.com/javascript/) provides a class for consuming with these services called a [WebTileLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WebTileLayer.html). Using this class is as simple as passing in the URL to the WMTS service with the appropriate level, column and row tokens. For example:

```javascript
require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/WebTileLayer"
], function (Map, MapView, WebTileLayer) {
  const map = new Map();

  const layer = new WebTileLayer({
    urlTemplate:
      "https://discover.agrc.utah.gov/login/path/dragon-visitor-honey-perfume/tiles/lite_basemap/{level}/{col}/{row}"
  });

  map.add(layer);

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-111.5, 40],
    zoom: 11
  });
});
```

You’ll notice that the URL to the service includes a quad word that is unique to your organization and project. If you don’t have an account set up or a quad word, you can [register on our website]({% link discover/license/index.md %}) to get started. **If you are planning on putting your quad word into a website or somewhere that it is publicly accessible, you will need to {% include contact.html subject=page.title contact=site.data.contacts.discover hide-punctuation=true text='contact' %} to receive a special quad word for licensing reasons.**

There is one caveat to using discover services with WebTileLayer; it does not store metadata about the service. The piece of metadata that will affect developers the most is the cache level information. WebTileLayer's cache levels are based on a suggested set that is common amongst popular tile providers. The suggested set uses 0 through 19. If the tile set you are using deviates from these levels, you will be responsible for setting those values or you will not be given the UI to see the full tile set. As you can see in the sample below it takes a fair amount of work.

```javascript
require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/WebTileLayer",
  "esri/layers/support/LOD",
  "esri/layers/support/TileInfo"
], function (Map, MapView, WebTileLayer, LOD, TileInfo) {
  const tilesize = 256;
  const earthCircumference = 40075016.685568;
  const inchesPerMeter = 39.37;
  const initialResolution = earthCircumference / tilesize;

  const dpi = 96;
  const maxLevel = 12;
  const squared = 2;
  const lods = [];
  for (let level = 0; level <= maxLevel; level++) {
    const resolution = initialResolution / Math.pow(squared, level);
    const scale = resolution * dpi * inchesPerMeter;
    lods.push(
      new LOD({
        level: level,
        scale: scale,
        resolution: resolution
      })
    );
  }

  const tileInfo = {
    dpi: dpi,
    size: tilesize,
    origin: {
      x: -20037508.342787,
      y: 20037508.342787
    },
    spatialReference: {
      wkid: 3857
    },
    lods: lods
  };
  const map = new Map();

  const layer = new WebTileLayer({
    urlTemplate:
      "https://discover.agrc.utah.gov/login/path/your-quad-word-here/tiles/lite_basemap/{level}/{col}/{row}",
    tileInfo
  });

  map.add(layer);

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-111.5, 40],
    zoom: 11
  });
});
```

AGRC has a widget called [layer-selector](https://github.com/agrc-widgets/layer-selector) that handles these issues as well as makes working with basemaps more streamlined. It’s main purpose is to provide users the ability to quickly switch between basemaps and toggle associated overlays.
