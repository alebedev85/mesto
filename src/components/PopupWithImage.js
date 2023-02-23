import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  open(cardTitle, cardImage) {
    const imagePicturPopup = this._popup.querySelector('.popup__picture');
    const titlePicturPopup = this._popup.querySelector('.popup__picture-title');
    imagePicturPopup.src = cardImage;
    imagePicturPopup.alt = `Фото ${cardTitle}`;
    titlePicturPopup.textContent = cardTitle;
    super.open()
  }
}
