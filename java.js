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
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    
        if (humanChoice === "paper" && computerChoice === "Scissors") {
            return console.log("You loose! Scissors beats Paper") + computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "Rock") {
            return console.log("You win! Paper beats Rock") + humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "Rock") { 
            return console.log("You loose! Rock beats your Scissors") + computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "Paper") {
            return console.log("You win! Scissors beat Paper") + humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "Paper") {
            return console.log("You loose! Paper beats rock") + computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "Scissors") {
            return console.log("You win! Rock beats Scissors") + humanScore++;
        } else { 
            return console.log("That's a tie!");
        }
        
    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("This is your score" + " " + humanScore);
console.log("This is the computers score" + " " + computerScore);