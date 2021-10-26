import { Popup } from "./Popup";
export class PopupWithForm extends Popup{
    constructor({submitHandler}, popupSelector){
        super(popupSelector);
        this._submitHandler = submitHandler;
        this._inputs = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._form = this._popup.querySelector('.popup__form');
        this._button = this._popup.querySelector('.popup__button');
    }
    getInputValues(){
        this._formValues = {};
        this._inputs.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }
    setInfoInInput(data){
        this._name = this._popup.querySelector('.popup__input_text_name');
        this._info = this._popup.querySelector('.popup__input_text_activity');
        this._name.value = data.name;
        this._info.value = data.info;
    }
    close(){
        super.close();
        this._form.reset();
    }
    renderLoading(isLoading){
        if(isLoading){
            this._button.textContent = 'Сохранение...';
        } else {
            this._button.textContent = 'Сохранить';
        }
    }
    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', this._submitHandler);
    }
}