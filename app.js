const START_BUTTON = document.querySelector(".start");
const RESET_BUTTON = document.querySelector(".reset");
const WINNER_DIV = document.querySelector(".winner");

const Gameboard = (() => {
  let boxes = ["", "", "", "", "", "", "", "", ""];

  const render = () => {
    let boardHTML = "";
    boxes.forEach((box, index) => {
      boardHTML += `<div class="box" id="box-${index}">${box}</div>`;
    });

    let gameboard = document.querySelector(".gameboard");
    gameboard.innerHTML = boardHTML;

    const boxDivs = document.querySelectorAll(".box");
    boxDivs.forEach((box) => {
      box.addEventListener("click", Game.handleClick);
    });
  };

  const update = (index, symbol) => {
    boxes[index] = symbol;
    render();
  };

  const getBoxes = () => boxes;

  return {
    render,
    update,
    getBoxes,
  };
})();

// FACTORY
const createPlayer = (name, symbol) => {
  return {
    name,
    symbol,
  };
};

const declareWinner = (() => {
  const renderMessage = (message) => {
    WINNER_DIV.innerHTML = message;
    WINNER_DIV.style.opacity = 1;
  };
  return {
    renderMessage,
  };
})();

const Game = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameStatus;

  const start = () => {
    players = [createPlayer(document.querySelector("#player1").value, "X"), createPlayer(document.querySelector(".enemy-player").textContent, "O")];

    currentPlayerIndex = 0;
    gameStatus = false;
    Gameboard.render();
  };

  const reset = () => {
    for (let i = 0; i < 9; i++) {
      Gameboard.update(i, "");
    }
    Gameboard.render();
  };

  const handleClick = (event) => {
    if (gameStatus) return;

    let index = parseInt(event.target.id.split("-")[1]);
    if (Gameboard.getBoxes()[index] !== "") return;

    Gameboard.update(index, players[currentPlayerIndex].symbol);

    if (checkWinner(Gameboard.getBoxes(), players[currentPlayerIndex].name)) {
      gameStatus = true;
      declareWinner.renderMessage(`${players[currentPlayerIndex].name} won`);
    } else if (checkTie(Gameboard.getBoxes())) {
      gameStatus = true;
      declareWinner.renderMessage("It's a tie!");
    }
    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
  };

  return {
    start,
    reset,
    handleClick,
  };
})();

function checkWinner(board) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function checkTie(board) {
  // every() checks if condition inside is true
  return board.every((cell) => cell !== "");
}

START_BUTTON.addEventListener("click", () => {
  Game.start();
});

RESET_BUTTON.addEventListener("click", () => {
  Game.reset();
});

// const BOARD = document.querySelector(".board").children;
// const ENEMY_PLAYER = document.querySelector(".enemy-player");

// ENEMY_PLAYER.addEventListener("click", (event) => {
//   console.log(event.target.textContent);
// });

// let myArray = [];

// for (let i = 0; i < BOARD.length; i++) {
//   myArray.push(BOARD[i]);
// }

// let turnController = false;

// myArray.forEach((element) => {
//   element.addEventListener("click", () => {
//     turnController ? ((element.textContent = "O"), (turnController = false)) : ((element.textContent = "X"), (turnController = true));
//     checkWinner();
//   });
// });

// const WINNER = document.querySelector(".winner");

// function checkWinner() {
//   if (
//     (myArray[0].textContent === "X" && myArray[3].textContent === "X" && myArray[6].textContent === "X") ||
//     (myArray[1].textContent === "X" && myArray[4].textContent === "X" && myArray[7].textContent === "X") ||
//     (myArray[2].textContent === "X" && myArray[5].textContent === "X" && myArray[8].textContent === "X") ||
//     (myArray[0].textContent === "X" && myArray[1].textContent === "X" && myArray[2].textContent === "X") ||
//     (myArray[3].textContent === "X" && myArray[4].textContent === "X" && myArray[5].textContent === "X") ||
//     (myArray[6].textContent === "X" && myArray[7].textContent === "X" && myArray[9].textContent === "X") ||
//     (myArray[0].textContent === "X" && myArray[4].textContent === "X" && myArray[8].textContent === "X") ||
//     (myArray[2].textContent === "X" && myArray[4].textContent === "X" && myArray[6].textContent === "X")
//   ) {
//     declareWinner("X");
//   } else if (
//     (myArray[0].textContent === "O" && myArray[3].textContent === "O" && myArray[6].textContent === "O") ||
//     (myArray[0].textContent === "O" && myArray[3].textContent === "O" && myArray[6].textContent === "O") ||
//     (myArray[1].textContent === "O" && myArray[4].textContent === "O" && myArray[7].textContent === "O") ||
//     (myArray[2].textContent === "O" && myArray[5].textContent === "O" && myArray[8].textContent === "O") ||
//     (myArray[0].textContent === "O" && myArray[1].textContent === "O" && myArray[2].textContent === "O") ||
//     (myArray[3].textContent === "O" && myArray[4].textContent === "O" && myArray[5].textContent === "O") ||
//     (myArray[6].textContent === "O" && myArray[7].textContent === "O" && myArray[9].textContent === "O") ||
//     (myArray[0].textContent === "O" && myArray[4].textContent === "O" && myArray[8].textContent === "O") ||
//     (myArray[2].textContent === "O" && myArray[4].textContent === "O" && myArray[6].textContent === "O")
//   ) {
//     declareWinner("O");
//   }
// }

// function declareWinner(player) {
//   return (WINNER.textContent = `${player} WINS`), (WINNER.style.opacity = 1);
// }
