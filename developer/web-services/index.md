---
title: Unleash the power of the SGID with the AGRC Web API
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
tags:
  - api
  - web services
categories:
  - Developer
date: 2011-06-30 18:23:51 -0500
---
<i class="fas fa-2x fa-fw fa-magic"></i> The Automated Geographic Reference Center (AGRC) is the State of Utah's map technology coordination office. The AGRC creates, maintains, and stores geospatial data in the State Geographic Information Database (SGID), a one-stop shop to hundreds of data layers developed, aggregated, or acquired by state government. [AGRC's Web API](https://api.mapserv.utah.gov) is an http-enabled service for accessing this valuable geospatial data. 

From querying any data layer in the SGID to geocoding addresses against the most accurate statewide roads dataset, the application of the API is endless. The API also powers AGRC's [widgets and add-ins]({{ "/developer/widgets/" | prepend: site.baseurl }}), which can help you navigate the sea of data in the SGID.

## Possibilities
{: .text-left }

The main endpoints that we offer in the Web API are **geocoding** and **searching**.

_**Geocoding**_ allows you to find a geographic location (i.e., the geographical coordinates) from an address. AGRC's geocoding philosophy is unique since we would rather give you _no match_ than the wrong match. But we assure you: we will have the best match rates for Utah addresses.

How can we be so sure?—Because we’re the experts in Utah geospatial data. 

AGRC was developed specifically to coordinate Utah-specific data, and we’ve been doing this for quite a while (30+ years. But who’s counting?). Other programs can provide you with similar data, but if you’re looking for information that considers the nuances of Utah addresses, this is it—we’ve got the most comprehensive Utah geospatial data, and we want to share it with you. 

The other main endpoint, _**searching**_, allows you to (you guessed it!) search through SGID data. With over 300 layers of real-world data that you can run queries against in the SGID, the possibilities can be a little overwhelming. But the searching endpoint really opens up the opportunity for serious information gathering. You need a way to sift through all that information and make sense of it, and our search endpoint can help you do that.

## API in Action
{: .text-left }

### Do you have a database full of house addresses?
{: .text-left }

You can learn so much from a house address once it has been geocoded. When you geocode, you unlock the ability to visualize your data in a different way. And you can use our search endpoint to answer endless questions about your addresses: 
  - How close is the nearest fault line?
  - What school district will the kids be in?
  - What is the broadband availability in my area?
  - Where are the nearest public transit routes and stops?
  - Where do I go to vote?
  - Where is the closest post office?

This list could go on and on. In fact, we’ve barely scratched the surface of all the great ideas you can build with our API. Take a look at our [data pages]({{ "/data/sgid-index/" | prepend: site.baseurl }}) to get even more ideas about all the information you can extract to solve a problem or provide context. 

And to really get your imagination going, here are a few searches we’ve already done:
  - [Find out who your senator and representative are by your address.](http://le.utah.gov/GIS/findDistrict.jsp)
  - [Be transparent with your customers regarding environmental hazards.](http://enviro.deq.utah.gov/)
  - [Aid in the decision-making process to restore and manage ecosystems in priority areas across the state.](http://wri.utah.gov/)

## Getting Started
{: .text-left }

If you’re ready to explore Utah’s geospatial data and see the world around you in a different way, please refer to our [Getting Started Guide](https://developer.mapserv.utah.gov/StartupGuide) to get going with our Web API.
