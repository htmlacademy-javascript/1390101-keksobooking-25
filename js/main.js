/* 1 Функция, возвращающая случайное целое число из переданного диапазона включительно.
  диапазон может быть только положительный, включая ноль.
  как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min > max || min < 0 || max < 0) {
    throw new Error('Неверные параметры функции');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1, 8);

/* 2 Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
  диапазон может быть только положительный, включая ноль.
  как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.
*/

function getRandomFloat(min, max, fractionDigits) {
  if (min < 0 || max < 0) {
    throw new Error('Числа должны быть только положительными');
  }

  if (min < max) {
    return (Math.random() * (max - min) + min).toFixed(fractionDigits);
  }

  return (Math.random() * (min - max) + max).toFixed(fractionDigits);
}

getRandomFloat(1.25, 4.35, 5);
