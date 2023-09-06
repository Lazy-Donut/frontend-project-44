import getRandomNumber from '../utils.js';
import gameEngine, { numberOfRounds } from '../index.js';

const gameRules = 'What is the result of the expression?';
const findResultOfOperation = (num1, operation, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown operation!');
  }
};
const brainCalcGame = () => {
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const number1 = getRandomNumber(2, 20);
    const number2 = getRandomNumber(2, 20);
    const mathOperation = '+-*';
    const operation = mathOperation[getRandomNumber(0, mathOperation.length)];
    questions.push(`${number1} ${operation} ${number2}`);
    correctAnswers.push(findResultOfOperation(number1, operation, number2).toString());
  }
  gameEngine(gameRules, questions, correctAnswers);
};

export default brainCalcGame;
