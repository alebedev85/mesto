import './pages/index.css';
import {
  buttonEditProfile,
  buttonAddNewCard,
  buttonClosePopupEditProfile,
  buttonClosePopupAddCard,
  buttonClosePicturePopup,
  profileNameInput,
  profileJobInput,
  profileName,
  profileJob
} from './scripts/constants.js';
import initialCards from './scripts/cards.js';
import selectors from './scripts/selectors.js';
import FormValidator from './components/FormValidator.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import Section from './components/Section.js';
import Card from './components/Card.js'
import UserInfo from './components/UserInfo.js';

//VARS//
const formsCollection = {};

const userInfo = new UserInfo({
  selectorUserName: '.profile__name',
  selectorUserInfo: '.profile__job'
});

//Creat Cards From Array//
const CardsSection = new Section({
  items: initialCards,
  renderer: ({ name, link }) => {
    const card = new Card(name, link, '.element-temlate', () => {
      popupWithImage.open(name, link);
    });
    return card.creatCard();
  }
},
  '.elements')

///Popup With Image///
//Creat element//
const popupWithImage = new PopupWithImage('.popup_type_picture')

///Form edit profile///
//Creat element//
const editProfile = new PopupWithForm('.popup_type_edit', (data) => {
  userInfo.setUserInfo(data);
})

///Form add new card///
//Creat element//
const addCard = new PopupWithForm('.popup_type_add', ({ cardLinkImput: link, cardNameImput: name }) => {
  const newCard = new Card(name, link, '.element-temlate', () => {
    popupWithImage.open(name, link);
  });
  CardsSection.addItem(newCard.creatCard());
})

//FUNCTIONS//

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
enableValidation(selectors)

CardsSection.rendererElements()

//Set listener for open edit form//
buttonEditProfile.addEventListener('click', () => {
  formsCollection['formEditProfile'].resetInputError();
  editProfile.setInputValues(userInfo.getUserInfo());
  editProfile.open();
})

//Set listener for close edit form//
buttonClosePopupEditProfile.addEventListener('click', () => editProfile.close());

//Set listener for open add new card form//
buttonAddNewCard.addEventListener('click', () => {
  formsCollection['formAddCard'].resetInputError();
  addCard.open()
});

//Set listener for close edit form//
buttonClosePopupAddCard.addEventListener('click', () => addCard.close());

//Set listener for close edit form//
buttonClosePicturePopup.addEventListener('click', () => popupWithImage.close());
