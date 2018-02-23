//global variables//

var wordChoices = ["mason", "ciara", "sage", "hopkins", "lorenzo", "dashawn", "amari", "jevaun", "jaquez", "davonte", "zione"]
var guessesLeft;
var guessedLetters;
var activeWordArray;
var wins = 0;
var losses = 0
var blanks = [];
var word = wordChoices[Math.floor(Math.random() * wordChoices.length)];

function start() {
  correctGuess = 0;
  activeWordArray = [];
  guessedLetters = [];
  guessesLeft = 8;
  blanks = []

  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("guessedLetters").innerHTML = guessedLetters;
  document.getElementById('starting').innerHTML = ("<h1>Press Any Letter To Start</h1>");

wordChoice();
}




function wordChoice() {


  activeWordArray = word.split('');

  // blankSpaces = word.length;
  // blank = [];
  for (var i = 0; i < activeWordArray.length; i++) {
    // space = "__"
    blanks.push(" __ ");
    document.getElementById("word").innerHTML = blanks.join("  ");
  };
}


document.onkeyup = function(event) {
  guess = event.key.toLowerCase();

  // Return false if not letter of the alphabet
  var letter = new RegExp(/^[a-zA-Z]+$/);
  if(!letter.test(guess)){
    return false;
  }
  // a value of less than 0 = a letter that hasn't been guessed
  if (guessedLetters.indexOf(guess) < 0){
    guessedLetters.push(guess);
    document.getElementById('guessedLetters').innerHTML = guessedLetters.join(" ");

    if (activeWordArray.indexOf(guess) >= 0) {
      for (var i = 0; i < word.length; i++) {
        if (guess === activeWordArray[i]) {
          blanks[i] = guess;
          document.getElementById('word').innerHTML = blanks.join(' ');
        }
      }
      if (blanks.indexOf(" __ ")< 0){
        wins++;
        document.getElementById("display").innerHTML = word;
        start();
      }
    }

    else {
      guessesLeft--;
      document.getElementById("guessesLeft").innerHTML = guessesLeft;


      if(guessesLeft === 0){
        losses++;
        start();
      }
      // check if game is over
    }
  }

};


start();
