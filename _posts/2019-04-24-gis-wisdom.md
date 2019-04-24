---
title: GIS Wisdom: Exploring the Reverse Approach
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2019-04-24 10:07:46
categories:
  - Featured
tags:
  - gis
  - education
  - best practices
---

Those of us working in GIS know that it's really powerful and that it's utilized in just about every industry.  If you aren’t yet a true believer, you should check out this impressive [list of uses](https://gisgeography.com/gis-applications-uses/).  

GIS technology is continually evolving and is now embedded into so many aspects of modern life.  As the saying goes, ‘technology advances us’, right?  That’s the story we continually tell ourselves, and I won't argue against it. But what if there is some truth in the reverse approach?  What if technology can teach us something about being human?

I'd like to suggest that there are some aspects of our platform that we can learn from. That's right, I'm saying that there's wisdom to be found in GIS.  And, in a time when we're training computers to be more human-like, there's something satisfying about taking this reverse approach.

Here are seven common GIS concepts, and what we should learn from them.

![GIS Wisdom]({{ "/images/gis_wisdom.png" | prepend: site.baseurl }}){: .flex .flex--center style="width: 100%; max-width: 350px"}

### 1. Versioning 

`resolving conflicts`

Look no further than the versioning workflow to learn how to successfully resolve conflicts.  Honestly, GIS has this one figured out.  Here's how it works. 

In the versioning workflow, each editor creates and checks-out their own unique version of the data. This allows for multiple editors to be editing the data at the same time.  Without versioning, we would encounter frequent data locks and unintended overwrites.  

In the versioning workflow, we eventually need to validate our version's edits and push (aka: post) them to the parent version so other editors can see and incorporate them.  This is called reconcile and post.  It is during this process where we may encounter data conflicts. 

When we reconcile, we fetch what's new from the parent and resolve any differences we have with it.  It is only after we have resolved the differences that we can then post our edits to the parent version.  Once we post, our version is then safely validated and checked-in. At that point, we have an agreed-upon baseline for the data on which we can safely begin editing again. 

It's not hard to imagine how we can incorporate some of these concepts into our life.  Think of how similar a version is to our worldview.  We often want to validate our views, so we engage in dialog with others.  Inevitably conflicts arise. Ideally, we should first attempt to fully understand the other viewpoint and then proceed with explaining our own.  It is from there that we can work out our differences, or kindly ‘agree to disagree’.  Understanding both viewpoints can help us establish grounds to move forward on.

Learn more about the [ArcGIS versioning process](http://desktop.arcgis.com/en/arcmap/latest/manage-data/geodatabases/the-version-editing-process.htm).

### 2. Networks 

`networking`

In GIS, we build network datasets for navigation.  These networks are based on connectivity.  We use terms such as edges and junctions, but really we’re just establishing resource groups to which we grant connectivity to other sources.

Likewise, building a personal network helps us determine who and what we allow ourselves to connect with.  A well-thought-out network not only tells us where we can connect but also where we should not. Taking the time to think about this connectivity ensures that we build a quality social network.

Learn more about [creating an ArcGIS network datasets](http://desktop.arcgis.com/en/arcmap/latest/extensions/network-analyst/creating-a-network-dataset.htm) and [how connectivity works](http://desktop.arcgis.com/en/arcmap/latest/extensions/network-analyst/understanding-connectivity.htm).

### 3. Extract, Translate, and Load (ETL) 

`being adaptable`

You have probably heard the phrase, 'build once, use many'.  When building data, we say this when we want the output to be adaptable and used for many purposes.  Take road centerlines for example.  This dataset should be designed with many uses in mind (such as routing, mapping, locating, assessment management, etc.).  With a simple ‘extract, translate, and load’ (ETL), the data should meet the needs of many users.  

We should learn to be adaptable as well.  Life is not stagnant, and the ability to change and adapt is beneficial.  Having a single-use in mind has the potential of putting us back at the drawing board, building again.

Learn more about [creating your own spatial ETL tools](http://desktop.arcgis.com/en/arcmap/10.6/extensions/data-interoperability/spatial-etl-tools.htm).

### 4. Open Data

`sharing`

Ideally, as GIS folks, we're all supporting or contributing to open data in some way.  In other words, advancing freely available data.  This philosophy promotes transparency,  innovation, and efficiency.  Data gets better the more it's used, and open data gets used.

On the human side, the more we share, the more we learn.  And when we share, we not only advance the overall knowledge base, we also advance our own. Ideas grow when they are open and shared.  

Explore some of the [existing GIS open data](http://hub.arcgis.com/pages/open-data) or consider contributing to the [Open Street Maps project](https://www.openstreetmap.org/about).

### 5. Editing

`refinement`

The best datasets have lots of edits and editors.  They are continually being reviewed and refined. Think of multi-editing environments or Open Street Maps.  These datasets are so vast and valuable because they are 'live’ and diverse.  Everyone is bringing something unique to the product, which is difficult to produce with a small group of editors.

But it's the refinement process that makes it valuable.  We too can continually refine through learning and sharing and practice and performance.  In turn, this advances our skills and adds to our value.

Brush-up on some [essential editing vocabulary](http://desktop.arcgis.com/en/arcmap/10.3/manage-data/editing/essential-editing-vocabulary.htm).

### 6. Domains

`consistency`

Domains are set up in the database to establish known consistently. They provide quality assurance on the front-end while ensuring consistency on the back-end.  What makes domains so great is that the end-user can reliably expect certain values or results.  Developers and cartographers benefit from this as well. 

Much like with domains, consistency can lead to reliable and expected results in human performance as well.  Think of athletes or musicians.  It's their consistently (and consequently, the establishment of muscle memory) that make the best so reliable and successful. Sure, repetition plays a role, but without pre-established methods (ie: domains) the results vary.   

Learn more about [attribute domains](https://pro.arcgis.com/en/pro-app/help/data/geodatabases/overview/an-overview-of-attribute-domains.htm) and why they are so important. 

### 7. Topology

`establishing principles`

Topology is all about rules.  Essentially, it allows us to keep our data clean by defining a set of spatial expectations.  We are able to validate when needed and also allow for the inevitable exception.  Topology is so powerful because once you define the rules, you are then free to focus your efforts on other aspects of the data.

Similarly, we also benefit from predefined rules -- or better yet, principles.  For example, think about driving an automobile.  We learn the rules-of-the-road before set foot in the vehicle.  Why?  Because we don’t want to create the rules ‘on-the-fly’.  Knowing the rules-of-the-road in advance, allows us to focus on more enjoyable things, such as conversation or a good audiobook.

Oddly, there's something freeing about having predetermined principles.  Knowing our principles allows us to then explore greater things.

Learn the [basics of topology](https://pro.arcgis.com/en/pro-app/help/data/topologies/topology-basics.htm) and how it might assist you with data management.

Drop me an email If you can think of other forms of GIS wisdom.  I'll start a running list and post them below.
