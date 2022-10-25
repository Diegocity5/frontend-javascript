const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const menu_burger = document.querySelector('.menu-burger');
const menu_mobile = document.querySelector('.mobile-menu');
const navbar_shooping = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cards_container = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

navbar_email.addEventListener('click', function(event){
    event.preventDefault();
    desktop_menu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
});

menu_burger.addEventListener('click', function(event){
    event.preventDefault();
    menu_mobile.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
});

navbar_shooping.addEventListener('click', function(event){
    event.preventDefault();
    shoppingCartContainer.classList.toggle('inactive');
    menu_mobile.classList.add('inactive');
    desktop_menu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
});

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    menu_mobile.classList.add('inactive');
    desktop_menu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
}

productDetailCloseIcon.addEventListener('click', function(){
    productDetailContainer.classList.add('inactive');
});

const product_list = [];
product_list.push({
    name: 'Bike',
    prize: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
product_list.push({
    name: 'Kit de teclado y mouse Logitech MK120',
    prize: 70.991,
    image: 'https://http2.mlstatic.com/D_NQ_NP_643055-MLA48377746812_112021-V.webp'
});
product_list.push({
    name: 'Laptop HP 14',
    prize: 1.029,
    image: 'https://http2.mlstatic.com/D_NQ_NP_612278-MLA48623757086_122021-V.webp'
});
product_list.push({
    name: 'Disco solido SSD',
    prize: 384.400,
    image: 'https://http2.mlstatic.com/D_NQ_NP_646272-MLA40283983443_122019-V.webp'
});
product_list.push({
    name: 'Nintendo Switch OLED',
    prize: 1.834,
    image:'https://http2.mlstatic.com/D_Q_NP_909032-MLA47920360780_102021-P.webp'
});
product_list.push({
    name: 'Kit 4 Botellas Gt35',
    prize: 167.800,
    image:'https://http2.mlstatic.com/D_NQ_NP_813950-MCO41958233716_052020-W.webp'
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
        const product_prize = document.createElement('p');
        product_prize.innerText = '$ ' + product.prize;
        const product_name = document.createElement('p');
        product_name.innerText = product.name;
    
        product_info_div.append(product_prize, product_name);
    
        const product_info_figure = document.createElement('figure')
        const product_image_cart = document.createElement('img');
        product_image_cart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        product_info.append(product_info_div, product_info_figure);
        product_info_figure.appendChild(product_image_cart);
        cards_container.appendChild(product_card);
    }
}

renderProduct(product_list);