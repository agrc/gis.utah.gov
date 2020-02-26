---
author:
  display_name: JP
  email: agrc@utah.gov
tags:
  - aerial photography
  - google
  - high resolution
date: 2015-04-30 11:57:15 -0600
title: 'Google Imagery: WMS and WMTS Imagery Services, & Other Reminders'
categories:
  - Featured
---

<div class="grid pop">
  <p class="text-center">The information on this page could be outdated. For the most recent information visit the <a href="{% link discover/index.html %}">Discover</a> page.</p>
</div>

Users of [Google's statewide high resolution aerial photography]({% link _posts/2015-02-02-utah-acquires-high-resolution-aerial-photography-license.md %}) are transitioning to accessing the data through the new GCP-based discover.agrc.utah.gov server and its twin WMS and WMTS imagery services. The new services on the 'discover' server are much more capable and deliver higher image quality. For more information and a connection to discover.agrc.utah.gov, {% include contact.html subject=page.title contact=site.data.contacts.discover text='contact' %}

### WMS vs WMTS
{: .text-left}

With two choices of OGC standard-based imagery services to choose from, WMS and WMTS, which should you use? The WMTS protocol should deliver the imagery faster so use it if works on your platform. But, the WMS service is an older standard that may be more maturely implemented within software applications, and is what ESRI users not yet at v10.2 should use.

<a href="{% link images/WakeUp-Google.png %}"><img src="{% link images/WakeUp-Google-246x300.png %}" alt="" title="WakeUp Google" class="inline-text-right" /></a>

### Other items
{: .text-left}

Users will find that both services will time out when they are unused for long periods. Refreshing the service in ArcMap should be as easy as opening the ArcCatalog view in ArcMap, and double clicking the service in that view to wake it up. See example at right.

AGRC now has the imagery files on premise and we hope, in the near future, to begin processing 'on premise' file requests that have been filed through the online Organizational Usage Agreement form. When ready, we'll reach out to you, the primary contacts, to begin that process.

Several users have asked for a link to view the imagery in a browser. You can do this now using [https://discover.agrc.utah.gov/tiles/utah/preview](https://discover.agrc.utah.gov/tiles/utah/preview), together with your organization's username and password. As this web view of the imagery uses the core WMTS service, it is a great way to begin any troubleshooting you may need to do.

We plan to incorporate the high resolution Google imagery into AGRC's hybrid base map, as well as adding WMTS as a service directly within web applications.

Last but not least, a friendly reminder. Keep in mind that the WMS and WMTS services use the WGS84 datum which means users in other datums (NAD83 for example) will need to set an appropriate datum transformation within the viewing application, in addition to the desired projection. This is critical for getting the last meter or so of horizontal position accuracy. This and more is described at the **[Discover resource page]({% link discover/resources/index.md %})**.

{% include contact.html subject=page.title contact=site.data.contacts.discover %}
