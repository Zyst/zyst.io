---
layout: post
title: "Useful OS X commands and shortcuts"
description: Useful OS X commands and more, saving them here so I do not forget them.
permalink: /useful-os-x-commands-and-more
---

Here are some commands, and a few other things I've found out as I mess around with OS X. I'm keeping the most remarkable here so I don't forget them.

## Navigate to directory

If you press: `Command + Shift + G` you can paste an entire directory to navigate directly to it.

<figure>
    <a href="/assets/images/posts/2016-02-16-useful-os-x-commands-and-more/ss1.png" target="_blank">
        <img src="/assets/images/posts/2016-02-16-useful-os-x-commands-and-more/ss1.png" alt="Navigate"></img>
    </a>
</figure>

## Screenshots

Multi Screen Screenshot is done with `Command + Shift + 3`, this one kind of sucks with multiple monitors. In general just use `Command + Shift + 4`, it lets you select an area, but if while you have the area select going you press `Space` it will let you select a Window instead. 

The two above have puush auto hooks.

## Recursively 'own' a folder

You can recursively take ownership of a folder (Get read/write) by using the following two commands:

```bash
chmod -R 777 /Users/Test/Desktop/PATH

chflags -R nouchg /PATH/TO/DIRECTORY/WITH/LOCKED/FILES/
```

The `chmod` first gives you read/write permissions on the folder and children. The second one removes the OS X 'Locked' flag which wouldn't let you edit files. The two above are very useful when copy-pasting something from Windows.  

## Use Media Hotkeys with a non-apple keyboard

Download Karabiner with `brew cask install karabiner` and then in settings turn on the following:

<figure>
    <a href="/assets/images/posts/2016-02-16-useful-os-x-commands-and-more/ss2.png" target="_blank">
        <img src="/assets/images/posts/2016-02-16-useful-os-x-commands-and-more/ss2.png" alt="Karabiner settings"></img>
    </a>
</figure>

##  Hide a folder

To hide a folder use the terminal and use the following command:

```bash
chflags hidden /path/to/folder/
```

This will hide the folder in Finder. Although you can still access it with manual traveling to route, or with your terminal.

To remove the hidden flag use the following command:

```bash
chflags nohidden /path/to/folder/
```

## Manually add stuff to your $PATH

To manually add stuff to your system PATH use the command:

```bash
nano ~/.bash_profile 
```

And then manually add a line with the reference

```bash
export PATH="/Users/zyst/anaconda/bin:$PATH"
```

## Add a terminal alias

To add an alias for the terminal open your `bash_profile` and add the alias after `alias name='commands'`.

```bash
nano ~/.bash_profile 

# NCMPCPP
alias muse='mpd && mpdas && ncmpcpp'
```

More to come soon as I keep finding them out!
