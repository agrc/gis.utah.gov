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

At its core, NG911 equates to substantial upgrades (often replacement) to the communication infrastructure and call handling equipment. This newer, IP-based infrastructure will allow for text, video, and image interactions, as well as the ability to pass along device-based information to the PSAP. Additionally, in a true NG911 system, GIS plays a significant role. The GIS database will be used to pre-validate (via geocoding and the LVF) all addresses registered with the telecom as well as dynamically route all 911 calls (via the ECRF) to the appropriate PSAP. With the current system (referred to as E911), GIS is used after the call has been delivered to the PSAP - typically for map display and vehicle routing. Currently, 911 calls are routed to appropriate PSAP by way of lookup tables (known as ANI and ALI) and a tabular street address table (MSAG) that is maintained by the PSAP. Pushing updates to the call routing system, through these tables, can be timely and cumbersome.  NG911, however, will eliminate the need for these tables, as it relies solely on GIS. A more complete overview of how the 911 system works can be found [here]({{ "/utah-mapping-resources-well-prepared-for-nextgen-911/" | prepend: site.baseurl }}).

## AGRC and NG911
![NG911 Datasets]({{ "/images/utah-ng911-database.png" | prepend: site.baseurl }}){: .inline-text-right }

AGRC’s role in NG911 is centered on the geospatial component. Truth be told, this, in-and-of-itself, is quite an undertaking. It involves accurate and current statewide mature datasets for layers such as roads, address points, PSAP boundaries, municipal boundaries, mile markers and more. Thankfully, AGRC has been around long enough and has had the foresight to build and foster intra-state relationships that have made these datasets as mature as they are. They are product of state and local coordination with more than 29 agencies. Additionally, AGRC has established data standards and sharing agreements that facilitate the consistency and longevity of these datasets.

Today, thanks to the willingness and cooperation of agencies within the State of Utah, we are excited to announce the first release of the [Utah NG911 GIS database]({{ "/data/911/" | prepend: site.baseurl }}). This database is built on the National Emergency Number Association’s (NENA) Standard for NG9-1-1 [GIS Data Model](https://dev.nena.org/higherlogic/ws/public/download/9828/20161206_NG9-1-1%20GIS%20Data%20Model_PubRvw.pdf), in its current form. Schema-wise, AGRC will keep current with this standard and update the Utah NG911 GIS database if and when NENA makes changes to the specifications. NENA hopes to finalize this standard soon.  Data-wise, AGRC will update the Utah NG911 GIS database on a monthly cycle - in conjunction with our [road update cycle]({{ "/data/transportation/roads-system/" | prepend: site.baseurl }}). However, AGRC can, and will, make updates more frequently when the data suggests.

## Looking Ahead

In a true NG911 system, GIS becomes front and center. This puts a lot of responsibility on authoritative GIS editors at the local, regional (PSAP), and State levels. In 2018, AGRC looks to make further progress on providing a feedback mechanism for all approved authoritative data editors (such as local jurisdictions, PSAPs, sheriff’s office, etc.) where they can submit data modifications in a map editing environment and submit them to us so we can push them into production within the established time period. This will ensure the availability of highly accurate, near real time data to the State’s PSAPs and 911 community.  This is a really important aspect to AGRC because this mechanism can save lives!

AGRC also has plans to geocode the MSAG tables against the Utah NG911 GIS database, looking for MSAG addresses that do not geocode. Our goal is to ensure that all existing, valid MSAG addresses are represented in the GIS database. This will speed up the transition to NG911 and GIS-based call routing, while undermining any reliance on the MSAG tables.

We encourage you download the [Utah NG911 GIS Database]({{ "/data/911/" | prepend: site.baseurl }}) and take a look at it. We are strong believers that the more data is used, the better it gets. If nothing else, make sure your home and/or business is represented as a geocodable address in both the `RoadCenterlines` and `AddressPoints` datasets. These are the datasets that will ensure proper 911 response to your location. If you don’t have the required tools and software to interact with the NG911 dataset, please take a moment to use our [mapping website](http://atlas.utah.gov/) where you can validate your home and/or business address using the same underlying datasets. These datasets are only as good as we collectively make them, so do your part and validate.

{% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.roads %}{% endcapture %}
{{ contact | strip_newlines }}

### Resources and Further Reading

- [NENA’s Standard for NG9-1-1 GIS Data Model](https://dev.nena.org/higherlogic/ws/public/download/9828/20161206_NG9-1-1%20GIS%20Data%20Model_PubRvw.pdf)
- [Utah Mapping Resources: Well-Prepared for NextGen 9-1-1]({{ "/_posts/utah-mapping-resources-well-prepared-for-nextgen-911/" | prepend: site.baseurl }})
- [AGRC’s NG911 Database webpage]({{ "/data/911/" | prepend: site.baseurl }})
- [AGRC’s GitHub Code Repo for the Utah NG911 GIS database ETL process](https://github.com/gregbunce/NextGen911UtahGISDataLoader)


*[NG911]: Next Generation 911
*[PSAP]: Public-safety answering point
*[NENA]: National Emergency Number Association
*[ALI]: Automatic Location Information
*[ANI]: Automatic Number Identification
*[MSAG]: Master Street Address Guide
*[LVF]: Local Validation Function
*[ECRF]: Emergency Call Routing Function
