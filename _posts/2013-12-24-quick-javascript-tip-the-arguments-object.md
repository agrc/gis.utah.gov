---
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
tags:
  - javascript
date: 2013-12-24 06:55:10 -0700
title: 'Quick JavaScript Tip: The Arguments Object'
categories:
  - Developer
---
<p>Recently, as I was slowly working my way through <a href="http://rmurphey.com/">Rebecca Murphy's</a> excellent <a href="https://github.com/rmurphey/js-assessment">js-assessment test suite</a>, I ran into a problem that was quite vexing. I was creating a function that <a href="https://github.com/rmurphey/js-assessment/blob/master/tests/app/functions.js#L109-119">was to take an arbitrary number of arguments and combine them with an existing array</a>. I thought that this would be as trivial as using the concat method on the existing array and passing in the arguments object. However, as you can see below, it didn't work.</p>
<p><a class="jsbin-embed" href="http://jsbin.com/uSuWEVuj/2/embed?js,output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script></p>
<p>For a while I thought that I must be using the concat method incorrectly. I tested it using the terminal again and again with no problems. Finally I recalled a <a href="http://us6.campaign-archive1.com/?u=2cc20705b76fa66ab84a6634f&amp;id=c8f1074cb2">recent issue</a> from A Drip of JavaScript that talked about the arguments object. I remembered that Joshua said that the arguments object "isn't exactly an array, [but rather an] object that <b>acts</b>&nbsp;like an array." This means that you can's use it exactly like an array. An easy fix for the situation was to bind a call to the slice method on an empty array to the arguments object which converts it to a true array object like so:</p>
<p><a class="jsbin-embed" href="http://jsbin.com/uPuzuyAF/7/embed?js,output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script></p>
<p>Hopefully this will save you some time in the future and also convince you that you should really <a href="http://designpepper.com/a-drip-of-javascript">subscribe to A Drip of JavaScript</a>. Each week there is a great article that is short enough that I can read it without feeling like I have to dedicate a bunch of time and yet in depth enough to give me some useful knowledge.</p>
<p><a href='https://twitter.com/SThomasDavis'>Scott</a></p>
