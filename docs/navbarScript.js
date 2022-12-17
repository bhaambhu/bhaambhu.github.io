/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.scrollY;
var navbar = document.getElementById("navbar");
var prevBoxShadow = navbar.style.boxShadow;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    // Below code shows the header on scroll down
    // navbar.style.top = "0";
    navbar.style.boxShadow = "#0002 0px 4px 12px";
  } else {
    // Below code hides the header on scroll down
    // navbar.style.top = "-14vh";
    navbar.style.boxShadow = prevBoxShadow;
  }
  prevScrollpos = currentScrollPos;
  if(window.scrollY == 0){
    navbar.style.boxShadow = prevBoxShadow;
  }
}