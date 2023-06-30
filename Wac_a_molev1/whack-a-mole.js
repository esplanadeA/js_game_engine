// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
// The ability to store or get references to the cells in the HTML table.
//step 1 select the cell and put in the array
//2.make it random
//3. put the image in

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
randomCell(cellCollection);

// put a image in the random cell
// 1.adding img tag
const image = document.createElement('img');
// adding image detail
image.src = './mole.PNG';
image.id = 'mole';
image.width = '75';
image.height = '75';
// put the image to the random cell
randomCell(cellCollection).appendChild(image);
