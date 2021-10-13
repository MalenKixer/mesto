import './pages/index.css';
import { Card } from './Card.js';
import {FormValidator} from './FormValidator.js';
import { UserInfo } from './UserInfo.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { Section } from './Section.js';
import { PopupAvatar } from './PopupAvatar.js';
import { Api } from './Api.js';
import { PopupConfirm} from './PopupConfirm.js';
const validationConfig = {
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__button',
   inactiveButtonClass: 'popup__button_inactive',
   inputErrorClass: 'popup__input_type_error',
   errorClass: 'popup__input-error_active',
};
const popupRedactor = document.querySelector('.popup_name_redactor');
const popupCard = document.querySelector('.popup_name_card');
const popupAvatarProfile = document.querySelector('.popup_name_avatar')
const profile = document.querySelector('.profile');
const inputName = popupRedactor.querySelector('.popup__input_text_name');
const inputActivity = popupRedactor.querySelector('.popup__input_text_activity');
const inputCardName = popupCard.querySelector('.popup__input_card_name');
const inputCardLink = popupCard.querySelector('.popup__input_card_link'); 
const addButton = profile.querySelector('.profile__add-button');
const editButton = profile.querySelector('.profile__edit-button');
const profileUpdateAvatar = profile.querySelector('.profile__update-avatar_overlay');
const profileImage = profile.querySelector('.profile__image');


const popupImage = new PopupWithImage('.popup_name_image');


const profileItems = {
   name: '.profile__title',
   info: '.profile__subtitle',
   avatar: '.profile__avatar'
}

const userInfo = new UserInfo(profileItems);
const api = new Api({
   headers: {
      authorization: '65fd69c0-8996-4c0e-a94d-653abadfadd2',
      'Content-Type': 'application/json'
   },
})

function createValidator(validationConfig, popup){
   return new FormValidator(validationConfig, popup);
}
const popupCardValidator = createValidator(validationConfig, popupCard);
const popupRedactorValidator = createValidator(validationConfig, popupRedactor);
const popupAvatarValidator = createValidator(validationConfig, popupAvatarProfile)

function createCard(item, cardSelector, isChecking){
   const card = new Card ({
      data: item,
      handleCardClick: () =>{
         popupImage.open(item);
      },
      openPopupConfirm:() => {
         popupConfirm.open();
      },
      setLike: () => {
         api.setLike(item)
         .then((data) => {
            console.log(data);
            api.updateLikeCounter(data)
            .then((res) => {
               card.setLikesCounter(res);
            })
         })      
      },
      deleteLike: () => {
         api.deleteLike(item)
         .then((data) => {
            console.log(data);
            api.updateLikeCounter(data)
            .then((res) => {
               card.setLikesCounter(res);
            })
        })
      },
   }, 
   cardSelector);
   card.deleteCloseIcon(isChecking);
   const popupConfirm = new PopupConfirm({
      submitHandler: (evt) => {
         evt.preventDefault();
         popupConfirm.close();
         api.deleteCard(item);
      }
   },
   '.popup_name_confirm');
   popupConfirm.setEventListeners();
   card.setEventListeners();
   return card.generateCard();
}


const popupProfile = new PopupWithForm({
   submitHandler: (evt) => {
      evt.preventDefault();
      popupProfile.renderLoading(true);
      popupProfile.close();
      const inputValues = {
         name: inputName.value,
         about: inputActivity.value
      }
      api.updateProfile(inputValues)
      .then((data) => {
         console.log(data);
         userInfo.setUserInfo(data);
      })
   }
},
'.popup_name_redactor')
popupProfile.setEventListeners();

const popupAvatar = new PopupAvatar({
   submitHandler: (evt) => {
      evt.preventDefault();
      popupAvatar.renderLoading(true);
      const getAvatar = popupAvatar.getInputValue();
      api.changeAvatar(getAvatar)
      .then((res) => {
         console.log(res);
         profileImage.src = res;
      })
      popupAvatar.close();
      }
   },
   '.popup_name_avatar')
popupAvatar.setEventListeners();

const popupCardForm = new PopupWithForm({
   submitHandler: (evt) => {
      evt.preventDefault();
      popupCardForm.close();
      const inputValue ={
         name: inputCardName.value,
         link: inputCardLink.value
      }
      api.uploadCard(inputValue)
      .then((data) => {
         console.log(data);
         const card = createCard(data, 'place', false);
         renderCard.addItem(card);
      })   
   }
},
'.popup_name_card')
popupCardForm.setEventListeners();

editButton.addEventListener('click', () => {
      popupProfile.open();
      popupProfile.renderLoading(false);
      popupProfile.setInfoInInput(userInfo.getUserInfo());
   }
);
addButton.addEventListener('click', () => {
      popupCardForm.open();
      popupCardForm.renderLoading(false);
      popupCardValidator.clearPopupInputs();
   }
);
profileUpdateAvatar.addEventListener('click', ()=>{
   popupAvatar.open();
   popupAvatar.renderLoading(false);
   popupAvatarValidator.clearPopupInputs();
   }
);
const renderCard = new Section({
      renderer: (item) => {
            const card = createCard(item, 'place', true);
            renderCard.addItem(card);
            }
         },
'.table')
api.getCards()
.then((data) => {
   renderCard.renderItems(data);
   console.log(data);
})

api.getUserInfo()
.then((data) =>  {
   userInfo.setUserInfo(data);
   console.log(data);
})

 

popupRedactorValidator.enableValidation();
popupCardValidator.enableValidation();
popupAvatarValidator.enableValidation()
