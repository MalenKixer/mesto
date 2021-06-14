import { Card } from './Card.js';
import { initialCards } from './initial-card.js';
import {FormValidator} from './FormValidator.js';
const validationConfig = {
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__button',
   inactiveButtonClass: 'popup__button_inactive',
   inputErrorClass: 'popup__input_type_error',
   errorClass: 'popup__input-error_active',
};
const popups = Array.from(document.querySelectorAll('.popup'));
const popupRedactor = document.querySelector('.popup_name_redactor');
const popupImage = document.querySelector('.popup_name_card');
const profile = document.querySelector('.profile');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const formElement = popupRedactor.querySelector('.popup__container'); 
const table = document.querySelector('.table');
const inputName = formElement.querySelector('.popup__input_text_name');
const inputActivity = formElement.querySelector('.popup__input_text_activity');
const inputCardName = popupImage.querySelector('.popup__input_card_name');
const inputCardLink = popupImage.querySelector('.popup__input_card_link'); 
const addButton = profile.querySelector('.profile__add-button');
const editButton = profile.querySelector('.profile__edit-button');

function insertPopupContent(elementTitle, elementSubtitle){
   elementTitle.textContent = inputName.value;
   elementSubtitle.textContent = inputActivity.value;
};
function closePopup(popup){
   popup.classList.remove('popup_opened');
   document.removeEventListener('keydown', closeByEscape);
};
function openPopup(popup){
   popup.classList.add('popup_opened');
   document.addEventListener('keydown', closeByEscape);
}
function inputValuePopup(){
   inputName.value = profileTitle.textContent;
   inputActivity.value = profileSubtitle.textContent;
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
function createCard(data, cardSelector){
   return new Card(data, cardSelector);
}
function createValidator(validationConfig, popup){
   return new FormValidator(validationConfig, popup);
}
const popupCardValidator = createValidator(validationConfig, popupImage);
const popupRedactorValidator = createValidator(validationConfig, popupRedactor);

popupRedactor.addEventListener('submit', (evt) => {
   evt.preventDefault();
   insertPopupContent(profileTitle, profileSubtitle);
   closePopup(popupRedactor);
});
popupImage.addEventListener('submit', (evt) => {
   evt.preventDefault();
   const inputValue = inputCardName.value;
   const inputLink = inputCardLink.value;
   const data =  {
      name: inputValue,
      link: inputLink,
   };
   const cardPopup = createCard(data, 'place');
   renderCard(cardPopup.generateCard(), table);
});

editButton.addEventListener('click', () => {
      openPopup(popupRedactor);
      inputValuePopup();
   }
);
addButton.addEventListener('click', () => {
      openPopup(popupImage);
      popupCardValidator.clearPopupInputs();
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
   const card = createCard(element, 'place');
   renderCard(card.generateCard(), table);
})

popupRedactorValidator.enableValidation();
popupCardValidator.enableValidation();