---
layout: post
title:  "How to fix AWS S3 Chrome and Safari CORS errors on images"
description: AWS S3 has a bug where Chrome CORS will prevent you from fetching images. This is how to fix it
permalink: /how-to-fix-aws-s3-chrome-and-safari-cors-on-images
---

##The issue

So you are trying to get a remote AWS S3 resource, in this specific case, an image. You do your request and an error is thrown:

`Image from origin 'https://site.s3.amazonaws.com' has been blocked from loading by Cross-Origin Resource Sharing policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://somewebsite.com' is therefore not allowed access.`
    
Or you could have also run into the following error:

`XMLHttpRequest cannot load https://site.s3.amazonaws.com/bucket/some-image.png. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://somewebsite.com' is therefore not allowed access.`

In our case we had a recommended configuration by Amazon, and we still couldn't retrieve the images in our code. If we tried to run the code using Firefox it would work, however when we used Safari and Chrome it would not. Sound familiar? Keep reading.

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>GET</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <AllowedHeader>Authorization</AllowedHeader>
    </CORSRule>
</CORSConfiguration>
{% endhighlight %}

We could embed images directly inside our html `<img>` tags and it would work `<img src="https://site.s3.amazonaws.com/bucket/some-image.png" />` however, when we tried to get the image with Javascript we would get one of the two errors mentioned above.

<figure>
    <figcaption>The error in Chrome</figcaption>
    <a href="/assets/images/posts/2015-11-23-how-to-fix-aws-s3-chrome-safari-cors-error/chrome-error.png" target="_blank">
        <img src="/assets/images/posts/2015-11-23-how-to-fix-aws-s3-chrome-safari-cors-error/chrome-error.png" alt="Chrome Error"></img>
    </a>
</figure>

<figure>
    <figcaption>Same code working in Firefox</figcaption>
    <a href="/assets/images/posts/2015-11-23-how-to-fix-aws-s3-chrome-safari-cors-error/firefox-success.png" target="_blank">
        <img src="/assets/images/posts/2015-11-23-how-to-fix-aws-s3-chrome-safari-cors-error/firefox-success.png" alt="Firefox Success"></img>
    </a>
</figure>

You can find that JS Fiddle [here](http://jsfiddle.net/02nojg8w/){:target="_blank"}, it gets a remote image and converts it into a Base64 Data URL. To test if these changes helped you solve your issue you can run this Fiddle, in the text box enter your own URL and an image, and see if it's working.

##The solution

First we went into our Amazon CORS Settings, click in our bucket, select 'Properties' in the top right area, and expand the 'permissions' tab:

<figure>
    <a href="/assets/images/posts/2015-11-23-how-to-fix-aws-s3-chrome-safari-cors-error/aws-s3.png" target="_blank">
        <img src="/assets/images/posts/2015-11-23-how-to-fix-aws-s3-chrome-safari-cors-error/aws-s3.png" alt="AWS S3 Settings"></img>
    </a>
</figure>

Then we click the `Edit CORS Configuration` button and change our settings to this:

{% highlight xml %}
 <?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>GET</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
</CORSConfiguration>
{% endhighlight %}

Then click the `Save` button. After that you have to make sure that every URL you request from Chrome and Safari uses `http://` instead of `https://`. HTTPS retrieval will not work in these browsers at all.

In our case we had Image URLs with https inside of our database, since we didn't want to change anything in our database, and AWS S3 allows both `http` and `https` requests I solved it with a small regular expression that replaced our `https` URL string with `http`.

{% highlight js %}
img.src = url.replace(/^https:\/\//i, 'http://');
{% endhighlight %}

After that you will be able to get your images correctly in Chrome and Safari.

<figure>
    <a href="/assets/images/posts/2015-11-23-how-to-fix-aws-s3-chrome-safari-cors-error/chrome-success.png" target="_blank">
        <img src="/assets/images/posts/2015-11-23-how-to-fix-aws-s3-chrome-safari-cors-error/chrome-success.png" alt="Chrome Success"></img>
    </a>
</figure>
