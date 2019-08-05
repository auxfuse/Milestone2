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

//Change theme background & set themeSpan text to theme value
function changeBackground(){
    let bodyBg = document.body;
    let themeIndex = document.getElementById("theme");
    let themeValue = themeIndex.options[themeIndex.selectedIndex].value;
    themeSpan.innerHTML = themeValue;

    if (themeValue === "pokemon"){
        bodyBg.classList.add("pokemon-bg");
    } else if (themeValue === "superheroes"){
        bodyBg.classList.add("comicbook-bg");
    } else if (themeValue === "cars"){
        bodyBg.classList.add("cars-bg");
    } else if (themeValue === "nature"){
        bodyBg.classList.add("nature-bg");
    } else if (themeValue === "european cities"){
        bodyBg.classList.add("city-bg");
    }
}
changeBackground();
