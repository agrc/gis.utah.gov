---
title: "Introducing UGRCodes"
author:
  display_name: Erik Neemann
  email: eneemann@utah.gov
date: 2021-04-22 15:30:12
categories:
  - SGID Blog
  - Featured
tags:
  - sgid
---

Are you tired of fighting with esoteric municipal FIPS codes? Have you even tried using them? It's not easy and it's certainly not intuitive. Five digit integer codes with minimal consistency and continuity across space, and require a lookup table to understand, don't lend themselves as a simple identifier for a municipality. As a solution, UGRC is implementing a new attribute field called the UGRCode (get it?) in our [Municipal Boundaries](https://opendata.gis.utah.gov/datasets/utah-municipal-boundaries) and [Metro Townships](https://opendata.gis.utah.gov/datasets/utah-metro-townships) data. The full list of UGRCodes can be found [here](https://docs.google.com/spreadsheets/d/19cwbXoewTynDDv_fJ3hGekD4VbLef5VxrnSJfRx8My8/edit#gid=2028111876).

[![UGRCodes in Salt Lake County]({% link images/20210422_ugrcodes.png %} "UGRCodes in Salt Lake County")]({% link images/20210422_ugrcodes.png %}){: .flex .flex--center }

Inspired by a suggestion from one of our colleagues at the Wasatch Front Regional Council, we believe these codes provide several advantages that make them more useful and easier to use than FIPS codes or municipality names for uniquely identifying municipalities in Utah. They also support our efforts to ensure that attribute domain values match their corresponding descriptions within our datasets. Some advantages of the UGRCodes are:

- Much more intuitive than FIPS codes    
- Provide a unique identifier for municipalities
- Avoid the need to account for differences in upper-, lower-, and title-casing across different datasets
- Provide a static field for referencing a municipality without having to worry about alternate names or representations (Saint George vs St George vs St. George)
- Simplify joins and queries by implementing a clearer, more memorable key field

> *Disclaimer:* These are not "official" codes. They are codes that we created to (hopefully) make life just a little easier in Utah. They are not blessed by the National Institute of Standards and Technology, or the U.S. Census Bureau, or the International Organization for Standardization, or the Utah Geographic Information Council, or the Utah League of Cities and Towns, or the Utah Brewer's Guild, or any other credible or dubious organization. Just the UGRC...hence the name, UGRCode.

In coming up with the 3-letter codes we tried to follow a few guiding principles, which are listed below. However, in order to deconflict the codes, add clarity, or maintain continuity, we had to stray from these principles occasionally.

- Align codes with 3-letter "City Codes" that already exist in 911 dispatch datasets wherever possible
  - E.g., Beaver (BVR), Millcreeak (MLC), Saint George (STG)
- Preferentially use the first 3 letters of a municipality's name
  - E.g., Hinckley (HIN), Layton (LAY), Mapleton (MAP)
- Incorporate the first letters of multiple-word municipality names
  - E.g., Salt Lake City (SLC), West Valley City (WVC), Bear River City (BRC)
- Distinguish municipalities with similar names or beginnings as much as possible
  - E.g., Kanab (KNB), Kanarraville (KNV), Kanosh (KNS)
- Metro Townships have "MT" in their code - or just "T" if new ones conflict with current codes
  - E.g., Emigration Canyon (EMT), Kearns (KMT), Magna (MMT)
  
#### Future Enhancements
In the future, we may continue to expand on this idea by including the code field in additional datasets (road centerlines, address points, etc.). We believe UGRCodes could serve as a useful and intuitive code for querying and joining data across several datasets. The expanded use of this field may depend on how useful we find the codes, your feedback as you use the codes, or more. So reach out to us and let us know what you think via email ([agrc@utah.gov](mailto:agrc@utah.gov)) or Twitter ([@maputah](https://twitter.com/maputah)).
