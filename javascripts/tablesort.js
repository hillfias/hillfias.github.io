document$.subscribe(function() {
  var tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(function(table) {
    new Tablesort(table)
  })
})



document$.subscribe(function() {
    document.body.addEventListener('touchstart', function() {}, false);
})

document$.subscribe(function () {

  console.log("DOM has loaded. Executing Javascript.")

  const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };

  function goTo(element){
    console.log("executing goto");

    window.removeEventListener('DOMContentLoaded', init, false);
    window.removeEventListener('hashchange', init, false);

    outterMostTab = element;

    const tabbedSet = element.closest('.tabbed-set');
    if (tabbedSet === null){
      return null;
    }
    const checkboxes = tabbedSet.getElementsByTagName('input');
    if (checkboxes.length === 0) {
      return null;
    }

    const parentContentTab = element.closest('.tabbed-set:has(.tabbed-set)')
    if (parentContentTab === null){
      return null;
    }
    const checkboxes2 = parentContentTab.getElementsByTagName('input');
    if (checkboxes2.length !== 0 && parentContentTab !== tabbedSet ) {
      const tabbedBlock = element.closest('.tabbed-block:has(.tabbed-set)');
      if (tabbedBlock === null){
        return null;
      }
      const index = Array.from(tabbedBlock.parentNode.children).indexOf(tabbedBlock);
      if(parentContentTab.children[index] === null) {
        return null;
      }
      outterMostTab = goTo(parentContentTab.children[index]);
    }

    const index = Array.from(tabbedSet.children).indexOf(element);
    checkboxes[index].click();

    window.addEventListener('DOMContentLoaded', init, false);
    window.addEventListener('hashchange', init, false);

    return outterMostTab;
  }

  function init() {
    console.log("initializing");


    console.log("getting anchor");

    const anchor = window.location.hash.slice(1);
    if (anchor === '') {
      return null;
    }
    console.log(anchor);
    


    console.log("calling the function");
    const element = document.getElementById(anchor);
    console.log(element)
    outterMostTab = goTo(element)
    if(outterMostTab !== null && !elementIsVisibleInViewport(outterMostTab, true)) {
      console.log("calculating scroll-to position")
      console.log(element.getBoundingClientRect().top + window.scrollY)
      console.log(element.offsetTop + "75px" )
      window.scroll({ top: outterMostTab.getBoundingClientRect().top + window.scrollY - 0, behavior: "smooth"} );
      document.querySelector('[data-md-component="top"]').setAttribute("style", "visibility: hidden !important;");
      // window.location = window.location.hash.slice(0)+outterMostTab;
    }

    window.addEventListener('DOMContentLoaded', init, false);
    window.addEventListener('hashchange', init, false);
  }

  console.log("adding event listener for DOM content loaded:");
  window.addEventListener('DOMContentLoaded', init, false);

  console.log("adding event listener for hash changed:");
  window.addEventListener('hashchange', init, false);
  // window.addEventListener('click', init, false);

  console.log("adding onclick event to all links with class tablink:");
  var elements = document.getElementsByClassName('tablink');
  for(var i = 0, len = elements.length; i < len; i++) {
      target_tab = elements[i].getAttribute("href").split("#")[1];
      console.log("target: "+target_tab);
      elements[i].onclick = ()=> {goTo(document.getElementById(target_tab));};
  }

  
})

// document$.subscribe(function() {
//   URL = window.location.href.toString().split(window.location.host)[1];
//   el = document.querySelector('[data-md-component="announce"]');
//   el.innerHTML = "  https://william-fuchs.com"+URL;
//   el.classList.add("md-typeset");
//   el.classList.add("center");
//   el.removeAttribute("hidden");
//   el.setAttribute("style", "font-size: 0.6rem;")
// })