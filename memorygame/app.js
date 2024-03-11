const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.getElementById('result');

document.addEventListener('DOMContentLoaded', () => {
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
  let cardsChosen = [];
  let cardChosenIds = [];
  let cardsWon = [];

  function clickSoundPlay() {
    const clickSound = new Audio('sounds/click_pop.mp3');
    clickSound.play();
    //  const winningSound = new Audio('sounds/winning.mp3');
    //  const failSound = new Audio('sounds/lose.mp3');
  }
  function winningSoundPlay() {
    const winningSound = new Audio('sounds/winning.mp3');
    winningSound.play();

    //  const failSound = new Audio('sounds/lose.mp3');
  }
  function wrongSoundPlay() {
    const failSound = new Audio('sounds/wrong.wav');
    failSound.play();
  }

  // create image board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.setAttribute('class', 'RM_img');
      card.addEventListener('click', flipCard);
      card.addEventListener('click', clickSoundPlay);
      gridDisplay.appendChild(card);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('.RM_img');
    console.log(cards);
    console.log(cardChosenIds);
    console.log(cardsWon);

    const card1 = cards[cardChosenIds[0]];
    const card2 = cards[cardChosenIds[1]];

    if (cardChosenIds[0] === cardChosenIds[1]) {
      cards[cardChosenIds[0]].setAttribute('src', 'images/blank.png');
      cards[cardChosenIds[1]].setAttribute('src', 'images/blank.png');
      alert('You have clicked the same image!');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      winningSoundPlay();
      alert('you find a match');
      console.log(cardChosenIds[0]);
      card1.setAttribute('src', 'images/clicked.png');
      card2.setAttribute('src', 'images/clicked.png');
      // Optionally remove event listeners if needed
      card1.removeEventListener('click', flipCard);
      card2.removeEventListener('click', flipCard);
      cardsWon.push(cardChosenIds[0]);
      cardsWon.push(cardChosenIds[1]);
      cardsChosen = [];
      cardChosenIds = [];
    } else {
      cardsChosen = [];
      cardChosenIds = [];
      wrongSoundPlay();
      alert('Sorry try again');
      card1.setAttribute('src', 'images/blank.png');
      card2.setAttribute('src', 'images/blank.png');
      // card1.removeEventListener('click', flipCard);
      // card2.removeEventListener('click', flipCard);
    }
    //  cardsChosen = [];
    //  cardChosenIds = [];
    //  cardChosenIds = [];

    //  resultDisplay.textContent = cardsWon.length;
    console.log(cardsWon);
    if (cardsWon.length === cardArray.length) {
      resultDisplay.textContent = 'Congratulations! You found them all!';
    }
  }

  // check for matches
  //   function checkForMatch() {
  //     const cards = document.querySelectorAll('img');
  //     const optionOneId = cardChosenIds[0];
  //     const optionTwoId = cardChosenIds[1];

  //     if (optionOneId == optionTwoId) {
  //       cards[optionOneId].setAttribute('src', 'images/blank.png');
  //       cards[optionTwoId].setAttribute('src', 'images/blank.png');
  //       alert('You have clicked the same image!');
  //     } else if (cardsChosen[0] === cardsChosen[1]) {
  //       alert('You found a match');
  //       console.log(optionOneId);
  //       console.log(cardsChosen);
  //       cards[optionOneId].setAttribute('src', 'images/white.png');
  //       cards[optionTwoId].setAttribute('src', 'images/white.png');
  //       cards[optionOneId].removeEventListener('click', flipCard);
  //       cards[optionTwoId].removeEventListener('click', flipCard);
  //       cardsWon.push(cardsChosen);
  //     } else {
  //       cards[optionOneId].setAttribute('src', 'images/blank.png');
  //       cards[optionTwoId].setAttribute('src', 'images/blank.png');
  //       alert('Sorry, try again');
  //     }
  //     cardsChosen = [];
  //     cardsChosenIds = [];
  //     resultDisplay.textContent = cardsWon.length;
  //     if (cardsWon.length === cardArray.length / 2) {
  //       resultDisplay.textContent = 'Congratulations! You found them all!';
  //     }
  //   }

  function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    console.log(cardsChosen);
    console.log(cardChosenIds);
    cardChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  createBoard();
});
