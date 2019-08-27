//Global Statements

    //Modal Elements to target via Javascript
const modalMenu = document.querySelector("#openingSettings");
const diffDropdown = document.querySelector("#difficulty");
const themeDropdown = document.querySelector("#theme");
const startButton = document.querySelector(".btn");

    //Main page Elements to target via Javascript
const bodyBg = document.body;
const openSettings = document.querySelector("#settings")
const gameboard = document.querySelector(".game-board");
const themeSpan = document.querySelector("#theme-span");
const diffSpan = document.querySelector("#diff-span");
const shownWord = document.querySelector("#shown-word");
const timeSpan = document.querySelector("#time-span");
const userInput = document.querySelector("#user-input");
const scoreSpan = document.querySelector("#score-span");

//Game board object
let game = {
    selectedWord: null,
    selectedTheme: null,
    selectedDifficulty: null,
    jsonArray: [
        ['pokemon', 'https://raw.githubusercontent.com/sindresorhus/pokemon/master/data/en.json'],
        ['superhero', 'https://raw.githubusercontent.com/sindresorhus/superheroes/master/superheroes.json'],
        ['supervillain', 'https://raw.githubusercontent.com/sindresorhus/supervillains/master/supervillains.json']
    ],
    wordList: {
        pokemon: [],
        superhero: [],
        supervillain: []
    },
    setDifficulty: (value) => {
        game.selectedDifficulty = value;
        diffSpan.innerHTML = game.selectedDifficulty;

        if (value === "easy"){
            timeSpan.innerHTML = 8;
        } else if (value === "medium"){
            timeSpan.innerHTML = 6;
        } else if (value === "hard"){
            timeSpan.innerHTML = 4;
        }
    },
    setTheme: (value) => {
      game.selectedTheme = value;
      themeSpan.innerHTML = value;
      bodyBg.classList.add(`${value}-bg`);
      game.setWord();
    },
    setWord: () => {
        const random = Math.floor(Math.random() * game.wordList[game.selectedTheme].length);
        game.selectedWord = game.wordList[game.selectedTheme][random];
        shownWord.innerHTML = game.selectedWord;
    },
    matchWord: () => {
        if (userInput.value === shownWord.innerHTML){
            console.log("Yes");
            game.setWord();
            shownWord.innerHTML = game.selectedWord;
        } else {
            console.log("No");
        }
    }
};

//Modal DOM change to hide or show gameboard
const observer = new MutationObserver(() => {
    if (modalMenu.style.display == "block"){
        gameboard.style.display = "none"
    } else {
        gameboard.style.display = "block"
    }
});
observer.observe(modalMenu, { attributes: true, childList: true});

//Initialise Functions

    //Load values from JSON file and populate into correct wordList key-value pair
function getData() {
    return Promise.all(game.jsonArray.map(async item => {
        let request = await fetch(item[1]);
        game.wordList[item[0]] = await request.json();
    }));
}

//Event Listeners to listen for changes of certain elements
function eventListeners() {
    //Modal elements event Listeners
    themeDropdown.onchange = ({target}) => game.setTheme(target.value);
    diffDropdown.onchange = ({target}) => game.setDifficulty(target.value);
    startButton.onclick = () => startGame();
    //Gameboard elements event Listeners
    openSettings.onclick = () => $("#openingSettings").modal("show");
    userInput.onchange = () => game.matchWord();
}

//Start game
function startGame() {
    $("#openingSettings").modal("hide");
}

//Init the game
async function init() {
    await getData();
    eventListeners();
    $("#openingSettings").modal("show");
    game.matchWord();

    //TEST Data
    game.setTheme("superhero");
    game.setDifficulty("medium");
}
init();