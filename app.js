const BOARD = document.querySelector(".board").children;

let myArray = [];

for (let i = 0; i < BOARD.length; i++) {
  myArray.push(BOARD[i]);
}

console.log(myArray);

myArray.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element);
  });
});
