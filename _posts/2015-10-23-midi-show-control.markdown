---
layout: post
title: Midi Show Control for Node.js
emphasize: false
excerpt: A Node.js module for interacting with theatrical controllers via Midi Show Control.

categories:
- Lighting
- Node.js
- Nerd Stuff
- Make Stuff

comments: true
---


**Check it out on...**

- [GitHub][github.msc]
- [NPM][npm.msc]

----

I'm bringing together the two things I do best, theatre and software development, on a pretty epic project called [The Last Defender][tld] with the House Theatre of Chicago. We have a stack of Arduinos, Raspberry Pis, Lighting, Sound, and Video control consoles that all need to coordinate, and the most reliable way to do so is to harken back to the 1980's and run them with good old MIDI.

This module wraps the [midi module][npm.midi], creating an object that allows you to pass and receive javascript objects with parameters that you'll recognize, abstracting away the need to lookup hex values and construct byte arrays. For instance:

{% highlight js %}

var msc = require('midi-show-control');
var output = msc.mscOutput();
output.openPort(0);
 
output.sendMsc({
    deviceId: 2,
    commandFormat: "sound.general",
    command: "go",
    cue: "25.5",
    cueList: "3.1",
    cuePath: "1.2"
})

{% endhighlight %}

Easy! Install from [NPM][npm.msc] and view the code on [GitHub][github.msc]. Comments and pull requests welcome.

[tld]: http://thehousetheatre.com/playsandevents/lastdefenderseason14
[github.msc]: https://github.com/benwilhelm/node-midi-show-control
[npm.msc]: https://npmjs.com/package/midi-show-control
[npm.midi]: https://npmjs.com/package/midi
