export class UserInfo{
    constructor(data){
        this._data = data;
        this._name = data.name;
        this._info = data.info;
    }
    getUserInfo(){
        return this._data;
    }
    setUserInfo(){
        this._profileTitle = document.querySelector('.profile__title');
        this._profileSubtitle = document.querySelector('.profile__subtitle');
        this._profileTitle.textContent = this._name;
        this._profileSubtitle.textContent = this._info;
    }
}