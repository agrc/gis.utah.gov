---
title: "Python Shorts: Flattening Arrow Code"
author:
  display_name: Jake Adams
  email: jdadams@utah.gov
date: 2021-12-28 17:00:00
categories:
  - Featured
  - Developer
tags:
  - python
---

"Arrow Code" refers to a series of nested `if` statements that increase your indentation level at each statement. While they arise naturally from the way our brains work through problems — "if this is true, and if that is true, and if this final bit is true, then finally do this" — they make our code less readable. Readability counts in programming—code is read more than it's written, and code that is easy to read and understand is code that is easier to modify or extend without errors.

Today I stumbled upon a great example of how to flatten arrow code while I was working on a task that I want to share with you. This uses Jeff Atwood's [3rd and 4th flattening tactics](https://blog.codinghorror.com/flattening-arrow-code/).

## The Task
{: .text-left}

I needed to determine if something was open based on three checks on it's value:

1. It had to exist
1. It couldn't be `'Closed'`
1. It couldn't have a certain string (`'Provider'`) in its value

## Full Arrow
{: .text-left}

The full arrow approach would be to make each one of these its own `if` statement:

```python
site_open = False
if value:
    if value.casefold() != 'closed':
        if 'provider' not in value.casefold():
            site_open = True
```

## Baby Steps
{: .text-left}

Admittedly, that arrow is contrived for the sake of physically showing the arrow. It's pretty easy to realize that we can combine the `if`'s onto one line:

```python
site_open = False
if value and value.casefold() != 'closed' and 'provider' not in value.casefold():
    site_open = True
```

However, I would argue this is still not super readable. It still scrolls horizontally, and becomes a little hairy to maintain if you get more and more conditions. While it's not physically an arrow, the logical structure is still the same. In my prototyping today this was the conditional to a dictionary comprehension, which made it even more dense and difficult to quickly understand.

If you've not seen it before (it was new to me when I first saw it), `casefold()` is a more internationalization-safe form of making a string lower case. Not strictly necessary here, but a habit I've gotten into.

## Flattening
{: .text-left}

![Put that flea in a box]({% link images/flea.jpg %})
{: .flex .flex--center}

So how do we fix it?

```python
def is_open(value):
    if not value:
        return False
    if value.casefold() == 'closed':
        return False
    if 'provider' in value.casefold():
        return False
    return True
```

First, I **extract this logic into its own function**. This not only allows us to use `return` to great effect, but also helps isolate this bit of potentially non-trivial logic for testing (ideally, with it's own series of unit tests).

Unit tests are particularly helpful with these kind of complicated conditionals. They both give you another chance to make sure your logic is correct and, if you need to expend the conditional, they give you the confidence that your earlier test conditions still perform the way they should.

Next, I invert the checks to **use as many positive checks as possible**. Instead of one positive check (`if value`) and two negative checks, we now have one negative and two positives. This gets rid of the potential logical twistings of `!=` and `not in`, making it easier to understand what the `if` statement is testing.

The `if not value` existence check is common enough that it's easily understood and using this inverted form doesn't hurt readability too much. In a more complicated program we could be enforcing the idea that `value` should never be empty (`None`, `''`, etc), so this could also be a gateway check that raises an error instead.

Finally, I **`return` from the function as soon as possible** instead of chaining the comparisons together or using an `if/elif/else` switch. Because any one of our checks indicates that the site is not open, I can bomb out as soon as one fails. Otherwise, if it passes all the tests, I know that it's open so I can just `return True`.

This pattern of returning early may not seem as readable to you if you've not encountered it before or are used to just a single return at the end of a function. But, once you're familiar with it, the pattern becomes easy to pick out and improves code comprehension. We now gain the advantage of being able to easily add new conditions without risking missing an `and` or confusing it with an `or`.

## Hammers Optional
{: .text-left}

So there you have it. Flattening arrow code (even if it doesn't originally look like a full arrow) will make your code easier to read, easier to understand, and easier to extend. Just save on postage and use the [llama poison](https://www.imdb.com/title/tt0120917/).

![Feel the power]({% link images/feel_the_power.jpg %}){: max-width="100%" height="auto"}
{: .flex .flex--center}

### Bonus reading
{: .text-left}

This inversion of the conditionals and changing the `and` into an effective `or` (because only one of our `if`s need to be true to cause it to `return`) is an application of [De Morgan's law](https://en.wikipedia.org/wiki/De_Morgan%27s_laws).
