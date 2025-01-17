
var dice1Value = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice" + dice1Value + ".png";

var randomImageSource = "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var dice2Value = Math.floor(Math.random()*6) + 1;

var randomImageSource2 = "images/dice" + dice2Value + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(dice1Value>dice2Value){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if(dice1Value<dice2Value){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if(dice1Value==dice2Value){
    document.querySelector("h1").innerHTML = "Draw!"
}