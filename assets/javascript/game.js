

// Declare Variables for lettersGuessed, numOfGuesses, numOfWins, currentWord
//equal to getElementbyID named in html body to be used later, could also use ID to change 
//heading/clue for new word.  Like "if currentWord = toast put up h3 when currentWord=currentGuesses"

var currentWord =[];
var word;
var wins = 0;
var numOfGuesses = 10;
var lettersGuessed = [];
var wordList = ["bagel", "croissant", "muffin", "flour", "dough"];
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
// CONVERSELY, we could just do each word manually, as in: if userguess = 'b', bakery[0]=userguess instead of _ and do this for each letter?

function newWord()  {
    for (var i=0; i<randomWord.length; i++)   {
        currentWord[i] = " _";
        }

    word = currentWord.join(" ");
    return word;
}

// This function is run whenever the user presses a key.
 document.onkeyup = function(event)  { 

//assign currentWord
  
  

 //get userGuess and assign variable
  var userGuess = event.key;

  //basically I want to create a funciton that checks if character matches guess, then I want to call that function for each character.

  //or we could copy cargame, if guess=b current word [0] = userGuess or a or g or e or l
   // so first we're adding userGuess to currentGuesses if not already there or in currentWord, and counting down guesses with g--.  THEN we are checking guess against currentWord.
   
    for (var i=0; i<randomWord.length; i++)   {

        if (randomWord[i] === userGuess) {

            currentWord[i] === userGuess;
            
        }

        lettersGuessed.push(" "+userGuess);
        numOfGuesses--;
         }
        
//else if ( userGuess !== l for l== lettersGuessed.charAt(l))  {
// lettersGuessed.push(userGuess)
 
  
// .join can connect the word string when game has been solved.
// assign currentWord as an array. Display as an array of "_ " for [l] in currentWord if [l] is in lettersGuessed then return l otherwise "_ ". with getElementbyID
//something like if letter does not appear in word
//use str search, assigning new variable, if var is >-1, userGuess appears in currentWord.  So how do we return the filled in letter plus empty spaces?


//if currentWord exists in currentGuesses then wins++ and move to next round.  If numOfGuesses.length>9 then also go to next word.  Next word is going to be a whole new page?  How do we keep # of wins throughout, with getElementbyID?
//

//if None of the currentWord array are blanks then win++ and move on to next word

document.getElementById("wins").innerHTML = wins;
document.getElementById("word").innerHTML = newWord();
document.getElementById("guesses").innerHTML = lettersGuessed;
document.getElementById("p2").innerHTML = numOfGuesses;
document.getElementById("guesses").innerHTML = lettersGuessed;


};