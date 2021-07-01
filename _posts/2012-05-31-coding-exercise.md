---
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
tags: []
published: false
date: 2012-05-31 18:41:39 -0600
title: Interview Coding Exercise
categories:
  - Developer
---
<p>The Automated Geographic Reference Center (AGRC), has a coding group that mainly creates web solutions with a focus on location. One challenge is geolocating user input. In laymans terms, we need to associate an x and y coordinate on a map with user input. If someone keys in ‘Delicate Arch’, we want to take them there on a map. The user input text can be anything, and for the purposes of this exercise, the user input is going to be a set of house addresses.</p>
<p>In order to place a dot on a map, the address needs to be sent to a geolocator. A geolocator can read the line data for Utah's roads and find the address. For this exercise, you will break down an address into its parts so that it can be passed off to the geolocator. We hope this exercise gets you thinking about one of the flavors of work that we do and other spatial opportunities.</p>
<p>Given the files below, hydrate the Address model to satisfy the tests.</p>
<p><script src="https://gist.github.com/2847676.js"> </script></p>
