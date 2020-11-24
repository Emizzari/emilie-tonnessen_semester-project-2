export function getShoppingCart() {
    const favs = localStorage.getItem("shopping-cart");

    if (favs === null) {
        return [];
    } else {
        return JSON.parse(favs);
    }
}