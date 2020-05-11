---
layout: post
status: publish
published: true
title: 'Success with Serverless'
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
date: 2018-02-26 23:45:28
categories:
- Developer
tags:
- nodejs
---

In this post, I'd like to share the success story of our recent testing of [serverless computing](https://en.wikipedia.org/wiki/Serverless_computing). We've been having some issues with a print-proxy service, and the situation gave us the perfect opportunity to experiment with serverless computing. This new(ish) technology has some exciting advantages over traditional solutions, and we've been looking for an excuse to try it out. We weren't disappointed.

### The Problem
[AGRC's base maps]({% link data/base-map-and-imagery/index.md %}) (including the [Google imagery]({% link discover/license/index.md %})) are served via a custom server application called Giza. Part of the advantage of using Giza is that it allows you to secure and track usage via quad-words. These unique words are assigned to a specific user and are locked down to a specific domain or IP address. For example, if my quad-word is locked down to `mydomain.com`, then requests originating from any other domain or IP address are blocked by the server. This prevents unauthorized access of licensed content, as well as allows AGRC to track analytics.

This quad-word system works great . . . until you try to use one of Esri's out-of-the-box print services ([here's an example of one](http://mapserv.utah.gov/arcgis/rest/services/Utilities/PrintingTools/GPServer)). When you send a web map to one of these print services, the service reconstructs all of the layers on the server. This causes requests for base maps to be sent from your ArcGIS Server box rather than your user's browser (with your domain as the referrer). Now, we do allow wide-open quad-words (i.e., quad-words not locked down to any domain/IP) to be used by those who need to make requests from servers or other local machines. However, the wide-open quad-words can't be used in web applications because they could be copied and used by unauthorized users. This is a problem.

### Swing and a Miss
Our original solution to this problem was a [custom geoprocessing service that was deployed via ArcGIS Server](https://github.com/agrc/print-proxy). Basically, this service acted as a proxy to a traditional print service, switching out the secured quad-word with a wide-open one, allowing the traditional print service to successfully make requests.

While we did make this solution work, it was not ideal. Geoprocessing services, in general, are a pain to work with, but debugging can be particularly challenging. Because of the potential strain on our server from the custom geoprocessing service, we asked our users to publish this service on their own servers. But this presented its own issues, as it added additional technical debt for them to deploy and maintain (assuming that they had an ArcGIS Server instance at all).

In the end, we decided that there was no need to incur all of the heavy overhead of ArcGIS Server for a simple proxy service.

### Serverless to the Rescue
This is where serverless computing came in.

Serverless computing centers around a simple concept: abstracting away all of the pain that comes from managing systems and allowing developers to focus on building software. With serverless computing, you simply write the code and let the experts ([Google](https://cloud.google.com/functions/), [Amazon](https://aws.amazon.com/lambda/), [Microsoft](https://azure.microsoft.com/en-us/services/functions/), and others) take care of all of the headaches associated with deploying and hosting. And even better, you only pay when your service is actually invoked. Consequently, the cost ends up being pennies on the dollar compared to standing up a traditional server. In fact, AGRC, to date, has not crossed the threshold of the free tier.

Many of the major vendors provide command-line utilities to help you get up and running quickly. We decided to give the provider-agnostic project, [Serverless](https://www.serverless.com/), a try. [Getting started](https://www.serverless.com/framework/docs/providers/google/guide/quick-start/) was fairly simple:
1. Choose a programming language. (And make sure it's supported by your provider. We chose Node.js on Google Cloud Functions.)
1. Create a template-based project.
1. Set up credentials.
1. Deploy!

Once I wrapped my head around this new paradigm and got everything wired up, I was left with nothing to focus on but the [business logic of my service](https://github.com/agrc/serverless-print-proxy/blob/master/index.js). Nirvana!

Another huge win with this solution was [automated testing and deployment via TravisCI](https://travis-ci.org/agrc/serverless-print-proxy). Each time I push a commit to `master`, Travis runs all of my tests and deploys **if** they are all passing. This would be impossible with our previous ArcGIS Server-based solution.

In the end, we have a stable, scalable, and highly available service hosted on world-class architecture that is kept up-to-date. (And, most importantly: it's maintained by someone other than me. :) ) I can't wait to find another excuse to use this technology.
