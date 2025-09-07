const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function getHumanChoice() {
  let humanChoice = "";
  do {
    humanChoice = prompt(
      "Please, choose: rock, paper, or scissors?"
    ).toLowerCase();
  } while (!CHOICES.includes(humanChoice));

  return humanChoice;
}

const score = {
  player: 0,
  computer: 0,
};

const scoreboard = document.querySelector(".scoreboard");
scoreboard.textContent = `Player: ${score.player} x Computer: ${score.computer}`;

function updateScoreboard(winner) {
  score[winner]++;
  scoreboard.textContent = `Player: ${score.player} x Computer: ${score.computer}`;
}

const resultScreen = document.querySelector(".result-screen");

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultScreen.textContent = `It's a tie, you both chose ${humanChoice}`;
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    resultScreen.textContent = `You lose, because ${computerChoice} beats ${humanChoice}!`;
    updateScoreboard("computer");
  } else {
    resultScreen.textContent = `You win, because ${humanChoice} beats ${computerChoice}!`;
    updateScoreboard("player");
  }
}

// function playGame() {
//   let rounds = 5;
//   do {
//     playRound(getHumanChoice(), getComputerChoice());
//   } while (--rounds);

//   console.log(
//     `The game is over! 👱‍♂️Player score: ${humanScore} x 🖥️Computer score: ${computerScore}`
//   );
// }

// playGame();

const buttons = document.querySelectorAll("button[data-move]");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const humanChoice = e.currentTarget.dataset.move;
    playRound(humanChoice, getComputerChoice());
  });
});
