function scrollHorizontally(e) {
  e = window.event || e;
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  var scrollSpeed = 40; 
  document.documentElement.scrollLeft -= (delta * scrollSpeed);
  document.body.scrollLeft -= (delta * scrollSpeed);
  e.preventDefault();
  console.log(document.documentElement)
  console.log(document.body.scrollLeft)
}

if (window.addEventListener) {
  // IE9, Chrome, Safari, Opera
  window.addEventListener("mousewheel", scrollHorizontally, false);
  // Firefox
  window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
  // IE 6/7/8
  window.attachEvent("onmousewheel", scrollHorizontally);
}