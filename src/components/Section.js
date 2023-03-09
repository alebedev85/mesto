///Rendering all elements///
export default class Section{
  constructor({renderer}, containerSelector){
    this._renderer = renderer;
    this._cardsContainer = document.querySelector(containerSelector);
  }

  ///Render all elemants///
  rendererElements(items) {
    items.forEach((item) => this._cardsContainer.append(this._renderer(item)))
  }

  ///Add DOM-element in container///
  addItem(item) {
    this._cardsContainer.prepend(this._renderer(item));
  }
}

