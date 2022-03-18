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


const TITLES = [
  'Норка в тихом лесу.',
  'Коммуналка на Мойке.',
  'Студия в 25-этажке.',
  'Просторная квартира в Мурино.',
  'Бунгало на Мальдивах.',
  'Евродвушка на Крестовском',
  'Аппартаменты у аэропорта',
  'Пансионат Шишки на Лампушках'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'простор и уют обеспечены',
  'тихие соседи ведущие ассоциальный образ жизни',
  'идеально для семьи с тремя детьми',
  'каменные джунгли в вашем распоряжении',
  'джунам не потянуть',
  'для экономных и не притязательных',
  'не пожалеете и хорошо отдохнете',
  'если желаете отдохнуть от интернета и сотовой связи, вам сюда',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const GENERATED_OBJ = 10;

const LOCATIONS = () => ({
  lat: getRandomFloat(35.65000, 35.70000, 5),
  ing: getRandomFloat(139.70000, 139.80000, 5)
});

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length -1)];
};

const createOffer = () => {
  const offer = {
    autor: {
      avatar: 'img/avatars/${userId}.png'
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: lat, ing(LOCATIONS),
      price: getRandomInt(1, 1000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(1, 20),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getRandomArrayElement(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElement(PHOTOS),
    },
    location: {
      lat: lat,
      ing: ing
    }
  }
};

const createOffers = () => {
  const data = [];

  for (let i = 0; i < 10; i++) {
    data.push(createOffer());
  }

  return data;
};
