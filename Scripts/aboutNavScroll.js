// JavaScript to handle about-me navigation scrolling change
// Author: Matthew Wiberg


let aboutMeNav = document.querySelector('.about-me-nav');

window.onscroll = () => {
  "use strict";

  if(window.pageYOffset >= aboutMeNav.offsetTop){
    aboutMeNav.classList.add("nav-shadow");
  }
  else{
    aboutMeNav.classList.remove("nav-shadow");
  }
};

