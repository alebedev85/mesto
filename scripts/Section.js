///Rendering all elements///
export default class Section{
  constructor(object, containerSelector){
    this._items = object.items;
    this._renderer = object.renderer;
    this._cardsContainer = document.querySelector(containerSelector);
  }

  ///Render all elemants///
  creatCards() {
    this._items.forEach((item) => this._renderer(item.name, item.link))
  }

  ///Add DOM-element in container///
  addItem(element) {
    this._cardsContainer.prepend(element.creatCard());
  }
}

