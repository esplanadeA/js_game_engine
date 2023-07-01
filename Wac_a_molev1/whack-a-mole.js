// get the table element to an array
const cellCollection = Array.from(document.querySelectorAll('td'));

// randomly select a cell from the array(an random index)
function randomCell(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  return item;
}

// put a image in the random cell
// 1.adding img tag
const image = document.createElement('img');
// adding image detail
image.src = './mole.png';
image.id = 'mole';
image.width = '75';
image.height = '75';

let score = 0;
const scoreElement = document.getElementById('WAM_score');
let isIntervalPaused = false;

// Counter for the number of times the image is displayed
let imageDisplayCount = 0;
// Maximum number of image displays
const maxImageDisplays = 10;

// put the image to the random cell
function showImageInRandomCell() {
  if (isIntervalPaused) {
    return;
  }
  randomCell(cellCollection).appendChild(image);
  let object = document.getElementById('mole');
  console.log(object);
  object.addEventListener('click', whackedMole);
  imageDisplayCount++;
  if (imageDisplayCount >= maxImageDisplays) {
    // Stop the interval after reaching the maximum image displays

    clearInterval(intervalId);
  }
}
// click button to start the game
const button = document.getElementById('myButton');
button.addEventListener('click', function () {
  showImageInRandomCell(); // Call the function on button click
  intervalId = setInterval(showImageInRandomCell, 800); // Start the interval
  setTimeout(function () {
    clearInterval(intervalId); // Stop the interval after 10 seconds
  }, 20000);
});

function whackedMole() {
  // Change the source of the mole image
  image.src = './got_a_mole.png';
  randomCell(cellCollection).appendChild(image);
  isIntervalPaused = true;
  setTimeout(function () {
    isIntervalPaused = false;
  }, 1000);

  var audio = new Audio();
  audio.src = './whack-audio.wav';
  audio.play();

  if (image.src.endsWith('mole.png')) {
    // Increase the score
    score++;
    // Update the score in the HTML
    scoreElement.textContent = 'Score:' + score + '/10';
  }

  if (imageDisplayCount >= maxImageDisplays) {
    object.removeEventListener('click', whackedMole); // Remove the click event listener
    return (image.src = './end.png'); // Stop further image displays
  }

  setTimeout(function () {
    image.src = './mole.png';
    randomCell(cellCollection).appendChild(image);
  }, 1000);
}

// Function to stop the interval after 10 seconds
// function to record score
// function score (){
// get the id for the WAM_score
// push the score back
// if mole image is clicked
// return score ++
// if mole is not clicked return nothing
