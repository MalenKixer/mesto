(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=e.data,i=e.handleCardClick,a=e.openPopupConfirm,u=e.setLike,c=e.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=r,this._data=o,this._id=o.owner._id,this._name=o.name,this._link=o.link,this._card=this._getTemplate(),this._handleCardClick=i,this._openPopupConfirm=a,this._setLike=u,this._userId=n,this._deleteLike=c,this._cardTitle=this._card.querySelector(".place__title"),this._cardImage=this._card.querySelector(".place__image"),this._cardLike=this._card.querySelector(".place__icon"),this._cardDeleteIcon=this._card.querySelector(".place__delete-icon"),this._cardLikeCounter=this._card.querySelector(".place__like-counter")}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.getElementById(this._cardSelector).content.cloneNode(!0)}},{key:"_deleteCardHandler",value:function(){var e=this;this._cardDeleteIcon.addEventListener("click",(function(){e._openPopupConfirm()}))}},{key:"remove",value:function(){this._card.querySelector(".place").remove()}},{key:"deleteCloseIcon",value:function(){this._id===this._userId?this._deleteCardHandler():this._cardDeleteIcon.remove()}},{key:"setLikesCounter",value:function(e){this._cardLikeCounter.textContent=e.likes.length}},{key:"setLike",value:function(){this._cardLike.classList.add("place__icon_active")}},{key:"deleteLike",value:function(){this._cardLike.classList.remove("place__icon_active")}},{key:"_setLikesHandler",value:function(){var e=this;this._cardLike.addEventListener("click",(function(t){t.target.classList.contains("place__icon_active")?e._deleteLike():e._setLike()}))}},{key:"setEventListeners",value:function(){this._setLikesHandler(),this._cardImage.addEventListener("click",this._handleCardClick)}},{key:"generateCard",value:function(){return this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this.setLikesCounter(this._data),this._card}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._fieldsetSelector=t.set,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));t.classList.add(this._errorClass),t.textContent=e.validationMessage,e.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));t.classList.remove(this._errorClass),t.textContent="",e.classList.remove(this._inputErrorClass)}},{key:"clearPopupInputs",value:function(){var e=this;this._inputList.forEach((function(t){t.value="",e._hideInputError(t)})),this._toggleButtonState()}},{key:"_hasInputValidity",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(){this._hasInputValidity()?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.setAttribute("disabled","true")):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled","true"))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=t.name,this._infoSelector=t.about,this._avatarSelector=t.avatar,this._profileSelector=t.profile,this._profile=document.querySelector(this._profileSelector),this._name=this._profile.querySelector(this._nameSelector),this._info=this._profile.querySelector(this._infoSelector),this._avatar=this._profile.querySelector(this._avatarSelector),this._inputName=document.querySelector(".popup__input_text_name"),this._inputInfo=document.querySelector(".popup__input_text_activity")}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,info:this._info.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._info.textContent=e.about,this._avatar.src=e.avatar}},{key:"setUserInfoInInput",value:function(e){this._inputName.value=e.name,this._inputInfo.value=e.info}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup__overlay")&&e.close(),t.target.classList.contains("popup__close-icon")&&e.close()}))}}])&&a(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupSubtitle=t._popup.querySelector(".popup__subtitle"),t}return t=a,(n=[{key:"open",value:function(e){l(h(a.prototype),"open",this).call(this),this.setImage(e)}},{key:"setImage",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupSubtitle.textContent=e.name}}])&&s(t.prototype,n),a}(u);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n,r=e.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitHandler=r,n._inputs=Array.from(n._popup.querySelectorAll(".popup__input")),n._form=n._popup.querySelector(".popup__form"),n._button=n._popup.querySelector(".popup__button"),n}return t=a,(n=[{key:"getInputValues",value:function(){var e=this;return this._formValues={},this._inputs.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setInfoInInput",value:function(e){this._name=this._popup.querySelector(".popup__input_text_name"),this._info=this._popup.querySelector(".popup__input_text_activity"),this._name.value=e.name,this._info.value=e.info}},{key:"close",value:function(){v(k(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._button.textContent=e?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){v(k(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submitHandler)}}])&&y(t.prototype,n),a}(u);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n,this._container=document.querySelector(this._containerSelector)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&S(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"_sendRequest",value:function(e,t){return fetch("".concat(this._baseUrl).concat(e),t).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._sendRequest("/users/me",{headers:this._headers})}},{key:"getCards",value:function(){return this._sendRequest("/cards",{headers:this._headers})}},{key:"updateProfile",value:function(e){var t=e.name,n=e.about;return this._sendRequest("/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})})}},{key:"uploadCard",value:function(e){var t=e.name,n=e.link;return this._sendRequest("/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})})}},{key:"deleteCard",value:function(e){return this._sendRequest("/cards/".concat(e._id),{method:"DELETE",headers:this._headers})}},{key:"setLike",value:function(e){return this._sendRequest("/cards/likes/".concat(e._id),{method:"PUT",headers:this._headers})}},{key:"deleteLike",value:function(e){return this._sendRequest("/cards/likes/".concat(e._id),{method:"DELETE",headers:this._headers})}},{key:"changeAvatar",value:function(e){var t=e.link;return this._sendRequest("/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})})}}])&&C(t.prototype,n),e}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R,B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e,t){var n,r=e.deleteCard;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._deleteCard=r,n}return t=a,(n=[{key:"open",value:function(e,t){O(j(a.prototype),"open",this).call(this),this._item=e,this._card=t}},{key:"setEventListeners",value:function(){var e=this;O(j(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._deleteCard(e._item,e._card)}))}}])&&I(t.prototype,n),a}(u),T={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},x=document.querySelector(".popup_name_redactor"),U=document.querySelector(".popup_name_card"),V=document.querySelector(".popup_name_avatar"),D=document.querySelector(".profile"),H=D.querySelector(".profile__add-button"),A=D.querySelector(".profile__edit-button"),N=D.querySelector(".profile__overlay"),J=new E({baseUrl:"https://nomoreparties.co/v1/cohort-27",headers:{authorization:"65fd69c0-8996-4c0e-a94d-653abadfadd2","Content-Type":"application/json"}}),z=new i({profile:".profile",name:".profile__title",about:".profile__subtitle",avatar:".profile__avatar"}),M=new _(".popup_name_image");M.setEventListeners();var F=Q(T,U),G=Q(T,x),K=Q(T,V);function Q(e,t){return new r(e,t)}function W(e,n){var r=new t({data:e,handleCardClick:function(){M.open(e)},openPopupConfirm:function(){X.open(e,r)},setLike:function(){J.setLike(e).then((function(e){console.log(e),r.setLike(),r.setLikesCounter(e)})).catch((function(e){console.log(e)}))},deleteLike:function(){J.deleteLike(e).then((function(e){console.log(e),r.deleteLike(),r.setLikesCounter(e)})).catch((function(e){console.log(e)}))}},R,n);return r.deleteCloseIcon(),r.setEventListeners(),r.generateCard()}var X=new B({deleteCard:function(e,t){J.deleteCard(e).then((function(){X.close(),t.remove()})).catch((function(e){console.log(e)}))}},".popup_name_confirm");X.setEventListeners();var Y=new g({submitHandler:function(e){e.preventDefault(),Y.renderLoading(!0);var t=Y.getInputValues();J.updateProfile(t).then((function(e){console.log(e),z.setUserInfo(e),Y.close()})).catch((function(e){console.log(e)})).finally((function(){Y.renderLoading(!1)}))}},".popup_name_redactor");Y.setEventListeners();var Z=new g({submitHandler:function(e){e.preventDefault(),Z.renderLoading(!0);var t=Z.getInputValues();J.changeAvatar(t).then((function(e){z.setUserInfo(e),Z.close()})).catch((function(e){console.log(e)})).finally((function(){Z.renderLoading(!1)}))}},".popup_name_avatar");Z.setEventListeners();var $=new g({submitHandler:function(e){e.preventDefault(),$.renderLoading(!0);var t=$.getInputValues();J.uploadCard(t).then((function(e){console.log(e);var t=W(e,"place");ee.addItem(t),$.close()})).catch((function(e){console.log(e)})).finally((function(){$.renderLoading(!1)}))}},".popup_name_card");$.setEventListeners(),A.addEventListener("click",(function(){Y.open(),z.setUserInfoInInput(z.getUserInfo())})),H.addEventListener("click",(function(){$.open(),F.clearPopupInputs()})),N.addEventListener("click",(function(){Z.open(),K.clearPopupInputs()}));var ee=new L({renderer:function(e){var t=W(e,"place");ee.addItem(t)}},".table"),te=J.getCards(),ne=J.getUserInfo();Promise.all([te,ne]).then((function(e){console.log(e),R=e[1]._id,ee.renderItems(e[0]),z.setUserInfo(e[1])})).catch((function(e){console.log(e)})),G.enableValidation(),F.enableValidation(),K.enableValidation()})();