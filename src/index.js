import readlineSync from 'readline-sync';

const brainGamesBegin = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const questionMessage = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const wrongAnswerMessage = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
};

const correctMessage = () => {
  console.log('Correct!');
};

const congratulationsMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const gameEngine = (rules, questions, correctAnswers) => {
  const name = brainGamesBegin();
  console.log(rules);
  // eslint-disable-next-line no-shadow
  const accum = [];
  let i = 0;
  while (i < 3) {
    const answer = questionMessage(questions[i]);
    if (answer === correctAnswers[i]) {
      i += 1;
      accum.push(answer);
      correctMessage();
    } else {
      wrongAnswerMessage(answer, correctAnswers[i], name);
      break;
    }
  }
  if (accum.length === 3) {
    congratulationsMessage(name);
  }
};

export default gameEngine;
