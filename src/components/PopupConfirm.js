import { Popup } from "./Popup";
export class PopupConfirm extends Popup{
    constructor({deleteCard}, popupSelector){
        super(popupSelector);
        this._deleteCard = deleteCard;
    }
    close(item){
        super.close();
        this._removeEventListeners(item);
    }
    open(item){
        super.open();
        this.setEventListeners(item);
    }
    setEventListeners(item){
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._deleteCard(item);
        })
    }
    _removeEventListeners(item){
        this._popup.removeEventListener('submit', (evt) => {
            evt.preventDefault();
            this._deleteCard(item);
        })
    }
}