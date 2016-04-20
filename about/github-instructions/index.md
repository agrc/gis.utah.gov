---
layout: post
status: publish
published: true
title: 'Instructions on using GitHub to Contribute to gis.utah.gov'
author:
  display_name: Jessie Pechmann
  email: jpechmann@utah.gov
date: 2016-04-19 16:11:21
categories: Featured
tags: how-to
---

**Method 1: Edit an existing page from website**

1. Create a free [GitHub account](https://github.com/join), if you do not already have one.
* Click ‘ Edit this page on GitHub ’ in the bottom right of any webpage on gis.utah.gov.  ![Edit this page on GitHub]({{ "/images/editgithub.png" | prepend: site.baseurl }})  
* You will be brought to a page where you can propose a file change to the webpage.
  * By proposing a file change using this method, GitHub will automatically create your own local version of the AGRC Website, or a “fork”, in your GitHub account. 
* Edit file in GitHub window. 
  * Files are either in html or markdown. 
* When finished with edit, please write a summary of what was edited, added, or deleted under Propose file change.
* Click the Propose file change green button. ![Propose Edit]({{ "/images/ProposeFileChange_Button.png" | prepend: site.baseurl }})  
* You will be brought to a new screen. Click the Create pull request green button. ![Create Pull Request]({{ "/images/CreatePullRequest_Button.png" | prepend: site.baseurl }})  
* If you only have one edit, the change summary will be autocompleted. Otherwise, write a summary of all edits.
* Click the Create pull request green button. ![Create Pull Request]({{ "/images/CreatePullRequest_Button.png" | prepend: site.baseurl }})
* Congratulations! You contributed!

**Method 2: Editing a page from within the AGRC Website GitHub repository** 

1. Create a free [GitHub account](https://github.com/join), if you do not already have one.
* Go to the AGRC website repository on GitHub: https://github.com/agrc/agrc.github.io.
* You’ll need to create your own “fork”, or version, of the website repository. To do this, click ![Fork]({{ "/images/GitHubFork_Button.png" | prepend: site.baseurl }}) in the upper right. Then, click your GitHub username.
* Migrate to the page you wish to edit.
  * Blogposts are in the _posts folder.
  * Data pages are in the data folder. 
* Click the pencil icon in the upper right to edit the webpage.
  *Files are either in html or markdown. 
* When finished with edit, please write a summary of what was edited, added, or deleted under Commit changes.
* Click the Commit changes green button.
* Repeat steps 4-6 until you are done with your edits for the time being.
* Create a pull request, to request the edits be pulled to the master.
![Create Pull Request From Repository]({{ "/images/images/PullRequest_screenshot.png" | prepend: site.baseurl }})
  1. Click the Pull Requests tab under username/agrc.github.io in the upper left.
  * Click the New pull request green button.
  * Click the Create pull request green button. ![Create Pull Request From Repository]({{ "/images/images/Craetepullrequestsimple.png" | prepend: site.baseurl }})
  * Write a summary of your edits.
  * Click the Create pull request green button.![Create Pull Request From Repository]({{ "/images/images/Craetepullrequestsimple.png" | prepend: site.baseurl }})
* Congratulations! You contributed!

**_Important note if you return to make edits at a later date:_**

1. In order to not create conflicts between website versions, you need to delete your repository and then create a new fork.
*  Migrate to your repository: https://github.com/username/agrc.github.io
* Click the Settings tab for your repository. 
* Scroll to the Danger Zone at the bottom. Click the Delete this repository button. ![Danger Zone]({{ "/images/DangerZone.png" | prepend: site.baseurl }})
* Now you are free to go create a new fork and keep on editing! 
