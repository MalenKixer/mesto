(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=e.data,a=e.handleCardClick,u=e.openPopupConfirm,s=e.setLike,c=e.deleteLike,l=e.deleteCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=o,this._data=i,this._id=i.owner._id,this._name=i.name,this._link=i.link,this._card=this._getTemplate(),this._handleCardClick=a,this._openPopupConfirm=u,this._setLike=s,this._requestDeleteCard=l,this._userId=n,this._requestConfirm=r,this._deleteLike=c,this._cardTitle=this._card.querySelector(".place__title"),this._cardImage=this._card.querySelector(".place__image"),this._cardLike=this._card.querySelector(".place__icon"),this._cardDeleteIcon=this._card.querySelector(".place__delete-icon"),this._cardLikeCounter=this._card.querySelector(".place__like-counter")}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.getElementById(this._cardSelector).content.cloneNode(!0)}},{key:"_deleteCardHandler",value:function(){var e=this;this._cardDeleteIcon.addEventListener("click",(function(){e._openPopupConfirm(),e._cardConfirmCheck()}))}},{key:"_cardConfirmCheck",value:function(){this._requestConfirm&&this._requestDeleteCard()}},{key:"deleteCloseIcon",value:function(){this._id===this._userId?(this._deleteCardHandler(),this._cardLike.remove()):this._cardDeleteIcon.remove()}},{key:"deleteCard",value:function(){this._card.remove()}},{key:"setLikesCounter",value:function(e){this._cardLikeCounter.textContent=e.likes.length}},{key:"setLike",value:function(){this._cardLike.classList.add("place__icon_active")}},{key:"deleteLike",value:function(){this._cardLike.classList.remove("place__icon_active")}},{key:"_setLikesHandler",value:function(){var e=this;this._cardLike.addEventListener("click",(function(t){t.target.classList.contains("place__icon_active")?e._deleteLike():e._setLike()}))}},{key:"setEventListeners",value:function(){this._setLikesHandler(),this._cardImage.addEventListener("click",this._handleCardClick)}},{key:"generateCard",value:function(){return this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this.setLikesCounter(this._data),this._card}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._fieldsetSelector=t.set,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));t.classList.add(this._errorClass),t.textContent=e.validationMessage,e.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));t.classList.remove(this._errorClass),t.textContent="",e.classList.remove(this._inputErrorClass)}},{key:"clearPopupInputs",value:function(){var e=this;this._inputList.forEach((function(t){t.value="",e._hideInputError(t)})),this._toggleButtonState()}},{key:"_hasInputValidity",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(){this._hasInputValidity()?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.setAttribute("disabled","true")):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled","true"))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=t.name,this._infoSelector=t.about,this._avatarSelector=t.avatar,this._profileSelector=t.profile,this._profile=document.querySelector(this._profileSelector),this._name=this._profile.querySelector(this._nameSelector),this._info=this._profile.querySelector(this._infoSelector),this._avatar=this._profile.querySelector(this._avatarSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,info:this._info.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._info.textContent=e.about,this._avatar.src=e.avatar}},{key:"setUserInfoInInput",value:function(e){this._name=document.querySelector(".popup__input_text_name"),this._info=document.querySelector(".popup__input_text_activity"),this._name.value=e.name,this._info.value=e.info}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup__overlay")&&e.close(),t.target.classList.contains("popup__close-icon")&&e.close()}))}}])&&a(t.prototype,n),e}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupSubtitle=t._popup.querySelector(".popup__subtitle"),t}return t=a,(n=[{key:"open",value:function(e){l(h(a.prototype),"open",this).call(this),this.setImage(e)}},{key:"setImage",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupSubtitle.textContent=e.name}}])&&c(t.prototype,n),a}(u);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n,r=e.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitHandler=r,n._inputs=Array.from(n._popup.querySelectorAll(".popup__input")),n._form=n._popup.querySelector(".popup__form"),n._button=n._popup.querySelector(".popup__button"),n}return t=a,(n=[{key:"getInputValues",value:function(){var e=this;return this._formValues={},this._inputs.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setInfoInInput",value:function(e){this._name=this._popup.querySelector(".popup__input_text_name"),this._info=this._popup.querySelector(".popup__input_text_activity"),this._name.value=e.name,this._info.value=e.info}},{key:"close",value:function(){v(k(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._button.textContent=e?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){v(k(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submitHandler)}}])&&y(t.prototype,n),a}(u);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n,this._container=document.querySelector(this._containerSelector)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&L(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"_sendRequest",value:function(e,t){return fetch("".concat(this._baseUrl).concat(e),t).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._sendRequest("/users/me",{headers:this._headers})}},{key:"getCards",value:function(){return this._sendRequest("/cards",{headers:this._headers})}},{key:"updateProfile",value:function(e){var t=e.name,n=e.about;return this._sendRequest("/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})})}},{key:"uploadCard",value:function(e){var t=e.name,n=e.link;return this._sendRequest("/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})})}},{key:"deleteCard",value:function(e){return this._sendRequest("/cards/".concat(e._id),{method:"DELETE",headers:this._headers})}},{key:"setLike",value:function(e){return this._sendRequest("/cards/likes/".concat(e._id),{method:"PUT",headers:this._headers})}},{key:"deleteLike",value:function(e){return this._sendRequest("/cards/likes/".concat(e._id),{method:"DELETE",headers:this._headers})}},{key:"changeAvatar",value:function(e){var t=e.link;return this._sendRequest("/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})})}}])&&S(t.prototype,n),e}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R,B,T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e,t){var n,r=e.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitHandler=r,n}return t=a,(n=[{key:"close",value:function(){O(j(a.prototype),"close",this).call(this),this._removeEventListeners()}},{key:"open",value:function(){O(j(a.prototype),"open",this).call(this),this.setEventListeners()}},{key:"setEventListeners",value:function(){O(j(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submitHandler)}},{key:"_removeEventListeners",value:function(){this._popup.removeEventListener("submit",this._submitHandler)}}])&&I(t.prototype,n),a}(u),x={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},H=document.querySelector(".popup_name_redactor"),U=document.querySelector(".popup_name_card"),V=document.querySelector(".popup_name_avatar"),D=document.querySelector(".profile"),A=D.querySelector(".profile__add-button"),N=D.querySelector(".profile__edit-button"),J=D.querySelector(".profile__overlay"),z=new E({baseUrl:"https://nomoreparties.co/v1/cohort-27",headers:{authorization:"65fd69c0-8996-4c0e-a94d-653abadfadd2","Content-Type":"application/json"}}),M=new i({profile:".profile",name:".profile__title",about:".profile__subtitle",avatar:".profile__avatar"}),F=new _(".popup_name_image");F.setEventListeners();var G=$(x,U),K=$(x,H),Q=$(x,V),W=new T({submitHandler:function(e){e.preventDefault(),B=!0}},".popup_name_confirm"),X=new g({submitHandler:function(e){e.preventDefault(),X.renderLoading(!0);var t=X.getInputValues();z.updateProfile(t).then((function(e){M.setUserInfo(e),X.close()})).catch((function(e){console.log(e)})).finally((function(){X.renderLoading(!1)}))}},".popup_name_redactor");X.setEventListeners();var Y=new g({submitHandler:function(e){e.preventDefault(),Y.renderLoading(!0);var t=Y.getInputValues();z.changeAvatar(t).then((function(e){M.setUserInfo(e),Y.close()})).catch((function(e){console.log(e)})).finally((function(){Y.renderLoading(!1)}))}},".popup_name_avatar");Y.setEventListeners();var Z=new g({submitHandler:function(e){e.preventDefault(),Z.renderLoading(!0);var t=Z.getInputValues();z.uploadCard(t).then((function(e){console.log(e);var t=ee(e,"place");te.addItem(t),Z.close()})).catch((function(e){console.log(e)})).finally((function(){Z.renderLoading(!1)}))}},".popup_name_card");function $(e,t){return new r(e,t)}function ee(e,n){var r=new t({data:e,handleCardClick:function(){F.open(e)},openPopupConfirm:function(){W.open(e)},setLike:function(){z.setLike(e).then((function(e){console.log(e),r.setLike(),r.setLikesCounter(e)})).catch((function(e){console.log(e)}))},deleteLike:function(){z.deleteLike(e).then((function(e){console.log(e),r.deleteLike(),r.setLikesCounter(e)})).catch((function(e){console.log(e)}))},deleteCard:function(){z.deleteCard(e).then((function(){W.close()})).catch((function(e){console.log(e)}))}},R,B,n);return r.deleteCloseIcon(),r.setEventListeners(),r.generateCard()}Z.setEventListeners(),N.addEventListener("click",(function(){X.open(),M.setUserInfoInInput(M.getUserInfo()),K.clearPopupInputs()})),A.addEventListener("click",(function(){Z.open(),G.clearPopupInputs()})),J.addEventListener("click",(function(){Y.open(),Q.clearPopupInputs()}));var te=new C({renderer:function(e){var t=ee(e,"place");te.addItem(t)}},".table"),ne=z.getCards(),re=z.getUserInfo();Promise.all([ne,re]).then((function(e){console.log(e),R=e[1]._id,te.renderItems(e[0]),M.setUserInfo(e[1])})),K.enableValidation(),G.enableValidation(),Q.enableValidation()})();