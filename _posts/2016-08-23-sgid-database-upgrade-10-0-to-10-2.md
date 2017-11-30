---
status: publish
layout: post
author:
  display_name: Matt Peters
  email: mpeters@utah.gov
tags: []
published: true
date: 2016-08-23 22:42:20
title: SGID Database Upgrade 10.0 to 10.2
categories:
  - Featured
---
{% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.change_manager %}{% endcapture %}

AGRC will be updating the version of the SGID from 10.0 to 10.2, August 31th 2016. As you may be aware, ESRI ArcGIS Desktop users running 10.4.1 cannot connect to the SGID 10.0 database. AGRC keeps the SGID at the earliest possible version to allow the widest range of users to connect. This upgrade will allow 10.4.1 users to connect to the SGID, but it will not allow the 10.1 or earlier version users to connect. At this point we have been unable to locate any ArcGIS Desktop users still at version 10.1. {{ contact | strip_newlines }} Users within the state of Utah government can reference `CHG0009724`.
