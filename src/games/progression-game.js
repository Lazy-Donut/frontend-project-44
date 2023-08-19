import { getRandomNumber } from '../utils.js';
import { brainGamesBegin, questionMessage, wrongAnswerMessage } from '../index.js';

const generateRandomArray = () => {
  const randomArray = [];
  const startNumber = getRandomNumber(2, 10);
  const finishNumber = getRandomNumber(5, 10);
  const step = getRandomNumber(2, 10);
  for (let k = startNumber; randomArray.length <= finishNumber; k += step) {
    randomArray.push(k);
  }
  return randomArray;
};

const findNumberInProgression = () => {
  const name = brainGamesBegin();
  console.log('What number is missing in the progression?');

  const accum = [];
  let i = 0;
  while (i < 3) {
    const randomArray = generateRandomArray();
    const arrayLength = randomArray.length;
    const randomIndex = getRandomNumber(0, arrayLength);
    const number = randomArray[randomIndex];
    randomArray[randomIndex] = '..';
    const answer = questionMessage(randomArray.join(' '));
    if (number.toString() === answer) {
      i += 1;
      accum.push(answer);
      console.log('Correct!');
    } else if (number.toString() !== answer) {
      wrongAnswerMessage(answer, number, name);
      break;
    }
  }
  if (accum.length === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default findNumberInProgression;
