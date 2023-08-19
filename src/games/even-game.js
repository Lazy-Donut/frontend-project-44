import { getRandomNumber } from '../utils.js';
import { brainGamesBegin, questionMessage, wrongAnswerMessage } from '../index.js';

const isEven = (number) => (number % 2 === 0);
const brainEvenGame = () => {
  const name = brainGamesBegin();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // eslint-disable-next-line no-shadow

  const accum = [];
  let i = 0;
  while (i < 3) {
    const number = getRandomNumber(2, 10);
    const answer = questionMessage(number);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
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

export default brainEvenGame;
