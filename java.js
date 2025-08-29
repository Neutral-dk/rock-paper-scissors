function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let playedRounds = 0;

playRound(humanSelection, computerSelection);
nextRound();
nextRound();
nextRound();
nextRound();
displayWinner();


	function displayWinner() {
		if (humanScore > computerScore) {
		return console.log("You are the winner! Congratz! You won with " + humanScore + " Against the AIs score of " + computerScore);
		} else if (humanScore < computerScore) {
		return console.log("You suck, lost with AI score of " + computerScore + " and your silly score of " + humanScore);
		} else {
		return console.log("You tied it, almost impossible!")
		}
}
		

	
	function updateScores() {
	console.log("Your score is: " + humanScore);
	console.log("The computers scores is: " + computerScore);
	console.log("Number of rounds played are: " + playedRounds);
}
	function nextRound() {
	updateScores()
	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection);
}


  function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'paper' && computerChoice === 'Scissors') {
      return (
        console.log('You loose! Scissors beats Paper') +
        computerScore++ +
        playedRounds++
      );
    } else if (humanChoice === 'paper' && computerChoice === 'Rock') {
      return (
        console.log('You win! Paper beats Rock') + humanScore++ + playedRounds++
      );
    } else if (humanChoice === 'scissors' && computerChoice === 'Rock') {
      return (
        console.log('You loose! Rock beats your Scissors') +
        computerScore++ +
        playedRounds++
      );
    } else if (humanChoice === 'scissors' && computerChoice === 'Paper') {
      return (
        console.log('You win! Scissors beat Paper') +
        humanScore++ +
        playedRounds++
      );
    } else if (humanChoice === 'rock' && computerChoice === 'Paper') {
      return (
        console.log('You loose! Paper beats rock') +
        computerScore++ +
        playedRounds++
      );
    } else if (humanChoice === 'rock' && computerChoice === 'Scissors') {
      return (
        console.log('You win! Rock beats Scissors') +
        humanScore++ +
        playedRounds++
      );
    } else {
      return console.log("That's a tie!") + playedRounds++;
    }
  }
}


function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return 'Rock';
  } else if (randomNumber > 0.66) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function getHumanChoice() {
  let humanChoice = prompt('Please choose Rock, Paper or Scissors');
  humanChoice.toLowerCase();
  return humanChoice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playGame();