import Card from '../components/Card.js'

//Rendering Card//
export function renderCard({ name, link }) {
  const card = new Card(name, link, '.element-temlate', () => {
    imagePicturPopup.src = cardImage.src;
    imagePicturPopup.alt = `Фото ${cardTitle}`;
    titlePicturPopup.textContent = cardTitle.textContent;
    
  });
  this._cardsContainer.prepend(card.creatCard());
}
