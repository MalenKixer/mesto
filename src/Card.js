export class Card {
   constructor({data, handleCardClick, handleDeleteIcon, setLike, deleteLike}, cardSelector){
      this._cardSelector = cardSelector;
      this._name = data.name;
      this._link = data.link; 
      this._likes = data.likes;
      this._card = this._getTemplate();
      this._handleCardClick = handleCardClick;
      this._handleDeleteIcon = handleDeleteIcon;
      this._setLike = setLike;
      this._deleteLike = deleteLike;
   }
   _getTemplate(){
      const cardElement = document
      .getElementById(this._cardSelector)
      .content
      .cloneNode(true);
      return cardElement;
   }
   _deleteCardHandler(){
      this._card.querySelector('.place__delete-icon').addEventListener('click', () => {
         if(this._handleDeleteIcon){
            remove(this._cardSelector);
         }
       })
   }
   deleteCloseIcon(){
      remove(this._card.querySelector('.place__delete-icon'));
   }
   _setLikesCounter(){
         this._card.querySelector('.place__like-counter').textContent = this._likes;
   }
   _setLikesHandler(){
         this._card.querySelector('.place__icon').addEventListener('click',   (evt) => {
            evt.target.classList.toggle('place__icon_active');
            toggle(this._setLike(), this._deleteLike());
      })
   }
   _setEventListeners(){
         this._setLikesHandler();
         this._deleteCardHandler();
         this._setLikesCounter();
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