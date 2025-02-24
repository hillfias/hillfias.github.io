---
date:
  created: 2025-02-14
  updated: 2025-02-23
tags:
  - mkdocs-material
  - site
  - vscode
  - yaml
  - meta
authors:
  - William Fuchs
slug: create-site-mkdocs-material
description: This article treats about my endeavors as I delve into the world of Static Site Generators, and more specifically, mkdocs-material.
subtitle: highly recommended read!
icon: material/bird
status: new
---

# The Metasite - Birth
First article of the Metasite, this is exciting. But what the heck is a Metasite?
<!-- more -->

## What's Meta? Are we talking about Facebook?
### How to scare away most readers 101
As my high-school philosophy teacher taught me, you must always start by defining your terms.

Yep, just so you know I'm a pedantic motherfucker; that's where I choose to start. It's my site! I do what I want!  
(ok, ok, you can just skip ahead if you're not awesome... no one will know...)

Metaphysics is the physics of physics. It's closer to philosophy in its nature, because it's a conversation about what physics could give rise to the physics we know. Physics that describe physics. It's completely out of our realm. I would say this is a subset of philosophy, that had intercourse with theology. I like it a lot. 

Metadata is the data of data. It's data that describes data. When was that data created? Updated? By whom? With what associated privileges? What's its size? (oh! :face_with_open_eyes_and_hand_over_mouth: )

The metagame, often just called the _meta_ is the game of the game. It's the game you play that's outside the game, strictly speaking, to analyze how the game should best be played. The metagame is about optimization, it's about research, it's about trial and error, statistical analysis, it's about coming up with strategies to **play** the _game_. And that's a game in itself, right?

!!! Question
    Uhm... Like... Couldn't you have just given the dictionary definition?

_Referring to itself or to the conventions of its genre; self-referential._ There! You happy?! You don't like my examples? Huh?  
Ok, you won. One more. Metamovies. Or shows etc. That's really fashionable these days. When we say "_Oh wow, this is getting meta!_" in the context of a movie, we don't mean the movie is talking about movies, or how to create them.  
What's often meant is that a step back was taken, far from the movie, or the scenario. And the character can just say "_Hey! That's not in the script!"_ - **That's _meta_**. It's as if something in the movie, happens outside the boundaries of the movie itself. The most usual example is "breaking the fourth wall", with characters directly talking to the audience. Ryan Reynolds, especially in Deadpool, is a very meta character. Or actor. I don't know anymore.  

However, more interesting meta can be seen in fucked up delusions like [Rick and Morty's train episode](https://www.imdb.com/title/tt10655686/). There, we go. That's free, unleached, raw creativity right there. Man, I love this show.

!!! Note
    A list of examples isn't a definition ya know... Like, give me a TL;DR next time, 'k?

Hey, hey, hey, look who's being an asshole now!  
(I have a multiple personality disorder, I'm just playing with myself - whoops :face_with_open_eyes_and_hand_over_mouth: - don't mind me)  
(also: do mind people that confuse multiple personality disorder with schyzophrenia. Mind those people. They might be dangerous.)

### Metasite
This site. Is a _Site_. (or is it? haha just kidding) About my **site**.
Through this site, I'd like to explore the birth of my site. Where the idea of creating a site originated, how it matured, how that idea was nurtured. And the trigger.

I'd also like to take you with me on an adventure. A technical adventure. Or and adventure of self-reflection, at times. Or just some more delirious non-sensical me. Often.  
By technical (yeah, let's just ignore the rest) I mean that this Metasite has the objectibe of describing how this site was _technically_ created.  
Ho yeah baby. You said it. We're gonna see some code samples. Ho yeah baby.

We're going to be talking SSGs, and more specifically, [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).  
You'll see that there's a bunch I love, and some things I really have an issue with. Which means we're going to do some coding in the opensource framework; there won't be going around that.

Before we get to that point in the story, let's take it back a notch, shall we? How did I get to creating a site? What pushed me?  
This is the site's

## Origin Story

To really understand my motivation, I guess we could take it back 18 years ago, when I first started programming in HTML and CSS.  
We're not going to really do that though, this isn't a memoire lol.  

However it's important to know that I've always had a lot of ideas, a lot of projects, both in the IT world with a bunch of cool apps I would have loved to develop, and outside of IT. Like, learning Japanese. I've trying to do that since 14 years old, something like this. Trying. Because I'm not really learning anything. It's all on and off; little sprints of motivations, sparks of light, here and there. Another _project_, if we were to define any hobby or objective as such, is learning how to play the guitar. Same shit as Japanese. What about all my ideas for apps you might ask? Well, I developed them. I developed _the ideas_. And after a bit of coding, seeing what I could do in a few hours, a few days, or weeks. I realized that my ideas, which I continue to develop, would take me years to fully implement.

That's the real issue. The sheer amount of time and dedication it takes to just _get results_. If one is too focused on the results part, they won't reach those results. Because one has to focus on the process.  
You don't become a body-builder by wishing you had big muscles. You become a body-builder by _building_. Your muscles. Over and over. Day in and day out. Until you reach your goals. Then you set more goals.  
**The Process**.

I'm a lazy fuck. And I compare myself to much better people than me, in whatever field I'm pursuing. I get easily discouraged. Or perhaps, in not so negative terms, my enthusiasm for so much subjects, arts, domains, spreads my motivation too thin to fully dedicate myself to any of them.

Do note that this is a way of viewing myself in a negative light, which is fuel I burn to propel myself to the heights I'm aiming for. There's plenty I did. If not on my personal objectives, I'm lucky to be really motivated (perhaps too invested at times, which can backfire) in my career, and getting rewarded for it. All the bosses I've had were delighted with my work. I take pride in the work I've done.  

_Buuuut_, my personal objectives aren't fulfilled. The first point was about the process, and motivation, and the numerous passions I have spreading me too thin. There's another component however: **compensation**.  
No, not financial compensation. Neurochemical compensation. I expect rewards for my efforts. I expect dopamine, otherwise I will no push further. That mindset has lead me to fail when I started streaming. I had a Twitch set up, a Youtube set up, I streamed some games of League of Legends. Nobody watched. Sometimes one or two anonymous viewers, which means no chat interactions. I still had a lot of fun doing it, because I generally don't play alone. I play with friends. But the aspect of streaming that makes it worth streaming, is streaming for people, and interacting with them. Which is why I stopped doing that.  

We can now fast-forward to 2024. The year of change. My life changed quite a bit, for the better. And today, in 2025, I have a lot of objectives that I wish to realize, one month at a time. This asks for motivation, which I do have, and a solid mindset, which I believe I also have now. I'll do a separate entry for my 2025 objectives, which are more fit for a _blog_ site. Ya know. Where someone says random shit about his life nobody gives a fuck about. Oh shit, that's kinda what I'm doing here as well, I have to be careful and give you some nice bits at some point. 

Back to 2024. Back to way before that. I've written a bit in my life. First of all, I really enjoy typing on my keyboard. Really. And I'll do a whole article on keyboards and layouts, and a video (that's the objective at least!). I've written some small essays, poetry, self-introspection stuff at key points in my life... What I enjoy most though, is reading technical things. That's basically what I do all the time. I am constantly learning. In IT, I believe that's the case for everyone. And I've surprised myself last year.

I attended an event where I heard multiple talks about different IT related topics, different technologies, processes etc. One of those talks was about writing documentation, something I did as part of my work, and kind of got famous for (I wrote a piece of art technical documenation, not long before, perhaps 2023). That talk presented some tools for just that - Antora with Asciidoc. Which I'm not using today. Yet? Haha.  

Oh, small detour. This reminds me that this was a subject I had explored before when starting one of my projects that I thought I would actually go through with. I started writing some code. But I need to put in place all the necessary tests, all the different kind of tests, to make sure everything is perfect. And I need a CI/CD so all the tests run automatically. I looked into GitLab. And I need a way to write technical documentation in a versioned way, just like code - documentation as code - because I forget everything! I need to write down my processes and what I do. Thankfully GitLab had an option - Wiki. And this, and that, and more and more surrounding objectives to get a fully functional enterprise-level pipeline to deliver code. I stopped the project, overwhelmed by all I would have to put in place. But I already had this idea of writing doc as code.

Back to 2024 with that event. I attended for free as part of my job. The trade was that I'd write a few lines to "give back". And those few lines transformed into more lines. Before I knew it, I was writing a full-fledged article, that is still not finished eight months later, but already estimated at 90min read. I surprised myself, because I both really enjoyed the process of writing, of researching for what I wrote when I didn't know something. Most of all, I was surprised to see how well I could enrich the talks I attended with the personal knowledge I'd gleaned over the years on different topics. I'm really happy about this piece I'm currently still writing!

That's kind of where it all started. I think this was a sort of trigger. It built up from the documentation I wrote a bit before. And all of this is now catalyzing all those ideas and projects and ambitions I've had since I was a kid! It takes time, but I enjoy it, so why not take the time to actually start building everything I ever wanted to build?  

The _actual trigger_ wasn't that though. The **actual trigger** that made me go "Ok, I'm building a site" is when I asked for help on Reddit regarding the migration of my QNAP NAS from QTS to QuTS Hero. I started writing a lot. This wasn't for work. I was writing an entire technical story of all the hurdles I faced. And then a clarification on ZFS, on ECC RAM, on deduplication... and basically a synthesis on all I read about when I fell into that migration rabbit hole. Except - ***fucking*** - Reddit made me retype some edits to my posts (yes, I was editing my post every night, not publishing something finished. My big bro didn't understand, he thinks I'm crazy), because hitting the save button just lost everything I typed!! This happened multiple times!! But I persevered, until a point where my edits just wouldn't work anymore. Maybe there's a secret hidden character limit or something. I tried for an entire evening different combinations of texts to see if there was a word triggering a filter that would reject my edit or something... Nothing.  

Extremely frustrated, I hinted at that super quickly while at work. A colleague laughed and asked "Why don't you start a site?"

## Motivation
Now you might be wondering: "So you're starting a site... to get one article online?"  
Yes!  
No...  
But yeah, essentially. Except that with that, once everything is set up, I can put more articles online. I can finally build a place, a "second brain" as I hear so often, to properly organize not only my thoughts, but also serve as a repository of all the knowledge and explorations I've done. Merging my thoughts with the links and sources that I summarized, with the websites, and books, and articles, and blogposts, and videos, and courses. Building a "second brain"; since I tend to forget things right after the task is done and conclusions have been reached. Moreover, having this online allows other people to benefit from the studies I do, from the fall I experience when I see a beautiful rabbit hole I do not hesitate to jump into.

You can see how this is building a great positive feedback loop. First of all, it incorporates "world checks". If I share what I do, hopefully I get feedback; which I can incorporate into my reflexions, my way of building knowledge and structuring it, but also ammend previous knowledge structures, enriching them thanks to people's feedbacks. It also avoids what I'd call "self-cannibalization". I coined that term during a depression; I've been depressed a lot in my life. I'm doing much better now. I'm fully healed. That term was meant to indicate what happens when you're alone with your thoughts with no inputs from the outside world: your thoughts start eating you. You "self-cannibalize". I guess we could use it derivatively for when you're alone with ideas that you nurture disconnected from the outside world. Or even when you are connected to the outside world, but just a small part of it, that reinforces your idea(s), without really adding anything, or substracting. Just reinforcement. That's the "echo chamber". That's the issue polarizing our society right now.

Opening a "site", rather, creating a website, is a way to open up about my projects, how to achieve my goals etc. And doing so in an open manner will allow me to learn from others thanks to their feedback. It's a positive feedback loop! We're in such a great place right now. Aren't you happy you're here? I'm happy you're here. You know, it's funny. Because we're not in the same room, at the same time. You could be on Mars, 256 years from now. We're completely disconnected, both spatially, and temporaly. There's a finite amount of space-time disconnecting our subjective cognitive experiences of "now". Yet, we're both here. You and me. In the same place, at the same time.

I drifted away there for a sec; sorry if you started tearing up. Back to the motivation for creating this website. You understood that it's an open door on the world, from my brain to your brains, and back into my brain. That it's a way of giving back and teaching all that I've learned over the years, and continue to learn, and explore. But it's also a way to connect, to socialize, to create a community, to have fun together (since I intend on streaming video games); but most of all: to find like-minded people. People that are intelligent, respectful, curious. That critize ideas, and have the audacity to critize themselves. Beautiful people.

There is one last reason, certainly not the least: accountability. I like viewing events as sums of energy. You know how when you invite a friend over, nothing planned, you didn't clean, you have no idea what you'll eat; nothing, you just invite a friend over, and you have fun. Those are great times. However, when you put more energy into thinking about the event, planifying it, which generally is only for events with more than two people, naturally (I'm thinking big parties / weddings), there's a lot of positive energy that comes out of the event. I like to think of emergence here. I like to imagine that such big events have a net positive energy outcome. That people get out more than what they've put in. That the sum of the energies used to come to the event, and to plan it, is exceeded by how happy people feel after the wedding / party. It's worth it. And I'm saying a lot of people, but if you're just your partner and yourself (yeah, in French we put ourselves after others, that's called being polite. We don't say "me and my partner", we say "my partner and I" - cultural shock ahaha), and you've put a lot of effort into organizing a nice evening, or planning a trip or whatever, it _should_ yield very nice memories. Unless your partner likes drama and fighting all the time. And you're retarded so you plan activities she won't actually appreciate. Otherwise it should yield very nice memories!!

**Accountability**. By starting this, I'm pushing one gear. And you guys are going to push all the other gears. This is going to push the machine forward. Once started, there's no going "eh; I'm too lazy, I'll just stop now". That unconcious thought that creeps in as you consciously tell yourself you'll "do this later". No, no, no. No sir (I'm talking to myself, I'm a _sir_, don't feel offended)! The great I initially pushed is now pushed by entire set of gears that keep it in motion; keeping the energy I need to put in, of course, in check. Because everything falls apart if I'm not pushing that gear myself. What I'm trying to say is that ***you*** will help me drive my projects home. ***You*** will help me keep motivated, engaged. ***You*** will make me accountable for what I do, in the sense that no projects should go unfinished. Nobody watching me stream? That's ok. It will come. Enjoy the process, enjoy the stream, enjoy making videos, enjoy learning, enjoy writing, enjoy writing scripts, enjoy the process. Give, for free, to the community. Find the people that appreciate what you do, reach out to them; attract them to your little corner of the internet, to your world, to your _community_. Talk, exchange, socialize. Feed the mind. Good vibes, people!! Aren't you loving this so far? I'm seeing a bright future ahead.

## How do I build this?
### Requirements & SSG
First off, what's "_this_"? What do I want to build? That's called **requirements**.  
Following the very simple reddit incident, my initial requirements were _extremely_ simple. I want something dead simple, a repository of documents. It doesn't need to be a fancy dynamic full-fledged web-application, with a newsletter system, and a shoutbox, a forum, a comment system, a member and login system (obviously) etc. No. I want something as frictionless as possible that allows me to put my document online so anyone can view it.

As opposed to dynamic websites, this is called a static website. On top of that, my initial requirements were similar to the simplicity I had on Reddit: being able to put something in bold, italic, put a title, different headers; add a link... I immediately thought Markdown. If you don't know what that is, it's basically like a "programming language", not unlike HTML (which is what is used to render web pages in a browser, supplemented by CSS and often-times JavaScript of course). It's a "_markup language for creating formatted text_". So when you write your text, if you use underscores, it'll appear in bold, or a double * and it'll be bold: `#!markdown _This_ is so **cool**!!` will give "_This_ is so **cool**!!".

It's really simple and allows doing very simple things. Exactly what I was looking for. Basically what you'd get from a Word document. 

From there, I quickly connected the dots with that talk I assisted to in 2024 regarding Antora and Asciidoc (because I actually regularly see that title in the long list of articles I'm writing to recap all the talks I assisted to; and this one was in my todo list, so I was reminded of it every time I had the opportunity to work on that). The rabbit hole opens, the study begins, welcome to SSGs.

A Static Site Generator, or SSG, is a framework that handles a lot of heavy lifting to provide some nice features. All I wanted was to host this simple text, this simple article for my NAS migration. But the idea of creating a site lead to the idea of a growing website, not a site, to host a lot more than a site post. SSGs are very often used in the world of technical documentation, on programming libraries, IT products, specifying their interfaces etc. This brings along a lot of nice features that I didn't know I needed: code blocks, syntax highlighting and much much more.

Here's the synthesis report (which is much nicer than the very plain word "summary", you'll agree I'm sure) of my study, and I'm not doing anything great or inventive or novel in my "studies". All I ever do is glean information on the internet, and synthesize it, i.e. summarize it. Let's take two more seconds on synthesis, which is often used with the definition of _producing a substance by means of chemical or biological reactions_. However, it also means _to put separate facts together to form a single piece of work_. Enough with the pedantic stuff (English isn't everyone's native language!... Or maybe I just love metalanguage conversations - and I could take you on an adventure, an exploration of how _synthesis_ came to both symbolize the creation of substances, chemical, biological, by assembling, making simpler component react; as well as the creation of ideas, texts, reports, assembling, or putting forth "reactions" between different facts, words, extracted from perhaps far-away fields / domain knowledge... But we're not going on that adventure).

So, I was saying. I synthesized a study on SSGs, mostly based on a lot of reading on Reddit, and Y Combinator (HackerNews) to see the different products, who actually uses them, and what they think of it. I based the structure of my study on Dewan Ahmed's article on [docs-as-code](https://www.dewanahmed.com/markdown-asciidoc-restructuredtext/) (I won't put all the sources regardinge all the different Reddit threads I read, but this article definitely deserves a mention). Before diving it, one more _essential requirement_ I had was that this all needs to be free. And **opensource**. I love opensource. You can just code to get the feature you're missing. Isn't that cool? You don't need to open a ticket and never get your feature because it's at the bottom of the bucketlist of the company maintaining some proprietary software you're using. Because you're feature is stupid simple, it'd take 5min to implement, and _nobody cares_. That's why it's not a priority. They ain't gonna make dem dollars on that bitch, if you catch my drift.

Opensource? You miss something, go ahead and tinker away you lovely Sunday tinkerer. No need to be an expert, no need to be a very experienced senior Software Engineer, specialized in search algorithms and optimization techniques for getting from $O(n^2)$ to $O(n)$. Nope. Just take your time, read a bit, do your research, see what does what, get familiar with the libs... Or if you simply want to change the font, tweak that single word in the code! Man opensource is the best. Why are we still on closed source... Ah, yes. Money. Greed. All that. Everything I'll do here will be free, and add-free, and opensource by the way. In exchange I'll beg for money with a page dedicated to that. We'll that later. Back to the SSG study.

Basically, there are two separate components to this study. Three actually, with the deployment and hosting.

### Markup Language

What Markup language do you want to use? There isn't just Markdown!

- [Markdown](https://www.markdownguide.org/) [md] - one of the most popular. But big drawbacks: it's not very well formalized, there are a ton of different _flavors_, a ton of extensions...    
Something else I looked at is the support of LaTeX. There's [an extension](https://www.readonlychild.com/site/math-latex/) that enables this, so we're good.  
If you don't know LaTeX, it's, as Markdown, or HTML, a markup language. This one has the reputation to enable nice markup of mathematical formulae, which is something I wanted as I expanded my ambitions and ideas of what I could bring to the world through this website. For example, from the mkdocs documentation itself: *The homomorphism $f$ is injective if and only if its kernel is only the singleton set $e_G$, because otherwise $\exists a,b\in G$ with $a\neq b$ such that $f(a)=f(b)$*. Let's see how this fits: $\cos x=\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k)!}x^{2k}$. <-- This is inline! It makes the line-height slightly bigger, naturally, to fit it all in; but nothing shocking.  
Really nice, right?

- [MDX](https://mdxjs.com/): This stands for Markdown + [JSX](https://react.dev/learn/writing-markup-with-jsx). JSX stands for JavaScript XML: it brings JavaScript and HTML together to form _components_. In the beginning, it was advised to seperate HTML and CSS. Though one could live with the other; it makes sense to separate HTML which takes care of the semantics ("this is a paragraph", "this needs to be emphasized", "this is a line break"...) of a document from how that document is displayed (thanks to Cascading Style Sheets - CSS). Moreover, CSS being its own file means a central place that will affect the style of all elements on all (HTML) pages of the site. Then entered JavaScript. This brought some extra functionnality, some client-side dynamicity in webpages. JavaScript was kept separate, in files that served different small functions. Now that we've entered the modern era, JavaScript is heavily used everywhere, and integral part of modern Frontend Development Frameworks. Pieces of JavaScript will only interact with precise pieces of HTML. This brings us to components. Components are small, self-sufficient, **reusable** javascript/html bits (JSX) that _compose_ your page, e.g. a _profile_ component which takes in some data like a profile picture, name, role in the organization, date that person joined, and transforms that data into a beautiful profile card that you can put anywhere you want on your website by simply calling upon that component and feeding it the raw data.

    MDX brings this power to Markdown. This is naturally more complex than plain markup languages such as Markdown, and requires not only knowledge of JavaScript, but also knowledge of a Frontend Development Framework. This is more reliable, customizable, powerful and brings a greater sense of freedom and control compared to plain Markdown where one would rely on extensions. MDX is ideal for Frontend developers familiar with Angular, React or Vue.

- [AsciiDoc](https://asciidoc.org/) [adoc or asc]: Also [supports LaTeX](https://docs.asciidoctor.org/asciidoc/latest/stem/). Contrarily to MD, it's complete, there's no flavor, or need for extensions to bring in support for something inherently missing. [This comparison](https://docs.asciidoctor.org/asciidoc/latest/asciidoc-vs-markdown/) makes this point very clear. Markdown is awesome in its simplicity, "_your instinct to choose Markdown is good_". However portability takes a hit given all the extensions and plugins you end up needing to support a lot of things you might need for your documentation / article / site post (e.g. tables, admonitions). This means that there's often a mix of HTML and even Javascript in MD documents, which is what we'd like to avoid. It's bad, it looks bad, it's really really dirty. You naughty naughty boy. girl. whatever.  
Believe it or not, I'm using MD to write this, presently, and we'll see why (spoiler: no good reason). So this explanation of AsciiDocs' superiority really resonates with me right now.  

    AsciiDoc already has [Asciidoctor](https://asciidoctor.org/), which isn't a full-fledged SSG, but can already process those documents and convert them to HTML5, or PDF, or formats compatible for reading on e-readers, like EPUB3. Pretty cool kit to have under your belt for free.

- [reStructuredText](https://docutils.sourceforge.io/rst.html) [reST or rst]: another markup language, mainly used in the Python (programming language) community (for technical documentation of Python libraries). Similar pros to AsciiDocs compared to Markdown.

### SSG
#### SSGs and Criteria
Now that we got a tour of markup languages, we'll take a tour of frameworks. Indeed, just like a web browser is equipped (understand, programmed) to render HTML web pages, you'll need "something" (a framework) to take in your md or adoc or rst documents and transform them into the HTML pages you'll be able to display on your website (this explanation is purposefully simplified).

If we summarize, based on markup languages:

- _reST_: **Sphinx**.
- _Asciidoc_: **Antora**.
- _MDX_: **Docusaurus**.
- _Markdown_: And then there's a bunch of options for markdown, which has the flaws we know, but the simplicity we love - **Hugo**, **Jekyll**, **VuePress**, **Material for MkDocs**...

We can extend that list. [A LOT](https://jamstack.org/generators/). That linked website lists 363 different SSGs. Some of the most popular ones won't even be mentioned here, because they don't fit the requirements of simplicity. For example, Next.js, Nuxt and Gatsby are mentioned in the top 6, but are all wrappers on frontend frameworks (React and Vue). I wouldn't exactly call those SSGs. The other 3 out of the top 6 were mentioned in my bullet points right above. There are countless others that I did not consider. I mainly based my list on a few threads I've read, which is not representative at all of how popular each SSG is. I however believe we have a pretty good set of SSGs to choose from. You'll see there are a few more than what I've mentioned above: one more for MDX - **Nextra**. Another one for a custom Markdown-based markup: **Markdoc**. Another one based on Vue, because I like Vue: The light-weight version of VuePress, **VitePress**. And a few more for plain markdown, that I've randomly heard of, **MdBook**, **11ty** and **Quarto**.

That last one is a bit of an exception. Quarto is really awesome! It can show dynamic data, graphs, etc. based on Jupyter notebooks (Python). I really like it, which is why it's in this list. But it really doesn't fit the bill of site-type low-complexity webpages I'm looking for. It's not my use-case, but it may be yours; take a look, it's really cool! On to the criteria now, before introducing an awesome table with those contenders side-by-side:

- **Markup Language**: that's an obvious one. You might already have a preference and want to constrain your decision to those SSGs. On my side I was still hesitating.

- **Complexity**: this won't appear in the table as it's subjective. Markdown is simpler than anything else. If you need to write very plain documents only. If you already develop with one frontend framework, perhaps continuing with and SSG based on that framework will be the simplest. Do you need/want to customize your website? You'll need to code. You'll need to use the templating mechanism of the framework. Complexity is the overarching criteria. I'll give you the other ones so you can choose for yourself.
s
- **Programmed in**: programming language of the framework. We just mentioned it. If you want to develop in the SSG framework, to customize your website a bit, in case you're the kind to be opinionated and don't like things as they're proposed - or you need to make it your own - or you need / want to tinker - because, hell, it's fun. Programming language is going to influence that quite a bit.

- **Templating**: This is a way to render data in HTML, thanks to a base template. This is what we alluded to a bit earlier, the useful bit that will "transform" your document (md, asc, rst) into and HTML web page to expose to the Internet. Just like the programming language of the framework itself; you won't need to interact with those templates. Thankfully. But you might want to, to tweak a bit the appearance of your site. So if there's one you already know or are more comfortable with...

- **Popularity**: the more popular a framework is, the more active the community, the more people develop new features (it's opensource, remember?!), the more people help each other find solutions or workarounds to common problems, the more tutorials and articles you'll find online, the more plugins, extensions, themes... 

- **Based on**: what frontend framework are the SSG frameworks based on? There are three main frontend frameworks (frameworks used to build UIs for websites - in case you were still missing that part): Angular (Google, free, opensource), React (Facebook, free, opensource - super popular - much more than Angular) and the last arrival Vue (free and opensource as well, of course; but not as well known as the other two - gaining traction - from an ex Google employee). If you're a frontend developer, and you want an SSG that makes it both simple for you to put documentation online, but also integrates nicely with your existing website in whichever one of these frameworks, this might be an important criteria for you.

    I personally would love to learn more Vue. I started a bit a few years ago but didn't go through (classic). I've done a lot of web dev in my life, but always "_vanilla_", meaning without the help of any frameworks (Ok, yes, I used JQuery - you got me). Frameworks have evolved so much since then, and take care of so much. I'd really like to learn how to properly build modern UIs and webapps some day. Anyway, in my case, I did not want to deal with that complexity for now.

- **License**:  This would be important based on what you want to do with the framework (e.g. build off of it, and sell that framework as a solution to build websites). If you're only planning on using that framework to publish content, I don't think it matters that much. But have a read at the different licenses, it's always interesting. 

- **Themes** & **Showcase**: Enough of all those programming languages and shit, you're not me. Your criteria might differ. The criteria I based my table on might not even be relevant in your usecase. I do hope they are, particularly if you're just getting started in this world. Before closing on the criteria, there's something really important (always the _last but not least_ trick) that I haven't talked about: what is it going to **fucking** look like dude?! Sure, I could do away with the swearing. But what's life without a bit of swearing. It's just a playful way to put emphasis.

    That's where **themes** come in! SSGs are often tunable, customizable, extendable. People play with them, and based on popularity, you may find you have a lot of different themes at your disposal. _Showcase_ is somewhat similar in that you'll see, very visually, what sort of beautiful websites were built with the given SSG. However, unlike themes, they're not "available", and perhaps required a lot of tuning, coding etc. 

<div class="center-table" markdown>
| Framework                                                           | Popularity { title="Number of Stars on GitHub Repository" data-sort-method="number"}| Themes                                                                        | Showcase                                                                                           | License                                                     | Based on { title="Which Frontend Framework is the SSG based on" }| Programmed in                                                                             | Markup Language                                              | Templating                                                                        |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | :--------------------------------------------------------------: | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| [Jekyll](https://jekyllrb.com/)                                     | [49 637](https://github.com/jekyll/jekyll)                                          | [Themes](https://jekyllrb.com/docs/themes/)                                   | [Showcase](https://jekyllrb.com/showcase/)                                                         | [MIT](https://opensource.org/license/mit)                   | -                                                                | [Ruby](https://www.ruby-lang.org/en/)                                                     | [Markdown](https://www.markdownguide.org/)                   | [Liquid](https://shopify.github.io/liquid/)                                       |
| [Hugo](https://gohugo.io/)                                          | [78 210](https://github.com/gohugoio/hugo)                                          | [Themes](https://themes.gohugo.io/)                                           | [Showcase](https://discourse.gohugo.io/c/showcases/44)                                             | [Apache-2.0](https://opensource.org/license/apache-2-0)     | -                                                                | [Go](https://go.dev/)                                                                     | [Markdown](https://www.markdownguide.org/)                   | [Go](https://www.digitalocean.com/community/tutorials/how-to-use-templates-in-go) |
| [MkDocs](https://www.mkdocs.org/)                                   | [19 916](https://github.com/mkdocs/mkdocs)                                          | [Themes](https://www.mkdocs.org/user-guide/choosing-your-theme/)              | [Showcase](https://github.com/mkdocs/mkdocs/wiki/MkDocs-Users)                                     | [BSD-3-Clause](https://opensource.org/license/bsd-3-clause) | -                                                                | [Python](https://www.python.org/)                                                         | [Markdown](https://www.markdownguide.org/)                   | [Jinja2](https://jinja.palletsprojects.com/en/stable/)                            |
| [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) | [22 182](https://github.com/squidfunk/mkdocs-material)                              | -                                                                             | [Showcase](https://github.com/squidfunk/mkdocs-material#trusted-by-)                               | [MIT](https://opensource.org/license/mit)                   | [MkDocs](https://www.mkdocs.org/)                                | [Python](https://www.python.org/)                                                         | [Markdown](https://www.markdownguide.org/)                   | [Jinja2](https://jinja.palletsprojects.com/en/stable/)                            |
| [MdBook](https://rust-lang.github.io/mdBook/)                       | [19 028](https://github.com/rust-lang/mdBook)                                       | ?                                                                             | ?                                                                                                  | [MPL-2.0](https://opensource.org/license/mpl-2-0)           | -                                                                | [Rust](https://www.rust-lang.org/)                                                        | [Markdown](https://www.markdownguide.org/)                   | ?                                                                                 |
| [VuePress](https://vuepress.vuejs.org/)                             | [22 703](https://github.com/vuejs/vuepress)                                         | [Themes](https://github.com/vuepress/awesome-vuepress/blob/main/v2.md#themes) | [Showcase](https://github.com/vuepress/awesome-vuepress/blob/main/v2.md#projects-using-vuepressv2) | [MIT](https://opensource.org/license/mit)                   | [Vue](https://vuejs.org/)                                        | [JavaScript](https://www.w3schools.com/js/)                                               | [Markdown](https://www.markdownguide.org/)                   | [Vue](https://vuejs.org/)                                                         |
| [VitePress](https://vitepress.dev/)                                 | [13 990](https://github.com/vuejs/vitepress)                                        | [Themes](https://github.com/logicspark/awesome-vitepress-v1#art-themes)       | ?                                                                                                  | [MIT](https://opensource.org/license/mit)                   | [Vue](https://vuejs.org/)                                        | [JavaScript](https://www.w3schools.com/js/)                                               | [Markdown](https://www.markdownguide.org/)                   | [Vue](https://vuejs.org/)                                                         |
| [11ty](https://www.11ty.dev/)                                       | [17 688](https://github.com/11ty/eleventy/)                                         | [Themes](https://www.11ty.dev/docs/starter/)                                  | [Showcase](https://www.11ty.dev/speedlify/)                                                        | [MIT](https://opensource.org/license/mit)                   | -                                                                | [JavaScript](https://www.w3schools.com/js/)                                               | [Markdown](https://www.markdownguide.org/)                   | A bunch                                                                           |
| [Docusaurus](https://docusaurus.io/)                                | [58 443](https://github.com/facebook/docusaurus)                                    | [Themes](https://docusaurus.io/docs/api/themes)                               | [Showcase](https://docusaurus.io/showcase)                                                         | [MIT](https://opensource.org/license/mit)                   | [React](https://react.dev/)                                      | [JavaScript](https://www.w3schools.com/js/)                                               | [MDX](https://mdxjs.com/)                                    | [React](https://react.dev/)                                                       |
| [Nextra](https://nextra.site/)                                      | [12 369](https://github.com/shuding/nextra)                                         | ?                                                                             | [Showcase](https://nextra.site/showcase)                                                           | [MIT](https://opensource.org/license/mit)                   | [NextJS](https://nextjs.org/)/[React](https://react.dev/)        | [TypeScript](https://www.typescriptlang.org/)                                             | [MDX](https://mdxjs.com/)                                    | [React](https://react.dev/)                                                       |
| [Markdoc](https://markdoc.dev/)                                     | [7 404](https://github.com/markdoc/markdoc)                                         | ?                                                                             | [One Example](https://docs.stripe.com/)                                                            | [MIT](https://opensource.org/license/mit)                   | [React](https://react.dev/)                                      | [TypeScript](https://www.typescriptlang.org/)                                             | Custom Markdown                                              | [React](https://react.dev/)?                                                      |
| [Antora](https://antora.org/)                                       | [554](https://gitlab.com/antora/antora)                                             | ?                                                                             | [Showcase](https://gitlab.com/antora/antora.org/-/issues/20)                                       | [MPL-2.0](https://opensource.org/license/mpl-2-0)           | -                                                                | [JavaScript](https://www.w3schools.com/js/)                                               | [AsciiDoc](https://asciidoc.org/)                            | [Handlebars](https://handlebarsjs.com/)                                           |
| [Sphinx](https://www.sphinx-doc.org/en/master/)                     | [6 850](https://github.com/sphinx-doc/sphinx)                                       | [Themes](https://sphinx-themes.org/#themes)                                   | ?                                                                                                  | [BSD-2-Clause](https://opensource.org/license/bsd-2-clause) | -                                                                | [Python](https://www.python.org/)                                                         | [reStructuredText](https://docutils.sourceforge.io/rst.html) | [Jinja2](https://jinja.palletsprojects.com/en/stable/)                            |
| [Quarto](https://quarto.org/)                                       | [4 213](https://github.com/quarto-dev/quarto-cli)                                   | ?                                                                             | [Showcase](https://quarto.org/docs/gallery/)                                                       | [MIT](https://opensource.org/license/mit)                   | -                                                                | [TypeScript](https://www.typescriptlang.org/)/[JavaScript](https://www.w3schools.com/js/) | [Markdown](https://www.markdownguide.org/)                   | [Python Jupyter](https://jupyter.org/)                                            |

</div>
!!! tip "Pro Tips"

    - Make sure you check out this **awesome feature**: you can **click** on **any column header** to **sort the table**!
    - Almost everything is a link. Go explore!

!!! info

    Popularity, as you can see if you hover over that field, represents the number of stars on GitHub. This is a bit unfair, I feel like, to Antora, who is hosted on GitLab. Which could perhaps explain the little number of stars compared to others, all hosted on GitHub. I would not consider this datapoint for Antora.

#### How did I choose my SSG?
Cool. How to choose? Well, we need criteria. We already know they use different markup languages. That would be the first decision to make. Let's however leave that for last and consider all other criteria.

There are some simple arguments, one of which is complexity, the other being popularity.  
From what [I read](https://news.ycombinator.com/item?id=36529880), MkDocs is a good default choice if you're getting started, together with Jekyll. Jekyll is more complete they say. Material for MkDocs adds a lot on the plain MkDocs, so probably competes with Jekyll. I have no idea; I've never tried any of those frameworks. I don't know all of their features by heart. etc. Hugo, despite incredibly more popular, seems more complex to set up. Together with Docusaurus (really popular, MDX based), Antora (asciidocs) "the best" (?) and Sphinx (reStructuredText), which has its fanbase as well. But less popular.

So, so, so.... How to choose...  
I don't want to deal with additional complexities brought by MDX and other custom flavored Markdown, though basic Markdown will need to be extended and thus becomes custom very quickly. So that's not a good argument. And actually, MDX and the fact you can simply bring components in your markup seems really cool. 

But I'm not a frontend developer; being fluent in vanilla HTML/CSS/JavaScript doesn't make me one. I need to learn a frontend developing framework. I don't want to do that to build this site. The primary objective is to quickly, and as easily as possible, but with some margin for scaling in terms of features and complexity, bring some **content** online. I'll add the additional constraint that I don't want something based on a frontend framework; so if I need to do some development in the SSG I don't have to deal with that complexity. My assumption is that it will be easier to develop in a framework that was developed from scratch, so perhaps more tailored to the specific task of static site generation: making Markdown (or AsciiDoc, or reStructuredText) look good and deployable (we'll see that last part in a bit).

So this eliminates a lot of very good choices: Docusaurus (but also lesser known options such as Nextra, Markdoc) based on the React ecosystem, and VuePress/VitePress based on the Vue ecosystem. Let's add another constraint: I know Python and Javascript, so if I need to tweak a bit frameworks based on those, no problem. But I don't want to deal with Ruby, Go, Rust. Which eliminates Jekyll and Hugo (and mdbook). My stupid arbitrary lazy constraints just removed the most _popular_ SSGs from the pool of SSGs I can choose from. Wow. Sorting the table by popularity, and I had a hard time putting that feature in, because those are numbers, and I'm an idiot, the next big SSG is **Material for MkDocs**.

I'm going to be totally honest here. I'm totally biased towards that SSG. Because I've been using some documentation, that I think is really sober and straight to the point, based on this framework. I didn't know it. But I came back to check it. And that explains my bias. This option is even more popular than the vanilla MkDocs, and adds so much features to it, no question here. We're left with Material for MkDocs, 11ty ("eleventy"), Sphinx and Antora, by decreasing popularity. I did a good job constraining my options.

I'll quickly remove 11ty from the pool, given my bias (and it's less popular than my preferred choice).

Which means we have three big contenders, which, oh-so-randomly happen to be for different markup languages. Probably the first criteria you want to base your decision upon. lol. Material-MkDocs for Markdown, Sphinx for reST and Antora for AsciiDoc. Given my natural biases, I'm removing Sphinx, though I am a Python guy. I do like Python. But I've been biased towards the first of the list, and I've assisted to a talk promoting Antora. It's now time to make the tough last call regarding the markup language...

I chose Material for MkDocs. It's not a good choice. It's a choice. When I was telling you about AsciiDocs earlier, I told you I chose MD for no good reason. Indeed. It's a seemingly arbitratry choice, very likely influenced by my identified bias, which I did not correct, apparently, in spite of being aware of its existence. I thought this was the best choice. I can tell you now that there are some things I don't like about MD, and that I am using a heavy number of extensions, which themselves need some custom javascript (like the table sorting above). Though, I'm currently managing to leverage the framework to keep HTML, JS, CSS out of my MD. Sort of. The framework allows addition of [attributes](https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown/#attribute-lists) to MD elements (a list element, a paragraph, image, title...) which means you can add HTML attributes, notably classes (which is useful for CSS) without actually writing HTML or CSS in the MD file itself.

But other things are stupid. Like, if I want a list, and multiple paragraphs in one bullet point, which I often do because I digress infinitely, and add comas, and paragraph-long parenthesis, really trying to scare anyone away that would dare to read what comes out of my twisted mind; I have to go through this convoluted non-sense!

=== "Markdown"

    ``` markdown title="Bullet point with multiple paragraphs"
    - I'm a bullet point, yeah!!

        I'd like to still be in that bullet point, but as a separate paragraph please!

    - I'm another bullet point.
    ```

=== "Result"
    - I'm a bullet point, yeah!!

        I'd like to still be in that bullet point, but as a separate paragraph please!

    - I'm another bullet point.

The spacing is ridiculous. Also, if you want a new line (`#!html <br>` in HTML), **not** a new _paragraph_ (`#!html <p></p>` in HTML), you need to put **two spaces** at the end of your line! You can't just hit enter! Noob mistake.  
Oh well, once you know, you know. The learning curve is however ridiculously small. For the standard Markdown that is. Because you'll quickly want to learn all the [cool display tricks](https://squidfunk.github.io/mkdocs-material/reference/) your SSG offers you.

To conclude this section: the important part was not the choice. It was _making one_. I'm now a bit educated, and I hope you too, on _how_ to choose. What the differences are between this and that SSG. But this barely scratches the surface and is light-years away from making an educated decision based on experience: one would need to try them all! 

Like I said, it doesn't matter which one, what matters is the content. Yes, there will be things that won't easily be migrated from one framework to another, but most of what I will do is writing content. That shouldn't be too hard to migrate.

Again, **The Process**. **Doing**, rather than living in theory world, imagining, studying, analyzing, theorizing, with nothing to show for it. I chose a framework that seems cool, I like the theme, I'll start with that.

## Boilerplate & Hosting
### Hosting Platforms
Alright, we took care of which framework to choose. Now we'll need to host our site somehwere. The framework, the SSG, is a piece of software that will run locally on your computer, and then you'll execute a command, and BAM - it will push your newly created content to a hosting platform, to a server, somewhere on the web. Where you decided. But you need to do some configuration for that to work. Here are some options:

- [GitHub Pages](https://pages.github.com/) (Supports custom domains, 404 pages etc.)
- [Read The Docs](https://about.readthedocs.com/)
- Any provider that can host static files, e.g.
    - [AWS S3](https://aws.amazon.com/s3/) or [AWS Amplify Hosting + S3](https://aws.amazon.com/blogs/aws/simplify-and-enhance-amazon-s3-static-website-hosting-with-aws-amplify/) (see the [different options](https://aws.amazon.com/websites/))
    - [Google Cloud Storage Bucket](https://cloud.google.com/storage/docs/hosting-static-website) (+ Load Balancer for custom domain)
    - [Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website) or [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static/) (AuthN/Z, headers, CI/CD pipeline)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
        
Indeed, since all that is produced by your SSG is a bunch of _static_ files (HTML, CSS, JavaScript and assets such as images etc.), you don't need a particularly fancy platform or whatever. You need a server that will serve those files when queried. Which is why the Big Three, AWS, GCP and Azure could very well do that job.

However, I don't just want my website online, I also want the source code of my website, the markdown documents before they are transformed into HTML. Imagine I lose my machine, or it gets stolen, or it breaks down? I want a safe copy of my source code somewhere! And I want it versioned. This way I can, and anyone can see exactly what was added, when, by whom (if you're open to collaboration). Having a public repository with your website source on it also means anyone could submit a "correction page" for errors, typos, etc.

Welcome to the great world of Source Code Management. GitHub is the biggest player in town. And it's all free. So that's where I'll host my source code. GitHub also offers the possibility, freely, to render a website from your source code (md documents etc.). The native SSG associated with GitHub is Jekyll. There's probably very little to do to get all of that sweetly configured to work together. Maybe nothing actually. My Website was actually automatically rendered with Jekyll! I had to add a `.nojekyll` file to my repository to avoid having GitHub's Jekyll render my source code. Instead, I [configured a GitHub action](https://squidfunk.github.io/mkdocs-material/publishing-your-site/) that will automatically do all the work to **publish** my new webpages rendered via Material for MkDocs, whenever I push the documents from my computer to GitHub.

I'm not inventing anything, of course. Let's go through all the steps together; without stupidly repeating what's already written in their perfectly fine documentation.

Before I leave the hosting platforms, I could also mention [Cloudflare Pages](https://pages.cloudflare.com/). This isn't free. But since I bought a domain from Cloudflare, it's included for free! There is a higher tier, but if I ever move to Cloudflare pages (because it supports features that GitHub doesn't provide), I'll start with the "free" tier, which seems more than enough for my website right now. When I'll have seven septillion unique users visiting my webpages every month, this may change, and I'll need some scaling power behind the scenes which ain't gonna be free. Right now, GitHub Pages is good.

We're officially done with the choosing part! We climbed our way out of the rabbit whole. I'd like to personally congratulate you for reading this far. We are going to use Material for MkDocs (in case I didn't say it enough, ya never know, ya know) as the Static Site Generator for our content, and GitHub as both the hosting platform for our repository (to safeguard its existence, with an online backup, and enable collaboration) and as the hosting platform for our website with GitHub Pages.

Birth still hasn't taken place yet however. Baby is merely growing in mama's belly right now. Let's see how to welcome it to the world.

### Setting up the boilerplate
Baby isn't actually fully grown yet. So there's nothing to be born. We chose Mommy and Daddy, I won't insult you by repeating one more time who they are.  
(Ok, let's address this. Why the baby analogy. Everybody's having babies around me. I'm going to be an uncle soon. Babies everywhere.)  

The womb is your computer. And it's pretty easy to make it the right place for a website to grow: by merely following Material's [Getting Started](https://squidfunk.github.io/mkdocs-material/getting-started/) section. It starts by how to install the framework on your computer, no issues there; I'm familiar with Python. It continues with how to [create a website](https://squidfunk.github.io/mkdocs-material/creating-your-site/) (the boilerplate at least). 

!!! warning
    I'm going on a rant right here. To be fair, it's not at all anywhere near material's fault for any of this. It just so happens the vscode plugin for validating yaml schemas, supposedly maintained by redhat, has a bug. And I got a tiny bit frustrated.
    You've been warned. You could actually just skip to the next chapter [Deployment](#deployment).

OH BOY I HAD SOME FUN THERE. Since this is in all caps, it is perhaps ironic. Everything went well until I tried integrating their own schema.json for validating the syntax of `mkdocs.yml`. I lost an evening on that I think. The code you're supposed to paste in your vscode's `settings.json` is the following:
``` json
{
  "yaml.schemas": {
    "https://squidfunk.github.io/mkdocs-material/schema.json": "mkdocs.yml"
  },
  "yaml.customTags": [ 
    "!ENV scalar",
    "!ENV sequence",
    "!relative scalar",
    "tag:yaml.org,2002:python/name:material.extensions.emoji.to_svg",
    "tag:yaml.org,2002:python/name:material.extensions.emoji.twemoji",
    "tag:yaml.org,2002:python/name:pymdownx.superfences.fence_code_format",
    "tag:yaml.org,2002:python/object/apply:pymdownx.slugs.slugify mapping"
  ]
}
```

Ok, you're happy. Except no validation at all is taking place. You save your `mkdocs.yml` file with mistakes, and you have to wait for the live preview server automatic building to tell you there's an issue:

![Screenshot of a build error in the terminal when the value of theme, which can only be mkdocs, readthedocs, material, was unrecognized as 'hehe'.](/assets/images/yaml_build_error.png){ loading=lazy }
/// caption
///

That's not what you want. You want that plugin that makes yaml validation within your IDE to highlight your mistakes in real time! So, I went to my extensions, looked for the yaml extension, went into features and runtime status, and, oh! Surprise motherfucker! We've got some fucking errors you dumb bitch! Go figure out by yourself that they're here!  

![VScode interface that illustrates what's described above and more particularly, the error message detailed below.](/assets/images/yaml_schema_validation_error.png){ loading=lazy }
/// caption
///

However, thank God, I now have an error message to work with: 

    Request yaml/get/jsonSchema failed with message: no schema with key or ref "https://json-schema.org/draft-07/schema"

What the fuck, what in God's holiest of names does that frackin' mean. You can tell I'm getting a nice work out just writing about it again. There are some subtle signs. Maybe the invocation of God as an agnostic, maybe the one swear word per sentence policy... Subtle signs.

I often get exasperated when people ask me for help. They tell me "_I don't know what to do! There's an error! Please help me!_". So I look at the error message. It describes **exactly** what the issue is, which makes it **painfully clear** what to do to fix it. This annoys me. Like, I'm laughing writing this write now. That's how much it annoys me. So... Am I going to be that guy? No. Is the error useful?...

Where the F (you know the `F`? No? It's a nice letter. I'll get you acquainted.) does that `https://json-schema.org/draft-07/schema` URL come from. The URL in my configuration is `https://squidfunk.github.io/mkdocs-material/schema.json`. Ok let's go look at that URL, maybe it can't access it or something, maybe it's been removed, 404'ed... Who knows? Nope, it's there. I can access that URL, it displays a validation schema in JSON, and first line, there it is, that URL wreaking havoc before I even started writing anything. The site isn't online, there's nothing on it, I barely created it; I'm already stumbling on stupid shit that doesn't work. It's ok. I'm a developer, I think to myself. I'm used to shit that don't work dawg. That's my JAM. I was born in shit that don't work, I was molded by it!!!

But I'm really frustrated. I mean, it's in the official documentation, I'm supposed to copy/paste and move on with my life. That's what's frustrating. Anyway. I look it up google. I find [this opened GitHub issue](https://github.com/redhat-developer/vscode-yaml/issues/1096), really recent (one week old). It's dead on point. It says that this vscode extension generates an error (the one I got) when using a schema based on `https://json-schema.org/draft-07/schema`; _but_, the error doesn't appear if the protocol is http rather than https. I read that same thing on [Stackoverflow](https://stackoverflow.com/questions/69133771/ajv-no-schema-with-key-or-ref-https-json-schema-org-draft-07-schema).

Except that line is on the distant file at `https://squidfunk.github.io/mkdocs-material/schema.json`. So I can't modify it! But... I don't need to use a _distant_ file... Muahahahaha (yeah, I lost it). I landed on this IBM article about configuring schema validation for VSCode, and they're using the `file:///` protocol, which is to load local files. So it's as simple as downloading mkdocs-material's `schema.json`, modifying that first line to be `http`, rather than `https`, and configuring the VSCode extension to use that local file rather than the distant one: 

``` json
"yaml.schemas": {
  "file:///C:/Users/fuchs/dev/site/.vscode/mkdocs_schema.json": "mkdocs"
},
```

If you don't know who I am, yes, **Fuchs** is my name. It's written right up there in your browser. Let me do a [Sungwon bit](https://www.youtube.com/watch?v=p1RKkRCiU90) real quick. Man, never fails to make me laugh. That guy is a genious. Also a talented voice actor. Anyway, it's not pronounced like Fuck, or Fucks, I know it's tempting. It's not Fushhs or Fashhhs or whatever else I've been hearing my entire life. You know how to pronounce Foo, right? We use it all the time in development. Foo. Bar. And you also know who to pronounce an X. Like, hey, say, Fox. Now combine Foo and that X sound, and you get **Foox**. That's how it's pronounced. 

Coincidently, this looks an aweful like the word Fox. Doesn't it? What a coincidence!!! Oh wait, no. Fuchs, which, again, is pronounced "Foox", actually means Fox in German. Yes, a Frenchman with a German name. The true horrors of world wars, mixing the most uptight with the most arrogant people in the world. And you get me. (two generations later, thank god; I'm only one quarter uptight, and three quarters arrogant!)

Wait, where was I, I think we were talking about something interesting like YAML schema validation. Right. So, I have my local file, which isn't raising any errors in the very hidden depths of the YAML validation extension. But it's still not validating that the name of the theme should not be "hehe".

![VScode interface that illustrates a description being displayed when hovering over the theme "name" field. The description being what this field is for.](/assets/images/theme_name_description.png){ loading=lazy }
/// caption
///

At least I have a description... Cool... If I try the ++ctrl+space++ trick, out of curiosity, it should give me autocompletion. This is completely out of curiosity, because if it can't validate the current value isn't the correct one, how would it give me possible values?

![VScode interface that illustrates the auto-completion menu displaying a bunch of weird ass options, with one being the incorrect but intelligible "mkdocs" value.](/assets/images/theme_name_mkdocs.png){ loading=lazy }
/// caption
///

It gives me a bunch of nonsense. And the option "mkdocs". Which isn't a possible value. As we previously saw in the error message, the correct values are mkdocs, readthedocs or material. The latter of which is what we need.

![VScode interface that a field named "yolo", perfectly working, not raising any errors. The value is "hello!".](/assets/images/additional_properties.png){ loading=lazy, align=left } 
Ok, maybe it's just not validating any values of fields, but at least it'll validate that the fields are the correct ones, right? Mother F!...  
This builds just fine by the way. Even the framework's chill with that.

Right. There's an option for _Additional Properties_. You could want to enforce a schema for a certain set of properties while still allowing it be extended after all. So I ++ctrl+shift+p++, type `settings`, and choose `Preferences: Open Settings (UI)`. The UI rather than my JSON configuration file so that I can get all the default options displayed, in case there is anything for that additional properties feature, which I didn't know at the time. I tick the box to disable additional properties and oh god, what's this.

![VScode "PROBLEMS" interface, listing 13 different issues with the YAML file.".](/assets/images/problems.png){ loading=lazy }
/// caption
///

Now that's unexpected. "yolo", I understand. But "palette"?! That's taken directly from the [Changing the colors](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/), the very first setup I did! (Yes, I'm writing this article after doing a lot of configuration already... I'm not even writing this article chronologically! I already wrote what comes after the deployment, showcasing some features of the framework! Time traveling.. how fun.)

Now, I'm lost. I don't understand. Fortunately, I have a brain, and I'm not lost for long. It's validating against the schema I downloaded and put in a file. So I look at that schema and ++ctrl+f++ for `palette`. Nothing. After a bit of speaking to myself, I search for `theme`, the parent node which also happens to be a root node in the schema. Guess what I found! Yep, you certainly didn't guess it, since you just went on reading, and you're going to blame me calling it rhetorical and arguing for the lack of question mark, supplanted by an exclamation mark. You'd be right. But still... Did you guess?

A fucking reference man. Of course. Why would they put everything in the same file when they can separate in smaller pieces!! 

``` json
"theme": {
  "$ref": "schema/theme.json"
}
```

When pulling from the remote source, I guess these would be intelligently resolved. But here, since it's a local file, it's looking for another file, **locally**, named theme.json. In the directory schema. Of course, that's not the only reference there is. I need to pull of those now. After doing that, I see other references in the references, and some more in those. OK people! We won't get any YAML validation, and I'll disable the additional properties feature of the yaml validator to not have any more problems.

Why am I talking about all of this... Ah yes. That's the first step in the doc, right after generating a boilerplate. Good first impression. But I persevere. 

You then have the choice to look at advanced configuration (which is the [https://squidfunk.github.io/mkdocs-material/setup/](https://squidfunk.github.io/mkdocs-material/setup/) tab), or even look at [a template for site creation](https://github.com/mkdocs-material/create-site), if you really want to bootstrap your adventure. A bunch of options are already included there. You'll also discover that this opensource free SSG is not completely opensource or free. You need to pay to get the "insiders" version. Which means you'll have to strip that site template of any options that don't work. Let's skip that for now.

The last parts in the site creation are **how to run** your site locally. There is indeed a local development server! That's pretty slick. Anytime you edit a page, it automatically reloads and takes changes into account to directly display the result in your browser. Finally, there's a command for **building** the site. You understood by now, you need the framework to transform everything into static files (HTML, CSS, JavaScript) and make it look beautiful, integrate all the features etc. That's what it's here for! You can't just serve your markdown documents from a server and hope it'll magically look like what you see on their website.

We now move on to the publication part: actually putting your site online.

### Deployment
Publishing / deploying your website can be followed on the [next chapter of material's doc](https://squidfunk.github.io/mkdocs-material/publishing-your-site/). They documented how to do it on GitHub, and GitLab! And rely on the community for other platforms (some community guides directly linked at the bottom of that page, for Cloudflare Pages, Netlify, Vercel, Fly.io and Scaleway). The really cool thing about GitHub is GitHub actions. But I've seen the same documented for GitLab, so perhaps all platform support some kind of GitHub actions. This is basically a definition for a pipeline, a CI/CD pipeline! I talked about this at length in another article (if you don't see the reference here, tell me! I should add it - as of now in March, it has not yet been published), so I won't do that again here.

The documentation gives some code for a working CI that, whenever you commit code to your github repo, will build the site and publish it as well! Awesome!!!

Of course, you need to create a [GitHub Pages](https://pages.github.com/) repo first, either one for a particular project, or one for your user. Everything's explained. I chose the _User_ option, as this site represents me more than a particular project. But if you want to create a technical documentation site for a specific project, it would make perfect sense to choose the _Project_ option. 

I'll suppose you're familiar with git; if it's not the case, I'm sure there are plenty of tutorials on the web. I don't intend on covering that here.

Let's recap: you have

- an IDE (unless you prefer notepad... or whatever you're using... maybe you're a Vim person, I completely respect that. Plus, you'd certainly argue that it _is_ an IDE)
- a GitHub Pages repository
- python, and material installed
- a boilerplate project, kind of empty, but that's what boilerplate means.

Your GitHub action is defined, you're ready to `git push` your files to your repository and watch the magic happen!

### Domain Name
Your site is now online. Birth _technically_ took place. It's online. _However_... Is it really a human being... uhm... I mean... a website... I gotta stop with this analogy... if it doesn't have a name???

Sure, GitHub Pages give you a domain like [yourusername.github.io], which is pretty cool already! But if you want to look real professional, reall good, you have to register a **domain name**.

I'll skip all the complicated parts about how or why or when or who or where etc. A domain name is going to be like [google.com], or [william-fuchs.com], or whatever you'll come up with! And you want it to take users to your website, which is currently available from the domain name [yourusername.github.io].

Let's take things one at a time. First you need to buy your domain. There are plenty of sites offering that service. I've read really bad stories about some of them, like godaddy. I'm going to directly recommend the one I picked: you know it!! [Cloudflare](https://www.cloudflare.com/). Why? I trust it. It has excellent reputation. I've read a good number of articles on their site, e.g. [one explaining what DNS is](https://www.cloudflare.com/learning/dns/what-is-dns/), or what [anycast](https://www.cloudflare.com/learning/cdn/glossary/anycast-network/) is. I've seen them everywhere, protecting websites with anti-bot systems (that I have to painfully figure out how to bypass for automation purposes ahaha... But that's another story; and again, I'm just using what other people have developed). They are a CDN, Content Delivery Network, which means they'll be caching your webpages, css, javascript, images etc. to serve them as close and quickly to the end customer as possible. There's a ton more features you'll get with them that I have not even begun to explore!

This one was an easy choice. The study didn't go far down any rabbit's hole here, I'll tell you that!

To configure everything, you have a bunch of documentation from GitHub [right here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). I'm not telling you exactly what to do, because it may vary from what I did. For example, I don't want a site starting with www. But if you do, you might need to slightly adapt. You also have [this post from Cloudflare](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/) itself that explains how to set this up, which is perhaps simpler. It also details some configurations which are specific to Cloudflare.

So, on my side. What did this look like? I have [a file named **CNAME**](https://github.com/hillfias/hillfias.github.io/blob/master/CNAME), which contains one line: `william-fuchs.com`. That was hard. 
This is a test.

<!-- acronyms -->
*[SSG]: Static Site Generator
*[SSGs]: Static Site Generators
*[IDE]: Integrated Development Environment