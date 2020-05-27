const header = document.querySelector("header");
function paddingHeader() {
  document.body.style.paddingTop = `${header.offsetHeight}px`;
}
window.addEventListener("load", paddingHeader);
function cleanForm() {
  document.getElementById("contact-form").reset();
}
const options = {
  bottom: "64px", // default: '32px'
  right: "32px", // default: '32px'
  left: "unset", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();
