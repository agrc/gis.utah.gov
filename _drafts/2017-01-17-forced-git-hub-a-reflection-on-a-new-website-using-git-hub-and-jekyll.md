---
layout: post
status: publish
published: true
title: 'Forced GitHub; A reflection on a new website using GitHub and Jekyll'
author:
  display_name: Steve Gourley
  email: SGourley@utah.gov
date: 2017-01-17 19:19:39
categories:
- Featured
tags:

---

The first commit to our [version 6]({{site.baseurl}}{% post_url 2016-03-25-about-our-new-v6-website-in-ghpages %}) website was one year and eight months ago on May 26, 2015. We went live with the v6.0 on March 25, **2016**. Between the first commit and launch, we started an internal campaign to familiarize a technical staff of ~15 to contribute to a jekyll static website hosted by GitHub on Pages. The following are some reflections on what to expect if you are thinking of forcing the adoption of GitHub upon a mixture of developers and non developers.

### Character Building

Our office has had a few website training sessions during my career. We trained an office and launched a Joomla website that included forums, a web based content editor, and many other _web 2.0_ things. This taught us that less is more and we needed to be more organized with our content; We formed a not so beautiful spiderweb of data. WordPress gave us a chance to focus and solve our prior problems but we introduced new ones.

With the sour taste of MySQL and php on our pallets, we decided the benefits of a static website were too good to pass up. That and the fact that our WordPress site **could not** be upgraded. GitHub did a great job of marketing Pages and from the perspective of someone familiar with the GitHub flow, it was _awesome_! It was an _easy_ sell with the simplicity of markdown, the free hosting and distributed editing from GitHub, the lean, clean, no surprises markup, and the lack of security risks of a static site.

### The Giant Elephant(s) in the Room - git, GitHub, jekyll, liquid, markdown, html, css

> Sometimes experts have a hard time remembering how long it took them to become an expert.

We tried to make it very simple for people to edit content on the v6.0 website. We thought it would be best if our employees could use the GitHub website entirely to hide the complexities of git. They were very familiar with web based editors from Joomla and WordPress so I was optimistic. We explained forks, branches, pull requests, and commits with diagrams and demonstrations but the concepts still need reminding and reexplaining. At first, we overlooked the complexities of creating new content but created a [page template app](https://agrc.github.io/templater) to generate the jekyll required file name and YAML to lower the bar.

One reoccurring GitHub struggle is when you open a pull request, a link is created to the branch, and all subsequent commits, until merged, will also be in that pull request. Most people in our office expect a pull request to be a new entity from a snapshot in time. We have also recommended that our employees delete their forks and re-branch because `rebase` and **conflicts**. GitHub will create a new branch from master in their fork if they edit a file but if you are not using git regularly, that sounds very confusing and full of magic.

Initially, we focused on GitHub, forks, and pull requests as we thought that would create the most friction. We then moved on to markdown, specifically kramdown, hoping that this would be more intuitive and rewarding. It was - until you needed to learn liquid templating to create valid links or embed images. If you wanted more advanced styling than **bold** and _underline_ in markdown, then you had to learn the syntax additions that kramdown offers and the css classes that we made available that are stored as SASS. Things went from add an asterisks or two to pretty difficult quickly. If they wanted more, for example multiple columns etc, then it was back to html.

> We were very near sighted with the benefits of markdown and really missed what content creators were needing and expecting to do.

After about eight months, every employee in our office has successfully edited our website. Everyone has their notes on how to be successful and almost no two workflows are completely alike.

### The Fine Print

There are big initiatives with the web moving towards https and, at the time of this writing, if you use a custom domain name with GitHub Pages you **cannot** have https.
