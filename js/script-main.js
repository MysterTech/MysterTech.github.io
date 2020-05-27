// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var elmnt = document.getElementById("imageBox");
  if (
    document.body.scrollTop > elmnt.clientHeight * 0.5 ||
    document.documentElement.scrollTop > elmnt.clientHeight * 0.5
  ) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
}
