---
layout: post
status: publish
published: true
title: 'The Evolution of a  Python Script'
author:
  display_name: Steve Gourley and Scott Davis
  email: sgourley@utah.gov
date: 2017-11-22 01:48:13
categories:

tags:
- python
- code

---

Python is a very approachable programming language and as is widely adopted. Scripting in python is quick and powerful - Create a file, type some code, and a repeatable script is produced. There is a large audience that could benefit from your script, considering python is installed on most computers, most of your coworkers and colleagues could benefit from your code. Continue reading if you would like to learn ways to enhance your scripts to be simple to use and reuse, share, and to be more flexible. This post will introduce you to different solutions we have identified to solve these issues.

Most simple, basic, beginner
Level 1 - Command Line without Parameters

`python script.py`

When starting to script, many programmers will hard code values directly into a script. It is their script and will only run on their machine with their file system. This is not wrong - there are plenty of circumstances where this is a fine practice. For example, when the script does not interact with other systems (file system, database, web service) and will run the same on another computer. An interactive calculator would be a great example. 

It has been our experience that any script written and intended for personal use, or as a proof of concept, will most likely be found so useful that your friends or coworkers will want to use it and it will be running in production in less than a week. 

It is our recommendation to be in the habit of executing python scripts from the command line. Executing a script from the command line provides a few key benefits to double-click executing a python.py file. Most applications that will execute the python file will close when completed. Users will not be able to inspect any output generated during execution or error messages. This can leave users wondering what happened and if the script completed successfully. Use the command line and remove all of the anti-pattern `raw_input(‘press enter to close’)` bits!


I think it is worth mentioning at some point
[Do we want to talk about being aware of which version of python you are running? 64 vs 32 bit?]









Level 2 - Command Line with Parameters

`python script.py  param1 param2`

A simple enhancement to make the scripts you write more flexible is to allow users to pass parameters to the script. These parameter values could be any string value. Hard coded and generated output paths, analytical configs, and database connections are great candidates to replace with parameters. Parameters are passed to a script via the command line and are separated by a space.

`python script.py  param1 param2 …`

Accessing the parameter values within your script is done via the [sys module](https://docs.python.org/2/library/sys.html).

```
import sys
print(‘File executed: ‘ + sys.argv[0])
print(‘Parameter 1: ‘ + sys.argv[1])
print(‘Parameter 2: ‘ + sys.argv[2])

# output:
# File executed: script.py
# Parameter 1: param1
# Parameter 2: param2
```

As you can see, python makes it very simple to pass values from the command line to the script. The script is able to act on different resources and react differently depending on the parameter values. The connection between the way the authors computer is configured is no longer relevant to run the script successfully. Users are not required to edit the source code to change the values of what are now the parameters. This is another reason to execute scripts from the command line since it is not possible to pass parameters from a double-click file execution. 

While passing parameters in this fashion is a big improvement over no parameters, scripts with parameters require authors to document how the script is to be used. Without a readme or training, a new user will not know to pass parameters nor what values to use. Scripts with more than two or three inputs can quickly become confusing to a user. Trying to remember the order or parameters can be hard to remember.




Level 3 - using a 3rd party cli module 

Make the tedious stuff easier. Highlight docopt because 
it creates a documented cli tool
Allows for easily adding a collection of different but related methods/actions. The 2nd option was sort of a one method tool with parameters for augmenting behavior. 
Validates user input/signature


Level 4 - Stand-alone Command Line Interface (CLI)

Building your script into a fully-fledged CLI tool can have many advantages. It allows you to have more control over how your program is distributed and installed. There is a more formal declaration of it’s dependencies. Furthermore you can allow your users to invoke your program from any location on their computer by creating a global executable.

Levels of running python via command line:
python myScript.py - hard coded parameters
python myScript.py param1 param2
myScript param1 param2
Esri Python Toolbox?

Keeping secrets in environment variables


PIP/conda for both dependency management and distribution

Examples:
forklift
honeycomb
ugs
backseat-driver
