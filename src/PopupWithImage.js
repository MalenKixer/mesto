import { Popup } from "./Popup";
export class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
    }
    open(data){
        super.open();
        this.setImage(data);
    }
    setImage(data){
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupSubtitle = this._popup.querySelector('.popup__subtitle');
        this._popupImage.src = data.link;
        this._popupImage.alt = data.name;
        this._popupSubtitle.textContent = data.name;
    }
}