class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
      this._containerSelector(item);
    });
  }

addItem(element) {
// add element to the container
}

}
 
export default Section;
