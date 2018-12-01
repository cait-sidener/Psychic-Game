    // Creates an array that lists out all of the options
    var computerChoices = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // Creating variables to hold the number of wins, losses, and guesses left.
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var guessesLeft = 9;
    var guessedLetters = [];
    var letterToGuess = null;



      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        function updateGuessesLeft() {
            document.querySelector("#guessesLeft").toinnerHTML = "Guesses Left: " + guessesLeft;
        };

      function updateLetterToGuess() {
          this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
      };

      var updateGuessesSoFar = function(){
          document.querySelector("#let").innerHTML = "Your Guesses So Far: " + guessedLetters.join(", ");
      }

      var reset = function(){
          totalGuesses = 9;
          guessesLeft = 9;
          guessesLetters = [];
          updateLetterToGuess();
          updateGuessesLeft();
          updateGuessesSoFar();
      }

      updateLetterToGuess();
      updateGuessesLeft();

          // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
        // Determines which key was pressed.
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        var check = computerChoices.includes(userGuess);

      if(check === false){
          alert("That was not a valid guess. Try again?");
          return false;
      }else if(check === true){
          guessesLeft--;
          guessedLetters.push(userGuess);
          updateGuessesLeft();
          updateGuessesSoFar();
      

      if (guessesLeft > 0) {
          if(userGuess == letterToGuess) {
              wins++;
              document.querySelector("#wins").innerHTML = "Wins: " + wins;
              userGuess = userGuess.toUpperCase();
              reset();
            }
          } else if (guessesLeft == 0) {
              losses++;
              document.querySelector("#losses").innerHTML= "Losses: " + losses;
              reset();
          }
          return false;
        } else{
            alert("We have an error!");
        }
      };


      