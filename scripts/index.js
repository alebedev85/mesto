//Template//
const cardsContainer = document.querySelector('.elements')
const cardTemplate = document
  .querySelector('.element-temlate')
  .content
  .querySelector('.element');

//Creat Card//
function creatCard(titleCard, imageCard) {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.element__image');
  const cardTitle = card.querySelector('.element__title');

  cardImage.addEventListener('click', () => {
    imagePicturPoup.src = cardImage.src;
    titlePicturPoup.textContent = cardTitle.textContent;
    openPoup(picturePopup);
  });

  const likeButton = card.querySelector('.element__reaction-button');
  likeButton.addEventListener('click', () => setLike(likeButton));

  const trashButton = card.querySelector('.element__trash-button');
  trashButton.addEventListener('click', () => card.remove());

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

//Buttons//
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');

//Edit Popup//
const editPopup = document.querySelector('.popup_type_edit');
const closeEditPopupButton = editPopup.querySelector('.popup__close-button');
const editFormElement = editPopup.querySelector('.popup__form');
const nameInput = editFormElement.querySelector('.popup__input_input_name');
const jobInput = editFormElement.querySelector('.popup__input_input_job');

//Edd Popup//
const addPopup = document.querySelector('.popup_type_add');
const closeEddPopupButton = addPopup.querySelector('.popup__close-button');
const addFormElement = addPopup.querySelector('.popup__form');
const placeInput = addFormElement.querySelector('.popup__input_input_place');
const linkInput = addFormElement.querySelector('.popup__input_input_link');

//Picture popup//
const picturePopup = document.querySelector('.popup_type_picture');
const imagePicturPoup = picturePopup.querySelector('.popup__picture');
const titlePicturPoup = picturePopup.querySelector('.popup__picture-title');
const closePicturePoupButton = picturePopup.querySelector('.popup__close-button');


//Profile//
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//Open Poup//
function openPoup(popup) {
  popup.classList.add('popup_opened');
};

//Close Poup//
function closeForm(popup) {
  popup.classList.remove('popup_opened');
};

//Open and Close Edit Poup//
editButton.addEventListener('click', () => {
  openPoup(editPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
closeEditPopupButton.addEventListener('click', () => closeForm(editPopup));

//Open and Close Add Poup//
addButton.addEventListener('click', () => openPoup(addPopup));
closeEddPopupButton.addEventListener('click', () => closeForm(addPopup));

//Close Edit Picture//
closePicturePoupButton.addEventListener('click', () => closeForm(picturePopup));

//Handle Edit Form//
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
};
editFormElement.addEventListener('submit', (evt) => { handleEditFormSubmit(evt); closeForm(editPopup) });

//Handle Add Form//
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  renderCard(placeInput.value, linkInput.value);
};
addFormElement.addEventListener('submit', (evt) => { handleAddFormSubmit(evt); closeForm(addPopup) });
