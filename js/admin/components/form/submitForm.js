import { updateProduct } from "./updateProduct.js";

const message = document.querySelector(".edit__form__feedback");
const featuredTrue = document.querySelector("#featured__true");
const idInput = document.querySelector("#id");

// Submit Form Function
export function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const imageValue = image.value;
    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();

    let featuredValue;
    
    if(featuredTrue.checked){
        featuredValue = true;
    } else{
        featuredValue = false;
    }

    const idValue = idInput.value;

    if (
        imageValue === 0 ||
        titleValue.length === 0 || 
        priceValue.length === 0 || 
        isNaN(priceValue) || 
        descriptionValue.length === 0 ||
        featuredValue === null
        ){
        return displayMessage("feedback feedback--error", "Please supply proper values", ".edit__form__feedback");
    }

    updateProduct(imageValue, titleValue, priceValue, descriptionValue, featuredValue, idValue);
}