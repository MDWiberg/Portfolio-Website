// JavaScript to handle resfreshing a page to normal url instead of the internal link addition url
// Also refreshes page to where user was before refresh
// Author: Matthew Wiberg


window.onload = () => {

  let url = window.location.href;
  console.log(sessionStorage.getItem("scrollTrue"));

  // Checks if there was session storage saved and scrolls to the saved position if so
  if(sessionStorage.getItem("scrollTrue")){
    window.scrollTo(0, sessionStorage.getItem("scrollTrue"));
    sessionStorage.removeItem("scrollTrue"); // Removes the saved session storage because it is no longer needed when page is reset to regular, non-internally linked webpage
  }

  if(url.includes('#')){
    let index = url.indexOf('#'); 
    let urlRefresh = url.slice(0,index); // Creates regular url without the internal link part
  
    // Establishes the position user was at before refresh while page was internally linked
    window.onbeforeunload = () => {
      sessionStorage.setItem("scrollTrue", window.pageYOffset); // Saves page position in session storage
    };
    window.location.assign(urlRefresh); // Relocates page to the standard, non-internally linked webpage
  }
  
}



