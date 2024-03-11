// Get the table element to an array
const cellCollection = Array.from(document.querySelectorAll('td'));

// Create an image element for the mole
const moleImage = document.createElement('img');
moleImage.src = './mole.png';
moleImage.width = '75';
moleImage.height = '75';
moleImage.id = 'mole';

// Game variables
let score = 0;
const maxImageDisplays = 10;
let isIntervalPaused = false;
let imageDisplayCount = 0;
let intervalId;

// Function to start the game interval
function startGameInterval() {
  intervalId = setInterval(showImageInRandomCell, 800);
}

// Function to randomly select a cell
function randomCell(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to show the mole image in a random cell
function showImageInRandomCell() {
  if (isIntervalPaused) return;

  imageDisplayCount++;
  console.log(imageDisplayCount);

  if (imageDisplayCount < maxImageDisplays) {
    const randomCellElement = randomCell(cellCollection);
    randomCellElement.appendChild(moleImage);

    moleImage.addEventListener('click', whackedMole);

    if (imageDisplayCount >= maxImageDisplays) {
      clearInterval(intervalId);
      isIntervalPaused = true;
      const gameOverTitle = document.querySelector('.titles');
      gameOverTitle.textContent = 'Game Over';
    }
  } else {
    const tds = document.querySelectorAll('#gameTable td');
    tds.forEach((td) => (td.style.display = 'none'));

    const endImage = document.createElement('img');
    endImage.src = './end.png';
    endImage.style.width = '100%';
    endImage.style.height = '100%';
    document.getElementById('gameTable').appendChild(endImage);

    isIntervalPaused = true;
    const gameOverTitle = document.querySelector('.titles');
    gameOverTitle.textContent = 'Game Over';
  }
}

// Function to handle mole click event
function whackedMole(event) {
  const clickedMole = event.target;

  clickedMole.src = './got_a_mole.png';
  isIntervalPaused = true;
  setTimeout(() => (isIntervalPaused = false), 1000);

  var audio = new Audio();
  audio.src = './whack-audio.wav';
  audio.play();

  if (clickedMole.src.endsWith('mole.png')) {
    score++;
    document.getElementById('WAM_score').textContent = 'Score: ' + score + '/10';
  }

  if (imageDisplayCount >= maxImageDisplays) {
    moleImage.removeEventListener('click', whackedMole);
  }

  setTimeout(() => {
    moleImage.src = './mole.png';
    randomCell(cellCollection).appendChild(moleImage);
  }, 1000);
}

// Click button to start the game
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  showImageInRandomCell();
  startGameInterval();
  setTimeout(() => clearInterval(intervalId), 20000);
});
