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
const profile = document.querySelector('.profile');
const inputName = popupRedactor.querySelector('.popup__input_text_name');
const inputActivity = popupRedactor.querySelector('.popup__input_text_activity');
const inputCardName = popupCard.querySelector('.popup__input_card_name');
const inputCardLink = popupCard.querySelector('.popup__input_card_link'); 
const addButton = profile.querySelector('.profile__add-button');
const editButton = profile.querySelector('.profile__edit-button');
const popupCardValidator = createValidator(validationConfig, popupCard);
const popupRedactorValidator = createValidator(validationConfig, popupRedactor);
const profileUpdateAvatar = profile.querySelector('.profile__update-avatar_overlay');
const profileImage = profile.querySelector('.profile__image');

function createCard({data, handleCardClick}, cardSelector){
   return new Card({data, handleCardClick}, cardSelector);
}
function createValidator(validationConfig, popup){
   return new FormValidator(validationConfig, popup);
}
const popupImage = new PopupWithImage('.popup_name_image');
popupImage.setEventListeners();

const profileItems = {
   name: '.profile__title',
   info: '.profile__subtitle'
}
const userInfo = new UserInfo(profileItems);
const api = new Api({
   baseUrl: '65fd69c0-8996-4c0e-a94d-653abadfadd2',
   headers:'cohort-27',
})


const popupProfile = new PopupWithForm({
   submitHandler: (evt) => {
      evt.preventDefault();
      popupProfile.close();
      const inputValues = {
         name: inputName.value,
         info: inputActivity.value
      }
      userInfo.setUserInfo(inputValues);
   }
},
'.popup_name_redactor')
popupProfile.setEventListeners();

const popupAvatar = new PopupAvatar({
   submitHandler: () => {
      const avatar = popupAvatar.getInputValue()
      api.changeAvatar(avatar)
         .then((res) => {
            profileImage.src = res.avatar;
         })
         .catch((err) => {
            console.log(err);
         })
      }
   },
   '.popup_name_avatar'
)

const popupCardForm = new PopupWithForm({
   submitHandler: (evt) => {
      evt.preventDefault();
      popupCardForm.close();
      const inputValues ={
         name: inputCardName.value,
         link: inputCardLink.value
      }
      const card = new createCard ({
         data: api.uploadCard(inputValues),
         handleCardClick: () =>{
            popupImage.open(inputValues);
         },
         handleDeleteIcon:() => {
            popupConfirm.open();
         },
         setLike: () => {
            api.setLike(api.uploadCard(inputValues))
            .then((res) => {
               api.updateLikeCounter(res)
            })
            .catch((err) => {
               console.log(err);
            })         
         },
         deleteLike: () => {
            api.deleteLike(api.uploadCard(inputValues))
            .then((res) => {
               api.updateLikeCounter(res);
            })
            .catch((err) => {
               console.log(err);
            })
         },
      }, 
      'place');
      const popupConfirm = new PopupConfirm({
         submitHandler: () => {
            api.deleteCard(api.uploadCard(inputValues))
            .then(() => {
               return true;
            })
            .catch((err) => {
               console.log(err);
            })
         }
      },
      '.popup_name_confirm')
      renderCard.addItem(card.generateCard());
   }
},
'.popup_name_card')
popupCardForm.setEventListeners();

editButton.addEventListener('click', () => {
      popupProfile.open();
      popupProfile.setInfoInInput(userInfo.getUserInfo());
   }
);
addButton.addEventListener('click', () => {
      popupCardForm.open();
      popupCardValidator.clearPopupInputs();
   }
);
profileUpdateAvatar.addEventListener('click', ()=>{
   popupAvatar.open();
   }
);

const renderCard = new Section({
   items: api.getCards,
   renderer: (item) => {
      const card = createCard({
         data: item,
         handleCardClick: () =>{
               popupImage.open(item);
            },
         }, 
      'place');
      card.deleteCloseIcon();
      renderCard.addItem(card.generateCard());
      }
   },
   '.table')

userInfo.setUserInfo(api.getUserInfo);
renderCard.renderItems();
popupRedactorValidator.enableValidation();
popupCardValidator.enableValidation();
