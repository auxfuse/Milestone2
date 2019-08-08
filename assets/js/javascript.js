//Load modal window on page load
$(document).ready(function(){
    $("#openingSettings").modal('show');
});

//Global statements

let themeSpan = document.querySelector("#theme-span");
let diffSpan = document.querySelector("#diff-span");
let timeSpan = document.querySelector("#time-span");
let scoreSpan = document.querySelector("#score-span");

// Arrays

var currentList = [];

var pokemon = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie"
];

var superheroes = [
	"3-D Man",
	"A-Bomb",
	"A.I.M.",
	"Aaron Stack",
	"Abbey",
	"Abomination",
	"Absorbing Man",
	"Abyss",
	"Acolytes",
	"Adam Destine",
];

var cars = [
    "Ford",
    "Mazda",
    "Peugeot",
    "Mitsubishi",
    "Honda"
];

var nature = [
    "Spruce"
    "Rose",
    "Elm",
    "Tulip",
    "Buttercup"
];

var europeanCities = [
    "Dublin",
    "London",
    "Paris",
    "Madrid",
    "Rome"
];

//Load modal window on "Settings" click
function openModal(){
    $("#openingSettings").modal('show');
}

//Change theme background & set themeSpan HUD element text to theme value
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

//Set difficulty and time to beat HUD elements
function setDiff(){
    let diffIndex = document.getElementById("difficulty");
    let diffValue = diffIndex.options[diffIndex.selectedIndex].value;
    diffSpan.innerHTML = diffValue;

    if (diffValue === "easy"){
        timeSpan.innerHTML = 8;
    } else if (diffValue === "medium"){
        timeSpan.innerHTML = 6;
    } else if (diffValue === "hard"){
        timeSpan.innerHTML = 4;
    }
}
setDiff();