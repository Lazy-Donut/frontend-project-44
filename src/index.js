import readlineSync from 'readline-sync';

function brainGamesBegin() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function questionMessage(question) {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
}

function wrongAnswerMessage(answer, correctAnswer, name) {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
}

export { brainGamesBegin, questionMessage, wrongAnswerMessage };
