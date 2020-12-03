import { createProduct } from "./createProduct.js";

export function createFeaturedProducts(products){
    const featuredProductsContainer = document.querySelector(".featured__products");

    featuredProductsContainer.innerHTML = "";

    /* Loop through featured = true objects */
    const filteredProducts = products.filter(function (product) {
            if (product.featured === true) {
                return true;
            }
        });

    createProduct(filteredProducts);
}