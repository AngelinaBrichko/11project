class Popup {
  constructor(popupData) {
    this.options = popupData;
    this.popup = popup;
    this.input1 = document.querySelector('[name="input1"]');
    this.input2 = document.querySelector('[name="input2"]');
  }
  changePopup(options) {
    this.popup.querySelector('.popup__title').textContent = options.title;
    this.popup.querySelector('.popup__button').textContent = options.buttonName;
    this.popup.setAttribute('id', options.id);


    this.input1.placeholder = options.placeholder1;
    this.input2.placeholder = options.placeholder2;

    if (this.popup.id === 'profile') {
      const userInfoName = document.querySelector('.user-info__name');
      const userInfoJob = document.querySelector('.user-info__job');

      this.input1.value = userInfoName.textContent;
      this.input2.value = userInfoJob.textContent;

      this.popup.querySelector('.popup__button').classList.add('popup__button-enabled');
      this.popup.querySelector('.popup__button').classList.add('popup__button-text');


    } else {
      this.popup.querySelector('.popup__button').classList.remove('popup__button-text');
      this.popup.querySelector('.popup__button').classList.remove('popup__button-enabled');

      this.input1.value = '';
      this.input2.value = '';
    }

  }

  open() {
    this.popup.classList.add('popup_is-opened');
  }

  close() {
    this.popup.classList.remove('popup_is-opened');
  }

  clean() {
    const errorElement1 = document.querySelector(`#error-${input1.name}`);
    const errorElement2 = document.querySelector(`#error-${input2.name}`);
    errorElement1.textContent = "";
    errorElement2.textContent = "";
  }
}