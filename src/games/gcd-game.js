import getRandomNumber from '../utils.js';
import gameEngine, { numberOfRounds } from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const findGcdGame = () => {
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const number1 = getRandomNumber(2, 20);
    const number2 = getRandomNumber(2, 20);
    questions.push(`${number1} ${number2}`);
    correctAnswers.push(getGcd(number1, number2).toString());
  }
  gameEngine(gameRules, questions, correctAnswers);
};

export default findGcdGame;
