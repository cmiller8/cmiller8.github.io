---
layout: post
title: 2-Column Float Around Image
comments: true

excerpt: It's common in print design to wrap text in two columns around both sides
  of an image. However, it's a surprisingly difficult thing to do in web design. Here's
  one method of solving it which allows for separating the image from the text in
  the context of a CMS.
categories:
- Nerd Stuff
tags:
- CSS
- image float
- columns

emphasize: true

images:
  - src: posts/misc/2-column-float.jpg

---



<strong>TL;DR? [Grab the code](http://jsbin.com/urIWofuY).</strong>

This week I was presented with an interesting CSS challenge. An image in the middle of a page, with text flowing around both sides of it.

When I first looked at the design comp (not pictured), the two columns around the text jumped out at me right away as one of those <em>well-I'm-sure-that-can-be-solved-but-I-have-no-idea-how-yet</em> kind of problems. I set to work slicing up the comp and building the site, all the while letting this challenge ruminate in the back of my head. After a couple of hours, the build was done save for this element. And I still only had a few rough ideas of how to attack it, because there are a few details that make it extra challenging. The obvious problem of course is how to get that float to span both columns, but the extra tricky bit, if you look closely, is that the image has to float a set distance from the top of the column, rather than being anchored to the top of an element such as a paragraph. &nbsp;The site is being built in Drupal, so I wanted to make sure that the client was able to edit the text of both columns without worrying about how it would affect the placement of the image. &nbsp;Brainstorming with a co-worker, we found a few solutions that came close:


<strong>Close...</strong>


<a href="http://www.sampsonresume.com/labs/img-in-middle/" target="_blank">http://www.sampsonresume.com/labs/img-in-middle/</a>


This one has the basic idea right, but it requires that the image be aligned to the top of the two columns. It set us down the right path, though. &nbsp;Essentially, you're showing half of the image in each column by floating a div of half the image width, and using the background-image and background-position properties to show the appropriate half of the image in each column.


<strong>Closer...</strong>


<a title="A List Apart - Cross-Column Pull-Outs" href="http://alistapart.com/article/crosscolumn" target="_blank">http://alistapart.com/article/crosscolumn</a>


This one gets a little closer to the solution in that it allows you to arbitrarily place the image in the text without having to anchor to the top of an element. However, this article is ten years old<a href="#ann_one" name='source_one'><sup>[1]</sup></a>, from before the widespread use of content management systems, and advocates simply sticking the image into the text of the paragraph wherever you'd like it. That's fine, but you also have to match the placement of the other half of the image with a trial-and-error method in the other column. &nbsp;As I said above, I want the client to be able to edit the text of both columns without worrying about the image placement.


<strong>Bingo!</strong>


The second solution was so close, but still not quite viable. So I did what I often do when presented with a difficult problem: I made my lunch and chewed on the problem while I chewed on a pastrami sandwich<sup><a href="#ann_two" name='source_two'>[2]</a></sup>. I came back to my computer and looked at it for just a second longer, and the solution became clear. What I needed was a prop of constant dimension to anchor to the top of each column, then push the two halves of the image down the appropriate distance. Using a combination of floating and clearing, I was able to put a one-pixel-wide prop before the image in each column, putting each image at the top of its respective column and therefore separating the image from the text content. Relevant bits of code are below, full working example can be found on <a href='http://jsbin.com/urIWofuY/2/edit' target='_blank'>JSBin</a>.


The Markup:


{% highlight html %}
<div class="col left">
  <h3>Left Column</h3>
  <div class="spacer"></div>
  <div class="img"></div>

  
Lorem ipsum...

  
Lorem ipsum...


</div>

<div class="col right">
  <h3>Right Column</h3>
  <div class="spacer"></div>
  <div class="img"></div>
  
  
Lorem ipsum...

  
Lorem ipsum...


</div>
{% endhighlight %}

<br />

The CSS:

{% highlight css %}
* {
  position: relative
}
.col {
  width: 365px;
  padding: 0 15px;
  float: left;
}
div.spacer {
  height: 100px;
  width: 1px;
}
div.img {
  background: url(http://placehold.it/300x300) top left no-repeat;
  height: 300px;
  margin: 5px;
  width: 150px;
}
.col.right div.img {
  background-position-x: right;
}
.col.left .spacer {
  float: right;
}
.col.left .img {
  float: right;
  clear: right;
  margin-right: -15px;
}
.col.right .spacer {
  float: left;
}
.col.right .img {
  float: left;
  clear: left;
  margin-left: -15px;
}

{% endhighlight %}

Hopefully this post will help someone else facing the same problem, but who may not have the aid of a pastrami sandwich.

--
Notes


<a name="ann_one"></a>1) Kudos to ALA for promoting the type of content on their blog that is still mostly relevant after ten years. Taken out of a CMS context, this method is still a totally viable, semantically correct solution to the problem. Three cheers for web standards!  
<a href='#source_one'>back</a>



<a name="ann_two"></a>2) I'm a big fan of stepping back from a problem when I feel stuck. Another developer whose blog I enjoy <a href="http://www.garann.com/dev/2013/the-step-back/" target="_blank">agrees with me</a>.  
<a href='#source_two'>back</a>
