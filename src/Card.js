export class Card {
   constructor({data, handleCardClick}, cardSelector){
      this._cardSelector = cardSelector;
      this._name = data.name;
      this._link = data.link; 
      this._card = this._getTemplate();
      this._handleCardClick = handleCardClick;
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
         popupImage.classList.remove('popup_opened');
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
            this._handleCardClick();
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