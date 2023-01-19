class Card {
  constructor(titleCard, imageCard, templatSelector) {
    this.titleCard = titleCard;
    // console.log(this.titleCard);
    this.imageCard = imageCard;
    // console.log(this.imageCard);
    this.cardTemplate = document
    .querySelector(`.${templatSelector}`)
    .content
    .querySelector('.element');
  }

  creatCard() {
    const card = this.cardTemplate.cloneNode(true);
    const cardImage = card.querySelector('.element__image');
    const cardTitle = card.querySelector('.element__title');

    cardImage.addEventListener('click', () => {
      imagePicturPopup.src = cardImage.src;
      imagePicturPopup.alt = `Фото ${cardTitle}`;
      titlePicturPopup.textContent = cardTitle.textContent;
      openPopup(popupPicture);
    });

    const buttonLike = card.querySelector('.element__reaction-button');
    buttonLike.addEventListener('click', () => setLike(buttonLike));

    const buttonTrash = card.querySelector('.element__trash-button');
    buttonTrash.addEventListener('click', () => card.remove());

    cardTitle.textContent = this.titleCard;
    cardImage.src = this.imageCard;
    cardImage.alt = `Фото ${this.titleCard}`;
    return card;
  }

}
