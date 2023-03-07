import './index.css';
import {
  buttonEditProfile,
  buttonAddNewCard,
} from '../scripts/constants.js';
import initialCards from '../scripts/cards.js';
import selectors from '../scripts/selectors.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js'
import UserInfo from '../components/UserInfo.js';

//VARS//
const formsCollection = {};

const userInfo = new UserInfo({
  selectorUserName: '.profile__name',
  selectorUserInfo: '.profile__job'
});

//Creat Cards From Array//
const cardsSection = new Section({
  items: initialCards,
  renderer: createCard
},
  '.elements')

///Popup With Image///
//Creat element//
const popupWithImage = new PopupWithImage('.popup_type_picture')
popupWithImage.setEventListeners();

///Form edit profile///
//Creat element//
const popupEditProfile = new PopupWithForm('.popup_type_edit', (data) => {
  userInfo.setUserInfo(data);
})

///Form add new card///
//Creat element//
const popupAddCard = new PopupWithForm('.popup_type_add', ({ cardLinkImput: link, cardNameImput: name }) =>
  cardsSection.addItem({ name, link }))

//FUNCTIONS//

//Creat Card//
function createCard({ name, link }) {
  const card = new Card(name, link, '.element-temlate', () => {
    popupWithImage.open(name, link);
  });
  return card.creatCard();
}

//Set form Validation//
function enableValidation({ formSelector, ...rest }) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formsCollection[formElement.name] = new FormValidator(formElement, rest);
    formsCollection[formElement.name].enableValidation();
  });
};

//Main Funtions//

//Launch Form Validation//
enableValidation(selectors);

cardsSection.rendererElements();

//Set listeners//
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();

//Set listener for open edit form//
buttonEditProfile.addEventListener('click', () => {
  formsCollection['formEditProfile'].resetInputError();
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  popupEditProfile.open();
});

//Set listener for open add new card form//
buttonAddNewCard.addEventListener('click', () => {
  formsCollection['formAddCard'].resetInputError();
  popupAddCard.open()
});


function getUserInfo() {
  fetch('https://mesto.nomoreparties.co/v1/cohort-61/users/me', {
    headers: {
      authorization: '3e070c18-b10f-4e80-b715-68fa3cc00268'
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    });
}

function getCards() {
  fetch('https://mesto.nomoreparties.co/v1/cohort-61/cards', {
    headers: {
      authorization: '3e070c18-b10f-4e80-b715-68fa3cc00268'
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    });
}

getUserInfo()
getCards()
