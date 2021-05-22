const preventSubmitDefault = (element) => {
   element.addEventListener('submit', (evt) => {
   evt.preventDefault();
   });
}
const hasInputErrorElement = (formElement, inputElement) => {
   return formElement.querySelector(`.${inputElement.id}-error`);
}


const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
   errorElement = hasInputErrorElement(formElement, inputElement);
   errorElement.classList.add(errorClass);
   errorElement.textContent = errorMessage;
   inputElement.classList.add(inputErrorClass);
}

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
   errorElement = hasInputErrorElement(formElement, inputElement);
   errorElement.classList.remove(errorClass);
   errorElement.textContent = '';
   inputElement.classList.remove(inputErrorClass);
}

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
   if(!inputElement.validity.valid){
      showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
   } else {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass);
   }
}

const hasInputValidity = (inputList) => {
   return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
   })
}
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
   if (hasInputValidity(inputList)){
      buttonElement.classList.add(inactiveButtonClass);
   } else {
      buttonElement.classList.remove(inactiveButtonClass);
   }
}
const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
   const inputList = Array.from(formElement.querySelectorAll(inputSelector));
   const buttonSubmit = formElement.querySelector(submitButtonSelector);
   toggleButtonState(inputList, buttonSubmit, inactiveButtonClass);
   inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
         checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
         toggleButtonState(inputList, buttonSubmit, inactiveButtonClass);
      });
   });
}


const enableValidation = ({formSelector, inputSelector, fieldsetSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
   const formList = Array.from(document.querySelectorAll(formSelector));
   formList.forEach((formElement) => {
      preventSubmitDefault(formElement);
      const fiedsetList = Array.from(formElement.querySelectorAll(fieldsetSelector));
      fiedsetList.forEach((fieldset) =>{
      setEventListeners(fieldset, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
      });
   });
}

enableValidation({
   formSelector: '.popup__form',
   inputSelector: '.popup__input',
   fieldsetSelector: '.popup__set',
   submitButtonSelector: '.popup__button',
   inactiveButtonClass: 'popup__button_inactive',
   inputErrorClass: 'popup__input_type_error',
   errorClass: 'popup__input-error_active',
}); 