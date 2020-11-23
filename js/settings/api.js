import {id} from "../dom/createDetails.js";

export const baseURL = 'http://localhost:1337';
export const productsURL = baseURL + "/products/";
export const bannerURL = baseURL + "/home/";
export const detailsURL =` ${productsURL}${id}` ;