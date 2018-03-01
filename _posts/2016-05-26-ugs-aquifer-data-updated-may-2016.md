---
author:
  display_name: Richard Emerson, Utah Geological Survey
  email: richardemerson@utah.gov
tags:
  - aquifers
  - data update
  - ugs
date: 2016-05-26 16:53:19
title: UGS Aquifer Data Updated May 2016
categories:
  - Guestblog
---

GEOSCIENCE.Aquifer_RechargeDischargeAreas represents areas of recharge and discharge for various basins and valleys in Utah compiled by the Utah Geological Survey from various sources, including the USGS and various state agencies.

Some data was modified from the original work to provide a dataset with consistent attributes, scale, and edge matching along study areas when possible. Early work by the USGS did not differentiate between bedrock and alluvial fill when delineating the primary recharge zone while the various state agency studies did not analyze the bedrock assuming that all bedrock aquifers and recharge zones are in areas considered to be at risk for contamination. In order to accommodate for the different methodologies between studies, the bedrock was separated in the USGS studies using the best available data, often 1:100,000 geologic maps, while bedrock was added to the state studies that did not have bedrock data. This new class was called "Bedrock recharge" and can be treated as "Primary recharge" zones for most purposes.

Users should understand that localized areas of discharge will not be differentiated within the bedrock class and that there may be areas with confining layers within the bedrock that will require special purpose studies to differentiate.

Download the updated data from the [Aquifers data page]({{ "/data/geoscience/aquifers/" | prepend: site.baseurl }}).
