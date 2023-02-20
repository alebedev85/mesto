import Card from '../components/Card.js'

//Rendering Card//
export function renderCard(titleCard, imageCard) {
  const card = new Card(titleCard, imageCard, '.element-temlate');
  this._cardsContainer.prepend(card.creatCard());
}
