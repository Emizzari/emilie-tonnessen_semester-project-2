export async function fetchAPI(afunction, url) {
    try {
        const response = await fetch(url);
        const JSON = await response.json();
        const result = JSON;

        afunction(result);

    } catch (error) {
        console.log(error);
    }
}