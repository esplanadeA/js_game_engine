console.log('Welcome to Tic-Tac-Toe! Enjoy!');
// get the array where the table grid is nine item in the array
let cells = Array.from(document.getElementsByTagName('td'));

// when click on the cell of grid put the "X" or 'O' in
//a.onclick function to the cell
//b. looping each cell in the array.
//b. add the value x or o to the grid.... innerHTML
console.log(cells);
//b.looping the array and assign the function to it.
for (let i = 0; i < cells.length; i++) cells[i].onclick = cellClicked;

//The cellClicked(e) function PART I
//function: when click on cell , define what happend
let noughtsTurn = true; //boolean
let gameIsOver;

//   let x = document.getElementsByClassName(symbolngth
// }
// put the symbol inside the cell (by using .innerHTML again)

// check to see if the player won with that move (probably using a new function, like checkForWin() which I'll need to write later)
// checkForWin() {}
// if the game isn't over

// switch to the other player (using the naughtsTurn boolean again)

// update the subtitle saying whose turn it is no

function cellClicked(e) {
  let cell = e.target;
  if (cell.textContent === '') {
    let symbol = noughtsTurn ? 'O' : 'X'; // let symbol = if{} else {}
    cell.textContent = symbol;
    checkForWin(symbol);
    if (!gameIsOver) {
      noughtsTurn = !noughtsTurn;
      let Turn = noughtsTurn ? 'O' : 'X';
      document.getElementById('subtitle').innerHTML = Turn + "'s turn now";
    }
  }
}

// the function takes a string as an argument ("X" or "O")
// *in this example we called the argument 'symbol' but you can call it whatever you want (hint: bananas)

function checkForWin(symbol) {
  // HORIZONTAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  )
    gameIsOver = true;
  else if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  )
    gameIsOver = true;
  else if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true;
  // VERTICAL LINES //
  else if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true;
  else if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  )
    gameIsOver = true;
  else if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true;
  // DIAGONAL LINES //
  else if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true;
  else if (
    cells[2].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true;

  if (gameIsOver) {
    document.getElementById('subtitle').innerHTML =
      'PLAYER' + ' ' + symbol + ' ' + 'YOU ARE WINNER!!!!!';
  }

  // if a symbol appears three times in a row in the board cells i.e. a winning line

  // either horizontally, vertically, OR diagonally

  // the game is over

  // if the game is over

  // update the subtitle with the
}
// function updateCounts() {
