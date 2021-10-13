import { Popup } from "./Popup";
export class PopupAvatar extends Popup{
    constructor(submitHandler, popupSelector){
        super(popupSelector);
        this._submitHandler = submitHandler;
    }
    getInputValue(){
        return this._popup.querySelector('.popup__input_avatar_link').value
    }
    renderLoading(isLoading){
        if(isLoading){
            this._popup.querySelector('.popup__button').textContent = 'Сохранение...';
        } else {
            this._popup.querySelector('.popup__button').textContent = 'Сохранить';
        }
    }
    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', this._submitHandler);
    }
}