// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//function to change the head image of the clown.
//1. get the element from the html
//2. change the src to point to different pictures. head...
//3. call the function: and loop it

// For head part
console.log('Dress The Clown!')
//(counting times function called)
// let clothingIndex = {
//   head: 0,
//   body: 1,
//   shoes: 2,
// }
//function to change body part
//function to change the images

//-----------get the head image from HTML--------

// take the array of elements with"head,body,shoes"
//loop them adn qur

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

let bodyVars = [body, head, shoes]
let bodyParts = ['head', 'body', 'shoes']
let bodyIndex = 0
let bodyArray = [0, 0, 0]
// console.log(bodyVars)
// for (let i = 0; i < bodys.length; i++)

document.onkeydown = checkKey

function checkKey(e) {
  if (e.key === 'ArrowUp') {
    changeBodyPart(-1)
  } else if (e.key === 'ArrowDown') {
    changeBodyPart(1)
  } else if (e.key === 'ArrowLeft') {
    changeClownHead(-1)
  } else if (e.key === 'ArrowRight') {
    changeClownHead(1)
  }
}

function changeBodyPart(shift) {
  bodyIndex += shift
  if (bodyIndex < 0) bodyIndex = 2
  if (bodyIndex > 2) bodyIndex = 0
}

// use the right arrow key to move between different head images.
// document.addEventListener(''))
function changeClownHead(shift) {
  bodyArray[bodyIndex] += shift

  if (bodyArray[bodyIndex] < 0) {
    bodyArray[bodyIndex] = 5
  }
  if (bodyArray[bodyIndex] > 5) {
    bodyArray[bodyIndex] = 0
  }
  let bodyPart = bodyParts[bodyIndex]
  let imgIndex = bodyArray[bodyIndex]
  bodyVars[bodyIndex].src = `./images/${bodyPart}${imgIndex}.png`
  console.log(bodyArray[bodyIndex])
}
