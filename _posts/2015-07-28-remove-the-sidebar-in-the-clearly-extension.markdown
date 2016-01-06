---
layout: post
title:  "Remove the sidebar in the Clearly extension/addon"
description: Guide to remove the sidebar from the clearly extension giving you a cleaner reading space.
permalink: /remove-the-sidebar-in-the-clearly-extension
---
[Clearly][1] is a super useful tool for reading online content. However, it has a sidebar that takes away valuable empty space, here's a guide on how to remove it.

<figure>
    <a href="/assets/images/posts/2015-07-28-remove-the-sidebar-in-the-clearly-extension/screenshot-one.png" target="_blank">
        <img src="/assets/images/posts/2015-07-28-remove-the-sidebar-in-the-clearly-extension/screenshot-one.png" alt="The criminal image in question"></img>
    </a>
</figure>

First right click the Clearly icon on the top right and go to the options menu:

<figure>
    <a href="/assets/images/posts/2015-07-28-remove-the-sidebar-in-the-clearly-extension/screenshot-two.png" target="_blank">
        <img src="/assets/images/posts/2015-07-28-remove-the-sidebar-in-the-clearly-extension/screenshot-two.png" alt="Options menu"></img>
    </a>
</figure>


Then travel to the 'Custom Theme' tab, click on the 'Custom CSS' box and add the following: `#sidebar { display: none; } #background { right: 0px !important; }`

<figure>
    <a href="/assets/images/posts/2015-07-28-remove-the-sidebar-in-the-clearly-extension/screenshot-three.png" target="_blank">
        <img src="/assets/images/posts/2015-07-28-remove-the-sidebar-in-the-clearly-extension/screenshot-three.png" alt="Options menu"></img>
    </a>
</figure>

After that once you refresh and check again the annoying bar is gone! Viva la clean reading!

<figure>
    <a href="/assets/images/posts/2015-07-28-remove-the-sidebar-in-the-clearly-extension/screenshot-four.png" target="_blank">
        <img src="/assets/images/posts/2015-07-28-remove-the-sidebar-in-the-clearly-extension/screenshot-four.png" alt="Sidebar is gone!"></img>
    </a>
</figure>

[1]: https://chrome.google.com/webstore/detail/clearly/iooicodkiihhpojmmeghjclgihfjdjhj?hl=en

