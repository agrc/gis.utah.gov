---
title: Utah's NG911 GIS Roadmap
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2018-08-31 11:00:00
categories:
  - Featured
tags:
  - '911'
  - next generation 911
  - utah 911
---

As the State of Utah moves closer to Next-Generation-911 implementation (NG911), GIS data providers will soon be required to adhere to national standards set forth by the [National Emergency Number Association (NENA)](https://www.nena.org/) and the [State's 911 Division](http://uca911.org/911-division) [(section 6 or ref 1)](#further-reading).  It can be daunting navigating these `standards` and `best practice` documents, so the intent of this article is to demystify the relevant information, and lay out a road map of where we are going.

This post is focused on GIS as it relates to NG911 Core Services and the Spatial Interface (SI).  These are the services needed to process a call on the ESINet (Emergency Services IP Network [(ref 9)](#further-reading).  For GIS, this is equates to address validation and 911 call routing.  Essentially, these are the operations that take place before the call is received at the appropriate PSAP (dispatch center).  As a result, NENA has established standards to ensure that these operations can be carried out flawlessly.  Failing to comply with these standards could ultimately result in misrouted 911 calls [(section 2.2 of ref 5, section 2 of ref 4)](#further-reading).

Currently with E-911, the Automatic Number Identification (ALI), Master Street Address Guide (MSAG), and Selective Router are responsible for these functions.  However, in a true NG911 environment, the GIS is the backbone to address validation and call routing - eventually replacing the MSAG, ALI, and the Selective Router [(section 4.8 of ref 1; section 2.1 of ref 5, section 2.1 of ref 3)](#further-reading).  Within NG911 Core Services, the Location Validation Function (LVF) will pre-validate addresses and the Emergency Call Routing Function (ECRF) will route calls to the appropriate PSAP based on a point-in-polygon query with either the pre-validated address (for landlines) or the cellular devices' x,y coordinates [(section 4.7 and 4.8 of ref 1; section 3 of ref 5; section 2 of ref 4; section 2.1 of ref 3)](#further-reading).  Don't worry if all these acronyms sound like mumbo jumbo.  The big take away here is that accuracy and consistency of GIS data in NG911 systems are extremely critical.

For more info on any these topics see the [Recommended Reading and References](#further-reading) section below.

### Standards and Best Practices
{: .text-left}
`Required Datasets`
* Service Area Boundaries
  * PSAP Boundaries
  * Emergency Service Boundaries (Law, Fire, EMS)
  * Provisioning Boundaries (these define the extent of the data provider's responsibility)
* Civic Location Data
  * Site/Structure Address Points
  * Road Centerlines

  Further reading see [section 3 of ref 3; section 4.2 of ref 5](#further-reading):

`Data Requirements`
* Prior to NG911 implementation, Civic Location data must be matched and reconciled against the MSAG and ALI
  * The GIS data should contain all valid ALI/MSAG records [(2.2.1 of ref 4; ref 8)](#further-reading)
* The required GIS datasets must adhere to NENA NG911 Data Model specifications including:
  * projection, field names, data types, domains, etc. [(ref 3)](#further-reading)
* Emergency Service Boundaries (Law, Fire, EMS) must be checked for unintended gaps or overlaps
  * Gaps or overlaps could result in incorrect 911 call routing [(section 4.7 of ref 5)](#further-reading)
* Site/Structure Address Point and Road Centerline address components should be consistent
  * Validate and check for unintended discrepancies [(section 3.2 of ref 3, section 4.7 of ref 5)](#further-reading)
* Road Centerlines should not contain segments with identical attributes and different geometries [section 4.7 of ref 5)](#further-reading)
* Road Centerlines should not contain overlapping address ranges [section 5.4.3 of ref 5)](#further-reading)
* Site/Structure Address Points should not contain duplicate records [section 5.4.3 of ref 5)](#further-reading)

Further reading see [(reference 3, 4, 5, 7, 8, 9, 10)](#further-reading)

### Who's Responsible for What? [(see graphic below)](#graphic)  
{: .text-left}
  
`Utah's 911 Division` in conjunction with `AGRC`
* Provide Utah's statewide, [NG911 GIS database](https://gis.utah.gov/data/911)
* Aggregate and validate 911 data (perform QA/QC before providing it to the State's NG911 Core Services Service Provider)
* Ensure that required GIS datasets adhere to NENA NG911 Data Model specifications
  * AGRC will look for discrepancies and inconsistencies in the aggregated, statewide [NG911 GIS Database](https://gis.utah.gov/data/911) and report them back to the data providers [section 5.4.3 of ref 5)](#further-reading)
* Be the authoritative source for PSAP Boundaries utilized by NG911 Core Services (ECRF/LVF) [(section 3.5 of ref 3)](#further-reading)

  Further reading see [Section 4.7 of ref 1, Sections 4.1 and 5.2.4 of ref 5, Section 3 of ref 3, and Section 2.2.3 of 10](#further-reading):

`Authoritative Data Providers`
* Coordinate and collaborate with the State 911 Division, AGRC, and neighboring agencies (PSAPs)
* Create, maintain and provide required GIS datasets (within their provisioning boundary) for NG911 Core Services (ECRF/LVF)
  * Service Area Boundaries
  * Civic Location Data
* Ensure the required GIS datasets adhere to current NENA standards
  * Civic Location data
    * Maintain consistency between Site/Structure Address Points and Road Centerlines
  * Emergency Service Boundaries (Law, Fire, EMS)  
    * Ensure no unintended gaps or overlaps
* Perform regular QA/QC on required datasets
  
  Further reading see [Section 4.7 of ref 1, Section 5.2.1 of ref 5 and Section 2.2.3 of 4](#further-reading):

## NG911 GIS Roadmap
{: .text-left}
#### `Near-term`
{: .text-left}
![Near-term]({{ "/images/arrow_one.png" , prepend: site.baseurl }}){: .text-left}

Data validation and clean up are the next, most logical steps for GIS readiness.  These are often considered the first steps in NG911 transition.  At the moment, AGRC is focused on facilitating two specific data validation checks, both mentioned above under Data Requirements category:

##### ALI/MSAG and GIS

* The 911 Division is in the process of obtaining statewide ALI and MSAG data for the purposes of GIS data synchronizing. AGRC will geocode the ALI database against the GIS data to ensure that all valid addresses in the phone carrier’s database can be located/validated in the GIS data [(section 6 of ref 1)](#further-reading).  A similar process will need to happen with the MSAG data.  All valid addresses in the ALI database must have a corresponding site/structure address point in the GIS data.  
* AGRC will then work with the data providers to resolve any valid discrepancies.

##### Address Component Cross Check
{: #cross-check .text-left}
* NG911 Core Services state that Site/Structure Address Points and Road Centerlines must be consistent.  In other words -unless intended- each Site/Structure Address Point should match an associated Road Centerline.  This supports the requirements that a civic address is considered valid if it can be located within the database uniquely [section 4.8 of ref 1)](#further-reading).  Here are some common mismatch issues AGRC has found:
	* Address components don’t match.  These issues include mismatch in the following address component fields: pre direction, street name, post type, and post direction.
		* To resolve: Data providers must determine which dataset (Site/Structure Address Points or Road Centerlines) has the correct address component and then correct the issue.
	* Site/Structure Address Points can not find corresponding Road Centerline.  Often this is because the road has the alias and primary names switched or the road segment has not been put into GIS yet.
    * To resolve: Data provider needs to determine the official primary street name and adjust dataset fields as needed.
	* Road centerline address range does not accommodate the address point
		* To resolve: Typically, the road centerline address ranges need to be adjusted
* AGRC will work with data providers to resolve any unintended discrepancies (see [What can you do now?](#do-now) section below).


#### `Mid-term`
{: .text-left}
![Mid-term]({{ "/images/arrow_two.png" , prepend: site.baseurl }}){: .text-left}
* Identify and resolve any gaps and/or overlaps in the Emergency Service Boundaries (Law, Fire, EMS).
* Resolve address range overlap in Road Centerlines
* Resolve duplicate records in Site/Structure Address Points
* Break/Split all Road Centerline segments at PSAP and Jurisdiction Boundaries.  This will ensure that road segments contain the proper spatial-boundary values.
	* fields corresponding to polygon boundaries will need to be updated as well
* Ensure the current PSAP boundaries are official, and that each PSAP has signed off on them.  It is essential that these boundaries are correct, as they will used to route 911 calls.
  * Identify and resolve any gaps and/or overlaps in the PSAP Boundaries
* Establish a statewide, multi-user mechanism that supports ‘near-live’ NG911 data editing in Utah.  This would allow data providers (cities, counties, PSAPs, etc) to quickly resolve conflicts and/or unintended discrepancies, allowing them to directly edit 911 GIS data [(section 4.7 of ref 1)](#further-reading).
* Determine the authoritative data providers for data used in NG911 Core Services and create the Provisioning Boundaries [(section 3.5 of ref 3)](#further-reading)

#### `Long-term`
{: .text-left}
![Long-term]({{ "/images/arrow_three.png" , prepend: site.baseurl }}){: .text-left}
* Get all 911-related data providers the needed training and access to the statewide, NG911 multi-user, data editing platform/application.
* Incorporate a workflow to review these edits (from the NG911 multi-user, data editing platform) and push them into the official State of Utah NG911 database (on a daily basis).
* Establish the NG911 multi-user, data editing platform as Utah’s official NG911 data editor [(section 5.1 of ref 5; section 4.7 of ref 1)](#further-reading).
* Provision Utah's statewide, [NG911 GIS database](https://gis.utah.gov/data/911) so it can used locally by the PSAPs (for their record keeping and dispatch systems).  This would eliminate data duplication, and ultimately provide all 911 users the best possible data.  This concept is in line with the 911 Division's promotion of a consistent 911 service across the State of Utah. [(section 5.3 and 6 of ref 1)](#further-reading)  

## What can you do now?
{: #do-now .text-left}

If you are a 911 GIS data provider, it's in your best interest to begin validating and provisioning your data as soon as possible.  In the coming months, AGRC will geocode the ALI database and begin working with the data providers to resolve missing addresses.  

At the moment, the most effective thing you can do is to resolve unintended discrepancies between Site/Structure Address Points and Road Centerlines.  To facilitate in this, AGRC has created a custom process to perform these validation checks and then output the needed discrepancy reports for the 911 data providers.  Get involved now by visiting the [project's homepage](https://gregbunce.github.io/AddressData_CrossCheck/).

Additionally, it's in your best interest to view the current, draft version of Utah's statewide [NG911 GIS database](https://gis.utah.gov/data/911).  In particular, it is highly recommended that you validate your jurisdiction's PSAP, Fire, Law, and/or EMS boundaries, ensuring that they are correctly represented.  AGRC will continue to push monthly updates and modification into this database in hopes that 911 data providers will view the data and help us resolve unintended discrepancies.

Keep in mind:
1. NG911 implementation won't happen overnight: there will be a hybrid, GIS/MSAG (GeoMSAG) approach at first.
2. Provisioning data for NG911 Core Services (ECRF/LVF) is an ongoing process [(section 1 of ref 5)](#further-reading)
2. We should all be [working together](#graphic), towards the same end goal of public safety.

Be proactive and get involved now.  Contact Greg Bunce at AGRC for more information.

## Recommended Reading and References
{: #further-reading .text-left}
The [State's 911 Division](http://uca911.org/911-division) and [National Emergency Number Association (NENA)](https://www.nena.org/) are two valuable sources for further reading on NG911.  Below are a few recommended starting points for learning more about NG911, and how it affects us as GIS professionals.  These sources are in no specific order.  The numbering is to link the reader to the appropriate source.  
* (1)  [UCA: Phase II of UCA's Strategic Plan](http://uca911.org/911-division/911-division-documents)
* (2)  [911 Terminology Master Glossary](https://www.nena.org/page/Glossary)
* (3)  [NENA: NG911 GIS Data Model (NENA-STA-006.1-2018)](https://www.nena.org/page/NG911GISDataModel)
* (4)  [NENA: Information Document for GIS Data Stewardship for Next Generation 911 (in final review now) (NENA-INF-028.1.2018)](https://www.nena.org/page/GIS_DataStewardship)
* (5)  [NENA: Standards for the Provisioning and Maintenance of GIS data to ECRF and LVFs (NENA‑STA‑005.1‑2017)](https://www.nena.org/page/ProvGISECRFLVF)
* (6)  [NENA: Next Generation 9-1-1 Data Management Requirements (NENA-REQ-002.1-2016)](https://www.nena.org/page/NGDataMgmt)
* (7)  [NENA: Development of Site/Structure Address Point GIS Data for 9-1-1 (NENA-INF-014.1-2015)](https://www.nena.org/page/SSAP)
* (8)  [NENA: Synchronizing GIS with MSAG & ALI (71-501 v1)](https://www.nena.org/general/custom.asp?page=synch_gis_msag_ali)
* (9)  [NENA: Detailed Functional and Interface Standards for the NENA i3 Solution (NENA-STA-010.2-2016)](https://www.nena.org/page/i3_Stage3)
* (10) [NENA: NG9-1-1 Transition Planning Considerations (NG911NENA-INF-008.2.2013)](https://www.nena.org/page/NG911_TransitionPlng)
* (11) [NENA: Next Generation 9-1-1 Data Management Requirements (NENA-REQ-002.1-2016)](https://www.nena.org/page/NGDataMgmt)

![NG911 Data Workflow]({{ "/images/ng911_data_workflow.png" , prepend: site.baseurl }}){: #graphic .flex .flex--center}
