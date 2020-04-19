const api = new Api({
  baseUrl: 'https://praktikum.tk/cohort9',
  headers: {
    authorization: 'b15df76c-7ea4-463d-a9df-6fd18ea569c8',
    'Content-Type': 'application/json'
  }
})

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
}

const popup = document.querySelector('.popup');
const userInfoButton = document.querySelector('.user-info__button');
const userInfoEditButton = document.querySelector('.user-info-edit__button');
const popupClose = document.querySelector('.popup__close');

const input1 = popup.querySelector('[name="input1"]');
const input2 = popup.querySelector('[name="input2"]');

const popupCreator = new Popup(popupData)



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

  // +Надо исправить. Переменные которые вы объявляете в названии должны содержать
  // понятно название, отражающее суть того что они под собой скрываю

  formInput1.checkInputValidity();
  formInput2.checkInputValidity();
  formInput1.setSubmitButtonState();
  formInput2.setSubmitButtonState();

})


const userInfo = new UserInfo(input1, input2, api)
userInfo.setUserInfo()


// получение данных с сервера и обновление их на странице

// вызов метода лучше перенести в класс UserInfo
// + Я перенесла лишь часть метода в UserInfo

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




/**
 * Здравствуйте, я прокомментировал класс. Там есть небольшие замечания которые надо исправить.
 *
* Класс Api это отдельный класс, который ничего не знает о других классах и методах
* Вы можете только получать данные из этого класса и использовать эти данные.
* Представьте, что я дам Вам другой класс(допустим DataBase) к внутренностям которого вы не будете иметь доступ и даже прочитать этот файл не сможете
* предварительно скажу, что у него есть несколько методов  getInitialCards deleteCard addCard, editUserInfo, setUserInfo и так далее
* Который только возвращает/записывает данные, а вы можете получить только обращаясь к этим методам.
* Соответственно в классе нельзя реализовать такие методы как querySelector или обратиться к другому классу, а только обратиться к методам сервера или базы.
* Получается отдельная обязанность. Таким способом Вы обращаетесь к серверу. Вы не знаете, что на сервере, даже язык программирования, но вы знаете методы
* к которым обращаетесь и способ обращения. Это и есть обязанность отдельного класса.

Если говорить об идеальном исполнении, то в этом файле должно получиться примерно так
const container = document.querySelector('.places-list'); // место куда записывать карточки
const cards = []; // массив с карточками
const words = {ru: { validationLenght: 'Должно быть от 2 до 30 символов'}};
const config = {authorization: "ключ",ip: "http://95.216.175.5/cohort7",}; // настройки
const api = new Api(config);
const card = new Card(api);
const validation = new FormValidator({words:words});
const cardList = new CardList({card:card, api:api});
cardList.render(container, cards);
const popupCard = new PopupCard({ validation:validation,api:api});
const popupProfile = new PopupProfile({ validation:validation,api:api});
const popupImage = new PopupImage();
 *


При изменении профиля надо убрать перезагрузку страницу, тоже самое при добавление карточки. Используете  event.preventDefault();

*/