///Rendering all elements///
export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  ///Render all elemants///
  renderItems(items) {
    items.forEach((item) => this._container.append(this._renderer(item)))
  }

  ///Add DOM-element in container///
  addItem(item) {
    this._container.prepend(this._renderer(item));
  }
}

