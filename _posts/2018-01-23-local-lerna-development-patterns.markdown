---
layout: post
title: "Local lerna development patterns"
description: These are some development patterns we've found while using lerna that have made our lives a bit easier.
permalink: /local-lerna-development-patterns
---

This post is meant to be a primer of sorts to aid you in the usage, and local
development patterns of [lerna](https://github.com/lerna/lerna). I am by no
means an expert on the topic, so some of the stuff in here will likely be
nowhere near perfect. If you'd like to correct something feel free to go to this
[post](https://github.com/Zyst/zyst.github.io/blob/master/_posts/2018-01-23-local-lerna-development-patterns%20-%20Copy%20-%20Copy.markdown),
and make a pull request with changes.

First off, if you can do so then having all of your dependencies under a single
repository in `packages` is optimal. From what I've seen it's the canonical way
to use lerna. However sometimes we cannot do so, so the patterns here are
intended for easing the pain of development when you cannot create a monorepo.

When everything is in a single repository under `packages`,
[lerna bootstrap](https://github.com/lerna/lerna#bootstrap) will automatically
create system links between your dependencies. This can be extremely useful for
increasing development agility.

However, if not all of your dependencies are under `packages`, lerna will not
system link them. Thus, we need to find a way to get around this.

## Development patterns:

First, let us assume we have the following scenario:

Our `packages` has a server, and a couple of libraries we have created, and
would like to reuse throughout development. Something like so:

{% highlight sh %}
packages/
  our-awesome-server-utilities/
  our-awesome-library/
  another-awesome-library/
lerna.json
{% endhighlight %}

`our-awesome-server-utilities` depends on both libraries, and so far
`lerna bootstrap` has been rocking. However, we suddenly need to add
`another-library-from-our-friends` to `our-awesome-server`, this library exists
in the repository of one of our teammates, and for whatever reason we cannot
pull it over.

No problem, we can install it through the `package.json` in
`our-awesome-server`. Problem is, we need to make some changes to the library to
account for our use case. And we want to quickly iterate through the changes in
our server to make sure everything is working.

### Using NPM Link

The best option I've found is using [npm link](https://docs.npmjs.com/cli/link),
this is a fairly manual method, but it will get the job done.

First, go to the root of `another-library-from-our-friends`, where
`package.json` is located. Once there we will type `npm link`. This will create
a symlink to our global `node_modules` folder.

We then go back to `our-awesome-server-utilities`, and once there we add the
`our-awesome-server-utilities` as a dependency. And we then proceed to write
`npm link another-library-from-our-friends`. This will install the version you
linked on your local `node_modules` on `our-awesome-server-utilities`.

This way, when we make changes in `another-library-from-our-friends` they are
automagically reflected in `our-awesome-server-utilities`. You can now develop
with agility, huzzah!

This is the only pattern I've found that works everywhere, all kinds of weird
stuff happens if you use symlinks on Windows, but it might be worth a shot on
Unix.

### Using canary versions

An alternative would be to use
[canary versions](https://github.com/lerna/lerna#--canary--c), and updating your
`package.json` manually with the canary versions each time you need to create an
update you wish to test.

This will, however, take drastically more time than the previous approach, so
it should be avoided unless the changes are so minimal setting up the `npm link`
is not worthwhile.
