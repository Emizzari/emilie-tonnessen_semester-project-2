import mobileMenu from "./components/mobile-menu.js";

import { getShoppingCart } from "./components/localStorage.js";

function createShoppingList (){
    const shoppingCart = getShoppingCart();

    const cartContainer = document.querySelector(".cart__products__container");

    if (shoppingCart.length === 0) {
        cartContainer.innerHTML = `<div class="display-message">The shopping cart is empty</div>`;
    }

    shoppingCart.forEach((favourite) => {
        cartContainer.innerHTML += `
            <div class="product col-sm-12 col-md-6 col-lg-3">
                <img src="${favourite.image}" alt="${favourite.name}" class="product__img">
                <h4>${favourite.name}</h4>
                <p>${favourite.price} €</p>
                <p>${favourite.description}</p>
                <i class="fa fa-heart" data-id="${favourite.id}" data-name="${favourite.name}"></i>
            </div>
        `;
    });
}

createShoppingList();