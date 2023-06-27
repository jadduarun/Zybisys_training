export const closePopup = () => {
    let popup = document.getElementById("popup");
    let popupbg = document.getElementById("popupbg");
    popup.style.display = "none";
    popupbg.style.display = "none";
}