---
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
tags: []
date: 2015-04-06 08:32:18 -0600
title: 'Windows Scheduler: Get Your Priorities Straight'
categories:
  - Developer
---
<p>Here at AGRC we have a variety of tasks (usually python scripts) that need to be run on a schedule. These are usually workflows that scrape and ETL data for web applications. Currently we use <a href="http://windows.microsoft.com/en-us/windows/schedule-task">Windows Scheduler</a> to run these scripts. Recently I've had problems with scripts taking way too long to complete. After a bit of digging I discovered that, by default, Windows Scheduler assigns a process priority of "Below Normal" to all tasks. The pain point is that they provide no UI to change this setting. After a bit of digging I found the following steps to work around this problem by hand editing the xml export of a task.</p>
<p>1. Right-click on the task and export it as an xml file.<br />
2. Open the file in a text editor and search for the "Priority" element.<br />
3. Change the value of the this element to the desired priority level. See <a href="https://msdn.microsoft.com/en-us/library/aa383512.aspx">this page</a> for a list of possible values. Usually 6 is what you want.<br />
4. Save your changes and close the xml file.<br />
5. Delete the original task and re-import the modified xml file as a new task.</p>
<p><a href="https://bdbits.wordpress.com/2010/04/29/setting-a-scheduled-task-process-priority/">More details</a></p>
