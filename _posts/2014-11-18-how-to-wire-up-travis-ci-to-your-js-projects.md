---
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
tags: []
date: 2014-11-18 16:26:46 -0700
title: How to Wire up Travis-CI to your JS Projects
categories:
  - Developer
---
<p>For the past six months, AGRC has been using <a href="https://travis-ci.org">Travis CI</a> to automatically test and lint our projects each time we push a commit to the associated GitHub repository. Even though we run these tasks locally it&#39;s been helpful to have them run on Travis for when we miss things. It&#39;s also a major step towards automated deployments as well as running our tests via something like <a href="https://saucelabs.com">Sauce Labs</a> or <a href="http://www.browserstack.com/">Browser Stack</a>.</p>
<h3 id="travis-ci-org">travis-ci.org</h3>
<p>The set up is relatively simple. The first step is to sign into <a href="https://travis-ci.org">travis-ci-.org</a> with your <a href="https://github.com">GitHub</a> account. Once you&#39;re signed in you can go to your accounts page and see all of the GitHub repositories associated with your account. Switching a repository to &quot;ON&quot; tells Travis-CI to start watching any new commits that you push to that repository.</p>
<p><img src="{{ "/images/TravisSettings.png" | prepend: site.baseurl }}" alt="accounts page"></p>
<h3 id="-travis-yml">.travis.yml</h3>
<p>The next step is to let Travis-CI know what you want it to do. The first part of this step is accomplished by creating a <a href="http://docs.travis-ci.com/user/build-configuration/">.travis.yml file</a> at the root of your project. Here&#39;s an example from one of our projects:</p>

```
node_js:
  - "0.10"
before_install:
  - npm install -g grunt-cli
  - npm install -g bower
  - npm install
  - bower install
notifications:
  email:
    on_success: never
```

<p>The lines below before_install load all of the project dependencies via npm &amp; Bower. The notifications code just tells Travis to only send us emails when a build fails.</p>
<h3 id="package-json">package.json</h3>
<p>The second part to defining what you want Travis-CI to do is to add a scripts property to the your package.json file for your project. Travis-CI automatically runs npm test for NodeJS projects. Adding this new property to package.json defines this command. We use a special travis <a href="http://gruntjs.com/">GruntJS</a> task to run tasks so this is the command for us:</p>
```
"scripts": {
    "test": "grunt travis -v"
}
```
<p>The travis grunt task can contain any sub-tasks that you want. Here&#39;s what ours looks like:</p>
```js
grunt.registerTask('travis', [
    'if-missing:esri_slurp:travis',
    'jshint',
    'connect',
    'jasmine:app',
    'build-prod'
]);
```
<h3 id="build-status-badge">Build Status Badge</h3>
<p>The icing on the cake is to copy code from Travis-CI to your app&#39;s README.md to show a &quot;build:passing&quot; or &quot;build:failing&quot; (gasp!) badge. You can do this by going to your project&#39;s page on travis-ci.org and clicking on the badge in the upper right-hand corner of the page.</p>
<h3 id="github-com-integration">GitHub.com Integration</h3>
<p>After getting everything wired up you&#39;ll notice that pull requests automatically display the build status of each commit and will let you know if it is still waiting on a build to run.</p>
<p><img src="{{ "/images/TravisGithubWarning.png" | prepend: site.baseurl }}" alt="still waiting"></p>
<p><img src="{{ "/images/TravisGithubSuccess.png" | prepend: site.baseurl }}" alt="good to go"></p>
<p>If you want to see all of this in action you can checkout the <a href="https://github.com/agrc/AGRCJavaScriptProjectBoilerPlate">AGRCJavaScriptProjectBoilerPlate</a> repository.</p>
