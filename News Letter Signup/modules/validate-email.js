import { showSubscribe } from "./show-subscribe.js";
import { clearInputfield } from "./clear-input.js";

export const ValidateEmail = (inputText) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        showSubscribe(inputText);
        clearInputfield();
        let invalid_email = document.getElementById("valid_email")
        invalid_email.innerText = "";
        inputText.style.borderColor = "black";
        inputText.style.color = "black";
        inputText.style.backgroundColor = "white";
    }
    else {
        inputText.style.borderColor = "red";
        inputText.style.color = "red";
        inputText.style.backgroundColor = "#ffe8e6";
        let invalid_email = document.getElementById("valid_email")
        invalid_email.innerText = "Valid email required";
    }
}