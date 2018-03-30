---
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
tags:
  - code
date: 2012-10-25 12:39:06 -0600
title: Tracking Server Response Times with the Google Spreadsheets API and asp.net
categories:
  - Developer
---
<p>We've been noticing some speed issues with our mapserv machines recently and are trying to figure out the issue. In an effort to have a little insight into the when, where, and why's, we created a very rudimentary tracking tool that has quite a bit of potential and was fun to make. This will hopefully give us and our hosting and networking groups a better idea of what could be the root cause.</p>
<p>The abridged version of what we did was to create a console application scheduled to run every 30 minutes to request a page and report the response times to a google spreadsheet. We then created a chart in the spreadsheet that can be published on our wiki and visually consulted.</p>
<p>Google makes it really easy to use their <a href="https://developers.google.com/google-apps/app-apis" title="google app apis">app API's</a>. They've developed <a href="https://nuget.org/packages?q=gdata" title="Google.GData">asp.net assemblies</a> that you can import via <a href="https://nuget.org" title="nuget package manager">NuGet</a> to get up and running quickly. Pair that with the <a href="https://developers.google.com/google-apps/spreadsheets" title="spreadsheet api documentation">documentation</a> and <a href="https://developers.google.com/google-apps/spreadsheets/#adding_a_list_row" title="tutorials">tutorials</a> and it's really easy to get started. The NuGet package that I used for this example is the <a href="https://nuget.org/packages/Google.GData.Spreadsheets" title="nuget package">Google.GData.Spreadsheets</a>. My packages.config is below in the gist.</p>
<p>The first speed bump I encountered was choosing how to <a href="https://developers.google.com/accounts/docs/GettingStarted" title="authentication documentation">authenticate</a> my application. Google recommends OAuth2 but that doesn't really fit my needs as far as I understand. I want this application to run on my behalf without any human interaction necessary to authorize it. I chose to use <a href="https://developers.google.com/accounts/docs/AuthForInstalledApps" title="clientlogin documentation">ClientLogin</a> even though it is <a href="https://developers.google.com/accounts/terms" title="deprecation policy">deprecated</a>.</p>
<p><a href="https://developers.google.com/google-apps/spreadsheets/#authorizing_requests_with_clientlogin" title="client login example">ClientLogin</a> is pretty simple and allowed me access to my Google Drive documents in a few minutes.</p>
<p>Next I created a Spreadsheet through a browser to capture the data on our page response times. I named this document something useful so I could query for it through the SpreadSheetFeed. I also created a <a href="https://developers.google.com/google-apps/spreadsheets/#working_with_list-based_feeds" title="header row">header row</a> of values so when I insert rows, the data would map to the correct cell. If you do not create a header row you will get a 400 bad request responses when trying to insert. Therefore, if you wanted to create your spreadsheet via code, you'd have to use the Cell feed to create the header row, then use the spreadsheet feed to insert your values. For the sake of speed, I created the sheet and the header row manually. This gotcha was the only non trivial step when using this API. The error message was not very helpful and the documentation wasn't super clear.</p>
<p>After that, I was able to create a chart through the browser and publish it. It gives you a script tag you can inject or an image you can place to view online that is always up to date.</p>
<p><img src="https://docs.google.com/a/utah.gov/spreadsheet/oimg?key=0AjQ5lAz8kBCAdDBfV3d3cnVwaGlkWkpHbG5PUE1vV0E&oid=4&zx=tojc5bs5kzsd" /> </p>
<h3>Sample Code</h3>
<p><script src="https://gist.github.com/3954301.js"> </script></p>
