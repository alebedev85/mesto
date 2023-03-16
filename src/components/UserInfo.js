export default class UserInfo {
  constructor({ selectorUserName, selectorUserInfo, avatarSelector }) {
    this._profileName = document.querySelector(selectorUserName);
    this._profileInfo = document.querySelector(selectorUserInfo);
    this._avatar = document.querySelector(avatarSelector);
  }

  ///Return odject with user data///
  getUserInfo() {
    return {
      inputName: this._profileName.textContent,
      inputJob: this._profileInfo.textContent,
      avatar: this._avatar.src
    };
  }

  ///Get new user data and add them on page///
  setUserInfo({ name, about }) {
    this._profileName.textContent = name;
    this._profileInfo.textContent = about;
  }

  setAvatar(src) {
    this._avatar.src = src;
  }
}
