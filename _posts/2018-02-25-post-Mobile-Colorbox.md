---
layout: single
title: "Mobile Colorbox"
permalink: /2018-02-25-post-Mobile-Colorbox/
date: 2018-02-25 15:16:01 -0600
last_modified_at: 2018-02-28T12:42:38-04:00
search: true
author: Donald Boulton
author_profile: true
tags:
  - Colorbox
  - Mobile Colorbox
category:
  - Programing

toc: true
toc_label: "Page Contents"
toc_icon: "file"

read_time: true
comments: true
share: true
related: true

excerpt: "I use colorbox in my ASP.Core2 apps. 
Alot of developers still do in their applications"

header:
  image: /assets/images/pages/svg/colorbox-html-1400.png
  teaser: /assets/images/pages/svg/colorbox-html-1400.png

gallery:
  - url: /assets/images/pages/svg/colorbox-html-1400.png
    image_path: /assets/images/pages/svg/colorbox-html.png
    alt: "Colorbox HTML"
  - url: /assets/images/pages/svg/colorbox-800.png
    image_path: /assets/images/pages/svg/colorbox.png
    alt: "Colorbox Images"
  - url: /assets/images/pages/svg/colorbox-logon-800.png
    image_path: /assets/images/pages/svg/colorbox-logon.png
    alt: "Colorbox Logon"
---

{% include octo-arm.html %}

### Mobile First Colorbox

Mobile First Responsive Colorbox Window to open a link, div, code, about anything. Including a iframe using external data.

Using the provided code works with, Jquery 3.3.2 and Bootstrap 4 beta 3.

Colorbox if you have not used it was created by [Jack Moore](http://www.jacklmoore.com/colorbox/)

I created a colorbox window for ASP.Net Core 2 app. On most Phone and Tablets, no matter the orientation Colorbox was way to small about 40% of the view.

On orientation change it flickered and tried to change sizes several times.

I searched around and found similar posts and came up with a small addition to the Initialization of colorbox.

Colorbox now is working perfect on my Android and some other phone's I have tried. It now makes the colorbox windows 90% of the view on a normal website, and 90% on mobile.

I am building Mobile First sites now and it way to easy with Core 2 framework, with a Mobile First Agency Theme based on Bootstrap 4 beta 3 using colorbox for some internal views.

#### Click to open the Page Code block or anything in a Colorbox Window.

To use the Colorbox window by clicking a link that uses a class as class="inline" and link it to the div with href="#profiles"</div>

```html
<a class="inline" href="#profiles" title="Colorbox">Click to open in a Colorbox Window.</a>    
```
Hide Content in a hidden div class="hidden"

The css for hidden
```css
.hidden{display:none}
```
The link is to a div with id="profiles"
Add Colorbox Content in the div with profiles

### The Inline Code for inline code.

```javascript
$(".inline").colorbox({
    inline: !0,
    width: '100%',
    rel: 'proflex'
});
$('.inline_content').on('click', function() {
    $.fn.colorbox.prev()
});
$('.inline_content').on('click', function() {
    $.fn.colorbox.next()
});
```

Below is the changed javascript  with additions highlighted.

#### The Javascript

```javascript
  $(".group1").colorbox({
    rel: "group1"
  });
  $(".group2").colorbox({
    rel: "group2",
    transition: "fade"
  });
  $(".group3").colorbox({
    rel: "group3",
    transition: "none",
    width: "80%",
    height: "80%"
  });
  $(".group4").colorbox({
    rel: "group4",
    slideshow: true
  });
  $(".ajax").colorbox();
  $(".youtube").colorbox({
    iframe: true,
    innerWidth: 640,
    innerHeight: 390
  });
  $(".vimeo").colorbox({
    iframe: true,
    innerWidth: 500,
    innerHeight: 409
  });
  $(".iframe").colorbox({
    iframe: true,
    width: "80%",
    height: "80%"
  });
  $(".inline").colorbox({
    inline: true,
    width: "80%"
  });
  $(".callbacks").colorbox({
    onOpen: function () {
      alert("onOpen: colorbox is about to open");
    },
    onLoad: function () {
      alert("onLoad: colorbox has started to load the targeted content");
    },
    onComplete: function () {
      alert("onComplete: colorbox has displayed the loaded content");
    },
    onCleanup: function () {
      alert("onCleanup: colorbox has begun the close process");
    },
    onClosed: function () {
      alert("onClosed: colorbox has completely closed");
    }
  });
  $(".non-retina").colorbox({
    rel: "group5",
    transition: "none"
  });
  $(".retina").colorbox({
    rel: "group5",
    transition: "none",
    retinaImage: true,
    retinaUrl: true
  });
  $("#click").click(function () {
    $("#click").css({
      "background-color": "#f00",
      color: "#fff",
      cursor: "inherit"
    }).text("Open this window again and this message will still be here.");
    return false;
  });
  var resizeTimer;
  //Mobile Resize Function
  function resizeColorBox() {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (jQuery("#cboxOverlay").is(":visible")) jQuery.colorbox.resize({
        width: "90%",
        height: "90%"
      });
    }, 300);
  }
  jQuery(window).resize(resizeColorBox);
  window.addEventListener("orientationchange", resizeColorBox, false);
```

{% include gallery caption="Colorbox HTML, Colorbox Images, Colorbox Logon." %}