export class Api{
    constructor({headers}){
        this._headers = headers;
    }
    // Оправить запрос
    _sendRequest(path, parameters){
        return fetch(path, parameters)
        .then((res) => {
            if (res.ok) {
            return res.json();
            }
            Promise.reject(`Ошибка: ${res.status}`);
          });
    }
    getUserInfo(){
        return this._sendRequest(`https://nomoreparties.co/v1/cohort-27/users/me`, {
            headers: this._headers
        })
    }
    getCards(){
        return this._sendRequest(`https://nomoreparties.co/v1/cohort-27/cards`, {
            headers: this._headers
        })
    }
    updateProfile({name, about}){
        return this._sendRequest(`https://nomoreparties.co/v1/cohort-27/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
              })
        })
    }
    uploadCard({name, link}){
        return this._sendRequest(`https://nomoreparties.co/v1/cohort-27/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
              })
        })
    }
    deleteCard(data){
        return this._sendRequest(`https://nomoreparties.co/v1/cohort-27/cards/${data._id}`,{
            method: 'DELETE',
            headers: this._headers,
        })
    }
    setLike(data){
        return this._sendRequest(`https://nomoreparties.co/v1/cohort-27/cards/likes/${data._id}`,{
            method: 'PUT',
            headers: this._headers,
        })
    }
    deleteLike(data){
        return this._sendRequest(`https://nomoreparties.co/v1/cohort-27/cards/likes/${data._id}`,{
            method: 'DELETE',
            headers: this._headers,
        })
    }
    changeAvatar(avatar){
        return this._sendRequest(`https://nomoreparties.co/v1/cohort-27/users/me/avatar`,{
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar,
              })
        })
    }
}