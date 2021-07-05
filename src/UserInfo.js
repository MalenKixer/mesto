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
            name: this._name.value,
            info: this._info.value
        }
        return userInfo;
    }
    setUserInfo(data){
        this._name.textContent = data.name;
        this._info.textContent = data.info;
    }
}