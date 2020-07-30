
// ------------- GLOBAL VARIABLES------------
//stores the players choice when choosing rock, paper, or scissors
let playerChoice ='';

//stores the computers choice retrieved from the array
let computerChoice;

// used for storing the outcome of a battle used in switch statements
let battleOutcome;

// declaring and initalising computers score starting at zero
let computerScore = 0;

//player score starting at zero
let playerScore = 0;

//default number of rounds variable
let numberOfRounds = 0;

//constant variables
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const YOU_WIN = 'You Won!';
const YOU_LOST = 'You Lost!';
const TIE = 'It is a tie!';

// ---------------when the player chooses rock
function playerChoseRock(){
    //making the player choice variable equal to 'rock'
    playerChoice = ROCK;
    //storing the return value from the random computer guess when the window loads...
    computerChoice = randomComputerGuess();
    //if it is true that computer choice is true  (that means computerChoice has a value) which is a single
    //element from the array
    if(computerChoice) {
        // depending on what the computers choice is, execute this code
        switch(computerChoice){
            // in case it is ROCK ('rock' string)
            case ROCK:
                // global battleOutcome variable is equal to TIE. This is because this function is rock and if the
                // computerChoice was rock too, then in the game it is a tie
                battleOutcome = TIE;
                // always BREAk out of a switch or the rest of the switches may be activaed
                break;

            case PAPER:
                battleOutcome = YOU_LOST;
                computerScore++;
                break;

            case SCISSORS:
                battleOutcome = YOU_WIN;
                playerScore++;
                break;
        }
    }

    // thsi accesses the displayPlayersChoice tag and I am using the command innerHTML which means I am wanting to put
    // something within that HTML. and I am inserting some HTML into it, which is an image
    document.getElementById('displayPlayersChoice').innerHTML = "<img src='./img/rock1.png' class='d-flexjustify-content-center' style='object-fit: cover; width: 100%'>";

    // the variable passed into below so it can display the html img string
    let theChoice = "./img/" + computerChoice + '2.png';

    // this is how you pass a javascript variable into a html tag. You need to use the  + js variable +. You CANNOT jsut put the variable name into the string like this .. "<img src='thechoice' class=.... 
    document.getElementById('computerGuess').innerHTML = "<img src=" + theChoice + " class='d-flex justify-content-center'  style='object-fit: cover; width: 100%'>";

    // displaying the battle outcome between HTML tags (its a tie! or you won!)
    document.getElementById('displayBattleOutcome').innerHTML = battleOutcome;

    // I have inserted tags also to make the whole pint our bold
    document.getElementById('playerScoreCard').innerHTML = "<h5>Your score: " + playerScore + "</h5>"
    document.getElementById('computerScoreCard').innerHTML = "<h5>Computer score: " + computerScore + "</h5>";

}

// the PAPER and SCISSORS function are nearly identical to the above ROCK function
function playerChosePaper(){
    playerChoice = PAPER;

    //storing the return value from the random computer guess when the window loads...
    computerChoice = randomComputerGuess();

    if(computerChoice) {
        switch(computerChoice){
            case ROCK:
                battleOutcome = YOU_WIN;
                playerScore++;
                break;

            case PAPER:
                battleOutcome = TIE;
                break;

            case SCISSORS:
                battleOutcome = YOU_LOST;
                computerScore++;
                break;
        }
    }
    document.getElementById('displayPlayersChoice').innerHTML = "<img src='./img/paper1.png' class='d-flex justify-content-center' style='object-fit: cover; width: 100%'>";

      // the variable passed into below so it can display the html img string
     let theChoice = "./img/" + computerChoice + '2.png';
    // this is how you pass a javascript variable into a html tag. You need to use the  + js variable +. You CANNOT jsut put the  // variable name into the string like this .. "<img src='thechoice' class=.... 
    document.getElementById('computerGuess').innerHTML = "<img src=" + theChoice + " class='d-flex justify-content-center' \
                                                                 style='object-fit: cover; width: 100%'>";
    document.getElementById('displayBattleOutcome').innerHTML = battleOutcome;
    document.getElementById('playerScoreCard').innerHTML = "<h5>Your score: " + playerScore + "</h5>"
    document.getElementById('computerScoreCard').innerHTML = "<h5>Computer score: " + computerScore + "</h5>";
}

function playerChoseScissors() {
    playerChoice = SCISSORS;
    //storing the return value from the random computer guess when the window loads...
     computerChoice = randomComputerGuess();

    if(computerChoice) {
        switch(computerChoice){
            case ROCK:
                battleOutcome = YOU_LOST;
                computerScore++;
                break;

            case PAPER:
                battleOutcome = YOU_WIN;
                playerScore++;
                break;

            case SCISSORS:
                battleOutcome = TIE;
                break;
         }
    }

    document.getElementById('displayPlayersChoice').innerHTML = "<img src='./img/scissors1.png' class='d-flex justify-content-center' \
                                                                 style='object-fit: cover; width: 100%'>";
      // the variable passed into below so it can display the html img string
    let theChoice = "./img/" + computerChoice + '2.png';
    // this is how you pass a javascript variable into a html tag. You need to use the  + js variable +. You CANNOT jsut put the variable name into the string like this .. "<img src='thechoice' class=.... 
    document.getElementById('computerGuess').innerHTML = "<img src=" + theChoice + " class='d-flex justify-content-center' \
                                                                 style='object-fit: cover; width: 100%'>";
    document.getElementById('displayBattleOutcome').innerHTML = battleOutcome;
    document.getElementById('playerScoreCard').innerHTML = "<h5>Your score: " + playerScore + "</h5>"
    document.getElementById('computerScoreCard').innerHTML = "<h5>Computer score: " + computerScore + "</h5>";
}


function randomComputerGuess(){
    let computerOptions = [ROCK, PAPER, SCISSORS];
    // this is how you randomly guess from an array. notice the [;acement of bracket and parenthesis]
    let computerChoiceFromArray = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerChoiceFromArray;
}


function userClicksHTML() {
    // you can run two or more functions run at once when a user clicks a button. You simply seperate the functions with a  semi colon ; .... You CANNOT have two different onlclick events like this document.getElementById('playerPaper').onclick  ... document.getElementById('playerPaper').onclick 
    document.getElementById('playerRock').onclick = function () { playerChoseRock(); minusRounds() };
    document.getElementById('playerPaper').onclick = function () { playerChosePaper(); minusRounds()};
    document.getElementById('playerScissors').onclick = function () { playerChoseScissors(); minusRounds()};
}


// function that is targetting the user input html form and getting the VALUE and saving into local variable
function roundsToPlay(){
    //I have made number of rounds a GLOBAL variable
    numberOfRounds = document.getElementById('numberOfGames').value; 
    document.getElementById('displayBattleRounds').innerHTML = "<h1>Rounds left: " + numberOfRounds + "</h1>";
    console.log(numberOfRounds);
}


//this is minusing a round everytime the rock paper or scissors is selected by the user. It is getting the value for numberOfRounds from the global in roundsToPlay
function minusRounds(){
    // saying if the numberOfRounds is 0, so either they tried to press rock paper scissors first OR they tried to
    // they have finished playing and the number of rounds has become zero. So to avoid negative numbers and to clear the page
    // I have reloaded the whole page.
    if(numberOfRounds == 0){
        alert("please input number of rounds prior to playing!!");
        location.reload();
    }
    // minusing a round
    numberOfRounds--;
    // displaying the rounds after every click by the user on rock paper or scissors
    document.getElementById('displayBattleRounds').innerHTML = "<h1>Rounds left: " + numberOfRounds + "</h1>";
    // displaying in the console for debugging
    console.log(numberOfRounds);
    // condition if rounds become zero, alert user.
    if(numberOfRounds == 0){alert("No more rounds left!")};
}

// the window.onload allows what ever is in here to load as soon as the page opens automatically. like a page constructor
window.onload = function() {
    userClicksHTML();
    //storing the return value from the random computer guess when the window loads...
    computerChoice = randomComputerGuess(); 
    // displaying two default images as soon as the screen loads up
    document.getElementById('displayPlayersChoice').innerHTML = "<img src='./img/playerImage.png' class='d-flex justify-content-center' \
                                                                 style='object-fit: cover; width: 100%'>";
    document.getElementById('computerGuess').innerHTML = "<img src='./img/computerImage.png' class='d-flex justify-content-center' \
                                                                 style='object-fit: cover; width: 100%'>";
}
