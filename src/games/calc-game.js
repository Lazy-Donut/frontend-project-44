import { getRandomNumber } from '../utils.js';
import { brainGamesBegin, questionMessage, wrongAnswerMessage } from '../index.js';

const brainCalcGame = () => {
  const name = brainGamesBegin();
  console.log('What is the result of the expression?');
  // eslint-disable-next-line no-shadow
  const getRandomOperation = () => {
    const mathOperation = '+-*';
    const randomIndex = getRandomNumber(0, mathOperation.length);
    return mathOperation[randomIndex];
  };
  const findResultOfOperation = (num1, operation, num2) => {
    // eslint-disable-next-line default-case
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
    }
    return null;
  };

  const accum = [];
  let i = 0;
  while (i < 3) {
    const number1 = getRandomNumber(2, 20);
    const number2 = getRandomNumber(2, 20);
    const operation = getRandomOperation();

    const answer = questionMessage(`${number1} ${operation} ${number2}`);
    if (findResultOfOperation(number1, operation, number2).toString() === answer) {
      i += 1;
      accum.push(answer);
      console.log('Correct!');
    } else if (findResultOfOperation(number1, operation, number2).toString() !== answer) {
      wrongAnswerMessage(answer, findResultOfOperation(number1, operation, number2), name);
      break;
    }
  }
  if (accum.length === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainCalcGame;
