var selectableWords = [
    "wham",
    "scorpions",
    "queen",
    "prince",
    "blondie",
    "eurythmics",
    "whitesnake",
    "toto",
    "poison",
    "bananarama"
];

// Max # of tries
const maxTries = 10;

// Stores letters user guessed
var guessedLetters = [];

// Index of current word in array
var currentWordIndex;

// The word built to match the current word
var guessingWord = [];

// How many tries the player has left
var remainingGuesses = 0;

// Wins the player has
var wins = 0;

// Flag to tell if the game has started
var gameStarted = false;

// Flag for "Press any key to try again"
var hasFinished = false;

// Reset game-level variables
function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

    // Round numbers down to the nearest whole
    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

    // Clear out arrays
    guessedLetters = [];
    guessingWord = [];

    // Build the guessing word and clear it out
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }


    // Hide game over and win images/text
    document.getElementById("pressKeyTryAgain").style.cssText = "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none";

    // Show display
    updateDisplay();
};

// Updates display on HTML page
function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += ' ' + guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    if (remainingGuesses <= 0) {
        document.getElementById("gameover-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText = "display: block";
        hasFinished = true;
    }
};

document.onkeydown = function(event) {
    // If the game is finished, dump one keystroke and reset
    if(hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
        // Check to make sure a-z was pressed
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};

function makeGuess(letter) {
    if(remainingGuesses > 0) {
        if(!gameStarted) {
            gameStarted = true;
        }

        // Make sure the letter wasn't used yet
        if(guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    updateDisplay();
    checkWin();
}

// Function takes a letter and finds all instances of appearance
// in the string and replaces them in the guess word
function evaluateGuess(letter) {
    // Array to store positions of letters in string
    var positions = [];

    // Loop through words finding all instances of guessed letter, store indicies in array
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        if (selectableWords[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }

    // If there are no indicies, remove a guess
    if (positions.length === 0) {
        remainingGuesses--;
    } else {
        // Loop through all indicies and replace the "_" with a letter
        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    // if(guessingWord === selectableWords[currentWordIndex]) {
    if(guessingWord.indexOf("_") === -1) {
        document.getElementById("youwin-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText = "display: block";
        wins++;
        hasFinished = true;
    }
};