import { popupPicture } from './utils.js';
import Card from './Card.js';
import initialCards from './cards.js';
import selectors from './selectors.js';
import FormValidator from './FormValidator.js';

//VARS//
const formsCollection = {};

//Cards//
const cardsContainer = document.querySelector('.elements')

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
const popupAddCard = document.querySelector('.popup_type_add');
const buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close-button');
const formEddCard = popupAddCard.querySelector('.popup__form');
const cardNameImput = formEddCard.querySelector('.popup__input_input_place');
const cardLinkImput = formEddCard.querySelector('.popup__input_input_link');

//Picture popup//
const buttonClosePicturePopup = popupPicture.querySelector('.popup__close-button');

//Profile//
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//FUNCTIONS//

//Rendering Card//
function renderCard(titleCard, imageCard) {
  const card = new Card(titleCard, imageCard, '.element-temlate', openPopup);
  cardsContainer.prepend(card.creatCard());
}

//Creat Cards From Array//
function creatCardsFromArray() {
  initialCards.forEach((item) => renderCard(item.name, item.link))
}

//Close Popup with Esc//
function closePopupWithEsc(evt) {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

//Close Popup with Overlay//
function closePopupWithOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
}

//Open Popup//
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupWithEsc);
  document.addEventListener('click', closePopupWithOverlay);
  if (popup.querySelector(selectors.formSelector)) formsCollection[popup.querySelector(selectors.formSelector).name].ResetInputError();
};

//Close Popup//
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupWithEsc);
  document.removeEventListener('click', closePopupWithOverlay);
};

//Handle Edit Form//
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
};

//Handle Add Form//
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  renderCard(cardNameImput.value, cardLinkImput.value);
};

//Form Validation//
function enableValidation({ formSelector, ...rest }) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formsCollection[formElement.name] = new FormValidator(formElement, rest);
    formsCollection[formElement.name].enableValidation();
  });
};

//Add Event Listeners//

//Open Edit Popup//
buttonEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
});

//Close Edit Popup//
buttonClosePopupEditProfile.addEventListener('click', () => closePopup(popupEditProfile));

//Open Add Popup//
buttonAddNewCard.addEventListener('click', () => openPopup(popupAddCard));

//Close Add Popup//
buttonClosePopupAddCard.addEventListener('click', () => closePopup(popupAddCard));

//Close Edit Picture//
buttonClosePicturePopup.addEventListener('click', () => closePopup(popupPicture));

//Submit Edit Profile//
formEditProfile.addEventListener('submit', (evt) => {
  handleEditFormSubmit(evt);
  closePopup(popupEditProfile);
});

//Submit Edd Card//
formEddCard.addEventListener('submit', (evt) => {
  handleAddFormSubmit(evt);
  closePopup(popupAddCard);
  evt.target.reset();
});

//Main Funtions//

//Creat Cards From Array//
creatCardsFromArray();

//Launch Form Validation//
enableValidation(selectors)
