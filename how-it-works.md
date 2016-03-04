# Collaborating on gis.utah.gov

#### 2 Scenarios

1. You are browsing the site and you see a tpyo, outdated information or a missing image or link, etc...
- You have anything more complicated or you want a preview of the changes.


#### Way #1
Scroll to the bottom of the page and click :point_down:

![image](https://cloud.githubusercontent.com/assets/325813/13502906/29235a0c-e12a-11e5-8c49-d16f7523bb04.png)

Or, if you are at the [repository url](https://github.com/agrc/website) and you know where 
[the page](https://github.com/agrc/website/blob/gh-pages/_posts/2011-11-16-gis-day-november-16-2011.html) is 
that has the issue, you can click the :pencil: edit button.

![image](https://cloud.githubusercontent.com/assets/325813/13503223/81c02ed2-e12b-11e5-9c09-12649a4129cf.png)

Either way you will end up :point_down: here.

Github.com will fork the website for you. 
>_Fork is a fancy word for copying and pasting the project from agrc's folder to your folder. For all the **GIS-P's**
in the room, this is like creating a new version in a geodatabase._

Github.com will present you with a warning that looks like this. It is explaining what is happening.

![image](https://cloud.githubusercontent.com/assets/325813/13502849/eb4d7366-e129-11e5-9cc9-775d0ab4d5d3.png)  

Then you will be able to fix the mistake(s) and **Propose the File Change** which is called a Pull Request or PR.

![image](https://cloud.githubusercontent.com/assets/325813/13503477/cf27a794-e12c-11e5-9f14-6ffbadd40507.png)

Think of it like an email.  The top box is the **subject** and the next is the **body**.

Keep the subject short (50 chars or less). Put everything else in the body. 

What you write will end up in the history **forever**.

![image](https://cloud.githubusercontent.com/assets/325813/13503654/d7fff74e-e12d-11e5-8505-2ef6ef4b1262.png)

![image](https://cloud.githubusercontent.com/assets/325813/13503694/1795d374-e12e-11e5-9e86-67758a4906c4.png)

> _For the GISP's, creating a **Pull Request** is like taking all of your edits in a version and sending them 
to someone to review. Once they have looked over the edits and are happy with everything they will Reconcile and Post. 
But in git land we call that **Merging**._

Once this has been sent, a [conversation](https://github.com/agrc/website/pull/16) can begin. You also have 
a [copy of the project](https://github.com/BGranberg/website/tree/patch-3) on your page ![image](https://cloud.githubusercontent.com/assets/325813/13504022/cafba0f0-e12f-11e5-8053-9881f3eac6cf.png)
and you can add subsequent changes, or commits, to the same location. You do not need to create a new pull request.

![image](https://cloud.githubusercontent.com/assets/325813/13504055/f6d5ebea-e12f-11e5-94a7-1dae7fd3be52.png)

You can then go to the Danger Zone and delete the repository.

> _The danger zone is in your user page, then repository's tab, click on the repository, then settings and scroll down._

![image](https://cloud.githubusercontent.com/assets/325813/13504118/4cf4c74e-e130-11e5-967c-57bdc662bfec.png)


#### Way 2

Go the the [website repository](http://github.com/agrc/website) and click fork.

![image](https://cloud.githubusercontent.com/assets/325813/13504182/95200fec-e130-11e5-82d9-92a794a16fa3.png)

The `gh-pages` branch is the branch that github uses to build the website so we will edit that branch. 

![image](https://cloud.githubusercontent.com/assets/325813/13504381/6ca6f002-e131-11e5-946c-c05739df6d69.png)

**Make sure you are not behind on commits.** If you are, delete the repository, and fork it again to get the newest
changes.

On the settings page for your fork of the website, you will see this green box with a link :point_down: to the website
but you'll notice the url has your name in it. I built [this little bookmarklet](https://gist.github.com/steveoh/c0b5e9c2a859d455089f)
that will switch your page between github.io and the repository page so you don't have to remember how to do it.

_the website doesn't get built until you push a new change to the `gh-pages` branch. If this setting is not green,
then your website has not been built yet._

![image](https://cloud.githubusercontent.com/assets/325813/13502576/c399e0a8-e128-11e5-81c7-1dd5f04b6b2b.png)

Push your commits to the gh-pages branch and wait a few minutes. You should see your changes. Some links **will** be broken.

> You could change the `_config.yml` if this _really_ bothers you. But **do not include** that file in your pull request or
the website will break. So undo that change before you send your PR.

On your repository page, you will now see that you are ahead and you have the opportunity to create a pull request.

![image](https://cloud.githubusercontent.com/assets/325813/13504623/7c2dcea0-e132-11e5-9628-e0b7d69d92f5.png)
