import getRandomNumber from '../utils.js';
import gameEngine from '../index.js';

const isEven = (number) => (number % 2 === 0);
const brainEvenGame = () => {
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(2, 10);
    questions.push(number.toString());
    correctAnswers.push(isEven(number) ? 'yes' : 'no');
  }
  gameEngine('Answer "yes" if the number is even, otherwise answer "no".', questions, correctAnswers);
};

export default brainEvenGame;
