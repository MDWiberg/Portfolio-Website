// JavaScript to handle the menu for small screens
// Author: Matthew Wiberg


let menuIcon = document.querySelector('.hamburger-icon');
let menu = document.querySelector('.header-menu');

let handleClick = (e) => {

  // Use when editing direct style property of a element
  // if(menu.style.display === ""){
  //   menu.style.display = "block";
  // }
  // else if(menu.style.display === "none"){
  //   menu.style.display = "block";
  // } 
  // else if(menu.style.display === "block"){
  //   menu.style.display = "none";
  // }
  
  // Use when checking for a class with display property already set and working with className property
  if(menu.className.match(/header-menu/) ? menu.className.match(/header-menu/)[0] : '' === "header-menu"){
    menu.className = menu.className.replace(/header-menu/, '')
  }
  else if(menu.className.match(/header-menu/) !== "header-menu"){
    menu.className += "header-menu";
  }
};

// Use when editing direct style property of a element
// let handleResize = (e) => {
//   if(e.target.document.body.scrollWidth >= "480"){
//     menu.style.display = "block";
//   }
// };

// Use when checking for a class with display property already set and working with className property
menuIcon.addEventListener('click', handleClick)

// Use when editing direct style property of a element
// window.onresize = handleResize;




