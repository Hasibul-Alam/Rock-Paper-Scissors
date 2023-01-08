// Randomly select Rock, Paper or Secissors for computer
function computerPlay() {
  const choice = randomInteger(1, 3);
  if (choice === 1) return "Rock";
  else if (choice === 2) return "Paper";
  else if (choice === 3) return "Secissors";
}

//let computerPick = computerPlay();
//console.log(computerPick);

// find a random integer between 1 to 3 inclusive
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInteger(1, 3));
//const computerChoice = computerPlay();
document.getElementsById('comPick').innerHTML = computerPlay();

