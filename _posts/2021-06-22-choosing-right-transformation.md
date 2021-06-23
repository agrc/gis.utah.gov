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

{% include embedded_video.html embed_url="https://player.vimeo.com/video/565826461" %}
_From the IHateSlivers department_
{: .flex .flex--center}

Modern GIS software goes to great lengths to automate the mundane tasks and hide the boring stuff from us. As a relative newcomer to the field, I keep hearing the old-timers talk about how spoiled we are with on-the-fly projections (now excuse me while I get off their lawn). But really, we are. Being able to display and process data in a variety of projections without first having to reproject it all is both a time- and and  sanity-saver.

This is even more true with the rise of web gis and external databases. If I were working for a county, I could pull in local layers in a State Plane projection, OpenSGID layers in UTM 12N NAD83, and AGOL layers in Web Mercator and they'd all look just about right.

"Just about."

[
    ![Close but no cigar]({% link images/transformations_measurement.jpg %}){:width="800px"}
]({% link images/transformations_measurement.jpg %})
{: .flex .flex--center}

## A Brief Refresher on Spheroids, Datums, and Projections

To understand what's going on, let's go through a [brief refresher](https://desktop.arcgis.com/en/arcmap/10.3/guide-books/map-projections/about-the-geoid-ellipsoid-spheroid-and-datum-and-h.htm) on the geodetic foundations that projections are built upon. It all starts with a ___spheroid___, a simple mathematical approximation of the earth's shape: almost, but not quite, a sphere.

The spheroid is used to create a ___datum___, which provides a more locally accurate model of the earth's surface. These take into account the "lumpiness" of the earth. A datum can be used as it's own "projection" (really, a geographic coordinate system) to define locations in latitude and longitude. Common datums include WGS84, NAD27, and NAD83.

Using the word properly, a ___projection___ spreads this 3D model of the surface of the earth onto a flat, two-dimensional plane. These are the projections we all know and love ( [or hate...(https://xkcd.com/977/)] )—Robinson, Mercator, UTM, etc.

## Irreconcilable Differences

The WGS84 datum and the NAD83 datum started out identical. However, because WGS84 and NAD83 are tied and adjusted to different sets of points on the earth's surface (NAD83 focuses on the North American area, while WGS84 focuses on the entire world), they have drifted apart over time like a celebrity marriage.

Because one projection using the NAD83 datum and another using the WGS84 datum are no longer starting from the same spot, any projected coordinates calculated in both no longer match. While the difference is slight on a planetary scale, it often works out to around a meter here in Utah.

## Maybe Not So Irreconcilable

Fortunately, [___transformations___](https://desktop.arcgis.com/en/arcmap/10.3/guide-books/map-projections/choosing-an-appropriate-transformation.htm) can be used to figure out the differences between datums. Each different transformation uses its own methods and starting reference points to translate coordinates.

The trick is choosing the right transformation. The pitfall is that the default is usually wrong, especially for going from NAD83 to WGS84.

## UTM, SGID, and You

Using the right transformation has become more important with the proliferation of AGOL-hosted feature services and the SGID layers shared via [opendata.gis.utah.gov](https://opendata.gis.utah.gov).

Internally, all the SGID layers hosted by UGRC are kept in the UTM 12N NAD83 projection. As it's name suggests, this uses the NAD83 datum. If you've downloaded data from us in the past or used our old direct SDE connection, you got UTM data. Our new [Open SGID](https://gis.utah.gov/sgid/#open-sgid) database offering also serves out data in UTM.

We've made a large push over the last year or so to also host all our SGID data in ArcGIS Online as well. This allows you to search for data right in ArcGIS Pro or AGOL webmaps. It also allowed us to set up [opendata.gis.utah.gov](https://opendata.gis.utah.gov), which drives all the download links on our [data pages](https://gis.utah.gov/data/#data-categories).

___If you're downloading data from the data pages, or pulling it in from ArcGIS Online, you're getting data in the Web Mercator projection___.

## When Defaults are at Fault

ArcMap is somewhat helpful when you load data from both UTM 12N NAD83 and Web Mercator—it displays a nice big warning dialog:

![ArcMap Warning Dialog]({% link images/transformations_arcmapdialog.jpg %}){:width="800px" .flex .flex--center}

I don't know about you, but when I first started going GIS I didn't know what all this meant (with apologies to my college professor). My coworker said "Oh, just hit close and move on." So I just got in that habit. Some people probably even hit the `Don't warn me again ever` checkbox and forgot all about it.

ArcMap is asking you to choose a transformation. ___By skipping this, no transformation is used at all. The underlying difference between the two datums is left for all to see:___

![Default when no transformation is selected]({% link images/transformations_default.jpg %}){:width="800px" .flex .flex--center}

_(Yes, I realize this is in ArcGIS Pro, but the result is the same)_
{: .flex .flex--center}

ArcGIS Pro is better about this... and worse, actually. If you add Web Mercator data to a UTM 12N NAD83 map, it happily chooses a default for you. However, it chooses the `WGS 1984 (ITRF00) To NAD1983` transformation. While very, very similar, this still produces the 0.03 ft difference seen in the screenshot at the top of the page.

![ArcGIS Pro's default transformation]({% link images/transformations_prodefault.jpg %}){:width="800px" .flex .flex--center}

To be frank, at these distances, the error from using the default transformation is much less than the error in the original data. However, it is just large enough to be outside of the default geodatabase tolerances. If you're doing something like a dissolve or split between the two datasets, or trying to enforce topology, you'll get annoying, almost invisible slivers and gaps.


