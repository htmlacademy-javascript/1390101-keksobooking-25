/* 1 Функция, возвращающая случайное целое число из переданного диапазона включительно.
  диапазон может быть только положительный, включая ноль.
  как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if(max>min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  if (min=max) {
    return min;
  }
  else {return 'Значение От больше значения До';}
}

/* 2 Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
  диапазон может быть только положительный, включая ноль.
  как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.
*/

function getRandom(min, max, random) {
  if (min < 0 || max < 0) {
    throw new Error('Числа должны быть только положительными');
  }
  if (min < max) {
    return (Math.random() * (max - min) + min).toFixed(random);
  }
  else {
    return (Math.random() * (min - max) + max).toFixed(random);
  }
}
