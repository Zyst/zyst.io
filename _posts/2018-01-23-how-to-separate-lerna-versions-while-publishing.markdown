---
layout: post
title: "How to separate Lerna versions while publishing"
description: This is a brief guide showing you how to switch your lerna repository so that you can publish versions independently.
permalink: /how-to-separate-lerna-versions-while-publishing
---

If you have a lerna project you might realize that running
[lerna publish](https://github.com/lerna/lerna#publish) will sync up your
packages versions.

If you do not want your packages to be synced up, you can initialize your
project with the `--independent` flag. But if you already have a project, and
need to edit it so that you use independent versions henceforth then you can
edit your `lerna.json` file so that it looks like this:

{% highlight json %}
{
  "lerna": "X.0.0",
  "packages": ["packages/*"],
  "version": "independent"
}
{% endhighlight %}

Adding the `"version": "independent"` entry will make it so that `lerna publish`
works separately for your packages, regardless of whether they were tied
together or not previously.
