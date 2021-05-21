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
const popupRedactor = document.querySelector('.popup_name_redactor');
const popupCard = document.querySelector('.popup_name_card');
const popupImageRedactor = document.querySelector('.popup_name_image');  
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const formElement = popupRedactor.querySelector('.popup__container'); 
const table = document.querySelector('.table');
const inputName = formElement.querySelector('.popup__input_text_name');
const inputActivity = formElement.querySelector('.popup__input_text_activity');
const inputCardName = popupCard.querySelector('.popup__input_card_name');
const inputCardLink = popupCard.querySelector('.popup__input_card_link'); 
const addButton = profile.querySelector('.profile__add-button');
const closeRedactorButton = popupRedactor.querySelector('.popup__close-icon_redactor_close');
const closeCardButton = popupCard.querySelector('.popup__close-icon_card_close');
const closeImageButton = popupImageRedactor.querySelector('.popup__close-icon_image_close');


function insertRedactorContent(elementTitle, elementSubtitle){
   elementTitle.textContent = inputName.value;
   elementSubtitle.textContent = inputActivity.value;
};
function closeRedactor(element){
   element.classList.remove('popup_opened');
};
function openRedactor(element){
   element.classList.add('popup_opened');
}
function inputValueRedactor(elementName, elementActivity){
   elementName.value = profileTitle.textContent;
   elementActivity.value = profileSubtitle.textContent;
};
function likeToggle(element){
   element.querySelector('.place__icon').addEventListener('click',   function (evt){
   evt.target.classList.toggle('place__icon_active');
});
};
function deleteCard(element){
   element.querySelector('.place__delete-icon').addEventListener('click',   function (evt){
   evt.target.closest('.place').remove();
});
};
function getCardElement(name, link){
   const cardTemplate = document.querySelector('#place').content;
   const cardElement = cardTemplate.cloneNode(true);
   const cardTitle = cardElement.querySelector('.place__title');
   const cardImage = cardElement.querySelector('.place__image');
   cardTitle.textContent = name;
   cardImage.src = link;
   cardImage.alt = name;
   cardImage.addEventListener('click', function(){
      const popupImage = popupImageRedactor.querySelector('.popup__image');
      const popupSubtitle = popupImageRedactor.querySelector('.popup__subtitle');
      openRedactor(popupImageRedactor);
      popupImage.src = link;
      popupImage.alt = name;
      popupSubtitle.textContent = name;
   });
   likeToggle(cardElement);
   deleteCard(cardElement);
   return cardElement;
};
function renderCard(name, link, placeWrap){
   placeWrap.prepend(getCardElement(name, link));
}


editButton.addEventListener('click', () => {
   openRedactor(popupRedactor);
   inputValueRedactor(inputName, inputActivity);
});
addButton.addEventListener('click', () => {
   openRedactor(popupCard);
});
closeRedactorButton.addEventListener('click', () => {
   closeRedactor(popupRedactor);
});
closeCardButton.addEventListener('click', () => {
   closeRedactor(popupCard);
});
closeImageButton.addEventListener('click', () => {
   closeRedactor(popupImageRedactor);
});
popupRedactor.addEventListener('submit', (evt) => {
   evt.preventDefault();
   insertRedactorContent(profileTitle, profileSubtitle);
   closeRedactor(popupRedactor);
});
popupCard.addEventListener('submit', (evt) => {
   evt.preventDefault();
   renderCard(inputCardName.value, inputCardLink.value, table);
   closeRedactor(popupCard);
});

const popups = Array.from(document.querySelectorAll('.popup'));
popups.forEach((popup) => {
   const popupOverlay = popup.querySelector('.popup__overlay');
   document.addEventListener('keydown', (evt) => {
      if(evt.key === 'Escape'){
         closeRedactor(popup);
      }
   });
   popupOverlay.addEventListener('click', () => {
         closeRedactor(popup);
   });
   
})
initialCards.forEach(element => {
   renderCard(element.name, element.link, table);
});

