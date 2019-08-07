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
    var x = document.querySelector("#winAudio");
    x.play();
    Swal.fire({
      position: 'top-center',
      title: 'You Win!',
      imageUrl: 'https://cdn3.iconfinder.com/data/icons/emoticons-50/24/smile_emoticon_emoticons_emoji_emote_2-512.png',
      imageWidth: 200,
      imageHeight: 200,
      showConfirmButton: false,
      timer: 2500
    });
    // alert("You Win!!");
    $(".button").prop('disabled', true);
  }
  else if (calcNumber > goalNumber){
    youLose++;
    $("#losses").html(youLose);
    var y = document.querySelector("#loseAudio");
    y.play();
    Swal.fire({
      position: 'top-center',
      title: 'Game Over',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51dAzlTL-aL._SL1384_.jpg',
      imageWidth: 200,
      imageHeight: 200,
      showConfirmButton: false,
      timer: 2500
    })
    // alert("Game Over");
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