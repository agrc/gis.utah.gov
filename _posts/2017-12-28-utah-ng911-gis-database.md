---
layout: post
status: publish
published: true
title: 'Utah! Are you ready for Next Generation 911?'
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2017-12-28 10:15:55
categories:
- Featured
tags:
- 'Next Generation 911'
- '911'
- 'Utah 911'
---
Preparing for Next Generation 911 (NG911) is largely a group effort from individuals and agencies at the local, state and national level. There are a variety of key players to coordinate with and plenty of policies and guidelines to navigate. It can be overwhelming just trying to understand how the system works.

## Brief Overview of NG911

At its core, NG911 will result in substantial upgrades (often replacement) of the 911 communication infrastructure and call handling equipment. This newer, IP-based infrastructure will allow for text, video, and image interactions, as well as the ability to pass along device-based information to the PSAP. Additionally, in a true NG911 system, GIS plays a significant, required role. The GIS database will be used to pre-validate all addresses registered with your telecom provider (via geocoding against what is called the Location Validation Function, or LVF) as well as dynamically routing all 911 calls, based on digital boundaries, to the appropriate PSAP. The live call routing function uses what GIS professionals would call a 'point in polygon' search that is termed, in NG911-speak, the Emergency Call Routing Function, or ECRF.

With the current system (referred to as E911 since the 'E' was added when mobile phones became supported 12+ years ago), GIS is used after the call has been delivered to the PSAP (the 911 communicatipons center) - typically to validate the incident location and coordinate the dispatch of responders. Currently, 911 calls are routed to appropriate PSAP by way of lookup tables (known as ANI and ALI) and a tabular street address table (MSAG) that is maintained by the PSAP. Pushing updates to the call routing system, through these tables, can be timely and cumbersome.  NG911, however, will eliminate the need for these tables, as it relies solely on GIS map data. A more complete overview of how the 911 system works can be found [here]({{ "/utah-mapping-resources-well-prepared-for-nextgen-911/" | prepend: site.baseurl }}).

## AGRC and NG911
![NG911 Datasets]({{ "/images/utah-ng911-database.png" | prepend: site.baseurl }}){: .inline-text-right }

AGRC’s role in NG911 is centered on the GIS mapping (a.k.a 'geospatial') component. Truth be told, this, in-and-of-itself, is quite an undertaking. It involves statewide GIS datasets that must be accurate, complete, and current. Required and strongly recommended GIS map layers include roads, address points, PSAP boundaries, municipal boundaries, mile markers and more. Utah is in good shape thanks to the partnership built between AGRC and county and local govenment that has resulted in most of these datasets already being NG911-ready. Additionally, AGRC has established state data standards and sharing agreements that facilitate the consistency and longevity of these datasets.

Today, thanks to the willingness and cooperation of agencies within the State of Utah, we are excited to announce the first release of the [Utah NG911 GIS database]({{ "/data/911/" | prepend: site.baseurl }}). This database is based on the National Emergency Number Association’s (NENA) standard for a NG9-1-1 [GIS Data Model](https://dev.nena.org/higherlogic/ws/public/download/9828/20161206_NG9-1-1%20GIS%20Data%20Model_PubRvw.pdf), in its current form. Schema-wise, AGRC will keep current with this standard and update the Utah NG911 GIS database as NENA makes additions or changes to the specifications. NENA hopes to finalize this standard in the coming year or so.  In terms of data content, AGRC will update the Utah NG911 GIS database on a monthly cycle - in conjunction with our [road update cycle]({{ "/data/transportation/roads-system/" | prepend: site.baseurl }}). However, AGRC can, and will, make updates more frequently as needed. AGRC continues to explore collaborative, web-based GIS editing platforms that will make near-live edits possible, by authorative GIS data stewards areound the state.

## Looking Ahead

In a true NG911 system, GIS becomes a core component to the system. This puts a lot of responsibility on authoritative GIS editors at the local, regional (PSAP), and State levels. In 2018, AGRC looks to make further progress on providing a feedback mechanism for all approved authoritative data editors (such as local jurisdictions, PSAPs, sheriff’s office, etc.) where they can submit data modifications in a map editing environment and submit them to us so we can push them into production within the established time period. This will ensure the availability of highly accurate, near real time data to the State’s PSAPs and 911 community.  This is a really important aspect to AGRC because this mechanism can save lives!

AGRC also has plans to geocode the ALI tables against the Utah NG911 GIS database, looking for ALI addresses that do not geocode. Our goal is to ensure that all existing, valid ALI addresses are represented in the GIS database and to provide local jurisdictions with ALI addresses that need updating or other attention. This will speed up the transition to NG911 and GIS-based call routing, while undermining any reliance on the MSAG tables.

We encourage you download the [Utah NG911 GIS Database]({{ "/data/911/" | prepend: site.baseurl }}) and take a look at it. We are strong believers that the more eyes on the data, and the more use, the better it will get. If nothing else, make sure home and/or business addresses are geocodable, both the `RoadCenterlines` and `AddressPoints` datasets. These are the datasets that will ensure proper 911 response to your location. If you don’t have the required tools and software to interact with the NG911 dataset, please take a moment to use our [mapping website](http://atlas.utah.gov/) where you can validate your home and/or business address using the same underlying datasets. These datasets are only as good as we collectively make them, so give them a try and let us know if you experience any problems.

{% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.roads %}{% endcapture %}
{{ contact | strip_newlines }}

### Resources and Further Reading

- [NENA’s Standard for NG9-1-1 GIS Data Model](https://dev.nena.org/higherlogic/ws/public/download/9828/20161206_NG9-1-1%20GIS%20Data%20Model_PubRvw.pdf)
- [Utah Mapping Resources: Well-Prepared for NextGen 9-1-1]({{ site.baseurl }}{% post_url 2013-11-26-utah-mapping-resources-well-prepared-for-nextgen-911" })
- [AGRC’s NG911 Database webpage]({{ "/data/911/" | prepend: site.baseurl }})
- [AGRC’s GitHub Code Repo for the Utah NG911 GIS database ETL process](https://github.com/gregbunce/NextGen911UtahGISDataLoader)

### NG911 Alphabet Soup 

- **NG911**: Next Generation 911
- **PSAP**: Public-safety answering point (911 Communications Center)
- **NENA**: National Emergency Number Association
- **ALI**: Automatic Location Information (Legacy 911's table of physical addresses for each 10 digit telephone number)
- **ANI**: Automatic Number Identification (Legacy 911's equivalent of call-ID)
- **MSAG**: Master Street Address Guide (Legacy 911's table of street names and address ranges and the corresponding center to which center a 911 call will be sent)
- **LVF**: Local Validation Function (NG911's geocoding web service)
- **ECRF**: Emergency Call Routing Function (NG911's dynamic point-in-polygon service that determines to which PSAP a 911 is sent)
