//Load modal window on page load
$(document).ready(function(){
    $("#openingSettings").modal('show');
});

//Global statements

let themeSpan = document.querySelector("#theme-span");

//Load modal window on "Settings" click
function openModal(){
    $("#openingSettings").modal('show');
}

//Change theme background
function changeBackground(){
    let bodyBg = document.body;
    let themeIndex = document.getElementById("theme");
    let themeValue = themeIndex.options[themeIndex.selectedIndex].value;

    if (themeValue === "pokemon"){
        bodyBg.classList.add("pokemon-bg");
        themeSpan.innerHTML = themeValue;
    } else {
        bodyBg.classList.remove("pokemon-bg")
    }
}
changeBackground();
