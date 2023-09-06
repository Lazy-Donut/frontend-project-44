import readlineSync from 'readline-sync';

export const numberOfRounds = 3;
const questionMessage = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const gameEngine = (rules, questions, correctAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const answer = questionMessage(questions[i]);
    if (answer === correctAnswers[i]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
