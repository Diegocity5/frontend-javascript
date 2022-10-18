const navbar_email = document.querySelector(".navbar-email");//listen
const desktop_menu = document.querySelector(".desktop-menu");//active

navbar_email.addEventListener('click', function(event){
    event.preventDefault();
    desktop_menu.classList.toggle('inactive');
});