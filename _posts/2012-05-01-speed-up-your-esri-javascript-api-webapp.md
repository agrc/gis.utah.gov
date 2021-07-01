---
author:
  display_name: AGRC Staff
  email: agrc@utah.gov
tags:
  - developers
  - javascript
date: 2012-05-01 13:57:31 -0600
title: Using The Dojo Build System To Speed Up Your ESRI JavaScript API Apps
categories:
  - Developer
---
<p>As your JavaScript projects get more and more complex, loading all of your Dojo javascript files can really slow down your load time. All those dojo.require calls add up in a hurry. The Dojo Build System can be a huge help in speeding up the load time and general performance of your apps. For example, a build that I ran on a recent project took the number of JavaScript requests on page load from 53 down to 5. The css requests went from 16 down to 4. This ended up <strong>cutting the load time in half</strong>! Other nice features include stripping out all of the console calls, minifying your JavaScript and interning all of your widget templates.</p>
<p><a title="Read Full Article" href="https://geospatialscott.blogspot.com/2011/06/using-dojo-build-system-to-speed-up.html">Read Full Article</a></p>
