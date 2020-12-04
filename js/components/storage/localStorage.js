// Get Shopping Cart
export function getShoppingCart() {
    const shoppingCart = localStorage.getItem("shoppingcart");

    if (shoppingCart === null) {
        return [];
    } else {
        return JSON.parse(shoppingCart);
    }
}

// Admin Variables
const tokenKey = "token";
const userKey = "user";

// Save Token
export function saveToken(token){
    saveToStorage(tokenKey, token);
}

// Get Token
export function getToken(){
    return getFromStorage(tokenKey);
}

export const token = getToken();

// Save User
export function saveUser(user){
    saveToStorage(userKey, user);
}

// Get Username
export function getUsername(){
    const user = getFromStorage(userKey);

    if(user){
        return user.username;
    }

    return null;
}

// Save to storage
export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Get from Storage
function getFromStorage(key){
    const value = localStorage.getItem(key);

    if(!value){
        return null;
    }

    return JSON.parse(value);
}

// Clear admin information
export function clearAdmin(){
    localStorage.removeItem("user");
    localStorage.removeItem("token");
}