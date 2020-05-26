---
tags:
  - discover
  - google
  - imagery
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
date: 2015-02-09 08:00:09 -0700
title: Discover Server Resources and Information
categories: []
---

## <i class="fas fa-fw fa-plane"></i> Discover Server
{: .text-left}

Discover provides high-performance imagery and base maps services in WMS and WMTS formats. For information about the services and directions to sign up, please see the main [Discover]({% link discover/index.html %}) page.

- For imagery downloads visit the [aerial photography data page]({% link data/aerial-photography/index.html %}).
- Instructions on how to [use the Discover services in Pro/ArcMap](#adding-a-wmts-or-wms-service-to-esri-products).
- Instructions on how to [use the Discover services in CAD](#adding-a-wms-service-to-cad).
- Instructions on how to [use the Discover services in Web Maps]({% link developer/base-maps/discover/index.md %}).

### Coordinate System and Datum
{: .text-left}

The native coordinate system for the Discover services is Web Mercator with a WGS 1984 datum (EPSG 3857). Many users work in coordinate systems with a different datum (for example, EPSG 3566: Utah Central with NAD 1983). Users who need the highest locational precision must use the appropriate [geographic transformation conversion]({% link images/Transformation.png %}) to remedy the roughly one meter difference between the WGS84 and NAD83 datums' “realization points.” AGRC uses the `NAD_1983_To_WGS_1984_5` transformation when creating base map tiles and web applications, but **there may be more accurate transformations based on the data and area you are working with**. The default (no transformation specified) will likely introduce several feet of horizontal positional error. More information about these transformations can be found on ESRI's [NAD 1983 To WGS 1984](https://support.esri.com/en/knowledgebase/techarticles/detail/24159) How-To.

ArcGIS Pro seems to load an appropriate transformation, but you may need to set the transformation in ArcMap or other software.

### Horizontal Positional Accuracy
{: .text-left}

Stated horizontal accuracy of the `Google` imagery is expected to achieve or exceed one meter (CE90) in most areas without significant vertical relief. You can generally expect higher precision in urban areas where existing supplemental ground control was more abundant.

The 15cm and 30cm `Hexagon` imagery have stated horizontal accuracies of 1.07 and 2.6 meters (CE90), respectively.

The pre-2018 `NAIP` layers have a stated horizontal positional accuracy of 5 meters, while the `2018 NAIP` products have a horizontal positional accuracy of 4 meters.

### Adding a WMTS or WMS Service to ESRI Products
{: .text-left}

**ArcGIS Pro 2.x:**

1. `Insert -> Connections -> New WMTS Server`
1. Paste the `WMTS` link [you have been provided]({% link discover/index.html %}#connect "view Discover sign up information") into the `Server URL:` line and click `OK`
1. Navigate to the newly added `utah imagery - WMTS on discover.agrc.utah.gov.wmts` connection under `Servers` in the Catalog window.
1. Expand the nodes until you see a list of all of the imagery and base map services that are available to your login. The full list can be viewed on the main [Discover]({% link discover/index.html %}#services) page.
1. Add your desired service to your map like you would any other layer.

**ArcMap 10.x**

1. `Add Data`, select `GIS Server` from the `Look in:` dropdown list, and double-click `Add WMTS server`
1. Paste the `WMTS` link [you have been provided]({% link discover/index.html %}#connect "view Discover sign up information") into the `URL:` line and click `OK` (don't worry about Parameters, Server Layers, or Username/Password)
1. Navigate to the newly added `utah imagery – WMTS on discover.agrc.utah.gov` connection and **double click** to connect.

   - You can rename the connection after it has been added

1. Expand the nodes until you see a list of all of the imagery and base map services that are available to your login. The list can be viewed on the main [Discover]({% link discover/index.html %}#services) page.
1. Add your desired service to your map like you would any other layer.

### Adding a WMTS or WMS Service to a Web Map
{: .text-left}

{%capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.discover text='send an email to' hide-punctuation=true %}{% endcapture %}

Interested in using AGRC's Web Mercator services in your web maps? Take a look at [this page]({% link developer/base-maps/discover/index.md %}) for more information. **Remember, if the web map is going to be public facing you need to request a separate quad-work link**. To do this {{ contact }} and provide your web map URL domains.

### Adding a WMS Service to CAD
{: .text-left}

- **Bentley Microstation** users should take a look at the [How To document]({% link downloads/MicroStationGoogleWMS_HowTo.pdf %}).
- **AutoCAD Civil 3D** users should take a look at the [How To document](https://knowledge.autodesk.com/support/autocad-map-3d/learn-explore/caas/CloudHelp/cloudhelp/2017/ENU/MAP3D-Use/files/GUID-A9F620AD-6B9A-487D-9B33-7D365307D571-htm.html).

### Adding a WMTS Service to QGIS
{: .text-left}

1. Add a new "WMS/WMTS" connection and paste in the URL to the discover WMTS service.

Read this [blog post]({% link _posts/2015-01-20-how-to-use-agrc-base-maps-in-qgis.md %}) for more details.

### Printing Web Maps with Discover Services
{: .text-left}

Take a look at this blog post for information about [Printing Web Maps with Discover Services]({% link _posts/2017-02-02-printing-web-maps-with-discover-services.md %}).

### Google Archive Services
{: .text-left}

<i class="fas fa-fw fa-lock"></i>
In addition to the statewide `Google` imagery service layer, there are archive layers available (ex. `Google 2011archive`) of the Google imagery organized by year collected.

### Licensed Imagery Flight Dates
{: .text-left}

<i class="fas fa-fw fa-lock"></i>
The flight dates of each Hexagon imagery flight line are in the `SGID.INDICES.Hexagon_ServiceDates` SGID layer. This layer is also available on our [Open Data site](https://opendata.gis.utah.gov/datasets/utah-hexagon-service-dates), where you can get a link to the web service or download it in the format of your choice.

<i class="fas fa-fw fa-lock"></i>
Similarly, the dates of each Google imagery flight block are stored in the `SGID.INDICES.Google_UtahServiceDates` SGID layer available on [Open Data](https://opendata.gis.utah.gov/datasets/utah-google-flight-blocks).

### Pro/ArcMap User Considerations
{: .text-left}

{%capture contact2 %}{% include contact.html subject=page.title contact=site.data.contacts.discover text='please contact' %}{% endcapture %}

Legacy username/password users: If you have not yet received quad-word links to the service (ex. `https://discover.agrc.utah.gov/login/path/your-unique-quad-word/`) that do not require a username and password, {{ contact2 }}

Users experiencing problems with the service, such as blurry tiles or different year vintages at different scales, may need to clear their local cache:

- **ArcMap** Go to the service’s `Layer Properties -> Cache` tab and selecting `Clear Local Cache Now`. Be patient as this could take several minutes. If the blurry tiles persist you have the options to `Clear cache when the session ends` or `Don't cache any data locally`. Another option is to completely clear your ArcMap cache by going to `Customize -> ArcMap Options -> Display Cache -> Clear Cache`.

- **ArcGIS Pro** Go to the service’s `Layer Properties -> Cache` tab and selecting `Clear Cache`. You can also clear your entire Pro cache by going to the Pro project's `Options -> Display` and check `Clear cache` and selecting `OK`.

**ArcMap 10 and 10.1 users** should use WMS instead of WMTS. ArcMap 10 and below do not support WMTS, and ArcMap 10.1 [has issues](https://community.esri.com/thread/58788) rendering WMTS data.

### Usage Tracking
{: .text-left}

Individual organizations will be provided URL links for the Discover services that are unique to their organization. This will allow us to track general usage metrics and monitor the performance of the services. Do not distribute your URL links outside of your organization or division.

### Citation and Logos
{: .text-left}

<i class="fas fa-fw fa-lock"></i>
As part of our licenses with Google and Hexagon, you must provide proper attribution of any products created with their imagery.

- **Hexagon** requires the following attribution on any products made using the Hexagon imagery (15/30cm imagery 2018 and later):

    `© 2020 HxGN Content Program, Hexagon`

- **Google** requires you to put the appropriate logo [(zipfile)]({% link downloads/google_logos.zip %}) on any products made using the Google imagery (6" imagery earlier than 2018):

    ![white transparent]({% link images/ImageryCGoogle_WhiteTransparent.png %})
    ![white on black]({% link images/ImageryCGoogle_WhiteOnBlack.png %})

For products that use the AGRC-produced basemaps, please include a short attribution that complies with the main [AGRC Data License and Disclaimer]({% link about/policy/license-disclaimer/index.md %}) guidelines.

### Requests for On-Premise Use
{: .text-left}

{%capture contact3 %}{% include contact.html subject=page.title contact=site.data.contacts.discover text='Please provide the following information to' hide-punctuation=true %}{% endcapture %}

You may request a local copy of the NAIP, HRO, Hexagon, and Google imagery for off-line consumption when the provided imagery service does not meet your needs. {{ contact3 }} for consideration:

- Name & organization
- Reason for request
- Working on behalf of (for licensed Hexagon/Google imagery)
- Project names
- Project locations

### Layers Not Exporting When Using WMS
{: .text-left}

If you are using a WMS connection, you may find that the Discover layer does not show up when you export or print your map. This is due to a technical limitation of the WMS protocol. The only fixes are to use WMTS, export at a lower resolution, or use a local copy (for aerial imagery).

**Background**

In WMS, the client (ArcMap, a browser, etc) requests a map of a specific extent and resolution. The server creates a single image matching the request and returns it to the client—a 8.5" x 11" image at 100 dpi would be 850 x 1,100 pixels (just shy of one megapixel). Every time the user pans or zooms, the server creates and sends a completely new image, which consumes server processing power and bandwidth. To maintain performance for all users, WMS servers will not create and return an image if its dimensions exceed a certain size.

Applications like ArcMap and web browsers have a relatively small window and use a resolution of 96 dpi, resulting in requests that fit within the server's allowed size. However, exporting a 20" x 30" map at 300 dpi results in a 6,000 x 9,000 pixel (54 megapixel) image. This far exceeds the server's limit, so it does not return an image. ArcMap dutifully finishes exporting the map instead of raising an error, resulting in a map without the layer. You can try changing the Output Image Quality (Resample Ratio) setting to reduce the requested resolution, but the output quality will suffer.

In contrast, WMTS works by delivering a set of fixed-dimension tiles at the requested zoom level that cover the requested extent. Because the tiles are pre-rendered, all the server has to do is figure out which tiles to send and then send them—and this is sped up by the client caching previously received tiles and only requesting ones it hasn't seen yet. This allows WMTS to quickly serve up tiles for much larger and/or more detailed maps than WMS without clogging the server.

### Other Tidbits
{: .text-left}

- We suggest that you occasionally refresh the connection to the imagery services by right-clicking your service connection in ArcCatalog or ArcMap's Catalog Viewer and selecting the `Refresh` button to see the latest list of available services.
- Since the Google acquisition flight blocks are not done all at once (as opposed to the NAIP products, which cover the whole state for every acquisition), there will be distinct color and positional changes at flight block boundaries. For large area maps, the color-balanced NAIP may be a more aesthetically pleasing cartographic choice.
- AGRC has downloaded a statewide master set of the image files for redistribution, as the download process directly from the Google Cloud Platform incurs transactional costs for cloud server & bandwidth usage.
- AGRC has a [feedback reporting form](https://docs.google.com/a/utah.gov/forms/d/1UGU77SPM_HX0r8zblIs05C-H5mLyRja1gRT7Fu4aKZk/viewform?fbzx=-6743712545663240221) for imagery users around the state to report imagery and service issues so they can be passed along to the imagery producers. Please submit your feedback through this form.
