import readlineSync from 'readline-sync';
import { getRandomNumber, getRandomOperation } from '../index.js';
import brainGamesBegin from '../cli.js';

const brainCalcGame = () => {
  const name = brainGamesBegin();
  console.log('What is the result of the expression?');
  // eslint-disable-next-line no-shadow

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
    console.log(`Question: ${number1} ${operation} ${number2} `);
    const answer = readlineSync.question('Your answer: ');
    if (findResultOfOperation(number1, operation, number2).toString() === answer) {
      i += 1;
      accum.push(answer);
      console.log('Correct!');
    } else if (findResultOfOperation(number1, operation, number2).toString() !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${findResultOfOperation(number1, operation, number2)}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (accum.length === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainCalcGame;
