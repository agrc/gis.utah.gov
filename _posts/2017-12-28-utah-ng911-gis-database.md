---
layout: post
status: publish
published: true
title: 'Hey, Utah! Are you ready for Next Generation 911?'
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
Preparing for Next Generation 911 (NG911) is largely a group effort by individuals and agencies at the local, state and national levels. AGRC is one of those agencies. We’re on the forefront of NG911 Data in Utah, and we’ve been coordinating with a variety of key players and navigating plenty of policies and guidelines to make the transition. With so many involved parties and policy details it can be overwhelming just trying to understand how the system works. So, let's talk about NG911.

## Brief Overview of NG911

At its core, NG911 is an upgraded 911 communication infrastructure system. NG911 will update, or sometimes even replace, outdated infrastructure and call-handling equipment. This newer, IP-based infrastructure will allow for text, video, and image content to be exchanged during 911/emergency interactions.  NG911 also has the ability to pass along device-based information to the 911 Communications Center, or the public-safety answering point (PSAP). 

Additionally, in a true NG911 system, GIS plays a significant and required role. A GIS database will be used to prevalidate all addresses registered with each telecom provider. This will be completed by: 
* geocoding against Location Validation Function, or LVF, and 
* dynamically routing all 911 calls, based on digital boundaries, to the appropriate PSAP. 
The live call-routing function uses what GIS professionals call a 'point-in-polygon-query', or, in NG911-speak; the Emergency Call Routing Function, or ECRF.

With the current system (referred to as E911 since the 'E' was added when mobile phones became supported more than twelve years ago), GIS is used after an emergency call has been delivered to the PSAP - typically to validate the incident location and coordinate the dispatch of responders. Currently, 911 calls are routed to the appropriate PSAP by way of lookup tables (known as Automatic Number Identification (ANI) and Automatic Location Information (ALI)) and a tabular street address table (known as the Master Street Address Guide (MSAG)) that is maintained by the PSAP. Pushing updates to the call-routing system, through these tables, can be timely and cumbersome and may consume valuable time during an emergency situation. NG911, however, will eliminate the need for these tables, as it relies solely on GIS map data. Within Utah, NG911 implementation will be coordinated by the [Utah Communications Authority's](http://uca911.org/911-division) (UCA) 911 Division. To learn more about NG911, visit the UCA [overview page](http://uca911.org/911-division/ng-911-gis).

## AGRC and NG911
![NG911 Datasets]({{ "/images/utah-ng911-database.png" | prepend: site.baseurl }}){: .inline-text-right }

AGRC’s role in NG911 is centered on the GIS mapping, or 'geospatial' component. Truth be told - this GIS mapping task - in itself is quite an undertaking. It involves statewide GIS datasets that must be accurate, complete, and current, and the list of required and strongly recommended GIS map layers is comprehensive: address points, PSAP boundaries, municipal boundaries, mile markers and more. Thankfully though, Utah is already in good shape with this data, due to the partnership between AGRC and county and local government, which has resulted in most of these datasets already being NG911-ready. Additionally, AGRC has established state data standards and sharing agreements that facilitate the consistency and longevity of these datasets.

Today, thanks to the willingness and cooperation of agencies within Utah, we are excited to announce the first release of the [Utah NG911 GIS database]({{ "/data/911/" | prepend: site.baseurl }}). This database is based on the National Emergency Number Association’s (NENA) standard for an NG9-1-1 [GIS Data Model](https://dev.nena.org/higherlogic/ws/public/download/9828/20161206_NG9-1-1%20GIS%20Data%20Model_PubRvw.pdf) in its current form. Schema-wise, AGRC will keep current with this standard and will update the Utah NG911 GIS database as NENA makes additions or changes to the specifications. NENA hopes to finalize this standard in the coming year or so.  In terms of data content, AGRC will update the Utah NG911 GIS database on a monthly cycle in conjunction with our [road update cycle]({{ "/data/transportation/roads-system/" | prepend: site.baseurl }}). However, AGRC can, and will, make updates more frequently as needed. AGRC continues to explore collaborative, web-based GIS editing platforms that will make near-live edits possible, thanks to authorative GIS data stewards around the state.

## Looking Ahead

In a true NG911 system, GIS becomes a core component to the system. This puts a lot of responsibility on authoritative GIS editors at the local, regional (e.g., PSAP), and state levels. In 2018, AGRC is looking to make further progress on providing a feedback mechanism for all approved authoritative data editors (such as local jurisdictions, PSAPs, sheriff’s offices, etc.) where they can submit data modifications in a map editing environment and then submit the maps to us so we can push them into production within the established time period. This will ensure the availability of highly accurate, near real-time data to the state’s PSAPs and 911 community.  This is a really important aspect to AGRC because this mechanism can save lives!

AGRC also plans to coordinate with UCA to geocode the ALI tables against the Utah NG911 GIS database, specifically looking for ALI addresses that do not geocode. Our goal is to ensure that all existing, valid ALI addresses are represented in the GIS database and to provide local jurisdictions with ALI addresses that need updating or other attention. This will speed up the transition to NG911 and GIS-based call routing, while also lessening any reliance on the MSAG tables.

## Want to Get Involved?

We encourage you to download the [Utah NG911 GIS Database]({{ "/data/911/" | prepend: site.baseurl }}) and take a look at it. We are strong believers that the more eyes are on the data and the more the data is used, the better it will get. If nothing else, make sure house or business addresses, or both, are geocodable in both the `RoadCenterlines` and `AddressPoints` AGRC datasets. These are the datasets that will ensure proper 911 response to your location during an emergency situation. 

If you don’t have the required tools and software to interact with the NG911 dataset, you can use our [mapping website](http://atlas.utah.gov/) to validate your address using the same underlying datasets. These datasets are only as good as we collectively make them, so give them a try and let us know if you experience any problems.

Comments, questions, or concerns can be directed to [Greg Bunce](mailto:GBunce@utah.gov) at AGRC.

### Resources and Further Reading

- [Utah Communications Authority's 911 Division](http://uca911.org/911-division)
- [NENA’s Standard for NG9-1-1 GIS Data Model](https://dev.nena.org/higherlogic/ws/public/download/9828/20161206_NG9-1-1%20GIS%20Data%20Model_PubRvw.pdf)
- [Utah Mapping Resources: Well-Prepared for NextGen 9-1-1]({{ site.baseurl }}{% post_url 2013-11-26-utah-mapping-resources-well-prepared-for-nextgen-911 %})
- [AGRC’s NG911 Database webpage]({{ "/data/911/" | prepend: site.baseurl }})
- [AGRC’s GitHub Code Repo for the Utah NG911 GIS database ETL process](https://github.com/gregbunce/NextGen911UtahGISDataLoader)

### NG911 Alphabet Soup

- **NG911**: Next Generation 911
- **UCA**: Utah Communications Authority
- **PSAP**: Public-safety answering point (911 Communications Center)
- **NENA**: National Emergency Number Association
- **ALI**: Automatic Location Information (Legacy 911's table of physical addresses for each 10 digit telephone number)
- **ANI**: Automatic Number Identification (Legacy 911's equivalent of call-ID)
- **MSAG**: Master Street Address Guide (Legacy 911's table of street names and address ranges and the corresponding center to which center a 911 call will be sent)
- **LVF**: Local Validation Function (NG911's geocoding web service)
- **ECRF**: Emergency Call Routing Function (NG911's dynamic point-in-polygon service that determines to which PSAP a 911 is sent)
