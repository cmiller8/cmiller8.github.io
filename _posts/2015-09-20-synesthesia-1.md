---
layout: post
title: The Synesthesia Project - Part I
emphasize: true
subtitle: A software and lighting project with the House Theatre and the Logan Center for the Arts at the University of Chicago
comments: true

excerpt: Recently, The House Theatre and the University of Chicago provided me and my friend/collaborator Kevin O'Donnell some money and facilities to workshop an early version of the software that I've written to facilitate sound and light interactions in a theatrical context.

categories:
- Nerd Stuff
- Make Stuff
- Lighting
- Synesthesia

video:
  mp4: synesthesia-3.mp4
  webm: synesthesia-3.webm
  
internal_video:
  sparrow: 
    mp4: sparrow-bullet.mp4
    webm: sparrow-bullet.webm
---

<a href="https://github.com/benwilhelm/flux-capacitor">
  <span class="fa fa-github"></span>
  View the software on Github
</a>

This is a project that's been kicking around in my head for about 8 years now, mostly just in theoretical form. Recently, The House Theatre and the University of Chicago provided me and my friend/collaborator Kevin O'Donnell some money and facilities to workshop an early version of the software that I've written to facilitate sound and light interactions in a theatrical context. **This post is about the _What_ and the _Why_ of it all. I'll be detailing the _How_ in a future post.**

## Syne-what?

[Synesthesia][1] is a _"neurological phenomenon in which stimulation of one sensory or cognitive pathway leads to automatic, involuntary experiences in a second sensory or cognitive pathway."_ It can manifest in any number of ways, where a synesthete might inherently associate different colors with specific letters and numbers, or specific shapes with different musical chords. My wife and I are both synesthetes, as are her two brothers and my mother. My wife sees even and odd numbers as cool and warm colors, respectively. She even sometimes refers to warm or cool numbers without realizing it. My synesthesia takes a more obscure form, where I associate the months of the year on a counterclockwise loop, with January at 12 o'clock, February at 11 o'clock, etc. The loop is twisted 90 degrees in the middle so that the months on the bottom progress near to far. Kind of like this:

<img src="{{ site.cdn_path }}/large/projects/syn-calendar.jpg">

I hadn't even thought of this as synesthesia until it was called out in one of the books I was reading as a less common form. I mentioned this to my brother in law and he immediately drew for me _his_ calendar loop, which follows a much more meandering path.

[1]: https://en.wikipedia.org/wiki/Synesthesia

## Ok, cool.  So what?

Well, as I read about synesthesia, I recognized that this is how I approach lighting design. Lighting should so seamlessly integrate with the action on stage and the other design elements (in my case, I am especially drawn to sound) that it should feel as though you are sensing a single event with multiple modes, rather than an assembly of storytelling devices. It sounds obvious, but designers often forget this consideration while crafting their individual works. I've been lucky enough to play with a few sound designers who were game to collaborate on the experiences that I was after, creating long strings of cues timed down to the tenth of a second in order to sync up with audio events, with the sequences kicked off by a midi trigger from the sound computer. Kinda like this:

{% assign videoFormats = page.internal_video.sparrow %}
{% include video-player.html %}

But working this way is **tedious** and limiting. If anything changes in the sound timings, you have to restructure everything. You could trigger all of the internal cues off the sound computer, rather than just the first one, but then you're beholden to the sound designer if you want to change the placements. Also, you can only work in fairly broad strokes, and there's no possibility of reacting to live sounds where the timings or sequences are not exactly the same every night. When the timings are off by even a fraction of a second, the illusion is broken and you begin to process and analyze the two effects as products of different sources. I envisioned the ability to create intricate, on-the-fly reactions and interactions between light and sound, both live and recorded, where the light was the _visual embodiment_ of the sound.

I began to understand my obsession with these perfect timings, and why it bothered me so much if a cue was misaligned by even a tenth of a second, when I read the following passage in Richard Cytowic's book _Wednesday is Indigo Blue_, about his research into the phenomenon of synesthesia.  

> Recently, new techniques have been applied to cross-sensory perception.
Electrode recordings from single cells in the brain show that when a bang
and a ﬂash occur at the same time and location, the activity level of the
cells can increase to a level exceeding that predicted by adding up the
responses to the single-sense inputs.

> <cite>Cytowic M.D., Richard E.; David M., Ph.D. Eagleman. Wednesday Is Indigo Blue: Discovering the Brain of Synesthesia (Page 106). The MIT Press.</cite>

In other words, the magnitude of the reaction you experience from an event perceived with multiple senses simultaneously is greater than the sum of the reactions if you perceived each sensory input separately.

Or...

    >      bang  = 1 
    >      flash = 1 
    ----------------    
    bang + flash = 3 


## Ok, but isn't there already software to do that?

Well yes.  There are actually dozens of softwares that process audio to control lighting. But there were a couple of reasons that I wanted to make my own. First and foremost, I'm a maker. I make stuff. It's just what I do. What's more, I'm a software developer. I had to see if I could do this, because I had very specific ideas for how exactly I wanted the audio analysis to work, and how I wanted that analysis to translate into lighting.

<img src="{{ site.cdn_path }}/large/projects/flux-capacitor.jpg">


I'll go into the details of how it works in a future post, but the brief explanation is that it analyzes the incoming audio signal and displays it as an EQ, similar to what you've seen on any car stereo display. The designer can then zoom in on arbitrary ranges of the signal and apply different effects to the output channels based on what's happening in the selected range.

But getting back to _why_ I built it myself; I come from the non-profit theatre world where, as you might guess, there is usually not a lot of money to spend on specialty equipment and software. More than that, theatre companies and designers are working hard and fast to get a show up on its feet and selling tickets, so there is generally not a lot of time to fiddle with and troubleshoot new technologies when you have dozens of actors, technicians and other artists and artisans waiting on you.  

For all of these reasons, I open-sourced the software, and designed it to sit as a middleware between the existing lighting control console and the fixtures themselves. The control console (AKA the light board) connects to a plain old consumer-grade computer via Ethernet ([Artnet][2], to be specific), running my as-yet-unnamed software. This computer can be anything. Windows, Mac, Linux, whatever. We'll call it the "effects machine" for clarity. The effects machine receives the output from the lighting console, modifies the control signal on the fly based on an audio input and parameters set by the user, then outputs DMX-512 (the industry standard control protocol) via a homemade USB widget which can be built for less than $60. (eventually I hope to support off-the-shelf USB-DMX widgets). The effects machine can actually run as a standalone controller, but the real strength of it is that once connected to the console via ArtNet, all of the software parameters on the effects machine can be controlled directly from the lighting console, which means that all of the cuing remains in the console that the operator is already familiar with. The keystrokes for writing cues live in muscle memory for any decent operator, and when teching a show you need to be able to write cues _fast_. Delegating control of the software to the light board means that the operator does not need to learn a new user interface, and the software doesn't need to concern itself with a cue stack. The software behaves sort of like a meta-fixture in the board, controlled over DMX like any other fixture, but altering the DMX values that are sent to other fixtures on the fly based on the audio input it is receiving and the parameters sent from the light board.

<img src="{{ site.cdn_path }}/large/projects/syn-diagram.jpg">

[2]: https://en.wikipedia.org/wiki/Art-Net

The icing on the cake here is the flexibility that this setup affords. The software could conceivably be adapted to serve as an interface between all kinds of inputs. A choreographer friend who attended the showcase of the the piece was immediately interested in whether it could be adapted to interface with accelerometers attached to dancers. It absolutely could, and this is a key reason that I wanted to build the software open-source. As we get beyond the prototype phase, I envision a standard API for creating plugins, where designers, technicians, and software developers in the wild could come up with their own ways to apply the physical world to their lighting designs. Another key is the flexibility surrounding the hardware platform. In the first video above I ran the software on a 2010 MacBook Pro. For smaller-scale effects, it could conceivably be run on something like a [Raspberry Pi][3], the feasibility of which I'm currently exploring for another show.

[3]: https://www.raspberrypi.org/help/what-is-a-raspberry-pi/

Stay tuned for an in-depth explanation of the practical application and the technologies involved.
