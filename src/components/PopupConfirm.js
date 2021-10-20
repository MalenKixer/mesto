import { Popup } from "./Popup";
export class PopupConfirm extends Popup{
    constructor({submitHandler}, popupSelector){
        super(popupSelector);
        this._submitHandler = submitHandler;
    }
    close(){
        super.close();
        this._removeEventListeners();
    }
    open(){
        super.open();
        this.setEventListeners();
    }
    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', this._submitHandler)
    }
    _removeEventListeners(){
        this._popup.removeEventListener('submit', this._submitHandler)
    }
}