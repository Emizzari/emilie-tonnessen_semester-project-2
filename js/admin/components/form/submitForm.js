import { updateProduct } from "./updateProduct.js";
import { addProduct } from "./addProduct.js";
import { feedback, featuredTrue, idInput } from "./containerVariables.js";
import { validateForm } from "./formValidation.js";
import displayMessage from "../../../components/messages/displayMessage.js";

// Submit Form Function
export function submitForm(event) {
    event.preventDefault();

    feedback.innerHTML = "";

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

    if (validateForm() === false){
        return displayMessage(
            "feedback feedback--error", 
            "Please enter proper values", 
            ".feedback"
        );
    }

    if(document.URL.includes("add-product")){
        addProduct(imageValue, titleValue, priceValue, descriptionValue, featuredValue);
    } else{
        updateProduct(imageValue, titleValue, priceValue, descriptionValue, featuredValue, idValue);
    }
}