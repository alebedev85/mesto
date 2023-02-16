import FormValidator from './FormValidator.js';

export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  }

  _setEventListeners() {
    this._popup.querySelector('.popup__close-button').addEventListener('click', this.close.bind(this));
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._setEventListeners();
    document.addEventListener('keyup', this._handleEscClose.bind(this));
    // document.addEventListener('click', closePopupWithOverlay);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
    // document.removeEventListener('click', closePopupWithOverlay);
  }
}

export class PopupWithImage extends Popup {
  open(cardImage, cardTitle) {
    const imagePicturPopup = this._popup.querySelector('.popup__picture');
    const titlePicturPopup = this._popup.querySelector('.popup__picture-title');
    imagePicturPopup.src = cardImage.src;
    imagePicturPopup.alt = `Фото ${cardTitle}`;
    titlePicturPopup.textContent = cardTitle.textContent;
    super.open()
  }
}

export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._formElement = document.querySelector('.popup__form');
    this._item = {};
  }
  ///Collect data of all fields///
  _getInputValues() {
    const inputsList = Array.from(this._formElement.querySelectorAll('.popup__input'));
    inputsList.forEach((elm) => {
      this._item[elm.name] = elm.value;
    })
  }

  _setEventListeners() {
    super._setEventListeners();
    this._formElement .addEventListener('submit', (evt) => {
      this._callbackSubmit(evt, this._item);
      super.close();
    });

  }
}

/////////////////////////////////////////////////////////

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

//Submit Edit Profile//
formEditProfile.addEventListener('submit', (evt) => {
  handleEditFormSubmit(evt);
  closePopup(popupEditProfile);
});

///Submit Edd Card//
formEddCard.addEventListener('submit', (evt) => {
  handleAddFormSubmit(evt);
  closePopup(popupAddCard);
  evt.target.reset();
});
