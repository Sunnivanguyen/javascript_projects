'use strict';

function getSecretNumber() {
  return Math.ceil(Math.random() * 20);
}
let secretNumber = getSecretNumber();
let score = 20;
let highscore = 0;
const guessElement = document.querySelector('.guess');
const numberElement = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const bodyElement = document.querySelector('body');
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessElement.value);
  //When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    numberElement.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Modify our application's style when the player wins
    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '😥 Too High!' : '🥲 Too Low!';
      displayMessage(guess > secretNumber ? '😥 Too High!' : '🥲 Too Low!');
      score--;
      scoreElement.textContent = score;
    } else {
      //document.querySelector('.message').textContent = '😭 You lost the game!';
      displayMessage('😭 You lost the game!');
      scoreElement.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = getSecretNumber();
  console.log(secretNumber);

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  numberElement.textContent = '?';
  scoreElement.textContent = score;
  guessElement.value = '';
  bodyElement.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});
