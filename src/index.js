// import './pages/index.css';
import { popupPicture, imagePicturPopup, titlePicturPopup } from './scripts/constants.js';
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

//Cards//
// const cardsContainer = document.querySelector('.elements')

//Main Buttons//
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddNewCard = document.querySelector('.profile__add-button');

//Edit Profile Popup//
const popupEditProfile = document.querySelector('.popup_type_edit');

const buttonClosePopupEditProfile = popupEditProfile.querySelector('.popup__close-button');

const formEditProfile = popupEditProfile.querySelector('.popup__form');
const profileNameInput = formEditProfile.querySelector('.popup__input_input_name');
const profileJobInput = formEditProfile.querySelector('.popup__input_input_job');

//Edd Card Popup//
const popupAddCardOld = document.querySelector('.popup_type_add');
const buttonClosePopupAddCard = popupAddCardOld.querySelector('.popup__close-button');
const formEddCard = popupAddCardOld.querySelector('.popup__form');
const cardNameImput = formEddCard.querySelector('.popup__input_input_place');
const cardLinkImput = formEddCard.querySelector('.popup__input_input_link');

//Picture popup//
const buttonClosePicturePopup = popupPicture.querySelector('.popup__close-button');

//Profile//
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//FUNCTIONS//

//Form Validation//
function enableValidation({ formSelector, ...rest }) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formsCollection[formElement.name] = new FormValidator(formElement, rest);
    formsCollection[formElement.name].enableValidation();
  });
};

//Main Funtions//

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
CardsSection.rendererElements()

//Launch Form Validation//
enableValidation(selectors)


const userInfo = new UserInfo({
  selectorUserName: '.profile__name',
  selectorUserInfo: '.profile__job'});

///Form edit profile///
//Creat element//
const editProfile = new PopupWithForm('.popup_type_edit', (data) => {
  userInfo.setUserInfo(data);
})

//Set listener for open edit form//
buttonEditProfile.addEventListener('click', () => {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
  formsCollection['formEditProfile'].resetInputError();
  editProfile.open();
})

//Set listener for close edit form//
buttonClosePopupEditProfile.addEventListener('click', () => editProfile.close());


///Form add new card///
//Creat element//
const addCard = new PopupWithForm('.popup_type_add', ({ cardLinkImput: link, cardNameImput: name }) => {
  const newCard = new Card(name, link, '.element-temlate', () => {
    popupWithImage.open(name, link);
  });
  CardsSection.addItem(newCard.creatCard());
})

//Set listener for open add new card form//
buttonAddNewCard.addEventListener('click', () => {
  formsCollection['formAddCard'].resetInputError();
  addCard.open()
});

//Set listener for close edit form//
buttonClosePopupAddCard.addEventListener('click', () => addCard.close());

///Popup With Image///
//Creat element//
const popupWithImage = new PopupWithImage('.popup_type_picture')

//Set listener for close edit form//
buttonClosePicturePopup.addEventListener('click', () => popupWithImage.close());
