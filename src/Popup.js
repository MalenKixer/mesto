export class Popup{
    constructor(popupSelector){
        this._popupSelector = popupSelector;
    }
    returnPopup(){
        return this._popup = document.querySelector(this._popupSelector);
    }
    open(){
        this._popup = document.querySelector(this._popupSelector);
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
    }
    close(){
        this._popup.classList.remove('popup_opened');
    }
    _handleEscClose(){
        (evt) => {
            if(evt === 'Escape'){
                this.close();
            } 
        }
    }
    setEventListeners(){
        this._popup.addEventListener('keydown', this._handleEscClose.bind(this))
        this._popup.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('popup__overlay')){
               this.close();
               };
            if(evt.target.classList.contains('popup__close-icon')){
               this.close();
               };
            })
    }
}