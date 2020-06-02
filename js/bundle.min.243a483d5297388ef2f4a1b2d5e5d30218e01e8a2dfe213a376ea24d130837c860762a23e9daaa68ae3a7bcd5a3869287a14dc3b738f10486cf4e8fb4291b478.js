const header = document.querySelector("header");
function paddingHeader() {
  document.body.style.paddingTop = `${header.offsetHeight}px`;
}
window.addEventListener("load", paddingHeader);
function cleanForm() {
  document.getElementById("contact-form").reset();
}

var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }

  prevScrollPos = currentScrollPos;
};
