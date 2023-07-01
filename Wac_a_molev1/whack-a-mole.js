// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
// The ability to store or get references to the cells in the HTML table.
//step 1 select the cell and put in the array
//2.make it random
//3. put the image in
// 4.disappear when click

// 4. a button to start the game

// A function to randomly select which cell should show the mole.

// get the table element to an array
const cellCollection = Array.from(document.querySelectorAll('td'));

// randomly select a cell from the array(an random index)
function randomCell(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  return item;
}

// call the random function

// put a image in the random cell
// 1.adding img tag
const image = document.createElement('img');
// adding image detail
image.src = './mole.PNG';
image.id = 'mole';
image.width = '75';
image.height = '75';
// put the image to the random cell
function showImageInRandomCell() {
  randomCell(cellCollection).appendChild(image);
}
// click button to start the game
const button = document.getElementById('myButton');
button.addEventListener('click', function () {
  showImageInRandomCell(); // Call the function on button click
  intervalId = setInterval(showImageInRandomCell, 500); // Start the interval
  setTimeout(function () {
    clearInterval(intervalId); // Stop the interval after 10 seconds
  }, 20000);
});

let object = document.getElementById('mole');
object.addEventListener('click', whackedMole);

function whackedMole() {
  randomCell(cellCollection);
  //   call the function again once clicked
  randomCell(cellCollection).appendChild(image);
  var audio = new Audio();
  audio.src = './whack-audio.wav';
  audio.play();
}

// Function to stop the interval after 10 seconds
