import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePicturPopup = this._popup.querySelector('.popup__picture');
    this._titlePicturPopup = this._popup.querySelector('.popup__picture-title');
  }
  open(cardTitle, cardImage) {
    this._imagePicturPopup.src = cardImage;
    this._imagePicturPopup.alt = `Фото ${cardTitle}`;
    this._titlePicturPopup.textContent = cardTitle;
    super.open()
  }
}
