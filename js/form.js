const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const childrenFiltersMap = mapFilters.querySelectorAll('fieldset, select');
const childrenForm = adForm.querySelectorAll('fieldset');

const toggleElements = (elements, state) => {
  elements.forEach((element) => {
    element.disabled = state;
  });
};

const deactivatePageState = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  toggleElements(childrenFiltersMap, true);
  toggleElements(childrenForm, true);
};

const activatePageState = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');

  toggleElements(childrenFiltersMap, false);
  toggleElements(childrenForm, false);
};

deactivatePageState();

export {deactivatePageState, activatePageState};
