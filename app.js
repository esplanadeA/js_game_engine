const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const result = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;

// list all the possibility from computer

// list all the possibility choice from user
possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
  })
);

// condition to match
