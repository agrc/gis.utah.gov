---
layout: page
status: publish
published: true
title: 'Utah Census LUCA 2020'
author:
  display_name: Bert Granberg
  email: bgranberg@utah.gov
date: 2017-11-07 15:35:53
categories:
- Featured
tags:
- luca
- census
- address
---
This page contains information, data resources, tips, etc. for Utah participants in the US Census Bureau's Local Update of Census Addresses (LUCA) program.

Contents:

- [Background](#background)
- [Timeline](#timeline)  
- [Contacts and Coordination](#contacts-and-coordination)
- [Prepping for LUCA Review](#prepping-for-the-luca-review)
- [Prioritizing](#prioritizing)
- [Security and Process Design](#security-and-process-design)
- [Data Resources](#data-resources)
- [Reference Materials](#reference-materials)
{: .dotless }

#### Background

#### Timeline

**Luca Schedule**

- December 15, 2017. Deadline for counties and citues to register to participate in LUCA address review.
- February 2018. LUCA review process begins. Participants will each be assigned a 120 day review window that starts upon receipt of their jurisdictions address file from Census.
- Summer 2019. Feedback received back from LUCA program
- April 1, 2020. Census Day

Other: In addition to the LUCA program, Census will operate a new construction program, coordinate with USPS to receive new 'street delivery' mail addresses, and will conduct targeted 'address canvasing' field work.

#### Contacts And Coordination

- State LUCA Liaison: [Bert Granberg](mailto:bgranberg@utah.gov?subject=Utah LUCA), Utah Automated Geographic Reference Center (AGRC)
- [Utah City and County LUCA participants](https://docs.google.com/spreadsheets/d/1WgYXqIBcQ3RZoWSPJVw5CLErjdPuM1gy9OzuaGHFCSg/edit?usp=sharing) (as of November 2nd, 2017).
- Census LUCA Trainer: [Dorothy McKinney](mailto:dorothy.a.mckinney@census.gov?subject=Utah LUCA)

#### Prepping for LUCA Review

Our primary recommendation is for cities and counties to collaborate to improve their own address lists (and GIS coordinates for address locations) prior to embarking on the LUCA review. See _Prioritizing_ and _Process Design_ discussions below.

#### Prioritizing

LUCA is all about improving the Census Bureau's master address file. But, since, given the state has over 1.1 million addresses and the LUCA review window is 120 days long, reviewing every address would entail reviewing 10,000 addresses per day. The Census master address file contains, in theory, all of the addresses successfully surveyed during the 2010 census. Additionally, Census has stated that their partnership with the US Postal Service means that they have all of teh lcoatiosn that currently receieve street delivery style mail (think traditional mailboxes filled daily by a letter carrier).

For these reasons, we encourage participants to focus on these types of addresses. 

- Addressed residential structures without traditional street deliver mail (to a box at/near the entrance to a structure)
- SubAddress locations, with unit numbers (apartments, trailer courts, etc)
- Redeveloped areas where new/infill housing has been added, densified, or existing housing has been converted to non-residential
- Group Quarters (dorms, group homes, homeless housing, assisted living facilities, etc)
- Unaddressed residential structures likely to have a permanent occupant on April 1, 2020

#### Security and Process Design

One of the keys to understanding the LUCA process, and to keeping your organization out of trouble, is to remember that, within LUCA, data can only flow one way -- to the Census Bureau.

This means you must keep the master address file provided by Census for your jurisdiction condfidential. You may not use the Census master address file to imporve your own address data resources in any way.

And, for these reasons, you should design your process to improve your local address data first, ideally in GIS format. Then, when you're done creating and improving your own data, start the comparison and submission process that is specific to LUCA. Address data created outside of the LUCA has fantastically broad benefit, If you create an address point within LUCA, it can only be used by the Census Bureau.

#### Data Resources

**Statewide GIS Data Resources for the LUCA process**

- Census Master Address Count By Census Block. AGRC has prepared this dataset statewide for download or use via and SDE connection. An additional field has been added that contains the count of records in the current version of the SGID10.Location.AddressPoints statewide address map layer compiled from county address authorities.
- Roads Missing from Census TIGER. _Available February 2018_, this file will contain a statewide collection of road centerline segments missing from the Census LUCA data files. In its instructions at the Utah LUCA training, Census indicated that LUCA participants can submit missing road segments but encouraged everyone to focus on missing addresses or address corrections. As soon as AGRC receives the statewide LUCA files, we will use a change detection algorithm to identify missing roads statewide and these will be part of the Utah state-level LUCA submission. Since the LUCA roads layer is not protected Title 13 data, we will make the missing roads layer available for download and local jurisdictions can concentrate on addressing and any other missing roads (if desired).
- State-level address lists. _TBD_ AGRC plans to contact state agency programs with address lists that may be valuable to the LUCA process, to explore data sharing. Potential data partners may include the Drivers License, Motor Vehicle Registration, State Tax Commission, and Department of Commerce. Ensuring confidentiality is expected to be critical in any use of these address resources. 
- [Utah-specific Address Geocoding Tools Webpage](https://gis.utah.gov/data/address-geocoders-locators/) allow users to geocode against Utah road centerlines or address points. ([Web API](http://api.mapserv.utah.gov), [ArcMap Add-in](https://gis.utah.gov/data/address-geocoders-locators/#GeocodingToolbox), [Google Sheets](https://chrome.google.com/webstore/detail/utah-address-locator/nepmlneiknaeojhadbeodpaefenhjkek?utm_source=permalink) and coming soon, a QGIS add-in that can be used within GUPS).

#### Reference Materials

- [Powerpoints from November 2nd Census Bureau LUCA Training in Salt Lake City](https://drive.google.com/file/d/0BxoOAQyOvGgaOHhPSXhCTEdBdnN6a0d2VTk3OW5iVjdBXzAw/view?usp=sharing)
- [Census Bureau's LUCA FAQ](https://www2.census.gov/geo/pdfs/partnerships/luca/2020LUCA_FAQ.pdf)
- [LUCA Address File Submission Data Content Standard](https://drive.google.com/file/d/0BxoOAQyOvGgaaWtpTmc1aHVvRFZ6SGh0RHNpbjZlSU9yOVVj/view?usp=sharing) 
