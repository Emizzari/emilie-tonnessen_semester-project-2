import {baseURL} from "../../../components/settings/url.js";
import {token} from "../../../components/storage/localStorage.js";

export default function deleteButton(id) {
    const button = document.querySelector(".edit__delete-button");

    button.onclick = async function () {
        const doDelete = confirm("Are you sure you want to delete this?");

        if (doDelete) {
            const url = baseURL + "/products/" + id;

            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const response = await fetch(url, options);
                const json = await response.json();

                location.href = "./edit-product.html";

            } catch (error) {
                console.log(error);
            }
        }
    };
}
