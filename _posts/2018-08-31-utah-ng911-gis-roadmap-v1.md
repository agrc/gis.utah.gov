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

As the State of Utah moves closer to <abbr title="Next-Generation-911 implementation">NG911</abbr>, GIS data providers will soon be required to adhere to national standards set forth by the [<abbr title="National Emergency Number Association">NENA</abbr>](https://www.nena.org/) and the [<abbr title="Utah Communications Authority">UCA</abbr> 911 Division](http://uca911.org/911-division) [(section 6 of ref 1)](#further-reading). It can be daunting navigating these `standards` and `best practice` documents, so the intent of this article is to demystify the relevant information and lay out a road map of where we are going.

This post is focused on GIS as it relates to NG911 Core Services and the <abbr title="spatial interface">SI</abbr>. These are the services needed to process a call on the <abbr title="Emergency Services IP Network">ESINet</abbr> [(ref 9)](#further-reading). For GIS, this equates to address validation and 911 call routing. Essentially, these are the operations that take place before the call is received at the appropriate <abbr title="public safety answering point">PSAP</abbr>. As a result, NENA has established standards to ensure that these operations can be carried out flawlessly. Failing to comply with these standards could ultimately result in misrouted 911 calls [(section 2.2 of ref 5 and section 2 of ref 4)](#further-reading).

Currently with E-911, the <abbr title="automatic location identification">ALI</abbr> <abbr title="Master Street Address Guide">MSAG</abbr>, and selective router are responsible for these functions. However, in a true NG911 environment, the GIS is the backbone to address validation and call routing, eventually replacing the MSAG, ALI, and selective router [(section 4.8 of ref 1, section 2.1 of ref 5, and section 2.1 of ref 3)](#further-reading). Within NG911 Core Services, the <abbr title="location validation function">LVF</abbr> will pre-validate addresses and the <abbr title="emergency call routing function">ECRF</abbr> will route calls to the appropriate PSAP based on a point-in-polygon query with either the pre-validated address (for landlines) or the cellular devices' x,y coordinates [(section 4.7 and 4.8 of ref 1, section 3 of ref 5, section 2 of ref 4, and section 2.1 of ref 3)](#further-reading).

Now if you're not familiar with this topic, all these acronyms might sound like mumbo jumbo, and if that's the case, don't worry (and also, take a look at the [Recommended Reading and References](#further-reading) section below). We'll make it easy for you! The big takeaway is this: _accuracy and consistency of GIS data in NG911 systems are extremely critical_.

### Standards and Best Practices
{: .text-left}
`Required Datasets`
- Service area boundaries
  - PSAP boundaries
  - Emergency service boundaries (e.g., law, fire, and EMS)
  - Provisioning boundaries (i.e., boundaries that define the extent of the data provider's responsibility)
- Civic location data
  - Site/structure address points
  - Road centerlines

  For further reading see [section 3 of ref 3 and section 4.2 of ref 5](#further-reading).

`Data Requirements`
- Prior to NG911 implementation, civic location data must be matched and reconciled against the MSAG and ALI.
  - The GIS data should contain all valid ALI/MSAG records [(section 2.2.1 of ref 4; ref 8)](#further-reading).
- The required GIS datasets must adhere to NENA NG911 Data Model specifications, including: projection, field names, data types, domains, etc. [(ref 3)](#further-reading).
- Emergency service boundaries (e.g., law, fire, and EMS) must be checked for unintended gaps or overlaps.
  - Gaps or overlaps could result in incorrect 911 call routing [(section 4.7 of ref 5)](#further-reading).
- Site/structure address point and road centerline address components should be consistent.
  - Validate and check for unintended discrepancies [(section 3.2 of ref 3 and section 4.7 of ref 5)](#further-reading).
- Road centerlines should not contain segments with identical attributes and different geometries [(section 4.7 of ref 5)](#further-reading).
- Road centerlines should not contain overlapping address ranges [(section 5.4.3 of ref 5)](#further-reading).
- Site/structure address points should not contain duplicate records [(section 5.4.3 of ref 5)](#further-reading).

For further reading see [(reference 3, 4, 5, 7, 8, 9, 10)](#further-reading)

### Who's Responsible for What? [(see graphic below)](#graphic)
{: .text-left}

<abbr title="Utah Communications Authority">UCA</abbr> `911 Division` in conjunction with `AGRC` will:
- Provide Utah's statewide [NG911 GIS database](/data/911);
- Aggregate and validate 911 data (perform QA/QC before providing data to the State's NG911 Core Services service provider);
- Ensure that required GIS datasets adhere to NENA NG911 Data Model specifications;
  - AGRC will look for discrepancies and inconsistencies in the aggregated statewide [NG911 GIS Database](/data/911) and report discrepancies back to the data providers [section 5.4.3 of ref 5)](#further-reading); and
- Be the authoritative source for PSAP boundaries utilized by NG911 Core Services (ECRF/LVF) [(section 3.5 of ref 3)](#further-reading).

  For further reading see [section 4.7 of ref 1, sections 4.1 and 5.2.4 of ref 5, section 3 of ref 3, and section 2.2.3 of ref 10](#further-reading):

`Authoritative Data Providers` will:
- Coordinate and collaborate with the <abbr title="Utah Communications Authority">UCA</abbr> 911 Division, AGRC, and neighboring agencies (PSAPs);
- Create, maintain, and provide required GIS datasets (within their provisioning boundary) for NG911 Core Services (ECRF/LVF):
  - Service area boundaries, and
  - Civic location data;
- Ensure that the required GIS datasets adhere to current NENA standards:
  - Civic location data
    - Maintain consistency between site/structure address points and road centerlines
  - Emergency service boundaries (e.g., law, fire, and EMS)
    - Ensure that there are no unintended gaps or overlaps; and
- Perform regular QA/QC on required datasets.

  For further reading see [section 4.7 of ref 1, section 5.2.1 of ref 5, and section 2.2.3 of ref 4](#further-reading):

## NG911 GIS Roadmap
{: .text-left}
#### `Near-Term`
{: .text-left}
<span class="fa-2x" title="Near-Term">
  <i class="fas fa-chevron-circle-right highlight fa-fw"></i><i class="fas fa-chevron-circle-right grey fa-fw"></i><i class="fas fa-chevron-circle-right grey fa-fw"></i>
</span>

Data validation and cleanup are the next, most logical steps for GIS readiness. These are often considered the first steps in NG911 transition. At the moment, AGRC is focused on facilitating two specific data validation checks, both mentioned in the previous Data Requirements section of this page:

##### ALI/MSAG and GIS

- The <abbr title="Utah Communications Authority">UCA</abbr> 911 Division is in the process of obtaining statewide ALI and MSAG data for the purpose of GIS data synchronizing. AGRC will geocode the ALI database against the GIS data to ensure that all valid addresses in the phone carrier’s database can be located/validated in the GIS data [(section 6 of ref 1)](#further-reading). A similar process will need to happen with the MSAG data. All valid addresses in the ALI database must have a corresponding site/structure address point in the GIS data.
- AGRC will then work with the data providers to resolve any valid discrepancies.

##### Address Component Cross-Check
{: #cross-check .text-left}
- NG911 Core Services state that site/structure address points and road centerlines must be consistent. In other words: unless intended, each site/structure address point should match an associated road centerline. This supports the requirement that a civic address be considered valid if it can be located within the database uniquely [(section 4.8 of ref 1)](#further-reading). Here are some common mismatch issues AGRC has found:
	- Address components don’t match, including mismatching in the following address component fields: pre-direction, street name, post type, and post direction.
		- To resolve: Data providers must determine which dataset (i.e., site/structure address points or road centerlines) has the correct address component and then correct the issue.
	- Site/structure address points cannot find corresponding road centerlines. Often this is because the road has the alias and primary names switched or the road segment has not been put into GIS yet.
    - To resolve: Data provider needs to determine the official primary street name and adjust dataset fields as needed.
	- Road centerline address range does not accommodate the address point.
		- To resolve: Typically, the road centerline address ranges need to be adjusted.
* AGRC will work with data providers to resolve any unintended discrepancies (see the [What can you do now?](#do-now) section below).


#### `Mid-Term`
{: .text-left}
<span class="fa-2x" title="Mid-Term">
  <i class="fas fa-chevron-circle-right highlight fa-fw"></i><i class="fas fa-chevron-circle-right highlight fa-fw"></i><i class="fas fa-chevron-circle-right fa-fw grey"></i>
</span>
- Identify and resolve any gaps and/or overlaps in the emergency service boundaries (e.g., law, fire, and EMS).
- Resolve address range overlap in road centerlines.
- Resolve duplicate records in site/structure address points.
- Break/split all road centerline segments at PSAP and jurisdiction boundaries. This will ensure that road segments contain the proper spatial-boundary values.
	- Fields corresponding to polygon boundaries will need to be updated as well.
- Ensure the current PSAP boundaries are official and that each PSAP has signed off on them. It is essential that these boundaries are correct, as they will be used to route 911 calls.
  - Identify and resolve any gaps and/or overlaps in the PSAP boundaries.
- Establish a statewide, multi-user mechanism that supports _near-live_ NG911 data editing in Utah. This would allow data providers (e.g., cities, counties, PSAPs, etc.) to quickly resolve conflicts and/or unintended discrepancies, allowing them to directly edit 911 GIS data [(section 4.7 of ref 1)](#further-reading).
- Determine the authoritative data providers for data used in NG911 Core Services and create the provisioning boundaries [(section 3.5 of ref 3)](#further-reading).

#### `Long-Term`
{: .text-left}
<span class="highlight fa-2x" title="Long-Term">
  <i class="fas fa-chevron-circle-right fa-fw"></i><i class="fas fa-chevron-circle-right fa-fw"></i><i class="fas fa-chevron-circle-right fa-fw"></i>
</span>
- Get all 911-related data providers the needed training and access to the statewide NG911 multi-user data editing platform/application.
- Incorporate a workflow to review these edits (from the NG911 multi-user data editing platform) and push them into the official State of Utah NG911 database (on a daily basis).
- Establish the NG911 multi-user data editing platform as Utah’s official NG911 data editor [(section 5.1 of ref 5 and section 4.7 of ref 1)](#further-reading).
- Provision Utah's statewide, [NG911 GIS database](/data/911) so it can used locally by the PSAPs (for their record keeping and dispatch systems). This would eliminate data duplication and ultimately provide all 911 users with the best possible data.  This concept is in line with the <abbr title="Utah Communications Authority">UCA</abbr> 911 Division promotion of a consistent 911 service across the state [(sections 5.3 and 6 of ref 1)](#further-reading).

## What Can You Do Now?
{: #do-now .text-left}

If you are a 911 GIS data provider, it's in your best interest to begin validating and provisioning your data as soon as possible. In the coming months, AGRC will geocode the ALI database and begin working with the data providers to resolve missing addresses.

At the moment, the most effective thing you can do is to resolve unintended discrepancies between site/structure address points and road centerlines. To facilitate this effort, AGRC has created a custom process to perform these validation checks and then output the needed discrepancy reports for the 911 data providers. Get involved now by visiting the [project's homepage](https://gregbunce.github.io/AddressData_CrossCheck/).

It's also in your best interest to view the current draft version of Utah's statewide [NG911 GIS database](/data/911). In particular, it is highly recommended that you validate your jurisdiction's PSAP, fire, law, and/or EMS boundaries, ensuring that they are correctly represented. AGRC will continue to push monthly updates and modifications into this database in hope that 911 data providers will view the data and help us resolve unintended discrepancies.

Keep in mind:
1. NG911 implementation won't happen overnight: there will be a hybrid GIS/MSAG (GeoMSAG) approach at first.
1. Provisioning data for NG911 Core Services (ECRF/LVF) is an ongoing process [(section 1 of ref 5)](#further-reading).
1. We should all be [working together](#graphic), toward the same end goal of public safety.

{% capture contact %}{% include contact.html text="Be proactive and get involved now.  For more information contact " subject=page.title contact=site.data.contacts.roads %}{% endcapture %}
{{ contact | strip_newlines }}

## Recommended Reading and References
{: #further-reading .text-left}
The [<abbr title="Utah Communications Authority">UCA</abbr> 911 Division](http://uca911.org/911-division) and [<abbr title="National Emergency Number Association">NENA</abbr>](https://www.nena.org/) are two valuable sources for further reading on NG911. Below are a few recommended starting points for learning more about NG911 and how it affects us as GIS professionals. (These sources are in no specific order; the numbering is related to the references previously listed throughout this article.)
1.  [UCA: Phase II of UCA's Strategic Plan](http://uca911.org/911-division/911-division-documents)
1.  [911 Terminology Master Glossary](https://www.nena.org/page/Glossary)
1.  [NENA: NG911 GIS Data Model (NENA-STA-006.1-2018)](https://www.nena.org/page/NG911GISDataModel)
1.  [NENA: Information Document for GIS Data Stewardship for Next Generation 911 (in final review now) (NENA-INF-028.1.2018)](https://www.nena.org/page/GIS_DataStewardship)
1.  [NENA: Standards for the Provisioning and Maintenance of GIS data to ECRF and LVFs (NENA‑STA‑005.1‑2017)](https://www.nena.org/page/ProvGISECRFLVF)
1.  [NENA: Next Generation 9-1-1 Data Management Requirements (NENA-REQ-002.1-2016)](https://www.nena.org/page/NGDataMgmt)
1.  [NENA: Development of Site/Structure Address Point GIS Data for 9-1-1 (NENA-INF-014.1-2015)](https://www.nena.org/page/SSAP)
1.  [NENA: Synchronizing GIS with MSAG & ALI (71-501 v1)](https://www.nena.org/general/custom.asp?page=synch_gis_msag_ali)
1.  [NENA: Detailed Functional and Interface Standards for the NENA i3 Solution (NENA-STA-010.2-2016)](https://www.nena.org/page/i3_Stage3)
1. [NENA: NG9-1-1 Transition Planning Considerations (NG911NENA-INF-008.2.2013)](https://www.nena.org/page/NG911_TransitionPlng)

![NG911 Data Workflow]({{ "/images/ng911_data_workflow.png" | prepend: site.baseurl }}){: #graphic .flex .flex--center}
