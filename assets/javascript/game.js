

// Declare Variables for lettersGuessed, numOfGuesses, numOfWins, currentWord
//equal to getElementbyID named in html body to be used later, could also use ID to change 
//heading/clue for new word.  Like "if currentWord = toast put up h3 when currentWord=currentGuesses"
var userGuess;
var winSound = new Audio("assets/KittenMeow.mp3");
var currentWord = [];
var word;
var wins = 0;
var numOfGuesses = 10;
var lettersGuessed = [];
var wordList = ["bagel", "croissant", "muffin", "flour", "dough" , "cookie", "bread", "eclair"];
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];





function newWord()  {
    if (wins===7)   {
       alert("YOU WON, WE'RE FRESH OUTTA WORDS!");
       wins = 0;
    }
    
    else
    alert(currentWord.toUpperCase() + "!  Bakery Cat Says: Mmmmm...'Purrfect!, click ok for the next word'");
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = [];
    lettersGuessed = [];
    numOfGuesses = 10;
    for (var i = 0; i < randomWord.length; i++) {
        currentWord.push("__");
       // document.getElementById("word").innerHTML = currentWord; DOESNT WORK
    }
}
// document.onclick = newWord;  Not working either to reset currentWord


// function doneYet()  {
  
//     return currentWord.join("") === randomWord;
    
//   }
  




//function to generate new round of game

    for (var i=0; i<randomWord.length; i++)   {
        currentWord.push("__ ");
        }
    
    function guessWord(userGuess)    {
        for (var i = 0; i < randomWord.length; i++)   {
            
            if (randomWord[i] === userGuess) {
    
                currentWord[i] = userGuess;
                
            }
            
        }
            //decrement guesses left and add wrong guess to array of lettersGuessed
        if (lettersGuessed.indexOf(userGuess.toUpperCase) < 0 && currentWord.indexOf(userGuess) < 0)   {
            lettersGuessed.push(userGuess.toUpperCase())
            numOfGuesses--;
        }
            //check if word is solved yet
        if (currentWord.join("") === randomWord)  {
           currentWord = currentWord.join("");
            wins++;
            winSound.play();
            
            
        }
            //if word is solved choose new word
        if (currentWord === randomWord)  {
            newWord();}
            
        //if user ran out of guesses game ends
        if (numOfGuesses===0)   {
            alert("You Lose! Please reload the page to try again");
        }

         } 
                
// This function is run whenever the user presses a key.
 document.onkeyup = function(event)  { 


 //get userGuess and assign variable
  var userGuess = event.key;
  
  guessWord(userGuess);
  word = currentWord.join(" ");

document.getElementById("wins").innerHTML = wins;
document.getElementById("word").innerHTML = word;
document.getElementById("guesses").innerHTML = lettersGuessed;
document.getElementById("p2").innerHTML = numOfGuesses;

};