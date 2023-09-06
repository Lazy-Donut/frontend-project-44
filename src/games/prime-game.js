import getRandomNumber from '../utils.js';
import gameEngine, { numberOfRounds } from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeGame = () => {
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const number = getRandomNumber(1, 30);
    questions.push(number);
    const result = isPrime(number);
    correctAnswers.push(result ? 'yes' : 'no');
  }
  gameEngine(gameRules, questions, correctAnswers);
};

export default isPrimeGame;
