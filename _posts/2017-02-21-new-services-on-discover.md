---
status: publish
layout: post
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
tags:
  - discover
  - google
  - naip
published: true
date: 2017-02-21 22:06:11
title: New Services on Discover Imagery & Base Map Server
categories:
  - Featured
---

<div class="grid pop">
  <p class="text-center">The information on this page could be outdated. For the most recent information visit the <a href="{{ "/discover/" | prepend: site.baseurl }}">Discover</a> page.</p>
</div>

Recently AGRC made some changes to the services available from our cloud server Discover (discover.agrc.utah.gov).
To see these new enhancements you may need to _refresh_ the connection you use to access Discover. ArcMap users can
right-click your connection to Discover in ArcCatalog and select `Refresh`. You might also want to clear your local cache.
ArcMap users can go to the service’s `Layer Properties -> Cache` tab and select `Clear Local Cache Now`. Be patient
as this could take several minutes. Another option is to completely clear your ArcMap cache by going
to `Customize -> ArcMap Options -> Display Cache -> Clear Cache`.

The service additions and changes are listed below. We also renamed most of the services. <i class="fas fa-exclamation-triangle"></i> **The renaming of the services should not have any effect on projects or applications that contained any of the services previous to the renaming.** The renaming is on the layer's display title only and does not have any effect on the urls or request parameters for the service.

> The renaming of the services should not have any effect on projects or applications that contained any of the services previous to the renaming.

 - **Utah** (licensed) - This service is now a mix of the most recent NAIP 1-meter and Google 6-inch imagery. The service
 now utilizes scale dependent rendering to display the color balanced NAIP imagery down to cache level 16,
 then renders the Google imagery at level 17 (starting at approx. 1:6,500) and down to level 20.

 - **Google** (licensed) - This new service is the replacement for the old **utah** service and has the
 most recent Google imagery for Utah.

 - **Basemap-Hybrid** (licensed) - This new service was created for convenience and performance for a dynamic mash-up of vector features with a transparent background from the **Basemap-Overlay** and the **Utah** imagery service.

More information about the services from Discover can be found on the page [Using SGID Base Map & Imagery Services in ArcMap]({{"/data/sgid-base-map-services-arcmap/" | prepend:site.baseurl}}).

{% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.discover %}{% endcapture %}
{{ contact | strip_newlines }}
