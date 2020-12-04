import { getShoppingCart } from "../storage/localStorage.js";
import displayMessage from "../messages/displayMessage.js";

export function createShoppingCart (){
    const shoppingCart = getShoppingCart();

    const cartContainer = document.querySelector(".cart__products__container");

    cartContainer.innerHTML = "";

    if (shoppingCart.length === 0) {
        displayMessage(
            "The cart is empty", 
            ".cart__products__container"
        );
    }

    /* Display products from the localStorage() */
    shoppingCart.forEach(function (product) {
        console.log(product);
        cartContainer.innerHTML += `
            <div class="cart__products__card col-12 row">
                <img src="${product.image}" alt="${product.title}" class="col-sm-12 col-md-4 col-lg cart__products__card__image">

                <div class="cart__products__card__content col-sm-12 col-lg ">
                    <h5 class="cart__products__card__title col-sm-12">${product.title}</h5>
                    <p class="cart__products__card__desc col-sm-12">
                        ${product.description}
                    </p>
                    <a href="${product.url}" class="cart__products__card__link link">
                        View Product <i class="fal fa-angle-right"></i>
                    </a>
                </div>
                <p class="cart__products__card__price col-sm">
                    ${product.price} NOK
                </p>
            </div>
        `;
    });


    /* Total Price: */
    const totalPriceContainer = document.querySelector(".cart__products__total__price")

    let totalPrice = 0;

    for(let i = 0; i < shoppingCart.length; i++) {
        let price = parseFloat(shoppingCart[i].price);

        totalPrice += price;
    }

    totalPriceContainer.innerHTML = totalPrice + " NOK"; 
}