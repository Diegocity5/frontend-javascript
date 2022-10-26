const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu-burger');
const menuMobile = document.querySelector('.mobile-menu');
const navbarShooping = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
navbarShooping.addEventListener('click', toggleShopMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
};
function toggleMobileMenu (){
    menuMobile.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
};
function toggleShopMenu (){
    shoppingCartContainer.classList.toggle('inactive');
    menuMobile.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
};
function openProductDetailAside (){
    productDetailContainer.classList.remove('inactive');
    menuMobile.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
};
function closeProductDetailAside (){
    productDetailContainer.classList.add('inactive');
};

const product_list = [];
product_list.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
product_list.push({
    name: 'Kit de teclado y mouse Logitech MK120',
    price: 70.991,
    image: 'https://http2.mlstatic.com/D_NQ_NP_643055-MLA48377746812_112021-V.webp'
});
product_list.push({
    name: 'Laptop HP 14',
    price: 1.029,
    image: 'https://http2.mlstatic.com/D_NQ_NP_612278-MLA48623757086_122021-V.webp'
});
product_list.push({
    name: 'Disco solido SSD',
    price: 384.400,
    image: 'https://http2.mlstatic.com/D_NQ_NP_646272-MLA40283983443_122019-V.webp'
});
product_list.push({
    name: 'Nintendo Switch OLED',
    price: 1.834,
    image:'https://http2.mlstatic.com/D_Q_NP_909032-MLA47920360780_102021-P.webp'
});
product_list.push({
    name: 'Kit 4 Botellas Gt35',
    price: 167.800,
    image:'https://http2.mlstatic.com/D_NQ_NP_813950-MCO41958233716_052020-W.webp'
});
product_list.push({
    name: 'Show 8 Amazon',
    price: 495.900,
    image: 'https://http2.mlstatic.com/D_NQ_NP_670896-MCO48687403364_122021-W.webp'
});
product_list.push({
    name: 'Microfono para PC Gamer',
    price: 27.900,
    image: 'https://http2.mlstatic.com/D_NQ_NP_862966-MCO51019559804_082022-W.webp'
});
product_list.push({
    name: 'Sensor Wifi Puerta Ventana',
    price:  48.403,
    image: 'https://http2.mlstatic.com/D_NQ_NP_604437-MCO50527801428_062022-O.webp'
});

function renderProduct(array){
    for(product of array){
        const product_card = document.createElement('div');
        product_card.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.setAttribute('loading', 'lazy');
        img.addEventListener('dblclick', openProductDetailAside);
    
        const product_info = document.createElement('div');
        product_info.classList.add('product-info');
    
        product_card.append(img, product_info);
    
        const product_info_div = document.createElement('div');
        const product_price = document.createElement('p');
        product_price.innerText = '$ ' + product.price;
        const product_name = document.createElement('p');
        product_name.innerText = product.name;
    
        product_info_div.append(product_price, product_name);
    
        const product_info_figure = document.createElement('figure')
        const product_image_cart = document.createElement('img');
        product_image_cart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        product_info.append(product_info_div, product_info_figure);
        product_info_figure.appendChild(product_image_cart);
        cardsContainer.appendChild(product_card);
    }
}

renderProduct(product_list);