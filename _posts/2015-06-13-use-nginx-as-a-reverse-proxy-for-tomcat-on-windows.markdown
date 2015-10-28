---
layout: post
title:  "Use nginx as a reverse proxy for Tomcat on Windows"
description: A short guide to teach you how to use nginx as a reverse proxy for Tomcat allowing you to access the Tomcat deployment in a www.mywebsite.com fashion.
permalink: /use-nginx-as-a-reverse-proxy-for-tomcat-on-windows
---
_Goal:_ By the end of this tutorial you will have configured a completely new Windows nginx configuration, and have it proxy your Tomcat application so you can access your website in a www.mywebsite.com fashion.

All of this assumes you already changed your DNS so it's pointing to your server. If you don't know how to do that google how to do so for your specific registrar, in my case I use gandi and you can find instructions of how to change your DNS zone [here][1]

Go to [the nginx download page][2] and download the latest Windows version, as of writting this 1.9.1.

After unzipping the file go into the `nginx/conf/nginx.conf` file and remove the contents, replace them with this:

**nginx.conf**

{% highlight nginx %}
worker_processes  1;
events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    include C:/path-to-nginx/nginx/conf/sites-enabled/*.conf;
}
{% endhighlight %}

Note the `path-to-nginx` above, make sure to replace that with the actual path to your nginx folder.

After that create a folder called `sites-enabled` in `nginx/conf/sites-enabled`. Then inside that folder create a file with your domain name ending in `.conf` like so:

**erick-romero.conf**

{% highlight nginx %}
server {
    server_name  erick-romero.com;

    location / {
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://localhost:8080;
    }
}
{% endhighlight %}

Inside the above file make sure you change your `server_name` to your domain name and `http://localhost:8080` to use the port you use on your Tomcat application, then deploy your Tomcat application.

Go to the root of your nginx application and run the `nginx.exe` file as administrator. You can also travel to that folder with your Command Line/Powershell and type `start nginx`, both will work.

If you have done everything correctly your application should now be running! Congratulations.

[1]: https://wiki.gandi.net/en/dns
[2]: http://nginx.org/en/download.html
