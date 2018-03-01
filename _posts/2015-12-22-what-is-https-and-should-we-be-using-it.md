---
author:
  display_name: JP
  email: agrc@utah.gov
tags:
  - agol
date: 2015-12-22 14:45:30 -0700
title: 'What is HTTPS, and should we be using it? '
categories:
  - Featured
---
<p>Hypertext Transfer Protocol Secure (https) combines the Hypertext Transfer Protocol (HTTP) with the Secure Socket Layer (SSL)/Transport Layer Security (TLS) protocol. TLS is an authentication and security protocol widely implemented in browsers and Web servers.  </p>
<p>In a nutshell, it allows your browser to make a secure connection to a trusted server, with security certificate, to enable 2 way encrypted data transfer between the providing server and the client.</p>
<p>Https is quickly gaining popularity for website and web service URLs for two reasons. First, several search engines have announced that their page ranking algorithms will raise the score of https-based sites. Second, the performance of https traffic, relative to vanilla http, has greatly improved and can be faster even though more work is being done on both sides.</p>
<p>ArcGIS Server allows administrators to set their sites up as HTTPS only, or to allow a mix of HTTPS (trusted) and HTTP (unsecure, anonymous) communications.  AGRC currently allows for both types of communication when accessing our base maps from <a href="http://basemaps.utah.gov/arcgis/rest/services/BaseMaps">basemaps.utah.gov</a>.</p>
<p>It is becoming more common for sites to enable HTTPS for their organizations, and in many instances, force use of HTTPS for all browser based communication.  In an effort to allow the widest access to our basemap services, we have been publishing our base map services for both the HTTP and HTTPS protocols.  It is important to note that sites which mix secure and insecure content can be blocked at the browser level.  Here is a document outlining the issues and how to solve them:<br />
<a href="https://developer.mozilla.org/en-US/docs/Security/MixedContent/How_to_fix_website_with_mixed_content">https://developer.mozilla.org/en-US/docs/Security/MixedContent/How_to_fix_website_with_mixed_content</a></p>
<p>In ArcGIS Online (AGOL), we will register our basemap services as both Secure and Unsecure to allow users within secure (https) only sites access to our base maps.  We will denote secure services in the title of the map document to allow easy identification. </p>
<p>We are also beginning to reproject our basemap tiles as Web Mercator services to allow easier use and consumption for other services which utilize this new standard.  We will denote Web Mercator services in the title of the map document to allow easy identification.  We will continue to publish all of the SGID feature data services in AGOL as UTM/NAD83 services for the foreseeable future.</p>
 