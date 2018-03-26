---
title: 'Cache-Breaking for Faster Web Application Updates'
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
date: 2018-03-23 19:56:37
categories:
  - Developer
tags: []
---

### When Production Is Broken, It Needs to Be Fixed Now!
Recently, a 3rd party changed the URL to one of their map services that we use in several of our applications. This came as a bit of a surprise to us so we quickly updated our applications and deployed new versions. Everything seemed great and we continued on our way. However, a full two days later, one of our clients came to me reporting that he still had users that did not have the updated applications in their browsers. The need to teach clients how to clear their browser caches feels unprofessional and it is unnecessary for them and me. So I started doing some digging on how this problem could be solved.

### Head[er]aches
Here's an example of a request for the main JS file for our application:

![screenshot of headers]({{ '/images/cache_headers.png' | prepend: site.baseurl }}){: .flex .flex--center .outline }

Notice `(from disk cache)` next to the status code? That means that the browser wasn't even making a request to the server for this file. This is really great for speeding up the loading of the application but not so great when you are trying to get updates to users' browsers. The problem with this request is that because it specifies neither the `Cache-Control` nor `Expires` header, the browser is left on its own to guess at how long it should cache the resource. This can vary between browsers and, in general, is a bad idea. But we also don't want to completely disable caching either. It can make a huge difference on page load speed. Google's Web Fundamentals site has [a really great article on this subject](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching). This article not only helped me understand the problem but gave me the direction on a solution.

### The Best of Both Worlds
What if we could cache the majority of our application code to keep it loading fast, but also get updates to our users the first time they load our application after a deploy? The key to making this possible is to disable client-side caching on the main application file, `index.html` and then aggressively cache all other resources. This keeps our application load time down since `index.html` is nothing more than a [50+ line shell around the application](https://github.com/agrc/deq-enviro/blob/c11865a477be1d5970c457636d9c738df58483e0/_src/index.html). Here's an example of new headers for this file:

![screenshot of headers]({{ '/images/index_headers.png' | prepend: site.baseurl }}){: .flex .flex--center .outline }

`Cache-Control: no-cache` directs the browser to always check the server for a new version of this file. The bulk of the code for our applications are built into the JS & CSS files. For these files I added a timestamp to the request (e.g. `/dojo/dojo.js?rel=1519311093828`). This timestamp, implemented via [grunt-cache-breaker](https://github.com/shakyShane/grunt-cache-breaker), is changed each time the application is built. Browsers cache resources by unique URL. So, when the URL to the resource is changed, the browser will instantly request a new version from the server. No more wondering if my users are getting updates!

Bonus tip: The [`ETag`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) header allows the browser to check to see if a resource has changed on the server before actually downloading it (thus the `304` status code).

Here's an example of new headers for the main JavaScript file for the application:

![screenshot of headers]({{ '/images/better_headers.png' | prepend: site.baseurl }}){: .flex .flex--center .outline }

Once I decided on the headers that I wanted, configuring our [IIS web server](https://docs.microsoft.com/en-us/iis/configuration/system.webserver/staticcontent/clientcache) was [fairly straight-forward](https://github.com/agrc/deq-enviro/blob/c11865a477be1d5970c457636d9c738df58483e0/_src/web.config). Here's an example of a commit that implements this entire solution: [https://github.com/agrc/deq-spills/commit/c396cca4f7fc906fd5f965888c0a992b5ae0b9df](https://github.com/agrc/deq-spills/commit/c396cca4f7fc906fd5f965888c0a992b5ae0b9df).
