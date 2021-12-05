//user will get two cards at start 
//acc to rules if win-endgame or more than 21 -endgame
//if continur-add a new card

//sum of cards >12-out of the game
//sum of cards==12-blackjacked
//sum of cards<21-continue playing


//new card-A-11
//KQJ-10
//1-9-as usual

let firstCard=4;
let secondCard=16;
let sum=firstCard+secondCard;
let hasBlackJack=false;
let isAlive=true;
let message="";
let sumel=document.getElementById("sum")
let cardsel=document.getElementById("cards")
let messageel=document.getElementById("message-el")
let cards=firstCard+" "+secondCard;


function startGame(){
    renderGame();
}


function renderGame(){
    sumel.textContent="sum :"+sum;
    cardsel.textContent="cards :"+cards;
if (sum>21) {
    message="Game over";
    messageel.textContent=message;
    isAlive=false;
} 
else if(sum==21) {
    message="you are blackjacked";
    messageel.textContent=message;
    hasBlackJack=true;
}
else{
    message="Do you want to draw a card?";
    messageel.textContent=message;
}
}


function newCard(){
    message="Drawing a new card from the deck!";
    messageel.textContent=message;
    let numberForDraw=1;
    sum+=numberForDraw;
    renderGame();
}

console.log(message);


