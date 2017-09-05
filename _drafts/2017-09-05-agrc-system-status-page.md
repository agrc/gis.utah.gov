---
layout: post
status: publish
published: true
title: 'AGRC System Status Page'
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
date: 2017-09-05 18:29:31
categories:
  - Featured
  - Developer
tags:
  - monitoring
---
AGRC is now maintaining a system status website. Users can visit and bookmark https://agrc-status.netlify.com to check on the status of AGRC systems. If you notice an outage, please check the [website](https://agrc-status.netlify.com) **first** before contacting AGRC as we may already be working on a solution. AGRC has identified six systems to track. If you would like AGRC to track more systems, please contact us.

Over the years, GIS is trending more and more towards being web based. AGRC is exemplifying this trend with the addition of the [discover server]({{ "/discover" | prepend: site.baseurl }}), mapserv having over fifty services, and the [Web API](https://api.mapserv.utah.gov) handling over one million requests per month. More and more users are relying on these services. Outage are _very_ disruptive and users want to know what is going on and when AGRC will resolve the issue.

When outages occur, users contact the AGRC steward and ask the same three questions:

1. Did you know this is not working?
1. Why is this not working?
1. When will this be working again?

AGRC currently uses [twitter](https://twitter.com/MapUtah) with the hash tag [#utmap](https://twitter.com/hashtag/utmap) to disseminate information about outages and other interesting news. In fact, most of the employees at AGRC [maintain a twitter account]({{ "/about/contact/" | prepend: site.baseurl }}). If you want to be the first to know about what is going on at AGRC [give us a follow](https://twitter.com/MapUtah).

AGRC recognizes twitter _does not_ reach all our users and that email is private. Not every GIS user has a twitter account and not every person with a twitter account follows us. Not every twitter user treats their feed like email and can miss important tweets.

To try to reach the most users possible with the least amount of email, AGRC will maintain a **system tracking website**. AGRC will track six important public facing systems that cause disruption when they do not function as expected. If there is a missing important service AGRC offers please contact us.

## Technical Information

As you may know, the fine people at Netlify host gis.utah.gov. They offer a great service and when they released [StatusKit](https://www.netlify.com/status-pages/), AGRC was very excited. StatusKit is a website and template for [Hugo](http://gohugo.io/).  Hugo is a static website generator, similiar to [jekyll](https://jekyllrb.com/) which generates this website, built with [Go](https://golang.org/). Using pull requests or a desktop CLI tool, we can create new incidents and Hugo and Netlify take care of the rest.
