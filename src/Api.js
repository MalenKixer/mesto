export class Api{
    constructor(options){
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
    getUserInfo(){
        fetch(`${this._baseUrl}/users/me`,{
            method: GET,
            headers:{
                authorization: this._headers
            }
        })
        .then((res) =>{
            if(res.ok){
                return res.json;
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
    getCards(){
        fetch(`${this._baseUrl}/cards`,{
            method: GET,
            headers:{
                authorization: this._headers
            }
        })
        .then((res) =>{
            if(res.ok){
                return res.json;
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
    updateProfile({name, about}){
        fetch(`${this._baseUrl}/users/me`,{
            method: PATCH,
            headers: {
                authorization: this._headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: about
              })
        })
        .then((res) =>{
            if(res.ok){
                return res.json;
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
    uploadCard({name, link}){
        fetch(`${this._baseUrl}/cards`,{
            method: POST,
            headers: {
                authorization: this._headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
              })
        })
        .then((res) =>{
            if(res.ok){
                return res.json;
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
    deleteCard(data){
        fetch(`${this._baseUrl}/cards/${data._id}`,{
            method: DELETE,
            headers: {
                authorization: this._headers,
            }
        })
        .then((res) =>{
            if(res.ok){
                return res.json;
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
    setLike(data){
        fetch(`${this._baseUrl}/cards/likes/${data._id}`,{
            method: PUT,
            headers: {
                authorization: this._headers,
            }
        })
        .then((res) =>{
            if(res.ok){
                return res.json;
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
    deleteLike(data){
        fetch(`${this._baseUrl}/cards/likes/${data._id}`,{
            method: DELETE,
            headers: {
                authorization: this._headers,
            }
        })
        .then((res) =>{
            if(res.ok){
                return res.json;
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
    updateLikeCounter(data){
        fetch(`${this._baseUrl}/cards/${data._id}`,{
            method: PATCH,
            headers: {
                authorization: this._headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                likes: data.likes,
              })
        })
        .then((res) =>{
            if(res.ok){
                return res.json;
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
    changeAvatar(avatar){
        fetch(`${this._baseUrl}/users/me/avatar`,{
            method: PATCH,
            headers: {
                authorization: this._headers,
            },
            body: JSON.stringify({
                avatar: avatar,
              })
        })
        .then((res) =>{
            if(res.ok){
                return res.json;
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
}