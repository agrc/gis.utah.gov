---
title: 'UGRC Next-Generation 911 Update'
author:
  display_name: Erik Neemann
  email: eneemann@utah.gov
date: 2021-04-12 08:30:12
categories:
  - Featured
tags:
  - ng911
  - psap
---

Over the last several months the newly renamed Utah Geospatial Resource Center (UGRC) has been working hard to prepare the state for its transition to Next-Generation 911 (NG911).  With NG911, emergency calls will rely on geospatial data for address validation and call routing.  The old Enhanced 911 (E911) system, which relied on tabular data, will be gradually phased out after backing-up the geospatial data for a period of time.  This means that the dispatch center, known as a public safety answering point (PSAP), that receives your 911 call will be selected based on your current location and the PSAP's service boundary.  NG911 will also allow for dynamic changes to PSAP boundaries, allowing adjustments to call routing during large-scale emergencies, planned downtime, or periods of high call volume.

To facilitate this paradigm shift, nearly everyone at UGRC has been working (directly or indirectly) to ensure NG911 is a success.  Dating back over the last few years, we've served as the geospatial subject matter expert for the Utah Communications Authority (UCA) as they reviewed contractor proposals.  More recently, Motorola was awarded as the service provider for network infrastructure, PSAP call-handling systems, and the geospatial backbone of NG911, known as the core services.  As the NG911 implementation date nears for Utah's first counties later this year, UGRC has been preparing the GIS data that will feed the system and working with 911 Datamaster to perform quality assurance/quality control (QA/QC).  Specifically, we've built the following (datasets) [https://gis.utah.gov/data/911/] that will be included in the initial NG911 rollout:

- PSAP Boundaries - the foundational GIS layer that will route 911 calls to a specific PSAP based on the geographic boundary from which the call originates within
- Road Centerlines - the representation of public roadways from which addresses are assigned and located
- Address Points - the location of individual addresses used to locate landline calls and find nearby address for cellular calls
- Law Enforcement Boundaries - the jurisdictional boundaries of law enforcement agencies used provide a recommendation to dispatchers
- Emergency Medical Service Boundaries - the boundary of primary medical responders used to provide a recommendation to dispatchers

As we continue to build NG911 data layers and work through QA/QC processes, we'll be reaching out to PSAPs, local government agencies, and data stewards to ask for input and provide feedback on GIS data quality.

In addition to building the GIS data for NG911, we've been working with Motorola's Aware Map team to optimize the call handling interface for dispatchers.  This support has spanned a variety of topics, from troubleshooting the user interface and identifying bugs, to defining standard map layers, grouping layers into functional categories, and designing web maps.  The display will incorporate UGRC's basemaps, with a couple of different flavors, to present information to dispatchers as cleanly as possible.  We're also working to integrate our geocoding engine into the software to tune search results to Utah's idiosyncrasies.  Ultimately, these efforts will ensure that the Aware map provides an efficient and user-friendly interface for dispatchers to locate incoming calls.