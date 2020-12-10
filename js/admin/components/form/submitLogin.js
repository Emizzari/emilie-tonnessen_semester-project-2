import displayMessage from "../../../components/messages/displayMessage.js";
import { doLogin } from "./doLogin.js";
import { username, password, feedback } from "./containerVariables.js";

export function submitLogin(event) {
    event.preventDefault();

    feedback.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage(
            "feedback feedback--error", 
            "Please insert a password or a username", 
            ".feedback"
            );
    }

    doLogin(usernameValue, passwordValue);
}