import { Popup } from "./Popup";
export class PopupWithImage extends Popup {
    constructor(data, popupSelector){
        super(popupSelector);
        this._link = data.link;
        this._name = data.name;
    }
    open(){
        super.open();
        this.setImage();
    }
    setImage(){
        this._popupImage = this.returnPopup().querySelector('.popup__image');
        this._popupSubtitle = this.returnPopup().querySelector('.popup__subtitle');
        this._popupImage.src = this._link;
        this._popupImage.alt = this._name;
        this._popupSubtitle.textContent = this._name;
    }
}