const getInactiveState = () => {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form--disabled');

  const childrenForm = adForm.children;

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

  const childrenMap = document.querySelectorAll('#map__filters .map__filter');


  const getchildMapNoActive =() => {
    for (let i = 0; i <= childrenMap.length; i++) {
      const childMap = childrenMap[i];
      childMap.setAttribute('disabled', 'desabled');
      console.log('disabled', childMap);
    }
  };

  getchildMapNoActive();
};

getInactiveState();

export {getInactiveState};
