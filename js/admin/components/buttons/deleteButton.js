import {baseURL} from "../../../components/settings/url.js";
import {token} from "../../../components/storage/localStorage.js";

export default function deleteButton(id) {
    const button = document.querySelector(".edit__delete-button");

    button.onclick = async function () {
        console.log(id);

        const doDelete = confirm("Are you sure you want to delete this?");
        console.log(doDelete);

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

                location.href = "/admin/edit-product.html";

                console.log(json);
            } catch (error) {
                console.log(error);
            }
        }
    };
}
