export class Card {
   constructor({data, handleCardClick, openPopupConfirm, setLike, deleteLike}, cardSelector){
      this._cardSelector = cardSelector;
      this._data = data;
      this._name = data.name;
      this._link = data.link; 
      this._card = this._getTemplate();
      this._handleCardClick = handleCardClick;
      this._openPopupConfirm = openPopupConfirm;
      this._setLike = setLike;
      this._deleteLike = deleteLike;
      this._cardTitle = this._card.querySelector('.place__title');
      this._cardImage = this._card.querySelector('.place__image');
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
         this._openPopupConfirm();
       })
   }
   deleteCloseIcon(isChecking){
      if(isChecking){
         this._card.querySelector('.place__delete-icon').remove();
      } else {
         this._deleteCardHandler()

      }
   }
   setLikesCounter(data){
      this._card.querySelector('.place__like-counter').textContent = data.likes.length;
   }
   _setLikesHandler(){
         this._card.querySelector('.place__icon').addEventListener('click',   (evt) => {
         if(evt.target.classList.contains('place__icon_active')){
            evt.target.classList.remove('place__icon_active')
            this._deleteLike()
         }
         else{
            evt.target.classList.add('place__icon_active');
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
         return this._card;
   }
}