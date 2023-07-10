import readlineSync from 'readline-sync';
import { getRandomNumber } from '../src/index.js';

const findNumberInProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const accum = [];
  let i = 0;
  while (i < 3) {
    const randomArray = [];
    const startNumber = getRandomNumber(2, 10);
    const finishNumber = getRandomNumber(5, 10);
    const step = getRandomNumber(2, 10);
    for (let k = startNumber; randomArray.length <= finishNumber; k += step) {
      randomArray.push(k);
    }
    const arrayLength = randomArray.length;
    const randomIndex = getRandomNumber(0, arrayLength);
    const randomNumberInArray = randomArray[randomIndex];
    randomArray[randomIndex] = '..';
    const number = randomNumberInArray;
    console.log(`Question: ${randomArray.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (number.toString() === answer) {
      i += 1;
      accum.push(answer);
      console.log('Correct!');
    } else if (number.toString() !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${number}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (accum.length === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
findNumberInProgression();
