---
author:
  display_name: Scott Davis and Steve Gourley
  email: stdavis@utah.gov
tags:
  - dojo
  - javascript
date: 2014-09-22 11:09:51 -0600
title: grunt-esri-slurp
categories:
  - Developer
---
[**Update**(3/17/16): ESRI has released [a bower package for the JS API](https://github.com/Esri/arcgis-js-api) that removes the need for this project.]
<p>Running the <a href="https://dojotoolkit.org/reference-guide/build/">Dojo Build System</a> with <a href="https://js.arcgis.com">ESRI's JavaScript API for ArcGIS Server</a> has been a problem that we have been trying to tackle for a very, <a href="{{site.baseurl}}{% post_url 2013-04-16-esri-jsapi-3-4-and-the-dojo-build-system %}">very</a>, <a href="{{site.baseurl}}{% post_url 2013-09-09-the-esri-api-for-javascriptdojo-build-system-saga-continues %}">very</a> long time. This post is about one of the key components to our current strategy that allows us to utilize a continuous integration server and obtain that mythical single JavaScript file build. </p>
<p>When version 3.4 of the ESRI JS API was released, an ESRI employee informed us of an undocumented AMD build. It was available on the CDN just like the other builds, <a href="https://js.arcgis.com/3.10amd/init.js">https://js.arcgis.com/3.10amd/init.js</a>, but it had one key difference: it contained no <a href="https://dojotoolkit.org/reference-guide/build/profiles.html#id6">layer files</a>. It is vanilla AMD modules that have been optimized by the dojo build system. This simplified working with the build system <em>immensely</em>. With a bit of massaging you can take these modules and create an ESRI <a href="https://dojotoolkit.org/reference-guide/loader/amd.html#id6">package</a> that can be ingested by Dojo's build system with relatively ease. This <em>"bit of massaging"</em> is made trivial with the use of <a href="https://github.com/steveoh/grunt-esri-slurp"><span class='codes'>grunt-esri-slurp</span></a>.</p>
<p>The original solution to this problems was a <a href="https://github.com/agrc/AGRCJavaScriptProjectBoilerPlate/blob/30782f918d883dd67d99b3d966f7501817f1a234/slurp_esri_modules.sh">bash script</a>. However, this only worked well for *nix users so we ported it to a <a href="https://github.com/agrc/AGRCJavaScriptProjectBoilerPlate/blob/2a60f94f7df20cb1c207780c5931c12a7279987b/build.bat">bat file</a>. We then had windows and *nix support but it was another step in the development pipeline and felt like friction. It was also a bit of an issue for running in our TravisCI environment and we ended up checking the slurped code into the repository. This felt wrong. We were using <span class='codes'>grunt</span> for many other tasks and it seemed like the perfect fit for this task.</p>
<p>There are a few problems that this <a href="https://gruntjs.com/">grunt</a> plugin solves. The first is that the AMD build is intended to be used from a CDN and the Dojo build system expects the packages to exist on disk. <span class='codes'>grunt-esri-slurp</span>, given a <a href="https://github.com/steveoh/grunt-esri-slurp/blob/master/tasks/esriModules-3.10.js">list of modules</a>, will download each resource one at a time from the CDN to the package location for your project. <span class='codes'>grunt-esri-slurp</span> <a href="https://github.com/steveoh/grunt-esri-slurp/blob/master/tasks/esriModuleBuilder.js">builds the module list</a> and stores the list for each api version that it supports (<a href="https://github.com/steveoh/grunt-esri-slurp/issues/1">3.8+</a>). </p>
<p>The second problem with the vanilla AMD build is that the modules have already been optimized by the dojo build system. These optimizations render the modules incompatible for use with the build system again. For example, the build system concatenates all of an AMD modules dependencies into a single string with a <span class='codes'>.split(',')</span> on the end like this:</p>

```js
define('dep1,dep2,dep3'.split(','), function(s,G,H){...});
```

If you tried to use this vanilla AMD module within the build system it will not be able to parse the dependencies and the build will fail. <span class='codes'>grunt-esri-slurp</span> <a href="https://github.com/steveoh/grunt-esri-slurp/blob/master/tasks/unwinder.js">unwinds</a> the dependencies back into an array of strings like this:

```js
define(['dep1','dep2','dep3'], function(s,G,H){...});
```

<p>Until now we have been focusing solely on javascript. Optimizing CSS can save trips to your servers and time on your first page load. The dojo build system will optimize all of the CSS found in your packages. Our strategy is to create <a href="https://github.com/agrc/AGRCJavaScriptProjectBoilerPlate/blob/master/src/app/resources/App.css">one top level CSS</a> for our websites and <span class='codes'>@import</span> the dependencies. The dojo build system will then concatentate these dependencies into the top level CSS and your website will only make one request. </p>
<p>The ESRI AMD build package contains a different file structure than the best practice where the entire dojo framework is nested inside a folder called dojo. <span class='codes'>grunt-esri-slurp</span> <a href="https://github.com/steveoh/grunt-esri-slurp/blob/master/tasks/unwinder.js">unwinds</a> the CSS file paths to make the <span class='codes'>dojo</span>, <span class='codes'>dijit</span>, and <span class='codes'>dojox</span> packages at the same level as ESRI and your own packages.</p>
<p>If you want to get started using <span class='codes'>grunt-esri-slurp</span> there are a few prerequists. You first must install <a href="https://nodejs.org/">nodejs</a> and then <a href="https://gruntjs.com/getting-started">gruntjs</a>. Follow the instructions there and on the <a href="https://github.com/steveoh/grunt-esri-slurp">readme</a> file for <span class='codes'>grunt-esri-slurp</span>. There are code examples and links to working examples and boilerplates.</p>
<style>
 span.codes {<br />
    padding: 0;<br />
    padding-top: 0.2em;<br />
    padding-bottom: 0.2em;<br />
    margin: 0;<br />
    font-size: 85%;<br />
    font: 12px Consolas, "Liberation Mono", Menlo, Courier, monospace;<br />
    background-color: rgba(0,0,0,0.04);<br />
    border-radius: 3px<br />
}<br />
span.codes:after, span.codes:before {<br />
    letter-spacing: -0.2em;<br />
    content: "\00a0"<br />
}<br />
</style>
 