const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Template//
const cardsContainer = document.querySelector('.elements')
const cardTemplate = document
  .querySelector('.element-temlate')
  .content
  .querySelector('.element');

function creatCard(titleCard, imageCard) {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.element__image');
  const cardTitle = card.querySelector('.element__title');
  cardTitle.textContent = titleCard;
  cardImage.src = imageCard;
  cardsContainer.append(card);
}

function creatElementFromArray() {
  initialCards.forEach((item) => creatCard(item.name, item.link))

}

creatElementFromArray()

//Buttons//
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');

//Edit Popup//
const editPopup = document.querySelector('.popup_type_edit');
const closeEditButton = editPopup.querySelector('.popup__close-button');
const editFormElement = editPopup.querySelector('.popup__form');
const nameInput = editFormElement.querySelector('.popup__input_input_name');
const jobInput = editFormElement.querySelector('.popup__input_input_job');

//Edd Popup//
const addPopup = document.querySelector('.popup_type_add');
const closeEddButton = addPopup.querySelector('.popup__close-button');
const addFormElement = addPopup.querySelector('.popup__form');
const placeInput = addFormElement.querySelector('.popup__input_input_place');
const linkInput = addFormElement.querySelector('.popup__input_input_link');

//profile//
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//Open Poup//
function openPoup(popup) {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

//Close Poup//
function closeForm(popup) {
  popup.classList.remove('popup_opened');
};

editButton.addEventListener('click', () => openPoup(editPopup));
closeEditButton.addEventListener('click', () => closeForm(editPopup));

addButton.addEventListener('click', () => openPoup(addPopup));
closeEddButton.addEventListener('click', () => closeForm(addPopup));

//Handle Edit Form//
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
};
editFormElement.addEventListener('submit', (evt) => {handleEditFormSubmit(evt); closeForm(editPopup)});

//Handle Add Form//
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  creatCard(placeInput.value, linkInput.value);
};
addFormElement.addEventListener('submit', (evt) => {handleAddFormSubmit(evt); closeForm(addPopup)});
