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
const elements = document.querySelector('.elements')
const elementTemplate = document.querySelector('#element-temlate').content;

function creatCard(nameCard, imageCard) {
  const card = elementTemplate.querySelector('.element').cloneNode(true);
  const cardImage = card.querySelector('.element__image');
  const cardTitle = card.querySelector('.element__title');
  cardTitle.textContent = nameCard;
  cardImage.src = imageCard;
  elements.append(card);

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
const formElement = editPopup.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_input_name');
const jobInput = formElement.querySelector('.popup__input_input_job');

//Edd Popup//
const addPopup = document.querySelector('.popup_type_add');
const closeEddButton = addPopup.querySelector('.popup__close-button');

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

//Handle Form//
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeForm();
};

formElement.addEventListener('submit', handleFormSubmit);


editButton.addEventListener('click', () => { openPoup(editPopup) });
closeEditButton.addEventListener('click', () => { closeForm(editPopup) });

addButton.addEventListener('click', () => { openPoup(addPopup) });
closeEddButton.addEventListener('click', () => { closeForm(addPopup) });
