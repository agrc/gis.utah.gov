---
author:
  display_name: Bert Granberg
  email: agrc@utah.gov
tags:
  - centralize
  - data
  - tracking
date: 2015-11-27 13:45:52 -0700
title: 'Evolving Utah SGID Web Services: A Proposal'
categories:
  - Featured
---
<figure class="caption caption--right"><a href="{% link images/pendulum_large.png %}"><img class="caption__image" src="{% link images/pendulum.png %}" alt="The pendulum swings back and forth..." title="The pendulum swings back and forth..." /></a><figcaption class="caption__text">The pendulum swings back and forth...</figcaption></figure>

As time passes in the GIS and IT world, sometimes it feels like there is a pendulum slowly swinging back and forth along the continuum between centralization and decentralization. Mainframes and early GIS software required centralization. PC’s and later web services, smart phones, and tablets seem to define decentralization. But then again, consider the roles of app stores, consolidated and cloud-based storage and email servers, ArcGIS Online (AGOL), etc which are not centralized in a single location, but certainly have a centralized impact and feel.

The topic of this post is how best to organize, and provide access to Utah’s excellent and voluminous GIS data content assets. The basic question in 2015 and forward, is how to play to the strengths of decentralization while providing 'one stop shopping’ ease of access. What follows is a little background and a proposal for a simple framework that harnesses both ends of the pendulum’s swing.

#### A Little SGID Background...
{: .text-left}

Utah’s State Geographic Information Database (aka, 'the SGID’), was formally established in 1991 by the passage of SB21, the 'Geographic Information Systems Data Sharing and Conformity Bill,’ which remains in effect today as [63F-1-507](https://le.utah.gov/xcode/Title63F/Chapter1/63F-1-S507.html). Key provisions of the SGID statute are: a central clearinghouse and repository, the requirement of for state agencies to contribute all geographic data acquired or produced that is classified public, and a role for AGRC in setting GIS standards and requirements. [More early Utah GIS history](https://drive.google.com/file/d/0BxoOAQyOvGgac2wzV3g3X0lmX25oQlk3TDVDQVlwSV9TaVVn/view?usp=sharing).

A decade in, GIS web services are much more more manageable by data stewards due to the proliferation of UI-driven platform tools within ArcGIS Server, AGOL, Socrata, Github, etc. It is arguably now easier to publish GIS data content as a web services, than it is to:

- document the proper use of the web service and data content
- drive user traffic to the best and authoritative web service
- avoid duplication of, and out-of-sync static copies of GIS data services
- serve the growing variety of commercial and non-proprietary desktop and web apps, and
- _perhaps most importantly_, commit to providing published GIS data services in a consistent, kept-up-to-date manner.

_How can the remarkable vision that founded the SGID be reconciled with the distributed world of web-powered GIS data services? Can this be accomplished with minimal overhead, while taking advantage of the GIS workforce, distributed across State agencies? We believe that it can with a centralized tracking system_.

#### A Proposal: Tracking SGID Web Services
{: .text-left}

In the spirit of keeping it simple, the Tracking system should try to employ an online collaborative platform that is readily available to GIS staff that manage the update of State GIS data assets. Google Docs, GitHub, etc. are obvious possibilities.

<figure class="caption caption--right"><a href="{% link images/inventory_to_update_log.png %}"><img class="caption__image" src="{% link images/inventory_to_update_log_sm.png %}" alt="" title="Data Elements: Authoritative GIS Layer Tracking" /></a><figcaption class="caption__text">Click to Enlarge</figcaption></figure>

The SGID Tracking system could be as simple as asking GIS data managers to help keep current two master tables up to date:

1. Authoritative GIS Layer **Inventory Table**
1. Authoritative GIS Layer **Update Log Table**

The **Inventory Table** would contain 1 record _for every authoritative GIS layer_ along with the following informational items: agency, point of contact, web endpoint (web service or file access URL), update frequency goal (in days), use restrictions, etc.

The **Update Log Table** would contain 1 record created _each time a data content update was published to the endpoint_ listed for an authoritative GIS Layer listed in the Inventory Table. (See mockup of the Update Log Table near the bottom of this post).

AGRC has used a similar Google Docs-based approach for logging internal GIS data updates. To be useful for tracking changes to _decentralized_ GIS data resources, we would need to work with GIS data managers to both define the overall process and edit options for getting updates into the two tables (direct to table or notification to AGRC).

Ideally, the information in these two tables could be pulled, via API or other means, and styled to present a list of authoritative GIS data resources to end users. Additionally, a dashboard (mockup at bottom of the post) could be shown that shows the stated update frequency goal, the time until the next update, and the status relating to the update goal (how well are we doing?).

GIS data managers and data users alike, want the most current data available, used to support analysis and decision making. As GIS professionals, we've all run into situations where it's faster in the short run to duplicate existing services, and to otherwise employ DIY approaches that are less sustainable in the mid-to-long term than those that would be selected if data updates and web service endpoints were well-coordinated and reliable. Applications like UDOT's Planning and Environmental Linkage (PEL) toolset can save agencies great amounts of time and effort, but only if the use of the best available data resources can be substantiated.

We feel that the proposed Tracking system is a good method for ensuring that our GIS efforts have the maximum positive impact on agency operations and decision-making. But, ultimately, we'll need input and participation from GIS data managers to make this work.

#### Feedback and Next Steps...
{: .text-left}

We've aired this idea with a few of you already and have received generally positive reactions and suggestions for refinement. After receiving your additional feedback in coming week(s), AGRC would like use this concept to begin implementing a publicly accessible 'tracking system' for GIS web service and data updates.

![dog food]({% link images/dog_food.png %})
{: .inline-text-left}

We'll start by [eating our own dog food](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) -- populating these tables with the information that we manage here at AGRC. Next we'll work with UDOT and other UMIP partner agencies to add all of the GIS layers used within the PEL preliminary environmental screening application. And after that, we'll work with willing GIS data managers to add their content to the system.

But it all starts with your review. {% include contact.html subject=page.title contact=site.data.contacts.agrc %}

Update Log Table & Dashboard Mockups:

<figure class="caption caption--right"><a href="{% link images/update_dashboard_mockup.png %}"><img class="caption__image" src="{% link images/update_dashboard_mockup_sm.png %}" alt="" title="Update Log Mockup" /></a><figcaption class="caption__text">Click to Enlarge</figcaption></figure>

<figure class="caption caption--right"><a href="{% link images/update_log_table.png %}"><img class="caption__image" src="{% link images/update_log_table_sm.png %}" alt="" title="SGID Update Dashboard Mockup" /></a><figcaption class="caption__text">Click to Enlarge</figcaption></figure>
