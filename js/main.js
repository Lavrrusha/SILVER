const menuButtonEl = document.getElementById("menu-button");
const dropDownMenuEl = document.getElementById("menu");


menuButtonEl.addEventListener("click", () => {
    dropDownMenuEl.classList.toggle("hidden")
})