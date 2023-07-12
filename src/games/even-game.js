import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';
import brainGamesBegin from '../cli.js';

const brainEvenGame = () => {
  const name = brainGamesBegin();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // eslint-disable-next-line no-shadow

  const accum = [];
  let i = 0;
  while (i < 3) {
    const number = getRandomNumber(2, 10);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      i += 1;
      accum.push(answer);
      console.log('Correct');
    } else if (answer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
    } else if (answer === 'no') {
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

export default brainEvenGame;
