const popupRedactor = document.querySelector('.popup_name_redactor');
const popupCard = document.querySelector('.popup_name_card');
const popupImage = document.querySelector('.popup_name_image');  
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__container'); 
const table = document.querySelector('.table');
const inputName = formElement.querySelector('.popup__item_text_name');
const inputActivity = formElement.querySelector('.popup__item_text_activity'); 
const addButton = profile.querySelector('.profile__add-button');
const closeRedactorButton = document.querySelector('.popup__close-icon_redactor_close');
const closeCardButton = popupCard.querySelector('.popup__close-icon_card_close');
const closeImageButton = popupImage.querySelector('.popup__close-icon_image_close');
function formSubmitHandler(evt){
   evt.preventDefault();
   insertRedactorContent();
   closeRedactor();
}
function insertRedactorContent(){
   profileTitle.textContent = inputName.value;
   profileSubtitle.textContent = inputActivity.value;
};
function closeRedactor(){
   popupRedactor.classList.remove('popup_opened');
};
function openRedactor(){
   popupRedactor.classList.add('popup_opened');
   inputValueRedactor();
}
function inputValueRedactor (){
   inputName.value = profileTitle.textContent;
   inputActivity.value = profileSubtitle.textContent;
};
function openCardRedactor(){
   popupCard.classList.add('popup_opened');
};
function closeCardRedactor(){
   popupCard.classList.remove('popup_opened');
};
function likeToggle(element){
   element.querySelector('.place__icon').addEventListener('click',   function (evt){
   evt.target.classList.toggle('place__icon_active');
});
};
function deleteCard(element){
   element.querySelector('.place__delete-icon').addEventListener('click',   function (evt){
   evt.target.closest('.place').remove();
});
};
function closePopupImage(){
   popupImage.classList.remove('popup_opened');
};
function openPopupImage(){
   popupImage.classList.add('popup_opened');
}
editButton.addEventListener('click', openRedactor);
popupRedactor.addEventListener('submit', formSubmitHandler);
popupCard.addEventListener('submit', formSubmitCard);
addButton.addEventListener('click', openCardRedactor);
closeRedactorButton.addEventListener('click', closeRedactor);
closeCardButton.addEventListener('click', closeCardRedactor);
closeImageButton.addEventListener('click', closePopupImage);
   const initialCards = [
      {
         name: 'Архыз',
         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
      },
      {
         name: 'Челябинская область',
         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
      },
      {
         name: 'Иваново',
         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
      },
      {
         name: 'Камчатка',
         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
      },
      {
         name: 'Холмогорский район',
         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
      },
      {
         name: 'Байкал',
         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
      }
   ];
initialCards.forEach(element => {
   const cardTemplate = document.querySelector('#place').content;
   const cardElement = cardTemplate.cloneNode(true);
   const cardTitle = cardElement.querySelector('.place__title');
   const cardImage = cardElement.querySelector('.place__image');
   cardTitle.textContent = element.name;
   cardImage.src = element.link;
   cardImage.alt = element.name;
   cardImage.addEventListener('click', function (){
      openPopupImage();
      popupImage.querySelector('.popup__image').src = element.link;
      popupImage.querySelector('.popup__image').alt = element.name;
      popupImage.querySelector('.popup__subtitle').textContent = element.name;
   });
   likeToggle(cardElement);
   deleteCard(cardElement);
   table.append(cardElement);
});
function edditNewCard(){
   const cardTemplate = document.querySelector('#place').content;
   const cardElement = cardTemplate.cloneNode(true);
   const cardTitle = cardElement.querySelector('.place__title');
   const cardImage = cardElement.querySelector('.place__image');
   const inputNameCard = popupCard.querySelector('.popup__item_card_name');
   const inputLinkCard = popupCard.querySelector('.popup__item_card_link');
   cardTitle.textContent = inputNameCard.value;
   cardImage.src = inputLinkCard.value;
   cardImage.alt = inputNameCard.value;
   cardImage.addEventListener('click', function(){
      openPopupImage();
      popupImage.querySelector('.popup__image').src = inputLinkCard.value;
      popupImage.querySelector('.popup__image').alt = inputNameCard.value;
      popupImage.querySelector('.popup__subtitle').textContent = inputNameCard.value;
   });
   likeToggle(cardElement);
   deleteCard(cardElement);
   table.prepend(cardElement);
};
function formSubmitCard(evt){
   evt.preventDefault();
   edditNewCard();
   closeCardRedactor();
}