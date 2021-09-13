export class Section {
    constructor({items, renderer}, contanerSelector){
        this._renderedItems = items;
        this._renderer = renderer;
        this._containerSelector = contanerSelector;
    }
    addItem(element){
        this._container = document.querySelector(this._containerSelector);
        this._container.prepend(element)
    }
    renderItems(){
        this._renderedItems.forEach(item => {
            this._renderer(item);
        })
    }
}