---
layout: post
title: "Scala get a Random BigInt and convert it to Base 36"
description: In scala one way to create random file or directory names is to produce a random BigInt and convert it to base 36, yielding a string such as "qsnvbevtomcj38o06kul". Here's how to do this in Scala.
permalink: /scala-produce-random-big-int-and-convert-to-base-36
---

I've been reading through the book 'Scala for the Impatient', and found a particular question that took some googling to solve:

>One way to create random file or directory names is to produce a random BigInt and convert it to base 36, yielding a string such as "qsnvbevtomcj38o06kul" . Poke around Scaladoc to find a way of doing this in Scala.

Here's how to do it:

```scala
import scala.math._
import BigInt.probablePrime
import scala.util.Random

...

// Get a random big int
val randomBigInt: BigInt = probablePrime(100, Random)

// Convert it to a base 36 string
val baseString: String = randomBigInt.toString(36)
```

In the REPL it would look something like this:

```shell
Welcome to Scala version 2.11.4 (Java HotSpot(TM) 64-Bit Server VM, Java 1.7.0_75).
Type in expressions to have them evaluated.
Type :help for more information.

scala> val randomBigInt: math.BigInt = math.BigInt.probablePrime(100, util.Random)
randomBigInt: scala.math.BigInt = 981107148062576992730090299271

scala> val baseString: String = randomBigInt.toString(36)
baseString: String = 2n4beh1ryczyb65isepz

scala>
```

Hope this helped, and happy learning!
