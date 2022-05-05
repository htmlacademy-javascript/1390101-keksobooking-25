const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min > max || min < 0 || max < 0) {
    throw new Error('Неверные параметры функции');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min, max, fractionDigits) => {
  if (min < 0 || max < 0) {
    throw new Error('Числа должны быть только положительными');
  }

  if (min < max) {
    return (Math.random() * (max - min) + min).toFixed(fractionDigits);
  }

  return (Math.random() * (min - max) + max).toFixed(fractionDigits);
};

export {getRandomInt, getRandomFloat};
