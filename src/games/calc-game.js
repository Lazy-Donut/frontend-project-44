import getRandomNumber from '../utils.js';
import gameEngine from '../index.js';

const findResultOfOperation = (num1, operation, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};
const getRandomOperation = () => {
  const mathOperation = '+-*';
  const randomIndex = getRandomNumber(0, mathOperation.length);
  return mathOperation[randomIndex];
};
const brainCalcGame = () => {
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber(2, 20);
    const number2 = getRandomNumber(2, 20);
    const operation = getRandomOperation();
    questions.push(`${number1} ${operation} ${number2}`);
    correctAnswers.push(findResultOfOperation(number1, operation, number2).toString());
  }
  gameEngine('What is the result of the expression?', questions, correctAnswers);
};

export default brainCalcGame;
