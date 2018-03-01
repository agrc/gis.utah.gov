---
author:
  display_name: Steve Gourley
  email: SGourley@utah.gov
tags: []
date: 2017-01-17 19:19:39
title: Forced GitHub; A reflection on a new website using GitHub and Jekyll
categories:
  - Developer
---

The first commit to our [version 6]({{site.baseurl}}{% post_url 2016-03-25-about-our-new-v6-website-in-ghpages %}) website was one year and eight months ago on May 26, 2015. We went live with the v6.0 on March 25, **2016**. Between that first commit and launch, we started an internal campaign to familiarize a technical staff of ~15 to contribute to a [jekyll](https://jekyllrb.com/) [static website](https://en.wikipedia.org/wiki/Static_web_page) hosted by [GitHub Pages](https://pages.github.com/). The following are some reflections on what to expect if you are thinking of forcing the adoption of GitHub upon a staff mixed with developers and analysts.

### Character Building

Our office has run a few website training sessions during my career. We trained our office and launched a [Joomla](https://www.joomla.org/) website that included forums, a web based content editor, and many other _web 2.0_ things. Our Joomla site was in operation for 4 years, but basically taught us that less is more and we needed to be more organized with our future content management system as we formed a not so beautiful spiderweb of varying qualities of data. Our next site was built in [WordPress](https://wordpress.org/) and gave us a chance to focus and solve our prior problems but we introduced new ones - like 3MB of javascript and css loaded for every page that was mostly unused.

With a slightly sour taste of MySQL and php on our palletes from the past two dynamic websites, we decided the benefits of a static website were too good to pass up. That and the fact that we backed oursleves into a corner where our WordPress site **could not** be reasonably upgraded. GitHub did a great job of marketing Pages and from the perspective of someone familiar with the GitHub flow... it was _awesome_! It was an _easy_ sell with the simplicity of markdown, the free hosting and distributed editing from GitHub, the lean, clean, no surprises markup, and the lack of security risks of a static site.

### The Giant Elephant(s) in the Room - git, GitHub, jekyll, liquid, markdown, html, css

> Sometimes experts have a hard time remembering how long it took them to become an expert.

We tried to make it very simple for people to edit content on the v6.0 website. We thought it would be best if our staff and external contributors could use the GitHub website entirely to hide the complexities of git. They were familiar with web based editors from Joomla and WordPress so we were optimistic. We explained forks, branches, pull requests, and commits with diagrams and demonstrations but the concepts still need reminding and reexplaining. We focused heavily on editing existing content and overlooked the complexities of creating new content. Quickly, we created a [page template app](https://agrc.github.io/templater) to generate the jekyll required file name and [YAML](http://yaml.org/) to lower the bar but it is more difficult than WordPress.

> We focused on GitHub as we thought that would create the most friction - we overlooked and simplified or ignored all of the other pain points.

We moved on to [markdown](http://daringfireball.net/projects/markdown/), specifically [kramdown](https://kramdown.gettalong.org/), hoping that this would be more intuitive and rewarding to learn. It was simple on the surface until editors wanted more advanced styling than **bold** and _underline_. You had to learn the syntax additions of kramdown and we had to create and use css classes that were written in [SASS](http://sass-lang.com/guide). Things went from add an asterisk to confusing quickly. The complexity increased when we introduced the [liquid templating syntax](https://shopify.github.io/liquid/) to create valid links or embed images. If you mix liquid templating with markdown it looks like chicken scratch. Eyes started to glaze over and people began to doubt that we made a good decision. We sold the idea on simplicity but simplicity does not align with everyone's web page design goals. If editors wanted multiple columns or a caption for their image for example, then it was back to html. Complexity was creeping back in.

> We were very near sighted with the benefits of markdown and really missed what content creators were needing and expecting to do.

### git reset --hard

Keeping forked repositories current is a bit of a struggle for those not working with git and GitHub regularly. We have recommended that our staff delete their forks and re-branch because `rebase` and **conflict**. Our website has over 1,000 commits and repositories can become dated quickly. GitHub creates a new branch from master in your fork if you edit an existing file in a repository they do not own but, that sounds very confusing and full of scary. With repetitive use and training our contributors are now comfortable and proficient with GitHub. Plan for this level of proficiency to take time.

### The Fine Print

There are big initiatives with the web moving towards https. At the time of this writing, if you register a custom domain name with your GitHub Pages you **cannot** have https. To add an apex domain to a GitHub Pages website you have to use your organization repository. In our case, that involved renaming our gis.utah.gov repository to agrc.github.io. A side effect of this was that, without editing YAML configs, editors could no longer preview a working website in a forked repository. **They could not see what they produced before the changes were merged**. This was a late change that caught us off guard and our editors depended on the preview. We did not have a good replacement and quality of pull requests suffered. GitHub Pages also restricts the jekyll plugins you are allowed to run for security purposes. That means you have to roll your own search and other seemingly basic features. Until we caught wind of [netlify](https://www.netlify.com/), we were without https, website previews, and unlimited access to plugins. Netlify is great. It offers so many things we didn't know we needed. It was easy to set up and we highly recommend it.

### Success

After about eight months of editing old content and creating new content, every staff member has successfully edited our website. Everyone has their notes and instructions on how to be successful and almost no two workflows are completely alike. You can write up [multiple ways]({{ "/about/contributing" | prepend: site.baseurl }}) to [create and edit content]({{ "/about/contributing/edit-existing" | prepend: site.baseurl }}) and it will differ from your coworker. The GitHub flow introduced having a core group of contributors to look over content. Only these people have the access to accept pull requests. This was the first website with a review process and it has been very useful. Gone are the days of no pre-release content reviews. The organization and quality of our content has greatly increased.

### Engagement

We have had external community commits but fewer than we were expecting. Users rarely use the [GitHub issues to report problems](https://github.com/agrc/gis.utah.gov/issues/new) with our site but the ones that do [have had great conversations](https://github.com/agrc/gis.utah.gov/issues/248) and results. We suspect if users do not have a GitHub account we do not get the conversion. We also suspect that people do not think their story is worth telling when it really is!

### Green Grass

We are pleased with our website and hope you are too! We all rely on our [notes and cheatsheets](https://github.com/agrc/gis.utah.gov/blob/master/README.md) and our workflows for being successful. GitHub and git are hard. Markdown is less difficult but at times a struggle. Jekyll is complicated. We thought it would be fun and useful as an office to learn to use GitHub and the other technologies involved in a static website. We are an open source agency with our data and our applications. All of our applications reside on GitHub so having our staff familiar was a welcomed side affect. Some employees have seen the benefits and use GitHub for personal GIS scripts and tools and there's no doubt that our organizational code repository is much stronger from the related commitment to managing content in git as well. The forced learning process could have been smoother. If we did it again we would adjust our approach. But in the end we made it happen as a team and it is working for our team.
