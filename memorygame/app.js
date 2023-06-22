const gridDisplay = document.querySelector('#grid');

const score = document.getElementById('result');

const cardArray = [
  {
    name: 'apple',
    img: '/images/apple.png',
  },
  {
    name: 'pear',
    img: '/images/pear.png',
  },
  {
    name: 'grape',
    img: '/images/grape.png',
  },
  {
    name: 'banana',
    img: '/images/banana.png',
  },
  {
    name: 'pineapple',
    img: '/images/pineapple.png',
  },
  {
    name: 'watermelon',
    img: '/images/watermelon.png',
  },
  {
    name: 'strawberry',
    img: '/images/strawberry.png',
  },
  {
    name: 'blueberry',
    img: '/images/blueberry.png',
  },
  {
    name: 'peach',
    img: '/images/peach.png',
  },
];

// shuffle the card first
cardArray.sort(() => 0.5 - Math.random());

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id', i);
    gridDisplay.appendChild(card);
  }
}

createBoard();
// display the item to the grid
