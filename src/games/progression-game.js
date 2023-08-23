import getRandomNumber from '../utils.js';
import gameEngine from '../index.js';

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
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const randomArray = generateRandomArray();
    const arrayLength = randomArray.length;
    const randomIndex = getRandomNumber(0, arrayLength);
    const number = randomArray[randomIndex];
    randomArray[randomIndex] = '..';
    questions.push(randomArray.join(' '));
    correctAnswers.push(number.toString());
  }
  gameEngine('What number is missing in the progression?', questions, correctAnswers);
};
export default findNumberInProgression;
