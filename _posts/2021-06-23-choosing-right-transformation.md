---
title: Choosing the Right Transformation
author:
  display_name: Jake Adams
  email: jdadams@utah.gov
date: 2021-06-23 15:30:00
categories:
  - Featured
  - SGID Blog
tags:
  - sgid
  - spatial analysis
  - data
---

{% include embedded_video.html embed_url="https://player.vimeo.com/video/565826461" %}
_From the I Hate Slivers department_
{: .flex .flex--center}

Modern GIS software goes to great lengths to automate the mundane tasks and hide the boring stuff from us. As a relative newcomer to the field, I've heard the old-timers talk about how spoiled we are with on-the-fly projections (now excuse me while I get off their lawn). But really, we are. Being able to display and process data in a variety of projections without first having to reproject it all saves both time and sanity.

This is even more true with the rise of web GIS and external databases. If I were working for a county, I could pull in local data in a State Plane projection, OpenSGID layers in UTM 12N NAD83, and AGOL layers in Web Mercator and they'd all look just about right.

"Just about."

[![Close but no cigar]({% link images/transformations_measurement.jpg %}){:width="75%" max-width="800px"}]({% link images/transformations_measurement.jpg %}){:target="_blank"}
{: .flex .flex--center }

This tiny gap is caused by using the wrong transformation when working with data in projections that use different datums (most commonly NAD83 and WGS84). While it may not matter pragmatically, it can still cause slivers and gaps with certain geoprocessing operations.

## A Brief Refresher on Spheroids, Datums, and Projections

To understand what's going on, let's go through a [brief refresher](https://desktop.arcgis.com/en/arcmap/latest/map/projections/about-the-geoid-ellipsoid-spheroid-and-datum-and-h.htm) on the geodetic foundations that projections are built upon. It all starts with a ___spheroid___, a simple mathematical approximation of the earth's shape: almost, but not quite, a sphere.

The spheroid is used to create a ___datum___, which provides a more locally accurate model of the earth's surface. These take into account the "lumpiness" of the earth. A datum can be used as it's own "projection" (really, a geographic coordinate system) to define locations in latitude and longitude. Common datums include WGS84, NAD27, and NAD83.

Side note: the fun part is that datums shift over time, so just saying "NAD83" is actually incomplete. Because a datum can be tied to monuments on earth, it can shift over time due to tectonics. We mostly skip over this fact in GIS ([unless you live on the west coast](https://www.xyht.com/surveying/links-need-seeing-to-datum-epochs-and-how-to-understand-them/), apparently), but a complete definition of a datum also includes the epoch, or the date when it was updated. Unfortunately, most projections and GIS software gloss over this fact, which is another reason GIS means Get It Surveyed.

Using the word properly, a ___projection___ spreads this 3D model of the surface of the earth onto a flat, two-dimensional plane. These are the projections we all know and love (or [hate](https://xkcd.com/977))—Robinson, Mercator, UTM, etc.

## Irreconcilable Differences

The WGS84 datum and the NAD83 datum started out identical. However, because WGS84 and NAD83 are tied and adjusted to different sets of points on the earth's surface (NAD83 focuses on the North American area, while WGS84 focuses on the entire world), they have drifted apart over time like a celebrity marriage.

Because a projection using NAD83 and another using WGS84 are no longer starting from the same spot, any projected coordinates calculated in both no longer match. While the difference is slight on a planetary scale, it often works out to around a meter here in Utah.

## Maybe Not So Irreconcilable

Fortunately, we can use [___transformations___](https://desktop.arcgis.com/en/arcmap/latest/map/projections/choosing-an-appropriate-transformation.htm) to figure out the differences between datums. Each different transformation uses its own methods and starting reference points to translate coordinates.

The trick is choosing the right transformation. The pitfall is that the default is usually just slightly off if you're going from NAD83 to WGS84.

___Our recommended transformation between NAD83 and WGS84 in Utah___ is `NAD_1983_To_WGS_1984_5`. Other transformations may work better for other geographic areas or for other projections using different datums.

[![NAD 1983 to WGS 1984 5 is the right transformation]({% link images/transformations_proper.jpg %}){:width="75%" max-width="770px"}]({% link images/transformations_proper.jpg %}){:target="_blank"}
{: .flex .flex--center}

## UTM, SGID, and You

Using the right transformation with SGID data has become more important with the proliferation of AGOL-hosted feature services and the SGID layers shared via [opendata.gis.utah.gov](https://opendata.gis.utah.gov).

Internally, all the SGID layers hosted by UGRC are kept in the UTM 12N NAD83 projection (EPSG 26912). As its name suggests, this uses the NAD83 datum. If you've downloaded data from us in the past or used our old direct SDE connection, you got UTM data. Our new [Open SGID]({% link sgid/index.html %}#open-sgid) database offering also serves out data in UTM.

We've made a large push over the last year or so to host all our SGID data in ArcGIS Online as well. This allows you to search for data right in ArcGIS Pro or in AGOL webmaps. It also allowed us to set up [opendata.gis.utah.gov](https://opendata.gis.utah.gov), which in turn drives all the download links on our [data pages]({% link data/index.html %}#data-categories).

___If you're downloading data from the data pages, or pulling it in from ArcGIS Online, you're getting data in the Web Mercator projection___. Combining this data with UTM 12N NAD83 data—or any other data that uses the NAD83 datum—may lead to differences between geometries that should be equal.

We use the `NAD_1983_To_WGS_1984_5` for all our data when working in both UTM 12N NAD83 and Web Mercator.

## When Defaults are at Fault

ArcMap is somewhat helpful when you load data from both UTM 12N NAD83 and Web Mercator—it displays a nice big warning dialog:

[![ArcMap Warning Dialog]({% link images/transformations_arcmapdialog.jpg %}){: width="75%" max-width="800px"}]({% link images/transformations_arcmapdialog.jpg %}){:target="_blank"}
{: .flex .flex--center}

I don't know about you, but when I first started doing GIS I didn't know what all this meant (with apologies to my GIS professors in college). My coworker said "Oh, just hit close and move on." So I just got in that habit. Some people probably hit the `Don't warn me again ever` checkbox years ago and forgot all about it.

ArcMap is asking you to choose a transformation. ___By skipping this, no transformation is used at all. The underlying difference between the two datums is left for all to see:___

[![Default when no transformation is selected]({% link images/transformations_default.jpg %}){: width="75%" max-width="779px"}]({% link images/transformations_default.jpg %}){:target="_blank"}
{: .flex .flex--center}

_(Yes, I realize this is in ArcGIS Pro, but the result is the same)_
{: .flex .flex--center}

ArcGIS Pro is better about this... and worse, actually. If you add Web Mercator data to a UTM 12N NAD83 map, it happily chooses a transformation for you. However, by default it chooses the `WGS 1984 (ITRF00) To NAD 1983` transformation. While very, very similar, this still produces the 0.03 ft difference seen in the screenshot at the top of the page.

[![ArcGIS Pro's default transformation]({% link images/transformations_prodefault.jpg %}){:width="75%" max-width="725px"}]({% link images/transformations_prodefault.jpg %}){:target="_blank"}
{: .flex .flex--center}

___To be frank, at these distances, the difference from using the default transformation is much less than the potential error in the original data.___ It's the classic problem of spurious precision. However, the difference is just large enough to be outside of the default geodatabase tolerances. If you're doing something like a dissolve or split between the two datasets, or trying to enforce topology, you'll get annoying, almost invisible slivers and gaps. The problem we're trying to solve is topological accuracy, not absolute accuracy.

## Can You At Least Give Me a Warning?

By default, it doesn't appear that ArcGIS Pro will give you a warning like ArcMap does. You can, however, enable a little warning popup in the top right of the window (where you've been ignoring that "A software update is available for ArcGIS Pro" message for weeks now):

![ArcGIS Pro warning dialog]({% link images/transformations_prowarning.jpg %})
{:width="75%" max-width="325px" .flex .flex--center}

In the Pro Options dialog, go to the `Application` -> `Map and Scene` entry. Expand the `Spatial Reference` section; here you can choose your default spatial reference for new maps. Below this, there is a checkbox labeled `Warn if transformation between geographic coordinate system is required to align data sources correctly.`

[![Enabling warning in ArcGIS Pro]({% link images/transformations_prowarningsetting.jpg %}){: width="75%" max-width="792px"}]({% link images/transformations_prowarningsetting.jpg %}){:target="_blank"}
{: .flex .flex--center}

## Show Me The Goods

If you want to see this in action, load our [county boundaries layer]({% link data/boundaries/citycountystate/index.html %}#CountyBoundaries) from both Open SGID (`opensgid.boundaries.county_boundaries`) and AGOL (`Utah County Boundaries`). Make sure the default `WGS 1984 (ITRF00) To NAD 1983` transformation is selected. Then run the `Split` tool between the two layers on the `NAME` field and look at one of the output feature classes. You'll see extra features for most or all of the surrounding counties with pretty small `shape_Area`'s:

[![Split with default transformation creates slivers from neighboring counties]({% link images/transformations_proslivers.jpg %}){:width="75%" max-width="800px"}]({% link images/transformations_proslivers.jpg %}){:target="_blank"}
{: .flex .flex--center}

If you're feeling particularly crazy, explode the multipart polygons for each neighboring county—I got 182 distinct slivers between Salt Lake County and its neighbors:

[![Split with default transformation creates slivers from neighboring counties]({% link images/transformations_prosinglepart.jpg %}){:width="75%" max-width="800px"}]({% link images/transformations_prosinglepart.jpg %}){:target="_blank"}
{: .flex .flex--center}

## Can I Go Home Now?

So there you have it. At the distances that matter in GIS, the difference between the default Pro transformation and `NAD_1983_To_WGS_1984_5` is practically irrelevant in day-to-day use. However, it may cause slivers when you run certain operations. If you're not using any transformation at all, the difference is more noticeable and may trigger the OCD part of your brain to figure out why your boundaries don't line up.
