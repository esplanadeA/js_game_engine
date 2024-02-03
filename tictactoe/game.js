console.log('Welcome to Tic-Tac-Toe! Enjoy!');
// get the array where the table grid is nine item in the array
let cells = Array.from(document.getElementsByTagName('td'));
document.getElementById('restart-game').addEventListener('click', restartGame);
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked);
}
let noughtsTurn = true; //boolean
let gameIsOver;
let playerOscore = 0;
let playerXscore = 0;

function cellClicked(e) {
  if (!gameIsOver) {
    let cell = e.target;
    if (cell.textContent === '') {
      let symbol = noughtsTurn ? 'O' : 'X';
      cell.textContent = symbol;

      if (symbol === 'O') {
        cell.classList.add('highlightedPlayer1');
      } else {
        cell.classList.add('highlightedPlayer2');
      }
      checkForWin(symbol);
      if (!gameIsOver) {
        noughtsTurn = !noughtsTurn;
        let turn = noughtsTurn ? 'O' : 'X';
        document.getElementById('subtitle').innerHTML = turn + "'s turn now";
        makeComputerMove();
      }
    }
  }
}

function makeComputerMove() {
  setTimeout(() => {
    let availableCells = cells.filter((cell) => cell.textContent === '');
    // Check if there are any available cells
    if (availableCells.length > 0) {
      // Choose a random available cell for the computer's move
      let randomIndex = Math.floor(Math.random() * availableCells.length);
      let computerCell = availableCells[randomIndex];
      // Set the symbol for the computer (e.g., 'X')
      let symbol = noughtsTurn ? 'O' : 'X';
      // Update the cell content and style
      computerCell.textContent = symbol;
      if (symbol === 'O') {
        computerCell.classList.add('highlightedPlayer1');
      } else {
        computerCell.classList.add('highlightedPlayer2');
      }
      // Check for win after the computer's move
      checkForWin(symbol);
      // Update turn and subtitle
      noughtsTurn = !noughtsTurn;
    }
  }, 500);
}

function checkForWin(symbol) {
  // HORIZONTAL LINES //
  if (cells[0].innerHTML == symbol && cells[1].innerHTML == symbol && cells[2].innerHTML == symbol) gameIsOver = true;
  else if (cells[3].innerHTML == symbol && cells[4].innerHTML == symbol && cells[5].innerHTML == symbol)
    gameIsOver = true;
  else if (cells[6].innerHTML == symbol && cells[7].innerHTML == symbol && cells[8].innerHTML == symbol)
    gameIsOver = true;
  // VERTICAL LINES //
  else if (cells[0].innerHTML == symbol && cells[3].innerHTML == symbol && cells[6].innerHTML == symbol)
    gameIsOver = true;
  else if (cells[1].innerHTML == symbol && cells[4].innerHTML == symbol && cells[7].innerHTML == symbol)
    gameIsOver = true;
  else if (cells[2].innerHTML == symbol && cells[5].innerHTML == symbol && cells[8].innerHTML == symbol)
    gameIsOver = true;
  // DIAGONAL LINES //
  else if (cells[0].innerHTML == symbol && cells[4].innerHTML == symbol && cells[8].innerHTML == symbol)
    gameIsOver = true;
  else if (cells[2].innerHTML == symbol && cells[4].innerHTML == symbol && cells[6].innerHTML == symbol)
    gameIsOver = true;

  if (gameIsOver) {
    if (symbol === 'O') {
      playerOscore += 1; // Increment the score for player 'O'
    } else if (symbol === 'X') {
      playerXscore += 1;
    }
    document.getElementById('subtitle').innerHTML = 'PLAYER' + ' ' + symbol + ' ' + 'YOU ARE WINNER!!!!!';
    document.getElementById('playerXscore').innerHTML = playerXscore;
    document.getElementById('playerOscore').innerHTML = playerOscore;
  } else {
    // Check for a tie if all cells are filled
    let isTie = cells.every((cell) => cell.textContent !== '');
    if (isTie) {
      gameIsOver = true;
      document.getElementById('subtitle').innerHTML = "It's a TIE!";
    }
  }
}

function restartGame() {
  // Clear the cells and reset game state
  cells.forEach((cell) => {
    cell.textContent = '';
    cell.classList.remove('highlightedPlayer1', 'highlightedPlayer2');
  });
  gameIsOver = false;
  document.getElementById('subtitle').innerHTML = "O's turn now";
}
