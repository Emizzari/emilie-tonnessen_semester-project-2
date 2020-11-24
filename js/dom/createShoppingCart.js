import { baseURL } from "../settings/api.js";
import { getShoppingCart } from "../components/localStorage.js";

export function createShoppingCart (){
    const shoppingCart = getShoppingCart();

    const cartContainer = document.querySelector(".cart__products__container");

    if (shoppingCart.length === 0) {
        cartContainer.innerHTML = `<div class="display-message">The shopping cart is empty</div>`;
    } 

    shoppingCart.forEach(function (product) {
        cartContainer.innerHTML += `
            <div class="cart__products__card col-12 row">
                <img src="${baseURL}${product.image}" alt="${product.title}" class="col-sm-12 col-md-4 col-lg cart__products__card__image">

                <div class="cart__products__card__content col-sm-12 col-lg ">
                    <h5 class="product__title col-sm-12">${product.title}</h5>
                    <p class="product__desc col-sm-12">
                        ${product.description}
                    </p>
                    <a href="${product.url}" class="product__link link">
                        View Product <i class="fal fa-chevron-right"></i>
                    </a>
                </div>
                <div class="col-sm cart__products__card__quantity ">
                    <i class="fal fa-minus-circle"></i>
                    1
                    <i class="fal fa-plus-circle"></i>
                </div>
                <p class="cart__products__card__price col-sm">
                    ${product.price} NOK
                </p>
            </div>
        `;
    });
}