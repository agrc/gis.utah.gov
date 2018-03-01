---
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
tags:
  - javascript
  - tools
date: 2015-05-25 17:01:31 -0600
title: Staying in the Zone with AMD Butler
categories:
  - Developer
---
[__Update(3/17/16)__: This plugin has been ported to an [Atom Editor](https://atom.io/) package called [amdbutler](https://atom.io/packages/amdbutler).]
<p>A few months ago, I built a simple plugin for <a href="http://www.sublimetext.com/3">Sublime Text 3</a>&nbsp;for managing <a href="https://github.com/amdjs/amdjs-api/blob/master/AMD.md">AMD</a>&nbsp;dependencies called <a href="https://packagecontrol.io/packages/AMD%20Butler">AMD Butler</a>. Now it's hard for me to picture coding without it. If/when I make the switch to <a href="https://atom.io/">Atom</a>&nbsp;this will be the first thing that I port over from Sublime.</p>
<p>AMD Butler is all about staying in the zone. First, let's take a look at life without it:</p>
<ol>
<li>Get a great idea</li>
<li>Start coding</li>
<li>Decide to add an AMD dependency</li>
<li>Stop coding</li>
<li>Scroll to the top of your file</li>
<li>Remember and type the exact module id</li>
<li>Scroll down to the factory function parameters</li>
<li>Remember the order of the dependencies</li>
<li>Think of what to name the return parameter</li>
<li>Scroll back to where you were working</li>
<li>Completely forget what you were doing</li>
</ol>
<p>Now let's look at life with AMD Butler:</p>
<ol>
<li>Get a great idea</li>
<li>Start coding</li>
<li>Decide to add an AMD dependency</li>
<li>Execute the AMD Butler add command</li>
<li>Type the first few letters of the module id and hit enter</li>
<li>Continue coding <a href="http://www.joelonsoftware.com/articles/fog0000000068.html">in the zone</a></li>
</ol>
<p>This is what it looks like:</p>
<p><img src="https://github.com/agrc/AmdButler/raw/master/docs/butler_add.gif"/></p>
<p>
AMD Butler dynamically crawls your existing modules and builds a quick list. It only takes a few keystrokes to find the correct one and then it automatically adds it to your list of dependencies with an appropriate associated factory function argument. All without affecting the position of your cursor. This is especially nice to use after <a href="{{site.baseurl}}{% post_url 2014-09-22-grunt-esri-slurp %}">slurping ESRI JS modules</a>. No more scrolling, no more trying to remember module names or preferred argument aliases. Just quickly add a dependency and get back to what you were doing.</p>
<p>
There's also commands for <a href="https://github.com/agrc/AmdButler#amd-butler-sort-imports">sorting</a>, <a href="https://github.com/agrc/AmdButler#amd-butler-remove-import">removing</a> and <a href="https://github.com/agrc/AmdButler#amd-butler-prune-unused-imports">pruning</a> unused dependencies.</p>
<p>
AMD Butler can be installed via <a href="https://packagecontrol.io/">Sublime Package Control</a>. Head over to it's <a href="https://github.com/agrc/AmdButler">GitHub page</a> to checkout the code or report any issues.</p>
