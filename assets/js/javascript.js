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
    showTime: 0,
    showScore: 0,

    //Names of JSON files and links to same to be fetched and indexed into wordList object function.
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
        game.selectedDifficulty = game.showTime;
        diffSpan.innerHTML = value;

        //Depending on difficulty selected by User, timeSpan timer set to appropriate countdown.
        if (value === "easy"){
            game.showTime = 8;
        } else if (value === "medium"){
            game.showTime = 6;
        } else if (value === "hard"){
            game.showTime = 4;
        }
    },

    //Set Theme based on user selection in modal menu.
    setTheme: (value) => {
      game.selectedTheme = value;
      themeSpan.innerHTML = value;

      //Change background by using template literal to insert theme value name as string & concat "-bg" to construct class name.
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

            clearInterval(interval);

            game.resetUserInput();

            game.showScore++;
            scoreSpan.innerHTML = game.showScore;

            game.gameClock(true);

        } else {

            console.log("No");

        }
    },

    //Reset user input to be used on word success.
    resetUserInput: () => {
        userInput.value = "";
    },

    //Create timer to track and decrement timer based on Difficulty selected by user.
    gameClock (start = null) {

        if (start) {
            game.resetUserInput();
            game.setWord();

            game.showTime = game.showTime + 1;

            interval = setInterval(game.gameClock, 1000);

            return;
        };

        if (game.showTime <= 0) {
            clearInterval(interval);
            game.gameClock(true);

        } else if (!start) {
            game.showTime = game.showTime - 1;
        };

        timeSpan.innerHTML = game.showTime;
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
    scoreSpan.innerHTML = 0;
    game.gameClock(true);
}

//Init the game
async function init() {
    await getData();
    eventListeners();
    $("#openingSettings").modal("show");
}
init();