---
layout: post
status: publish
published: true
title: ESRI JSAPI 3.4 and the Dojo Build System
author:
  display_name: Scott Davis
  login: Scott Davis
  email: stdavis@utah.gov
  url: ''
author_login: Scott Davis
author_email: stdavis@utah.gov
wordpress_id: 13119
wordpress_url: http://gis.utah.gov/?p=13119
date: '2013-04-16 06:43:30 -0600'
date_gmt: '2013-04-16 12:43:30 -0600'
categories:
- Developer
tags:
- javascript
---
<p>In a <a href="{{ "/speed-up-your-esri-javascript-api-webapp/" | prepend: site.baseurl }}">previous post</a>, I outlined how I use the <a href="http:dojotoolkit.org/reference-guide/build/">Dojo Build System</a> to optimize my web app code for production. Specifically I showed how I get around the problem of working with ESRI's <a href="http://help.arcgis.com/en/webapi/javascript/arcgis/">ArcGIS API for JavaScript</a> library which has already been run through the build system. However, with their recent upgrade to AMD-style module loading my handy trick of using:<br />
<code class="prettyprint"><br />
dojo['require']('esri.map');<br />
</code><br />
... to fool the build system into skipping 'esri...' modules imports didn't work anymore. I had no idea how to exclude modules when loading them like this:<br />
<code class="prettyprint"><br />
define(['esri.map'], function (Map) { /* ... */ });<br />
</code><br />
So I headed over to <a href="http://dojotoolkit.org/chat">#dojo</a> to see if the experts had any ideas. Fortunately for me,&nbsp;<a href="https://twitter.com/brianarn">brianarn</a>&nbsp;was there and was aware of the problem. After some brain storming, we came up with the idea to use a custom loader plugin for loading ESRI modules. Since the build system doesn't try to flatten modules that are imported with nested requires, we hoped that importing them through the plugin would solve my problem. The plugin was a relatively simple implementation:</p>
<p><code><br />
define(function () {<br />
    // summary:<br />
    //      A dojo loader plugin for loading esri modules so that<br />
    //      they get ignored by the build system.<br />
    return {<br />
        load: function (id, require, callback) {<br />
            // id: String<br />
            //      esri module id<br />
            // require: Function<br />
            //      AMD require; usually a context-sensitive require bound to the module making the plugin request<br />
            // callback: Function<br />
            //      Callback function which will be called, when the loading finished.<br />
            require([id], function (mod) {<br />
                callback(mod);<br />
            });<br />
        }<br />
    };<br />
});<br />
</code></p>
<p>You can put this module within any package and use it like this:<br />
<code class="prettyprint"><br />
define(['app/EsriLoader!esri/map'], function(Map) { /* ... */ });<br />
</code><br />
Using the plugin to load ESRI module effectively prevents the build system from trying to include them in your layer files thus allowing the build script to complete successfully. Of course, none of this hacking would be needed if ESRI would just <a href="http://ideas.arcgis.com/ideaView?id=087E00000004JOzIAM">release their source code</a>. :)</p>
<p>If you find a better way of getting around this problem or have any other suggestions please let me know at <a href="http://twitter.com/ScottAGRC">@ScottAGRC</a>.</p>
