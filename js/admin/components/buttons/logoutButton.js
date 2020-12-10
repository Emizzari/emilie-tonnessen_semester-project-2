import { clearAdmin } from "../../../components/storage/localStorage.js";

export default function logoutButton() {
    const button = document.querySelector("#logout");

    if (button) {
        button.onclick = function () {
            const doLogout = confirm("Are you sure?");

            if (doLogout) {
                clearAdmin();
                location.href = "../admin";
            }
        };
    }
}