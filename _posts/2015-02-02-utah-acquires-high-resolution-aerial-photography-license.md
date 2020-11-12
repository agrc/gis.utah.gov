---
author:
  display_name: Bert Granberg
  email: agrc@utah.gov
tags: []
date: 2015-02-02 16:00:36 -0700
title: Utah Acquires High Resolution Aerial Photography License
categories:
  - Featured
  - SGID Blog
---
<p>Last month (January 2015), AGRC led an effort to purchase a license to Google's statewide high resolution aerial photography (6" pixels) on behalf of a partnership of state, regional, and local government organizations. The license has been purchased and AGRC staff are currently working to accept delivery of the imagery and web services from Google before it is released to the broader user community. We expect to have information on accessing these resources later this month.</p>
<p>Many thanks the original partner agencies whose support made this purchase possible! (<em>logos shown at right</em>)<br />
<a href="{% link images/umiplogos.png %}"><img src="{% link images/umiplogos-800x290.png %}" alt="" title="Google Imagery Acquisition partner Agencies" width="450" height="162" class="inline-text-right"/></a></p>
<p>The Google high resolution aerial photography will provide a valuable, detailed, and border-to-border view of Utah's landscape that is expected to improve the quality of agency business data, facilitate more productive data sharing, expedite and enhance decision-making, and reduce the necessity of field data collection. As this purchase aligns with an existing private sector acquisition effort, the upfront and maintenance costs to the State are significantly lower than past custom aerial photography missions.</p>
<p><a href="{% link images/SixInch2012vGoogle.png %}"><img src="{% link images/SixInch2012vGoogle-234x300.png %}" alt="" title="Six Inch 2012 vs Google License" width="234" height="300" class="inline-text-left" /></a>Currently, the Google imagery is from 2013 and 2014 flights and covers about 98% of the state. The remaining block in southwest San Juan County is expected to be collected this calendar year. To put this all in perspective, the 2012 Wasatch Front 6 inch imagery acquisition covered just under 2.5% of the Utah's total area.</p>
<p>The new imagery license allows for all Utah state, tribal, regional, county and local government entities and the public education system to connect to the Google imagery, via WMS and map tile web services, in web applications and for desktop work in GIS, CAD and other software. The digital imagery files are also licensed for use in applications that require the imagery to be hosted on-premise. Other entities are allowed to use the imagery for contracted or partnering project work performed on behalf of the primary licensed organizations.</p>
<p>While we are finalizing the technical details and process for accessing the imagery, here is a brief question and answer session regarding the new license model:</p>

1. **Google presents similar imagery to consumers via Google Earth and Google Maps, how is the licensed imagery different?**
The Google imagery product offering is different because the aerial photography:
- has a higher level of positional accuracy (in the neighborhood of ~0.5m horizontal accuracy) because it has been reprocessed using existing ground control points where available
- has far less restrictive terms of service
- can be downloaded for on-premise use and archiving
- can be used on existing non-Google software platforms like Esri ArcGIS, 911 & dispatch consoles, computer aided design (CAD) software, and connected and disconnected devices in the field
- can be used in all state and local government web applications without an API key, including those applications that are not public facing or require a login
- derivative data, such as digitizing features, incorporation of the imagery into base map tiles, etc is allowed
- is licensed for completely ad-free use
1. **What are some of the potential advantages of a commercial subscription model for aerial photography vs. the public domain acquisition model?**
- very significant cost savings make it cost-feasible for full statewide high res coverage and for more frequent updates for urban and high-interest areas
- mapping data can be created and viewed, statewide, across government using a single, common base map
- enables more efficient contracting/acquisition and acceptance testing processes
- aligning to a commercial service will likely make enterprise-wide planning and cost-sharing easier
- includes vehicle for cloud-based storage and hosting
1. **How will maintenance and aerial photography update costs be covered in the future?**
Two possible options, both of which will benefit from the utilization metrics that will be collected, are:
- a) a cost-recovery model that uses a combination of possible utilization metrics
- b) a broader enterprise funding model geared to the unlimited usage provisions of the license
1. **What are the potential downsides to this offering?**
- This is a departure from the traditional public domain model, <strong><em>but...</em></strong>
    - similar data from the same flights is available for viewing through Google consumer apps, such as Google Earth or Google Maps
    - contractors and partners for state and local government are allowed access
    - other private sector users will have similar commercial offerings available to them from Google and others
- Annual maintenance, similar to that paid for software, is required to support web services and update purchases options, <strong><em>but...</em></strong>
- a portion of this cost would be incurred anyway for storage, hosting, & technical support for comparable imagery
- Utah will receive all imagery flown by Google in 2015 (a Wasatch Front refresh is expected) and can selectively purchase areas where Google flies new imagery in 2016 or 2017 at the statewide per-square-km price.
- if at any time, Utah no longer keeps current on maintenance costs, it will retain the right to use, on-premise and in its own services, all imagery rights purchased.
1. **What does the new Google license mean for the future of custom high resolution aerial photography? are custom products no longer needed?**
The Google imagery license should provide high resolution views needed for much of the mapping and project planning work across Utah. But, there will still be situations that call for custom flights to meet tighter, project-specific requirements (resolution, positioning) or even greater currency than Google's update cycle goals (targeted for a 3 year refresh cycle around the state and every 1 year along the Wasatch Front). Additionally, at the federal level, we currently expect the statewide 1 meter NAIP updates, contracted by the USDA, and the high resolution NGA 133 Cities imagery programs, to continue. These products are different enough from the Google imagery, in terms of schedule and specs, that they should be complementary data resources.
1. **What is the impact to this initiative of Google's recent announcement that Google Maps Engine (GME) will be turned off early next year?**
A GME-based WMS service is how the most current imagery service is being delivered to AGRC for acceptance testing. That service is expected to be replaced with a WMS and WMTS (tile service) hosted on the Google Cloud Platform (GCP) in the coming months. AGRC will select a software application to serve the imagery from GCP from among the existing commercial and open-source choices. At this point we see the GCP option as being superior to the GME platform as it gives us more control, flexibility, and potential cost-savings. Initial access to the service may be via a temporary WMS URL that, in a few months would be need to be replaced with links that use the new GCP-based service.
1. **How does this relate to the <a href="https://drive.google.com/file/d/1Dwmmvkz7lMwoVQ-RtoG4hyed0lL-h6XI">Utah Mapping & Information Partnership (UMIP)</a> initiative announced by Lt. Governor Cox at last week's Maps on the Hill event?**
Obtaining statewide high resolution imagery is one of four foundational priorities identified by UMIP leadership. The other three are furthering the exchange of programmatic data between agencies via web services, identifying field work/mobile device synergy opportunities between agencies, and improving the PLSS corner point dataset from which many digital land records are based.
1. **Answers to other questions we have been asked...(look for future additions to this list)**
- When future imagery updates are received, the older imagery will be kept online in an archive layer and will continue to be available
- Since the Google acquisition flight blocks are not done all at once (as opposed to the NAIP product for example), there will certainly be color and positional changes at flight block boundaries. For large area maps, the color-balanced NAIP may be a more aesthetically pleasing cartographic choice.
- AGRC will host a polygon map of the Google flight blocks and their date of collection.
- For future updates, Utah can certainly pass along requests to Google for additional update areas or for specific collection periods. But there is no provision in the current contract to create any expectation that those requests will be acted upon.
- AGRC will develop a process to register for access to the service and ensure that terms of service are communicated to end users.
- AGRC will download a statewide master set of the image files for redistribution, as the download process directly from Google incurs transactional costs for cloud server & bandwidth usage.
- The native coordinate system for the Google imagery files and service is a Geographic Coordinate System with a WGS 1984 datum. Many end users in Utah work in coordinate systems with a different datum (NAD 1983 for example). It will be critical for end users that require the highest locational precision to set up their working environment through the use of the appropriate geographic transformation. The correct geographic transformation parameter is needed to overcome the locational difference between the "realization points" of the WGS84 and NAD83 datums, that are about a meter apart. Without the proper geographic transformation, re-projection algorithms will not be able to resolve the last meter of positional accuracy. For many web applications and coarser resolution mapping needs, the transformation may not be of importance.
- AGRC will provide a feedback reporting form for imagery users around the state to report imagery and service issues so these can be passed along to Google.

**Samples**
<a href="{% link images/MoabSample.png %}">Moab</a> (US191 Bridge Over Colorado River) & <a href="{% link images/LoganSample.png %}">Logan</a> (Canyon Road).
