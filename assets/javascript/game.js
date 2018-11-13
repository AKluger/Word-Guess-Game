

// Declare Variables for lettersGuessed, numOfGuesses, numOfWins, currentWord
//equal to getElementbyID named in html body to be used later, could also use ID to change heading/clue for new word.  Like "if currentWord = toast put up h3 when currentWord=currentGuesses"

var wins = 0;
var numOfGuesses = 10;
var lettersGuessed = [];
var currentWord = "";
//then var currentWord = random string from array "wordchoices" or we could iterate through wordChoices. This word needs to be displayed.  CONVERSELY, we could just do each word manually, as in: if userguess = 'b', bakery[0]=userguess instead of _ and do this for each letter?

// This function is run whenever the user presses a key.
 document.onkeyup = function(event)  { 

//assign currentWord
  var currentWord = "bagel";
  

 //get userGuess and assign variable
  var userGuess = event.key;


   // so first we're adding userGuess to currentGuesses if not already there or in currentWord, and counting down guesses with g--.  THEN we are checking guess against currentWord.
    //numOfGuesses= 10-lettersGuessed.length
    // var getChar = function(currentWord, userGuess)    {
        //currentWord.charAt()

        //maybe for loop doesnt work here. call function instead on each letter..?
//for (var i=0; i<currentWord.length; i++)
        // {
          if (currentWord.charAt()===userGuess)  {
         alert("Good Guess!");
          value = userGuess;
          document.getElementById("word").innerHTML = value;
        //   
          }
// 
          else if (currentWord.charAt()!==userGuess)   {
          value = "_ ";
          document.getElementById("word").innerHTML = value;
          lettersGuessed.push(userGuess);
          numOfGuesses--;
        }
  
        // }
      
// currentWord[l] = userGuess 
//}

//else if ( userGuess !== l for l== lettersGuessed.charAt(l))  {
// lettersGuessed.push(userGuess)
 
  

// assign currentWord as an array. Display as an array of "_ " for [l] in currentWord if [l] is in lettersGuessed then return l otherwise "_ ". with getElementbyID
//something like if letter does not appear in word
//use str search, assigning new variable, if var is >-1, userGuess appears in currentWord.  So how do we return the filled in letter plus empty spaces?


//if currentWord exists in currentGuesses then wins++ and move to next round.  If numOfGuesses.length>9 then also go to next word.  Next word is going to be a whole new page?  How do we keep # of wins throughout, with getElementbyID?
//

document.getElementById("wins").innerHTML = wins;

document.getElementById("guesses").innerHTML = lettersGuessed;
document.getElementById("p2").innerHTML = numOfGuesses;
document.getElementById("guesses").innerHTML = lettersGuessed;

    };
