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
- demographic
- location
---
![Census LUCA Program, 2018]({{ "/images/LUCA2018.png" | prepend: site.baseurl }}){: .inline-text-right .outline }This page contains information, data resources, tips, etc. for Utah participants in the US Census Bureau's Local Update of Census Addresses (LUCA) program.

### Contents
{: .text-left }
- [Background](#background)
- [Timeline](#timeline)
- [Contacts and Coordination](#contacts-and-coordination)
- [Prepping for LUCA Review](#prepping-for-the-luca-review)
- [Prioritizing](#prioritizing)
- [Security and Process Design](#security-and-process-design)
- [Data Resources](#data-resources)
- [Reference Materials](#reference-materials)
{: .dotless }

### Background
{: .text-left }
The Census Bureau's Local Update of Census Addresses (LUCA) program allows city, county, and state government to review and suggest edits to the master residential address list that Census uses to plan and execute their survey work. Of particular importance is the ability for Census to track responses across multiple survey mechanisms (field workers, survey-by-mail, and, this year, online response).

While LUCA participation is optional, many cities and counties plan to participate in the address list review. The closer the Census Bureau's master database matches the actual addresses on the ground in your community, the better shot you've got to be fully counted.

**Why?** _Here's the big reason to for state and local government to participate in LUCA:_ Nationally, over $675 billion is distributed annually, using census data as part of the formula, from the federal level back to state and local government. [Utah's annual share alone was $3.25 billion in 2015](https://gwipp.gwu.edu/sites/gwipp.gwu.edu/files/downloads/Utah%20CFD%2008-18-17.pdf). Getting Census positioned -- with a complete address list -- to make a full count of Utah residents helps ensure Utah gets back a proper share or what it pays in.

The decision to participate in the LUCA review is made by your highest elected official (Mayor, Commissioner, etc.) and the registration deadline is December 15th, 2017. The 120 day LUCA review time frame will begin for each jurisdiction in or after February 2018.

While limited paper and spreadsheet review options exist, **_the main vehicle for the LUCA review is via a GIS platform_**. To review and edit the address list, LUCA participants can use either the QGIS-based application Census provides (called GUPS), or other GIS software, such as ArcGIS Desktop or ArcGIS Pro, that will produce an output shapefile that adheres to the rigid data content/formal specification for LUCA.

### Timeline
{: .text-left }
**Census LUCA and other Master Address File programs schedule**

- **_December 15, 2017_**. Deadline for counties and cities to register to participate in LUCA address review. ([see Registration section of this page for instructions](https://www.census.gov/geo/partnerships/luca.html))
- **_February 2018_**. LUCA review process begins. Participants will each be assigned a 120 day review window that starts upon receipt of their jurisdictions address file from Census.
- **_Summer 2019_**. Feedback received back from LUCA program.
- **_Late 2019_*.* Census Bureau targeted addres canvassing field work begins.
- **_Summer 2019 - Spring 2020_**. Census Bureau New Construction address program in operation.
- **_April 1, 2020_**. Census Day.

_Other_: In addition to the LUCA program, Census will operate a new construction program, coordinate with USPS to receive new 'street delivery' mail addresses, and will conduct targeted 'address canvasing' field work.

{% capture liaison %}{% include contact.html subject=page.title contact=site.data.contacts.luca_liaison hide-punctuation=true text=' ' %}{% endcapture %}
{% capture trainer %}{% include contact.html subject=page.title contact=site.data.contacts.luca_trainer hide-punctuation=true text=' ' %}{% endcapture %}
### Contacts And Coordination
{: .text-left }
- State LUCA Liaison: {{ liaison | strip_newlines }}
- [Utah City and County LUCA participants](https://docs.google.com/spreadsheets/d/1WgYXqIBcQ3RZoWSPJVw5CLErjdPuM1gy9OzuaGHFCSg/edit?usp=sharing) (as of November 2nd, 2017).
- Census LUCA Trainer: {{ trainer | strip_newlines }}

### Prepping for LUCA Review
{: .text-left }
Our primary recommendation is for cities and counties to collaborate to improve their own address lists (and GIS coordinates for address locations) prior to embarking on the LUCA review. See _Prioritizing_ and _Process Design_ discussions below.

### Prioritizing
{: .text-left }
LUCA is all about improving the Census Bureau's master address file. But, given the state has over 1.1 million addresses and the LUCA review window is 120 days long, reviewing every address would entail reviewing 10,000 addresses per day during that period. The Census master address file contains, in theory, all of the addresses successfully surveyed during the 2010 census. Additionally, Census has stated that their partnership with the US Postal Service means that they have all of the locations that currently receive street delivery style mail (think traditional mailboxes filled daily by a letter carrier).

For these reasons, we encourage participants to focus on these types of addresses.

- Addressed residential structures without traditional street deliver mail (to a mailbox at/near the entrance to a structure)
- SubAddress locations, with unit numbers (apartments, trailer courts, etc)
- Addressed structures within gated communities and other areas with clustered mailboxes
- Redeveloped areas where new/infill housing has been added, densified, or existing housing has been converted to non-residential
- Group Quarters (dorms, group homes, homeless housing, assisted living facilities, etc)
- Unaddressed residential structures likely to have a permanent occupant on April 1, 2020

### Security and Process Design
{: .text-left }
One of the keys to understanding the LUCA process, and to keeping your organization out of trouble, is to remember that, within LUCA, data can only flow one way -- to the Census Bureau.

This means you must keep the master address file provided by Census for your jurisdiction condfidential. You may not use the Census master address file to imporve your own address data resources in any way.

And, for these reasons, you should design your process to improve your local address data first, ideally in GIS format. Then, when you're done creating and improving your own data, start the comparison and submission process that is specific to LUCA. Address data created outside of the LUCA review has fantastically broad benefit. But, if you create an address point within LUCA, it can only be used by the Census Bureau.

### Data Resources
{: .text-left }
[![Address Count Comaprison Example - click to enlarge]({{ "/images/PreLUCAAddressCountComparison.png" | prepend: site.baseurl }}){: .inline-text-right .outline }](https://docs.google.com/presentation/d/1hSYqhRELa7idGcsfsF7Cnb1BqNfMl1zqInk_yud65-4/edit#slide=id.p)**Statewide GIS Data Resources for the LUCA process**

- Census Address Count Block File. AGRC has prepared this dataset per Census directions as a [statewide shapefile or file geodatabase download](https://drive.google.com/drive/folders/1sKMQxDBjW8LknsEojZXZwMdVY1T1UXvO) or it can be used via an SDE connection (SGID10.Location.LUCABlockAddressCounts2017). An additional field has been added that contains the count of records in the current version of the SGID10.Location.AddressPoints statewide address map layer compiled from county address authorities.
- Roads Missing from Census TIGER. _Available February 2018_, this file will contain a statewide collection of road centerline segments missing from the Census LUCA data files. In its instructions at the Utah LUCA training, Census indicated that LUCA participants can submit missing road segments but encouraged everyone to focus on missing addresses or address corrections. As soon as AGRC receives the statewide LUCA files, we will use a change detection algorithm to identify missing roads statewide and these will be part of the Utah state-level LUCA submission. Since the LUCA roads layer is not protected Title 13 data, we will make the missing roads layer available for download and local jurisdictions can concentrate on addressing and any other missing roads (if desired).
- State-level address lists. _TBD_ AGRC plans to contact state agency programs with address lists that may be valuable to the LUCA process, to explore data sharing. Potential data partners may include the Driver's License, Motor Vehicle Registration, and the Tax Commission. Ensuring confidentiality is expected to be critical in any use of these address resources.
- [Utah-specific Address Geocoding Tools Webpage](https://gis.utah.gov/data/address-geocoders-locators/) allow users to geocode against Utah road centerlines or address points. ([Web API](http://api.mapserv.utah.gov), [ArcMap Add-in](https://gis.utah.gov/data/address-geocoders-locators/#GeocodingToolbox), [Google Sheets](https://chrome.google.com/webstore/detail/utah-address-locator/nepmlneiknaeojhadbeodpaefenhjkek?utm_source=permalink) and coming soon, a QGIS add-in that can be used within GUPS).
- The LUCA data that will be provided to participants will reflect municipal and county boundaries that AGRC submitted to Census BAS boundary survey in spring of 2017. For this reason, addresses within annexations that took place after the AGRC's BAS submission will not appear in the address lists that cities receive.

### Reference Materials
{: .text-left }
- [Official LUCA program flyer](https://www2.census.gov/geo/pdfs/partnerships/luca/2020CensusLUCA_Flyer.pdf)
- [LUCA Information Guide](https://www2.census.gov/geo/pdfs/partnerships/luca/2020LUCA_InfoGuide.pdf))
- Register to Participate in LUCA, [see Registration section of this page for instructions](https://www.census.gov/geo/partnerships/luca.html))
- [Powerpoints from November 2nd Census Bureau LUCA Training in Salt Lake City](https://drive.google.com/file/d/0BxoOAQyOvGgaOHhPSXhCTEdBdnN6a0d2VTk3OW5iVjdBXzAw/view?usp=sharing)
- [Census Bureau's LUCA FAQ](https://www2.census.gov/geo/pdfs/partnerships/luca/2020LUCA_FAQ.pdf)
- [LUCA Address File Submission Data Content Standard](https://drive.google.com/file/d/0BxoOAQyOvGgaaWtpTmc1aHVvRFZ6SGh0RHNpbjZlSU9yOVVj/view?usp=sharing)
