import getRandomNumber from '../utils.js';
import gameEngine from '../index.js';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const findGcdGame = () => {
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber(2, 20);
    const number2 = getRandomNumber(2, 20);
    questions.push(`${number1} ${number2}`);
    correctAnswers.push(getGcd(number1, number2).toString());
  }
  gameEngine('Find the greatest common divisor of given numbers.', questions, correctAnswers);
};

export default findGcdGame;
