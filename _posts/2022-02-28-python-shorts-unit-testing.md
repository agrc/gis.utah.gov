---
title: "Python Shorts: The Benefits of Unit Testing"
author:
  display_name: Jake Adams
  email: jdadams@utah.gov
date: 2021-02-28 11:00:00
categories:
  - Featured
  - Developer
tags:
  - python
---

In the realm of programming, "unit testing" is an automated way of testing small, individual "units" of your code to ensure that when given a specific set of inputs they return a specific set of outputs in the way you expected them to.

If you've never delved into unit testing, you probably won't realize all the ways it can improve your scripts and make you a more efficient programmer in the process.

Here are the six benefits I've discovered since being introduced to unit testing by the other UGRC developers a year and a half ago.

## 1: You Know Your Logic Is Correct

This is the obvious benefit of unit testing. If you write the right tests, you know that each tested part of your code works the way it should. This gives you peace of mind (and job security), especially when whatever your code spits out is being presented to the Mayor.

## 2: You Understand Your Code Better

Writing tests is all about verifying your assumptions of what your code does at a very detailed level. Often, when we're working with new languages or new libraries, we tend to "program by accident." We take example code from the docs (or Stack Overflow) and make it fit our problem. We don't necessarily know why it works, just that it does (maybe).

Creating unit tests forces you to think about every step, especially if you have to mock out results from other, intermediate functions. Instead of copying a few lines and trial-and-erroring your way through, you have to really learn what they do.

## 3: You Catch Your Coding Errors Faster

Because you understand your code better, you catch errors faster. Sometimes, this can happen even before you run your tests. As you build a test, thinking about what the input and output data should look like, you realize that your function doesn't do exactly what you thought it did, or outputs data in a different structure than you thought.

Obviously, running a test and not getting the expected answer can also reveal errors. Sometimes they're errors in your function, other times they're errors in what your function takes in and spits out. These other errors can help reveal problems in your overall architecture.

## 4: You're (mostly) Protected From Breaking Your Code When You Update It

Have you ever gone back to your code a year later to make a small change and suddenly it doesn't work anymore? Unit testing (and it's cousin, integration testing) can help you ensure that your code is still giving the right outputs after you make changes.

This can be especially useful when you're asked to update code someone else wrote (or that you wrote three years ago!). Once you've got some tests written against the original code, you can now make changes without worrying that you're missing some deviously subtle edge case.

## 5: You Write More Self-Contained, "Atomic" Code

One of the guiding principles for writing functions and classes is that they do one thing and one thing only. In scholarly circles, this is known as the [single responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) ([Sandi Metz](https://youtu.be/npOGOmkxuio?t=478) has some rules that will really push you).

In practice, its very easy for functions to grow. I often start programing with a broad view of how to solve a problem, maybe three or four general steps. Each step becomes its own function. Then, each function grows as I figure out how to solve the smaller problems within that step.

The most useful (and easiest to write) unit tests only test one thing, one solution to a problem, at a time. Does that complex logical expression work the way I think it does? Does my translation of math to code work the way it should?

Because each test requires calling a function, thinking about making a solution easy to test also means wrapping that solution in its own, small, self-contained function. Your functions become simpler and more "atomic" (as in being broken down to the most basic level possible, not as in big kabooms).

## 6: You Write More Flexible, De-Coupled Code

This next benefit follows on from writing smaller, more self-contained functions/methods.

"[Coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming))" in programming refers to code that explicitly or implicitly relies on variables and objects from other parts of your program. Highly coupled code is fragile code: what seems to be a simple change to one part of the program could have hidden side effects down the line that will have you tearing your hair out trying to debug.

As you get used to writing unit tests, you're constantly thinking "what data will I need to have to perform this one operation?" You're always identifying what data structures you'll have to create and which objects or methods you'll need to mock out or patch.

Thus, as you're writing, you're aware of just how dependent the current function is on other functions and classes. You can refactor your design now, instead of later when that "one small change that will only take 15 minutes" has introduced bugs that you've spent the last two hours debugging.
