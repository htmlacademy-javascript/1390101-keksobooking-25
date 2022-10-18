const getInactiveState = () => {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form--disabled');

  const childrenForm = adForm.querySelectorAll('fieldset');

  const getchildFormNoActive = () => {
    for (let i = 0; i <= childrenForm.length; i++) {
      const childForm = childrenForm[i];
      childForm.setAttribute('disabled', 'disabled');
      console.log('disabled', childForm);
    }
  };

  getchildFormNoActive();

  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('map__filters--disabled');

  const childrenFiltersMap = mapFilters.querySelectorAll('fieldset', 'select');


  const getchildMapNoActive =() => {
    for (let i = 0; i <= childrenFiltersMap.length; i++) {
      const childFiltersMap = childrenFiltersMap[i];
      childFiltersMap.setAttribute('disabled', 'desabled');
      console.log('disabled', childFiltersMap);
    }
  };

  getchildMapNoActive();
};

getInactiveState();

export {getInactiveState};
