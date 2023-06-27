import { ValidateEmail } from "./modules/validate-email.js";
import { closePopup } from "./modules/close-popup.js";

let NewsHeadingContainer = document.getElementById("heading");
let NewsUpdatesContainer = document.getElementById("updates");
let NewsBenefitsContainer = document.getElementById("benefits");
let NewsFormContainer = document.getElementById("form");
let NewsImageContainer = document.getElementById("news-image");
let NewsPopupContainer = document.getElementById("popup");

fetch("./components/heading.html")
    .then((response) => response.text())
    .then((html) => {
        NewsHeadingContainer.innerHTML = html;
    });

fetch("./components/updates.html")
    .then((response) => response.text())
    .then((html) => {
        NewsUpdatesContainer.innerHTML = html;
    });

fetch("./components/benefits.html")
    .then((response) => response.text())
    .then((html) => {
        NewsBenefitsContainer.innerHTML = html;
    });

fetch("./components/form.html")
    .then((response) => response.text())
    .then((html) => {
        NewsFormContainer.innerHTML = html;
    });

fetch("./components/news-image.html")
    .then((response) => response.text())
    .then((html) => {
        NewsImageContainer.innerHTML = html;
    });

fetch("./components/subscribe.html")
    .then((response) => response.text())
    .then((html) => {
        NewsPopupContainer.innerHTML = html;
    });

window.addEventListener("click", (event) => {
    event.preventDefault();

    let subscribe = document.getElementById("subscribe");
    let inputText = document.getElementById("email")

    if (event.target == subscribe) {
        ValidateEmail(inputText)
    }
})

window.addEventListener("click", (event) => {

    let dismiss = document.getElementById("dismiss");

    if (event.target == dismiss) {
        closePopup()
    }
})

let popupbg = document.getElementById("popupbg");
window.addEventListener("click", (event) => {
    if (event.target == popupbg) {
        closePopup();
    }
})