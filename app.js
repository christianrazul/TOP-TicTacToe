let BOX = document.querySelector(".box");

BOX.addEventListener("click", () => {
  const WINNER = document.querySelector(".winner");

  WINNER.style.opacity = "1";
});

let boxes = document.querySelectorAll(".box");

let array = [];

const test = () => {
  for (let i = 0; i < boxes; i++) {
    array.push(i);
    console.log(array[i]);
  }
};
