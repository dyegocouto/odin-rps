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
