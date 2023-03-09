import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePicturPopup = this._popup.querySelector('.popup__picture');
    this._titlePicturPopup = this._popup.querySelector('.popup__picture-title');
  }
  open({name, link}) {
    this._imagePicturPopup.src = link;
    this._imagePicturPopup.alt = `Фото ${name}`;
    this._titlePicturPopup.textContent = name;
    super.open()
  }
}
