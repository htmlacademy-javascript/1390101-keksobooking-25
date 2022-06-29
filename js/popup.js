
const OfferCard = document.querySelector('#card')
  .textContent
  .querySelector('.popup');

const createOfferCard = (offer) => {
  const cardElement = OfferCard.cloneNode(true);

  const popupTitle = cardElement.querySelector('.popup__title');
  const popupTextAddress = cardElement.querySelector('.popup__text--address');
  const popupPrice = cardElement.querySelector('.popup__text--price');
  const popupType = cardElement.querySelector('.popup__type');
  const popupCapacity = cardElement.querySelector('.popup__text--capacity');
  const popupTime = cardElement.querySelector('.popup__text--time');
  const popupFeatures = cardElement.querySelector('.popup__features');
  const popupDescription = cardElement.querySelector('.popup__description');
  const popupPhotos = cardElement.querySelector('.popup__photos');

  const {
    autor: {
      avatar
    },
    offer: {
      title,
      address,
      price,
      type,
      rooms,
      guests,
      checkin,
      checkout,
      features,
      description,
      photos,
    },
  } = offer;
};

export {createOfferCard};
