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

In today's fast-paced and interconnected world, GIS data plays a large and important role in decision making and is the backbone of innovation and progress. Creating and sustaining high quality data to support these roles requires a systematic and [well-guided approach]({% link _posts/2018-02-05-sgid-data-lifecycle.md %}). We are refining our approach constantly and have a news worthy contribution to share. But first some context.

![SGID Data lifecycle]({% link images/SGID_lifecycle.jpg %})
{: .flex .flex--center}

A theme I have experienced in the geospatial industry is a gather and publish economy. It appeared that the industry was trying to justify the importance or worth of a GIS by the sheer quantity of data it could gather and publish. This led to the SGID containing over 500 layers of data. Not all of this data met the high standards you have come to expect from the UGRC. Many did not have a steward to curate and improve the data as it changed and the data's worth quickly declined. This data collection economy crashed in Utah with the [The Incredible Shrinking SGID]({% link _posts/2018-09-10-the-incredible-shrinking-sgid.md %}). We continue to choose data quality over data quantity. We even created a data ranking system that we will publish on our website data pages in the future.

An often overlooked aspect of a geospatial data lifecyle (GDL) is what happens at the end of life of a service. Esri, just in 2021, added an option to check a box to inform consumers that a service is deprecated and should no longer be used. To this day, that piece of metadata does not [propagate through the platform](https://community.esri.com/t5/arcgis-online-ideas/use-deprecation-flag-through-platform/idi-p/941737). It is not available to [ArcGIS Server Services](https://community.esri.com/t5/arcgis-enterprise-ideas/allow-marking-arcgis-server-services-as-deprecated/idi-p/1281015). Deprecating data is a difficult process for the geospatial community. Its effects are exacerbated by the distributed nature of stewards and services. We are taking strides to improve this for Utah data consumers.

UGRC uses GitHub and the [agrc/porter](https://github.com/agrc/porter/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) repository to communicate changes in the SGID. The repository is open to the public and the issues are intended to provide our intent, our progress, and to gather feedback from interested parties throughout the process. These actions are shared on our social media channels using the [#ugrcporter](https://twitter.com/hashtag/ugrcporter) hashtag; Like and subscribe! We know we are not connecting with everyone who would benefit with the reach of these platforms. We will continue innovating to improve our communication methods but know that we are trying our best 💙️.

Our most recent challenge with our GDL was based on a feature class schema change. A schema change is a breaking change in our [policy]({% link about/policy/sgid/index.md %}) and historically we deprecate the table and introduce a table with a new name. For example the current roads feature class has been named StatewideStreets and Centerlines to name a few. This allows all connections to the table through the UGRC API or desktop GIS to be severed without any crossed wires. The consumer is required to investigate the broken service and repair it. Changing table names is not always possible and may lead to less than ideal names. We want to keep the same table name with this most recent schema change requirement. How can we do that in a consistent way without creating a lot of frustration for consumers?

Let's walk through our [current process]({% link about/policy/sgid/index.md %}#general-removal-policies) for a change with a new table name.

1. We create an issue in porter with the intent to deprecate a table.
1. A tweet, or whatever it is called now, is sent notifying the world that the SGID is shrinking with a link to the porter issue.
1. The ArcGIS Online and OpenData items are marked as deprecated and the titles are renamed.
1. The item is removed from ArcGIS Online for two weeks to flush out anyone who missed the notification.
1. The item is deleted permanently. If applicable, it is moved to the shelved area for historical value.

Meanwhile the new table is being introduced.

1. We create an issue in porter with the intent to add a table.
1. A tweet is sent that the SGID is going to expand.
1. The items are added as they are made available.

This allows consumers a chance to migrate to the new table while the deprecated table is being removed. This opportunity is removed when we deprecate and introduce a table with the same name and a different schema. Borrowing from the collective knowledge and experience from everyone in our office, our new proposal will continue to allow consumers to plan ahead instead of react to breaking changes. It will provide more freedom to do this on their schedule instead of having to be ready on our cutoff day. It will allow for tables to have their most descriptive name to continue to make data easy to find. The proposal is best described by this graphic.

![Porter GDL]({% link images/Porter-GDL.png %})
{: .flex .flex--center}

Using roads as an example, when the porter issue is opened and the data is ready, the data will be loaded into the SGID with an `_next` prefix e.g. `roads_next`. This dataset will contain the new schema and data for the lifetime of the change period. The root table, `roads`, will have the current schema for 1/2 of the lifetime of the change period. On the change day, the root table, `roads`, will be migrated to the new schema and data and will be equivalent to `roads_next`. On the change day a `roads_deprecated` that contains the old schema and data will be created. After a certain amount of time, the `_next` and `_deprecated` tables will be permanently deleted.

With this process, consumers will have plenty of time to migrate and test their applications with the `_next` data and schema. Consumers will not need to be on call on change day because of the overlap. Consumers can update to the root table with full confidence since the data with `_next` is equivalent. For the consumers that our communication efforts did not reach, the `_deprecated` table will allow them to immediately fix any broken applications or systems that were depending on the root table. Meanwhile, they can now plan their migration to the new root table.

As you can see, this process allows those that choose to stay informed to prepare, plan, and act on these inevitable changes ahead of time. For those that are not informed, it provides a chance to react, recover, and catch up. We are very happy with this process and will solidify it into our website in the coming weeks. We are curious to hear what you think of the process and to learn about any processes that have worked for you and your company for managing change.
