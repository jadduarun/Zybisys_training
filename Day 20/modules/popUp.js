import { openPopup } from "./openPopUp.js";
import { loader } from "./loader.js";

export const showPopUp = (temp, hum, ln) => {
   setTimeout( ()=>{
    loader(false);
    let locationName = document.getElementById("location_name");
    let temperature = document.getElementById("temperature");
    let humidity = document.getElementById("humidity");

    locationName.innerHTML = ln
    temperature.innerHTML = `Temperature: ${temp.toFixed(2)}°C`
    humidity.innerHTML = `Humidity: ${hum}%`

    openPopup();
   },500);
    
}