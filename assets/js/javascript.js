/*
=================================
    Global Variables
=================================
*/

    // Modal Elements to target via Javascript.
const modalMenu = document.querySelector("#openingSettings");
const diffDropdown = document.querySelector("#difficulty");
const themeDropdown = document.querySelector("#theme");
const startButton = document.querySelector(".btn");

    // Main page Elements to target via Javascript.
const bodyBg = document.body;
const openSettings = document.querySelector("#settings")
const gameboard = document.querySelector(".game-board");
const themeSpan = document.querySelector("#theme-span");
const diffSpan = document.querySelector("#diff-span");
const shownWord = document.querySelector("#shown-word");
const timeSpan = document.querySelector("#time-span");
const userInput = document.querySelector("#user-input");
const scoreSpan = document.querySelector("#score-span");

/*
=================================
    Game Board Object
=================================
*/

    // Literal Notation used to create "game" object. Key-value pairs separated via comma ",".
    // Properties are declared at the top, with methods declared after.
    // This keeps the object clean and well structured as per Javascript Literal Notation Object Creation general practices.
let game = {

    // Default setting of Game elements before selection or generation of elements update same.
    selectedTheme: null,
    selectedDifficulty: null,
    selectedWord: null,
    time: 0,
    score: 0,

    // Names of JSON files and links to same to be fetched and indexed into wordList object function.
    originalData: [
        ['pokemon', 'https://raw.githubusercontent.com/sindresorhus/pokemon/master/data/en.json'],
        ['superhero', 'https://raw.githubusercontent.com/sindresorhus/superheroes/master/superheroes.json'],
        ['supervillain', 'https://raw.githubusercontent.com/sindresorhus/supervillains/master/supervillains.json']
    ],

    // wordLists object key-value pair as arrays to hold fetched JSON values.
    wordLists: {
        pokemon: [],
        superhero: [],
        supervillain: []
    },

    // Set Difficulty based on user selection in modal menu.
    setDifficulty: (value) => {

        // Depending on difficulty selected by User update selectedDifficulty property to reflect using an integer, e.g. "8" for easy.
        if (value === "easy"){
            game.selectedDifficulty = 8;
        } else if (value === "medium"){
            game.selectedDifficulty = 6;
        } else if (value === "hard"){
            game.selectedDifficulty  = 4;
        }

        // Set innerText of diffSpan element to the value of the difficulty dropdown selector, "easy", "medium" or "hard".
        diffSpan.innerText = value;
    },

    // Set Theme based on user selection in modal menu.
    setTheme: (value) => {

        // Depending on theme selected by User update selectedTheme property with the value of the theme dropdown selector.
        game.selectedTheme = value;
        // Set innerText of themeSpan element to the value of the theme dropdown selector, e.g. "pokemon".
        themeSpan.innerText = value;

        // Loop through each item in the originalData and remove class name from the body to ensure background and wordLists selection update accordingly.
        // Without this step, the user could not reselect a previous theme to change the background as the class would not be removed from the body.
        game.originalData.forEach(item => document.body.classList.remove(`${item[0]}-bg`));
        // Change background by using template literal to insert theme value name as string & concat "-bg" to construct class name.
        bodyBg.classList.add(`${value}-bg`);
    },

    // Create random word and display via flooring the result to the shownWord element's innerText for the User.
    setWord: () => {

        // Create variable to hold the floored result array index of randomising the multiplication of the selected theme in wordLists length.
        const random = Math.floor(Math.random() * game.wordLists[game.selectedTheme].length);
        // Set the selectedWord to the accessed item by equalling to the sub array index value of selectedTheme[random].
        game.selectedWord = game.wordLists[game.selectedTheme][random];

        // Set innerText of the shownWord element to the returned random result of the above.
        shownWord.innerText = game.selectedWord;
    },

    // matchWord function to check user inputs versus the current shown word.
    matchWord: (value) => {

        // Using toLowerCase() built in javascript function to ensure case match on input versus shown word.
        if (userInput.value.toLowerCase() === shownWord.innerText.toLowerCase()){

            game.score++;

            scoreSpan.innerText = game.score;

            clearInterval(interval);

            game.resetUserInput();

            game.gameClock(true);

        } else {

            console.log("No");

        }
    },

    // Reset user input to be used on word success.
    resetUserInput: () => {
        userInput.value = "";
    },

    // Create timer to track and decrement timer based on Difficulty selected by user.
    gameClock (start) {

        if (start === true) {

            game.resetUserInput();

            game.setWord();

            interval = setInterval(game.gameClock, 1000);

            game.time (+ 1);

            return;
        };

        if (game.time <= 0) {

            clearInterval(interval);

            game.gameClock(true);

        } else if (!start) {
            game.time = game.time - 1;
        };

        timeSpan.innerText = game.time;
    }

};

/*
=================================
    Event Listeners
=================================
*/

function eventListeners() {

    //Modal elements event Listeners
    themeDropdown.onchange = ({target}) => game.setTheme(target.value);
    diffDropdown.onchange = ({target}) => game.setDifficulty(target.value);
    startButton.onclick = () => startGame();

    //Gameboard elements event Listeners
    openSettings.onclick = () => $("#openingSettings").modal("show");
    userInput.onkeyup = ({target}) => game.matchWord(target.value);
}

/*
=================================
    Modal DOM Manipulation
=================================
*/

    // To hide or show gameboard using observer and changing display property of modal and gameboard.
const observer = new MutationObserver(() => {

    // If modal menu is visible (display = block), then hide gameboard element.
    // Doing this ensure the gameboard is not showing behind the modal menu.
    if (modalMenu.style.display == "block"){
        gameboard.style.display = "none"
    // Else, show gameboard element.
    } else {
        gameboard.style.display = "block"
    }
});
observer.observe(modalMenu, { attributes: true, childList: true});

/*
=================================
    Initialise Game
=================================
*/

    // Load values from JSON file and populate into correct wordList key-value pair
function getData() {
    return Promise.all(game.originalData.map(async item => {
        let request = await fetch(item[1]);
        game.wordLists[item[0]] = await request.json();
    }));
}

    // Start game
function startGame() {
    $("#openingSettings").modal("hide");
    scoreSpan.innerText = 0;
    game.gameClock(true);
}

    // Init the game
async function init() {
    await getData();
    eventListeners();
    $("#openingSettings").modal("show");
}
init();