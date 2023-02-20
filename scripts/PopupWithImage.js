import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  open(cardImage, cardTitle) {
    const imagePicturPopup = this._popup.querySelector('.popup__picture');
    const titlePicturPopup = this._popup.querySelector('.popup__picture-title');
    imagePicturPopup.src = cardImage.src;
    imagePicturPopup.alt = `Фото ${cardTitle}`;
    titlePicturPopup.textContent = cardTitle.textContent;
    super.open()
  }
}
