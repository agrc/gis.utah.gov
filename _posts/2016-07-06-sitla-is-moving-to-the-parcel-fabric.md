---
author:
  display_name: Kate Staley
  email: katestaley@utah.gov
tags:
  - land ownership
  - parcel fabric
  - plss
  - sitla
date: 2016-07-06 17:22:32
title: SITLA is Moving to the Utah PLSS Parcel Fabric
categories:
  - Guestblog
---

The State of Utah School and Institutional Trust Lands Administration (SITLA) is currently in the process of migrating land ownership data to the most current public land survey system (PLSS) parcel fabric version, maintained by the Automated Geographic Reference Center (AGRC). The land ownership is currently aligned to the 2006 version of the PLSS and is out-of-date. Now is the perfect opportunity to take advantage of the parcel fabric. SITLA is partnering with AGRC to make this happen and to ensure the harmonization between the parcel fabric and land ownership. Every time the parcel fabric is updated by AGRC, the land ownership will automatically be updated with it. The land ownership will move with changes in the parcel fabric which will yield a clean and quality product!

<figure class="caption caption--right">
<a href ="{% link images/SITLA_ParcelFabric_fullsize.png %}">
<img class="caption__image" src="{% link images/SITLA_ParcelFabric.png %}" alt="SITLA Parcel Fabric Example" /></a>
<figcaption class="caption__text">Example of Land Ownership being integrated with PLSS Parcel Fabric</figcaption>
</figure>

There are a few steps that need to be taken to prepare the land ownership for migration into the parcel fabric. The first step is to actually migrate the land ownership to the current version of PLSS. This involves many small geoprocessing tasks that take approximately 5 to 6 hours to complete. Once completed, the land ownership needs to be verified and cleaned. Subsequent steps that need to be taken to ensure success include:

- incorporating metes and bounds descriptions where needed,
- adding missing aliquot parcels,
- cutting natural boundaries,
- verifying and re-calculating attributes, and
- creating true curves and validating topologies.

These steps are by far the most time consuming and tedious stage of the process, but are definitely most important to overall success. The land ownership has to be flawless before it can be loaded into the parcel fabric.

The next step is to add domains and fields to the geodatabase containing the parcel fabric. The domains and fields that are being added need to match the schema of the land ownership parcels. If the schema does not match, then the land ownership parcels will not load into the parcel fabric correctly. The final step is to type the land ownership parcels according to the Local Government Information Model  (LGIM). This is accomplished using the “IrParcelType” domain. The type value for ownership is equal to “8.” The land ownership is now ready to be loaded into the parcel fabric!

The migration process is not an easy procedure and will take some time to complete. Careful steps need to be taken to ensure that the land ownership is brought over in a tidy manner. This entire process has taken much effort, thought and time. The process has yet to be completed and an estimated finish date is still to be determined. This is a learning process for all of us involved and will take some time to figure out. SITLA will continue to work with AGRC to accomplish this major task.
