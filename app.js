let choices = document.querySelectorAll(".choice");
let score = document.getElementById("score");
let result = document.getElementById("result");
let restart = document.getElementById("restart");
let modal = document.querySelector(".modal");
let scoreBoard = {
  player: 0,
  computer: 0,
};

// Play Game
function play(e) {
  restart.style.display = "inline-block";
  // Get Players choice
  let playerChoice = e.target.id;
  let computerChoice = getComputerChoice();
  let winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);

  //   console.log(playerChoice, computerChoice, winner);
}
// Get Computer's choice
function getComputerChoice() {
  let rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}
// Get Winner
function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

// Show winner on the page
function showWinner(winner, computerChoice) {
  if (winner === "player") {
    // Increment player score
    scoreBoard.player++;
    // Show modal result
    result.innerHTML = `
  <h1 class='text-win'>You Win</h1>
  <i class="fas fa-hand-${computerChoice} fa-10x"></i>
  <p>Computer chose <strong>${computerChoice}</strong></p>
  
  `;
  } else if (winner === "computer") {
    // increment computer score
    scoreBoard.computer++;
    // show modal result
    result.innerHTML = `
    <h1 class="text-lose">You Lose</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer chose <strong>${computerChoice}</strong></p>;

    `;
  } else {
    result.innerHTML = `
    <h1>Its a draw</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer chose <strong>${computerChoice}</strong></p>

    `;
  }
  //   show Score
  score.innerHTML = `
  <p>Player:${scoreBoard.player}</P>
  <p>Computer:${scoreBoard.computer}</p>

`;
  modal.style.display = "block";
}
// Restart Game
function restartGame() {
  scoreBoard.player = 0;
  scoreBoard.computer = 0;
  scoreBoard.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
}

// Clear MOdal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// Event Listeners
choices.forEach(function (choice) {
  choice.addEventListener("click", play);
});
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
