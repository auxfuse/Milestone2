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

    //Set Game elements to null before selection or generation of elements occur.
    selectedTheme: null,
    selectedDifficulty: null,
    selectedWord: null,
    showTime: null,
    showScore: null,

    //Named of JSON files and links to same to be fetched and indexed into wordList object function.
    jsonArray: [
        ['pokemon', 'https://raw.githubusercontent.com/sindresorhus/pokemon/master/data/en.json'],
        ['superhero', 'https://raw.githubusercontent.com/sindresorhus/superheroes/master/superheroes.json'],
        ['supervillain', 'https://raw.githubusercontent.com/sindresorhus/supervillains/master/supervillains.json']
    ],

    //Game object key-value pair arrays to hold fetched JSON values.
    wordList: {
        pokemon: [],
        superhero: [],
        supervillain: []
    },

    //Set Difficulty based on user selection in modal menu.
    setDifficulty: (value) => {

        //Set game Heads up Display difficulty to value selected by User.
        game.selectedDifficulty = value;
        diffSpan.innerHTML = game.selectedDifficulty;

        //Depending on difficulty selected by User, timeSpan timer set to appropriate countdown.
        if (value === "easy"){
            timeSpan.innerHTML = 8;
        } else if (value === "medium"){
            timeSpan.innerHTML = 6;
        } else if (value === "hard"){
            timeSpan.innerHTML = 4;
        }
    },

    //Set Theme based on user selection in modal menu.
    setTheme: (value) => {
      game.selectedTheme = value;
      themeSpan.innerHTML = value;

      //Change background by using template literal to insert theme value & -bg.
      bodyBg.classList.add(`${value}-bg`);
    },

    //Create random word and display to user via flooring the result of random integer multiplied by the length of
    //the selected array.
    setWord: () => {
        const random = Math.floor(Math.random() * game.wordList[game.selectedTheme].length);
        game.selectedWord = game.wordList[game.selectedTheme][random];
        shownWord.innerHTML = game.selectedWord;
    },

    //matchWord function to check user inputs versus the current shown word.
    matchWord: () => {

        //Using toLowerCase() built in javascript function to ensure case match on input versus shown word.
        if (userInput.value.toLowerCase() === shownWord.innerHTML.toLowerCase()){
            console.log("Yes");
            game.resetUserInput();
            game.setWord();
            shownWord.innerHTML = game.selectedWord;
            game.score(+1);
        } else {
            console.log("No");
        }
    },

    //Reset user input to be used on word success.
    resetUserInput: () => {
        userInput.value = "";
    },

    //Score function to track score for the user and display on the Heads up Display.
    score: (value) => {
        game.showScore += value;
        scoreSpan.innerHTML = value;
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
    userInput.onkeyup = () => game.matchWord();
}

//Start game
function startGame() {
    $("#openingSettings").modal("hide");
    game.setWord();
}

//Init the game
async function init() {
    await getData();
    eventListeners();
    $("#openingSettings").modal("show");
}
init();