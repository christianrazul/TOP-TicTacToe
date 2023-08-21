const BOARD = document.querySelector(".board").children;

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
  if (myArray[2].textContent === "X" && myArray[5].textContent === "X" && myArray[8].textContent === "X") {
    declareWinner("X");
  } else if (myArray[2].textContent === "X" && myArray[5].textContent === "X" && myArray[8].textContent === "X") {
    console.log("X WINS");
  }
}

function declareWinner(player) {
  return (player.textContent = `${player} WINS`), (player.style.opacity = 1);
}
