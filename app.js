const BOARD = document.querySelector(".board").children;

let myArray = [];

for (let i = 0; i < BOARD.length; i++) {
  myArray.push(BOARD[i]);
}

let turnController = false;

myArray.forEach((element) => {
  element.addEventListener("click", () => {
    turnController ? ((element.textContent = "O"), (turnController = false)) : ((element.textContent = "X"), (turnController = true));
  });
});
