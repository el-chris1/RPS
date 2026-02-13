let computerScore = 0;
let playerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerChoice) {
  let computerNumber = getComputerChoice();
  let computerChoice = choices[computerNumber];

  let resultText = "";

  if (playerChoice === computerChoice) {
    resultText = "It's a tie! You both chose " + playerChoice;
  }

  else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      playerScore++;
      resultText = "You win! Rock beats Scissors.";
    } else {
      computerScore++;
      resultText = "Computer wins! Paper beats Rock.";
    }
  }

  else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      playerScore++;
      resultText = "You win! Paper beats Rock.";
    } else {
      computerScore++;
      resultText = "Computer wins! Scissors beats Paper.";
    }
  }

  else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      playerScore++;
      resultText = "You win! Scissors beats Paper.";
    } else {
      computerScore++;
      resultText = "Computer wins! Rock beats Scissors.";
    }
  }

  // 🔥 UPDATE HTML SCOREBOARD
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;

  // 🔥 UPDATE RESULT MESSAGE
  document.getElementById("result").textContent = resultText;

  // 🔥 ANNOUNCE FINAL WINNER
  if (playerScore === 3) {
    document.getElementById("result").textContent = "🎉 Player Wins the Game!";
  }

  if (computerScore === 3) {
    document.getElementById("result").textContent = "💻 Computer Wins the Game!";
  }
  
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  document.getElementById("player-score").textContent = 0;
  document.getElementById("computer-score").textContent = 0;
  document.getElementById("result").textContent = "Game reset! Make your move.";
}

