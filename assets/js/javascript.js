/*
=================================
    Global Variables
=================================
*/

//  Modal Elements to target via Javascript.
const modalMenu = document.querySelector("#openingSettings");
const diffDropdown = document.querySelector("#difficulty");
const themeDropdown = document.querySelector("#theme");
const startButton = document.querySelector(".btn");

//  Main page Elements to target via Javascript.
const openSettings = document.querySelector("#settings");
const gameboard = document.querySelector(".game-board");
const themeSpan = document.querySelector("#theme-span");
const diffSpan = document.querySelector("#diff-span");
const shownWord = document.querySelector("#shown-word");
const timeSpan = document.querySelector("#time-span");
const userInput = document.querySelector("#user-input");
const scoreSpan = document.querySelector("#score-span");

//  Game Over Modal Elements to target via Javascript.
const gameoverScore = document.querySelector("#gameover-score");
const replay = document.querySelector(".replay-btn");
const pointSpan = document.querySelector(".points");

/*
=================================
    Game Board Object
=================================
*/

/*  Literal Notation used to create "game" object. Key-value pairs separated via comma ",".
    Properties are declared at the top, with methods declared after.
    This keeps the object clean and well structured as per Javascript Literal Notation Object Creation general practices. */
let game = {

    //  Default setting of Game elements before selection or generation of elements update same.
    selectedTheme: null,
    selectedDifficulty: null,
    selectedWord: null,
    time: 0,
    score: 0,

    //  Names of JSON files and links to same to be fetched and indexed into wordList object function.
    originalData: [
        ['pokemon', 'https://raw.githubusercontent.com/sindresorhus/pokemon/master/data/en.json'],
        ['superhero', 'https://raw.githubusercontent.com/sindresorhus/superheroes/master/superheroes.json'],
        ['supervillain', 'https://raw.githubusercontent.com/sindresorhus/supervillains/master/supervillains.json'],
        ['beaches', 'https://raw.githubusercontent.com/auxfuse/Milestone2/master/beaches.json'],
        ['crossfit', 'https://raw.githubusercontent.com/auxfuse/Milestone2/master/crossfit.json']
    ],

    //  wordLists object key-value pair as arrays to hold fetched JSON values.
    wordLists: {
        pokemon: [],
        superhero: [],
        supervillain: [],
        beaches: [],
        crossfit: []
    },

    /*  Set Difficulty based on user selection in modal menu.
        Depending on difficulty selected by User update selectedDifficulty property to reflect using an integer, e.g. "8" for easy.
        Set innerText of diffSpan element to the value of the difficulty dropdown selector, "easy", "medium" or "hard". */
    setDifficulty: (value) => {

        if (value === "easy"){
            game.selectedDifficulty = 8;
        } else if (value === "medium"){
            game.selectedDifficulty = 6;
        } else if (value === "hard"){
            game.selectedDifficulty  = 4;
        }

        diffSpan.innerText = value;
    },

    /*  Set Theme based on user selection in modal menu. */
    setTheme: (value) => {

        game.selectedTheme = value;
        themeSpan.innerText = value;
    },

    /*  Create random word and display via flooring the result to the shownWord element's innerText for the User. */
    setWord: () => {
<<<<<<< HEAD

=======
        
>>>>>>> de02c75f458bbf8631f8d04ea5952b38892f13f8
        const random = Math.floor(Math.random() * game.wordLists[game.selectedTheme].length);
        game.selectedWord = game.wordLists[game.selectedTheme][random];

        shownWord.innerText = game.selectedWord;
    },

    /*  Create timer to track and decrement timer based on Difficulty selected by user.
        If gameClock argument is anything other than default null, then invoke the setWord method, set the interval to update
        the gameClock every 1second and decrement by 1, and set the time to be equal to the integer of the selectedDifficulty property.
        Else if time reaches zero invoke gameOver function to end the current game session. */
    gameClock (start = null) {

        if (start) {

            game.setWord();

            interval = setInterval(game.gameClock, 1000);
            game.time = game.selectedDifficulty;

        } else if (game.time <= 0) {

            game.gameOver();
            gameoverScore.innerText = game.score;
        }

        timeSpan.innerText = game.time;
        game.time = game.time - 1;
    },

<<<<<<< HEAD
    /*  Use of toLowerCase() built in js function to ensure case match versus the current shown word. On successful match,
=======
    /*  Use of toLowerCase() built in js function to ensure case match versus the current shown word. On successful match, 
>>>>>>> de02c75f458bbf8631f8d04ea5952b38892f13f8
        method resets the timer, generates a new word for the user, increments the score and clears the input field for re-entry. */
    matchWord: (value) => {

        if (value.toLowerCase() === shownWord.innerText.toLowerCase()){

            game.setScore(1);
            clearInterval(interval);
            game.gameClock(true);
            game.resetUserInput();
        }
    },

    /*  Reset user input to be used on word success by setting the userInput field to blank. */
    resetUserInput: () => {

        userInput.value = "";
    },

    /*  setScore method to track the total score of the current game session, incrementing by 1 every successful match
        and displaying the result to the user.*/
    setScore: () => {

        game.score += 1;
        scoreSpan.innerText = game.score;

        //  Set innerText of the "pointSpan" element depending on current score value, e.g if score=1 set to "point" to be grammatically correct.
        if (game.score === 1){
            pointSpan.innerText = "point";
        } else if (game.score >= 2 ) {
            pointSpan.innerText = "points";
        }
    },

    /*  Show the gameOver modal and hide the gameboard as part of defensive design. To be invoked by the startGame method when
        game timer reaches 0 (zero).*/
    gameOver: () => {
        $("#gameOver").modal("show");
        gameboard.style.display = "none";
    }

};

/*
=================================
    Event Listeners
=================================
*/

function eventListeners() {

    //  Modal elements event Listeners
    themeDropdown.onchange = ({target}) => game.setTheme(target.value);
    diffDropdown.onchange = ({target}) => game.setDifficulty(target.value);
    startButton.onclick = () => startGame();

    //  Gameboard elements event Listeners
    openSettings.onclick = () => replayGame();
    userInput.onkeyup = ({target}) => game.matchWord(target.value);

    //  Gameover elements event Listeners
    replay.onclick = () => replayGame();
}


/*
=================================
    Modal DOM Manipulation
=================================
*/

<<<<<<< HEAD
/*  To hide or show "gameboard" element using observer and changing display property of modal and gameboard.
    If main-menu modal is visible, e.g. display property set to "block", then hide "gameboard" element via setting the display
    of the "gameboard" element to "none", otherwise show "gameboard" via setting diplay property to "block". */
=======
/*  To hide or show "gameboard" element using observer and changing display property of modal and gameboard. 
    If main-menu modal is visible, e.g. display property set to "block", then hide "gameboard" element via setting the display
    of the "gameboard" element to "none", otherwise show "gameboard" via setting diplay property to "block". */  
>>>>>>> de02c75f458bbf8631f8d04ea5952b38892f13f8
const observer = new MutationObserver(() => {

    if (modalMenu.style.display == "block"){
        gameboard.style.display = "none";
<<<<<<< HEAD

=======
    
>>>>>>> de02c75f458bbf8631f8d04ea5952b38892f13f8
    } else {
        gameboard.style.display = "block";
    }
});
//  Observe modalMenu element for any changes in the DOM structure.
observer.observe(modalMenu, {attributes: true, childList: true});

/*
=================================
    Initialise Game
=================================
*/

<<<<<<< HEAD
/*  Fetch JSON files and populate wordLists object via like with like, e.g. "pokemon" json values populating "pokemon" property of wordLists object
=======
/*  Fetch JSON files and populate wordLists object via like with like, e.g. "pokemon" json values populating "pokemon" property of wordLists object 
>>>>>>> de02c75f458bbf8631f8d04ea5952b38892f13f8
    nested within "game" object, by fetching each item value and await for result to return and store in "request" local variable and then populating
    wordLists callback of "item" and assign it the parsed data using the Fetch API method "json()". */
function getData() {

    return Promise.all(game.originalData.map(async item => {

        let request = await fetch(item[1]);
        game.wordLists[item[0]] = await request.json();
    }));
}

/*  Start game function to initiate game session, assigned to start button Event Listener through onclick event. Check dropdowns for selection before
    allowing user to start game, and alert if any selector is blank, else, Close Main-menu Modal, set focus of userInput element, ensure scoreSpan is
    set to 0 (zero) and set the gameClock parameter to "true" to initiate decrementing timer. */
function startGame() {

    if (!diffDropdown.value || !themeDropdown.value){
        alert("Please select a difficulty and theme to start the Game!");

    } else {
    $("#openingSettings").modal("hide");
    userInput.autofocus = true;
    scoreSpan.innerText = 0;
    game.gameClock(true);
    }
}

/*  Replay game function to refresh browser window via "window.location" to get the current URL and reloading to same via "reload(true)"
    to reload from browser instead of the cache.*/
function replayGame() {

    window.location.reload(true);
}

/*  Initialise & Invoke the getData function and wait for it to return the desired output, prepare the eventListeners function to listen and react to
    certain events and show the Main-menu modal to the user. */
async function init() {

    await getData();
    eventListeners();
    $("#openingSettings").modal("show");
}
init();
