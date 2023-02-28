///Rendering all elements///
export default class Section{
  constructor({items, renderer}, containerSelector){
    this._items = items;
    this._renderer = renderer;
    this._cardsContainer = document.querySelector(containerSelector);
  }

  ///Render all elemants///
  rendererElements() {
    this._items.forEach((item) => this._cardsContainer.append(this._renderer(item)))
  }

  ///Add DOM-element in container///
  addItem(item) {
    this._cardsContainer.prepend(this._renderer(item));
  }
}

