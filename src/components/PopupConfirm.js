import { Popup } from "./Popup";
export class PopupConfirm extends Popup{
    constructor({submitHandler}, popupSelector){
        super(popupSelector);
        this._submitHandler = submitHandler;
    }
    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', this._submitHandler)
    }
    removeEventListeners(){
        this._popup.removeEventListener('submit', this._submitHandler)
    }
}