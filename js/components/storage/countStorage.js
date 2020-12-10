export default function countStorage(){
    const cartIcon = document.querySelector(".cart__icon-quantity");
    const pageTitle = document.querySelector(".cart__total-items");

    if(localStorage["shoppingcart"]){
        const totalitems = JSON.parse(localStorage["shoppingcart"]).length; 
        cartIcon.innerHTML = totalitems;
    }
    
    if(localStorage["shoppingcart"] && pageTitle) {
        const totalitems = JSON.parse(localStorage["shoppingcart"]).length; 
        pageTitle.innerHTML = `(${totalitems})`;
    }
}