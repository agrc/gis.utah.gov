---
layout: post
status: publish
published: true
title: 'Rethinking Geocoders: Adding Local Vernacular into the Build Process'
author:
  display_name: Greg Bunce
  email: GBunce@utah.gov
date: 2017-06-27 00:38:49
categories:
- Developer
tags:
- roads
- geocoding
---

AGRC has been working on a project that alters the way we think about geocoding. It grew from the basic idea that humans often view addressing differently than a GIS system. For instance, as GIS professionals, we are accustom to storing data in a format that is versatile and verbose. This view of the data is not always friendly to geocoders or to the local vernacular. The Road Grinder project attempts to bridge this gap.

It is common practice in a GIS system to store prefix directions in address points and road centerline data. Yet, in everyday conversation, prefix directions are often omitted. An example of this would be Eastwood Elementary School. Eastwood Elementary school is known to be located at 3305 Wasatch Drive in Salt Lake City. Note the omission of prefix direction. In a GIS system, data referencing this location would be stored as 3305 S Wasatch Drive. A geocoder, based on the underlying data, is expecting the user to supply a valid prefix direction. When a prefix direction is not supplied, which is not necessary for many addresses in Utah, a match score less than 100% is generated. It may concern an end user to see a less-than perfect match score on an address they are very familiar with.

This is extremely common on alpha named roads throughout Utah. It is also very common to have entire roads exists in one address quadrant. McClelland Street in the Salt Lake City address system only exists in the south quadrant. Addresses assigned to this street in Salt Lake City must have a “South” prefix direction. Locally, “South” can be omitted when referring to addresses on McClelland Street. 

A similar situation occurs on State Street in Salt Lake City. 
![state street addressing]({{ "/images/StateStreetAddressing.png" | prepend: site.baseurl }}){: .inline-text-right}
This image illustrates how only a small segment of this road has “North” addressing. The map shows that the majority of the addressing on State Street in Salt Lake City to be in the “South” address quadrant. It is unnecessary to provide a prefix direction when given a number greater than 300 on State Street. This is why it is common locally to say 1575 State Street in Salt Lake City. Geocoding services are expecting the “South” in order to give a 100% match score - but users, rightfully-so, often omit it. This situation is not unique to State Street. 

Another challenge to building geocoders is the fact that we often assign a variety of names to the same road segment. Diagram 2 illustrates this well showing how Mario Capecchi Drive is also known as Medical Drive, Highway 282, and S 1900 E. We expect our geocoding services to find a match when given any of the assigned names. To account for this, you could build a geocoder for each alias field in your data. You then create a composite geocoder that links all the contributing geocoders together. In our case, we build a geocoder for the primary name, alias1 name, alias2 name, and coordinate name fields.

![Road Alias Naming]({{ "/images/AliasRoadNaming.png" | prepend: site.baseurl }})

Functionally this works fine, but you tend to get inconsistent matches and the searching process can be slow due to the numerous geocoding services.

How did we remedy these common geocoding situations and also build a better geocoding experience? After a series of discussions, we decided to rethink the underlying data. We determined it would be best to create a subset of data that is specific for the geocoders. We derived data that better represents how we commonly communicate addresses.

To remedy the unnecessary need for prefix directions, we programmatically analyzed every address point and road centerline in the State checking if it could geocode without a prefix. If the address point or road centerline is unique, and can be located without a prefix direction, it is then placed in a validated table that is utilized during the geocoding process. The end result is that you now have the ability to geocode verified addresses with or without a prefix direction. For example you will now get a 100% match score when geocoding 3305 Wasatch Drive or 3305 S Wasatch Drive. Likewise for 1575 State Street and 1575 S State Street.

To improve performance and reduce the number of necessary locators, we exploded the road centerline feature class. This is a denormalized version of the SGID roads feature class. 

![Derived Road Centerline Table]({{ "/images/DerivedTable.png" | prepend: site.baseurl }})

The above image illustrates this well, showing how the SGID road segment in Diagram 2 gets denormalized into four separate features. This feature class is specifically created for geocoders and is recreated monthly before we rebuild the road centerline geocoders. The idea behind this derived feature class is that we now create one road centerline geocoder that takes into account the various alias names for each segment. This eliminates the need for us to build and maintain four separate geocoders and a composite geocoder. This equates to faster, more efficient geocoding.

When implemented, we expect our geocoding services to be more versatile, performant, with higher match scores, and happier end users. We look forward to hearing your feedback. 

Visit our [GitHub repository](https://github.com/agrc/RoadGrinder) to view or contribute to this project.
