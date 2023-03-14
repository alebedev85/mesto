import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePicturePopup = this._popup.querySelector('.popup__picture');
    this._titlePicturePopup = this._popup.querySelector('.popup__picture-title');
  }
  open({name, link}) {
    this._imagePicturePopup.src = link;
    this._imagePicturePopup.alt = `Фото ${name}`;
    this._titlePicturePopup.textContent = name;
    super.open()
  }
}
