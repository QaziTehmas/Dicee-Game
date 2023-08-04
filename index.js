var diceImg = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var randomNumber1 = Math.floor(Math.random() * 6);
var randImgSrc1 = diceImg[randomNumber1];
document.getElementsByClassName("img1")[0].setAttribute("src", randImgSrc1);

var randomNumber2 = Math.floor(Math.random() * 6);
var randImgSrc2 = diceImg[randomNumber2];
document.getElementsByClassName("img2")[0].setAttribute("src", randImgSrc2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
  