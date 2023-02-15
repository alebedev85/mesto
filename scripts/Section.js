import Card from './Card.js';

///Rendering all elements///
export default class Section{
  constructor(object, selector){
    this._items = object.items;
    this._renderer = object.renderer;
    this._cardsContainer = document.querySelector(selector);
  }

  _renderCard(titleCard, imageCard) {
    const card = new Card(titleCard, imageCard, '.element-temlate', openPopup);
    this._cardsContainer.prepend(card.creatCard());
  }

  creatCards() {
    this._items.forEach((item) => this._renderCard(item.name, item.link))
  }

  addItem(element) {
    this._cardsContainer.prepend(element.creatCard());
  }
}

