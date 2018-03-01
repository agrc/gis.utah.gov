---
author:
  display_name: JP
  email: agrc@utah.gov
tags: []
date: 2015-11-30 11:35:11 -0700
title: Important Changes for SGID ArcSDE Connection Users
categories:
  - Featured
---
<p><a href="{{ "/downloads/Screen-Shot-2015-11-30-at-11.14.14-AM1.png" | prepend: site.baseurl }}"><img src="{{ "/images/Screen-Shot-2015-11-30-at-11.14.14-AM1.png" | prepend: site.baseurl }}" alt="" title="Screen Shot 2015-11-30 at 11.14.14 AM" width="462" height="330" class="inline-text-right" /></a></p>
<p>AGRC is in the process of migrating our MS SQL database environment from Microsoft SQL Server 2008 to Microsoft SQL Server 2014.<em> <strong>This migration will only impact users who use the preferred 'direct connect' route to use SGID ArcSDE database over the State Network</strong></em>. Keep in mind that many counties and cities use the DTS operated State Network as their ISP, so the impact will extend beyond state government settings. </p>
<p>The primary purpose of the migration is to remain current with the underlying technology that we use, and to fend off technical support deprecation for our current environment. </p>
<p>In preparation, SGID ArcSDE users will need to ensure:</p>
<ul>
<li>their ArcGIS database connection uses the correct DNS name, and </li>
<li>the appropriate MS SQL client is loaded on their machine. </li>
</ul>
<p><strong>DNS Name</strong><br />
All SGID ArcSDE 'direct connections' from within the State Network, will need to use the new DNS name: <code>sgid.agrc.utah.gov</code>. For users outside the state network, AGRC makes all of it's SGID data available for download from our website. We also make much of the popular SGID data available in ArcGIS Online. Search tags for SGID and catagory type for ease of use.</p>
<p><strong>SQL Client</strong><br />
Microsoft SQL Native Client 11 will be required for any desktop ArcSDE users within the state network. We are working with DTS to automatically push out the Microsoft SQL Native Client 11 to identified desktop SGID users within state government. We will identify users that need the client pushed to them by using the mailing list for the AGRC newsletter (@utah.gov emails), and by working with GIS managers within state government.  You can also open a ticket with through the DTS help desk to ensure the correct client is installed. </p>
<p>The plan is to make the migration on January 21, 2016 (UPDATED), so for state network SGID ArcSDE users, please update your DNS name and SQL client at your earliest convenience. </p>
<p>{% include contact.html subject=page.title contact=site.data.contacts.sgid %}</p>
