export class FormValidator {
   constructor(validationConfig, formSelector){
      this._formSelector = formSelector;
      this._fieldsetSelector = validationConfig.set;
      this._inputSelector = validationConfig.inputSelector;
      this._submitButtonSelector = validationConfig.submitButtonSelector;
      this._inactiveButtonClass = validationConfig.inactiveButtonClass;
      this._inputErrorClass = validationConfig.inputErrorClass;
      this._errorClass = validationConfig.errorClass;
   }
   _showInputError(inputElement){
      const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
      errorElement.classList.add(this._errorClass);
      errorElement.textContent = inputElement.validationMessage;
      inputElement.classList.add(this._inputErrorClass);
   }
   _hideInputError(inputElement){ 
      const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
      inputElement.classList.remove(this._inputErrorClass);
   }
   clearPopupInputs(){
      const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
      inputList.forEach((inputElement) =>{
         inputElement.value = '';
         this._hideInputError(inputElement);
      })
      this._toggleButtonState();
   }
   _hasInputValidity(){
      const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
      return inputList.some((inputElement) => {
         return !inputElement.validity.valid;
      })
   }
   _checkInputValidity(inputElement){
      if(!inputElement.validity.valid){
         this._showInputError(inputElement);
      } else {
         this._hideInputError(inputElement);
      }
   }
   _toggleButtonState(){ 
      const submitButton = this._formSelector.querySelector(this._submitButtonSelector);
      if(this._hasInputValidity()){
         submitButton.classList.add(this._inactiveButtonClass);
         submitButton.setAttribute('disabled', 'true');
      } else {
         submitButton.classList.remove(this._inactiveButtonClass);
         submitButton.removeAttribute('disabled', 'true');
      }
   }
   _setEventListeners(){
      const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
      this._toggleButtonState();
      inputList.forEach((inputElement) => {
         inputElement.addEventListener('input', () => {
         this._checkInputValidity(inputElement);
         this._toggleButtonState();
      })
   })
   }
   enableValidation(){
      this._setEventListeners();
   }
}