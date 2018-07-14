$(document).ready(function() {

var goalNumber = Math.floor(Math.random() * 120) + 19;
$("#randomNumber").html(goalNumber);

var redCrystal = "";
var blueCrystal = "";
var greenCrystal = "";
var yellowCrystal = "";

var calcNumber = 0;

$("#redClick").click(function() {
    redCrystal = Math.floor(Math.random() * 12) + 1;
    calcNumber = calcNumber + redCrystal;
    $("#guessCalc").html(calcNumber); 
        if (calcNumber == goalNumber){
          wins();
        }
        else if (calcNumber > goalNumber){
          losses();
        }
  });
$("#blueClick").click(function() {
    blueCrystal = Math.floor(Math.random() * 12) + 1;
    calcNumber = calcNumber + blueCrystal;
    $("#guessCalc").html(calcNumber); 
        if (calcNumber == goalNumber){
          wins();
        }
        else if (calcNumber > goalNumber){
          losses();
        }
  }); 
$("#greenClick").click(function() {
    greenCrystal = Math.floor(Math.random() * 12) + 1;
    calcNumber = calcNumber + greenCrystal;
    $("#guessCalc").html(calcNumber); 
        if (calcNumber == goalNumber){
          wins();
        }
        else if (calcNumber > goalNumber){
          losses();
        }
  });
$("#yellowClick").click(function() {
    yellowCrystal = Math.floor(Math.random() * 12) + 1;
    calcNumber = calcNumber + yellowCrystal;
    $("#guessCalc").html(calcNumber); 
        if (calcNumber == goalNumber){
          wins();
        }
        else if (calcNumber > goalNumber){
          losses();
        }
  });

});