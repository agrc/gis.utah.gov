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
  <p class="text-center">The information on this page could be outdated. For the most recent information visit the <a href="{{ "/discover/" | prepend: site.baseurl }}">Discover</a> page.</p>
</div>

New 2016 high-resolution Google imagery is available from the Discover server. Updated areas include the Salt Lake Block and part of the Torrey Block that was previously covered by clouds. The new imagery can be found in the `utah` service. The new imagery is not yet available for download and the archive services have not been updated but should be very soon.

[![Google update]({{"/images/2016GoogleImagerySample_sm.png" | prepend:site.baseurl}} "view sample")]({{"/images/2016GoogleImagerySample.png" | prepend:site.baseurl}}){:.inline-text-right}

[![Google update]({{"/images/SLCoBlock_sm.png" | prepend:site.baseurl}} "view sample")]({{"/images/SLCoBlock.png" | prepend:site.baseurl}}){:.inline-text-right}

[![Google update]({{"/images/TorreyBlock_sm.png" | prepend:site.baseurl}} "view sample")]({{"/images/TorreyBlock.png" | prepend:site.baseurl}}){:.inline-text-right}

ArcMap users may need to clear the cache on the `utah` layer from Discover to see the new imagery. This can be done by going to the service’s `Layer Properties -> Cache` tab and selecting `Clear Local Cache Now`. Be patient as this could take several minutes.

Are you not signed up for access to the Google imagery yet? Visit [the Google Imagery License page]({{ "/discover/license/" | prepend:site.baseurl }} "Google imagery license information").

{% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.google_imagery %}{% endcapture %}
{{ contact | strip_newlines }}
