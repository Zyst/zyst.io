---
layout: post
title: "Write a reverse loop in Scala"
description: In Scala we usually write for (i <- 1 to 10) to iterate, here is how do we do the reverse.
permalink: /write-a-reverse-loop-in-scala
---

In Scala we usually write for loops with this syntax: 

{% highlight scala %}
// 1 2 3 4 5 6 7 8 9 10
for (i <- 1 to 10) print(i + " ")
{% endhighlight %}

But what if we want to do the reverse? Start at 10, and reduce until we reach 1.

Here's how to do it:

{% highlight scala %}
// 10 9 8 7 6 5 4 3 2 1
for (i <- 10 to 1 by -1) print(i + " ")
{% endhighlight %}

The `by` in our for loop tells Scala how it should deal with the iteration, for example:

{% highlight scala %}
for (i <- 1 to 10 by 2) print(i + " ")
{% endhighlight %}

Results in `1 3 5 7 9`, using `by` inside your for loops you can gain a lot of flexibility!
