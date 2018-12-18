---
title: 'Creating New State Plane Zone for 2022'
author:
  display_name: Sean Fernandez
  email: sfernandez@utah.gov
date: 2018-12-18 21:27:03
categories:
  - GPS-surveyor
tags:
  - SPC2022
  - surveyor
  - NGS
---
In 2022 the <abbr title="National Geodetic Survey">NGS</abbr> plans to publish a series of new horizontal reference frames that will replace the <abbr title="North American Datum of 1983">NAD83</abbr> and a vertical reference frame that will replace the <abbr title="North American Vertical Datum of 1988">NAVD88</abbr>.

[![Preliminary zone layout]({{ "/images/preliminary_zone_layout_thumb.png" | prepend: site.baseurl }}){: .outline .inline-text-right}]({{ "/images/preliminary_zone_layout.png" | prepend: site.baseurl }})

The new horizontal reference frames are the:

- <abbr title="North American Terrestrial Reference Frame of 2022">NATRF2022</abbr>,
- <abbr title="Pacific Terrestrial Reference Frame of 2022">PATRF2022</abbr>,
- <abbr title="Caribbean Terrestrial Reference Frame of 2022">CATRF2022</abbr>, and
- <abbr title="Mariana Terrestrial Reference Frame of 2022">MATRF2022</abbr>.

The new vertical reference frame is the <abbr title="North American-Pacific Geopotential Datum of 2022">NAPGD2022</abbr>.

The big news is that in conjunction with the publication of these new reference frames, the NGS is working with each state to create the <abbr title="State Plane Coordinate">SPC</abbr> System of 2022 (SPCS2022) and develop new low distortion projections that will improve accuracy in selected areas where greater accuracy is needed.

Currently SPCs are projected from ground elevations to sea level and across very large geographic areas, which may cause large distortions that exceed acceptable scaling errors for mapping and surveying.

A work group with representatives from the Utah Department of Transportation, the Utah Council of Land Surveyors, the <abbr title="Utah Automated Geographic Reference Center">AGRC</abbr>, and the surveying/geomatics programs at Utah Valley University and Salt Lake Community College have been collaborating with the NGS to define low distortion SPC needs in Utah, and the group responded to a questionnaire from the NGS as follows:

> We see the value in having one state-wide layer, at an average ground elevation and a second layer of 15-25 low distortion zones each combining several counties that have similar topographic relief and elevation and that have a combined extent that still meets the design criteria.

The map shows a preliminary layout of the proposed low distortion zones for SPCS2022, which combines some counties together and creates 14 zones that are outlined by political boundaries along county lines.

AGRC will continue to be a part of this work group and provide feedback from the GIS community as it is received.

{% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.surveyor %}{% endcapture %}
{{ contact | strip_newlines }}
