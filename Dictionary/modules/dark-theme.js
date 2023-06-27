export const darkTheme = () => {
    let body = document.getElementById("whole_body");
    let select = document.getElementById("lang");
    let on = document.getElementById("on");
    let off = document.getElementById("off");
    body.style.backgroundColor = "black"
    body.style.color = "white"
    select.style.backgroundColor = "black"
    select.style.color = "white"
    on.style.backgroundColor = "#757575"
    off.style.backgroundColor = "white"
}