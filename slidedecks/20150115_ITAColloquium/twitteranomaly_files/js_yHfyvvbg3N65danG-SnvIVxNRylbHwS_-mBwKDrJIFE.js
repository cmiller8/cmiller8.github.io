window.$=jQuery;var Drupal=Drupal||{},GAZ=function(e){var t={};/**
   * Modify embedded tweets to hide the date and show a "promoted by" tag when
   * our WYSIWYG plugin has marked the tweet as "promoted".
   */
/**
   * Toggle sidebar menus onload & onclick
   */
/**
   * Reveal youtube videos when play button is clicked.
   */
/**
   * Handle moving the left sidebar navigation below content.
   */
/**
   * Add a tweet button to tweetable quotes.
   */
/**
   * Check datawrapper & easychart iframes for dimension properties, and enforce them on the iframe if present.
   */
return t.modifyTweets=function(){intervalHandle=setInterval(function(){var i=e(".g-tweet").not(".g-modified");0===i.length&&clearInterval(intervalHandle),i.each(function(){var i=e(this),n=i.find("iframe"),a=n.contents().find("blockquote.tweet").last(),o="",r="",s="",d="",l="",u="";// If this tweet has been embedded on a blog page or has
// been specifically set to not show a date, we mask the
// date by replacing it with 'View on Twitter'
(1!==i.parents(".node-type-blog").length||i.hasClass("g-mask-date"))&&(o=a.find(".dateline a"),o.text(Drupal.t("View on Twitter")),i.addClass("g-modified")),// If this tweet has been marked as promoted by a content editor,
// we prepend a promoted icon along with custom text
i.hasClass("g-promoted")&&(u=i.hasClass("g-promoted-purple")?"promoted-purple.png":"promoted.png",// Add the "promoted by" tagline
r=i.attr("data-promotedby-screenname"),r||(r=a.find(".header .p-nickname b").text()),s=i.attr("data-promotedby-fullname"),s||(s=a.find(".header .full-name .p-name").text()),d=Drupal.t("Promoted by !fullName",{"!fullName":s}),l='<div class="context">',l+='<span class="metadata with-icn">',l+='<img class="gazebo-promoted-img" src="/sites/all/themes/gazebo/img/'+u+'" />',l+='<a href="https://twitter.com/'+t.hoganEscape(r)+'" class="js-action-profile-promoted js-user-profile-link js-promoted-badge">'+t.hoganEscape(d)+"</a>",l+="</span>",l+="</div>",n.css("height",n.height()+15+"px"),a.find(".footer").prepend(l),a.find(".footer .js-action-profile-promoted").css("padding-left","5px"),i.addClass("g-modified"))})},3e3)},t.relocateModals=function(){// modals can be added anywhere on the page by calling theme_bootstrap_modal()
// b/c #gaz-content > .container has a position: relative and a z-index: 1, the
// modals are showing up behind the overlay. to solve this, we move all modals
// to the end of the DOM and put them just before the closing </body> tag.
e(".modal").appendTo("body")},t.toggleSideMenus=function(){var t=e(".view-success-story-taxonomy h3");// Open menus on click of heading
t.click(function(t){t.preventDefault();var i=e(this);i.toggleClass("open"),i.next("ul").toggle()}),// Look for active links, and open their container if they exist.
e(".view-success-story-taxonomy ul li a.active").parents("ul").prev("h3").click()},t.toggleVideo=function(){e("#hero .btn-play").click(function(){var i=e(".hero-video-src"),n=t.hoganEscape(i.attr("data-video-src"));return i.html('<iframe id="herovideo" width="100%" height="100%" src="https://www.youtube.com/embed/'+n+'?autoplay=1" frameborder="0"></iframe>'),e("#hero").addClass("video-curtain"),e("#hero .g-hero-video").show().addClass("visible"),!1}),e("#hero").click(function(){var t=e(this);return t.hasClass("video-curtain")?(e(".hero-video-src").text(""),t.removeClass("video-curtain"),e("#hero .g-hero-video").hide().removeClass("visible"),!1):void 0})},t.arrangeNavigation=function(){var t=e(window),i=function(){0===e("#sidebar-first-bottom").length&&e("#sidebar-first").clone().attr("id","sidebar-first-bottom").addClass("position-bottom").removeClass("span2").appendTo("#gaz-content > .container").hide()},n=function(){// Use window.outerWidth if available, as it includes the scrollbar width, consistent with how Chrome and FF
// measure browser width for CSS media queries.  $(window).width() does not include scrollbar width.
var n=window.outerWidth?window.outerWidth:t.width();767>=n?(i(),e("#sidebar-first").hide(),e("#sidebar-first-bottom").show()):(e("#sidebar-first").show(),e("#sidebar-first-bottom").hide())};n(),t.resize(n)},t.loadMore={init:function(){var t=e("a.load-more"),i=e(".pagination"),n=i.find(".next a").attr("href");return 0===t.length||0===i.length?!1:(i.hide(),void t.bind("click",function(i){i.preventDefault();var a=e(this),o=a.data("target"),r=a.data("result"),s=null,d=null;a.addClass("loading"),e.get(n,function(i){s=e(i),d=s.find(r),n=s.find(".pagination .next a").attr("href"),"undefined"==typeof n&&// hide the link wrapper to remove extra margins
t.parent().hide(),e(o).append(d),a.removeClass("loading")})}))}},t.tweetableQuotes=function(){e(".page-node .g-quote.g-tweetable").each(function(){var t=e(this),i=e('<a class="btn btn-twhite">'+Drupal.t("Tweet")+"</a>"),n=encodeURIComponent(document.location),a=t.children("p").text(),o=a.substr(0,1),r=a.substr(-1,1);'"'!=o&&"“"!=o&&'"'!=r&&"”"!=r&&(a='"'+a+'"'),i.attr("href","https://twitter.com/intent/tweet?url="+n+"&text="+encodeURIComponent(a)+"&share_with_retweet=false"),t.append(i)})},t.iFrameSizing=function(){e(".datawrapper > iframe, .easychart > iframe").each(function(){var t,i=e(this),n=["height","width"];for(var a in n)t=n[a],i.attr(t)&&i.css(t,i.attr(t))})},t.subnav={isMinimized:!1,element:null,initialize:function(){// We don't initialize if there is no need to minimize the sub nav
// We don't initialize if there is no need to minimize the sub nav
// Handle subnav for the first time
return t.subnav.element=e(e("#subnav").find(".menu")[0]),t.subnav.isMinimizable()===!1?!1:(t.subnav.handle(),void e(window).resize(function(){t.subnav.handle()}))},/**
     * We call the proper handle function on the document element's width
     */
handle:function(){e(document).width()<=979?t.subnav.handleReset():t.subnav.handleMinimize()},/**
     * Handle the logic when the window is resized from mobile view to desktop view
     * Returns false if nothing was changed otherwise returns true
     */
handleReset:function(){// If it isn't currently minimized we do bother with the rest of the code
if(t.subnav.isMinimized===!1)return!1;var i=e(t.subnav.element.children("#main-menu-more-item")[0]),n=e(i.children(".dropdown-menu")[0]);// flag the nav as not-minimized
// avoid having the menu blink when widening the window's width
return n.children().appendTo(t.subnav.element),t.subnav.element.addClass("menu-overflow-hidden"),i.addClass("hide"),t.subnav.isMinimized=!1,!0},/**
     * Handle the logic when the total width of the nav items is wider than the actual navigation
     */
handleMinimize:function(){// If it has already been minimized we don't bother processing the rest of the code
if(t.subnav.isMinimized===!0)return!1;var i,n=e(t.subnav.element.children("#main-menu-more-item")[0]),a=e(n.children(".dropdown-menu")[0]),o=t.subnav.element.children("li:not(.dropdown)").toArray(),r=t.subnav.element.width()-n.outerWidth(!0),s=t.subnav.getItemsTotalWidth();// Carve down into the items total width until it fits in the subnav available width
do i=e(o.pop()),s-=i.outerWidth(!0),i.prependTo(a);while(s>r);// flag the subnav as minimized
// avoid having the menu blink when widening the window's width
return n.removeClass("hide"),t.subnav.element.removeClass("menu-overflow-hidden"),t.subnav.isMinimized=!0,!0},/**
     * Returns the total width of all items of the subnav except the more button
     */
getItemsTotalWidth:function(){var i=0;// sum all item sizes (excludes more button)
return t.subnav.element.children("li:not(#main-menu-more-item)").each(function(t,n){// If we hide an element in the nav then we shouldn't count it in
"none"!==e(n).css("display")&&(i+=e(n).outerWidth(!0))}),i},/**
     * Returns true if the nav should be minimized otherwise returns false
     */
isMinimizable:function(){var e=t.subnav.getItemsTotalWidth();// If the subnav is wider than the total width of the items then
// we don't need to go further in the code
// If the subnav is wider than the total width of the items then
// we don't need to go further in the code
return t.subnav.element.width()>e?!1:!0}},t.init=function(){this.loadMore.init(),this.modifyTweets(),this.toggleSideMenus(),this.toggleVideo(),this.arrangeNavigation(),this.relocateModals(),this.tweetableQuotes(),this.subnav.initialize(),this.iFrameSizing()},t}(jQuery);jQuery(document).ready(function(){GAZ.init(),jQuery.receiveMessage&&jQuery.receiveMessage(function(e){jQuery("iframe.autosize").css({height:e.data})})});;
!function(t,n){"use strict";// GAZ is defined in gazebo.js is loaded very early on so
// it will not break the original code.
// gazebo.js is only included in the customer facing pages
// while this file is included everywhere.
// You can expect the following function to be accessible
// anytime unless your JS file is included before this file.
var e=t.GAZ||{};/**
   * Html escaping from hogan.js
   */
e.hoganEscape=function(t){var n=/&/g,e=/</g,r=/>/g,i=/\'/g,a=/\"/g,l=/[&<>\"\']/;return t=String(null===t||void 0===t?"":t),l.test(t)?t.replace(n,"&amp;").replace(e,"&lt;").replace(r,"&gt;").replace(i,"&#39;").replace(a,"&quot;"):t},e.loadDrupalSettings=function(){var t=n("#drupal-settings");if(t.length>0){var e=n.parseJSON(t.html());jQuery.extend(Drupal.settings,e)}},e.initializePrintButton=function(){n(".btn-print").click(function(n){n.preventDefault(),t.print()})},//Get a parameter value from the URL
e.getUrlQueryParamValue=function(n){var e,r,i=t.location.search.substring(1),a=i.split("&");for(e=0;e<a.length;e++)if(r=a[e].split("="),r[0]==n)return r[1];return!1},// moved here from init so Drupal.settings are available during page load
e.loadDrupalSettings(),n(document).ready(function(){e.initializePrintButton()}),t.GAZ=e}(window,jQuery);;
