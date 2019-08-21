window.addEventListener('load', initialise);

//Load modal window on page load
$(document).ready(function(){
    $("#openingSettings").modal('show');
});

//Load modal window on "Settings" click
function openModal(){
    $("#openingSettings").modal('show');
}

//initialise Gameboard
function initialise(){
    wordToMatch();
}

//Global statements

    //modal elements for targeting
let diffDropdown = document.querySelector("#difficulty");
let themeDropdown = document.querySelector("#theme");
    //main page elements for js targeting
let bodyBg = document.body;
let themeSpan = document.querySelector("#theme-span");
let diffSpan = document.querySelector("#diff-span");
let timeSpan = document.querySelector("#time-span");
let scoreSpan = document.querySelector("#score-span");
let showWord = document.querySelector("#shown-word");

//Call html elements

diffDropdown.onchange = () => setDiff();
themeDropdown.onchange = () => changeBackground();

// Arrays

    //all JSON files received from Github user Sindresorhus
const wordList = [
    ['pokemon', 'https://raw.githubusercontent.com/sindresorhus/pokemon/master/data/en.json'],
    ['superheroes', 'https://raw.githubusercontent.com/sindresorhus/superheroes/master/superheroes.json'],
    ['supervillains', 'https://raw.githubusercontent.com/sindresorhus/supervillains/master/supervillains.json'],
    ['superb', 'https://raw.githubusercontent.com/sindresorhus/superb/master/words.json'],
    ['yes Words', 'https://raw.githubusercontent.com/sindresorhus/yes-no-words/master/yes.json'],
    ['no Words', 'https://raw.githubusercontent.com/sindresorhus/yes-no-words/master/no.json'],
    ['dog Names', 'https://raw.githubusercontent.com/sindresorhus/dog-names/master/male-dog-names.json'],
    ['cat Names', 'https://raw.githubusercontent.com/sindresorhus/cat-names/master/cat-names.json']
];



//Change theme background & set themeSpan HUD element text to theme value
function changeBackground(){
    themeSpan.innerHTML = themeDropdown.value;

    if (themeDropdown === "pokemon"){
        bodyBg.classList.add("pokemon-bg");
    } else if (themeDropdown === "superheroes"){
        bodyBg.classList.add("comicbook-bg");
    } else if (themeDropdown === "cars"){
        bodyBg.classList.add("cars-bg");
    } else if (themeDropdown === "nature"){
        bodyBg.classList.add("nature-bg");
    } else if (themeDropdown === "european cities"){
        bodyBg.classList.add("city-bg");
    }
}
changeBackground();

//Set difficulty and time to beat HUD elements
function setDiff(){
    diffSpan.innerHTML = diffDropdown.value;

    if (diffDropdown === "easy"){
        timeSpan.innerHTML = 8;
    } else if (diffDropdown === "medium"){
        timeSpan.innerHTML = 6;
    } else if (diffDropdown === "hard"){
        timeSpan.innerHTML = 4;
    }
}
setDiff();

//Show word to user
function wordToMatch(){
    let randomWord = Math.floor(Math.random() * wordList[selected].length);
    showWord.innerHTML = wordList[selected][randomWord];
    console.log(wordList[selected][randomWord])
}