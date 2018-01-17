---
status: publish
layout: post
author:
  display_name: Bert Granberg
  email: agrc@utah.gov
tags:
  - centralize
  - data
  - tracking
published: true
date: 2015-11-27 13:45:52 -0700
title: 'Evolving Utah SGID Web Services: A Proposal'
categories:
  - Featured
---
<div class="caption"><a href="{{ "/downloads/Screen-Shot-2015-11-27-at-12.39.23-PM.png" | prepend: site.baseurl }}"><img src="{{ "/images/Screen-Shot-2015-11-27-at-12.39.23-PM-300x220.png" | prepend: site.baseurl }}" alt="" title="The pendulum swings back and forth..." width="300" height="220" /></a><p class="caption-text">The pendulum swings back and forth...</p></div>As time passes in the GIS and IT world, sometimes it feels like there is a pendulum slowly swinging back and forth along the continuum between centralization and decentralization. Mainframes and early GIS software required centralization. PC’s and later web services, smart phones, and tablets seem to define decentralization. But then again, consider the roles of app stores, consolidated and cloud-based storage and email servers, ArcGIS Online (AGOL), etc which are not centralized in a single location, but certainly have a centralized impact and feel.</p>
<p>The topic of this post is how best to organize, and provide access to Utah’s excellent and voluminous GIS data content assets. The basic question in 2015 and forward, is how to play to the strengths of decentralization while providing 'one stop shopping’ ease of access. What follows is a little background and a proposal for a simple framework that harnesses both ends of the pendulum’s swing. </p>
<h4>A Little SGID Background...</h4>
<p>Utah’s State Geographic Information Database (aka, 'the SGID’), was formally established in 1991 by the passage of SB21, the 'Geographic Information Systems Data Sharing and Conformity Bill,’ which remains in effect today as <a href="http://le.utah.gov/xcode/Title63F/Chapter1/63F-1-S507.html">63F-1-507</a>. Key provisions of the SGID statute are: a central clearinghouse and repository, the requirement of for state agencies to contribute all geographic data acquired or produced that is classified public, and a role for AGRC in setting GIS standards and requirements. <a href="https://drive.google.com/file/d/0BxoOAQyOvGgac2wzV3g3X0lmX25oQlk3TDVDQVlwSV9TaVVn/view?usp=sharing">More early Utah GIS history</a>.</p>
<p>A decade in, GIS web services are much more more manageable by data stewards due to the proliferation of UI-driven platform tools within ArcGIS Server, AGOL, Socrata, Github, etc. It is arguably now easier to publish GIS data content as a web services, than it is to:</p>
<ul>
<li>document the proper use of the web service and data content</li>
<li>drive user traffic to the best and authoritative web service</li>
<li>avoid duplication of, and out-of-sync static copies of GIS data services</li>
<li>serve the growing variety of commercial and non-proprietary desktop and web apps, and</li>
<li><em>perhaps most importantly</em>, commit to providing published GIS data services in a consistent, kept-up-to-date manner.</li>
</ul>
<p><em>How can the remarkable vision that founded the SGID be reconciled with the distributed world of web-powered GIS data services? Can this be accomplished with minimal overhead, while taking advantage of the GIS workforce, distributed across State agencies? We believe that it can with a centralized tracking system.</em></p>
<h4>A Proposal: Tracking SGID Web Services</h4>
<p>In the spirit of keeping it simple, the Tracking system should try to employ an online collaborative platform that is readily available to GIS staff that manage the update of State GIS data assets. Google Docs, GitHub, etc. are obvious possibilities.</p>
<div class="caption"><a href="{{ "/downloads/Screen-Shot-2015-11-30-at-9.02.43-AM.png" | prepend: site.baseurl }}"><img src="{{ "/images/Screen-Shot-2015-11-30-at-9.02.43-AM-300x200.png" | prepend: site.baseurl }}" alt="" title="Data Elements: Authoritative GIS Layer Tracking" width="300" height="200" /></a><p class="caption-text">Click to Enlarge</p></div>
<p>The SGID Tracking system could be as simple as asking GIS data managers to help keep current two master tables up to date:</p>
<ul>
<li>1. Authoritative GIS Layer <strong>Inventory Table</strong></li>
<li>2. Authoritative GIS Layer <strong>Update Log Table</strong></li>
</ul>
<p>The <strong>Inventory Table</strong> would contain 1 record <em>for every authoritative GIS layer</em> along with the following informational items: agency, point of contact, web endpoint (web service or file access URL), update frequency goal (in days), use restrictions, etc.</p>
<p>The <strong>Update Log Table</strong> would contain 1 record created <em>each time a data content update was published to the endpoint</em> listed for an authoritative GIS Layer listed in the Inventory Table. (See mockup of the Update Log Table near the bottom of this post).</p>
<p>AGRC has used a similar Google Docs-based approach for logging internal GIS data updates. To be useful for tracking changes to <em>decentralized</em> GIS data resources, we would need to work with GIS data managers to both define the overall process and edit options for getting updates into the two tables (direct to table or notification to AGRC).</p>
<p>Ideally, the information in these two tables could be pulled, via API or other means, and styled to present a list of authoritative GIS data resources to end users. Additionally, a dashboard (mockup at bottom of the post) could be shown that shows the stated update frequency goal, the time until the next update, and the status relating to the update goal (how well are we doing?).</p>
<p>GIS data managers and data users alike, want the most current data available, used to support analysis and decision making. As GIS professionals, we've all run into situations where it's faster in the short run to duplicate existing services, and to otherwise employ DIY approaches that are less sustainable in the mid-to-long term than those that would be selected if data updates and web service endpoints were well-coordinated and reliable. Applications like UDOT's Planning and Environmental Linkage (PEL) toolset can save agencies great amounts of time and effort, but only if the use of the best available data resources can be substantiated. </p>
<p>We feel that the proposed Tracking system is a good method for ensuring that our GIS efforts have the maximum positive impact on agency operations and decision-making. But, ultimately, we'll need input and participation from GIS data managers to make this work.</p>
<h4>Feedback and Next Steps...</h4>
<p>We've aired this idea with a few of you already and have received generally positive reactions and suggestions for refinement. After receiving your additional feedback in coming week(s), AGRC would like use this concept to begin implementing a publicly accessible 'tracking system' for GIS web service and data updates. </p>
<p><a href="{{ "/downloads/Screen-Shot-2015-11-27-at-1.28.15-PM.png" | prepend: site.baseurl }}"><img src="{{ "/images/Screen-Shot-2015-11-27-at-1.28.15-PM-150x150.png" | prepend: site.baseurl }}" alt="" title="Screen Shot 2015-11-27 at 1.28.15 PM" width="150" height="150" class="inline-text-left" /></a>We'll start by '<a href="https://en.wikipedia.org/wiki/Eating_your_own_dog_food">eating our own dogfood</a>' -- populating these tables with the information that we manage here at AGRC. Next we'll work with UDOT and other UMIP partner agencies to add all of the GIS layers used within the PEL preliminary environmental screening application. And after that, we'll work with willing GIS data managers to add their content to the system.</p>
<p>But it all starts with your review. {% include contact.html subject=page.title contact=site.data.contacts.agrc %}</p>
<p>Update Log Table & Dashboard Mockups:<br />
<div class="caption"><a href="{{ "/downloads/Screen-Shot-2015-11-27-at-1.02.08-PM.png" | prepend: site.baseurl }}"><img src="{{ "/images/Screen-Shot-2015-11-27-at-1.02.08-PM-300x183.png" | prepend: site.baseurl }}" alt="" title="Update Log Mockup" width="300" height="183" /></a><p class="caption-text">Click to Enlarge</p></div><div class="caption"><a href="{{ "/downloads/Screen-Shot-2015-11-27-at-1.01.51-PM.png" | prepend: site.baseurl }}"><img src="{{ "/images/Screen-Shot-2015-11-27-at-1.01.51-PM-300x217.png" | prepend: site.baseurl }}" alt="" title="SGID Update Dashboard Mockup" width="300" height="217" /></a><p class="caption-text">Click to Enlarge</p></div>
