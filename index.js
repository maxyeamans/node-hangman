/* index.js: The file containing the logic for the course of the game, which depends on Word.js and:

Randomly selects a word and uses the Word constructor to store it

Prompts the user for each guess and keeps track of the user's remaining guesses */

// Import required packages
const Word = require("./word.js");
// const inquirer = require("inquirer");

// Declare (and set some) global variables
const allowedLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const mysteryPhrases = ["jurassic park", "empire strikes back", "guardians of the galaxy"];
let gamePhrase;
let guessedLetters = [];
let guessesLeft = 8;
let appOver = false;
let gameOver = false;

function pickGamePhrase() {
    // Reset the game stats
    resetStats();
    // Pick a random phrase and pass it to the Word constructor
    let thisGamePhrase = mysteryPhrases[Math.floor(Math.random() * mysteryPhrases.length)];
    gamePhrase = new Word( thisGamePhrase );
};

function resetStats() {
    guessedLetters = [];
    guessesLeft = 8;
    appOver = false;
    gameOver = false;
};

pickGamePhrase();
console.log( gamePhrase.displayWord() );