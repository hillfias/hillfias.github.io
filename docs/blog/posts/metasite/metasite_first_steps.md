---
date:
  created: 2025-02-23
  updated: 2025-02-23
tags:
  - mkdocs-material
  - blog
  - vscode
  - yaml
  - meta
authors:
  - William Fuchs
slug: mkdocs-material-first-steps
description: This article treats about my endeavors as I delve into the world of Static Site Generators, and more specifically, mkdocs-material.
subtitle: highly recommended read!
icon: material/bird
status: new
---

# The Metasite - First Steps
[We've seen our site born](metasite_birth.md), it is now time to see it take its first steps.
<!-- more -->

!!! danger "Draft"
    This is still a work in progress. I advise waiting for the article to be finished. But it's there. If you're the kind that can't wait. And want a taste of it. It needs a great overhaul since I started writing it before [The Metasite - Birth](metasite_birth.md).

!!! warning "Some notes for myself, for what's left to write here at the beginning"
    - Mkdocs-material, initial readings of the documentation. The frustration with the blog plugin. The philosophy behind the blog definition that I don't like etc.
    - And then, the building of the different pages start, which is what I started describing below :)
    - talk about the table and other features used for the first article. And finally build the support page and finish talking about it.


## I Need A Plan: Beg For Money

After reading most of the documentation, it was time to actually start working on this blog. From here on out, it's learning by doing.  
Because the documentation is extensive. There's no digesting that in one shot and being able to perfectly recall everything, every configuration, all the markdown extensions etc.  

Anyhow, after playing a bit with the site, imagining how I wanted to organize things, I decided to start very simple.  
I have one very nice article, that is in big part already written: the QNAP NAS QTS to QuTS Hero migration. Which includes a lot more than that. However, before attracting billions of visitors that will venerate my skills at gleaning information from other competent parties and synthesizing it; I gotta do some groundwork, you know. Like, imagine you were visiting before the [Support Me](/support_william_fuchs/) existed. You'd be among billions painfully wondering how to give me your money. 

So, I had a home page that was in dire need of editing, since nobody wants to read the defaut mkdocs-material [home page](https://github.com/mkdocs-material/create-blog/blob/main/docs/index.md). I did that laying out my objectives:  

- write this article you're currently reading - priority one. I want to document this experience as I go.  
- finish my article on NAS migration  
- revamp the home page

But like I told you, I quickly changed my priorities to start on seemingly smaller pages: the [Support Me](/support_william_fuchs.md) and the [About Me](/about_william_fuchs.md). The former, I've already explained how crucially important it was to siphon as much as possible all the riches in the world to fulfill my burning ego-maniac power-hungry primal territorial desire to conquer and rule the universe. For the benefit of all. I'm the good guy here, come on. But in order to be elected dictator of the universe with 100% votes, I first need to conquer your hearts, my friends. Because I shall not rule by fear. I will rule with love. And in order to do that, and give some credibility to this site, inflate its ranks, alongside my ego, I need to write a narcissitic self-essay on how I am the best at what I do: an _[About Me](/about_william_fuchs.md)_ page.

This will unfortunately bring me the attention of countless head hunters whom will try to monopolize my time for their growing monopoly, offering wages of tens of thousands of euros, net of tax, per month. Full remote. This is a risk I will have to take. I'm taking one for the team.

So my plan has already drifted from the one I laid out in my home page. But that's all right. I'll just quickly do those two pages, and then I can move on the Metasite's first article.

Writing the first page started easily: I used all the reverse psychology tricks I've been taught during my most innocent childhood as I was raised to be a spy by a network of underground agents for a program called PRODIGY. Classified top secret. That's the highest level of of classified information; I just looked it up to verify. __However__, writing two paragraphs to say "don't give me your money if you can't spare it" and "Oh thank you for your support" was the easy part. I now had to tackle the hard part. I wanted to give you guys as many options as possible to give your money to me. Just give me your money. After doing a little detour on the internet, it came down to the following ideas:

- **PayPal**: that one is easy. Just wire it to me directly. Everyone knows PayPal. Everyone has an account. Easy. However, that's probably going to be a one-time donation. It's going to be hard to get repeat customers that way. Oh, and by the way, I just had a look at their January 9<sup>th</sup> update. Here are the Consumer Fees ([\[FR\]](https://www.paypalobjects.com/marketing/ua/pdf/FR/fr/consumer-fees-010925.pdf)/[\[EN\]](https://www.paypalobjects.com/marketing/ua/pdf/FR/en/consumer-fees-010925.pdf))  
    (ahem, ahem, yeah; I __know__, why would I expect anyone to read French, right? Anyway... Now you have discovered my true identity as a Frenchman... I will no longer be able to puppeteer the geopolitical landscape from within the shadows of the depths of the abyssimal living condition discrepancies we currently have on the world stage right now)  

    Where was I? Oh right, the PayPal consumer fee changes. When you donate money to me, it's considered as if I sold something to you. Bastards.  

    ??? quote
        _When you buy or sell goods or services, make any other commercial type of transaction, send or receive a **charity donation** or **receive a payment when you “request money” using PayPal**, we call that a “commercial transaction._  

    This means they'll take some fees on top of conversion fees. Those fees are outlined here in the Merchant Fees ([\[FR\]](https://www.paypalobjects.com/marketing/ua/pdf/FR/fr/merchant-fees-010925.pdf)/[\[EN\]](https://www.paypalobjects.com/marketing/ua/pdf/FR/en/merchant-fees-010925.pdf)). Anyhoo, that's one way to give me money that I figured out pretty quickly.

- The second thing I immediately thought of was **Patreon**. And, since on Patreon you offer things in return for your subscriptions, to attract people into higher tiers, this is considered as outright selling services. Therefore, taxable. Here are the documents on how to declare that ([\[FR\]](https://support.patreon.com/hc/fr-fr/articles/21712170817293-Introduction-%C3%A0-la-d%C3%A9claration-de-revenus-DAC-7)/[\[EN\]](https://support.patreon.com/hc/en-us/articles/21712170817293-EU-Creator-Introduction-to-income-reporting-requirements-DAC7)), alongside a [FAQ](https://support.patreon.com/hc/en-us/articles/360047578411-EU-Creator-Frequently-Asked-Tax-Questions). Like everything else regarding this mess of having to give money when you earn money, and it's not your employer that does it because you're the employer, it will be specific to France / EU, since that's where I live. But I'm sure you can do a google search to find the relevant laws, regulations etc. for your precise country.  

    However, that still doesn't cover everybody, does it? What other platforms are there? This was quickly transforming into a case study, as I usually do. Always the same shit with me.  

    So, PayPal for quickies, Patreon for long-term subscribers, building a community and having some sort of social interactions and giveback.

- What people don't belong to either of the previous categories? People that pay via **Bitcoin** of course!  
I'm going to be honest, because the rest of the time, when I don't say those few magic words, I just lie through my teeth: I have no idea who would pay Bitcoin to support me. But the option's there. I decided. It's not actually there right now, at the time of writing; but it's in the pipeline.
- Then I researched the Patreon alternatives. I landed on some alternatives that didn't really suit my use case. If you're really interested in that study, I'll do a separate article; because this really isn't what I wanted to talk about at first. I mean, I layed my ass down to speak about grids, buttons and CSS when I started this evening. Ok, quickly, I considered:
    - **GitHub Sponsorship** (still need to research a bit that one; but after all... the site is opensource on GitHub)
    - **Buy Me a Coffee**
- To end, there's **Youtube** and **Twitch**, on which I intend to be more in the future, that have integrated forms of payments.

Ok. Finally. We're there.

## Hacking The Matrix
### A Grid of Buttons
At this point in time, I have a list of some payment options I'd like to display, but without anything actionable behind the scenes. We'll see that later.

It's time to hack the mkdocs-material framework. Get our hands dirty. Because it's not providing right out of the box what I want.  
It provides [grids](https://squidfunk.github.io/mkdocs-material/reference/grids/). That is truly awesome. Love it. Slick. Sober. Clean. Love it.  
And it provides [buttons](https://squidfunk.github.io/mkdocs-material/reference/buttons/). 

I display my grid of payment forms (here I'm going to have fun and for the first time discover [code blocks](https://squidfunk.github.io/mkdocs-material/reference/code-blocks/), syntax highlighting etc. Exciting moment right here!!):
<div class="grid" markdown>
``` markdown title="Payment options displayed in a Grid"
<div class="grid cards" markdown>

- [:fontawesome-brands-paypal:{ .paypal  } __Paypal__](https://google.com)
- [:fontawesome-brands-patreon:{ .patreon } __Patreon__](https://google.com)
- [:fontawesome-brands-bitcoin:{ .bitcoin } __Bitcoin__](https://google.com)
- [:simple-github: __GitHub Sponsorship__](https://google.com)
- [:simple-buymeacoffee:{ .buymeacoffee } __Buy Me a Coffee__](https://google.com)

</div>
```
<div class="grid cards" markdown>

- [:fontawesome-brands-paypal:{ .paypal  } __Paypal__](https://google.com)
- [:fontawesome-brands-patreon:{ .patreon } __Patreon__](https://google.com)
- [:fontawesome-brands-bitcoin:{ .bitcoin } __Bitcoin__](https://google.com)
- [:simple-github: __GitHub Sponsorship__](https://google.com)
- [:simple-buymeacoffee:{ .buymeacoffee } __Buy Me a Coffee__](https://google.com)

</div>
</div>

Ok, I'll admit, this was a testbed for [content tabs](https://squidfunk.github.io/mkdocs-material/reference/content-tabs/) as well. But I wanted to fully exploit grids to show you the results side by side. Except that, however large your display is, the payment options all stack on top of each other. On my screen at least (mine is already 1440px, but maybe they wouldn't be with a 1080p monitor?). And definitely on mobile. On mobile you'll actually see the code block stacked atop the rendering.

Let's give you this again with tabs this time, to switch from the code to the rendering:

=== "Code"

    ``` markdown title="Payment options displayed in a Grid"
    <div class="grid cards" markdown>

    - [:fontawesome-brands-paypal:{ .paypal  } __Paypal__](https://google.com)
    - [:fontawesome-brands-patreon:{ .patreon } __Patreon__](https://google.com)
    - [:fontawesome-brands-bitcoin:{ .bitcoin } __Bitcoin__](https://google.com)
    - [:simple-github: __GitHub Sponsorship__](https://google.com)
    - [:simple-buymeacoffee:{ .buymeacoffee } __Buy Me a Coffee__](https://google.com)

    </div>
    ```

=== "Rendering"

    <div class="grid cards" markdown>

    - [:fontawesome-brands-paypal:{ .paypal  } __Paypal__](https://google.com)
    - [:fontawesome-brands-patreon:{ .patreon } __Patreon__](https://google.com)
    - [:fontawesome-brands-bitcoin:{ .bitcoin } __Bitcoin__](https://google.com)
    - [:simple-github: __GitHub Sponsorship__](https://google.com)
    - [:simple-buymeacoffee:{ .buymeacoffee } __Buy Me a Coffee__](https://google.com)

    </div>

You'll also notice how the content tabs below change in synch with the one above. They are linked!  
We've fooled around a bit, that's all fun and games. Now back to the main subject. If you hover over the payment options in the grid, you'll see a nice effect. But only the text (and icon) are clickable.  
That's not really what I want. I'd rather have the entire.... _button_... clickable... That's it!! I want buttons!  

=== "Code"

    ``` markdown title="Payment options as buttons!.. In a Grid"
    <div class="grid cards" markdown>

    - [:fontawesome-brands-paypal:{ .paypal  } __Paypal__](https://google.com){ .md-button }
    - [:fontawesome-brands-patreon:{ .patreon } __Patreon__](https://google.com){ .md-button }
    - [:fontawesome-brands-bitcoin:{ .bitcoin } __Bitcoin__](https://google.com){ .md-button }
    - [:simple-github: __GitHub Sponsorship__](https://google.com){ .md-button }
    - [:simple-buymeacoffee:{ .buymeacoffee } __Buy Me a Coffee__](https://google.com){ .md-button }

    </div>
    ```

=== "Rendering"

    <div class="grid cards" markdown>

    - [:fontawesome-brands-paypal:{ .paypal  } __Paypal__](https://google.com){ .md-button }
    - [:fontawesome-brands-patreon:{ .patreon } __Patreon__](https://google.com){ .md-button }
    - [:fontawesome-brands-bitcoin:{ .bitcoin } __Bitcoin__](https://google.com){ .md-button }
    - [:simple-github: __GitHub Sponsorship__](https://google.com){ .md-button }
    - [:simple-buymeacoffee:{ .buymeacoffee } __Buy Me a Coffee__](https://google.com){ .md-button }

    </div>

Ok, not exactly what I imagined. Let's remove the grid:
=== "Code"

    ``` markdown title="Payment options as a list of buttons!.."

    - [:fontawesome-brands-paypal:{ .paypal  } __Paypal__](https://google.com){ .md-button }
    - [:fontawesome-brands-patreon:{ .patreon } __Patreon__](https://google.com){ .md-button }
    - [:fontawesome-brands-bitcoin:{ .bitcoin } __Bitcoin__](https://google.com){ .md-button }
    - [:simple-github: __GitHub Sponsorship__](https://google.com){ .md-button }
    - [:simple-buymeacoffee:{ .buymeacoffee } __Buy Me a Coffee__](https://google.com){ .md-button }

    ```

=== "Rendering"

    - [:fontawesome-brands-paypal:{ .paypal  } __Paypal__](https://google.com){ .md-button }
    - [:fontawesome-brands-patreon:{ .patreon } __Patreon__](https://google.com){ .md-button }
    - [:fontawesome-brands-bitcoin:{ .bitcoin } __Bitcoin__](https://google.com){ .md-button }
    - [:simple-github: __GitHub Sponsorship__](https://google.com){ .md-button }
    - [:simple-buymeacoffee:{ .buymeacoffee } __Buy Me a Coffee__](https://google.com){ .md-button }

So... we have a list now... Yeah...  
This sucks!! I still want a grid, something responsive, that displays nicely regardless of the screen size or device... I just want the entire thing to be clickable!  

### It sucks to be stupid
After a bit of pain, because I'm **incredibly** stupid (you have no idea how much I've been slowed down by my complete idiocy - it's a feat to still keep going at this point... I have a funny anecdote on this, and since we're cut from the external world, time, and space, being within those sweet, comfortable, friendly parenthesis, I might as well tell you here: I went through the hardest academic path in France, post graduation. It's called "Classes Préparatoires", or literally, Preparatory Classes. But Prepare you for what?! Ok, ok, here's the full name: Classes Préparatoires aux Grandes Ecoles - CPGE. Yeah, you like some French?! :laughing:  

Let's carry over this parenthesis to the next line. So, that means those classes prepare you for higher level academia, in other schools. Such as, engineering schools. CPGE is the hardest thing I did in my life. I sucked at it. It's hard for most though. I really got humbled there. I really struggled; I had some very tough moments (given that it's easily 70h+ of work/week - and you're gambling your entire future on how well you do there - one might have a hard time every once in a while). This system is so hard that even though it's meant to be done in two years, a big portion of students take the second year a second time, to get a better chance during the competitive exams for schools, to get a better school.  

One evening - oh, yes, that's right, we worked on evenings. Let's take a quick detour. There are two parts to the competitive exam: a written one and an oral one. During the day we learned new things. During the evening, not everyday, but a few days a week, since all subjects must be covered regularly as the program goes on, we participate in humiliating half-hour oral exams. Humiliating if you're last of the class, like me. And after that you don't sleep, because you have homework to do. And on the weekend you can relax with written exams. Some weeks are harder than others. It's a three-year marathon. It's exhausting. But there's a lot of good that came out of it.  

I was saying, one evening, my maths teacher was quizzing me on the subject matter. I was writing down a demonstration I didn't know how to demonstrate. Surely. My memories are vague now (Yes, you write on a blackboard and justify as you go your reasoning). But I'll always remember his smile at that moment, after a tiring repitition of what I should have done for the n<sup>th</sup> time... He looked at me and smile. Him smiling wasn't always a good thing. He was kind of crazy unpredictable. But this time he looked at me, smiled, and said something along the lines of "How do you keep going?". It sounds bad the way I'm wording it right now. But basically, he was impressed by my will, my resolve, my inclination to pursue this road that was breaking all my bones with every step... With all the crapy things this teacher did, despite not being a bad lad, really; this moment is one I keep dearly - I'm a fucking pitbull bro :sunglasses:).

By the way, that's the beginning of the hard path. You can do that second year (usually taken as a third year) with a star! Yep, just add a fucking * in the name, and it means you're competing at even higher academic levels. And of course, different schools have different teachers and different expectations. There are much harder schools than the one I was in. Once you're done with that; there are multiple sets of competitive exams. To enter a given school, you have to score well on the exam that school is attached to. Here again, there are four levels, four different sets of schools attached to different exams: X-ENS (hardest exam, for clinically insane people - indeed you can start a career as a reasearcher, or professor, or both - insane I tell you), then Mines-Ponts/Mines-Télécom (still crazy hard, you can't even know), then CCP (still hard, but starting to be manageable) and finally E3A for suckers like me.  

I still joined an engineering school from the CCP bank of exam. Because I fucking rock ahaha.)

###  A Grid of Buttons - Round 2

What was I saying? Oh yeah, I'm incredibly stupid, and it took me some time to figure out the right way to get the grid occupied entirely by a button (how many hours have I lost coding because I forgot a space or a colon somewhere... please help me):

=== "Code"

    ``` markdown title="Payment options as a list of buttons occupying the entire grid!"

    <div class="grid center" markdown>

    [:fontawesome-brands-paypal:{ .paypal  } __Paypal__](https://google.com)
    { .md-button .card}

    [:fontawesome-brands-patreon:{ .patreon } __Patreon__](https://google.com)
    { .card .md-button}

    [:fontawesome-brands-bitcoin:{ .bitcoin } __Bitcoin__](https://google.com)
    { .card .md-button}

    [:simple-github: __GitHub Sponsorship__](https://google.com)
    { .card .md-button}

    [:simple-buymeacoffee:{ .buymeacoffee } __Buy Me a Coffee__](https://google.com)
    { .card .md-button}

    </div>

    ```

=== "Rendering"

    <div class="grid center" markdown>

    [:fontawesome-brands-paypal:{ .paypal  } __Paypal__](https://google.com)
    { .md-button .card .example}

    [:fontawesome-brands-patreon:{ .patreon } __Patreon__](https://google.com)
    { .card .md-button .example}

    [:fontawesome-brands-bitcoin:{ .bitcoin } __Bitcoin__](https://google.com)
    { .card .md-button .example}

    [:simple-github: __GitHub Sponsorship__](https://google.com)
    { .card .md-button .example}

    [:simple-buymeacoffee:{ .buymeacoffee } __Buy Me a Coffee__](https://google.com)
    { .card .md-button .example}

    </div>

You can see that the trick here is to not use the markdown _list_ shortcut option, and rather apply the class `#!css .card` to the block. The thing is... Despite the cursor being changed to a pointer, which is what the `#!css .md-button` class does, the only actually clickable part is, yet again, the text (and its icon). Still not the entire "button", or grid cell. Grr.  
That's one issue. The second issue is that the text, when hovering over the cell, stays the same color, the one it's been given when it's a normal link. A button, as you saw above, behaves differently. The text must change to white on hover.

To fix these two issues:

=== "Code"

    ``` CSS title="CSS Fixes"

    .md-button.card:not(.example):hover a{
        color: white;
    }
    .md-button.card:not(.example) a{
        display: block;
    }


    ```

=== "Rendering"

    <div class="grid center" markdown>

    [:fontawesome-brands-paypal:{ .paypal  } __Paypal__](https://google.com)
    { .md-button .card}

    [:fontawesome-brands-patreon:{ .patreon } __Patreon__](https://google.com)
    { .card .md-button}

    [:fontawesome-brands-bitcoin:{ .bitcoin } __Bitcoin__](https://google.com)
    { .card .md-button}

    [:simple-github: __GitHub Sponsorship__](https://google.com)
    { .card .md-button}

    [:simple-buymeacoffee:{ .buymeacoffee } __Buy Me a Coffee__](https://google.com)
    { .card .md-button}

    </div>

And you can try it yourself, it works!! Though the white color is hardcoded, so it's not the cleanest of solutions, say, if I were to change the color for all button texts upon hover. These would remain white...  
Let's review the fix: `#!css .md-button.card:hover a` reading right to left, this reads "select all the links, when hovering over elements that both have the `#!css .card` and `#!css .md-button` classes". The most astute among you will also notice that's not quite the code I pasted above: there's an extra `#!css :not(.example)` selector, which means "except the elements with the `#!css .example` class". I had to do this in order to showcase how the default behavior wasn't what I wanted.

The second fix is much easier: make all the links `#!css block`s. Done. It now occupies the entire cell. Almost, actually; there being some padding: 

![Showcases the grid cell, now turned button, with it's interior padding.](/assets/images/card_padding.png)
/// caption
///

If I really wanted to go deeper, I would transform the paddings done at the card level, and the padding done at the button level (see following code - automatically generated by the framework):

``` CSS title="CSS for grid card and button"

.grid > .card {
  border: .05rem solid var(--md-default-fg-color--lightest);
  border-radius: .1rem;
  display: block;
  margin: 0;
  padding: .8rem;
  transition: border .25s,box-shadow .25s;
}

.md-button {
  border: .1rem solid;
  border-radius: .1rem;
  color: var(--md-primary-fg-color);
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  padding: .625em 2em;
  transition: color 125ms,background-color 125ms,border-color 125ms;
}

```

Indeed, overriding the padding at the card level would only leave the padding property at the md-button level to take effect because no longer superseded by the card padding.  
Once those paddings are removed for these classes applying to my specific use case (i.e. for md-buttons within cards, but when there's only that in the card... which means another class would need to be created to avoid side-effects when buttons are put together with other content within a card), I would apply a `#!css margin` instead, so that it retains its form.

I'm good though.  
Something I can do however, right now, and just realized, is get my color right.  
You can see on the code above that colors are intelligently computed from the CSS [var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var), the mkdocs-material framework created a level of indirection here. This is what I need to get, except I want the variable used on hover of a button. It's possible to modify the state of the element that is being inspected (at least, on Firefox), to see its related properties when on hover, or active etc.:  

![Modify HTML element to hover on inspection tool to see related CSS properties for that state.](/assets/images/inspect_hover.png)
/// caption
///
Which gives...
![Display of CSS properties for button when on hover. One of which is the color, precomputed with the variable --md-accent-bg-color, which gives the hex code #fff, i.e. white color.](/assets/images/css_var_button_hover.png)
/// caption
///

I can now edit my previous CSS:  
``` CSS title="CSS Fix with the var()"

.md-button.card:not(.example):hover a{
    color: var(--md-accent-bg-color);
}
.md-button.card:not(.example) a{
    display: block;
}

```

## Payment Options - How do I actually do this shit?