export class UserInfo{
    constructor(data){
        this._nameSelector = data.name;
        this._infoSelector = data.info;
        this._avatarSelector = data.avatar;
        this._name = document.querySelector(this._nameSelector);
        this._info = document.querySelector(this._infoSelector);
        this._avatar = document.querySelector(this._avatarSelector)
    }
    getUserInfo(){
        const userInfo = {
            name: this._name.textContent,
            info: this._info.textContent,
            avatar: this._avatar.src,
        }
        return userInfo;
    }
    setUserInfo(data){
        this._name.textContent = data.name;
        this._info.textContent = data.about;
        this._avatar.src = data.avatar;
    }
}