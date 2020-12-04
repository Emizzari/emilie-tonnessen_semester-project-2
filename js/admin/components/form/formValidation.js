import { image, imageError, title, titleError, price, priceError, description, descriptionError } from "./containerVariables.js";

// Function to validate the contact form
export function validateForm() {
    let imageHasError;
    let titleHasError;
    let priceHasError;
    let descriptionHasError;

    // Image URL
    const imageURL = image.value;

    if (validateURL(imageURL) === true) {
        imageError.style.display = "none";
        imageHasError = false;
    } else {
        imageError.style.display = "block";
        imageHasError = true;
    }

    // Title
    const titleValue = title.value;

    if (validateLength(titleValue, 1) === true) {
        titleError.style.display = "none";
        titleHasError = false;
    } else {
        titleError.style.display = "block";
        titleHasError = true;
    }

    // Price
    const priceValue = price.value;

    if (validateLength(priceValue, 1) === true) {
        priceError.style.display = "none";
        priceHasError = false;
    } else {
        priceError.style.display = "block";
        priceHasError = true;
    }

    // Description
    const descriptionValue = description.value;

    if (validateLength(descriptionValue, 5) === true) {
        descriptionError.style.display = "none";
        descriptionHasError = false;
    } else {
        descriptionError.style.display = "block";
        descriptionHasError = true;
    }

    // Featured
    let featuredValue;

    // Validate Check
    if (imageHasError === true || 
        titleHasError === true || 
        priceHasError === true ||
        descriptionHasError === true ||
        featuredValue === null ){
        return false;
    } else {
         return true;
    }
}

function validateLength(value, lenghtToCheck) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= lenghtToCheck) {
        return true;
    } else {
        return false; 
    }
}

function validateURL(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}