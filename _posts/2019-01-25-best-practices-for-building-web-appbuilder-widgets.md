---
title: 'Best Practices for Building Web AppBuilder Widgets'
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
date: 2019-01-25 15:42:47
categories:
  - Developer
tags: []
---

Recently, I've worked on a [project](https://github.com/agrc/wfrc-wab-widgets/) building custom Web AppBuilder (WAB) widgets for a client. This has been an interesting digression from our typical development projects. Working within the confines of WAB has proved to be both liberating and frustrating. Being able to focus on a single widget and not have to worry about an entire application has been great. I've loved letting Esri take care of all of the basic application stuff such as loading the application framework, web map and widgets. However, not having control over the entire system has created some headaches. In this post, I'd like to cover some solutions that have helped me.

The first big win for me was finding [Esri's WAB-related Yeoman generators project](https://github.com/Esri/generator-esri-appbuilder-js). It provides several different generators. The first sets up a project structure and development environment specific to developing WAB widgets. It includes:
* a best practice folder structure
* grunt tasks for JS tooling including babel, livereload, and sass
* a grunt task to automate the copying of your development code to WAB developer edition

Esri also includes a generator for scaffolding out the widgets themselves. This project provided a great starting point for my work.

Another great tip that I found was to write your WAB widgets as plain old dojo widgets (inherit from `dijit._WidgetBase`) and then wrap them for WAB. This made unit tests much easier. The other benefit to this approach is that it makes it much easier to reuse the widgets in non-WAB applications. Here's an example repo: [gbochenek/wab-test-example](https://github.com/gbochenek/wab-test-example).

Using babel worked great for this project until I needed polyfills for older browsers. I'm looking at you, IE. Loading third party libraries via AMD from within WAB widgets [is a pain](https://developers.arcgis.com/web-appbuilder/sample-code/add-a-third-party-library.htm). Fortunately, I found [Polyfill.io](https://polyfill.io/v3/). This is a service that dynamically returns a set of polyfills as defined by query parameters. The cool part about this service is that it only loads the code required for the browser that's making the request. Using this library from within WAB requires [adding it to the `loadResource` method in `init.js`](https://github.com/agrc/wfrc-wab-widgets#add-a-polyfill-for-older-browsers).

I hope that these tips save you some headaches in the future. {% capture contact %}{% include contact.html
  subject=page.title
  contact=site.data.contacts.wab
  text="Let me know if you have anything to add to them:"
%}{% endcapture %} {{ contact | strip_newlines }}
