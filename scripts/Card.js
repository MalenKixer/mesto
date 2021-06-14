export class Card {
   constructor(data, cardSelector){
      this._cardSelector = cardSelector;
      this._name = data.name;
      this._link = data.link; 
      this._card = this._getTemplate();
   }
   _getTemplate(){
      const cardElement = document
      .getElementById(this._cardSelector)
      .content
      .cloneNode(true);
      return cardElement;
   }
   _deleteCardHandler(){
      this._card.querySelector('.place__delete-icon').addEventListener('click', (evt) => {
         evt.target.closest('.place').remove();
      })
   }
   closePopupHandler(){
         const popupImage = document.querySelector('.popup_name_image');
         popupImage.classList.remove('popup_opened');
         document.removeEventListener('keydown', this._closeByEscape)
      }
   _closeByEscape(){
      document.addEventListener('keydown', (evt) => {
         if(evt.key === 'Escape'){
            this.closePopupHandler();
            }
         })
      }
   openPopupHandler(){
         this._popupImageRedactor = document.querySelector('.popup_name_image');
         this._popupImage = this._popupImageRedactor.querySelector('.popup__image');
         this._popupSubtitle = this._popupImageRedactor.querySelector('.popup__subtitle');
         this._popupImageRedactor.classList.add('popup_opened');
         this._popupImage.src = this._link;
         this._popupImage.alt = this._name;
         this._popupSubtitle.textContent = this._name;
         this._closeByEscape();
      }
   _setLikesHandler(){
         this._card.querySelector('.place__icon').addEventListener('click',   (evt) => {
            evt.target.classList.toggle('place__icon_active');
         })
   }
   _setEventListeners(){
         this._setLikesHandler();
         this._deleteCardHandler();
         this._cardImage.addEventListener('click', () => {
            this.openPopupHandler();
         })
   }      
   generateCard(){
         this._cardTitle = this._card.querySelector('.place__title');
         this._cardImage = this._card.querySelector('.place__image');
         this._cardTitle.textContent = this._name;
         this._cardImage.src = this._link;
         this._cardImage.alt = this._name;
         this._setEventListeners();
         return this._card;
   }
}