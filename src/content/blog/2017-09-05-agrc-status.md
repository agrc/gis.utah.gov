---
title: UGRC System Status Page
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
date: 2017-09-05T18:29:31.000Z
tags:
  - monitoring
category: Developer
cover_image: "/src/images/pillar-blog/default-social-card.png"
cover_image_alt: ugrc social card
---

Over the years, GIS is trending more and more towards being web-based. UGRC has tried to keep step with this trend with the addition of the [discover](/products/discover), the [TurnGPS](/products/sgid/cadastre/turn-gps) RTK GPS service, and the [Web API](https://api.mapserv.utah.gov) handling over one million requests per month. More and more users rely on these services. Outages are _very_ disruptive and we're doing everything in our power to avoid them. But in the event of a system outage we want our users to know **what** is going on, that you're not alone and that UGRC is aware of the issue, and **when** it is likely to be resolved.

UGRC is now maintaining a system status website for the services we provide. Users can visit and bookmark [https://agrc-status.netlify.app](https://agrc-status.netlify.app/) to check on the status of UGRC systems.

If you notice an outage, please check the [UGRC status website](https://agrc-status.netlify.app/) **first** as this will get you the details quickly and it leaves UGRC with more time to work toward resolution. If you do not see the status accurately reflected on the status page, please get in contact with us immediately by [phone or email](/contact) with a description of the problem.

When outages occur, UGRC will use the status website to let users know that:

1. We are aware of the issue
1. The suspected cause of the issue, and
1. When the issue will be resolved

UGRC will continue to use [X](https://twitter.com/MapUtah) with the hash tag [#utmap](https://twitter.com/hashtag/utmap) to disseminate information about outages and other interesting news. But, UGRC recognizes X _does not_ reach all our users. Not every GIS user has a X account and not every person with a X account comprehensively reads our posts.

Lastly, if there are other systems that you would like us to track, let us know.

## Technical Information

As you may know, the fine people at Netlify host our gis.utah.gov website. Overall they offer a great service and when they released [StatusKit](https://www.netlify.com/status-pages/), UGRC was very excited. StatusKit is a website and template for [Hugo](https://gohugo.io/). Hugo is a static website generator, similar to [jekyll](https://jekyllrb.com/) which generates this website, built with [Go](https://golang.org/). Using pull requests or a desktop CLI tool, we can create new incidents and Hugo and Netlify take care of the rest.
