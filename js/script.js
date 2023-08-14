// learn from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
const header = document.querySelector("header");
window.addEventListener ("scroll",function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
});

// learned from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
let menu = document.querySelector('#hamburger-icon');
let navlist = document.querySelector('.navlist');

//When clikcing hamburger icon drop down opens 
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

//scrolling through page will close hamburger drop
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};