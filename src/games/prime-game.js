import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';
import brainGamesBegin from '../cli.js';

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
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((isPrime(number) === true && answer === 'yes') || (isPrime(number) === false && answer === 'no')) {
      i += 1;
      accum.push(answer);
      console.log('Correct');
    } else if (isPrime(number) === false && answer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
    } else if (isPrime(number) === true && answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      break;
    } else {
      console.log(`${answer} is wrong answer ;(.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (accum.length === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default isPrimeGame;
