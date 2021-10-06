(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.data,o=e.handleCardClick,i=e.openPopupConfirm,a=e.setLike,u=e.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=n,this._name=r.name,this._link=r.link,this._likes=r.likes,this._card=this._getTemplate(),this._handleCardClick=o,this._openPopupConfirm=i,this._setLike=a,this._deleteLike=u}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.getElementById(this._cardSelector).content.cloneNode(!0)}},{key:"_deleteCardHandler",value:function(){var e=this;this._card.querySelector(".place__delete-icon").addEventListener("click",(function(){e._openPopupConfirm()}))}},{key:"deleteCard",value:function(){this._cardSelector.remove()}},{key:"deleteCloseIcon",value:function(){this._card.querySelector(".place__delete-icon").remove()}},{key:"_setLikesCounter",value:function(){this._card.querySelector(".place__like-counter").textContent=this._likes}},{key:"_setLikesHandler",value:function(){var e=this;this._card.querySelector(".place__icon").addEventListener("click",(function(t){t.target.classList.toggle("place__icon_active"),toggle(e._setLike(),e._deleteLike())}))}},{key:"setEventListeners",value:function(){var e=this;this._setLikesHandler(),this._deleteCardHandler(),this._setLikesCounter(),this._cardImage.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"generateCard",value:function(){return this._cardTitle=this._card.querySelector(".place__title"),this._cardImage=this._card.querySelector(".place__image"),this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._setEventListeners(),this._card}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=n,this._fieldsetSelector=t.set,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){var t=this._formSelector.querySelector(".".concat(e.id,"-error"));t.classList.add(this._errorClass),t.textContent=e.validationMessage,e.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._formSelector.querySelector(".".concat(e.id,"-error"));t.classList.remove(this._errorClass),t.textContent="",e.classList.remove(this._inputErrorClass)}},{key:"clearPopupInputs",value:function(){var e=this;Array.from(this._formSelector.querySelectorAll(this._inputSelector)).forEach((function(t){t.value="",e._hideInputError(t)})),this._toggleButtonState()}},{key:"_hasInputValidity",value:function(){return Array.from(this._formSelector.querySelectorAll(this._inputSelector)).some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(){var e=this._formSelector.querySelector(this._submitButtonSelector);this._hasInputValidity()?(e.classList.add(this._inactiveButtonClass),e.setAttribute("disabled","true")):(e.classList.remove(this._inactiveButtonClass),e.removeAttribute("disabled","true"))}},{key:"_setEventListeners",value:function(){var e=this,t=Array.from(this._formSelector.querySelectorAll(this._inputSelector));this._toggleButtonState(),t.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=t.name,this._infoSelector=t.info,this._avatarSelector=t.avatar,this._name=document.querySelector(this._nameSelector),this._info=document.querySelector(this._infoSelector),this._avatar=document.querySelector(this._avatarSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,info:this._info.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._info.textContent=e.about,this._avatar.src=e.avatar}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup__overlay")&&e.close(),t.target.classList.contains("popup__close-icon")&&e.close()}))}}])&&a(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e){l(h(a.prototype),"open",this).call(this),this.setImage(e)}},{key:"setImage",value:function(e){this._popupImage=this._popup.querySelector(".popup__image"),this._popupSubtitle=this._popup.querySelector(".popup__subtitle"),this._popupImage.src=e.link,this._popupImage.alt=e.owner.name,this._popupSubtitle.textContent=e.owner.name}}])&&s(t.prototype,n),a}(u);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n,r=e.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitHandler=r,n}return t=a,(n=[{key:"_getInputValues",value:function(){return this._inputs=Array.from(this._popup.querySelectorAll(".popup__input")),this._inputs.map((function(e){return e.value}))}},{key:"setInfoInInput",value:function(e){this._name=this._popup.querySelector(".popup__input_text_name"),this._info=this._popup.querySelector(".popup__input_text_activity"),this._name.value=e.name,this._info.value=e.info}},{key:"close",value:function(){v(g(a.prototype),"close",this).call(this),this._inputValues=this._getInputValues(),this._inputValues.forEach((function(e){return""}))}},{key:"setEventListeners",value:function(){var e=this;v(g(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submitHandler),this._popup.addEventListener("submit",(function(){e._popup.querySelector(".popup__button").textContent="Сохранение..."}))}}])&&y(t.prototype,n),a}(u);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._containerSelector=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container=document.querySelector(this._containerSelector),this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&S(t.prototype,n),e}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitHandler=e,n}return t=a,(n=[{key:"getInputValue",value:function(){return this._popup.querySelector(".popup__input_avatar_link").value}},{key:"setEventListeners",value:function(){var e=this;O(P(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submitHandler),this._popup.addEventListener("submit",(function(){e._popup.querySelector(".popup__button").textContent="Сохранение..."}))}}])&&E(t.prototype,n),a}(u);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("https://nomoreparties.co/v1/cohort-27/users/me",{headers:{authorization:this._headers}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"getCards",value:function(){return fetch("https://nomoreparties.co/v1/cohort-27/cards",{headers:{authorization:this._headers}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"updateProfile",value:function(e){var t=e.name,n=e.about;return fetch("https://nomoreparties.co/v1/cohort-27/users/me",{method:"PATCH",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"uploadCard",value:function(e){var t=e.name,n=e.link;return fetch("https://nomoreparties.co/v1/cohort-27/cards",{method:"POST",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("https://nomoreparties.co/v1/cohort-27/cards/".concat(e._id),{method:"DELETE",headers:{authorization:this._headers}}).then((function(e){return e.json()})).then((function(){return!0})).catch((function(e){console.log(e)}))}},{key:"setLike",value:function(e){var t=this;return fetch("https://nomoreparties.co/v1/cohort-27/cards/likes/${data._id}",{method:"PUT",headers:{authorization:this._headers}}).then((function(e){return e.json()})).then((function(e){t.updateLikeCounter(e)})).catch((function(e){console.log(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("https://nomoreparties.co/v1/cohort-27/cards/likes/".concat(e._id),{method:"DELETE",headers:{authorization:this._headers}}).then((function(e){return e.json()})).then((function(e){t.updateLikeCounter(e)})).catch((function(e){console.log(e)}))}},{key:"updateLikeCounter",value:function(e){return fetch("https://nomoreparties.co/v1/cohort-27/cards/".concat(e._id),{method:"PATCH",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({likes:e.likes})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"changeAvatar",value:function(e,t){return fetch("https://nomoreparties.co/v1/cohort-27/users/me/avatar",{method:"PATCH",headers:{authorization:this._headers},body:JSON.stringify({avatar:e})}).then((function(e){return e.json()})).then((function(e){t.src=e.avatar})).catch((function(e){console.log(e)}))}}])&&q(t.prototype,n),e}();function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t,n){return(B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function a(e,t){var n,r=e.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitHandler=r,n}return t=a,(n=[{key:"setEventListeners",value:function(){B(A(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",submitHandler)}}])&&x(t.prototype,n),a}(u),U={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},D=document.querySelector(".popup_name_redactor"),N=document.querySelector(".popup_name_card"),J=document.querySelector(".profile"),M=D.querySelector(".popup__input_text_name"),$=D.querySelector(".popup__input_text_activity"),F=N.querySelector(".popup__input_card_name"),G=N.querySelector(".popup__input_card_link"),K=J.querySelector(".profile__add-button"),Q=J.querySelector(".profile__edit-button"),W=te(U,N),X=te(U,D),Y=J.querySelector(".profile__update-avatar_overlay"),Z=J.querySelector(".profile__image");function ee(e,n){var r=e.data,o=e.handleCardClick;return new t({data:r,handleCardClick:o},n)}function te(e,t){return new r(e,t)}var ne=new d(".popup_name_image");ne.setEventListeners();var re=new i({name:".profile__title",info:".profile__subtitle",avatar:".profile__avatar"}),oe=new R({headers:"65fd69c0-8996-4c0e-a94d-653abadfadd2"}),ie=new k({submitHandler:function(e){e.preventDefault(),ie.close();var t={name:M.value,info:$.value};oe.updateProfile(t),re.setUserInfo(t)}},".popup_name_redactor");ie.setEventListeners();var ae=new I({submitHandler:function(){var e=ae.getInputValue();oe.changeAvatar(e,Z)}},".popup_name_avatar"),ue=new k({submitHandler:function(e){e.preventDefault(),ue.close();var t={name:F.value,link:G.value},n=new ee({data:oe.uploadCard(t),handleCardClick:function(){ne.open(t)},openPopupConfirm:function(){r.open()},setLike:function(){oe.setLike(oe.uploadCard(t))},deleteLike:function(){oe.deleteLike(oe.uploadCard(t))}},"place"),r=new z({submitHandler:function(){oe.deleteCard(oe.uploadCard(t)),n.deleteCard()}},".popup_name_confirm");n.setEventListeners(),ce.addItem(n.generateCard())}},".popup_name_card");ue.setEventListeners(),Q.addEventListener("click",(function(){ie.open(),ie.setInfoInInput(re.getUserInfo())})),K.addEventListener("click",(function(){ue.open(),W.clearPopupInputs()})),Y.addEventListener("click",(function(){ae.open()}));var ce=new C({items:oe.getCards(),renderer:function(e){var t=ee({data:e,handleCardClick:function(){ne.open(e)},openPopupConfirm:function(){n.open()},setLike:function(){oe.setLike(oe.uploadCard(inputValues))},deleteLike:function(){oe.deleteLike(oe.uploadCard(inputValues))}},"place"),n=new z({submitHandler:function(){oe.deleteCard(oe.uploadCard(inputValues)),t.deleteCard()}},".popup_name_confirm");t.setEventListeners(),t.deleteCloseIcon(),ce.addItem(t.generateCard())}},".table");console.log(oe.getCards),console.log(oe.getUserInfo),ce.renderItems(),X.enableValidation(),W.enableValidation(),re.setUserInfo(oe.getUserInfo())})();