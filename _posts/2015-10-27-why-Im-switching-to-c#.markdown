---
layout: post
title:  "Why I'm switching to C# from Java"
description: A not so small post explaining why I'm switching professionaly to C# from Java.
permalink: /why-im-switching-to-c-sharp-from-Java
---

I've been developing with Java for around 8 years now. And professionally I've found myself mostly doing Web development.

Java is a great language for developing web applications. This post is not intended to bash the language. So, why am I leaving?

##1.- You already know C\#

So you are coming from Java, and want to learn C#. You prepare yourself for a transition you have grown accustomed to when adopting a new language, you clench your teeth and open a book.

Then you read the first few chapters, and you keep reading. Eventually you realize that the transition pain is not quite coming. C# and Java are basically the same language.

Here are some examples:

Getters and setters in Java

{% highlight java %}
private string name;

public void setName(string name) {
   this.name = name;
}

public string getName() {
   return this.name;
}
{% endhighlight %}

Getters and setters in C#

{% highlight csharp %}
public string Name { get; set; }
{% endhighlight %}

<br/>

Interface declaration and implementation in Java

{% highlight java %}
interface Animal {
   public void eat();
   public void travel();
}

public class Mammal implements Animal {
    public void Eat(){
      System.out.println("Mammal eats");
   }

   public void Travel(){
      System.out.println("Mammal travels");
   } 
}
{% endhighlight %}

Interface declaration and implementation in C#

{% highlight csharp %}
interface IAnimal
{
    void eat();
    void travel();
}

class Mammal : IAnimal
{
    public void eat()
    {
        Console.WriteLine("Mammal eats");
    }

    public void travel()
    {
        Console.WriteLine("Mammal travels");
    }
}
{% endhighlight %}

The similarities do not end there by any means, after getting familiar with C# you find that aside from some advanced concepts you are dealing with almost the same language, the learning curve is nearly non-existant.

##2.- ASP.NET lets you (optionally) skip a lot of the boring stuff.

The level of code provided to you when you start a new ASP.NET project is amazing. You start and you already have a working login system, you have links to set up optional stuff like Google/Facebook authentication, you have links to setup two factor authentication. Everything is just given to you.

After a few years of developing with Java I don't think doing this manually is a badge of honor. And there are some Java projects that aim to do the same and give you a more advanced starting point. But odds are it's not going to be the language or framework standard. You are not going to be able to use this everywhere. 

But with ASP.NET this is the standard. This is the proper starting point of an application. You already have a secure login implemented, and a few other goodies to hit the ground running. **You can just develop**.

Then there's the Entity Framework. Hibernate is pretty similar, and so is NHibernate. No particular advantage to be gained there, but then you get to the scaffolding.

Once you start using scaffolding in your project (This being in an MVC context) Visual Studio grabs the Model, and automatically generates a CQRS Controller and View. It's amazing how fast everything becomes with this. 

What I'm trying to say is: It frees you from the most mundane and repetitive aspects of programming and just lets you code.

The only thing similar to this that I've seen is the [jHipster][6] code generation tool.

Essentially, ASP.NET made programming incredibly fun. It lets me concentrate my efforts into crafting my application logic, freeing me from repeating the same code I've written so many times in a per-project basis. 

##3.- The Java web future is a black box

Java is incredibly extensible. That is one of its main selling points, you can do almost anything with Java, and someone has probably done a Library that does it for you anyway.

The problem for me was, that there are just too many options.

Currently with a brief job search I found job postings for the following Java web frameworks: [Struts][1], [Spring][2], [JSP][3], [JSF][4], [Play][5].

So there's many variables in play, although arguably currently JSF and Spring dominate the market. The problem with this is that a few years ago JSP was the top technology, and Java web frameworks are constantly cycling, constantly eating the share of another. And everytime this happens you have to learn a new framework. Albeit, the cycle in Java is graciously slow compared to Javascript where you might find yourself learning a new framework every year.

"Learning new stuff is great though", you might be telling yourself. discarding this post as the rant of a lazy programmer.

Learning new stuff is great, I love learning. Thing is, when you learn something in programming you are taking a gamble. At least when you learn something and try to take it to a deep level you take a gamble, where you invest your time and you hope it pays off. And at some point I figured: "If I keep going this way in 10 years I might not be a Spring Architect with 10 years experience, I will be a X-NewTechnology 3 year Senior". 

ASP.NET seems different. There are people today with 10 years of experience in ASP.NET. Sure, the things they do have changed to Web Pages, MVC, and Web APIs. But it's still all familiar ASP.NET, you are not learning the nuances, notations, and inner workings of a completely different platform, you are just learning different things. And odds are, ASP.NET is gonna stay the C# web framework of choice for the foreseeable future.

Who knows, maybe I'm wrong and Spring will keep being the most popular choice 5 or 10 years from now, and all my worries will have been for nothing. However that is not a bet I should be taking with my livelyhood on the line.

I will keep learning, I hopefully will always want to keep learning, and I have a blast learning Javascript frameworks, This year alone I learned [Meteor][7], [EmberJS][8], and [Falcor][9]. I also am constantly learning new incredible stuff with Scala. I can take small gambles with other stuff for fun, but I want a safe port where I can return after a long night at sea. And C# really seems to be it.

[1]: https://struts.apache.org/
[2]: https://spring.io/
[3]: https://en.wikipedia.org/wiki/JavaServer_Pages
[4]: https://en.wikipedia.org/wiki/JavaServer_Faces
[5]: https://www.playframework.com/
[6]: https://jhipster.github.io/
[7]: https://www.meteor.com/
[8]: http://emberjs.com/
[9]: https://github.com/Netflix/falcor
