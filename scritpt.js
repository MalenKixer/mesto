let content = document.querySelector('.content');
let popup = content.querySelector('.popup');
let profile = content.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');
let profileTitle = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');
let closeButton = popup.querySelector('.close-icon');
let formElement = popup.querySelector('.popup__container'); 
let inputName = formElement.querySelector('.popup__item_text_name');
let inputActivity = formElement.querySelector('.popup__item_text_activity');
let submitButton = popup.querySelector('.popup__button');
function formSubmitHandler(evt){
   evt.preventDefault();
   profileTitle.textContent = inputName.value;
   profileSubtitle.textContent = inputActivity.value;
   popup.classList.remove('popup_opened');
}
function closeRedactor(){
   popup.classList.remove('popup_opened');
}
function openRedactor(){
   inputName.value = profileTitle.textContent;
   inputActivity.value = profileSubtitle.textContent;
   popup.classList.add('popup_opened');
}
   editButton.addEventListener('click', openRedactor);
   closeButton.addEventListener('click', closeRedactor);
   submitButton.addEventListener('click', formSubmitHandler);