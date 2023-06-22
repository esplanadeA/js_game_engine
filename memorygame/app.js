const gridDisplay = document.querySelector('#grid');

const resultDisplay = document.getElementById('result');

const cardArray = [
  {
    name: 'apple',
    img: 'images/apple.png',
  },
  {
    name: 'pear',
    img: 'images/pear.png',
  },
  {
    name: 'grape',
    img: 'images/grape.png',
  },
  {
    name: 'banana',
    img: 'images/banana.png',
  },
  {
    name: 'pineapple',
    img: 'images/pineapple.png',
  },
  {
    name: 'strawberry',
    img: 'images/strawberry.png',
  },
  {
    name: 'blueberry',
    img: 'images/blueberry.png',
  },
  {
    name: 'peach',
    img: 'images/peach.png',
  },
  {
    name: 'apple',
    img: 'images/apple.png',
  },
  {
    name: 'pear',
    img: 'images/pear.png',
  },
  {
    name: 'grape',
    img: 'images/grape.png',
  },
  {
    name: 'banana',
    img: 'images/banana.png',
  },
  {
    name: 'pineapple',
    img: 'images/pineapple.png',
  },
  {
    name: 'strawberry',
    img: 'images/strawberry.png',
  },
  {
    name: 'blueberry',
    img: 'images/blueberry.png',
  },
  {
    name: 'peach',
    img: 'images/peach.png',
  },
];

// shuffle the card first
cardArray.sort(() => 0.5 - Math.random());
// display the item to the grid

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

// flipcard
let cardsChosen = [];
let cardChosenIds = [];
let cardsWon = [];

// function checkMatch() {
//   const cards = document.querySelectorAll('img');
//   console.log(cards);
//   if (cardChosenIds[0] == cardChosenIds[1]) {
//     cards[cardChosenIds[0]].setAttribute('src', 'images/blank.png');
//     cards[cardChosenIds[1]].setAttribute('src', 'images/blank.png');
//     alert('You have clicked the same image!');
//   } else if (cardChosen[0] === cardChosen[1]) {
//     alert('you find a match');
//     console.log(cardChosenIds[0]);
//     cards[cardChosenIds[0]].setAttribute('src', 'images/clicked.png');
//     cards[cardChosenIds[1]].setAttribute('src', 'images/clicked.png');
//     cards[cardChosenIds[0]].removeEventListener('click', flipCard);
//     cards[cardChosenIds[1]].removeEventListener('click', flipCard);
//     cardsWon.push[cardChosen];
//   } else {
//     cards[cardChosenIds[0]].setAttribute('src', 'images/blank.png');
//     cards[cardChosenIds[1]].setAttribute('src', 'images/blank.png');
//     alert('Sorry try again');
//   }
//   cardChosen = [];
//   cardChosenIds = [];

//   resultDisplay.textContent = cardsWon.length;
//   if (cardsWon.length === cardArray.length / 2) {
//     resultDisplay.textContent = 'Congratulations! You found them all!';
//   }
// }

function checkForMatch() {
  const cards = document.querySelectorAll('img');
  const optionOneId = cardChosenIds[0];
  const optionTwoId = cardChosenIds[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('You have clicked the same image!');
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match');
    cards[optionOneId].setAttribute('src', 'images/clicked.png');
    cards[optionTwoId].setAttribute('src', 'images/clicked.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('Sorry, try again');
  }
  cardsChosen = [];
  cardChosenIds = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = 'Congratulations! You found them all!';
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id');

  cardsChosen.push(cardArray[cardId].name);
  cardChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardChosenIds);
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
  createBoard();
}
