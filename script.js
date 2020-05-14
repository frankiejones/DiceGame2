let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let newGame = document.getElementById("newGame");
let rollDice = document.getElementById("rollDice");
let hold = document.getElementById("hold");
let image = document.getElementById("diceImage");
let gif = document.getElementById("goodluck");
let p2turn = false;
let p1turn = true;

rollDice.style.display = "none";
hold.style.display = "none";
image.style.display = "none";

let totalScore1 = 0;
let totalScore2 = 0;

newGame.addEventListener("click", function() {
    rollDice.style.display = "inline-block";
    hold.style.display ="inline-block";
    // image.style.display = "inline-block";
    gif.style.display = "none";
    newGame.style.display ="none";
    score1.textContent = 0;
    score2.textContent = 0;
    totalScore1 = 0;
    totalScore2 = 0;
    player1.textContent = "Player 1";
    player2.textContent = "Player 2";
    p1turn = true;
});

hold.addEventListener("click", function() {
    p1turn =! p1turn;
    p2turn =! p2turn;
    if (p1turn) { 
        console.log("Player's 1 turn to play");
    } else {
        console.log("Player's 2 turn to play");
    };
});

rollDice.addEventListener("click", function() {
    image.style.display = "inline-block";

    function roll(){
        return Math.ceil(Math.random(1)*6);
    };
    console.log(roll());
    let randomNum = roll(); // assigned a variable to call the function of rolling the dice
    if (randomNum === 2) {
        image.src = './img/dice2.png';
    } else if ( randomNum === 3) {
        image.src = './img/dice3.png';
    } else if (randomNum === 4) {
        image.src = './img/dice4.png';
    } else if (randomNum === 5){
        image.src = './img/dice5.png';
    } else if (randomNum === 6) {
        image.src = './img/dice6.png';
    } else if (randomNum === 1){
        image.src = '/img/dice1.png';
    };
    if (p1turn) {
        totalScore1 = totalScore1 + randomNum; // total score = total score plus the random number i generate everytime the button is clicked
        score1.textContent = totalScore1;
    } else {
        totalScore2 = totalScore2 + randomNum; // total score = total score plus the random number i generate everytime the button is clicked
        score2.textContent = totalScore2;
    };
    if (totalScore1 >= 20) {
        player1.textContent = " Player 1 Wins!";
        player2.textContent = "Player 2 loses..";
        rollDice.style.display = "none";
        hold.style.display = "none";
        newGame.style.display ="inline-block";
    };
    if (totalScore2 >= 20) {
        player2.textContent = " Player 2 Wins!";
        player1.textContent = "Player 1 loses..";
        rollDice.style.display = "none";
        hold.style.display = "none";
        newGame.style.display ="inline-block";
    };
    if (randomNum == 1 && p1turn) {
        player1.textContent = "You rolled a 1 Player 1, loser!";
        player2.textContent =" Player 2, you win!";
        rollDice.style.display = "none";
        hold.style.display = "none";
        newGame.style.display ="inline-block";
    };
    if (randomNum == 1 && p2turn) {
        player2.textContent = "You rolled a 1 Player 2, loser!";
        player1.textContent =" Player 1, you win!";
        rollDice.style.display = "none";
        hold.style.display = "none";
        newGame.style.display ="inline-block";
    };
     //new value of total score will display in the tectcontent of my score id.
});




    