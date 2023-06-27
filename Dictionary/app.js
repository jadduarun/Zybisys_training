import { displayContent } from "./modules/display-content.js";
import { lightTheme } from "./modules/light-theme.js";
import { darkTheme } from "./modules/dark-theme.js";

let dicBodyContainer = document.getElementById("body");
let dicHeadContainer = document.getElementById("heading");
let dicSearchContainer = document.getElementById("search_box");
let dicLoadContainer = document.getElementById("dic_loader");
let dicTitleContainer = document.getElementById("title");
let dicNounContainer = document.getElementById("noun");
let dicVerbContainer = document.getElementById("verb");
let dicSourceContainer = document.getElementById("source");

fetch("./components/heading.html")
    .then((response) => response.text())
    .then((html) => {
        dicHeadContainer.innerHTML = html;
    });

fetch("./components/search_box.html")
    .then((response) => response.text())
    .then((html) => {
        dicSearchContainer.innerHTML = html;
    });

fetch("./components/loader.html")
    .then((response) => response.text())
    .then((html) => {
        dicLoadContainer.innerHTML = html;
    });

fetch("./components/title.html")
    .then((response) => response.text())
    .then((html) => {
        dicTitleContainer.innerHTML = html;
    });

fetch("./components/noun.html")
    .then((response) => response.text())
    .then((html) => {
        dicNounContainer.innerHTML = html;
    });

fetch("./components/verb.html")
    .then((response) => response.text())
    .then((html) => {
        dicVerbContainer.innerHTML = html;
    });

fetch("./components/source.html")
    .then((response) => response.text())
    .then((html) => {
        dicSourceContainer.innerHTML = html;
    });

let form = document.getElementById("search_box");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputTextValue = document.getElementById("search").value;
    displayContent(inputTextValue)
})

window.addEventListener("click", (event) => {

    let left_btn = document.getElementById("on");
    let right_btn = document.getElementById("off");

    if (event.target == left_btn) {
        lightTheme();
    }

    if (event.target == right_btn) {
        darkTheme();
    }
})

window.addEventListener("change", (event) => {
    event.preventDefault();

    let lang = document.getElementById("lang");
    let langValue = lang.value;

    if (event.target == lang) {

        switch (langValue) {
            case 'serif':
                dicBodyContainer.style.fontFamily = "serif";
                break;
            case 'cursive':
                dicBodyContainer.style.fontFamily = "cursive";
                break;
            case 'system':
                dicBodyContainer.style.fontFamily = " system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
                break;
            default:
                break;
        }
    }
})