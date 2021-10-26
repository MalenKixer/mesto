export class UserInfo{
    constructor(data){
        this._nameSelector = data.name;
        this._infoSelector = data.about;
        this._avatarSelector = data.avatar;
        this._profileSelector = data.profile;
        this._profile = document.querySelector(this._profileSelector);
        this._name = this._profile.querySelector(this._nameSelector);
        this._info = this._profile.querySelector(this._infoSelector);
        this._avatar = this._profile.querySelector(this._avatarSelector);
        this._inputName = document.querySelector('.popup__input_text_name');
        this._inputInfo = document.querySelector('.popup__input_text_activity');
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
    setUserInfoInInput(data){
        this._inputName.value = data.name;
        this._inputInfo.value = data.info;
    }
}