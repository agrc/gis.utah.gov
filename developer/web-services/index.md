---
status: publish
layout: page
title: Unleash the power of the SGID with the AGRC Web API
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
tags:
  - api
  - web services
categories:
  - Developer
published: true
date: 2011-06-30 18:23:51 -0500
---
<i class="fas fa-2x fa-fw fa-magic"></i> The [AGRC's Web API](http://api.mapserv.utah.gov) allows for developers to work with the data and services that AGRC maintains and creates. You can query any data layer in our SGID or you can geocode addresses against the most accurate statewide roads data set to name a few highly popular uses. All of our [widgets and add-ins]({{ "/developer/widgets/" | prepend: site.baseurl }}) make full use of our web API's.

#### Possibilities
The main API's that we offer are **geocoding** and **searching**.

Geocoding allows you to find a geographic location from an address. AGRC's geocoding philosophy is unique since we would rather give you no match than the wrong match. We will have the best match rates for Utah addresses.

#### Do you have a database full of house addresses?
Unlock the ability to visually see your data by geocoding them. Visit the [API Explorer](http://api.mapserv.utah.gov/#geocoding) to see all the options for geocoding.

The searching API really opens up the opportunity for serious information gathering. The [SGID]({{ "/data/sgid-index/" | prepend: site.baseurl }}) has over 300 layers of real world data that you can run queries against.

#### Remember that database full of house addresses?
You can learn so much from a house address once it has been geocoded. You could use our **search API** to find out how far away addresses are from a fault line, what school district the kids are in, what the broadband availability is and the list goes on. Head over to the [data]({{ "/data/" | prepend: site.baseurl }}) pages of our website and look at all the information you can extract to solve a problem or provide context.

We haven't thought of all the great ideas you can build with our API but here are a few things we've already done to get your imagination going.

 - [Find out who you Senator and Representative are by your address](http://le.utah.gov/GIS/findDistrict.jsp)
 - [Be transparent about environmental hazards with your customers](http://enviro.deq.utah.gov/)
 - [Aid in the decision making process to restore and manage ecosystems in priority areas across the state of Utah's Wildlife](http://wri.utah.gov/)

#### Getting Started
Please refer to our [Getting Started Guide](https://developer.mapserv.utah.gov/StartupGuide) to get up and going with the AGRC web api's.
