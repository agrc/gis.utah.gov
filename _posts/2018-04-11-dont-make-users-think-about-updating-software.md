---
title: "Don't Make Users Think about Updating Software"
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
date: 2018-04-11 23:13:59
categories:
  - Developer
tags:
  - arcgis-pro
  - update-service
---

As software developers, we want the people who are using our software to ~~enjoy~~ _not hate_ the experience. Developers strive to create a positive user experience to increase the popularity and usage of their software. Consequently, we spend many hours designing, debating, and redesigning to ensure that user interactions with our software are simple, effective, and intuitive.

### skip to the [tl;dr <i class="fas fa-long-arrow-alt-down"></i>](#tldr)

> The people who are using your software are motivated by the desire to save time.

Building on the blog post from Scott Davis, _[Cache Breaking for Faster Web Application Updates]({{site.baseurl}}{% post_url 2018-03-23-cache-breaking-for-faster-web-application-updates %})_, which is about website caching techniques for delivering faster updates to users, at its core software development is about improving the user experience of website applications. Getting updates to users is an often overlooked feature and an afterthought. But it is very important—_especially when you ship a lot of bugs_.

> I did not find any UX for a Beginner books focused on improving the user experience of delivering software updates to users.

The web should take some blame for making developers complacent when thinking about application updates. On the web, you can modify text in a file or place an image on a web server and see the changes when you refresh your browser. That low-friction update cycle is a major feature of what makes the web so accessible and amazing for users and developers.

Take a step back to look at the browser you are using to view the web. Do you know what version it is? Do you care? _Should you care_? **No**. There was a time when you would only get an update to your browser when you updated your operating system. There was a time when you needed to go to the vendor's website to download a newer version. This caused severe damage the web as the web evolved; certain features were only available in certain versions of browsers. This is still an issue today.

> Going to a website to download an installer to keep someone else's software current should not be a responsibility of the user.

Modern browsers and app stores remove the hurdles to keeping your and their software evergreen. The term `evergreen` might have become popular when Google Chrome started auto updating in late 2010. Since then, all major browsers have switched to auto updating. Browser auto updating is pretty straightforward&mdash; when you start your browser, it checks for an update and downloads it in the background. Then, the next time you start the software, you are using the newest version. I think this set a precedent for software that users expect and desire. Going to a website to download an installer to keep someone else's software current should not be a responsibility of the user. And placing this responsibility on the users is a great way to turn them away.

> Ultimately, this long-winded post is about making ArcGIS Pro add-ins evergreen.

When operating outside of a browser or an app store, the burden is put on the developer to make sure that the code running on your users' machines is kept current. I have lived through and experienced the harm and hassle created by developing and distributing ArcGIS desktop add-ins without evergreen capabilities. There is no app store for ArcGIS add-ins and there probably never will be. If you are developing extensions for ArcGIS, consider how you will provide updates to your users while taking into account their experience.

### AGRC Extension Building History

<div class="flex flex--around flex--wrap">
  <div style="width:50%;padding:1em" markdown="1">
#### AGRC Extension Building v1.0.0

Historically, AGRC has developed extensions for the ArcGIS platform and distributed them via email upon request. If a bug was found, updates were made, and another email was sent. This _can_ work for a single user. But if you have more than one user or if a user shares the software with a friend, you now have **two** or more different versions of your software out in the wild. This brings up some questions: do you send an email to everyone with the new update? Do you have the email address of each person who is using the software?
  </div>
  <div style="width:50%;padding:1em" markdown="1">
#### AGRC Extension Building v1.1.0

We ran into the problem of people using outdated software with deprecated urls and services. We then centralized all of our code on GitHub and this improved our issues slightly. Users were now able to download newer versions without sending binaries over email. But if the tool did not stop working, users wouldn't be forced to look for a new version. Placing the responsibility on users to check for updates is _bad_ UX. Subsequently, old code was still being run in the wild.
  </div>
  <div style="width:50%;padding:1em" markdown="1">
#### AGRC Extension Building v1.2.0

To combat the problem of people not checking GitHub for updates, we updated our extensions to ping GitHub and notify users to go and download the new version. This improved the user experience but the user interaction was still **unacceptable**.
  </div>
</div>

# tl;dr
## AGRC Extension Building v2.0.0

AGRC has created [Pro Evergreen](https://github.com/steveoh/pro-evergreen), an auto update utility for ArcGIS Pro add-ins. Every add-in that comes out of AGRC will use this package to keep the add-ins evergreen. Pro Evergreen has the functionality to compare the installed version of an add-in with the latest releases on GitHub. More importantly, the functionality to update an add-in is quite simple for the developer.

> evergreen.Update(newVersion);

The developer has the choice of how (and whether) they want to notify the user of the update. Updates can be made silently or a notification could be displayed; the UI is up to the add-in developer. Using GitHub release and pre-release assets, users can be put in "beta" or "stable" channels. This allows the developer to test changes before delivering to a larger audience. There are a lot of benefits to this approach, and we hope you can benefit from our experience and efforts.

#### Getting Started

The evergreen documentation is in the repository [read me](https://github.com/steveoh/pro-evergreen/blob/master/README.md) and getting started with Pro Evergreen is 10 steps or fewer.

1. Add [Pro Evergreen](https://www.nuget.org/packages/ProEvergreen) to your C# add-in project via [NuGet](https://docs.microsoft.com/en-us/nuget/quickstart/install-and-use-a-package-in-visual-studio)
2. Create an Evergreen object `var evergreen = new Evergreen("github username", "repository");`
3. Get the version of the add-in currently running `evergreen.GetCurrentAddInVersion();`
3. Get the latest releases from GitHub `evergreen.GetLatestReleaseFromGithub();`
4. Compare the versions to see whether the add-in is current `evergreen.IsCurrent(addinVerion, gitHubVersion);`
5. Update the add-in `evergreen.Update(release);`

#### Prerequisites

1. Create a [GitHub account](https://github.com/join)
2. Create a GitHub repository for your add-in
2. Create a [GitHub release](https://help.github.com/articles/creating-releases/) using [semantic versioning](https://semver.org)
3. Add the compiled add-in as a release asset (_#7 from the GitHub release help_)

![ProEvergreen](https://github.com/steveoh/pro-evergreen/raw/master/proevergreen.png){: .flex .flex--center }
