const getRandomNumber = (min, max) => {
  Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - min)) + min;
};

export { getRandomNumber };
