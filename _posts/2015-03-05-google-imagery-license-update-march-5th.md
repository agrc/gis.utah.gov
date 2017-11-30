---
status: publish
layout: post
author:
  display_name: Bert Granberg
  email: bgranberg@utah.gov
tags:
  - aerial photography
  - google
  - imagery
published: true
date: 2015-03-05 15:59:52 -0700
title: Using Utah's Google Imagery License
categories:
  - Featured
---

<div class="grid pop">
  <p class="text-center">The information on this page could be outdated. For the most recent information visit the <a href="{{ "/discover/" | prepend: site.baseurl }}">Discover</a> page.</p>
</div>

<p><strong>Background:</strong>
</p>
<p>At the beginning of 2015, a coalition of state, regional, and local government agencies purchased a license to Google’s high resolution (6 inch pixels) aerial photography. <em>Read the original <a href="{{site.baseurl}}{% post_url 2015-02-02-utah-acquires-high-resolution-aerial-photography-license %}">post</a> about the acquisition</em>. The license will allow Utah’s <strong>cities, counties, special districts, state agencies, K12/Higher ed, and tribes</strong> to use this imagery in web and desktop mapping  applications as a streaming web service or, where needed, on premise from downloaded local files. Also included is <strong>use by contractors and formal partners of the immediate licensees</strong>.</p>
<p>The imagery web services will be hosted in Google's cloud and delivered via WMS and WTMS standards and the downloadable files will be obtainable through AGRC who will have a master set of the raw imagery files.</p>
<p><a href="{{ "/downloads/Diverging-Diamond-Interchange-Google-Imagery.png" | prepend: site.baseurl }}"><img src="{{ "/images/Diverging-Diamond-Interchange-Google-Imagery-800x227.png" | prepend: site.baseurl }}" alt="" title="Click to enlarge" width="800" height="227" class="" /></a>
</p>
<p><strong>Update:</strong>
</p>
<p>AGRC is now ready to provide access to the licensed imagery services. Each qualified entity will need to complete an <a href="https://docs.google.com/a/utah.gov/forms/d/18FnT2fdg7nrA9xZYKUYV5UvxG0GO9w9DNFfeNG1D4TU/viewform"><strong>Organizational Usage Agreement</strong></a> to access the imagery. The Agreement covers terms of the license and important informational items that should be communicated. Spend some time with the fine print within the Agreement as it is important that everyone understand the details, including, but not limited to the importance of understanding datum transformation.
</p>
<p>Please note that the agreement only needs to be completed once for each organization and that contractors working only within the physical facilities or network of immediate licensees, do not need complete the Agreement.
</p>
<p><a  title="911flyer" href="https://docs.google.com/a/utah.gov/forms/d/18FnT2fdg7nrA9xZYKUYV5UvxG0GO9w9DNFfeNG1D4TU/viewform"><img class="inline-text-left" style="border: 0px solid black;" src="{{ "/images/googleusageagreement.png" | prepend: site.baseurl }}" alt="ned" width="254" height="289" /></a></p>
<p>It is recommended that larger organizations (e.g. State Departments or Counties) decide whether they want to submit one agreement or one for each sub unit within their organization (e.g. divisions, regional offices, local government offices). In making this decision, please consider that it will create a small amount of additional work for AGRC staff but will also create additional points of contact, additional usage statistics, and could distribute the responsibility for communicating the terms and informational items within a larger organization. It's an organization-by-organization decision, so please take time to coordinate with leadership and your co-workers to arrive at the best solution.
</p>
<p>After completing the Organizational Usage Agreement, AGRC will work through the designated primary contact to provide connection information via the Google Maps Engine (GME) WMS service. This GME-based WMS service in not expected to last for more than several months as there are known issues and Google has announced it is pulling the plug on the entire GME platform in Jan 2016.</p>
<p>The replacement imagery server will be located in the Google Cloud Platform (GCP). It is currently in 'beta' and AGRC is working with Google staff and its business partners to finalize this and move to production. GCP, similar to Amazon's AWS, will provide flexibility, cost efficiencies, and powerful scaling using the Compute Engine. As soon as the full set of imagery files is loaded onto GCP, AGRC will download the files, expected to be around 10TB, and will be able to distribute these to qualifying organizations with on-premise use needs for the files or local mosaics (911, Blue Stakes, etc).
</p>
<p>Get started by getting a primary contact designated for your organization and sign up using the Organizational Usage Agreement.
</p>
<p>{% include contact.html subject=page.title contact=site.data.contacts.google_imagery %}</p>
