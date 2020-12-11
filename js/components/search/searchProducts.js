import { createProduct } from "../html/createProduct.js";

export function searchProducts(products) {
    console.log(products);
    const search = document.querySelector(".search__input");

    search.onkeyup = function (event) {
        const searchValue = event.target.value;

        console.log(searchValue);

        const filteredProducts = products.filter(function (product) {
            if (product.title.toLowerCase().includes(searchValue) || 
                product.description.toLowerCase().includes(searchValue)){
                return true;
            }
        });

        console.log(filteredProducts);

        createProduct(filteredProducts);
    };
}