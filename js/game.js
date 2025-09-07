const resultScreen = document.querySelector(".result-screen");
const scoreboard = document.querySelector(".scoreboard");
const buttons = document.querySelectorAll("button[data-move]");

function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function printRoundWinner(winner, computerChoice, playerChoice) {
  if (winner === "draw") {
    resultScreen.textContent = `It's a tie, because you both chose ${computerChoice}`;
  } else if (winner === "computer") {
    resultScreen.textContent = `Computer wins, because ${computerChoice} beats ${playerChoice}`;
  } else {
    resultScreen.textContent = `Player wins, because ${playerChoice} beats ${computerChoice}`;
  }
}

const score = { computer: 0, player: 0 };
function printScoreboard(winner) {
  if (winner) score[winner]++;

  scoreboard.textContent = `👱‍♂️ Player: ${score.player} x 🖥️ Computer: ${score.computer}`;
}

function gameOver() {
  buttons.forEach((button) => {
    button.disabled = true;
  });

  resultScreen.textContent = `Game over!`;
}

function getRoundWinner(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return "draw";
  } else if (
    (computerChoice === "rock" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

let roundsLeft = 5;

function playRound(computerChoice, playerChoice) {
  const roundWinner = getRoundWinner(computerChoice, playerChoice);
  printRoundWinner(roundWinner, computerChoice, playerChoice);
  printScoreboard(roundWinner);

  roundsLeft--;
  if (!roundsLeft) gameOver();
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerChoice = e.currentTarget.dataset.move;
    playRound(playerChoice, getComputerChoice());
  });
});

printScoreboard();
