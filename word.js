/* Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

An array of new Letter objects representing the letters of the underlying word

A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js) */

const Letter = require("./letter.js");

const Word = function(aWord){
    // Split the word into an array of individual letter characters
    this.arrWord = aWord.split("");
    // Create an array to hold letter objects
    this.letters = this.arrWord.map( letter => new Letter(letter) );
    // Display the word formatted with unguess/guessed letters
    this.displayWord = function(){
        // Iterate through the letters array, determine if each letter has been guessed, then join (concatenate) the letters into a string. Return the string.
        return this.letters.map( someLetter => someLetter.displayIfGuessed() ).join(" ");
    };
    this.guessLetter = function(input){
        this.letters.forEach( letter => {
            letter.checkIfCorrect(input);
        });
    };
};

// Export the Word constructor
module.exports = Word;

/* // Throw some code down here to test this out.

const wordHangman = new Word("star wars");

// console.log( wordHangman.letters );
console.log( wordHangman.arrWord );
// Display the formatted output showing unguessed/guessed letters in the word
console.log( wordHangman.displayWord() );
// Guess a letter
wordHangman.guessLetter("s");
console.log( wordHangman.displayWord() );
// Guess a letter
wordHangman.guessLetter("r");
console.log( wordHangman.displayWord() ); */