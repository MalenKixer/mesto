import { Popup } from "./Popup";
export class PopupWithForm extends Popup{
    constructor({submitHandler}, popupSelector){
        super(popupSelector);
        this._submitHandler = submitHandler;
    }
    _getInputValues(){
        this._inputs = Array.from(this._popup.querySelectorAll('.popup__input'));
        return this._inputs.map(input => input.value);
    }
    close(){
        super.close();
        this._inputValues = this._getInputValues();
        this._inputValues.forEach(inputValue => inputValue = '')
    }
    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', this._submitHandler)
    }
}