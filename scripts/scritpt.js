import {CardImage} from './card.js';
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
const popups = Array.from(document.querySelectorAll('.popup'));
const popupRedactor = document.querySelector('.popup_name_redactor');
const popupCard = document.querySelector('.popup_name_card');
const profile = document.querySelector('.profile');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const formElement = popupRedactor.querySelector('.popup__container'); 
const table = document.querySelector('.table');
const inputName = formElement.querySelector('.popup__input_text_name');
const inputActivity = formElement.querySelector('.popup__input_text_activity');
const inputCardName = popupCard.querySelector('.popup__input_card_name');
const inputCardLink = popupCard.querySelector('.popup__input_card_link'); 
const addButton = profile.querySelector('.profile__add-button');
const editButton = profile.querySelector('.profile__edit-button');

function insertPopupContent(elementTitle, elementSubtitle){
   elementTitle.textContent = inputName.value;
   elementSubtitle.textContent = inputActivity.value;
};
function closePopup(element){
   element.classList.remove('popup_opened');
   document.removeEventListener('keydown', closeByEscape);
};
function openPopup(element){
   element.classList.add('popup_opened');
   document.addEventListener('keydown', closeByEscape);
}
function inputValuePopup(){
   inputName.value = profileTitle.textContent;
   inputActivity.value = profileSubtitle.textContent;
};
function clearPopupInputs(inputList){
   inputList.forEach((inputElement) =>{
      inputElement.value = '';
   })
}
function disableSubmitButton(popup){
   const button = popup.querySelector('.popup__button');
   button.classList.add('popup__button_inactive');
}

function renderCard (element, placeWrap){
   placeWrap.prepend(element);
}

function closeByEscape(evt){
   if(evt.key === 'Escape'){
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
   }
}

popupRedactor.addEventListener('submit', (evt) => {
   evt.preventDefault();
   insertPopupContent(profileTitle, profileSubtitle);
   closePopup(popupRedactor);
});
popupCard.addEventListener('submit', (evt) => {
   evt.preventDefault();
   const inputValue = inputCardName.value;
   const inputLink = inputCardLink.value;
   const data =  {
      name: inputValue,
      link: inputLink,
   };
   const cardPopup = new CardImage(data, 'place');
   renderCard(cardPopup.generateCard(), table);
   closePopup(popupCard);
   const inputList = Array.from(popupCard.querySelectorAll('.popup__input'));
   clearPopupInputs(inputList);
   disableSubmitButton(popupCard);
});

editButton.addEventListener('click', () => {
      openPopup(popupRedactor);
      inputValuePopup();
   }
);
addButton.addEventListener('click', () => {
      openPopup(popupCard);
   }
);

popups.forEach((popup) => {
   popup.addEventListener('click', function(evt){
   if(evt.target.classList.contains('popup__overlay')){
      closePopup(popup);
      };
   if(evt.target.classList.contains('popup__close-icon')){
      closePopup(popup);
      };
   });
});


initialCards.forEach((element) => {
   const card = new CardImage(element, 'place');
   renderCard(card.generateCard(), table);
})


