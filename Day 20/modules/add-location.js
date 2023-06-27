import { showPopUp } from "./popUp.js";
import { loader } from "./loader.js";
export const locations = [];

var count = 1;
var data = [];
export const insertData = (locName, temp, hum) => {
    if (data.includes(locName) === false) {
        var table = document.getElementById("weather_table");
        var row = table.insertRow(-1);
        var s_no = row.insertCell(0);
        var locname = row.insertCell(1);
        var show = row.insertCell(2);
        var delete1 = row.insertCell(3);
        s_no.innerHTML = count++;
        locname.innerHTML = locName;
        show.innerHTML =
            "<button style='padding:15px;margin:10px;margin-left:10px' type='submit' id='show'/>Show</button>";
        delete1.innerHTML =
            `<button style='padding:15px;margin:10px;margin-left:10px' type='submit' id='delete'>Delete</button>`;
        data.push(locname.innerHTML)

        delete1.addEventListener("click", function (locname) {
            row.remove(locname);
            for (var i = 1; i < table.rows.length; i++) {
                table.rows[i].cells[0].innerHTML = i;
            }
            count--;
            for (var i = data.length - 1; i >= 0; i--) {
                if (data[i] === locName) {
                    data.splice(i, 1);
                }
            }
        })

        show.addEventListener("click", function () {
            loader(true)
            try {
                showPopUp(temp, hum, locName);
            }
            catch(error) {
                console.log(error.message)
            }
        })
    }
    else {
        alert("Entered Location already in the Table")
    }
}