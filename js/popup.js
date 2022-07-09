// создаем переменную для карты
const mapCanvas = document.querySelector('#map-canvas');

// создаем вид жилья в виде объекта, так делают многие
const selectionObjectType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  Дворец: 'palace',
  Отель: 'hotel'
};

// так сделала бы я, но не работает
// const selectionObjectType = () => {
//   if (type === 'flat')
//   {return 'Квартира';}

//   if (type === 'bungalow')
//   {return 'Бунгало';}

//   if (type === 'house')
//   {return 'Дом';}

//   if (type === 'palace')
//   {return 'Дворец';}

//   if (type === 'hotel')
//   {return 'Отель';}
// };

// создаем карточку, но для чего мы ищем #card и здесь же .popup
const OfferCard = document.querySelector('#card')
  .textContent
  .querySelector('.popup');

const createOfferCard = (offer) => {
  const cardElement = OfferCard.cloneNode(true);
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
  const popupPhoto = cardElement.querySelector('.popup__photo');

  // const ({
  //   autor: {
  //     avatar
  //   },
  //   offer: {
  //     title,
  //     address,
  //     price,
  //     type,
  //     rooms,
  //     guests,
  //     checkin,
  //     checkout,
  //     features,
  //     description,
  //     photos
}
//   })

addElementData(popupAvatar, 'image', avatar);
addElementData(popupTitle, 'text', title);
addElementData(popupTextAddress, 'text', address);
addElementData(popupPrice, 'text', `${price} ?/ночь`);
addElementData(popupType, 'text', selectionObjectType(type));
addElementData(popupCapacity, 'text', `${rooms} комнаты для ${guests} гостей`);
addElementData(popupTime, 'text', `Заезд после ${checkin}, выезд до ${checkout}`);
getHouseFeatures(popupFeatures, features);
addElementData(popupDescription, 'text', description);
getHousePhotos(popupPhotos, popupPhoto, photos);

return offer;


console.log(createOfferCard)

export { createOfferCard };

// getHouseFeatures
// Задание. нужно вывести все доступные удобства в объявлении

// getHousePhoto
// Задание. нужно вывести все фотографии из списка offer.photos.
// Задание. Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.
// здесь вообще не представляю как сделать. Понимаю, что нужно сделать функцией и пройтись по массиву/объекту.


// И в учебном примере же нужно скопировать шаблон и наполнить его своими данными, а у нас создать новый получается из ничего
// Непонятно зачем нужны эти классы и этот шаблон, почему именно такими классами нужно заполнять.

// Задание. Предусмотрите ситуацию, когда данных для заполнения не хватает.
// Задание. Например, отсутствует описание. В этом случае соответствующий блок в карточке скрывается.
// Здесь нужно сделать отдельной функцией или прописать в каждом блоке условие иф?
// Не до конца понимаю как проверять код на работоспособность. Делать это при написании каждой функции и переменной?
