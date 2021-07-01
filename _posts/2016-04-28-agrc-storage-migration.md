---
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
tags: []
date: 2016-04-28 22:11:31
title: AGRC Storage Migration
categories: []
---

AGRC is in the process of migrating some of it’s SGID content, downloadable via FTP, from High-Speed Network Attached Storage (HNAS) to Google Cloud Storage (GCS) available through the Google Cloud Platform (GCP). At this time only historical scanned imagery and the National Agricultural Image Program (NAIP) Mr. Sid Compressed County Mosaics (CCMs), for all available years, have been moved to the GCS. This represents over 4TB of static storage requirements. 

There have not been any problems with the new storage and re-pointing downloadable files to the GCS. Testing has confirmed that even large 7GB zipfiles can be downloaded from the GCS in a timely manner comparable to that of HNAS. Over time more of AGRC’s storage needs will be migrated to the GCS. End users should not notice any differences. But if you do, be sure to let us know!

Why fix something that is not broken? We are trying to find the right storage solution for the data resources we all need, balancing performance, ease-of use, complexity, and cost. As the size of GIS datasets continues to increase, we want to ensure AGRC is best positioned meet future needs.
