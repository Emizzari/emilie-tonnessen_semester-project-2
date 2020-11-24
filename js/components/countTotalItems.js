export default function countTotalItems(){
    const cartIcon = document.querySelector(".cart__icon-quantity");
    const pageTitle = document.querySelector(".cart__total-items");
    var totalitems = JSON.parse(localStorage["shoppingcart"]).length; 

    cartIcon.innerHTML = totalitems;

    if(pageTitle) {
        pageTitle.innerHTML = `(${totalitems})`;
    }
}