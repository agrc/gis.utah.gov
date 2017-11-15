---
status: publish
layout: post
author:
  display_name: Rick Kelson
  email: rkelson@utah.gov
tags:
  - dem
  - digital elevation model
  - digital surface model
  - digital terrain model
  - dsm
  - dtm
  - lidar
  - viewshed
published: true
date: 2014-11-17 12:15:04 -0700
title: Wireless Signals and LiDAR Derived Elevation Models
categories:
  - Featured
  - SGID Blog
---
<p>Specialized software allows the modeling of cellular, radio, or wireless internet signal propagation and coverage. Better, more accurate results for wireless signal propagation depend on the precision with which the earth’s surface is represented within the analysis software.  Traditionally, "bare earth" Digital Terrain Models (DTMs), in which above ground features such as buildings and vegetation are not represented, are used for the analysis. </p>
<p>Airborne-collected LiDAR data has more sophisticated capabilities for representing the earth and its features, and is becoming more available. LiDAR sensors mounted on planes uses a scanning laser range finder to collect and model a truer 3D representation. So-called "first return" Digital Surface Models (DSMs) maintain both ground and above ground surface features including buildings and vegetation. For this reason, LiDAR DSMs can be utilized to help the analysis software more accurately model cellular, radio, or wireless coverage and signal propagation.</p>
<p>A simple way to compare the different results from the traditional DTM and the LiDAR-sourced DSM is with a GIS "viewshed" tool. A Viewshed tool determines the surface locations visible from an observation point, in our case, a cellular, radio, or wireless internet tower. In the examples below, a communication tower is set at the top of Ensign Peak just a few blocks to the north, above of the Utah State Capitol building. </p>
<p>In the model result graphics below, the red areas show, <em>at 3 different scales</em>, the areas that have clear visibility from the tower site using the DTM and, it's LiDAR counterpart DSM. With all other factors held constant, the significant variation in the results is easy to see.</p>
<p>The DTM and DSM elevation models from the 2013-2014 Wasatch Front LiDAR Elevation Data used to generate these models can be downloaded from <a href=" http://gis.utah.gov/data/elevation-terrain-data/2013-2014-lidar/">here</a>.</p>
<p><em>Important Note: </em>In addition to a surface models that represents the physical world, wireless network planning and other radio signal propagation software utilize many parameters to model coverage such as signal frequency, transmitter angle, earth curvature, Fresnel Zone, etc. Simple GIS Viewshed analysis, as shown, does not completely model wireless signals and their varying ability to bend and reflect but it does illustrate the possible impact of using surface model inputs that represent the physical world with differing amounts of precision.</p>
<div class="caption caption-left pull-left"><a href="{{ "/downloads/Ensign_DTM_only.png" | prepend: site.baseurl }}"><img src=" http://gis.utah.gov/downloads/Ensign_DTM_only.png" alt="" title="DTM Bare-Earth Digital Terrain Model" width="325" height="325" class="size-full wp-image-15637" /></a><p class="caption-text">Figure 1: Bare-Earth Digital Terrain Model</p></div>
<div class="caption caption-left pull-left"><a href="{{ "/downloads/Ensign_DSM_only.png" | prepend: site.baseurl }}"><img src=" http://gis.utah.gov/downloads/Ensign_DSM_only.png" alt="" title="DSM First-Return Digital Surface Model" width="325" height="325" class="size-full wp-image-15637" /></a><p class="caption-text">Figure 2: First-Return Digital Surface Model</p></div>
<div class="caption caption-left pull-left"><a href="{{ "/downloads/Ensign_DTM.png" | prepend: site.baseurl }}"><img src=" http://gis.utah.gov/downloads/Ensign_DTM.png" alt="" title="DTM Results, Zoomed Out" width="325" height="325" class="size-full wp-image-15637" /></a><p class="caption-text">Figure 3: Bare-Earth Digital Terrain Model and Viewshed</p></div>
<div class="caption caption-left pull-left"><a href="{{ "/downloads/Ensign_DSM.png" | prepend: site.baseurl }}"><img src=" http://gis.utah.gov/downloads/Ensign_DSM.png" alt="" title="DSM Results, Zoomed Out" width="325" height="325" class="size-full wp-image-15637" /></a><p class="caption-text">Figure 4: First-Return Digital Surface Model and Viewshed</p></div>
<div class="caption caption-left pull-left"><a href="{{ "/downloads/Ensign_DTM_sm.png" | prepend: site.baseurl }}"><img src=" http://gis.utah.gov/downloads/Ensign_DTM_sm.png" alt="" title="DTM Results, Medium Zoom" width="325" height="325" class="size-full wp-image-15637" /></a><p class="caption-text">Figure 5: Medium Zoom Bare-Earth Digital Terrain Model and Viewshed</p></div>
<div class="caption caption-left pull-left"><a href="{{ "/downloads/Ensign_DSM_sm.png" | prepend: site.baseurl }}"><img src=" http://gis.utah.gov/downloads/Ensign_DSM_sm.png" alt="" title="DSM Results, Medium Zoom" width="325" height="325" class="size-full wp-image-15637" /></a><p class="caption-text">Figure 6: Medium Zoom First-Return Digital Surface Model and Viewshed</p></div>
<div class="caption caption-left pull-left"><a href="{{ "/downloads/Ensign_DTM_sm2.png" | prepend: site.baseurl }}"><img src=" http://gis.utah.gov/downloads/Ensign_DTM_sm2.png" alt="" title="DTM, Zoomed In" width="325" height="325" class="size-full wp-image-15637" /></a><p class="caption-text">Figure 7: Zoomed In Bare-Earth Digital Terrain Model and Viewshed</p></div>
<div class="caption caption-left pull-left"><a href="{{ "/downloads/Ensign_DSM_sm2.png" | prepend: site.baseurl }}"><img src=" http://gis.utah.gov/downloads/Ensign_DSM_sm2.png" alt="" title="DSM, Zoomed In" width="325" height="325" class="size-full wp-image-15637" /></a><p class="caption-text">Figure 8: Zoomed In First-Return Digital Surface Model and Viewshed</p></div>
<div style='float: clear;'></div>
