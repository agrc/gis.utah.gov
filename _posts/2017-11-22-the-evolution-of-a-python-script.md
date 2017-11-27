---
layout: post
status: publish
published: true
title: 'The Evolution of a Python Script'
author:
  display_name: Steve Gourley and Scott Davis
  email: sgourley@utah.gov
date: 2017-11-22 01:48:13
categories:
- Developer
tags:
- python
- code
---

Python is a very approachable programming language and scripting in python is quick and powerful - Create a file, type some code, and a repeatable script is produced. Python is installed on most computers so your coworkers and colleagues could benefit from your code. If python is not installed, it is pretty [easy to add](https://www.python.org/downloads/).

_Continue reading if you would like to learn ways to enhance your scripts to be simple to use and reuse, share, and to be more flexible._

## A Script - Command Line without Parameters

`python script.py`

When starting to script, many programmers will hard code values directly into a script. It is their script and will only run on their machine with their file system. **This is not wrong**. There are _plenty_ of circumstances where this is a fine practice. For example, when the script does not interact with other systems (file system, database, web service) and will run the same on another computer without modification. An interactive calculator would be a great example.

> It has been our experience that any script written and intended for personal use, or as a proof of concept, will most likely be found useful enough that your friends or coworkers will want to use it and it will be running in production in less than a week™

It is our recommendation to be in the habit of executing python scripts from the command line. Executing a script from the command line provides a few key benefits to double-click executing a python.py file. Most applications that will execute the python file will close when completed. Users will not be able to inspect the output generated during execution or error messages. This can leave users wondering what happened and if the script completed successfully. Use the command line and remove all of the anti-pattern `raw_input('press enter to close')` bits!

```py
#: this will never work on someone elses machine
#: if I ever want to run this on 2018 data or version 2, I have to edit the source
do_something_to('c:\\sgourley\\projects\\test_data\\2017\\version1\\data.gdb')
```

## A Console Application - Command Line with Parameters

`python script.py param1 param2`

A simple enhancement to make the scripts you write more flexible is to allow users to pass parameters to the script. These parameter values can be any string value. Parameters are passed to a script via the command line and are separated by a space. Hard coded and generated output file paths, configurations, and database connections are great candidates to be replace with parameters.

Accessing the parameter values within your script is done via the python standard library [sys module](https://docs.python.org/2/library/sys.html).

```py
import sys

print('File executed: {}'.format(sys.argv[0]))
print('Parameter 1: {}'.format(sys.argv[1]))
print('Parameter 2: {}'.format(sys.argv[2]))

#: react to the inputs
if sys.argv[1] and sys.argv[1].lower() == 'yes':
  #: the filesystem dependency is now removed
  return do_something_to(sys.argv[2])

do_something_else(sys.argv[2])

# output:
# File executed: script.py
# Parameter 1: param1
# Parameter 2: param2
```

As you can see, python makes it very simple to pass values from the command line to the script. The script is able to act on different resources and react to the parameter values. The dependency between the author's computer configuration is no longer relevant to run the script successfully. Users are not required to edit the source code to change the values of what are now the parameters.

_This is another reason to execute scripts from the command line since it is not possible to pass parameters from the double-click file execution._

While passing parameters in this fashion is a big improvement over no parameters, scripts with parameters require authors to document how the script is to be used. Without a readme or some instructions, a new user will not know to pass parameters nor what values to use. Scripts with more than two or three inputs can quickly become confusing to a user. Trying to remember the order of parameters can also be hard to remember.

A semi acceptable fix to this problem would be to inspect the parameters sent to the script, if any, and validate them. If they are invalid, return a message to the user that the parameters were not valid and provide an example of how the script should be used. **Congratulations, your script has evolved into a console application.**

## A Better Console Application - Using a 3rd Party CLI Module

`python geocode.py milepost 300 15N`

The python community has created many useful modules that we all can `pip` or `conda` install and start using. Command line interface modules are no different. There are a [lot](https://pypi.python.org/pypi/clint/) of [command](http://click.pocoo.org/) [line](https://pypi.python.org/pypi/plac) [interface](http://docs.openstack.org/developer/cliff/) [modules](http://builtoncement.com/) because there are a lot of opinions on how they should work.

AGRC has been using [docopt](http://docopt.org/) and really enjoying it. It is a lightweight module that uses POSIX style comments to define how your console application can be used. You get a CLI and documentation!

```py
'''
Milepost geocoding!

Usage:
  geocode milepost (<milepost> <route>)
'''

from docopt import docopt


if __name__ == '__main__':
    arguments = docopt(__doc__)
```

The above documentation can be parsed by docopt to help a developer create functionality for the milepost command. If a user were to type

```
python geocode.py 123 15N
```

docopt would parse the input, realize it **does not** match any documented commands, and return the available commands/syntax/documentation to the user. The user will realize that their syntax is missing the `milepost` command and correct their mistake. This is the functionality we suggested above but now the 3rd party module is taking care of all of the boring stuff.

docopt has a lot of useful features. For instance, console application developers are able to create subcommands.

```py
'''
Milepost geocoding!

Usage:
  geocode milepost (<milepost> <route>)
  geocode railroad (<milepost> <line>)
  geocode address (<zone> <street>...) [--address-points-only]
'''
```

**That one script now has 3 sub commands and is 3x more useful.**

Given the input
```
geocode address 84109 326 east south temple
```
docopt will generate a python dictionary from the inputs.
```py
# output
{
  "--address-points-only": false,
  "<line>": null,
  "<milepost>": null,
  "<route>": null,
  "<street>": [
    "326",
    "east",
    "south",
    "temple"
  ],
  "<zone>": "84109",
  "address": true,
  "milepost": false,
  "railroad": false
}
```

A developer can inspect what command was requested by checking the boolean value for the command name in the dictionary. `address` is `True` so know we know to look for the street and zone values. The street can be rebuilt by joining the contents of the `<street>` array with a space and the zone can be found in `<zone>`. The geocoding will use centerlines as well as address points because `--address-points-only` is `False`.

Hopefully, you are beginning to see the power and flexibility that can be achieved with a command line application. Using doctopt's powerful syntax, a developer can help the users of their applications discover everything you have made available. It will help users choose all of the options that are applicable and prompt them with the proper syntax when a mistake is made.

I encourage you to evolve some of your scripts into console applications. Maybe start the next python file you create with `from doctopt import docopt`. Please read about what docopt can do when designing your next console application. You can even [design the CLI in your browser](http://try.docopt.org/).
