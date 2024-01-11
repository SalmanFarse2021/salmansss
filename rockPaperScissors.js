var randomNumber1= Math.floor(Math.random()*3)+1;
var randomImage= "images/image"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var randomNumber2= Math.floor(Math.random()*3)+1;
var randomImage2 = "images/image"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);


var randomNumber1 = Math.floor(Math.random() * 3) + 1;
var randomImage = "images/image" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var randomNumber2 = Math.floor(Math.random() * 3) + 1;
var randomImage2 = "images/image" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1 === 1) {
    if (randomNumber2 === 1) {
        document.querySelector("h1").innerHTML = "Draw! 🚩";
    } else if (randomNumber2 === 2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
    }
} else if (randomNumber1 === 2) {
    if (randomNumber2 === 1) {
        document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
    } else if (randomNumber2 === 2) {
        document.querySelector("h1").innerHTML = "Draw! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
} else {
    if (randomNumber2 === 1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else if (randomNumber2 === 2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw! 🚩";
    }
}
