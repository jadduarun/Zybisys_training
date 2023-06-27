import { insertData } from "./modules/add-location.js";
import { closePopup } from "./modules/closePopUp.js";
import { clearInputfield } from "./modules/clear-input.js";
import { loader } from "./modules/loader.js";

let weatherFormContainer = document.getElementById("weather-form");
let weatherTableContainer = document.getElementById("weather-table");
let weatherLoaderContainer = document.getElementById("weather-loader");
let weatherPopupBgContainer = document.getElementById("weather-popupbg");
let weatherPopupContainer = document.getElementById("weather-popup");

fetch("./components/weather-form.html")
  .then((response) => response.text())
  .then((html) => {
    weatherFormContainer.innerHTML = html;
  });

fetch("./components/weather-table.html")
  .then((response) => response.text())
  .then((html) => {
    weatherTableContainer.innerHTML = html;
  });

fetch("./components/loader.html")
  .then((response) => response.text())
  .then((html) => {
    weatherLoaderContainer.innerHTML = html;
  });

fetch("./components/popupbg.html")
  .then((response) => response.text())
  .then((html) => {
    weatherPopupBgContainer.innerHTML = html;
  });

fetch("./components/popup.html")
  .then((response) => response.text())
  .then((html) => {
    weatherPopupContainer.innerHTML = html;
  });

let weather_form = document.getElementById("weather-form");
weather_form.addEventListener("submit", (event) => {
  event.preventDefault();
  let locationName=document.getElementById("location").value;

  const API_KEY = "c7a9299a3d8da1d910da08bcffb48a3b"
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`


  loader(true)
  fetch(url).then(response => response.json()).then(response => {
    loader(false)
    if (response.cod == 200) {
        let locName = response.name;
        let temp = response.main.temp - 273.15;
        let hum = response.main.humidity;
        insertData(locName,temp,hum);
        clearInputfield();
    }
    else {
      clearInputfield();
      alert("Enter the Correct Location");
    }
  })
})

window.addEventListener("click", (event) => {

  let popupbg = document.getElementById("popupbg");

  if (event.target == popupbg) {
    closePopup()
  }
})

window.addEventListener("click", (event) => {

let popup = document.getElementById("closeIcon");

  if (event.target == popup) {
    closePopup()
  }
})
