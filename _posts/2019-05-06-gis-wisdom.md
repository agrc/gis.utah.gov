---
title: GIS Wisdom - Exploring the Reverse Approach
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2019-05-06 10:07:46
categories:
  - Featured
tags:
  - gis
  - education
  - best practices
---

Those of us working in GIS know that it's really powerful and that it's utilized in just about every industry. If you aren’t yet a true believer, you should check out this impressive [list of uses](https://gisgeography.com/gis-applications-uses/).

GIS technology is continually evolving and is now embedded into so many aspects of modern life. As the saying goes, "technology advances us," right? That’s the story we continually tell ourselves, and I won't argue against it. But what if there is some truth in the reverse approach? What if technology can teach us something about being human?

I'd like to suggest that there are some aspects of our platform that we can learn from. That's right, I'm saying that there's wisdom to be found in GIS. And, in a time when we're training computers to be more human-like, there's something satisfying about taking this reverse approach.

Here are seven common GIS concepts and what we can learn from them.

![GIS Wisdom]({% link images/gis_wisdom.png %}){: .flex .flex--center style="width: 100%; max-width: 350px"}

### 1. Versioning
{: .text-left}

`resolving conflicts`

Look no further than the versioning workflow to learn how to successfully resolve conflicts. Honestly, GIS has this one figured out.  Here's how it works.

In the versioning workflow, each editor creates and checks out their own unique version of the data. This allows for multiple editors to be editing the data at the same time. Without versioning, we would encounter frequent data locks and unintended overwrites.

In the versioning workflow, an editor eventually needs to validate their version's edits and push (aka: post) them to the parent version so other editors can see and incorporate them. This is called *reconcile and post*.  It is during this process that we may encounter data conflicts.

When an editor reconciles, the editor fetches what's new from the parent version and resolves any differences with it. It is only after an editor has resolved the differences that the editor can then post their edits to the parent version. Once an editor posts, their version is then safely validated and checked in. At that point, everyone has an agreed-upon baseline for the data on which we can safely begin editing again.

It's not hard to imagine how we can incorporate some of these concepts into life. Think of how similar a version is to one's worldview. We often want to validate our views, so we engage in dialogue with others. Inevitably conflicts arise. Ideally, we should first attempt to fully understand the other viewpoint and then proceed with explaining our own. It is from there that we can work out our differences, or kindly "agree to disagree." Understanding both viewpoints can help us establish grounds to move forward on.

Learn more about the [ArcGIS versioning process](http://desktop.arcgis.com/en/arcmap/latest/manage-data/geodatabases/the-version-editing-process.htm).

### 2. Networks
{: .text-left}

`networking`

In GIS, we build network datasets for navigation. These networks are based on connectivity. We use terms such as *edges* and *junctions*, but really we’re just establishing resource groups to which we grant connectivity to other sources.

Likewise, building a personal network helps us determine who and what we allow ourselves to connect with. A well-thought-out network not only tells us where we can connect but also where we should not. Taking the time to think about this connectivity ensures that we build a quality social network.

Learn more about [creating ArcGIS network datasets](http://desktop.arcgis.com/en/arcmap/latest/extensions/network-analyst/creating-a-network-dataset.htm) and [how connectivity works](http://desktop.arcgis.com/en/arcmap/latest/extensions/network-analyst/understanding-connectivity.htm).

### 3. Extract, Translate, and Load (ETL)
{: .text-left}

`being adaptable`

You may have heard the phrase "build once, use many." When building data, we say this when we want the output to be adaptable and used for many purposes. Take road centerlines for example. This dataset should be designed with many uses in mind (such as routing, mapping, locating, asset management, etc.). With a simple "extract, translate, and load" (ETL), the data should meet the needs of many users.

We should learn to be adaptable as well. Life is not stagnant, and the ability to change and adapt is beneficial. Having a single use in mind has the potential to put us back at the drawing board, building again.

Learn more about [creating your own spatial ETL tools](http://desktop.arcgis.com/en/arcmap/10.6/extensions/data-interoperability/spatial-etl-tools.htm).

### 4. Open Data
{: .text-left}

`sharing`

Ideally, as GIS folks, we're all supporting or contributing to open data in some way---in other words, advancing freely available data.  This philosophy promotes transparency, innovation, and efficiency. Data gets better the more it's used, and open data gets used.

On the human side, the more we share, the more we learn. And when we share, we not only advance everyone's overall knowledge base, we also advance our own. Ideas grow when they are open and shared.

Explore some of the [existing GIS open data](http://hub.arcgis.com/pages/open-data) or consider contributing to the [Open Street Maps project](https://www.openstreetmap.org/about).

### 5. Editing
{: .text-left}

`refinement`

The best datasets have lots of edits and editors. They are continually being reviewed and refined. Think of multi-editing environments or Open Street Maps. These datasets are so vast and valuable because they are "live" and diverse; everyone is bringing something unique to the product, which is difficult to produce with a small group of editors. It's the refinement process that makes the datasets more valuable.

We too can continually refine through learning and sharing and practice and performance. In turn, this advances our skills and adds to our value.

Brush up on some [essential editing vocabulary](http://desktop.arcgis.com/en/arcmap/10.3/manage-data/editing/essential-editing-vocabulary.htm).

### 6. Domains
{: .text-left}

`consistency`

Domains are set up in a database to establish known consistency. They provide quality assurance on the front end while ensuring consistency on the back end. What makes domains so great is that they ensure that an end user can reliably expect certain values or results. Developers and cartographers especially benefit from this consistency.

Consistency in life, like the consistency in domains, can lead to reliable and expected results in human performance as well. Think of athletes or musicians. It's their consistency (and consequently, their establishment of muscle memory) that makes them the best, most reliable, and most successful. Sure, repetition plays a role, but without pre-established methods (i.e., domains) the results vary.

Learn more about [attribute domains](https://pro.arcgis.com/en/pro-app/help/data/geodatabases/overview/an-overview-of-attribute-domains.htm) and why they are so important.

### 7. Topology
{: .text-left}

`establishing principles`

Topology is all about rules. Essentially, it allows us to keep our data clean by defining a set of spatial expectations. We are able to validate our data when needed and also allow for inevitable exceptions. Topology is so powerful because once you define the rules, you are then free to focus your efforts on other aspects of the data.

Similarly, in life we also benefit from predefined rules---or better yet, principles. For example, think about driving an automobile. We learn the rules of the road before we get behind the wheel. Why? Because we don’t want to create the rules "on-the-fly." Knowing the rules of the road in advance allows us to focus on more enjoyable things, such as conversation or a good audiobook.

Oddly, there's something freeing about having predetermined principles. Knowing our principles allows us to then explore greater things.

Learn the [basics of topology](https://pro.arcgis.com/en/pro-app/help/data/topologies/topology-basics.htm) and how it might assist you with data management.

<br/>
{% capture contact %}{% include contact.html text="Drop me an email if you can think of other forms of GIS wisdom. I'll start a running list and post them below. My contact info is " subject=page.title contact=site.data.contacts.roads %}{% endcapture %}
{{ contact }}

Thanks for contributing!

### Community Additions

#### Atomicity (As in Relational Databases)

One transaction/thing at a time until it's done. Mutitasking doesn't work nearly as well. `Bert Granberg`

#### Web Services

You don't have to build it or own it (efficiency of sharing economy... such as sharing a lawn mower with a neighbor or two). Planning to service a common set of specific needs.  `Bert Granberg`
