var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";//dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage;//images/dice1.png-images/dice6.png
var image1 = document.queryselectorall("img")[0];

image1.setAttribute("src", randomImagesource);
var randomNumber2 = Math.floor(Math.random() * 6) +  1;
var randomimagesource2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);
if (randomNumber1 > randomNumber2) {
    document.queryselector("h1").innerHTML = "🚩 Player 1 Wins!";
}
 else if(randomNumber1 < randomNumber2) {
     document.queryselector("h1").innerHTML = "Player 2 Wins! 🚩";
 } else {
     document.queryselector("h1").innerHTML = "Draw!";
 }