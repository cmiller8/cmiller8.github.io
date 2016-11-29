---
layout: post
title: Building an Image-Heavy Jekyll Site
comments: true

excerpt: How to build an image-heavy blog using Jekyll and not bloat your Git repository with image files.

categories:
  - The Website
  - Nerd Stuff

cover:
  src: posts/misc/jekyll-logo-2x.png
  nolink: true

---


### The Setup

I was introduced to [Jekyll][jekyll] as a platform by a colleague at the [Open Government Hack Night][opengov]. Up until recently my blog was built on WordPress, and right away I was excited by the idea that I could write both content and code from the same place, that is, my text editor.  Also, keeping my content under version control and not having to deal with finicky web-based WYSIWYG editors was a big plus for me too. It was either that night or the next day that I started rebuilding my site with Jekyll and, at least for the moment, I am totally smitten with this platform.

### The Problem

One of Jekyll's strengths (everything kept in Git) quickly turned out to be a stumbling block when I first tried to commit a bunch of my photography to the repository. As I waited 30+ seconds to even be prompted for the commit message, I realized that keeping all of my images checked directly into the repo was going to make it impractically large and unwieldy. 


### The Solution

The solution is simple, and outlined in a few steps here:

*1) Store images in my Dropbox `Public` folder*

Dropbox accounts all have a folder called `Public`, a default directory which makes any file in it available publicly on the interwebs at a consistent root URL, following whatever directory structure is laid out within it.  For me that URL is `https://dl.dropboxusercontent.com/u/8637739`, into which I put a directory called `benwilhelm.com`, where I would put all of my photos organized into further subfolders as desired. 

*2) Create a site variable that is the Dropbox public URL*

In my `_config.yml` file, I added the following line:

{% highlight yaml %}
cdn_path: https://dl.dropboxusercontent.com/u/8637739/benwilhelm.com
{% endhighlight %}

which means that I can now embed the images from my public folder into my markup thusly:

{% highlight html %}
{% raw %}
<img src="{{site.cdn_path}}/photos/photo.jpg" />
{% endraw %}
{% endhighlight %}

Added bonus: if I ever decide to go with a different solution for file hosting/sharing, I can simply update the site variable and not have to worry about each individual path.

*3) Optional: Use Grunt.js for further image processing*

I use [grunt.js][grunt] for managing development and deployment tasks. In order to create versions of my photos at different sizes (thumbnail, medium, large, etc), I created a grunt task using [grunt-image-resize][gruntir] which scans the `originals` folder and creates corresponding images at multiple resolutions in folders called `thumbs`, `medium`, and `large`. 

I also created a custom task which scans each of the directories and writes each image's pixel size and aspect ratio to a data file, allowing me to use those values for some of the javascript effects on the site (notably [fluidbox][fluidbox] and [packery][packery]). Image properties are saved to a YAML hash, the keys of which are the respective paths of each image.  All of this is excerpted below; the full grunt file can be found on [GitHub][gruntfile]


#### Gruntfile.js (excerpt)

{% highlight js %}

var grunt = require('grunt')
  , fs = require('fs')
  , glob = require('glob')
  , sizeOf = require('image-size')
  , YAML = require('yamljs')
  ;

  //...

  // ==========================
  // TASK: image_resize
  // excerpted from 
  // grunt.initConfig()
  // ==========================
  image_resize: {

    thumbs: {
      options: {
        width: 400,
                overwrite: false
      },

      files: [{
        expand: true,
        cwd: "files/originals/",
        src: "**/*.jpg",
        dest: "files/thumbs/",
        ext: ".jpg",
        extDot: "first"
      }]
    },

    medium: {
      options: {
        width: 800,
                overwrite: false
      },

      files: [{
        expand: true,
        cwd: "files/originals/",
        src: "**/*.jpg",
        dest: "files/medium/",
        ext: ".jpg",
        extDot: "first"
      }]
    },

    large: {
      options: {
        width: 1200, 
                overwrite: false
      },

      files: [{
        expand: true,
        cwd: "files/originals/",
        src: "**/*.jpg",
        dest: "files/large/",
        ext: ".jpg",
        extDot: "first"
      }]
    }

  },

  //...

  grunt.registerTask('resize', [
    "image_resize:thumbs", 
    "image_resize:medium", 
    "image_resize:large"
  ]);

  grunt.registerTask('imageinfo', function(){
    var done = this.async();
    glob('files/**/*.jpg', {}, function(err, files){
      var existingYml = fs.readFileSync("./_data/images.yml").toString();

      // this demarcates auto-generated values
      // from manually added values for things like
      // externally hosted images
      var a = existingYml.split("#!#!#!#!#");
      existingYml = a[0].trim();

      var data = {};
      files.forEach(function(file){
        var dimensions = sizeOf(file);
        var image = {
          width: dimensions.width,
          height: dimensions.height,
          aspect: dimensions.width / dimensions.height
        }
        data[file] = image;
      })

      var yamlString = YAML.stringify(data);
      var yamlHeading = "\n\n\n#!#!#!#!# Do not edit below this line.\n";
      yamlHeading += "# Generated automatically using `grunt imageinfo` on " + new Date() + "\n\n";
      
      fs.writeFileSync("./_data/images.yml", existingYml + yamlHeading + yamlString);
      console.log('done');
      done();
    });
    
  });
  grunt.registerTask('processimages', ['resize', 'imageinfo']);

{% endhighlight %}


#### _data/images.yml (excerpt)
{% highlight yaml %}

# Manually add photos which will not be processed by `grunt imageinfo` here

"http://imgs.xkcd.com/comics/computer_problems.png":
    width: 587
    height: 254
    aspect: 2.311


#!#!#!#!# Do not edit below this line.
# Generated automatically using `grunt imageinfo`

"files/large/lighting/500-clown-xmas/IMG_0008-1200x800.jpg":
    width: 1200
    height: 800
    aspect: 1.5
"files/large/lighting/500-clown-xmas/IMG_9848-1200x800.jpg":
    width: 1200
    height: 800
    aspect: 1.5
"files/large/lighting/500-clown-xmas/IMG_9922-1200x800.jpg":
    width: 1200
    height: 800
    aspect: 1.5

{% endhighlight %}


[jekyll]:   http://jekyllrb.com "Jekyll | Simple, blog-aware static sites"
[opengov]:  http://opengovhacknight.com "Chicago's weekly event to build, share, and learn about civic tech."
[grunt]:    http://gruntjs.com
[gruntir]:  https://github.com/excellenteasy/grunt-image-resize
[fluidbox]: http://terrymun.github.io/Fluidbox/
[packery]:  http://packery.metafizzy.co/
[gruntfile]: https://github.com/benwilhelm/benwilhelm.github.io/blob/jekyll/Gruntfile.js
