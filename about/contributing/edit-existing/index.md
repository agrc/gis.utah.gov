---
title: How to Edit Existing Content on gis.utah.gov
author:
  display_name: JP
  email: agrc@utah.gov
tags: []
date: 2016-04-19 16:11:21
categories:
  - Tutorial
---

**Method 1: Edit an existing page from website**

1. Create a free [GitHub account](https://github.com/join), if you do not already have one.
1. Click `Edit this page on GitHub` in the bottom right of any webpage on gis.utah.gov.  
![Edit this page on GitHub]({{ "images/editgithub.png" | prepend: site.baseurl }})
1. You will be brought to a page where you can propose a file change to the webpage.
    1. By proposing a file change using this method, GitHub will automatically create your own local version of the AGRC Website, or a “fork”, in your GitHub account.
    1. The fork will contain a branch called `Patch-1`.
1. Edit the file in GitHub window.
    1. Files are either in html or markdown. Check the file extension.
1. When finished with the edits, please write a summary of what was edited, added, or deleted under Propose file change.
1. Click the Propose file change green button.  
![Propose Edit]({{ "images/ProposeFileChange_Button.png" | prepend: site.baseurl }})
1. You will be brought to a new screen. Click the Create pull request green button.  
![Create Pull Request]({{ "images/CreatePullRequest_Button.png" | prepend: site.baseurl }})
1. If you only have one edit, the change summary will be autocompleted. Otherwise, write a summary of all edits.
1. Click the Create pull request green button.  
![Create Pull Request]({{ "images/CreatePullRequest_Button.png" | prepend: site.baseurl }})
1. Congratulations! You contributed!

**Method 2: Editing a page from within the AGRC Website GitHub repository**

1. Create a free [GitHub account](https://github.com/join), if you do not already have one.
1. Go to the AGRC website repository on GitHub: [{{ site.github.repository_url }}]({{ site.github.repository_url }}).
1. You’ll need to create your own “fork”, or version, of the website repository. To do this, click ![Fork]({{ "images/GitHubFork_Button.png" | prepend: site.baseurl }}) in the upper right. Then, click your GitHub username.
1. Navigate to the page you wish to edit.
    1. Blogposts are in the `_posts` folder.
    1. Data pages are in the `data` folder.
1. Click the pencil icon in the upper right to edit the webpage.
    1. Files are either in html or markdown.
1. When finished with edit, please write a summary of what was edited, added, or deleted under Commit changes.
1. Click the Commit changes green button.
1. Repeat steps 4-6 until you are done with your edits for the time being.
1. Create a pull request, to request the edits be pulled to the master.  
![Create Pull Request From Repository]({{ "images/PullRequest_screenshot.png" | prepend: site.baseurl }})
    1. Click the Pull Requests tab under username/agrc.github.io in the upper left.
    1. Click the New pull request green button.
    1. Click the Create pull request green button.  
    ![Create Pull Request From Repository]({{ "images/Createpullrequestsimple.png" | prepend: site.baseurl }})
    1. Write a summary of your edits.
    1. Click the Create pull request green button.  
    ![Create Pull Request From Repository]({{ "images/Createpullrequestsimple.png" | prepend: site.baseurl }})
1. Congratulations! You contributed!

**_Important note if you return to make edits at a later date:_**

1. In order to not create conflicts between website versions, you need to delete your repository and then create a new fork.
1. Migrate to your repository: https://github.com/username/{{ site.github.repository_name }}
1. Click the Settings tab for your repository.
1. Scroll to the Danger Zone at the bottom. Click the Delete this repository button. ![Danger Zone]({{ "images/DangerZone.png" | prepend: site.baseurl }})
1. Now you are free to go create a new fork and keep on editing!
