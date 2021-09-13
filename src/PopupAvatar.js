import { Popup } from "./Popup";
export class PopupAvatar extends Popup{
    constructor(submitHandler, popupSelector){
        super(popupSelector);
        this._submitHandler = submitHandler;
    }
    getInputValue(){
        return this._popup.querySelector('.popup__input_avatar_link').value
    }
    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', this._submitHandler);
        this._popup.addEventListener('submit', () => {
            this._popup.querySelector('.popup__button').textContent = 'Сохранение...';
        });
    }
}