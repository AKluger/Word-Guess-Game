

// Declare Variables for lettersGuessed, numOfGuesses, numOfWins, currentWord
//equal to getElementbyID named in html body to be used later, could also use ID to change 
//heading/clue for new word.  Like "if currentWord = toast put up h3 when currentWord=currentGuesses"
var userGuess;
var currentWord = [];
var word;
var wins = 0;
var numOfGuesses = 10;
var lettersGuessed = [];
var wordList = ["bagel", "croissant", "muffin", "flour", "dough"];
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
// CONVERSELY, we could just do each word manually, as in: if userguess = 'b', bakery[0]=userguess instead of _ and do this for each letter?

function doneYet()  {
  
    return currentWord.join("") === randomWord;
    
  }
  




//function to generate new round of game

    for (var i=0; i<randomWord.length; i++)   {
        currentWord.push(" _ "); 
        }
    
    function guessWord(userGuess)    {
        for (var i = 0; i < randomWord.length; i++)   {
            
            if (randomWord[i] === userGuess) {
    
                currentWord[i] = userGuess;
                
            }
            
    
            // else if (randomWord[i]!==userGuess)   {
                // currentWord[i] = " _";
            // }
        }

        lettersGuessed.push(userGuess);
        
        if (doneYet())  {
           currentWord = currentWord.join("");
            wins++;
        }

        else (numOfGuesses--)
            
        
        if (numOfGuesses===0)   {
            alert("You Lose!");
        }

         }     // currentWord[i] = " _";
            // return currentWord;
    
            // if (randomWord[i]!==userGuess)  {
                
// This function is run whenever the user presses a key.
 document.onkeyup = function(event)  { 


 //get userGuess and assign variable
  var userGuess = event.key;
 
  guessWord(userGuess);

document.getElementById("wins").innerHTML = wins;
document.getElementById("word").innerHTML = currentWord;
document.getElementById("guesses").innerHTML = lettersGuessed;
document.getElementById("p2").innerHTML = numOfGuesses;



};