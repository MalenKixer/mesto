import './index.css';
import { Card } from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Section } from '../components/Section.js';
import { Api } from '../components/Api.js';
import { PopupConfirm} from '../components/PopupConfirm.js';
import {validationConfig, popupRedactor, popupCard, popupAvatarProfile, profileItems, addButton, editButton, profileUpdateAvatar} from '../utils/components.js'

const api = new Api({
   baseUrl: `https://nomoreparties.co/v1/cohort-27`,
   headers: {
      authorization: '65fd69c0-8996-4c0e-a94d-653abadfadd2',
      'Content-Type': 'application/json'
   },
})
let userId;
const userInfo = new UserInfo(profileItems);
const popupImage = new PopupWithImage('.popup_name_image');
popupImage.setEventListeners();
const popupCardValidator = createValidator(validationConfig, popupCard);
const popupRedactorValidator = createValidator(validationConfig, popupRedactor);
const popupAvatarValidator = createValidator(validationConfig, popupAvatarProfile)

function createValidator(validationConfig, popup){
   return new FormValidator(validationConfig, popup)
}
function createCard(item, cardSelector){
   const card = new Card ({
      data: item,
      handleCardClick: () =>{
         popupImage.open(item)
      },
      openPopupConfirm:() => {
         const data = card.returnCard();
         popupConfirm.open(item, data);
      },
      setLike: () => {
         api.setLike(item)
         .then((data) => {
            console.log(data);
            card.setLike();
            card.setLikesCounter(data);
            })
            .catch((err) => {
               console.log(err)
            })      
      },
      deleteLike: () => {
         api.deleteLike(item)
         .then((data) => {
            console.log(data);
            card.deleteLike();
            card.setLikesCounter(data);
        })
         .catch((err) => {
         console.log(err);
         })
      },
   },
   userId,
   cardSelector);
   card.deleteCloseIcon();
   card.setEventListeners();
   return card.generateCard();
}


const popupConfirm = new PopupConfirm({
   deleteCard: (item) => {
      api.deleteCard(item)
      .then(() => {
         popupConfirm.close();
      })
      .catch((err) => {
         console.log(err);
      })
   }
},
'.popup_name_confirm');

const popupProfile = new PopupWithForm({
   submitHandler: (evt) => {
      evt.preventDefault();
      popupProfile.renderLoading(true);
      const inputValues = popupProfile.getInputValues();
      api.updateProfile(inputValues)
      .then((data) => {
         console.log(data);
         userInfo.setUserInfo(data);
         popupProfile.close();
      })
      .catch((err) => {
         console.log(err)
       })
      .finally(() => {
         popupProfile.renderLoading(false);
       }) 
   }
},
'.popup_name_redactor')
popupProfile.setEventListeners();

const popupAvatar = new PopupWithForm({
   submitHandler: (evt) => {
      evt.preventDefault();
      popupAvatar.renderLoading(true);
      const getAvatar = popupAvatar.getInputValues();
      api.changeAvatar(getAvatar)
      .then((res) => {
         userInfo.setUserInfo(res);
         popupAvatar.close();
      })
      .catch((err) => {
         console.log(err);
       })
       .finally(() => {
         popupAvatar.renderLoading(false);
       })
      }
   },
   '.popup_name_avatar')
popupAvatar.setEventListeners();

const popupCardForm = new PopupWithForm({
   submitHandler: (evt) => {
      evt.preventDefault();
      popupCardForm.renderLoading(true);
      const inputValues = popupCardForm.getInputValues();
      api.uploadCard(inputValues)
      .then((data) => {
         console.log(data);
         const card = createCard(data, 'place');
         renderCard.addItem(card);
         popupCardForm.close()
      })
      .catch((err) => {
         console.log(err);
       })
      .finally(() => {
         popupCardForm.renderLoading(false);         
      })   
   }
},
'.popup_name_card')
popupCardForm.setEventListeners();



editButton.addEventListener('click', () => {
      popupProfile.open();
      userInfo.setUserInfoInInput(userInfo.getUserInfo());
   }
);
addButton.addEventListener('click', () => {
      popupCardForm.open();
      popupCardValidator.clearPopupInputs();
   }
);
profileUpdateAvatar.addEventListener('click', ()=>{
   popupAvatar.open();
   popupAvatarValidator.clearPopupInputs()
   }
);
const renderCard = new Section({
      renderer: (item) => {
            const card = createCard(item, 'place');
            renderCard.addItem(card);
            }
         },
'.table')

const request1 = api.getCards();
const request2 = api.getUserInfo()


Promise.all([request1, request2])
.then((res) => {
   console.log(res);
   userId = res[1]._id;
   renderCard.renderItems(res[0]);
   userInfo.setUserInfo(res[1]);
})


popupRedactorValidator.enableValidation();
popupCardValidator.enableValidation();
popupAvatarValidator.enableValidation()
