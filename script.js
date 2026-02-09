let computerScore = 0;
let playerScore = 0;    

const choices = ['rock', 'paper', 'scissors'];
// rock = 0 paper = 1 scissors = 2
function getComputerChoice() {
return Math.floor(Math.random() * 3)
}
let computerChoice = getComputerChoice();

function playRound(playerChoice) {
    let computerNumber = getComputerChoice();
    let computerchoice = choices[computerNumber];
    
    document.getElementsById("result").textcontent = 
    " you choice " + playerChoice + " computer choice " + computerchoice;
}
if (player == computerchoice) {
documwnts.getElementsById("result").textcontent = " it's a tie! you both chose " + playerChoice;
}
else if (playerChoice === "rock") {

  if (computerChoice === "scissors") {
    playerScore++;
    document.getElementById("result").textContent =
      "You win! Rock beats Scissors.";
  } else {
    computerScore++;
    document.getElementById("result").textContent =
      "Computer wins! Paper beats Rock.";
  }

}
document.getElementById("player-score").textContent = playerScore;
document.getElementById("computer-score").textContent = computerScore;

else if (playerChoice === "paper") {
   // paper vs rock
   // paper vs scissors
}  if (computerChoice === "rock") {
if (computerScore === 3) {
    return 'computer Wins!'
} 
if (playerScore === 3) {
    return 'player Wins!'
}
}
