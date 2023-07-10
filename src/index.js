const getRandomNumber = (min, max) => {
  Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - min)) + min;
};

const getRandomOperation = () => {
  const mathOperation = '+-*';
  const randomIndex = Math.floor(Math.random() * mathOperation.length);
  return mathOperation[randomIndex];
};

export { getRandomNumber, getRandomOperation };
