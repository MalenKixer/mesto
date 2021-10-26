export class Api{
    constructor({baseUrl, headers}){
        this._headers = headers;
        this._baseUrl = baseUrl
    }
    // Оправить запрос
    _sendRequest(path, parameters){
        return fetch(`${this._baseUrl}${path}`, parameters)
        .then((res) => {
            if (res.ok) {
            return res.json();
            }
            Promise.reject(`Ошибка: ${res.status}`);
          });
    }
    getUserInfo(){
        return this._sendRequest(`/users/me`, {
            headers: this._headers
        })
    }
    getCards(){
        return this._sendRequest(`/cards`, {
            headers: this._headers
        })
    }
    updateProfile({name, about}){
        return this._sendRequest(`/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
              })
        })
    }
    uploadCard({name, link}){
        return this._sendRequest(`/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
              })
        })
    }
    deleteCard(data){
        return this._sendRequest(`/cards/${data._id}`,{
            method: 'DELETE',
            headers: this._headers,
        })
    }
    setLike(data){
        return this._sendRequest(`/cards/likes/${data._id}`,{
            method: 'PUT',
            headers: this._headers,
        })
    }
    deleteLike(data){
        return this._sendRequest(`/cards/likes/${data._id}`,{
            method: 'DELETE',
            headers: this._headers,
        })
    }
    changeAvatar({link}){
        return this._sendRequest(`/users/me/avatar`,{
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: link,
              })    
        })
    }
}