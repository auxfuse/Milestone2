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
let settingsIcon = document.querySelector("#settings");
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

settingsIcon.onclick = () => openModal();
diffDropdown.onchange = () => setDiff();
themeDropdown.onchange = () => setTheme();

// Arrays

    //all JSON files received from Github user Sindresorhus
const wordArray = [
    ['pokemon', 'https://raw.githubusercontent.com/sindresorhus/pokemon/master/data/en.json'],
    ['superhero', 'https://raw.githubusercontent.com/sindresorhus/superheroes/master/superheroes.json'],
    ['supervillain', 'https://raw.githubusercontent.com/sindresorhus/supervillains/master/supervillains.json']
];

const wordList = {
    pokemon: [],
    superhero: [],
    supervillain: []
};


    //Load values from JSON file and populate into correct wordList object Key-value pair
wordArray.forEach(item => {
    fetch(item[1])
    //res.Json() used to capture JSON response data and then assign it to the relevant wordList object key
        .then(res => res.json())
        .then(data => {
            wordList[item[0]] = data;
            console.log(wordList);
        })
        .catch(err => console.log(err))
});

//Change theme background & set themeSpan HUD element text to theme value
function setTheme(){
    themeSpan.innerHTML = themeDropdown.value;
    selected = themeDropdown.value;

    if (themeDropdown.value === "pokemon"){
        bodyBg.classList.add("pokemon-bg");
    } else if (themeDropdown.value === "superhero"){
        bodyBg.classList.add("superhero-bg");
    } else if (themeDropdown.value === "supervillain"){
        bodyBg.classList.add("supervillain-bg");
    }
}
setTheme();

//Set difficulty and time to beat HUD elements
function setDiff(){
    diffSpan.innerHTML = diffDropdown.value;

    if (diffDropdown.value === "easy"){
        timeSpan.innerHTML = 8;
    } else if (diffDropdown.value === "medium"){
        timeSpan.innerHTML = 6;
    } else if (diffDropdown.value === "hard"){
        timeSpan.innerHTML = 4;
    }
}
setDiff();

//Show word to user
function wordToMatch(){
    let randomWord = Math.floor(Math.random() * wordList[item].length);
    showWord.innerHTML = wordList[item][randomWord];
    console.log(wordList[item][randomWord]);
}