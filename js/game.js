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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie, you both chose ${humanChoice}`);
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`You lose, because ${computerChoice} beats ${humanChoice}!`);
    computerScore++;
  } else {
    console.log(`You win, because ${humanChoice} beats ${computerChoice}!`);
    humanScore++;
  }
}

function playGame() {
  let rounds = 5;
  do {
    playRound(getHumanChoice(), getComputerChoice());
  } while (--rounds);

  console.log(
    `The game is over! 👱‍♂️Player score: ${humanScore} x 🖥️Computer score: ${computerScore}`
  );
}

playGame();
