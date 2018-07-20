/* Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

An array of new Letter objects representing the letters of the underlying word

A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js) */

const Letter = require("./letter.js");

const Word = function(aWord){
    // Split the word into an array of individual letter characters
    this.arrWord = aWord.split("");
    // Create an array to hold letter objects
    this.letters = [];
    // Iterate through the letter characters array to create the letter objects
    this.addLetters = function(aWordArray){
        this.arrWord.forEach(item => {
            this.letters.push(new Letter(item));
        });
    };
    // Display the word formatted with unguess/guessed letters
    this.displayWord = function(letters){
        // Use the array map() method to return an array with the guessed/unguessed letters?
        // return this.letters.map(Letter.displayIfGuessed);
        return this.letters;
    };
};

// Throw some code down here to test this out.

const wordHangman = new Word("bacon");

// Displays an array of the word's letters, however they were input
// console.log(wordHangman.arrWord);
// Expected output: [ 'b', 'a', 'c', 'o', 'n' ]

// Display the array of word's letter objects
wordHangman.addLetters();
// console.log( wordHangman.letters );

// Display the formatted output showing unguessed/guessed letters in the word
console.log( wordHangman.displayWord() );