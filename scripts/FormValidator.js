export class FormValidator {
   constructor(validationConfig, formSelector){
      this._formSelector = formSelector;
      this._inputSelector = validationConfig.inputSelector;
      this._submitButtonSelector = validationConfig.submitButtonSelector;
      this._inactiveButtonClass = validationConfig.inactiveButtonClass;
      this._inputErrorClass = validationConfig.inputErrorClass;
      this._errorClass = validationConfig.errorClass;
   }
   _getInputElement(){
      return this._formSelector.querySelector(this._inputSelector);
   }
   _showInputError(){
      const errorElement = this._formSelector.querySelector(`.${this._getInputElement().id}-error`);
      errorElement.classList.add(this._errorClass);
      errorElement.textContent = this._getInputElement().validationMessage;
      this._getInputElement().classList.add(this._inputErrorClass);
   }
   _hideInputError(){ 
      const errorElement = this._formSelector.querySelector(`.${this._getInputElement().id}-error`);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
      this._getInputElement().classList.remove(this._inputErrorClass);
   }
   clearPopupInputs(){
      const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
      inputList.forEach((inputElement) =>{
         inputElement.value = '';
         this._hideInputError();
      })
   }
   disableSubmitButton(){
      const button = this._formSelector.querySelector(this._submitButtonSelector);
      button.classList.add(this._inactiveButtonClass);
   }
   _hasInputValidity(){
      const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
      return inputList.some((inputElement) => {
         return !inputElement.validity.valid;
      })
   }
   _checkInputValidity(){ 
      if(!this._getInputElement().validity.valid){
         this._showInputError();
      } else {
         this._hideInputError();
      }
   }
   _toggleButtonState(){ 
      const submitButton = this._formSelector.querySelector(this._submitButtonSelector);
      if(this._hasInputValidity()){
         submitButton.classList.add(this._inactiveButtonClass);
      } else {
         submitButton.classList.remove(this._inactiveButtonClass);
      }
   }
   _setEventListeners(){
      const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
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