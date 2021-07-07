export class UserInfo{
    constructor(data){
        this._data = data;
        this._nameSelector = data.name;
        this._infoSelector = data.info;
        this._name = document.querySelector(this._nameSelector);
        this._info = document.querySelector(this._infoSelector);
    }
    getUserInfo(){
        const userInfo = {
            name: this._name.textContent,
            info: this._info.textContent
        }
        return userInfo;
    }
    setUserInfo(data){
        this._name.textContent = data.name;
        this._info.textContent = data.info;
    }
}