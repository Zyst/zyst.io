---
layout: post
title: "How to make Visual Studio Code prettier in Windows 10"
description: I wanted to make VS Code look prettier in Windows 10, and potentially hide the title bar. That functionality doesn't exist but I'm mostly okay with the result.
permalink: /how-to-make-visual-studio-code-prettier-in-windows-10
---

I wanted to make VS Code look prettier in Windows, mostly hide the title bar. That functionality doesn't exist but I'm mostly okay with the result:

<figure>
  <a href="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/normal.png" target="_blank">
    <img src="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/normal.png" alt="Normal" />
  </a>
</figure>

This is fairly easily achievable, and is all done through Windows directly, no hacks involved. Once again, here's how it looks in Zen mode:

<figure>
  <a href="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/zen-mode.png" target="_blank">
    <img src="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/zen-mode.png" alt="Zen mode" />
  </a>
</figure>

Without further ado, let's begin.

First you are going to want to turn the menu bar off. This thing:

<figure>
  <a href="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/menu-bar.png" target="_blank">
    <img src="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/menu-bar.png" alt="Menu bar" />
  </a>
</figure>

You can do so by adding the following to your `settings.json`:

{% highlight json %}
{
  "window.menuBarVisibility": "toggle"
}
{% endhighlight %}

I like using toggle there, if you press alt it will open and you can use it. If you want it gone for good, by setting the option to `"hidden"` instead of `"toggle"`.

Now we need to change our title bar to match our theme. First we need to know what color we want, so we're going to need the `Menu bar -> Help -> Toggle developer tools`, hope you set that to toggle, otherwise here's a good reason to do so!

<figure>
  <a href="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/developer-tools.png" target="_blank">
    <img src="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/developer-tools.png" alt="Developer tools in menu" />
  </a>
</figure>

Once we have developer tools open we're going to click on the element inspector, which is the box with the cursor shown here:

<figure>
  <a href="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/element-inspector.png" target="_blank">
    <img src="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/element-inspector.png" alt="Element inspector" />
  </a>
</figure>

And then use that to inspect and find the color we want, note that you could also do this through digging through your theme's `json` file, but I think this is relatively easier. So we should click on the element whose color we want to match. I'd recommend selecting the VS Code file title section:

<figure>
  <a href="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/element-inspector-selection.png" target="_blank">
    <img src="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/element-inspector-selection.png" alt="Element inspector selection" />
  </a>
</figure>

This element doesn't reference the background color it uses, but the element right above it does!

<figure>
  <a href="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/background-color-found.png" target="_blank">
    <img src="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/background-color-found.png" alt="Background color found!" />
  </a>
</figure>

Now we go to Windows search (Win key), and type in "colors":

<figure>
  <a href="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/color-search.png" target="_blank">
    <img src="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/color-search.png" alt="Searching colors" />
  </a>
</figure>

And we open the Choose your accent color Windows option. In here we're going to select the "Custom color" option:

<figure>
  <a href="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/custom-color.png" target="_blank">
    <img src="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/custom-color.png" alt="Choosing custom color" />
  </a>
</figure>

And finally, in the open menu we click "More", and enter our custom color!

<figure>
  <a href="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/select-color.png" target="_blank">
    <img src="/assets/images/posts/2017-07-11-how-to-make-visual-studio-code-prettier-in-windows/select-color.png" alt="Selecting our new color" />
  </a>
</figure>

Click "Done", and voila! You have finished. However you might need to restart VS Code to see the changes.

Note: Depending on your color scheme this can and will make your Windows explorer look horrible. Small price to pay, I spend half my day staring at VS Code, and a handful of minutes looking at Windows explorer, I'll take that tradeoff.
