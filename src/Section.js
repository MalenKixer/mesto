export class Section {
    constructor({renderer}, containerSelector){
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }
    addItem(element){
        this._container = document.querySelector(this._containerSelector);
        this._container.prepend(element)
    }
    renderItems(items){
        items.forEach((item) =>{
            this._renderer(item)
        })
    }
}