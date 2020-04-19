class FormValidator {
  constructor(element, name) {
    this.element = element;
    this.name = name;
    this.input1 = document.querySelector('[name="input1"]');
    this.input2 = document.querySelector('[name="input2"]');
    this.popup = document.querySelector('.popup')
  }
  checkInputValidity() {
    const errorElement = document.querySelector(`#error-${this.name}`);
    if (this.element.length === 0) {
      errorElement.textContent = "Это обязательное поле";
      errorElement.className = 'popup__error';

      return false;
    }
    else if (this.popup.id === 'profile' && (this.element.length === 1 || this.element.length >= 30)) {
      errorElement.textContent = "Должно быть от 2 до 30 символов";
      errorElement.className = "popup__error";
      return false;
    }
  }

  setSubmitButtonState() {

    const popupButton = popup.querySelector('.popup__button')
    if (this.checkInputValidity(this.element) === false || this.checkValidity(this.input1, this.input2) === false) {
      popupButton.setAttribute('disabled', true);
      popupButton.classList.remove('popup__button-enabled');
    }  else {
      popupButton.removeAttribute('disabled');
      popupButton.classList.add('popup__button-enabled');
      document.querySelector(`#error-${this.name}`).textContent = "";
      document.querySelector(`#error-${this.name}`).className = "";

    }
  }

  checkValidity() {
    if (this.input1.value.length === 0 || this.input2.value.length === 0 || (this.popup.id === 'profile' && 
    (this.input1.value.length < 2 || this.input2.value.length < 2 || this.input1.value.length > 30 || this.input2.value.length > 30))) {
      document.querySelector(`#error-${this.name}`).textContent = "";
      document.querySelector(`#error-${this.name}`).className = "";
    return false
    }
  }
}