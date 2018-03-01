---
author:
  display_name: JP
  email: agrc@utah.gov
tags:
  - address points
  - data
  - gis server
  - map service
date: 2013-08-30 13:31:42 -0600
title: New Address Point Cached Map Service
categories:
  - Developer
---
<p><a href="{{ "/?attachment_id=13706" | prepend: site.baseurl }}"><img alt="" src="{{ "/images/Addresspntmapservice-150x150.png" | prepend: site.baseurl }}" class='inline-text-right' /></a>AGRC recently released an address point map service. The service contains a cached version of &nbsp;<a href="{{site.baseurl}}{% post_url 2013-06-28-utah-gis-framework-data-for-800-please-alex %}">Utah&rsquo;s Statewide Address Points dataset</a>. </p>
<p><strong>Directions to connecting to the address point map service: </strong><br />
Users can access the address point map service through AGRC's GIS Server connection in ArcGIS Desktop. The connection to the address point map service works the same way as the connection to <a href="{{ "/data/sgid-base-map-services-arcmap/" | prepend: site.baseurl }}">Utah's base maps</a>. To access the address point map service, follow the steps on the previous link. The address point service ('AddressPoints') is located with AGRC's basemaps in the 'Basemaps' folder.</p>
<p>The address point dataset is an ongoing process between local counties and AGRC. As updates are acquired by AGRC they will be integrated and made available for use in the map service. As this is a cached map service you can add it to your ArcGIS Desktop session and use the identify tool to access the attributes of the address points.  You can also use the service in ArcGIS Online.</p>
