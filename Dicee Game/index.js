//Random image 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceNumber = "dice" + randomNumber1 + ".png";

let randomImageNumber = "images/" + randomDiceNumber;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageNumber);

//Random image 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceNumber2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceNumber2);

//Final Decision
if(randomNumber1 > randomNumber2){
    document.querySelector("h3").innerHTML = "🚩Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h3").innerHTML = "Player 2 Wins!🚩";
}else{
    document.querySelector("h3").innerHTML = "Draw!";
}

//Refresh Button
document.querySelector("button").addEventListener("click", function(){
    location.reload();
})