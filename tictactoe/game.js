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
  let cell = e.target;
  console.log(cell);
  if (cell.textContent === '') {
    let symbol = noughtsTurn ? 'O' : 'X';
    cell.textContent = symbol;
    if (symbol === 'O') {
      cell.classList.add('highlightedPlayer1');
    } else cell.classList.add('highlightedPlayer2');
    checkForWin(symbol);
    if (!gameIsOver) {
      noughtsTurn = !noughtsTurn;
      let Turn = noughtsTurn ? 'O' : 'X';
      document.getElementById('subtitle').innerHTML = Turn + "'s turn now";
    }
  }
}

function makeComputerMove() {
  // get the cells
  // do a random cell
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
    document.getElementById('subtitle').innerHTML = 'PLAYER' + ' ' + symbol + ' ' + 'YOU ARE WINNER!!!!!';
  }

  // if a symbol appears three times in a row in the board cells i.e. a winning line

  // either horizontally, vertically, OR diagonally

  // the game is over

  // if the game is over

  // update the subtitle with the
}
// function updateCounts() {
