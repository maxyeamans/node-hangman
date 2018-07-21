/* Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

A string value to store the underlying character for the letter

A boolean value that stores whether that letter has been guessed yet

A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly */

const Letter = function(aLetter){
    // Autoformat the mystery phrase to uppercase
    this.letter = aLetter.toUpperCase();
    // Make all spaces in the phrase visible by default so the user doesn't have to waste a guess checking
    this.guessed = this.letter === " " ? true : false;
    // TODO: turn these into prototype methods
    // Display the letter if it has been guessed, otherwise display an underscore
    this.displayIfGuessed = function(){
        if(this.guessed){
            return this.letter;
        }
        else {
            return "_"
        }
    };
    // Check to see if the guessed letter is in the mystery word/phrase
    this.checkIfCorrect = function(input){
        if(input.toUpperCase() === this.letter) {
            this.guessed = true;
        };
    };
}

// Export the Letter constructor
module.exports = Letter;

// Throw some code down here to test this out
/* const letterA = new Letter("a");
console.log("The letter: ", letterA.displayIfGuessed());
console.log("Let's try passing a guess of b");
letterA.checkIfCorrect("b");
console.log("The letter: ", letterA.displayIfGuessed());
console.log("Let's try passing a guess of a");
letterA.checkIfCorrect("a");
console.log("The letter: ", letterA.displayIfGuessed()); */
