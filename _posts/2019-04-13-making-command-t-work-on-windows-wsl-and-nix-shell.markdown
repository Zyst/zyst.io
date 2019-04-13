---
layout: post
title: "Making command-t work on Windows WSL and Nix shell"
description: command-t didn't automatically work/build in a WSL/Nix setup, I managed to build it manually, so I figured I'd document how that was done in case someone finds themselves in the same very-specific scenario. Or future me, when I need to rebuild.
permalink: /making-command-t-work-on-windows-wsl-and-nix-shell
---

`command-t` didn't automatically work/build in a WSL/Nix setup, I managed to build it manually, so I figured I'd document how that was done in case someone finds themselves in the same very-specific scenario. Or future me, when I need to rebuild.

First I went into nvim, and ran `:ruby puts "#{RUBY_VERSION}-p#{RUBY_PATCHLEVEL}"`, which told me I was on version 2.5.5, and patch 157.

Then I went into `~/.config/nvim/plugged/command-t/ruby/command-t/ext/command-t,` and then ran:

`nix-shell -p ruby`

Then I made a small test file called `tst.rb` with the following content:

```ruby
puts "#{RUBY_VERSION}-p#{RUBY_PATCHLEVEL}"
```

Luckily, that also output version 2.5.5, and patch 157. Since the version that nvim uses, and the one nix shell installed match I can use that executable to build manually, which was done with the following commands while stilll inside `~/.config/nvim/plugged/command-t/ruby/command-t/ext/command-t`:

```
ruby extconf.rb
make
```
