var randomNumber1 = (Math.floor(Math.random()*6) + 1);
if (randomNumber1===1)
{
    document.getElementsByClassName("img1")[0].setAttribute("src" , "images/dice1.png");
}
else if (randomNumber1===2)
{
    document.getElementsByClassName("img1")[0].setAttribute("src" , "images/dice2.png");
}
else if (randomNumber1===3)
{
    document.getElementsByClassName("img1")[0].setAttribute("src" , "images/dice3.png");
}
else if (randomNumber1===4)
{
    document.getElementsByClassName("img1")[0].setAttribute("src" , "images/dice4.png");
}
else if (randomNumber1===5)
{
    document.getElementsByClassName("img1")[0].setAttribute("src" , "images/dice5.png");
}
// else if (randomNumber1===6)
// {
//     document.getElementsByClassName("img1")[0].setAttribute("src" , "images/dice6.png");
// }


var randomNumber2 = (Math.floor(Math.random()*6) + 1);
if (randomNumber2===1)
{
    document.getElementsByClassName("img2")[0].setAttribute("src" , "images/dice1.png");
}
else if (randomNumber2===2)
{
    document.getElementsByClassName("img2")[0].setAttribute("src" , "images/dice2.png");
}
else if (randomNumber2===3)
{
    document.getElementsByClassName("img2")[0].setAttribute("src" , "images/dice3.png");
}
else if (randomNumber2===4)
{
    document.getElementsByClassName("img2")[0].setAttribute("src" , "images/dice4.png");
}
else if (randomNumber2===5)
{
    document.getElementsByClassName("img2")[0].setAttribute("src" , "images/dice5.png");
}
// else if (randomNumber2===6)
// {
//     document.getElementsByClassName("img2")[0].setAttribute("src" , "images/dice6.png");
// }


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
else 
{
    document.querySelector("h1").innerHTML = "Draw!";
}



// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }
