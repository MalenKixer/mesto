export class Card {
   constructor({data, handleCardClick, openPopupConfirm, setLike, deleteLike}, userId, cardSelector){
      this._cardSelector = cardSelector;
      this._data = data;
      this._id = data.owner._id;
      this._name = data.name;
      this._link = data.link; 
      this._card = this._getTemplate();
      this._handleCardClick = handleCardClick;
      this._openPopupConfirm = openPopupConfirm;
      this._setLike = setLike;
      this._userId = userId;
      this._deleteLike = deleteLike;
      this._cardTitle = this._card.querySelector('.place__title');
      this._cardImage = this._card.querySelector('.place__image');
      this._cardLike = this._card.querySelector('.place__icon');
      this._cardDeleteIcon = this._card.querySelector('.place__delete-icon');
      this._cardLikeCounter = this._card.querySelector('.place__like-counter');
   }
   _getTemplate(){
      const cardElement = document
      .getElementById(this._cardSelector)
      .content
      .cloneNode(true);
      return cardElement
   }
   _deleteCardHandler(){
      this._cardDeleteIcon.addEventListener('click', (evt) => {
         this._openPopupConfirm();
         this._cardLink = evt.target.closest('.place');
       })
   }
   remove(){
     this._cardLink.remove();
   }
   deleteCloseIcon(){
      if(this._id === this._userId){
         this._deleteCardHandler();
      } else {
         this._cardDeleteIcon.remove();
      }
   }
   setLikesCounter(data){
      this._cardLikeCounter.textContent = data.likes.length;
   }
   setLike(){
      this._cardLike.classList.add('place__icon_active')
   }
   deleteLike(){
      this._cardLike.classList.remove('place__icon_active')
   }
   _setLikesHandler(){
         this._cardLike.addEventListener('click',   (evt) => {
         if(evt.target.classList.contains('place__icon_active')){
            this._deleteLike()
         }
         else{
            this._setLike()
            }
      })
   }
   setEventListeners(){
         this._setLikesHandler();
         this._cardImage.addEventListener('click', this._handleCardClick)
   }      
   generateCard(){
         this._cardTitle.textContent = this._name;
         this._cardImage.src = this._link;
         this._cardImage.alt = this._name;
         this.setLikesCounter(this._data);
         return this._card
   }
}