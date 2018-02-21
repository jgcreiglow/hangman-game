//global variables//

var wordChoices = ['mexico', 'australia', 'brazil', 'belgium', 'austria']
var guessesLeft;
var guessedLetters;
var activeWordArray;
var wins = 0;
var losses = 0
var blanks = [];

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
  document.getElementById('starting').innerHTML = ("press any letter to start");

wordChoice();
}




function wordChoice() {
  word = wordChoices[Math.floor(Math.random() * wordChoices.length)];
  console.log(word);
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
