---
title: Census LUCA Training for Utah
author:
  display_name: Bert Granberg
  email: agrc@utah.gov
date: 2017-10-30 22:09:42
categories: []
tags:
  - address
  - census
  - location
---
As a lot of folks know, it's in Utah communities' interest to get a full population count during the upcoming 2020 census. For example, [funding formulas for many programs are tied to demographic data collected by the Census Bureau](https://www.nsgic.org/gwu-counting-for-dollars--census-informed-federal-program-funding). The census count is also used as a guide for redrawing local, state, and national election districts. Helping Census prepare for 2020 is important and something that Utah GIS and addressing professionals are uniquely positioned to do.

_The info below is a re-posting of information AGRC has emailed to county and city GIS and address contacts._

### What is LUCA?
{: .text-left }

![Census LUCA Program, 2018]({{ "/images/LUCA2018.png" | prepend: site.baseurl }}){: .inline-text-right .outline }The Census Bureau's Local Update of Census Addresses (LUCA) program allows city, county, and state government to review and suggest edits to the master residential address list that Census uses to plan and execute their survey work. Of particular importance is the ability for Census to track responses across multiple survey mechanisms (field workers, survey-by-mail, and, this year, online response).

While LUCA participation is optional, many cities and counties plan to participate in the address list review. The closer the Census Bureau's master database matches the actual addresses on the ground in your community, the better shot you've got to be fully counted.

### Participating in LUCA
{: .text-left }

The decision to participate in the LUCA review is made by your highest elected official (Mayor, Commissioner, etc.) and the registration deadline is December 15th. The 120 day LUCA review time frame will begin in February 2018. While limited paper and spreadsheet review options exist, **_the main vehicle for the LUCA review is via a GIS platform_**.  To review and edit the address list, LUCA participants can use either the QGIS-based application Census provides (called GUPS), or other GIS software that will produce an output shapefile that adheres to the rigid data content/formal specification for LUCA.

### LUCA Training
{: .text-left }

AGRC, on behalf of the Census Bureau and in partnership with the Governor's Office of Management and Budget, has scheduled Utah's LUCA training session for:

  Thursday, November 2nd, from 1pm - 5pm  
  195 North 1950 West, Salt Lake City  
  MASOB Building, Room 1019 A/B  

Please **[RVSP for the Nov. 2nd training](https://docs.google.com/forms/d/e/1FAIpQLSczYHcjdbW33f-8VpnevDEq9rOL4V18astz6uU74VAUpXJFZg/viewform?usp=sf_link)**.
{: .pop .text-center }

At this meeting, Census will provide a technical overview of the options for participation in the LUCA address list review. AGRC has asked for Census to move quickly through the basics so additional time can be spent on the QGIS-based application and the shapefile submission option.

Utah communities do not yet need to be formally registered for the LUCA review to attend this training. The training will cover how to get registered to participate in LUCA but you can review online materials ([flyer](https://www2.census.gov/geo/pdfs/partnerships/luca/2020CensusLUCA_Flyer.pdf) or [information guide](https://www2.census.gov/geo/pdfs/partnerships/luca/2020LUCA_InfoGuide.pdf)) to learn more and to get a start on assisting your jurisdiction's highest-elected offical in registering for LUCA now ([see Registration section of this page for instructions](https://www.census.gov/geo/partnerships/luca.html)).

### Larger Benefit
{: .text-left }

Lastly, a point of emphasis. Maintaining a GIS layer of addresses is obviously of great value for more than just the 2020 census. Active data exchanges between Census and the Postal Service mean that the most important address work to support the LUCA process is expected to be adding missing residential addresses that do not receive traditional street delivery-style mail such as:
subaddresses (unit and apartment numbers), residences with clustered mailboxes such as dorms, trailer parks, or gated communities
rural delivery route addresses, and communities with PO Box only mail delivery.
The LUCA process will push us all to create/refine Utah address data resources. We'll also discuss how this work can best be organized to support the Census process but also meet similar data requirements for emergency response and other vital service needs, while complying with the strict legal restrictions for handling the input address data received from Census.

If you have questions, please feel free to contact {% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.luca_liaison %}{% endcapture %}
{{ contact | strip_newlines }}
