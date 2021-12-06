//user will get two cards at start 
//acc to rules if win-endgame or more than 21 -endgame
//if continur-add a new card

//sum of cards >12-out of the game
//sum of cards==12-blackjacked
//sum of cards<21-continue playing


//new card-A-11
//KQJ-10
//1-9-as usual

let hasBlackJack=false;
let isAlive=false;
let message="";
let sumel=document.getElementById("sum")
let cardsel=document.getElementById("cards")
let messageel=document.getElementById("message-el")
let cardsarr=[]
let sum=0;


function getRandomCard(){
    let value=Math.floor(Math.random()*13)+1;
    if(value>9){
        return 10;
    }
    else if(value==1){
        return 11;
    }
    else{
        return value;
}}


function startGame(){
    isAlive=true;
    sum=0;
    cardsarr=[];
    cardsarr[0]=getRandomCard();
    cardsarr[1]=getRandomCard();
    sum=cardsarr[0]+cardsarr[1];
    renderGame();
}


function renderGame(){
    sumel.textContent="sum :"+sum;
    cardsel.textContent="cards :";
    for (let index = 0; index < cardsarr.length; index++) {
        cardsel.textContent+=" "+cardsarr[index];   
    }
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
    if(isAlive==true&&hasBlackJack==false)
    {
        message="Drawing a new card from the deck!";
        messageel.textContent=message;
        cardsarr.push(getRandomCard())
        sum+=cardsarr[2];
        renderGame();
    }
}

console.log(message);


