const button = document.getElementsByClassName("button")[0];
const share_div = document.getElementsByClassName("share-div")[0];
const author = document.getElementById("author");


button.addEventListener("click", () => {
    share_div.classList.toggle("hidden");
    button.classList.toggle("setGray");
});