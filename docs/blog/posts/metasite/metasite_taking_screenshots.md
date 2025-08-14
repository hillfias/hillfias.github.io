---
date:
  # created: 2025-03-01
  # updated: 2025-03-01
  created: 2025-02-10
  updated: 2025-02-10
tags:
  - screenshots
  - javascript
authors:
  - William Fuchs
slug: showcase-wesbite-screenshots-url
description: Take screenshots of your webpages in seconds rather than minutes! In this article I'll explore how to get repeatable and clean screenshots with the push of a button. This includes a bit of Javascript, tailored specifically to the Material for MkDocs theme, but adaptable for you needs, to include the URL at the top of the website, so that it gets captured in the screenshots.
links:
  - Metasite - First Steps: blog/posts/metasite/metasite_first_steps.md
---

# Clean Screenshots of Your Website Including URLs
For the second article of this series, [Metasite - First Steps], I wanted to take a lot of screenshots of both the desktop view and the mobile view, to showcase the blog plugin. More particularly, what I found was missing, and what I disliked. This entailed a large number of screenshots. At first I was taking screenshots manually with the ++print-screen++ key, which was very time consuming if I wanted something clean: i.e. to get exactly the same dimensions for every screenshot:
<!-- more -->

![An example of taking a screenshot of Firefox mobile view of a website, under Windows via the Greenshot software](/assets/images/metasite_taking_screenshots/taking_screenshot_dark.png#only-dark){ loading=lazy }
![An example of taking a screenshot of Firefox mobile view of a website, under Windows via the Greenshot software](/assets/images/metasite_taking_screenshots/taking_screenshot_light.png#only-light){ loading=lazy }
/// caption
///

You can also see by toggling the light/dark theme button next to the search bar at the top of your screen that the screenshot magically adapts to your current theme. It's not magic. I have to take screenshots twice, and toggle the theme. There is no skipping that step if I want to provide that feature, which I think is kind of neat (otherwise you get screenshots that blow your eyes up if you're using a dark theme and you suddenly have some very bright colors on an image, and vice-versa, reading some grey on black text in a screenshot when the rest of the screen is a bright white isn't the best idea for your eyes).

But that means twice the number of screenshots, twice the number of careful adjustements with my mice to really get those dimensions down to the pixel. This isn't the only thing imperfect. Atop the size of the screenshot itself (which, here, is a 518 x 582), there would be some slight differences depending on where I start my capture. You can toggle the theme, once again, and see that it's imperfect here. There's a slight shift from one screenshot to another. Of course, nothing anyone would notice. You're running one theme at a time, not having fun toggling the button every image you see.

There's more though! What's really bugging me for my showcasing is that the URL isn't complete. I'm using Firefox's mobile view via developer tools (++right-button+q++ to see the full developer view, or ++ctrl+shift+m++ to toggle the _Responsive Design Mode_) to have a mobile view. I want my screenshots to focus on the website being displayed. But I'd also like the URL (otherwise there's no telling which menu you're exploring if there's no or little difference between two web pages, which happens). If that window in the above screenshot were full screen, of course I'd see the full URL; but my screenshot would be huge, with a log of uninteresting space.

The other solution would be a quick post-processing in paint: one screenshot of the mobile view, another of the URL bar, stack them one on top of the other. That's **a lot** of manual work.

An icon caught my eye at some point, it's a camera icon. You can see it on the top right in the above screenshot, right next to the gear. This is the graal. I can take pictures of the entire page, or just the portion that's being displayed. This really streamlines the process. What's more, the pictures are high definition: a screenshot of my 360 x 500 mobile view becomes a full-blown 1440 x 2000. This has some drawbacks: heavier pictures, which will take more time to load, and which I'll resize to 360 x 500 anyway. But I love the idea of high definition pictures for stupid screenshots. I'm a moron.

Anyway, this little camera fixed all my issues except one. I could take a bunch of screenshots of different views in seconds, instead of minutes before. But I still didn't have the URL showing up. I looked around, this doesn't seem to be a feature anyone's interested in. It wasn't implemented in Firefox's toolkit, neither in Chrome's. I want my URL showing up.

So I added a bit of JavaScript to the website. I have an annoucement text, in case you haven't noticed. This text disappears for all future visits once you've seen it and dismissed it. It's also at the top of the screen, the perfect place to display a URL. A URL is dynamic though, it changes on every page, right? I can't just _hardcode_ (the act of writing a _litteral_ in the code) the URL in the annoucement bar. Otherwise I'd have to edit the code to put the correct URL for my next screenshot, and we're back to a cumbersome process that takes ages. That's why I needed JavaScript. You can easily get the URL from the current page, parse it to remove the localhost, or 127.0.0.1 or whatever IP or domain is showing up for your local development server, and replace it with your website domain.

``` Javascript
window.onload = function() {
  URL = window.location.href.toString().split(window.location.host)[1];
  el = document.querySelector('[data-md-component="announce"]');
  el.innerHTML = "  https://william-fuchs.com"+URL;
  el.classList.add("md-typeset");
  el.classList.add("center");
  el.removeAttribute("hidden");
  el.setAttribute("style", "font-size: 0.7rem;")
}
```

This reads as: when the browser loads the content, take the URL of the current page, and split of the first part which corresponds to the _host_ (http://127.0.0.1/), and keep the second part in the **URL** variable.
Next I need to hack my annoucement bar. I inspect the content of my page (again, ++right-click+q++) and see that it doesn't have any id attribute (which uniquely identifies elements on an HTML page). Thankfully it has a unique attribute - value combination so the theme can recognize it and correctly configure it. I use that attribute - value combination `#!javascript data-md-component="announce"` to select that element, which I assign to the variable `#!javascript el`.

Oh, and just so you know, I had no idea how to do that, and will forget that immediately when I'm done. I don't need to commit this to memory. If I used those functions every day, I'd know them by heart. But since I don't, I don't need to know them by heart. The power of the developer lies in the searching skills. And understanding. If you know what is possible (I want to select an element in the DOM, I want to add an attribute, remove an attribute...); you don't need to remember anything, you're one search away from the line of code that does what you want. And all that was before the advent of GenAI... Which I won't delve into here.

I edit the innerHTML, i.e. what was contained in that annouce bar, to replace it with my URL. I style it by adding some classes I've seen the theme use on paragraphs, so it still reacts to theme changing from light to dark. I make it centered, that's nicer. Choose an appropriate font-size so that even my long URL in one of the pages I want to demo fits in one line, and finally I remove the hidden attribute which the theme uses to hide the annoucement bar once you've dismissed it.

It's quick, and dirty. A complete hack. But I can now take some screenshots to showcase the nice views of the blog plugin. And rant on what seems ugly and completely non-sensical to me.

The biggest issue in all of this is the time it took to write this article. I didn't take my screenshots yet! This Metasite series is getting super-meta! There's an infinite recursivity if I want to document how I do things to write the articles that explain how I did things. Oh well, this was fun. Hope you enjoyed the read.

Oh, what? You want to see the results right here rather than going on to read [Metasite - First Steps]? Alright, alright, you're right, I write on the right of rye all dry in the night. Here's the result of our endeavours:

![An example of taking a screenshot of Firefox mobile view of a the blog index page of this website, via the means described in this article.](/assets/images/metasite_taking_screenshots/blog_showcase_mobile_dark.png#only-dark){ loading=lazy, width="360" }
![An example of taking a screenshot of Firefox mobile view of a the blog index page of this website, via the means described in this article.](/assets/images/metasite_taking_screenshots/blog_showcase_mobile_light.png#only-light){ loading=lazy, width="360" }
/// caption
///

[Metasite - First Steps]: metasite_first_steps.md

<!-- acronyms -->
*[DOM]: Document Object Model. This represents the web page structure.