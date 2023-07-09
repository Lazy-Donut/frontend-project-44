const getRandomNumber = (min, max) => {
  Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomOperation = () => {
  const mathOperation = '+-*';
  const randomIndex = Math.floor(Math.random() * mathOperation.length);
  return mathOperation[randomIndex];
};

export { getRandomNumber, getRandomOperation };
