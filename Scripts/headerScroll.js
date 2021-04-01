// JavaScript to handle scroll change
// Author: Matthew Wiberg


let header = document.getElementById('intro-header');

window.onscroll = () => {
  "use strict";
  if(document.body.scrollTop >= 25 || document.documentElement.scrollTop >= 25){
    header.classList.remove("transparent-background");
    header.classList.add("black-background");
  }
  else{
    header.classList.remove("black-background");
    header.classList.add("transparent-background");
  }
};

