---
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
tags:
  - data
date: 2017-06-29
title: DOGM Oil and Gas Wells Data Update
categories:
  - Featured
---

On June 1, 2017, the Utah Division of Oil, Gas and Mining retired 5 old databases and went online with a new database. This prompted many changes to the data field names and content previously provided in the SGID (`SGID10.ENERGY.DNROilGasWells`, `SGID10.ENERGY.DNROilGasWells_HDBottom`, & `SGID10.ENERGY.DNROilGasWells_HDPath`).

In order to facilitate a smooth transition to the new database scheme the new datasets have been published in SGID along side of the old ones. The new datasets are:
- `SGID10.ENERGY.OilGasWells` (surface location)
- `SGID10.ENERGY.OilGasWells_DownHoles` (wellbore points including the bottom)
- `SGID10.ENERGY.OilGasWells_Paths` (lines connecting the surface and down hole points)

**The plan is remove the old datasets on August 1st.**

This new database was developed by contractors sponsored in part by the U.S. Department of Energy and the Ground Water Protection Council. The structure is much more complex than what was used in the past. The benefit is that it provides for the opportunity for the Division to collect more descriptive down-hole information for each wellbore permitted and drilled. Initially, much of the down-hole information will not be available because there was no place to save it in the previous databases. Eventually, as new wells are drilled and old legacy data is entered, more descriptive data will become available for the wells in Utah.

{%capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.oil_wells %}{% endcapture %}
{{ contact }}

More information can be found on the [Oil and Gas data resource page]({% link data/energy/oil-gas/index.html %}).
