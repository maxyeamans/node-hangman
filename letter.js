/* Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

A string value to store the underlying character for the letter

A boolean value that stores whether that letter has been guessed yet

A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly */

const Letter = function(aLetter){
    this.letter = aLetter.toUpperCase();
    this.guessed = false;
    this.displayIfGuessed = function(){
        if(this.guessed){
            return this.letter;
        }
        else {
            return "_"
        }
    };
    this.checkIfCorrect = function(input){
        if(input.toUpperCase() === this.letter) {
            this.guessed = true;
        };
    };
}

// Export the Letter constructor
module.exports = Letter;

// Throw some code down here to test this out
const letterA = new Letter("a");
console.log("The letter: ", letterA.displayIfGuessed());
console.log("Let's try passing a guess of b");
letterA.checkIfCorrect("b");
console.log("The letter: ", letterA.displayIfGuessed());
console.log("Let's try passing a guess of a");
letterA.checkIfCorrect("a");
console.log("The letter: ", letterA.displayIfGuessed());
