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

}
