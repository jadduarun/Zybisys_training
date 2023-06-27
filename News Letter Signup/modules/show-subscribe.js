import { openPopup } from "./open-popup.js";

export const showSubscribe = (inputText) => {
    let verified_email = document.getElementById("verified_email");
    verified_email.innerText = inputText.value;
    openPopup()
}