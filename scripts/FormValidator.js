export class FormValidator {
   constructor(data, formSelector){
      this._formSelector = formSelector;
      this._inputSelector = data.inputSelector;
      this._submitButtonSelector = data.submitButtonSelector;
      this._inactiveButtonClass = data.inactiveButtonClass;
      this._inputErrorClass = data.inputErrorClass;
      this._errorClass = data.errorClass;
   }
   _form(){
      return document.querySelector(this._formSelector);
   }
   _input(){
      return document.querySelector(this._inputSelector);
   }
   _showInputError(){
      const errorElement = this._form().querySelector(`.${inputSelector.id}-error`);
      errorElement.classList.add(this._errorClass);
      errorElement.textContent = this._input().validationMessage;
      this._input().classList.add(this._inputErrorClass);
   }
   _hideInputError(){ 
      const errorElement = this._form().querySelector(`.${inputSelector.id}-error`);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
      this._input().classList.remove(this._inputErrorClass);
   }
   _hasInputValidity(){
      const inputList = Array.from(this._form().querySelectorAll(this._inputSelector));
      return inputList.some((inputElement) => {
         return !inputElement.validity.valid;
      })
   }
   _checkInputValidity(){ 
      if(!input.validity.valid){
         this._showInputError();
      } else {
         this._hideInputError();
      }
   }
   _toggleButtonState(){ 
      const submitButton = this._form().querySelector(this._submitButtonSelector);
      if(this._hasInputValidity()){
         submitButton.classList.add(this._inactiveButtonClass);
      } else {
         submitButton.classList.remove(this._inactiveButtonClass);
      }
   }
   _setEventListeners(){
      const inputList = Array.from(this._form().querySelectorAll(this._inputSelector));
      this._toggleButtonState();
      inputList.forEach((inputElement) => {
         inputElement.addEventListener('input', () => {
         this._checkInputValidity();
         this._toggleButtonState();
      })
   })
   }
   enableValidation(){
      this._setEventListeners();
   }
}