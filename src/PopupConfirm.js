import { Popup } from "./Popup";
export class PopupConfirm extends Popup{
    constructor({submitHandler}, popupSelector){
        super(popupSelector);
        this._submitHandler = submirHandler;
    }
    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', submitHandler)
    }
}