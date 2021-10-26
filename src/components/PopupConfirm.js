import { Popup } from "./Popup";
export class PopupConfirm extends Popup{
    constructor({deleteCard}, popupSelector){
        super(popupSelector);
        this._deleteCard = deleteCard;
    }
    open(item, card){
        super.open();
        this._item = item;
        this._card = card;
    }
    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._deleteCard(this._item, this._card);
        })
    }
}