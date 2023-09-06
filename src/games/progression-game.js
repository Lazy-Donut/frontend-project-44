import getRandomNumber from '../utils.js';
import gameEngine, { numberOfRounds } from '../index.js';

const gameRules = 'What number is missing in the progression?';

const generateRandomArray = (startNumber, finishNumber, step) => {
  const randomArray = [];
  for (let k = startNumber; randomArray.length <= finishNumber; k += step) {
    randomArray.push(k);
  }
  return randomArray;
};

const findNumberInProgression = () => {
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const beginNumber = getRandomNumber(2, 10);
    const finishNumber = getRandomNumber(5, 10);
    const stepOfProgression = getRandomNumber(2, 10);
    const randomArray = generateRandomArray(beginNumber, finishNumber, stepOfProgression);
    const arrayLength = randomArray.length;
    const randomIndex = getRandomNumber(0, arrayLength);
    const number = randomArray[randomIndex];
    randomArray[randomIndex] = '..';
    questions.push(randomArray.join(' '));
    correctAnswers.push(number.toString());
  }
  gameEngine(gameRules, questions, correctAnswers);
};
export default findNumberInProgression;
