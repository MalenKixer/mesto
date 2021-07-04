import './pages/index.css';
import { Card } from './Card.js';
import { initialCards } from './initial-card.js';
import {FormValidator} from './FormValidator.js';
import { UserInfo } from './UserInfo.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { Section } from './Section.js';
const validationConfig = {
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__button',
   inactiveButtonClass: 'popup__button_inactive',
   inputErrorClass: 'popup__input_type_error',
   errorClass: 'popup__input-error_active',
};
const popupRedactor = document.querySelector('.popup_name_redactor');
const popupCard = document.querySelector('.popup_name_card');
const profile = document.querySelector('.profile');
const inputName = popupRedactor.querySelector('.popup__input_text_name');
const inputActivity = popupRedactor.querySelector('.popup__input_text_activity');
const inputCardName = popupCard.querySelector('.popup__input_card_name');
const inputCardLink = popupCard.querySelector('.popup__input_card_link'); 
const addButton = profile.querySelector('.profile__add-button');
const editButton = profile.querySelector('.profile__edit-button');

function createCard({data, handleCardClick}, cardSelector){
   return new Card({data, handleCardClick}, cardSelector);
}
function createValidator(validationConfig, popup){
   return new FormValidator(validationConfig, popup);
}
const popupCardValidator = createValidator(validationConfig, popupCard);
const popupRedactorValidator = createValidator(validationConfig, popupRedactor);

editButton.addEventListener('click', () => {
      const popupInfo = new PopupWithForm({
         submitHandler: (evt) => {
            evt.preventDefault();
            popupInfo.close();
            const inputValues = {
               name: inputName.value,
               info: inputActivity.value
            }
            const userInfo = new UserInfo(inputValues);
            userInfo.setUserInfo();
         }
      },
      '.popup_name_redactor')
      popupInfo.open();
      popupRedactorValidator.clearPopupInputs();
   }
);
addButton.addEventListener('click', () => {
      const popupCardForm = new PopupWithForm({
         submitHandler: (evt) => {
            evt.preventDefault();
            popupCardForm.close();
            const inputValues ={
               name: inputCardName.value,
               link: inputCardLink.value
            }
            const card = new createCard ({
               data: inputValues,
               handleCardClick: () =>{
                  const popupImage = new PopupWithImage(inputValues, '.popup_name_image');
                  popupImage.open();
               }
            }, 
            'place');
            renderCard.addItem(card.generateCard());
         }
      },
      '.popup_name_card')
      popupCardForm.open();
      popupCardValidator.clearPopupInputs();
   }
);

const renderCard = new Section({
   items: initialCards,
   renderer: (item) => {
      const card = createCard({
         data: item,
         handleCardClick: () =>{
               const popupImage = new PopupWithImage(item, '.popup_name_image');
               popupImage.open();
            }
         }, 
      'place');
      renderCard.addItem(card.generateCard());
      }
   },
   '.table')

renderCard.renderItems();
popupRedactorValidator.enableValidation();
popupCardValidator.enableValidation();