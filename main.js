(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.data,o=e.handleCardClick,i=e.openPopupConfirm,a=e.setLike,u=e.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=n,this._data=r,this._name=r.name,this._link=r.link,this._card=this._getTemplate(),this._handleCardClick=o,this._openPopupConfirm=i,this._setLike=a,this._deleteLike=u,this._cardTitle=this._card.querySelector(".place__title"),this._cardImage=this._card.querySelector(".place__image")}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.getElementById(this._cardSelector).content.cloneNode(!0)}},{key:"_deleteCardHandler",value:function(){var e=this;this._card.querySelector(".place__delete-icon").addEventListener("click",(function(){e._openPopupConfirm()}))}},{key:"deleteCard",value:function(){this._card.querySelector(".place").remove()}},{key:"deleteCloseIcon",value:function(e){e?this._card.querySelector(".place__delete-icon").remove():this._deleteCardHandler()}},{key:"setLikesCounter",value:function(e){this._card.querySelector(".place__like-counter").textContent=e.likes.length}},{key:"setLike",value:function(){this._card.querySelector(".place__icon").classList.add("place__icon_active")}},{key:"deleteLike",value:function(){this._card.querySelector(".place__icon").classList.remove("place__icon_active")}},{key:"_setLikesHandler",value:function(){var e=this;this._card.querySelector(".place__icon").addEventListener("click",(function(t){t.target.classList.contains("place__icon_active")?(e.deleteLike(),e._deleteLike):(e.setLike(),e._setLike)}))}},{key:"setEventListeners",value:function(){this._setLikesHandler(),this.setLikesCounter(this._data),this._cardImage.addEventListener("click",this._handleCardClick)}},{key:"generateCard",value:function(){return this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._card}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._fieldsetSelector=t.set,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));t.classList.add(this._errorClass),t.textContent=e.validationMessage,e.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));t.classList.remove(this._errorClass),t.textContent="",e.classList.remove(this._inputErrorClass)}},{key:"clearPopupInputs",value:function(){var e=this;Array.from(this._form.querySelectorAll(this._inputSelector)).forEach((function(t){t.value="",e._hideInputError(t)})),this._toggleButtonState()}},{key:"_hasInputValidity",value:function(){return Array.from(this._form.querySelectorAll(this._inputSelector)).some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(){var e=this._form.querySelector(this._submitButtonSelector);this._hasInputValidity()?(e.classList.add(this._inactiveButtonClass),e.setAttribute("disabled","true")):(e.classList.remove(this._inactiveButtonClass),e.removeAttribute("disabled","true"))}},{key:"_setEventListeners",value:function(){var e=this,t=Array.from(this._form.querySelectorAll(this._inputSelector));this._toggleButtonState(),t.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=t.name,this._infoSelector=t.info,this._avatarSelector=t.avatar,this._name=document.querySelector(this._nameSelector),this._info=document.querySelector(this._infoSelector),this._avatar=document.querySelector(this._avatarSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,info:this._info.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._info.textContent=e.about,this._avatar.src=e.avatar}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup__overlay")&&e.close(),t.target.classList.contains("popup__close-icon")&&e.close()}))}}])&&a(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e){l(h(a.prototype),"open",this).call(this),this.setImage(e)}},{key:"setImage",value:function(e){this._popupImage=this._popup.querySelector(".popup__image"),this._popupSubtitle=this._popup.querySelector(".popup__subtitle"),this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupSubtitle.textContent=e.name}}])&&s(t.prototype,n),a}(u);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n,r=e.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitHandler=r,n}return t=a,(n=[{key:"_getInputValues",value:function(){return this._inputs=Array.from(this._popup.querySelectorAll(".popup__input")),this._inputs.map((function(e){return e.value}))}},{key:"setInfoInInput",value:function(e){this._name=this._popup.querySelector(".popup__input_text_name"),this._info=this._popup.querySelector(".popup__input_text_activity"),this._name.value=e.name,this._info.value=e.info}},{key:"close",value:function(){v(g(a.prototype),"close",this).call(this),this._inputValues=this._getInputValues(),this._inputValues.forEach((function(e){return""}))}},{key:"renderLoading",value:function(e){this._popup.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){v(g(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submitHandler)}}])&&y(t.prototype,n),a}(u);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container=document.querySelector(this._containerSelector),this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&S(t.prototype,n),e}();function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t){var n,r=e.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitHandler=r,n}return t=a,(n=[{key:"getInputValue",value:function(){return this._popup.querySelector(".popup__input_avatar_link").value}},{key:"renderLoading",value:function(e){this._popup.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){w(q(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submitHandler)}}])&&E(t.prototype,n),a}(u);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=n}var t,n;return t=e,(n=[{key:"_sendRequest",value:function(e,t){return fetch(e,t).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._sendRequest("https://nomoreparties.co/v1/cohort-27/users/me",{headers:this._headers})}},{key:"getCards",value:function(){return this._sendRequest("https://nomoreparties.co/v1/cohort-27/cards",{headers:this._headers})}},{key:"updateProfile",value:function(e){var t=e.name,n=e.about;return this._sendRequest("https://nomoreparties.co/v1/cohort-27/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})})}},{key:"uploadCard",value:function(e){var t=e.name,n=e.link;return this._sendRequest("https://nomoreparties.co/v1/cohort-27/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})})}},{key:"deleteCard",value:function(e){return this._sendRequest("https://nomoreparties.co/v1/cohort-27/cards/".concat(e._id),{method:"DELETE",headers:this._headers})}},{key:"setLike",value:function(e){return this._sendRequest("https://nomoreparties.co/v1/cohort-27/cards/likes/".concat(e._id),{method:"PUT",headers:this._headers})}},{key:"deleteLike",value:function(e){return this._sendRequest("https://nomoreparties.co/v1/cohort-27/cards/likes/".concat(e._id),{method:"DELETE",headers:this._headers})}},{key:"updateLikeCounter",value:function(e){return this._sendRequest("https://nomoreparties.co/v1/cohort-27/cards/".concat(e._id),{method:"PATCH",headers:this._headers,body:JSON.stringify({likes:e.likes})})}},{key:"changeAvatar",value:function(e){return this._sendRequest("https://nomoreparties.co/v1/cohort-27/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}}])&&R(t.prototype,n),e}();function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t,n){return(B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e,t){var n,r=e.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitHandler=r,n}return t=a,(n=[{key:"setEventListeners",value:function(){B(V(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submitHandler)}},{key:"removeEventListeners",value:function(){this._popup.removeEventListener("submit",this._submitHandler)}}])&&x(t.prototype,n),a}(u),U={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},N=document.querySelector(".popup_name_redactor"),J=document.querySelector(".popup_name_card"),z=document.querySelector(".popup_name_avatar"),M=document.querySelector(".profile"),F=N.querySelector(".popup__input_text_name"),G=N.querySelector(".popup__input_text_activity"),K=J.querySelector(".popup__input_card_name"),Q=J.querySelector(".popup__input_card_link"),W=M.querySelector(".profile__add-button"),X=M.querySelector(".profile__edit-button"),Y=M.querySelector(".profile__overlay"),Z=M.querySelector(".profile__avatar"),$=new _(".popup_name_image");$.setEventListeners();var ee=new i({name:".profile__title",info:".profile__subtitle",avatar:".profile__avatar"}),te=new j({headers:{authorization:"65fd69c0-8996-4c0e-a94d-653abadfadd2","Content-Type":"application/json"}});function ne(e,t){return new r(e,t)}var re=ne(U,J),oe=ne(U,N),ie=ne(U,z);function ae(e,n,r){var o=new t({data:e,handleCardClick:function(){$.open(e)},openPopupConfirm:function(){var t=new D({submitHandler:function(n){n.preventDefault(),te.deleteCard(e).then((function(){t.close(),o.deleteCard()})).catch((function(e){console.log(e)})).finally((function(){t.removeEventListeners()}))}},".popup_name_confirm");t.setEventListeners(),t.open()},setLike:function(){te.setLike(e).then((function(e){console.log(e),te.updateLikeCounter(e).then((function(e){o.setLikesCounter(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},deleteLike:function(){te.deleteLike(e).then((function(e){console.log(e),te.updateLikeCounter(e).then((function(e){o.setLikesCounter(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}},n);return o.deleteCloseIcon(r),o.setEventListeners(),o.generateCard()}var ue=new k({submitHandler:function(e){e.preventDefault(),ue.renderLoading(!0);var t={name:F.value,about:G.value};te.updateProfile(t).then((function(e){ee.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){ue.close()}))}},".popup_name_redactor");ue.setEventListeners();var ce=new I({submitHandler:function(e){e.preventDefault(),ce.renderLoading(!0);var t=ce.getInputValue();te.changeAvatar("".concat(t)).then((function(e){Z.src=e.avatar})).catch((function(e){console.log(e)})).finally((function(){ce.close()}))}},".popup_name_avatar");ce.setEventListeners();var se=new k({submitHandler:function(e){e.preventDefault();var t={name:K.value,link:Q.value};te.uploadCard(t).then((function(e){console.log(e),se.renderLoading(!0);var t=ae(e,"place",!1);le.addItem(t)})).catch((function(e){console.log(e)})).finally((function(){se.close()}))}},".popup_name_card");se.setEventListeners(),X.addEventListener("click",(function(){ue.open(),ue.renderLoading(!1),ue.setInfoInInput(ee.getUserInfo())})),W.addEventListener("click",(function(){se.open(),se.renderLoading(!1),re.clearPopupInputs()})),Y.addEventListener("click",(function(){ce.open(),ce.renderLoading(!1),ie.clearPopupInputs()}));var le=new L({renderer:function(e){var t=ae(e,"place",!0);le.addItem(t)}},".table");te.getCards().then((function(e){le.renderItems(e),console.log(e)})).catch((function(e){console.log(e)})),te.getUserInfo().then((function(e){ee.setUserInfo(e),console.log(e)})).catch((function(e){console.log(e)})),oe.enableValidation(),re.enableValidation(),ie.enableValidation()})();