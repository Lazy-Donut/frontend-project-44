import { getRandomNumber } from '../utils.js';
import { brainGamesBegin, questionMessage, wrongAnswerMessage } from '../index.js';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const findGcdGame = () => {
  const name = brainGamesBegin();
  console.log('Find the greatest common divisor of given numbers.');

  const accum = [];
  let i = 0;
  while (i < 3) {
    const number1 = getRandomNumber(2, 20);
    const number2 = getRandomNumber(2, 20);
    const answer = questionMessage(`${number1} ${number2}`);
    if (getGcd(number1, number2).toString() === answer) {
      i += 1;
      accum.push(answer);
      console.log('Correct!');
    } else if (getGcd(number1, number2).toString() !== answer) {
      wrongAnswerMessage(answer, getGcd(number1, number2), name);
      break;
    }
  }
  if (accum.length === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default findGcdGame;
