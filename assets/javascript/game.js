$(document).ready(function() {

var audio = new Audio("src='assets/images/victory.mp3'");

var goalNumber = Math.floor(Math.random() * 102 + 19);
$("#randomNumber").html(goalNumber);
console.log(goalNumber)

var redCrystal = Math.floor(Math.random() * 12 + 1);
console.log(redCrystal)
var blueCrystal = Math.floor(Math.random() * 12 + 1);
console.log(blueCrystal)
var greenCrystal = Math.floor(Math.random() * 12 + 1);
console.log(greenCrystal)
var yellowCrystal = Math.floor(Math.random() * 12 + 1);
console.log(yellowCrystal)

var calcNumber = 0;
var youWin = 0;
var youLose = 0;

function newRound() {
  if (calcNumber == goalNumber){
    youWin++;
    $("#wins").html(youWin);
    alert("You Win!!");
    var x = document.querySelector("#winAudio");
    x.play();
    $(".button").prop('disabled', true);
  }
  else if (calcNumber > goalNumber){
    youLose++;
    $("#losses").html(youLose);
    alert("Game Over");
    var y = document.querySelector("#loseAudio");
    y.play();
    $(".button").prop('disabled', true); 
  } 
};

function resetGame() {
  goalNumber = Math.floor(Math.random() * 102 + 19);
  $("#randomNumber").text(goalNumber);
  redCrystal = Math.floor(Math.random() * 12 + 1);
  blueCrystal = Math.floor(Math.random() * 12 + 1);
  greenCrystal = Math.floor(Math.random() * 12 + 1);
  yellowCrystal = Math.floor(Math.random() * 12 + 1);
  calcNumber = 0;
  $("#guessCalc").html(calcNumber);
  $(".button").prop('disabled', false);
};

$("#redClick").click(function() { 
    calcNumber = calcNumber + redCrystal;
    console.log(calcNumber)
    $("#guessCalc").html(calcNumber);
    newRound(); 
  });
$("#blueClick").click(function() {
    calcNumber = calcNumber + blueCrystal;
    console.log(calcNumber)
    $("#guessCalc").html(calcNumber);
    newRound(); 
  }); 
$("#greenClick").click(function() {
    calcNumber = calcNumber + greenCrystal;
    console.log(calcNumber)
    $("#guessCalc").html(calcNumber);
    newRound(); 
  });
$("#yellowClick").click(function() {
    calcNumber = calcNumber + yellowCrystal;
    console.log(calcNumber)
    $("#guessCalc").html(calcNumber);
    newRound(); 
  });

$("#startGame").click(function() {
  resetGame();
});

});