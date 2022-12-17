/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.scrollY;
var prevBoxShadow = document.getElementById("navbar").style.boxShadow;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.boxShadow = "#0002 0px 4px 12px";
    // alert("at top");
  } else {
    document.getElementById("navbar").style.top = "-14vh";
  }
  prevScrollpos = currentScrollPos;
  if(window.scrollY == 0){
    document.getElementById("navbar").style.boxShadow = prevBoxShadow;
  }
}