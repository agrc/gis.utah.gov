---
title: 'Making the best of change with Porter'
author:
  display_name: steve gourley
  email: sgourley@utah.gov
date: 2023-08-23 10:01:39
categories:
  - Featured
  - Developer
  - SGID Blog
tags:
  - change-management
---

In today's fast-paced and interconnected world, GIS data are a key part of decision making and provide the backbone of innovation and progress. These roles demand high quality data with a methodical [data creation and maintenance strategy]({% link _posts/2018-02-05-sgid-data-lifecycle.md %}) that makes it easy on the user when layers are added, removed, or changed. We are excited to share our latest efforts to provide consistent and reliable access to our high-quality SGID data.

![SGID Data lifecycle]({% link images/SGID_lifecycle.jpg %})
{: .flex .flex--center}

## Dealing with Deprecations
{: .flex .flex--left}

Data layers can live long and productive lives, but what happens when they are abandoned or retired and no longer updated? Users need to be informed so they are not making bad decisions with bad data. This critical part of the geospatial data lifecyle (GDL) is often overlooked. For example, ArcGIS Online didn't gain the "Deprecated" flag for old and outdated items until 2021[^deprecated]. To this day, that piece of metadata still does not [propagate through the platform](https://community.esri.com/t5/arcgis-online-ideas/use-deprecation-flag-through-platform/idi-p/941737), nor is it available to [ArcGIS Server Services](https://community.esri.com/t5/arcgis-enterprise-ideas/allow-marking-arcgis-server-services-as-deprecated/idi-p/1281015). Deprecating data is a hard task without easy answers.

## Processing Changes with Porter
{: .flex .flex--left}

UGRC uses the public [agrc/porter](https://github.com/agrc/porter/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) repository hosted on GitHub to inform users about changes in the SGID. The issues in this repository provide transparency about our intent and progress while allowing others to provide feedback throughout the process. We also post notices for each issue on our social media channels using the [#ugrcporter](https://twitter.com/hashtag/ugrcporter) hashtag; like and subscribe!

We know these platforms don't reach everyone who needs to know about these changes—please know that we are trying our best 💙️. We are continuing to innovate and explore ways to improve our communication.

## Changing Schemas: A Rose by Any Other Name
{: .flex .flex--left}

Our most recent deprecation challenge with our GDL comes from changing the schema of an existing SGID layer. As per our [policy]({% link about/policy/sgid/index.md %}), this is a breaking change that we've historically handled by removing the existing layer and introducing a new layer with a different name. For example, the current layer named "Roads" has been known as "StatewideStreets" and "Centerlines" throughout its history.

However, removing and replacing the layer like this severs all connections to it through the UGRC API or desktop GIS clients. This is good for avoiding confusion about schemas, but requires the user to investigate the broken service and repair it. It's also not always possible to come up with a new name that is relevant. With this most recent schema change, there really is no good alternative layer name.

Our first thought, based on our [current process]({% link about/policy/sgid/index.md %}#general-removal-policies), was to rely on a notification period to give users a chance to prepare for the change, then delete the existing layer and add the new layer under the same name. This would avoid severed connections, but users wouldn't have any time with the new data to prepare for the new schema.

How can we update the schema without creating headaches for our users?

## An Overlapping Solution
{: .flex .flex--left}

We've come up with a new process using the collective knowledge and experience from everyone in our office that will allow users to plan ahead instead of reacting to breaking changes. It will provide more flexibility to update on their schedule instead of having to be ready on our arbitrary cutoff day, and it will allow us to use the most descriptive layer names to continue to make data easy to find. The process is best described graphically:

![Porter GDL]({% link images/Porter-GDL.png %})
{: .flex .flex--center}

Let's use roads as an example. When the porter issue is opened and the new data is ready, it will be loaded into the SGID with an `_next` suffix as `roads_next`. This dataset will contain the new schema and data for the lifetime of the change period. At the same time, the existing layer will be copied and added with the `_deprecated` suffix. The existing layer, `roads`, will remain unchanged for the first half of the process.

On the change day, the existing layer, `roads`, will be migrated to the new schema and data and will be equivalent to `roads_next`. The old data will still be available as `roads_deprecated`.

After giving users some extra time to finish their transitions, the `_next` and `_deprecated` layers will be permanently deleted.

## Boatloads of Benefits
{: .flex .flex--left}

With this process, users will have plenty of time to migrate and test their applications with the `_next` data and schema. They will not need to be on call on the change day because the `_next` layer is still available, and when they do update to the main layer they will have the confidence that comes from testing with the equivalent `_next` layer.

If users know they won't have time to update until after the change date, they can make the (hopefully simple) fix of pointing to the `_deprecated` layer from the beginning and then do their testing after the change date when their schedule allows.

For users that our communication efforts did not reach, the `_deprecated` table will allow them to immediately fix any broken applications or systems that were depending on the data and schema in the main layer. This gives them time to plan their migration to the new layer without completely having the rug pulled out from under them.

As you can see, this process allows those that choose to stay informed to prepare, plan, and act on these inevitable changes ahead of time. For those that are not informed, it provides a chance to react, recover, and catch up. We are very happy with this process and will solidify it into our website in the coming weeks. We are curious to hear what you think of the process and to learn about any processes that have worked for you and your company for managing change.

[^deprecated]: "End Confusion with This Process for Deprecating Items" esri  <https://www.esri.com/about/newsroom/arcuser/end-confusion-with-this-process-for-deprecating-items/> Retrieved 23 August 2023
