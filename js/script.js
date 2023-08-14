// learn from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
const header = document.querySelector("header");
window.addEventListener ("scroll",function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
});