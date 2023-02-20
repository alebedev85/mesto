///Rendering all elements///
export default class Section{
  constructor({items, renderer}, containerSelector){
    this._items = items;
    this._renderer = renderer;
    this._cardsContainer = document.querySelector(containerSelector);
  }

  ///Render all elemants///
  rendererElements() {
    this._items.forEach((item) => this._renderer(item))
  }

  ///Add DOM-element in container///
  addItem(element) {
    this._cardsContainer.prepend(element);
  }
}

