
import "./style.css";
import Api from './js/API.js';
import Card from './js/Card.js';
import CardList from './js/CardList.js';
import Popup from './js/Popup.js';
import PopupImage from './js/PopupImage.js';
import UserInfo from './js/UserInfo.js';
import FormValidator from './js/FormValidator.js';

const  serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort9' : 'https://praktikum.tk/cohort9'

const api = new Api({
  baseUrl: serverUrl,
  headers: {
    authorization: 'b15df76c-7ea4-463d-a9df-6fd18ea569c8',
    'Content-Type': 'application/json'
  }
});

const popupData = {
  place: {
    title: 'Новое место',
    buttonName: '+',
    placeholder1: 'Название',
    placeholder2: 'Ссылка на картинку',
    id: 'place',
  },
  profile: {
    title: 'Редактировать профиль',
    buttonName: 'Сохранить',
    placeholder1: 'Имя',
    placeholder2: 'О себе',
    id: 'profile',
  }
};

const popup = document.querySelector('.popup');
const userInfoButton = document.querySelector('.user-info__button');
const userInfoEditButton = document.querySelector('.user-info-edit__button');
const popupClose = document.querySelector('.popup__close');

const input1 = popup.querySelector('[name="input1"]');
const input2 = popup.querySelector('[name="input2"]');

const popupCreator = new Popup(document.querySelector('.popup'), popupData)



// откртыие попапов
userInfoButton.addEventListener('click', function () {
  popupCreator.changePopup(popupData.place)
  popupCreator.clean()
  popupCreator.open()
})

userInfoEditButton.addEventListener('click', function () {
  popupCreator.changePopup(popupData.profile)
  popupCreator.clean()
  popupCreator.open()
})

// попап с картинкой
const popupImage = new PopupImage()

window.addEventListener('click', function () {
  popupImage.open(event)
})

document.getElementById('image').querySelector('.popup__close').addEventListener('click', function () {
  popupImage.close(event)
})

// закрытие попапа
popupClose.addEventListener('click', function () {
  popupCreator.close()
})



// валидация 

const form = document.querySelector('.popup__form')

form.addEventListener('input', function () {
  const formInput1 = new FormValidator(input1.value, input1.name)
  const formInput2 = new FormValidator(input2.value, input2.name)

  formInput1.checkInputValidity();
  formInput2.checkInputValidity();
  formInput1.setSubmitButtonState();
  formInput2.setSubmitButtonState();

})


const userInfo = new UserInfo(input1, input2, api)
userInfo.setUserInfo()


document.querySelector('.popup__form').addEventListener('submit', function () {
  event.preventDefault()
  if (popup.id === 'profile') {
  api.updateUserInfoOnServer(userInfo) 
  .then ((res) =>  {
    userInfo.setUserInfo()
    popupCreator.close()
  })
  }
})

// добавление исходных карточек с сервера 

// + вызов метода лучше перенести в класс CardList 

const cardList = new CardList(document.querySelector('.places-list'), api)
cardList.render()


document.querySelector('.popup__form').addEventListener('submit', function () {
  event.preventDefault()
  if (popup.id === 'place') {
    const newCard = new Card(input1.value, input2.value)
    cardList.addCard(newCard)
    popupCreator.close()
  }
})


