    
// DOM Variables 

const restButton  = document.getElementsByClassName("reset-button");



//variables 
let squares;
let startButton = document.getElementsByClassName("start-button");
let startingTime = 20;
let getLevels = ""
clickedSquares = [];
let winMessage;
let loseMessage;
let instructionBox = document.getElementsByClassName("instruction-container");
let clickNumber;
const grid = document.getElementsByClassName("grid-column")
const messageBoard = document.getElementsByClassName("message")


    
    
    //landing page

$ (document).ready(function () {
    $("#logo").slideDown(2000);
    $("#game-title").delay(1500).slideDown();
    $(".instruction-container").delay(2000).slideDown();
    $(".start-button").delay(3000).slideDown();
    $(".instruction-container").delay(1000).slideUp();
    $(".grid-column").delay(1500).css("visibility","visible").slideDown();
    $("#level").delay(900).slideDown();
    $("#time").delay(900).slideDown();

}); 


/*
* Start game on click function*
*removes the start button*
*starts the first level of the game*
* start timer for the first level of game*

*/
 $ (" .start-button"). on ("click", function (){

    $(".start-button").remove();

    document.getElementById("number").innerHTML = "1";

    timerCountdown();
    playingGame();

}); 

/** Countdown timer  Function taken from stackoverflow questions and adapted **/

  function timerCountdown(){ setInterval (function () {
  if(startingTime <= -1){
    clearInterval(timerCountdown);
  } else {
   document.getElementById("seconds").innerHTML = startingTime;
  }
  startingTime --;
 }, 500);};
   
  
/** function to removes each square when clicked**/


function clickSquares() {
  $ (".grid-column").on("click", function(){
 console.log("i just clicked a square"); 
 $(this).remove();
 clickedSquares.push( $ (this))
});
//gameOver();
//playingGame();
};

/** function for when game start when pressignstart button **/
function playingGame(){
if ( startingTime == 20 && clickedSquares.length == 0) { 
clickSquares();
} 
};

/**game over function*/

/** not allowed to click squares when timer is on zero */



/**amount of sqaures clicked function*/

/**reset game**/
