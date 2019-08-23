//Global Statements

    //Modal Elements to target via Javascript
const modalMenu = document.querySelector("#openingSettings");
const diffDropdown = document.querySelector("#difficulty");
const themeDropdown = document.querySelector("#theme");

    //Main page Elements to target via Javascript
const bodyBg = document.body;
const gameboard = document.querySelector(".game-board");
const themeSpan = document.querySelector("#theme-span");
const diffSpan = document.querySelector("#diff-span");
const shownWord = document.querySelector("#shown-word");
const timeSpan = document.querySelector("#time-span");
const userInput = document.querySelector("#user-input");
const scoreSpan = document.querySelector("#score-span");

//Modal DOM change to hide or show gameboard
const observer = new MutationObserver(() => {
    if (modalMenu.style.display == "block"){
        gameboard.style.display = "none"
    } else {
        gameboard.style.display = "block"
    }
});
observer.observe(modalMenu, { attributes: true, childList: true});