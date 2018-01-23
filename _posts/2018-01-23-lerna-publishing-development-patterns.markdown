---
layout: post
title: "Lerna publishing development patterns"
description: These are some lerna publishing patterns we've found while using lerna that have made our lives a bit easier.
permalink: /lerna-publishing-development-patterns
---

This post is meant to be a primer of sorts to aid in the usage, and development
patterns of [lerna](https://github.com/lerna/lerna) focused on publishing. I am
by no means an expert on the topic, so some of the stuff in here will likely be
nowhere near perfect. If you'd like to correct something feel free to go to this
[post](https://github.com/Zyst/zyst.github.io/blob/master/_posts/2018-01-23-lerna-publishing-development-patterns.markdown),
and make a pull request with changes.

Lerna makes publishing versions of your dependencies a breeze! First off, you
should go read [semver](https://semver.org/), it is vital to understand what the
changes we are making on version numbers mean.

## When to use lerna publish

[lerna publish](https://github.com/lerna/lerna#publish) is going to be your
bread and butter, we will not cover usage, the docs are excellent in that sense,
this is more of a hint that could apply to regular publishing as well.

The question I've had asked most is _when_ to actually go through with
publishing the new versions. My advice is: After your Pull Request is opened,
reviewed, and approved. But before you merge. At that point where it is
accepted, go ahead and publish the new version, push, and merge.

## How do I make my package versions unsync

I wrote a [brief blog post](/how-to-separate-lerna-versions-while-publishing) on
this.

## How do I publish versions for testing

If you need to publish versions for testing add the
[--canary](https://github.com/lerna/lerna#--canary--c) flag to your
`lerna publish` with an optional flag, ie:

{% highlight sh %}
$ lerna publish --canary
$ lerna publish --canary=beta
{% endhighlight %}

This will let you create a lot of versions for testing without having to worry
about breaking changes.
