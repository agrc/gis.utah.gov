# Spatial React Components

## Monorepo Tour

[AGRC Kitchen Sink](https://github.com/agrc-widgets/kitchen-sink)

- [Lerna](https://lerna.js.org/)
  - independently versioned
  - [npm publishing](https://www.npmjs.com/org/agrc)
    - pre-releases
    - commonjs - babel
  - [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) changelog generation
  - package linking (file size)
  - shared tooling

- [Storybook](https://storybook.js.org/)
  - [storybook docs](https://storybook.js.org/docs/react/writing-docs/build-documentation)

## Front-end Spatial Landscape

Google Maps is to Google as ESRI is to AGRC

- [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/)
  - started as a dojo framework
  - beta published as ESM modules
  - full spatial capabilities not limited to what AGRC can offer

## AGRC Components and Demo

Customers ask us to build apps with a lot of similar features. We built these components to make our lives easier.

What spatial requests do you commonly get requests for?

Hosted on npm (e.g. `npm install @agrc/sherlock`)

### @agrc/sherlock

Sherlock is a type ahead searching component to find and highlight geographic places on a map

- [demo](https://atlas.utah.gov/) - "Find City"
- [Bootstrap](https://getbootstrap.com) by default
- Providers
  - [AGRC Web API](https://api.mapserv.utah.gov)
    - Search endpoint
  - Esri Feature Service
  - Custom Provider
    - Using `ProviderBase` class

### @agrc/dart-board

Dartboard is a geolocation custom hook that can return coordinates for a street address or route/milepost

- [AGRC Web API](https://api.mapserv.utah.gov)
  - Geocoding endpoint
  - Milepost endpoint
- [Render Props](https://reactjs.org/docs/render-props.html)

### @agrc/layer-selector

Layer selector creates and manages base maps and reference data for a map

- [discover](https://gis.utah.gov/discover)
  - quad word
  - Open Standard (WMTS)
- [AGRC Open Data](https://opendata.gis.utah.gov)

## Project Template

- [Atlas](https://atlas.utah.gov) ([GitHub](https://github.com/agrc/atlas))

## Discussion

- What components do you expect from us?
- What is missing from your component library?
- How can we improve our components to make them easier for you to use?
