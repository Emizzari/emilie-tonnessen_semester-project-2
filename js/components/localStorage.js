export function getShoppingCart() {
    const shoppingCart = localStorage.getItem("shoppingcart");

    if (shoppingCart === null) {
        return [];
    } else {
        return JSON.parse(shoppingCart);
    }
}