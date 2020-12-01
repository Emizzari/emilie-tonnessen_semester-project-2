export async function fetchAPI(afunction, url) {
    try {
        const productResponse = await fetch(url);
        const productsJSON = await productResponse.json();
        const result = productsJSON;

        afunction(result);

    } catch (error) {
        console.log(error);
    }
}