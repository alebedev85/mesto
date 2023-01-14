//VARS//

//Cards//
const cardsContainer = document.querySelector('.elements')
const cardTemplate = document
  .querySelector('.element-temlate')
  .content
  .querySelector('.element');

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
const popupPicture = document.querySelector('.popup_type_picture');
const imagePicturPopup = popupPicture.querySelector('.popup__picture');
const titlePicturPopup = popupPicture.querySelector('.popup__picture-title');
const buttonClosePicturePopup = popupPicture.querySelector('.popup__close-button');

//Profile//
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');


//FUNCTIONS//

//Creat Card//
function creatCard(titleCard, imageCard) {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.element__image');
  const cardTitle = card.querySelector('.element__title');

  cardImage.addEventListener('click', () => {
    imagePicturPopup.src = cardImage.src;
    imagePicturPopup.alt = `Фото ${cardTitle}`;
    titlePicturPopup.textContent = cardTitle.textContent;
    openPopup(popupPicture);
  });

  const buttonLike = card.querySelector('.element__reaction-button');
  buttonLike.addEventListener('click', () => setLike(buttonLike));

  const buttonTrash = card.querySelector('.element__trash-button');
  buttonTrash.addEventListener('click', () => card.remove());

  cardTitle.textContent = titleCard;
  cardImage.src = imageCard;
  cardImage.alt = `Фото ${titleCard}`;
  return card;
}

//Rendering Card//
function renderCard(titleCard, imageCard) {
  cardsContainer.prepend(creatCard(titleCard, imageCard));
}

//Like Card//
function setLike(element) {
  element.classList.toggle('element__reaction-button_activ')
}

//Creat Cards From Array//
function creatCardsFromArray() {
  initialCards.forEach((item) => renderCard(item.name, item.link))
}

creatCardsFromArray()

//Close Popup with Esc//
function closePopupWithEsc (evt) {
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
  ResetInputError(popup, selectors);
};

//Close Popup//
function closePopup(popup, evt) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupWithEsc);
  document.removeEventListener('click', closePopupWithOverlay);
};

//Open and Close Edit Popup//
buttonEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
});
buttonClosePopupEditProfile.addEventListener('click', () => closePopup(popupEditProfile));

//Open and Close Add Popup//
buttonAddNewCard.addEventListener('click', () => openPopup(popupAddCard));
buttonClosePopupAddCard.addEventListener('click', () => closePopup(popupAddCard));

//Close Edit Picture//
buttonClosePicturePopup.addEventListener('click', () => closePopup(popupPicture));

//Handle Edit Form//
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
};
formEditProfile.addEventListener('submit', (evt) => {
  handleEditFormSubmit(evt);
  closePopup(popupEditProfile)});

//Handle Add Form//
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  renderCard(cardNameImput.value, cardLinkImput.value);
};
formEddCard.addEventListener('submit', (evt) => {
  handleAddFormSubmit(evt);
  closePopup(popupAddCard);
  evt.target.reset()});
