export const loader = (isLoading) => {
    let loaderData = document.getElementById("loader");
    if(isLoading) {
        loaderData.style.display = "block";
    }else{
        loaderData.style.display = "none";
    }
}