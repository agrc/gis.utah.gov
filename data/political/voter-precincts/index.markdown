---
layout: page
status: publish
published: true
title: Voting Precincts
author:
  display_name: jpechmann
  login: jpechmann
  email: jpechmann@utah.gov
  url: ''
author_login: jpechmann
author_email: jpechmann@utah.gov
wordpress_id: 3485
wordpress_url: http://gis.utah.gov/?page_id=3485
date: '2011-11-18 11:11:58 -0500'
date_gmt: '2011-11-18 18:11:58 -0500'
categories: []
tags:
- sgid
- Data
- utah
- gis
- map
- mapping
- dataset
- download
- agrc
- layer
- shapefile
- geodatabase
- metadata
- shp
- gdb
- kml
- lyr
- digital
- geographic
- information
- database
- state
- statewide
---
<p>[caption id="attachment_4794" align="alignright" width="256" caption="Voting Precincts"]<img class="size-full wp-image-4794" title="map" src="http://gis.utah.gov/gallery/sgid/voterprecincts.png" alt="JudicialDistricts" width="256" height="256" />[/caption]</p>
<p>[button size="medium" color="white" textColor="#923922" link="ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/POLITICAL/UnpackagedData/VistaBallotAreas/_Statewide/"]Download Dataset[/button]</p>
<h4><strong>Voting Precincts</strong></h4>
<p>&nbsp;</p>
<p><strong>Data Type:</strong> GIS Data Layer<br />
<strong>Steward(s):</strong> AGRC</p>
<p><strong>Abstract:</strong><br />
Voting precincts determine a voter's ballot composition and polling location. Voting precinct boundaries take their shape from the boundaries of all political districts, including U.S Congress, State Senate, State House, School Board District, local council districts, special districts etc. However voter precincts must be drawn so that they contain less than maximum number of voters as specified by state law. Voting precincts are a critical part of the VISTA application, which is the statewide framework, overseen by the Lt. Governor's Office, for managing voters and elections.</p>
<p><strong>Data Content:</strong><br />
The following data is available for download:</p>
<h4 class="product">Voting Precincts</h4>
<p>[tabs]<br />
[tab title="Description"]<img class="productImage-Thumb" src="http://gis.utah.gov/wp-content/uploads/VoterPrecinctsSmall.png" alt="VotingPrecinctsSmall" />Political.VistaBallotAreas are voting precincts for all 29 counties in Utah. Precincts boundaries are submitted by County Clerk offices. Where precincts are split into formal subprecincts, only the subprecincts are included in this dataset. A 'Dissolve' operation on the PRECINCTID field will produce precinct polygons without subprecinct lines.</p>
<div class="clear"></div>
<p>[/tab]</p>
<p>[tab title="Usage"]</p>
<dl>
<dt>VISTAID</dt>
<dd>a 11 character field that contains the precinct ID and optional subprecinct ID (separated by a colon).</dd>
<dt>PRECINCTID</dt>
<dd>the precinct component of VISTAID.</dd>
<dt>SUBPRECINCTID</dt>
<dd>the subprecinct component, where applicable, of VISTAID.</dd>
<dt>VERSIONNBR</dt>
<dd>an optional version reference name assigned by the county.</dd>
<dt>EFFECTIVEDATE</dt>
<dd>the date the precinct boundary took effect. A date of 1/1/2011 is the default effective date.</dd>
<dt>RECEIVEDDATE</dt>
<dd>indicate the date the precinct boundary was sent from the county to the AGRC.</dd>
</dl>
<p>There are no constraints or warranties with regard to the use of this dataset. [/tab]</p>
<p>[tab title="Updates"]<br />
Last Update:<br />
April 2015<br />
Check attribute RECEIVEDDATE to identify latest updates to specific precinct features.</p>
<p>[/tab]<br />
[tab title="Contact"]<br />
For questions, contact <a href="mailto:mjthomas@utah.gov">Mark Thomas</a> at the Lieutenant Governor's Office. Or for GIS questions, contact <a href="mailto:bgranberg@utah.gov">Bert Granberg</a> at AGRC.<br />
[/tab]</p>
<p>[tab title="Links | Download"]<br />
Links:</p>
<ul>Download Voting Precincts:</ul>
<ul>
<li><a href="ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/POLITICAL/UnpackagedData/VistaBallotAreas/_Statewide/VistaBallotAreas_gdb.zip">Voting Precincts: File Geodatabase</a></li>
<li><a href="ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/POLITICAL/UnpackagedData/VistaBallotAreas/_Statewide/VistaBallotAreas_shp.zip">Voting Precincts: Shapefile</a></li>
<li><a href="ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/POLITICAL/UnpackagedData/VistaBallotAreas_Archive2011/_Statewide">Archive dataset of 2011 Voting Precincts <strong>(no longer in use)</strong></a></li>
</ul>
<p>Other Links:</p>
<ul>
<li><a href="http://elections.utah.gov/">Lieutenent Governor's Office: Elections</a></li>
</ul>
<p>[/tab] [/tabs]</p>
