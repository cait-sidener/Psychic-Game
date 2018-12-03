var words = [
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

// Create all the blank spaces
// document.getElementById("wordGuess").innerHTML = 

var wordToGuess = words[Math.floor(Math.random() * words.length)];
var letters = wordToGuess.split("");
console.log(letters);

var blankSpaces = "";
for (i = 0; i < letters.length; i++) {
    blankSpaces = blankSpaces + "_ ";
}

document.getElementById("blankSpaces").innerHTML = blankSpaces;

var guessesLeft = 9;
var lettersGuessed=[];

document.onkeyup = function(evt) {
    // var keyPressed = evt.key
    lettersGuessed.push(event.key);


    // create logic that compares key press to letters (letter.indexOf)
    // if letter exist on letter on my letters array redo the letter placeholder and replcae _ with 
    // matching letter

    if (wordToGuess.indexOf(lettersGuessed) === -1) {
    words.push(lettersGuessed);
    }else {
    guessesLeft--;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    console.log(lettersGuessed);
    }
}
