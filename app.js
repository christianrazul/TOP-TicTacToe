const BOARD = document.querySelector(".board").children;
const ENEMY_PLAYER = document.querySelector(".enemy-player");

ENEMY_PLAYER.addEventListener("click", (event) => {
  console.log(event.target.textContent);
});

let myArray = [];

for (let i = 0; i < BOARD.length; i++) {
  myArray.push(BOARD[i]);
}

let turnController = false;

myArray.forEach((element) => {
  element.addEventListener("click", () => {
    turnController ? ((element.textContent = "O"), (turnController = false)) : ((element.textContent = "X"), (turnController = true));
    checkWinner();
  });
});

const WINNER = document.querySelector(".winner");

function checkWinner() {
  if (
    (myArray[0].textContent === "X" && myArray[3].textContent === "X" && myArray[6].textContent === "X") ||
    (myArray[1].textContent === "X" && myArray[4].textContent === "X" && myArray[7].textContent === "X") ||
    (myArray[2].textContent === "X" && myArray[5].textContent === "X" && myArray[8].textContent === "X") ||
    (myArray[0].textContent === "X" && myArray[1].textContent === "X" && myArray[2].textContent === "X") ||
    (myArray[3].textContent === "X" && myArray[4].textContent === "X" && myArray[5].textContent === "X") ||
    (myArray[6].textContent === "X" && myArray[7].textContent === "X" && myArray[9].textContent === "X") ||
    (myArray[0].textContent === "X" && myArray[4].textContent === "X" && myArray[8].textContent === "X") ||
    (myArray[2].textContent === "X" && myArray[4].textContent === "X" && myArray[6].textContent === "X")
  ) {
    declareWinner("X");
  } else if (
    (myArray[0].textContent === "O" && myArray[3].textContent === "O" && myArray[6].textContent === "O") ||
    (myArray[0].textContent === "O" && myArray[3].textContent === "O" && myArray[6].textContent === "O") ||
    (myArray[1].textContent === "O" && myArray[4].textContent === "O" && myArray[7].textContent === "O") ||
    (myArray[2].textContent === "O" && myArray[5].textContent === "O" && myArray[8].textContent === "O") ||
    (myArray[0].textContent === "O" && myArray[1].textContent === "O" && myArray[2].textContent === "O") ||
    (myArray[3].textContent === "O" && myArray[4].textContent === "O" && myArray[5].textContent === "O") ||
    (myArray[6].textContent === "O" && myArray[7].textContent === "O" && myArray[9].textContent === "O") ||
    (myArray[0].textContent === "O" && myArray[4].textContent === "O" && myArray[8].textContent === "O") ||
    (myArray[2].textContent === "O" && myArray[4].textContent === "O" && myArray[6].textContent === "O")
  ) {
    declareWinner("O");
  }
}

function declareWinner(player) {
  return (WINNER.textContent = `${player} WINS`), (WINNER.style.opacity = 1);
}
