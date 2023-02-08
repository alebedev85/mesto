class Card {
  constructor(titleCard, imageCard, templatSelector, openPopup) {
    this._titleCard = titleCard;
    this._imageCard = imageCard;
    this._templatSelector = templatSelector;
    this._openPopup = openPopup;
  }


  _getTemplate() {
    const card = document
      .querySelector(this._templatSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return card;
  }

  _setLike(element) {
    element.classList.toggle('element__reaction-button_activ')
  }

  creatCard() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector('.element__image');
    const cardTitle = this._element.querySelector('.element__title');

    cardImage.addEventListener('click', () => {
      console.log('1')
      imagePicturPopup.src = cardImage.src;
      imagePicturPopup.alt = `Фото ${cardTitle}`;
      titlePicturPopup.textContent = cardTitle.textContent;
      this._openPopup(popupPicture);
    });

    const buttonLike = this._element.querySelector('.element__reaction-button');
    buttonLike.addEventListener('click', () => this._setLike(buttonLike));

    const buttonTrash = this._element.querySelector('.element__trash-button');
    buttonTrash.addEventListener('click', () => card.remove());

    cardTitle.textContent = this._titleCard;
    cardImage.src = this._imageCard;
    cardImage.alt = `Фото ${this._titleCard}`;
    return this._element;
  }

}
