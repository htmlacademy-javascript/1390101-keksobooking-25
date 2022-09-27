
// создаем переменную для карты
const offerCard = document.querySelector('#card')
  .content
  .querySelector('.popup');

// создаем вид жилья в виде объекта.
const selectionObjectType = (type) => {
  if (type === 'flat') {
    return 'Квартира';
  }

  if (type === 'bungalow') {
    return 'Бунгало';
  }

  if (type === 'house') {
    return 'Дом';
  }

  if (type === 'palace') {
    return 'Дворец';
  }

  if (type === 'hotel') {
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
  popupPrice.textContent = advert.offer.price;
  popupType.textContent = selectionObjectType(advert.offer.type);
  popupAvatar.textContent = advert.offer.author;
  popupTextAddress.textContent = advert.offer.address;
  popupCapacity.textContent = advert.offer.guests;
  popupDescription.textContent = advert.offer.description;
  popupTime.textContent = advert.offer.checkin.checkout;
  popupPhotos.textContent = advert.offer.photos;

  popupFeatures.innerHTML = '';
  advert.offer.features.forEach((cardFeature) => {
    const featuresListItem = document.createElement('li');

    featuresListItem.classList.add('popup__feature');
    featuresListItem.classList.add(`popup__feature--${  cardFeature}`);

    popupFeatures.append(featuresListItem);
  });

  popupPhotos.innerHTML = '';
  advert.offer.photos.forEach((cardPhotos) => {
    const photosListItem = document.createElement('img');

    photosListItem.classList.add('popup__photos');
    photosListItem.classList.add(`popup__photos--${  cardPhotos}`);

    popupPhotos.append(photosListItem);
  });

  return cardElement;
};

export { createOfferCard };
