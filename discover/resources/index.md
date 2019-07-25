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

Discover provides high-performance imagery and base maps services in WMS and WMTS formats. For information about the services and directions to sign up, please see the main [Discover]({{ "/discover/" | prepend: site.baseurl }}) page.

- For imagery downloads visit the [aerial photography data page]({{ "/data/aerial-photography/" | prepend: site.baseurl }}).
- Instructions on how to [use the Discover services in Pro/ArcMap](#adding-a-wmts-or-wms-service-to-esri-products).
- Instructions on how to [use the Discover services in CAD](#adding-a-wms-service-to-cad).
- Instructions on how to [use the Discover services in Web Maps]({{site.baseurl}}{% post_url 2015-12-21-using-agrcs-new-web-mercator-services-in-your-web-maps %}).

### Coordinate System and Datum
{: .text-left}

The native coordinate system for the Discover services is Web Mercator with a WGS 1984 datum (EPSG 3857). Many users work in coordinate systems with a different datum (for example, EPSG 3566: Utah Central with NAD 1983). It is critical for users who need the highest locational precision to use the appropriate [geographic transformation conversion]({{ "/downloads/Transformation.png" | prepend: site.baseurl }}). This remedies the roughly one meter difference between the WGS84 and NAD83 datums' “realization points.” Without the right transformation, you will not be able to get the highest level of positional accuracy. AGRC uses the `NAD_1983_To_WGS_1984_5` transformation when creating base map tiles and web applications, but **there may be more accurate transformations based on the data and area you are working with**. The default (no transformation specified) will likely introduce several feet of horizontal positional error. More information about these transformations can be found on ESRI's [NAD 1983 To WGS 1984](https://support.esri.com/en/knowledgebase/techarticles/detail/24159) How-To.

### Horizontal Positional Accuracy
{: .text-left}

Stated horizontal positional accuracy of the Google imagery is expected to achieve or exceed one meter (CE90) in most areas without significant vertical relief. You can generally expect higher precision in urban areas where existing supplemental ground control was more abundant.

### Adding a WMTS or WMS Service to ESRI Products
{: .text-left}

**ArcGIS Pro 2.x:**

1. `Insert -> Connections -> New WMTS Server`
1. Paste the `WMTS` link [you have been provided]({{ "/discover/#connect" | prepend: site.baseurl }} "view Discover sign up information") into the `Server URL:` line and click `OK`
1. Navigate to the newly added `utah imagery - WMTS on discover.agrc.utah.gov.wmts` connection under `Servers` in the Catalog window.
1. Expand the nodes until you see a list of all of the imagery and base map services that are available to your login. The full list can be viewed on the main [Discover]({{ "/discover/#services" | prepend: site.baseurl }}) page.
1. Add your desired service to your map like you would any other layer.

**ArcMap 10.x**

1. `Add Data -> GIS Server -> Add WMTS server`
1. Paste the `WMTS` link [you have been provided]({{ "/discover/#connect" | prepend: site.baseurl }} "view Discover sign up information") into the `URL:` line and click `OK`
1. Navigate to the newly added `utah imagery – WMTS on discover.agrc.utah.gov` connection and **double click** to connect.
  - You can rename the connection after it has been added
1. Expand the nodes until you see a list of all of the imagery and base map services that are avialbe to your login. The list can be viewed on the main [Discover]({{ "/discover/#services" | prepend: site.baseurl }}) page.
1. Add your desired service to your map like you would any other layer.

### Adding a WMTS or WMS Service to a Web Map
{: .text-left}

{%capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.discover text='send an email to' hide-punctuation=true %}{% endcapture %}

Interested in using AGRC's Web Mercator services in your web maps? Take a look at [this page]({{"/using-agrcs-new-web-mercator-services-in-your-web-maps/" | prepend:site.baseurl}}) for more information. **Remember, if the web map is going to be public facing you need to request a separate quad-work link**. To do this {{ contact }} and provide your web map URL domains.

### Adding a WMS Service to CAD
{: .text-left}

- **Bentley Microstation** users should take a look at the [How To document]({{ "/downloads/MicroStationGoogleWMS_HowTo.pdf" | prepend: site.baseurl }}).
- **AutoCAD Civil 3D** users should take a look at the [How To document](https://knowledge.autodesk.com/support/autocad-map-3d/learn-explore/caas/CloudHelp/cloudhelp/2017/ENU/MAP3D-Use/files/GUID-A9F620AD-6B9A-487D-9B33-7D365307D571-htm.html).

### Printing Web Maps with Discover Services
{: .text-left}

Take a look at this blog post for information about [Printing Web Maps with Discover Services]({{"/printing-web-maps-with-discover-services/" | prepend:site.baseurl}}).

### Google Archive Services
{: .text-left}

<i class="fas fa-fw fa-lock"></i>
In addition to the statewide `Google` imagery service layer, there are archive layers available (ex. `Google 2011archive`) of the Google imagery organized by year collected.

### Google Flight Dates
{: .text-left}

<i class="fas fa-fw fa-lock"></i>
The [dates of each Google imagery flight](ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/INDICES/UnpackagedData/Google_UtahServiceDates/_Statewide/) block can be downloaded from our ftp site as a shapefile, viewed in [ArcGIS Online](https://arcg.is/1E0wq3b), or utilized through the `SGID10.INDICES.Google_UtahServiceDates` SGID layer.

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

### Google Logos
{: .text-left}

<i class="fas fa-fw fa-lock"></i>
Our license with Google requires you to put the appropriate logo on any products made using the Google imagery.

[Download zipfile of Google logos]({{ "/downloads/google_logos.zip" | prepend: site.baseurl }})

![white transparent]({{ "/images/ImageryCGoogle_WhiteTransparent.png" | prepend: site.baseurl }})
![white on black]({{ "/images/ImageryCGoogle_WhiteOnBlack.png" | prepend: site.baseurl }})

### Requests for On-Premise Use
{: .text-left}

{%capture contact3 %}{% include contact.html subject=page.title contact=site.data.contacts.discover text='Please provide the following information to' hide-punctuation=true %}{% endcapture %}

You may request a local copy of the NAIP, HRO, and Google imagery for off-line consumption when the provided imagery service does not meet your needs. {{ contact3 }} for consideration:

- Name & organization:
- Reason for request:
- Working on behalf of:
- Project names:
- Project locations:

### Other Tidbits
{: .text-left}

- From time to time it is suggested that you refresh the connection to the imagery services by right-clicking your service connection, in ArcCatalog or ArcMap's Catalog Viewer, and select the `Refresh`  button to see the latest list of available services.
- Since the Google acquisition flight blocks are not done all at once (as opposed to the NAIP product for example), there will certainly be color and positional changes at flight block boundaries. For large area maps, the color-balanced NAIP may be a more aesthetically pleasing cartographic choice.
- A tile index of the original .jp2 images that make up the Google imagery services is available from the SGID as SGID10.INDICES.Google_Tiles or as a [download from our ftp](ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/INDICES/UnpackagedData/Google_Tiles/_Statewide/).
- For future imagery updates, we can certainly pass along requests to Google for additional update areas or for specific collection periods. However, there is no provision in the current contract to create any expectation that those requests will be acted upon.
- AGRC has downloaded a statewide master set of the image files for redistribution, as the download process directly from Google incurs transactional costs for cloud server & bandwidth usage.
- AGRC has a [feedback reporting form](https://docs.google.com/a/utah.gov/forms/d/1UGU77SPM_HX0r8zblIs05C-H5mLyRja1gRT7Fu4aKZk/viewform?fbzx=-6743712545663240221) for imagery users around the state to report imagery and service issues so they can be passed along to Google. Please submit your feed back through this form.
