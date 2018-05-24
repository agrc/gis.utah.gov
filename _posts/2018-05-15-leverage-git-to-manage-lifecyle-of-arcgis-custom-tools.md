---
title: "Leveraging Git and GitHub to Manage the Lifecycle of Custom ArcGIS Tools"
author:
  display_name: Greg Bunce
  email: gbunce@utah.gov
date: 2018-05-15 12:01:59
categories:
  - Developer
tags:
  - git
  - github
  - custom-tools
---

As GIS developers, we are often expected to provide the same custom tool for multiple versions of ArcGIS Desktop (or ArcGIS Pro). For example, some users are on Desktop 10.4, while others are on 10.6 (or Pro 1.4 and 2.1). Yet, each group of users requires the same custom functionality. In this common scenario, you may find yourself maintaining multiple versions of the code in order to compile the required SDK dependencies for the specific ArcGIS versions. Though, more often than not, our custom tool&mdash;regardless of the SDK version&mdash;depends on the same interfaces. Because of this, we can leverage Git and GitHub to maintain a single universal code base for all versions of tool(s). The key is to understand the APIs that you are working with.

### Know the APIs
{: #know-the-apis .text-left}
The ArcObjects Desktop APIs are relatively stable and the interfaces do not change. When additional functionality is warranted, ESRI creates a new interface with the same name but with an appended incrementing number. For example, over the years the IEditor interface has expanded to add additional functionality, yet IEditor remains unchanged. To take advantage of this new functionality, you would use IEditor2 or IEditor3 (if it's available in the SDK you're working with). The benefit of this model is that IEditor is the same whether you're using the Desktop 9.2 SDK or 10.6 SDK. In terms of managing universal source code, this is great. The downside is that it makes the ArcObjects Desktop API a bit verbose and messy to navigate with all the variations of interfaces. But, if you know the APIs for the versions you're working with, your code is extremely reusable.

Things are a bit different on the ArcGIS Pro platform. With the Pro SDK, the API can change with the release of a major version (from Pro 1.x to Pro 2.x), potentially resulting in breaking changes to your code. Though, if you're developing tools using the standard extensions and interfaces (e.g., editing, geoprocessing, etc.), I don't see this being an issue for code reusability. Again, knowing the APIs for the versions you are working with is key to allowing you to maintain universal source code. A good starting point is to always read the release notes for each [major version](http://pro.arcgis.com/en/pro-app/get-started/release-notes.htm).

### Dealing with the SDK Dependencies
{: #sdk-dependencies .text-left}
Because of Microsoft .NET specific version dependencies, we are required to build and compile our code/tools on the platform we will deploy on. As developers, we typically build a development machine (often a virtual machine) that matches the end-user's. If you are supporting tools for both ArcGIS Desktop 10.4 and 10.5, you most likely have two development machines: one with the 10.4 SDK and one with the 10.5 SDK installed. Additionally, if you're exploring your tool on 10.6, you would build a development machine and install the ArcGIS Desktop 10.6 SDK. You get the picture.

Let's assume your tool is built and successfully deployed on Desktop 10.4. Great . . . except a few users just upgraded to Desktop 10.5 and they now want your custom tool. So, you build a development environment for the 10.5 SDK. Now what? The temptation is to create a new Visual Studio Solution for the 10.5 tool by copying over the 10.4 code. You would then re-point the API library references to the 10.5 SDK, recompile it, and then finally deploy on the end-user's 10.5 machine. A little cumbersome, but somewhat manageable. Complications arise, though, when you need to make modifications. Let's say, you fix a bug or make an improvement for a user who is using the ArcGIS 10.4 version of the tool. Currently, you might log on to the 10.4 development machine and update the code, recompile it, and redeploy on the 10.4 user's machine. Done! Oh, but, wait . . . the 10.5 user wants the improved functionality too. So, you now log in to the 10.5 development machine and modify the code there as well, right? Again, tempting . . . but, stop right there. I'd like to propose a more effective approach. Here's where Git and GitHub come into play.

### Git (The Local Repository)
{: .text-left}
Git is an open source version control system that has been around since 2005. It was developed by Linus Torvalds, the creator of the Linux kernel. Git was developed to track changes in computer files, but it's typically used by developers to track changes in their source code. When you initialize Git within a local directory, that directory becomes a code repository with complete file tracking. Combine this with a remote repository, such as GitHub, and some basic Git commands to maintain your local repository, and you're suddenly maintaining a single code base for all versions of your tool.

In addition to code efficiency, Git will give you full version control and the ability to revert to a previous snapshot of your code. Another powerful feature of Git is the ability to branch your code. This is useful when exploring new functionality with your tools, but you might not want to commit these code changes to the stable version of your tool. In this situation, you would create a branch and then do your code testing on that branch. If you choose to incorporate this new functionality into your tool, you can merge this branch with your main branch. The stable, main branch is typically known as the *master* branch. 

### GitHub (The Remote Repository)
{: .text-left}
Git will help you manage your local repository, and GitHub will assist with your remote (i.e., cloud-based) repository. The benefit of GitHub is that it allows others to discover and contribute to your code, while also giving you the ability to move your code between development environments (i.e., SDK versions), and providing the comfort of knowing your code is safely backed up in the cloud.

GitHub also makes working with others and collaborating on projects much easier. The GitHub repository acts as a central repository where all transactions are moderated. This central repository approach allows all developers to be working with the latest version of the code. You'll want to read more about Git downstream and upstream before you implement a collaborative workflow.

### Putting It All Together
{: .text-left}
So, let's see how this looks in action. Assuming you have a development machine built with the appropriate SDK, the only additional prerequisites are that you:
1. [install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your development machine, and 
2. have a [GitHub](https://github.com/) account. 
The free account is all you need if you're okay with public-facing code.

The idea is to use Git and GitHub to manage your code in a way that allows you to maintain a single code base for all versions of your tool. But even with a single code base, you'll still need to build separate development machines that correspond to the SDK versions you are supporting. I recommend building and then making all code modifications on the development machine with the lowest version you are supporting. In my case, that's ArcGIS Desktop 10.4, so that's where I do all my development and code modifications. When this code is stable, you *push* the changes/modifications to the remote repository (GitHub). Essentially, in this scenario, the remote repository contains the stable version of the code and then also acts as the messenger to the other development machines. You can then *pull* the changes from the remote repository to your development machine that is supporting the higher version (in my case, ArcGIS Desktop 10.5). We'll talk more about push and pull in the [Git Cheatsheet](#git-cheatsheet) section. 

In my dev environment, this workflow works because I'm building the tools on the lowest version of the SDK that I'm supporting, so I can rely on the API libraries being present in the higher versions of the SDK (see the [Know the APIs](#know-the-apis) section for more info). As far as getting around the version-specific SDK dependencies (see the [Dealing with SDK Dependencies](#sdk-dependencies) section for more info), you will want to set the specific version to "false" for all your ESRI reference libraries (in Visual Studio). This will tell the .NET compiler, when building the solution, that the reference libraries are relative to the development machine (and are not hard coded to a specific version-based directory). 

A final setup note for this workflow is that you will want the local repository (i.e., the repository managed by Git) on all of your development machines to be pointing to the same remote repository (i.e., your GitHub repository for this project). This is how you move your local changes around and how you keep all development environments in sync with the master/stable version. The easiest way to set this up is to *clone* the GitHub repository onto the development machines. For example, if I want to support my existing ArcGIS tools on Desktop 10.6, I'll build a 10.6-specific development machine and then clone the corresponding GitHub repository that I'm maintaining on the 10.4 machine. This brings down the remote repository code (in its current state) to my local machine. If I'm still supporting 10.4, then I'll continue to make all code modifications there and then pull the changes to the 10.5 and 10.6 machines as needed. This is all done via common Git commands (see the [Git Cheatsheet](#git-cheatsheet)section). 

### The End Is Near
{: .text-left}
Congratulations, you've made it through an insanely long blog post! If nothing else, I hope that you were inspired to learn more about Git and GitHub and how they can enhance your development workflows. I guarantee that the time you spend learning it will be time well spent. Over the lifecycle of your custom ArcGIS tools, it will not only save you lots of time, but also tons of aggravation, when making code modifications or upgrading to newer SDK versions.

Lastly, if you're not ready to dive in with your live code, then I would highly encourage you to play around with test data. Keep it simple at first. Create a local repository containing a few text files and then create a GitHub repo to push and pull changes back and forth. Watch the changes as they happen live in the local directory and the remote repository. This will get you comfortable and give you some confidence. Giddyup!

### Git Cheatsheet
{: #git-cheatsheet .text-left}
You will need to know a few common Git commands to manage your versions and keep all your code in sync. There are many great [Git tutorials](https://git-scm.com/book/en/v2) and references available online, but here I'll highlight the basic commands that you will need in order to adopt this workflow. 

Git commands are executed using the command line. On Windows, I recommend Git Bash and if you've installed Git for Windows it should have been included. You can also use Powershell or the Command Prompt (or Terminal on Mac). 

- Change Directory
    - While changing a directory is not a Git operation, I mention it here because it is essential when working with Git. You will need to enter your working, local directory via the *cd* command.
      - `$ cd <your_local_git_directory>`

- Initialize a Local Repository                      
    - The [*init* command](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) gives Git permission to manage your local working directory with version control and to track all changes that occur. Essentially, this is what gets Git up and running. Note: If you've cloned a remote repository (via a GitHub repo URL) using Git, then you won't need to initialize your local repository&mdash;it is automatically handled within the *clone* command.
      - `$ git init`     

- Clone an Existing GitHub Repository
    - [Cloning](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) allows you to get a copy of an existing repository. 
    - Using the Command Line:  
      - If you clone a repository by way of the command line, then the remote repository is added for you explicitly.
        - `$ git clone https://github.com/<your_name/repo_name>`
    - Using GitHub:
      - You can also clone by way of github.com/your_name/repo_name, where you essentially download the repository to your local machine. You would then need to initialize the working directory and then set up the remote repository via a github repo url.
        - `$ git init`
        - `$ git remote add origin https://github.com/<your_name/repo_name>`

- Check Remote
    - The remote repository comes into play when you use commands such as push and pull.
    - Use the *remote* command to check whether your remote repository is set up correctly. Adding "-v" flag will show you the URLs and the shorthand for the remote.
      - `$ git remote -v`

- Create a Branch
    - Each repository, by default, contains a master branch. I think of this as the "parent" branch. When developing tools, I find it useful to create [branches](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell). The idea is that you keep your master clean and then merge the "child" branch back to master when you are certain you want to incorporate that functionality. I do all modifications on a working branch and then merge the changes back to master after it's stable and I've pulled all the changes to my other development machines (see Push and Pull sections below).   
    - Create a new branch
      - `$ git branch <branch_name>`
    - Check out a branch (you have to manually switch to a branch)
      - `$ git checkout <branch_name>`
    - Check the current branch (I like to verify the branch I am using)
      - `$ git log --oneline --decorate`
    - See all existing branches
      - `$ git branch`
    - Merge your branch back to the master. First, I like to merge the master into my working branch in case there were any changes on the master. Then, you'll need to switch back to the master to pull the working branch changes.
      - `$ git checkout master`
      - `$ git merge <branch_name>`

- Recording and Tracking Local Changes
    - You will want to [commit](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository) the changes that you want to keep. When you push changes to remote, only the local changes that were committed will be pushed. You must add the file to the staging area before it can be committed. You also use *add* to begin tracking new files.
      - `$ git add -A`
      - `$ git commit -m 'your commit message here'`

- Checking the Status of your Repository
    - It's a good idea to check the status of your staged and unstaged commits before you push to the remote. I find *status*, *log*, and *diff* helpful before I do a push.
    - The status command is more high-level and will show you what files were changed.
      - `$ git status`
    - The diff command shows you the exact lines added and removed.
      - `$ git diff`
    - The log command shows you the commit logs. You can limit the log report by providing an optional number after "log."
      - `$ git log -5`

- Push to the Remote
    - The push command simply takes all the local changes you've committed, and pushe them to the remote (i.e., your GitHub repository). In my workflow, I push to GitHub after I've successfully deployed my lowest version. For me that means the code is stable and it is now ready to be pulled onto the development machines with the higher versions.   
      - `$ git push <remote> <branch>`

- Pull from the Remote
    - A pull is a shortcut command for fetch and then merge. Essentially, the pull command pulls down all the data from the remote repository that you don't have locally. For my workflow, this is how I update the code on the other development machines. After I have pulled the remote code to all my development machines, I then merge my working branch back to the master branch. That tells me that all machines are in sync and that I have no working branches.
      - `$ git pull`
      - `$ git remote show origin`

### Post Note
{: .text-left}
If your ArcGIS Desktop custom tools are based on the Extending ArcObjects model (and not the Add-Ins model), you're most likely using .msi install files to deploy your tools. If so, email me and we can chat about how I maintain these install packages in this workflow. The Add-In model is a bit simpler, as you don't need to generate install packages. ArcGIS Pro only supports the Add-In model, but Desktop supports both models.
