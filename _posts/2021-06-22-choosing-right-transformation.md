---
title: Choosing the Right Transformation
author:
  display_name: Jake Adams
  email: jdadams@utah.gov
date: 2021-06-21 8:30:00
categories:
  - Featured
  - SGID Blog
tags:
  - sgid
  - spatial analysis
  - data
---

_From the IHateSlivers department_

{% include embedded_video.html embed_url="https://player.vimeo.com/video/565826461" %}

Modern GIS software goes to great lengths to automate the mundane tasks and hide the boring stuff from us. As a relative newcomer to the field, I keep hearing the old-timers talk about how spoiled we are with on-the-fly projections (now excuse me while I get off their lawn). But really, we are. Being able to display and process data in a variety of projections without first having to reproject it all is both a time- and and  sanity-saver.

This is even more true with the rise of web gis and external databases. If I were working for a county, I could pull in local layers in a State Plane projection, OpenSGID layers in UTM 12N NAD83, and AGOL layers in Web Mercator and they'd all look just about right.

"Just about."

[
    ![Close but no cigar]({% link images/transformations_measurement.jpg %})
]({% link images/transformations_measurement.jpg %})