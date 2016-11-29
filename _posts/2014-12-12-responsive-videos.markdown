---
layout: post
title: Responsive Video Players
comments: true

categories: 
- Nerd Stuff
- The Website
---

I'm in the middle of rebuilding my blog using [Jekyll](http://jekyllrb.com) (about which I'll be writing a whole new post) but in doing so I came across this elegant CSS-only solution for responsive sizing of embedded video players.  It's the best I've found so far, and I've looked at a lot of different solutions to this problem.

[http://alistapart.com/article/creating-intrinsic-ratios-for-video](http://alistapart.com/article/creating-intrinsic-ratios-for-video)

{% highlight css %}
.videoWrapper {
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 25px;
	height: 0;
}

object,
embed {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
{% endhighlight %}

{% highlight html %}

<div class="videoWrapper">
	<object data="..." type="...">
		<embed src="..." type="...">
	</object>
</div>

{% endhighlight %}
