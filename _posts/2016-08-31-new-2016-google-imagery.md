---
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
tags: []
date: 2016-08-31 18:18:10
title: New 2016 Google Imagery
categories:
  - Featured
---

<div class="grid pop">
  <p class="text-center">The information on this page could be outdated. For the most recent information visit the <a href="{% link discover/index.html %}">Discover</a> page.</p>
</div>

New 2016 high-resolution Google imagery is available from the Discover server. Updated areas include the Salt Lake Block and part of the Torrey Block that was previously covered by clouds. The new imagery can be found in the `utah` service. The new imagery is not yet available for download and the archive services have not been updated but should be very soon.

[![Google update]({% link images/2016GoogleImagerySample_sm.png %} "view sample")]({% link images/2016GoogleImagerySample.png %}){:.inline-text-right}

[![Google update]({% link images/SLCoBlock_sm.png %} "view sample")]({% link images/SLCoBlock.png %}){:.inline-text-right}

[![Google update]({% link images/TorreyBlock_sm.png %} "view sample")]({% link images/TorreyBlock.png %}){:.inline-text-right}

ArcMap users may need to clear the cache on the `utah` layer from Discover to see the new imagery. This can be done by going to the service’s `Layer Properties -> Cache` tab and selecting `Clear Local Cache Now`. Be patient as this could take several minutes.

Are you not signed up for access to the Google imagery yet? Visit [the Google Imagery License page]({% link discover/license/index.md %} "Google imagery license information").

{% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.google_imagery %}{% endcapture %}
{{ contact }}
