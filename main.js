const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const menu_burger = document.querySelector('.menu-burger');
const menu_mobile = document.querySelector('.mobile-menu');
const navbar_shooping = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


navbar_email.addEventListener('click', function(event){
    event.preventDefault();
    desktop_menu.classList.toggle('inactive');
    aside.classList.add('inactive');
});

menu_burger.addEventListener('click', function(event){
    event.preventDefault();
    menu_mobile.classList.toggle('inactive');
    aside.classList.add('inactive');
});

navbar_shooping.addEventListener('click', function(event){
    event.preventDefault();
    aside.classList.toggle('inactive');
    menu_mobile.classList.add('inactive');
    desktop_menu.classList.add('inactive');
});