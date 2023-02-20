import Card from '../components/Card.js'

//Rendering Card//
export function renderCard({name, link}) {
  const card = new Card(name, link, '.element-temlate');
  this._cardsContainer.prepend(card.creatCard());
}
