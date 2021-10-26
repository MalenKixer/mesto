const validationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
 };
 const profileItems = {
     profile: '.profile',
     name: '.profile__title',
     about: '.profile__subtitle',
     avatar: '.profile__avatar',
 }
 const popupRedactor = document.querySelector('.popup_name_redactor');
 const popupCard = document.querySelector('.popup_name_card');
 const popupAvatarProfile = document.querySelector('.popup_name_avatar')
 const profile = document.querySelector('.profile');
 const addButton = profile.querySelector('.profile__add-button');
 const editButton = profile.querySelector('.profile__edit-button');
 const profileUpdateAvatar = profile.querySelector('.profile__overlay');
 
 
export{validationConfig, popupRedactor, popupCard, popupAvatarProfile, profileItems, addButton, editButton, profileUpdateAvatar}