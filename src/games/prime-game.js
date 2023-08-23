import getRandomNumber from '../utils.js';
import gameEngine from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let divider = 2;
  while (number / 2 >= divider) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const isPrimeGame = () => {
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(1, 30);
    questions.push(number);
    correctAnswers.push(isPrime(number) ? 'yes' : 'no');
  }
  gameEngine('Answer "yes" if given number is prime. Otherwise answer "no".', questions, correctAnswers);
};

export default isPrimeGame;
