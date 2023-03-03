---
title: "The Broadband Fabric Data Challenge Process: A Tale of Collaboration"
author:
  display_name: Jake Adams
  email: jdadams@utah.gov
date: 2023-03-01 12:00:00
categories:
  - Featured
tags:
  - data
  - broadband
---

_From the I Challenge You to a Duel department_
{: .text-center}

Among the many lessons the Covid-19 pandemic taught us, one that was hammered home almost immediately was the importance of high-speed broadband internet access at home. As work-from-home and simultaneous video calls became commonplace, we discovered that the asymmetrical, download-focused broadband of yesteryear just didn't cut it anymore. What's more, we also discovered that **figuring out what broadband was available in our neighborhood was a more difficult task than it had to be.**

Unfortunately, this isn't new—the state and federal governments have been struggling with poor data on broadband availability for years. While the FCC required providers to report coverage, the reliance on census block geometries made it impossible to get an accurate and fine-grained picture. **Without accurate data, governments have struggled to direct resources and policy to areas that are lacking coverage or the competition necessary for free market economics to do their thing.** Ultimately, consumers have often been the ones to suffer slow speeds and high prices.

We can all rejoice that improvement is coming. In 2019, the FCC [voted](https://www.fcc.gov/document/fcc-improves-broadband-mapping) to collect more granular data and hopefully improve some of the [long-standing problems](https://arstechnica.com/tech-policy/2019/08/the-fccs-horrible-broadband-mapping-system-is-finally-getting-an-upgrade/) with the existing system. As part of these efforts, the FCC invited state and local governments to help with the process to ensure that the maps are more accurate.

UGRC worked with the [Utah Broadband Center](https://business.utah.gov/broadband/) and used our existing relationships with county GIS departments to respond to this invitation. **This cooperation and collaboration resulted in Utah having, by far, the largest number of corrections accepted in the nation.** This would not have been possible without the hard work (on a tight deadline) of the counties who were able to participate. We express a heart-felt **Thank You!** to Box Elder, Weber, Tooele, Salt Lake, Utah, Summit, and Wayne counties for participating on such short notice. We were able to gather over 110,000 challenges, with over 48,000 ultimately being accepted: **24,598 new BSLs and 23,491 corrected addresses.**

![Utah had by far the most accepted challenges]({% link images/bb_challenge_results.png %})

## The Collection Process: Every Program Needs Acronyms
{: .text-right}

The work behind the FCC's new [broadband map](https://broadbandmap.fcc.gov/home) has been christened the [Broadband Data Collection](https://www.fcc.gov/BroadbandData), or BDC for short. There are two critical pieces to the BDC: a foundation of location data called the "fabric" made up of Broadband Serviceable Locations (BSLs) and the actual availability data that is built on top of the BSLs.

### Yards and Yards of Fabric
{: .text-right}

The fabric is the [foundation of the BDC](https://help.bdc.fcc.gov/hc/en-us/articles/5375384069659-What-is-the-Location-Fabric-), the basis that everything elses is built upon. It is "a dataset of all locations ... where fixed broadband internet access service is or could be installed." These Broadband Serviceable Locations are meant to capture every single structure in the country that should be part of the broadband conversation.

The FCC tackled this daunting challenge by hiring a third party contractor, CostQuest, to develop an initial fabric. CostQuest [used](https://help.bdc.fcc.gov/hc/en-us/articles/9157937493275-Video-Broadband-Serviceable-Location-Fabric-How-It-Was-Created) aerial imagery-based machine learning combined with publicly available parcel, address, and other datasets to identify BSLs across the country. The first version of the fabric was released in June of 2022, and updated versions will be released every six months.

### Challenge Accepted...?
{: .text-right}

As part of the update process, the FCC allows for both bulk and individual [challenges](https://help.bdc.fcc.gov/hc/en-us/articles/8554187214107-Fabric-Challenge-Process) to the fabric. These are corrections that either a group or individual feel need to be made to the fabric- missing points, incorrect addresses, wrong locations, that sort of thing.

Fabric challenges have to follow a very specific format and have to a reach a certain level of evidence and defensibility before they will be accepted. While CostQuest (on behalf of the FCC) gives local governments a large amount of deference for local knowledge, they still perform checks on the challenge submissions before accepting them as BSLs.

The Utah Broadband Center worked with UGRC to prepare a state-wide fabric challenge on behalf of the cities and counties throughout the state. We provided a buffer between the bureacratic requirements of the FCC submission and the local experts at the county level, allowing them to spend their limited time on the work that really matters.
