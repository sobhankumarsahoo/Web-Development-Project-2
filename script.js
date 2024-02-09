let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
  
var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

let cart = [];
let cartTotal = 0;

function addToCart(productName, price, imageUrl) {
    cart.push({ name: productName, price: price, image: imageUrl });
    cartTotal += price;
    updateCartUI();
}

function deleteFromCart(index) {
    cartTotal -= cart[index].price;
    cart.splice(index, 1);
    updateCartUI();
}

function clearCart() {
    cart = [];
    cartTotal = 0;
    updateCartUI();
}

function updateCartUI() {
    const cartItemsElem = document.getElementById('cart-items');
    const cartTotalElem = document.getElementById('cart-total');

    cartItemsElem.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.className = 'cart-item-image';
        li.appendChild(img);
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'cart-item-info';
        
        const name = document.createElement('span');
        name.textContent = item.name;
        
        const price = document.createElement('span');
        price.className = 'price-show'
        price.textContent = `₹${item.price}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.onclick = () => deleteFromCart(index);
        
        infoDiv.appendChild(name);
        infoDiv.appendChild(price);
        infoDiv.appendChild(deleteButton);
        li.appendChild(infoDiv);

        cartItemsElem.appendChild(li);
    });

    cartTotalElem.textContent = cartTotal;
}

