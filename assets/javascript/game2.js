function getItem() {
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

var wordToGuess = words[Math.floor(Math.random() * words.length)];

// Create all the blank spaces
// document.getElementById("wordGuess").innerHTML = 

var blankSpaces = "";
var wordLength = possibleWord.length;
for (i = 0; i < wordLength; i++) {
    var x = possibleWord.charAt(i);

    if (x === " " || x === "/'") {
        blankSpaces += x;
    }else {
        blankSpaces += "_";
    }
}

document.getElementById("blankSpaces").innerHTML = blankSpaces;


var possibleWord = words.split;

}

var guessesLeft = 9;

document.onkeypress = function(keyPressed) {
    var keyPressed = keyPressed || window.event,
    charCode = keyPressed.keyCode || keyPressed.which,
    lettersGuessed = String.fromCharCode(charCode);

    document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;

    guessesLeft--;

    if (guessesLeft === -1) {
        alert("GAME OVER");
    }
}
