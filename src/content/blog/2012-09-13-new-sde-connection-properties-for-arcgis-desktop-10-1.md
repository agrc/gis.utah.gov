---
author:
  display_name: Michael Foulger
  email: michaelfoulger@utah.gov
tags: []
date: 2012-09-13 10:00:46 -0600
title: New SDE Connection Properties for ArcGIS Desktop 10.x
published: false
categories:
  - Featured
---

Esri is now providing a tool to create an ArcSDE Connection File wherever you would like on your file system. The tool is located in the standard toolbox under Data Management -&gt; Workspace -&gt; Create ArcSDE Connection File.  Here's a look at where it's located, and what it looks like when filled out:

This tool is only available to users running a Standard (ArcEditor) or Advanced (ArcInfo) license level.  Users of a Basic (ArcView) license will need to download the connection file, available in a link below.
{:.pop}

You can save the connection file anywhere you'd like, but if you want to see the connection in the `Database Connections` folder in ArcGIS Desktop, you'll need to save it to this location: `C:\Users\[Your User Name]\AppData\Roaming\ESRI\Desktop[version]\ArcCatalog`

It should be noted that the `AppData` folder is most likely hidden by default. In Windows, you can make it visible by going to `Control Panel`, `Folder Options`, choosing the `View` tab, and enabling `Show hidden files, folders, and drives` from the `Hidden files and folders` area. (Thanks Doug!)

Just replace the entry `[Your User Name]` and `[version]` with your login name and the version of ArcGIS Desktop you are using.

### Instructions for Basic (ArcView) license level users

If you're using a Basic license for Esri's desktop product (ArcView), and wish to connect to the SGID, you'll need to download a connection file from our FTP site:

You can save the connection file anywhere you'd like, but if you want to see the connection in the `Database Connections` folder in ArcGIS Desktop, you'll need to save it to this location: `C:\Users\[Your User Name]\AppData\Roaming\ESRI\Desktop[version]\ArcCatalog`

It should be noted that the `AppData` folder is most likely hidden by default. In Windows, you can make it visible by going to `Control Panel`, `Folder Options`, choosing the `View` tab, and enabling `Show hidden files, folders, and drives` from the `Hidden files and folders` area. (Thanks Doug!)

Just replace the entry `[Your User Name]` and `[version]` with your login name and the version of ArcGIS Desktop you are using.
