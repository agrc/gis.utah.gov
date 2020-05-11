---
title: Converting SGID data downloads to Drive
author:
  display_name: KWalker
  email: kwalker@utah.gov
date: 2017-07-31 15:39:39
categories:
  - Developer
tags: []

---

File-based data products in remain an important component of Utah’s State Geographic Information Database (SGID). In a change designed not to be noticed by users, AGRC recently moved the zipped shapefiles and file geodatabase SGID data from an FTP server to Google Drive, (or G Suite Drive if your prefer the latest rebranding from the folks in Mountain View).

1. There were a few different reasons that drove the decision to move to Drive:
1. Capabilities of Google Drive
1. Diversifying the physical location or the data
1. Simplifying upkeep
1. Leveraging ‘unlimited storage’ of our Google Drive.

Data storage is never free and we want to make sure we are using it wisely. While the total compressed size of the SGID provided as static download files is not huge, the marginal cost of storage within AGRC’s existing Google Drive unlimited accounts is effectively zero. Moving to Drive will allow AGRC to eliminate some FTP storage costs while making the sharing of data easier and more organized.

Disaster recovery has always been a consideration in AGRC’s long-term planning and we feel it is important the data we store remain accessible in extreme circumstances. Our FTP servers have been reliable but, they have been based in the same two consolidated data centers that AGRC and other state agencies use for network drives and SDE database hosting. If a major earthquake or other disaster struck, GIS data for Utah is going to be a valuable resource in supporting the response and recovery period. And the first 72 hours are going to be the most critical. With SGID data resources discoverable and accessible from our github.io based web page (gis.utah.gov) and stored in Google’s geographically distributed data centers, GIS data users won’t be impacted by the health of the Utah data center and the immediate broadband network that services it.

FTP is old and sturdy with the original protocol written in 1971 and the current version dating to 1985. With that said, Google Drive (2012) has many useful capabilities. First and foremost Drive is compatible with the HTTPS specification which adds security and better integration with modern applications. Google also provides its own [REST api](https://developers.google.com/drive/api/v3/about-sdk) for Drive that is great and free to use (within liberal quota limits). AGRC was able to use the [Drive api client for Python](https://developers.google.com/drive/api/v3/downloads) to build an ‘update application’ that centralizes and automates our static zip file update process. The update application is in early development but the code and progress can be followed on the [AGRC github organization](https://github.com/agrc/backseat-driver).

If you regularly access data from gis.utah.gov you may have noticed that many of the links have already changed to Drive. In the near future, all of the file geodatabase and shapefile zip files will be linked to and stored on Drive. If you have any issues accessing the new links and storage please contact us. AGRC hopes that moving from FTP to Drive will continue to provide highly accessible GIS data resources, in a more resilient architecture, while making it easier for us to keep the latest data online.
