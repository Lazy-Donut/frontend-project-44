import getRandomNumber from '../utils.js';
import { brainGamesBegin, questionMessage, wrongAnswerMessage } from '../index.js';

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
  const name = brainGamesBegin();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  // eslint-disable-next-line no-shadow

  const accum = [];
  let i = 0;
  while (i < 3) {
    const number = getRandomNumber(1, 30);
    const answer = questionMessage(number);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      i += 1;
      accum.push(answer);
      console.log('Correct');
    } else {
      wrongAnswerMessage(answer, correctAnswer, name);
      break;
    }
  }
  if (accum.length === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default isPrimeGame;
