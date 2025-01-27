var randomDiceNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceNumber2 = Math.floor(Math.random()*6)+1;

var diceImage1 = `images/dice${randomDiceNumber1}.png`;
var diceImage2 = `images/dice${randomDiceNumber2}.png`;

document.querySelectorAll("img")[0].setAttribute("src", diceImage1);
document.querySelectorAll("img")[1].setAttribute("src", diceImage2);

if(randomDiceNumber1 > randomDiceNumber2) {
    document.querySelector("h1").innerHTML="player 1 wins!🚩";
}else if(randomDiceNumber1 < randomDiceNumber2) {
    document.querySelector("h1").innerHTML="player 2 wins!🚩";
}else {
    document.querySelector("h1").innerHTML="Draw!";
}

// if(randomDiceNumber1 > randomDiceNumber2) {
//     document.getElementsByTagName("h1")[0].innerHTML="player 1 wins!🚩";
// }else if(randomDiceNumber1 < randomDiceNumber2) {
//     document.getElementsByTagName("h1")[0].innerHTML="player 2 wins!🚩";
// }else {
//     document.getElementsByTagName("h1")[0].innerHTML="Draw!";
// }