import getRandomNumber from '../utils.js';
import gameEngine, { numberOfRounds } from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);
const brainEvenGame = () => {
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const number = getRandomNumber(2, 10);
    questions.push(number.toString());
    const result = isEven(number);
    correctAnswers.push(result ? 'yes' : 'no');
  }
  gameEngine(gameRules, questions, correctAnswers);
};

export default brainEvenGame;
