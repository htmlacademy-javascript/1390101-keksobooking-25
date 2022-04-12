
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

const OFFERS_AMOUNT = 10;

const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;

const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

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

const getLocation = () => ({
  lat: getRandomFloat(LAT_MIN, LAT_MAX, 5),
  lng: getRandomFloat(LNG_MIN, LNG_MAX, 5)
});

const getAvatarImg = (number) => {
  number = (number + 1);
  if (number < 10) {
    number = `0${number}`;
  }
  return `img/avatars/user${number}.png`;
};

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length -1)];

const createOffer = (index) => {
  const location = getLocation();

  console.log({index});

  const offer = {
    autor: {
      avatar: getAvatarImg(index),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${location.lat}, ${location.lng}`,
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
      lat: location.lat,
      lng: location.lng
    }
  };

  return offer;
};

const createOffers = () => {
  const data = [];

  for (let i = 0; i < OFFERS_AMOUNT; i++) {
    const index = (i < 10) ? `0${i}` : `${i}`;
    data.push(createOffer(i));
  }

  return data;
};

console.log(createOffers());
