---
date:
  # created: 2025-03-02
  # updated: 2025-03-02
  created: 2025-02-10
  updated: 2025-02-10
tags:
  - screenshots
  - javascript
authors:
  - William Fuchs
slug: permalinks-nested-tabs-headers
description: Take screenshots of your webpages in seconds rather than minutes! In this article I'll explore how to get repeatable and clean screenshots with the push of a button. This includes a bit of Javascript, tailored specifically to the Material for MkDocs theme, but adaptable for you needs, to include the URL at the top of the website, so that it gets captured in the screenshots.
links:
  - Metasite - First Steps: blog/posts/metasite/metasite_first_steps.md
---

# Create Permalinks to Nested Tabs & Headers
When writing [Metasite - First Steps], yes - still that one - I wanted to make use of Content Tabs. Actually, I love content tabs so much so that I nested them!

If you're not a developer and you're reading this and you have no idea what the fuck _nesting_ means; you're probably a family member or a good and rare friend that's not in IT; thank you for being here. "Nesting" is when you put things in things. For example:
<!-- more -->

- This
- is
- a _flat_ list
    - However, this is a _nested_ element - the list is no longer "flat"!

I've talked many times about [content tabs] already, but here it is once more, just in case this is the first article ever you've read from me (you're quite lucky, everybody would love to get back to their first).

=== "A tab"
    Content tabs are generally used to display lines of code that do the same things, but in different languages.

=== "However..."
    However, they can be used in which ever way you want! The sky is the limit! Use your imagination!

=== "Awesome"
    I had the idea of using nested content tabs when I was struggling to figure out how to showcase the different pages of the blog plugin. There was a lot of screenshots and I didn't want to create an infinite scrolling experience. I thought it would be best to just have a video and talk while showing; to point out the goods and the bads. But that's not what we're doing here. We're writing. And some people like reading. So it became kind of a challenge to adapt what would perfectly fit a dynamic audiovisual experience, to a static visual experience (i.e. looking / reading). That's when I thought to myself "Would it work if I nested tabs?...". Let's see:

    === "It works!"
        Of course it works!
    === "See!"
        That's why I never rant about this framework and I really like it.

One more example before getting to the nitty gritty; directly chaining the content tabs, which is more likely to be the use case (because the above nested tabs were nested quite deeply after a long paragraph, which makes for a horrible user experience if you have to scroll back up, to change tabs, to check back something on a previous tab, or a tab you skipped etc.):

=== "I'm a tab"

    === "Example1"
        Some text here.
    === "Example2"
        Another text here.

=== "Another tab"

    === "Example1"
        You can see that this "**Example1**" tab is linked to the other one! That's [a feature you can activate](https://squidfunk.github.io/mkdocs-material/reference/content-tabs/#linked-content-tabs).
    === "Example2"
        You can see that this "**Example2**" tab is linked to the other one! That's [a feature you can activate](https://squidfunk.github.io/mkdocs-material/reference/content-tabs/#linked-content-tabs).

Then, I had a horrible idea. Horrible in terms of UX (User Experience). I wanted content tabs, nested for the mobile view, as there was more to show on mobile then on the desktop view. With paragraphs below the content tabs, not as part of them, using the content tabs above to drive my points. I thought it would be great to have internal links (so, links that don't take you out of the page, but actually take you back to somewhere in the page - those are called _anchors_) that trigger the change of content tabs.

It's really horrible in terms of UX. If you're reading past the first paragraph, on a mobile phone, you're now an entire screen away from the content tabs. If you click on a link that brings you back to the content tabs, e.g. on a second tab, to show you a different screenshot; you now have to scroll through that same paragraph you just read to see the paragraph describing the other tab. Another solution would be to have those paragraphs as part of the content tab itself, but they have to be short, otherwise a link at the end of the paragraph would take the user back up, though content will disappear and be replaced with other content. I think this would be confusing. You also rely on the user visiting the tabs one after the other, unless you decorrelate your explanations and make your tabs independent.

Let's see what this looks like:

=== "Desktop View"
    ![blog](/assets/images/metasite_first_steps/blogpost_showcase_dark.png#only-dark){ loading=lazy, width=1220 }
    ![blog](/assets/images/metasite_first_steps/blogpost_showcase_light.png#only-light){ loading=lazy, width=1220 }
    /// caption
    ///

    Let's start with the [desktop view](#__tabbed_6_1). You can notice that a blogpost has some metadata attached to it, which, on the desktop view at least, you can nicely visualize side-by-side with the article, alongside the table of contents. I'm not too much of a fan of the tags being at the top of the article, because if that number grew, it would be very distracting. If we come back to the metadata for a second, I really love that you can see when the article was written, and last updated. To me this is crucial information to understand the context for that article; something that is too often left out on "journalistic" posts on the internet. I also like the Category icon indicating which category of article we're currently looking at. An article could belong to multiple categories, but this quickly becomes ugly if too many categories are listed there. I think what I'm really looking for is the [breadcrumbs feature], which would perfectly indicate where the current article is located, even if it's nested in multiple levels of "categories". However, that's another insider feature, released for sponsors only. For now.

    [breadcrumbs feature]: https://squidfunk.github.io/mkdocs-material/setup/setting-up-navigation/#navigation-path

    Finally, we have the estimated time to read, which is a nice feature, and automatically calculated. Like all of the other metadata, it can be specified directly in the frontmatter of the page, if we feel like it's a bit optimistic (or the contratry). We can even have some _related links_ in that section, showing up exactly like the navigation on regular pages (you've seen previously). They can be nested and everything.

    Alright. On to the disaster. [The mobile view](#__tabbed_7_1){class=tablink}.

=== "Mobile View"
    === "Top of page"
        ![blog](/assets/images/metasite_first_steps/blogpost_showcase_mobile_dark.png#only-dark){ loading=lazy, width=360 }
        ![blog](/assets/images/metasite_first_steps/blogpost_showcase_mobile_light.png#only-light){ loading=lazy, width=360 }
        /// caption
        ///

        you can quickly get where I'm getting at with the tags. They eat a lot of space at the top of the article there on mobile. But, Ok. That's far from the worst. Did you notice something? Yes, we don't have the table of contents, or the metadata associated with the article. Alright, no biggie. This is to be expected. On regular pages, we had the table of contents not too far away, at the press of a button after opening the menu. Let's check the [menu](#__tabbed_7_2){class=tablink} first.

    === "Menu"
        ![tags](/assets/images/metasite_first_steps/blogpost_showcase_mobile_openmenu_dark.png#only-dark){ loading=lazy, width=360 }
        ![tags](/assets/images/metasite_first_steps/blogpost_showcase_mobile_openmenu_light.png#only-light){ loading=lazy, width=360 }
        /// caption
        ///

        We're back to the original blog menu. As if we were on the blog homepage. If I'm in a particular category, or even nested category, or nested tag or whatever; I completely lose all of that information for navigation. The blog post is just that: a blog post. you want to navigate to another blog post? Start your search all over again. Start from the tags, or archive, or categories.

        Jesus.

        That's exactly the same for the desktop view by the way. You will have noticed there was no navigation at all. But again, breadcrumbs for the win. Except I don't have access to them. But they'd be the solution. For desktop. For mobile, I still wouldn't like the experience of being braught back to the base menu when I click on that menu. Because I expect classification. Because I don't really want a _blog_. If a blog is just a stupid list of blog posts, sorted by date, which can be enriched with some metadata, that's **not** what I want.

        We left the best for the end: the [Table of contents](#__tabbed_7_3){class=tablink}.

    === "Table of Contents"
        ![tags](/assets/images/metasite_first_steps/blogpost_showcase_mobile_toc_dark.png#only-dark){ loading=lazy, width=360 }
        ![tags](/assets/images/metasite_first_steps/blogpost_showcase_mobile_toc_light.png#only-light){ loading=lazy, width=360 }
        /// caption
        ///

        You saw the menu, right? No icon that would indicate any access to any table of contents, or any of the metadata nicely displayed on the side when in desktop view. Nooooo... No sir, no ma'am. Nope. No, no, no. IT'S AT THE FUCKING BOTTOM OF THE PAGE. Who in there right fucking mind would put the time it takes to read an article at the end of the article?! Who is the insane mother (ok gotta care who I insult, because I actually love all the work that was put in this great theme for the MkDocs framework - so just clarifying my swearing is meant as sensationalism for my dear viewers - not as an offense for people who work their asses off to actually build something :))... I was saying... Who's the insane bitch that thinks it's relevant to put the date at the bottom of the article?! "Oh thank you dude, now I know I lost 43min of my time reading a post from 2017 with a bunch of outdated information on the current state of quantum mechanics - thanks a lot!!".

        God.

        The last thing you'll notice, I have no idea if I'm the first experiencing that bug, and it'd be nice of me to report it rather than silently scream by myself on my tiny grumpy loser website, but the _related links_ feature seem hella broken on mobile man. wtf. LMAO. Hate the Table of contents as well: If I didn't style with some CSS to put some numbers on headings, you'd never have guessed that "Tags" is a separate heading from "The Dealbreaker - Categories", or even that those are sub-chapters of "Setting up a Blog".

        Terrible, terrible.

How do you like that experience? You'll only experience it here, because the javascript to support this experience will only exist on this page.

This unveiled some bugs: at first, you couldn't go from the _Desktop View_ tab to the _Mobile View_ tab. Well, you could by directly clicking on the tab. But if you used the link to do that, it completely broke the content tabs. To nobody's surprise, I spent quite some time on this, to figure out what the issue was (without actually getting down to the real issue). I even wrote a **danger** note in the original page; I really thought I uncovered something!

!!! danger
    I just discovered another bug. You see the links in the previous paragraphs, except the one for the breadcrumbs feature. Those are internal links, to this page. They are supposed to take you to the relevant content tab. I have checked, [this feature was released in 2022](https://github.com/squidfunk/mkdocs-material/issues/3976#issuecomment-1146586469). It appears from the link of the commit that this was for Insiders only (i.e. for sponsors). I've tested on the official site, it works. However the links generated from the content tabs aren't like mine. Instead of having some **#__tabbed_9_3** URL fragment, it creates a nice fragment that appends the name of the content tab to trigger, to the header it's under. However I can't make it work here. Maybe it's still an insider only feature.

    Nonetheless, this got me on the road of [permalinks](https://www.mkdocs.org/user-guide/writing-your-docs/#linking-to-pages), which I activated. You can now click on the icon that appears when you hover over a header to copy a link to it. When this is done, it breaks the content tabs on the current page. 

While some of this may hold true, the part about the nice URL fragments you'd get with Insiders, vs what I have. The "bug" part was actually... caused by a custom script I was running... haha

Remember the [Metasite - Clean Screenshots of Your Website Including URLs](metasite_taking_screenshots.md) article? Yeah... That tiny script was the culprit. Why? No clue man... I mean, I'm modifying the DOM by rewriting the content of the "**announcement bar**" at the top of the screen, but how that's fucking the links breaking the content tabs is beyond me. I'm not even interacting with the URL fragment. I'm just reading it.

Anyway, that was fixed, not by removing that script, but by adding another script. Yes! There's something you still don't know! If you have simple content tabs, no nesting involved, a simple link pointing to, let's say [**#__tabbed_1_1**](#__tabbed_1_1) would take you to the first content tab of the page. No problem. Try it, it'll work. Though, you'll have to scroll back down here. You've been warned.

You could do that for any simple tab. However, when tabs are nested, and you'd like to point to a particular nested tab within a tab that's not activated, you're going to have issues. Because you'd first need to activate the parent tab, then the child tab you're interested in showing. This, as many times as there are parents / nesting levels, to get to the tab you want to show. This is not supported by default from the framework, and the author doesn't want to support that. [Have a read](https://github.com/squidfunk/mkdocs-material/issues/3527#issuecomment-1026553435).

Someone ("crockeo", a.k.a. Cerek Hillen) [still wanted to have a try](https://github.com/squidfunk/mkdocs-material/issues/3879). Cerek's use case, as the other one linked above, is about linking to a particular header **inside** a content tab. If external links are made to a header inside a content tab, you'd want to take the user directly there. Which is not natively enabled, and considered bad design by the author (probably rightfully so). The javascript also works for content tabs (or any other kind of anchors) nested within content tabs! Hooray! I found a solution to my problem. You've tested it above. 

Except that, no. Ahahaha, how naive. His script answered his problem. Not mine. Content tabs are tricky like that. We'll get that by going through his script, which I had to understand, because I was going to hack the shit out of it for my own purposes.

``` javascript
function () {

    // As we'll see below, this initialization function will be attached to certain type of events
    // notably events triggered when the hash (the URL fragment, the '#blabla' in the URL) changes
    // or when the DOM changes, which means when things are dynamically changed on the page via javascript
    function init() {
        // we start by getting the anchor, i.e. the hash '#link'    
        const anchor = window.location.hash.slice(1);

        // if it's empty, we just return, we don't do anything
        if (anchor === '') {
            return;
        }

        // that anchor is getting somewhere right? so we get that HTML element to do stuff from it.
        const element = document.getElementById(anchor);
        // in his example, it's a simple header... But we'll see in mine later.

        // the closest() function is going to traverse the DOM, upwards, to return the closest parent element that has the class '.tabbed-set'
        // starting our ascension from the element we want to point to, e.g. a header inside a tab
        const tabbedSet = element.closest('.tabbed-set');
        // this is actually the top most level <div> that encompasses the content tabs

        // content tabs are implemented via checkboxes, a.k.a. "radio" type of <input>
        // we want to get all the checkboxes inside the tabbedSet, which represents all the tabs one could click on
        const checkboxes = tabbedSet.getElementsByTagName('input');
        
        // if there are none, we return
        if (checkboxes.length === 0) {
            return;
        }

        // again, we'll use the closest() function to get the closest parent element with the class '.tabbed-block',
        // starting our ascension from the element we want to point to, e.g. a header inside a tab
        const tabbedBlock = element.closest('.tabbed-block');
        // This tabbedBlock is actually the element that contains everything that will be showed under a given tab
        // so the element you got above, starting from the header you want to point your users to,
        // is the tabbedBlock that corresponds to the content tab that will reveal that header

        // To actually reveal that content, we need to "click" on the tab
        // that's done via the checkboxes we got earlier... but which checkbox should we click?
        // It's not indicated anywhere, remember the link points to a header
        // But since we have the tabbedBlock that corresponds to the tab we want to reveal,
        // we just need to get its position, its index, with regards to its parent, to see if it's
        // the content of the first tab, or the second etc.
        const index = Array.from(tabbedBlock.parentNode.children).indexOf(tabbedBlock);
        // all the tabbedBlock are regrouped at the same place, under the same parent
        // the above function creates an array, a collection of elements, containing all the tabbedBlocks
        // we then get the number via indexOf, given the tabbedBlock we're interested in
        // the first? the second? etc. (as explained above)
        
        // we can then actually check the checkbox, which is one of the inputs we got above
        // thanks to the index we just got 
        // thankfully, the order is the same: the first checkbox correspond to the first tabbedBlock which corresponds to the first tab
        checkboxes[index].click();

        // finally, we reset the window.location, so that the browser takes the user to the now revealed header
        // which has an id corresponding to what's in the browser hash, part of the window.location, as seen at the beginning 
        window.location = window.location;
    }

    // the init function is done. Like we said at the beginning, we want that function to be executed when
    // the DOM changes, i.e. some piece of javascript loads new content in the page (I won't go into more details)
    window.addEventListener('DOMContentLoaded', init, false);

    // or when the hash changes. This means you can change the hash in the URL bar; it won't reload the browser
    // since it's a URL fragment (changing that doesn't reload the browser)
    // but thanks to this listener, an event will be triggered when you change the hash, which will execute the init function
    window.addEventListener('hashchange', init, false);
}
```

Awesome!! Not really my use case though. Lol. I don't have any headers I want to point to. I want to point to a tab, within a tab.

You understood from the code above, pointing to a particular tab is nothing like pointing to a header. You need to activate it! And if you have nested tabs, you need to activate the correct parent tab (or parents tabs, depending on how deep you like nesting things) before your wished child/nested tab will be revealed. This is done using exactly the tricks described above: you traverse the DOM searching for particular elements, starting from the tab you want to reveal. And then you activate each one thanks to the corresponding checkbox. Here's what the code looks like.

But before that, a word on recursivity: we're going to start the code with the hardest bit. A recursive function. Do you know what that is? It's when something uses itself. We use that a lot in development. And maths. It allows the generalization of a function.

For example: suppose you have a tab within another tab. You're going to want a function which goes to the correct parent of that tab, and activates it, and then activates that tab. And voilà. (Yep that's a bit of French for you).

Cool. But some other place you have a tab within a tab within tab. Oh no. Your code doesn't work anymore! It's going to activate the parent tab of the tab you want to point to (let's pretend it's the most nested one of course), but the outermost parent is not going to be activated because your code recursed only once, to one parent of one tab. Ok, you can modify your code with basically a copy/paste to account for tabs nested two levels deep. It now works.

Now you have tabs nested three levels deep. Grrrr. That's when recursion comes in. Instead of hardcoding exactly what we do, either once, twice, thrice etc... We're going to code a function that calls itself infinitely, under certain conditions. It's pretty easy to understand: does the current tab I'm targetting have a parent tab? Call the function on the parent tab before activating the current tab. And then on that parent tab, the function will do exactly the same thing (it's not going to magically change): does the current tab I'm targetting (which was the parent tab in the previous function call) have a parent tab (the grandparent tab of the original tab)? Call the function on the parent tab (grandparent tab) before activating the current tab (the parent tab). Etc etc etc. The function can go on like that _ad infinitum_. That's some latin for you. I didn't take latin courses, but one always sounds smart when using latin. This is part the continuation of a troll starting in the great French series [**Kaamelott**](https://en.wikipedia.org/wiki/Kaamelott) by the great Alexandre Astier, and part a way to actively combat my inferiority complex (you've read my other shit right?). I'm really not a fan of French stuff in general, whether it's our cinema or music; but we do have very talented people, very good shows, movies and music. It's just the exception rather than the other way around in my opinion. Anyway, take French lessons, and have a good laugh in front of Kaamelott.

Where was I? Oh yes, right, _ad infinitum_, to the infinite, forever, never ending. So we need to tell our function to break at some point, otherwise your browser's gonna freeze man ahahaha. What a troll you are. Seriously. Stop freezing your browser. Jesus.

That condition's simple, you already know it; because I already said it. Does the current tab I'm targetting have a parent tab? If it doesn't, the function won't call itself. There we go, we just broke infinity. I hope you're happy. Onto the code yee bastards!!

``` javascript
function () {
    function init() {

    // the famous recursive function
    // it takes an element in, we suppose it's a tab. This won't work for a header.
    // the whole idea here is not to point to a header within a tab, but just to activate a tab, nested within some levels of tabs
    // so this function will check if the current element (a tab) has a parent tab, call itself on that parent tab, and end 
    // clicking on the current element (tab)
    function activateTab(element){

        // you don't know why yet, but trust me, we gonna need this my man, or woman; can I call you my woman?
        outterMostTab = element;

        // just like before, we want to get the parent block where that tab and its brothers and sisters in arms are defined 
        const tabbedSet = element.closest('.tabbed-set');
        if (tabbedSet === null) {
            return null;
        }

        // we retrieve all the corresponding checkboxes, so far so good; you know this
        const checkboxes = tabbedSet.getElementsByTagName('input');
        if (checkboxes.length === 0) {
            return null;
        }

        // OOOkay. Okay. Party's over. What's going on here.
        // As I said above, we want to check if the current tab - element - has a parent tab. You understood from the previous example
        // that tabs are framed with a .tabbed-set element... Soooo... To check if a tab has a parent tab, we're going to use some CSS magic
        // the has() CSS pseudo-class allows to select elements that have other elements contained within them (as its name transparently indicates)  
        // So: if the .tabbed-set <div> that surrounds our tab is itself included in a .tabbed-set <div>, that's the element we're going to match!
        const parentContentTab = element.closest('.tabbed-set:has(.tabbed-set)')
        if (parentContentTab === null) {
            return null;
        }

        // again, we get those checkboxes...
        const checkboxes2 = parentContentTab.getElementsByTagName('input');

        // and as before, we want to make sure there are some checkboxes; that's the first condition
        // but since has() will return the element itself if it corresponds to the closest() condition and no other parent element does,
        // we want to make sure that's not the case.

        // Let me repeat that with other words. When, by the magic of recursion, we'll be executing this activateTab() function on the top level parent tab
        // that tab will indeed have a parent .tabbed-set that has(.tabbed-set), since it contains all the tabs nested within itself.
        // In this case, the has() function will return that element, since it has no other parent that corresponds to the definition. 
        // We're verifying here that's not the case.
        // If it's not the case, we actually found a parent tab, and can call this function on it.
        if (checkboxes2.length !== 0 && parentContentTab !== tabbedSet ) {
        
            // As we saw in the previous code, we now want to retrieve the .tabbed-block element, which contains the contents of the tabs
            // except that here, we want to retrieve the parent tab of the current tab the function was called upon
            // and more precisely, this tab corresponds to the closest .tabbed-block that has a .tabbed-set!
            const tabbedBlock = element.closest('.tabbed-block:has(.tabbed-set)');
            if (tabbedBlock === null) {
                return null;
            }

            // we want to know the index of the parent tab (maybe there are multiple parent tabs, and the parent tab of the current tab is the third?)
            // so we taken the parentNode of the parent tab, and make an array of its children, and use indexOf to know the index of the tabbedBlock
            // within that array
            const index = Array.from(tabbedBlock.parentNode.children).indexOf(tabbedBlock);

            // now that we know which index to look for, we can select the correct element from the children of parentContentTab, and call the
            // activateTab() function on it
            if (parentContentTab.children[index] === null) {
                return null;
            }
            outterMostTab = activateTab(parentContentTab.children[index]);
            // the function will return an element, which we'll attribute to outterMostTab, we'll see why very soon :)
        }

        // The function has now done its job on the parent tab, if there was one, which means it also did the following code,
        // but on the parent tab (of course)
        // ok what are we doing here?

        // Unlike the previous code which was activated from a header, and thus had to use the tabbedBlock to know the index of the tab to activate
        // reminder: const index = Array.from(tabbedBlock.parentNode.children).indexOf(tabbedBlock);
        // since the element we're manipulating in this function is not a header but a tab, we can directly fetch its element within the tabbsedSet children
        const index = Array.from(tabbedSet.children).indexOf(element);

        // and then click on the checbox
        checkboxes[index].click();

        // only when we're done doing all that, we return the outterMostTab
        return outterMostTab;
        // if we have parent tab A containing parent tab B containing tab C, which we call the function on (because we want to create a link to that tab)
        // function will execute on tab C, which is initialized with outterMostTab to tab C, but then the function gets called on parent tab B
        // and within that function execution, it will be called again on tab C, which will return tab C, so when the function execution of tab B returns,
        // it will return tab C
        // and finally, when the function execution of tab A returns, it will return tab C as the outter most tab.
    }

    // as in the previous init() function for the header, we get the tab link from the URL fragment/hash
    const anchor = window.location.hash.slice(1);
    if (anchor === '') {
        return null;
    }

    // we retrieve the corresponding tab element
    const element = document.getElementById(anchor);

    // we activate the tabs leading to that tab, starting with the parent, until we reach the target tab, thanks to our recursive function
    // and we retrieve the outter most tab
    outterMostTab = activateTab(element)

    // why did I want to retrieve that element? because if we simply take the user to a header within a tab, like in the previous function, it's ok
    // reminder: we do that thanks to window.location = window.location;
    // this makes the browser browse to the link in the URL hash, which will be at the top of the user's screen

    // but I found it sub-optimal to take the user to the active tab;
    // I think it's much nicer to take the user to the most outter tab so they have a full view of which combination of tab is currently active
    // we're at the point that drove me crazy because the behavior was completely inconsistent; and I couldn't figure out why
    // and, anyway, I don't think it's nice user experience to direct users to a particular tab within multiple levels of nested tabs

    // but just for your information, my idea was to use the which basically uses the getBoundingClientRect() function to check if the element is currently
    // being fully displayed on the screen or not
    // and if the outterMostTab is not fully displayed, I wanted to smoothly scroll just a bit more towards the top
    // which made the "Back to top" button appear, and would also make the header appear
    // simply trying to directly hide the button didn't work, because I suspect a delay would be needed for the scroll to take place
    // same thing for the header (which I didn't implement)

    // another idea which didn't work (the aforementioned crazy inconsistency) was to simply, after activating all the correct tabs to reach the target tab,
    // set the window location to the outer most one.
    if(outterMostTab !== null && !elementIsVisibleInViewport(outterMostTab, true)) {
        window.scroll({ top: outterMostTab.getBoundingClientRect().top + window.scrollY - 0, behavior: "smooth"} );
        document.querySelector('[data-md-component="top"]').setAttribute("style", "visibility: hidden !important;");
        // window.location = window.location.hash.slice(0)+outterMostTab;
    }

    // just an extra word on the crazy inconsistencies: a link to one tab would make only "back to top" button appear, but would make the header disappear
    // and vice-versa when using a link to another tab. Reproducing the issue was enough of a pain for me to not dig any further.

    // Now, we have some more crazy shit happening which is a clear dissuasion of implementhing this code.
    // Since the idea you've explored above is to interactively take the user through tabs via links within the same page,
    // I need this code to also work when the user clicks.

    // This also means this code is activated everytime the user clicks, regardless of where.
    // And this, many times, because of the virtual clicking we do on the checkboxes, because of the recursion.
    // So I initially removed the event listeners at the start of the init(), and added them again here
    // but there are still too many function executions for my liking, since this takes place on every click.

    // this can be solved though, by adding the click event to the relevant links only, rather than the entire window

    // window.addEventListener('DOMContentLoaded', init, false);
    // window.addEventListener('hashchange', init, false);
    // window.addEventListener('click', init, false);
    }

    window.addEventListener('DOMContentLoaded', init, false);
    window.addEventListener('hashchange', init, false);
    window.addEventListener('click', init, false);
}
```

Some references:

- [Check if an element is visible in the viewport using JavaScript]
- [Attach onclick event to links]

Conclusions: I've been cut once again in the middle of my redaction. Weeks have passed as the above completely demotivated me. I finally found the courage to butcher this article into a nice "don"t give a fuck anymore, it's not working, it's ugly, I want to move on". At least you got some food for thought if you want to work on this very niche use-case. And if you're just discovering programming, or javascript, I hope you'll have learned a thing or two.

[content tabs]: https://squidfunk.github.io/mkdocs-material/reference/content-tabs/
[Metasite - First Steps]: metasite_first_steps.
[Check if an element is visible in the viewport using JavaScript]: https://www.30secondsofcode.org/js/s/element-is-visible-in-viewport/ 
[Attach onclick event to links]: https://stackoverflow.com/questions/8492344/javascript-attach-an-onclick-event-to-all-links

<!-- acronyms -->
*[DOM]: Document Object Model. This represents the web page structure.

<script>



</script>