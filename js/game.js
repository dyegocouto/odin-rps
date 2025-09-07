function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function printRoundWinner(winner, computerChoice, playerChoice) {
  const resultScreen = document.querySelector(".result-screen");

  if (winner === "draw") {
    resultScreen.textContent = `It's a tie, because you both chose ${computerChoice}`;
  } else if (winner === "computer") {
    resultScreen.textContent = `Computer wins, because ${computerChoice} beats ${playerChoice}`;
  } else {
    resultScreen.textContent = `Player wins, because ${playerChoice} beats ${computerChoice}`;
  }
}

const scoreboard = document.querySelector(".scoreboard");
const score = { computer: 0, player: 0 };
function printScoreboard(winner) {
  if (winner) score[winner]++;

  scoreboard.textContent = `👱‍♂️ Player: ${score.player} x 🖥️ Computer: ${score.computer}`;
}

function playRound(computerChoice, playerChoice) {
  let roundWinner = "";

  if (computerChoice === playerChoice) {
    roundWinner = "draw";
  } else if (
    (computerChoice === "rock" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "rock")
  ) {
    roundWinner = "player";
  } else {
    roundWinner = "computer";
  }

  printRoundWinner(roundWinner, computerChoice, playerChoice);
  printScoreboard(roundWinner);
}

const buttons = document.querySelectorAll("button[data-move]");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerChoice = e.currentTarget.dataset.move;
    playRound(playerChoice, getComputerChoice());
  });
});

printScoreboard();
