import {FormValidator} from './FormValidator.js';
const enableValidation = {
   formSelector: '.popup__form',
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__button',
   inactiveButtonClass: 'popup__button_inactive',
   inputErrorClass: 'popup__input_type_error',
   errorClass: 'popup__input-error_active',
}; 

const formList = Array.from(document.querySelectorAll('.popup__form'));
   formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) =>{
         evt.preventDefault();
      });
      const formValidator = new FormValidator(enableValidation, formElement);
      formValidator.enableValidation();
   })
