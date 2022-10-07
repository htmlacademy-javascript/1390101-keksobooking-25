/* eslint-disable no-undef */

// создаем переменную для карты
const offerCard = document.querySelector('#card')
  .content
  .querySelector('.popup');

// // создаем вид жилья


const GetTypeTranslation = (type) => {
  switch(type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
  }
};

const createOfferCard = (advert) => {
  const cardElement = offerCard.cloneNode(true);
  //  возвращает склонированный объект с вложенностями

  // добавляем вложенные элементы с классами
  const popupAvatar = cardElement.querySelector('.popup__avatar');
  const popupTitle = cardElement.querySelector('.popup__title');
  const popupTextAddress = cardElement.querySelector('.popup__text--address');
  const popupPrice = cardElement.querySelector('.popup__text--price');
  const popupType = cardElement.querySelector('.popup__type');
  const popupCapacity = cardElement.querySelector('.popup__text--capacity');
  const popupTime = cardElement.querySelector('.popup__text--time');
  const popupFeatures = cardElement.querySelector('.popup__features');
  const popupDescription = cardElement.querySelector('.popup__description');
  const popupPhotos = cardElement.querySelector('.popup__photos');

  console.log('offer is', advert);

  popupTitle.textContent = advert.offer.title;
  popupPrice.textContent = `${advert.offer.price} ₽/ночь`;
  popupType.textContent = GetTypeTranslation(advert.offer.type);
  popupTextAddress.textContent = advert.offer.address;
  popupCapacity.textContent = `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`;
  popupDescription.textContent = advert.offer.description;
  popupTime.textContent = `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`;

  popupFeatures.innerHTML = '';
  advert.offer.features.forEach((cardFeature) => {
    const featuresListItem = document.createElement('li');

    featuresListItem.classList.add('popup__feature', `popup__feature--${cardFeature}`);

    popupFeatures.append(featuresListItem);
  });

  popupPhotos.innerHTML = '';
  advert.offer.photos.forEach((cardPhoto) => {
    const photosListItem = document.createElement('img');

    photosListItem.classList.add('popup__photo');
    photosListItem.width = 45;
    photosListItem.height = 40;
    photosListItem.src = cardPhoto;
    photosListItem.alt = 'Фотография жилья';
    popupPhotos.append(photosListItem);
  });

  popupAvatar.src = advert.author.avatar;

  return cardElement;
};

export { createOfferCard };
