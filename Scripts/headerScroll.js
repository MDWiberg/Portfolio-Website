// JavaScript to handle scroll change
// Author: Matthew Wiberg


let header = document.getElementById('intro-header');

window.onscroll = () => {
  "use strict";
  if(document.body.scrollTop >= 25 || document.documentElement.scrollTop >= 25){
    // header.style.backgroundColor = "black";
    header.classList.remove("transparent-background");
    header.classList.add("black-background");
  }
  else{
    // header.style.backgroundColor = "transparent";
    header.classList.remove("black-background");
    header.classList.add("transparent-background");
  }
};

