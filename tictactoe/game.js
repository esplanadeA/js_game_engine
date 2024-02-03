console.log('Welcome to Tic-Tac-Toe! Enjoy!');
// get the array where the table grid is nine item in the array
let cells = Array.from(document.getElementsByTagName('td'));
console.log(document.getElementsByTagName('td'));

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked);
}
let noughtsTurn = true; //boolean
let gameIsOver;

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
      noughtsTurn = true;
      let turn = noughtsTurn ? 'O' : 'X';
      document.getElementById('subtitle').innerHTML = turn + "'s turn now";
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
    console.log(symbol);
    console.log(document.getElementById('subtitle'));
    document.getElementById('subtitle').innerHTML = 'PLAYER' + ' ' + symbol + ' ' + 'YOU ARE WINNER!!!!!';
  } else {
    // Check for a tie if all cells are filled
    let isTie = cells.every((cell) => cell.textContent !== '');
    if (isTie) {
      gameIsOver = true;
      document.getElementById('subtitle').innerHTML = "It's a TIE!";
    }

    // if a symbol appears three times in a row in the board cells i.e. a winning line

    // either horizontally, vertically, OR diagonally

    // the game is over

    // if the game is over

    // update the subtitle with the
  }
}
