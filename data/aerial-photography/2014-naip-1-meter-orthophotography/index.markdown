---
layout: page
status: publish
published: true
title: 2014 NAIP 1 Meter Orthophotography
author:
  display_name: rkelson
  login: rkelson
  email: rkelson@utah.gov
  url: ''
author_login: rkelson
author_email: rkelson@utah.gov
wordpress_id: 16605
wordpress_url: http://gis.utah.gov/?page_id=16605
date: '2015-02-12 15:21:46 -0500'
date_gmt: '2015-02-12 22:21:46 -0500'
categories: []
tags:
- aerial photography
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
- metadata
- digital
- geographic
- information
- database
- state
- statewide
- imagery
- raster
- NAIP
- 1 meter
- '2014'
- usda
- apfo
- orthophotopraphy
---
<h3>2014 NAIP 1 Meter Orthophotography</h3>
<td>AGRC has statewide <a href="http://www.fsa.usda.gov/programs-and-services/aerial-photography/imagery-programs/naip-imagery/index">National Agricultural Imagery Program</a> (NAIP) aerial photography for Utah. The imagery is 1-meter resolution and was collected in the summer of 2014. Although the NAIP imagery collection is typically 4-band imagery, we have separated the Red, Green, and Blue bands from the Infrared band. The image service however is 4-band. To merge the RGB images with the single infrared band to create a 4-band image you can use the ArcGIS Composite Bands (Data Management) tool, the Image Analysis window to add a <a href="http://gis.utah.gov/wp-content/uploads/FunctionTemplateEditor.jpg">Function Chain</a>, or create a <a href="http://gis.utah.gov/wp-content/uploads/FunctionChain.jpg">Reference Mosaic</a>.</p>
<p>The date the photography was flown can be found in the SrcImgDate field of the <strong><a href="ftp://ftp.agrc.utah.gov/Imagery/NAIP2014/NAIP2014_Index.zip">NAIP2014_Index</a></strong> shapefile, in the .txt metadata files after 'Calendar_Date:', or the SDATE field of the county mosaics shapefile. The images have a UTM NAD83 meters projection.</p>
<p>The USDA also has the NAIP imagery available as a 4-band service for all the states in the U.S.. The available <em>GIS Service</em> URL is  http://gis.apfo.usda.gov/arcgis/services .</p>
<ul>
<li><strong><a href="http://raster.utah.gov/?cat=NAIP%202014%20(1m)" target="_blank">Retrieve 2014 NAIP via Interactive Map</a></strong></li>
<li><a href="ftp://ftp.agrc.utah.gov/NAIP/NAIP2014/" target="_blank">Retrieve 2014 NAIP 3-band County Mosaics via FTP site</a></li>
<li><a href="ftp://ftp.agrc.utah.gov/Imagery/NAIP2014_4-band/">Retrieve 2014 NAIP 4-band TIFFs via FTP site (limited time only)</a></li>
<li><a href="ftp://ftp.agrc.utah.gov/Imagery/NAIP2014/">Retrieve 2014 NAIP 3-band RGB Natural Color TIFFs via FTP site</a></li>
<li><a href="ftp://ftp.agrc.utah.gov/Imagery/NAIP2014_band4/">Retrieve 2014 NAIP Infrared 4th band TIFFs via FTP site</a></li>
<li><a href="http://gis.utah.gov/data/sgid-imagery-services/" target="_blank">Use our Image Services</a></li>
</ul>
</td>
<p>To display the 4-band service as a color infrared (CIR) or a false color image in ArcMap, use the Layer Properties-&gt;Symbology tab. Change the Red Channel to Infrared, Green to Red, and Blue to Green Band. (example below)</p>
<table border="0">
<tbody>
<tr>
<td>[caption width="110" caption="RGB"]<img src="http://gis.utah.gov/wp-content/uploads/RGB.jpg" alt=" " width="110" height="110" />[/caption]</td>
<td>  -- >  </td>
<td>[caption width="110" caption="NAIP (RGB)"]<img src="http://gis.utah.gov/wp-content/uploads/NAIP_RGB_110.png" alt=" " width="110" height="110" />[/caption]</td>
</tr>
<tr>
<td>[caption width="110" caption="CIR"]<img src="http://gis.utah.gov/wp-content/uploads/IRG.jpg" alt=" " width="110" height="110" />[/caption]</td>
<td>  -- >  </td>
<td>[caption width="110" caption="NAIP (CIR)"]<img src="http://gis.utah.gov/wp-content/uploads/NAIP_CIR_110.png" alt=" " width="110" height="110" />[/caption]</td>
</tr>
</tbody>
</table>
<p><strong>* If you are having problems with the imagery from AGRC <a href="http://gis.utah.gov/data/aerial-photography/imagery-problems/">take a look at this document</a></strong></p>
<td>If you have any trouble contact <a href="mailto:rkelson@utah.gov"><strong>Rick Kelson</strong></a> at (801-538-3237)</td>
