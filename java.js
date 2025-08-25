let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let randomNumber = Math.random()  
        if (randomNumber < 0.33) {
            return "Rock";
        } else if (randomNumber > 0.66) {
            return "Paper";
        } else {
            return "Scissors";
        }
}

function getHumanChoice() {
    let humanChoice = prompt("Please choose Rock, Paper or Scissors");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    
        if (humanChoice === "Paper" && computerChoice === "Scissors") {
            return console.log("You loose! Scissors beats Paper");
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            return console.log("You win! Paper beats Rock"); 
        } else if (humanChoice === "Scissors" && computerChoice === "Rock") { 
            return console.log("You loose! Rock beats your Scissors");
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            return console.log("You win! Scissors beat Paper"); 
        } else if (humanChoice === "Rock" && computerChoice === "Paper") {
            return console.log("You loose! Paper beats rock");
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            return console.log("You win! Rock beats Scissors");
        } else { 
            return console.log("That's a tie!");
        }
        
    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);