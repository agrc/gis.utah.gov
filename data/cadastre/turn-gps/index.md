---
tags:
  - cadastre
  - gps
  - turn
author:
  display_name: AGRC Staff
  email: agrc@utah.gov
date: 2011-06-30 23:13:39 -0600
title: The Utah Reference Network (TURN) GPS
categories: []
---
<figure class="caption caption--right">
  <img title="map" class="caption__image" src="{{ "/images/turn_gps_utah_network_rtk.png" | prepend: site.baseurl }}">
  <figcaption class="caption__text">TURN GPS Stations</figcaption>
</figure>
{% include abstract.html
name="TURN GPS Network"
stewards="AGRC"
type="GPS Network with $600 Annual Subscription"
webapp="http://turngps.utah.gov/"
abstract="The Utah Reference Network (TURN) GPS is a GNSS network of permanently located GPS receivers, installed across the state, to generate real time high accuracy GPS positioning. TURN GPS uses the Trimble PIVOT VRS Platform. TURN GPS is used for a range of precision GPS applications including surveying, engineering, construction, and GIS data collection. The current cost is $600 for each user login and is good for a full year from the signup date.</p>
<p>The Coordinate Reference Frame for this network is <strong>NAD83(2011)(EPOCH:2010.0000.)</strong>. The Latitude, Longitude and Ellipsoidal Height of each reference station was calculated by processing 24 hour files using the National Geodetic Survey (NGS) Online Positioning User Service (OPUS) Projects application.</p>
<p>Eighteen NGS Continually Operating Reference Stations (CORS) were selected along the perimeter and interior of the network and were constrained to the published coordinates to conduct the final adjustment of the network coordinates.</p>" %}

<div class="grid package">
  <div class="grid__col grid__col--12-of-12" markdown="1">
### Start Using the TURN GPS Network

  <div class="package-content" markdown="1">
#### Creating a New Account

Visit [turngps.utah.gov](http://turngps.utah.gov) and follow these steps to get to the payment page.

**The price is currently $600 and a credit card is required.**

1. Click the `Register` link on the left side of the page.
1. Click `New Registration`.
1. Review the terms and conditions and click `I Agree`.
1. Enter the information in the form and click `Register`.
1. That will take you to the payment page.
1. Finally, it will take approximately 24 hours for the subscription payment to cycle through and the activation to be complete for field work.

These are the things you wil need to fill out registration form.
- Organization (avoid punctuation)
- Login
- Password (8 characters)
- Contact Name, email, phone number
- Physical location/address
- Mailing  address

With an activated subscription, set your GPS unit's VRS connection address to `168.179.231.9` and port `2101`
Enter your new device-specific username and password.
{: .pop }

#### Renewing An Account

From the [TURN GPS secure payment site](https://secure.utah.gov/turngps/), select the `Renew Subscription` button and accept the Terms and Conditions _if you agree_. Provide the Organization, Username, and Password for the subscription you are renewing, and proceed to the payment portion using a credit card. When done you will receive a confirmation email and receipt.

If the account has expired, it will take about 24 hours for the subscription payment to cycle through and the activation to be complete for field work, otherwise you will not notice any interruption.

##### Connections from Source Table
Connections from the Source Table:
For Trimble units we have three different connections.
VRS_CMR works older Trimble unit
VRS_CMRp works with Trimble units that are newer but may not have the latest updates to the firmware.
VRS_CMRx works with the newest up to date Trimble units
All of these give you the network solution.

For non-Trimble units we have two different connections.
VRS_RTCM23 works older non-Trimble unit
VRS_RTCM31 works with non-Trimble units
Both of these give you the network solution.

MS_CMR, MS_CMRP these are for connecting to single base when you are on the edge of the network or not getting a strong network solution. System will automatically find the closest station and connect you.

{% capture turn %}{% include contact.html subject=page.title contact=site.data.contacts.turn  %}{% endcapture %}
##### Contacts
{{ turn }}

##### Related Resources

- [TURN GPS Network Map 8.5 x 11](ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/CADASTRE/TURNGPS_NetworkMap_8x11.pdf)
- [TURN GPS Network Wall Map](ftp://ftp.agrc.utah.gov/UtahSGID_Vector/UTM12_NAD83/CADASTRE/TURNGPS_NetworkWallMap.pdf)
- [TURN GPS Sensor Map](http://turngps.utah.gov/Map/SensorMap.aspx)
- [The Utah Reference Network GPS](http://turngps.utah.gov/)
{: .dotless }
  </div>
  </div>
</div>
