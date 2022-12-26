//VARS//

//Template//
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
const buttonClosePicturePoup = popupPicture.querySelector('.popup__close-button');


//FUNCTIONS//

//Profile//
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//Creat Card//
function creatCard(titleCard, imageCard) {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.element__image');
  const cardTitle = card.querySelector('.element__title');

  cardImage.addEventListener('click', () => {
    imagePicturPopup.src = cardImage.src;
    titlePicturPopup.textContent = cardTitle.textContent;
    openPopup(popupPicture);
  });

  const buttonLike = card.querySelector('.element__reaction-button');
  buttonLike.addEventListener('click', () => setLike(buttonLike));

  const buttonTrash = card.querySelector('.element__trash-button');
  buttonTrash.addEventListener('click', () => card.remove());

  cardTitle.textContent = titleCard;
  cardImage.src = imageCard;
  return card;
}

function renderCard(titleCard, imageCard) {
  cardsContainer.prepend(creatCard(titleCard, imageCard));
}

function setLike(element) {
  element.classList.toggle('element__reaction-button_activ')
}

function creatElementsFromArray() {
  initialCards.forEach((item) => renderCard(item.name, item.link))
}

creatElementsFromArray()

//Open Popup//
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

//Close Popup//
function closeForm(popup) {
  popup.classList.remove('popup_opened');
};

//Open and Close Edit Popup//
buttonEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
});
buttonClosePopupEditProfile.addEventListener('click', () => closeForm(popupEditProfile));

//Open and Close Add Popup//
buttonAddNewCard.addEventListener('click', () => openPopup(popupAddCard));
buttonClosePopupAddCard.addEventListener('click', () => closeForm(popupAddCard));

//Close Edit Picture//
buttonClosePicturePoup.addEventListener('click', () => closeForm(popupPicture));

//Handle Edit Form//
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
};
formEditProfile.addEventListener('submit', (evt) => { handleEditFormSubmit(evt); closeForm(popupEditProfile) });

//Handle Add Form//
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  renderCard(cardNameImput.value, cardLinkImput.value);
};
formEddCard.addEventListener('submit', (evt) => { handleAddFormSubmit(evt); closeForm(popupAddCard) });
