export default class UserInfo {
  constructor({ selectorUserName, selectorUserInfo, avatarSelector }) {
    this._profileName = document.querySelector(selectorUserName);
    this._profileInfo = document.querySelector(selectorUserInfo);
    this._avatar = document.querySelector(avatarSelector);
  }

  ///Return odject with user data///
  getUserInfo() {
    const item = {};
    item['inputName'] = this._profileName.textContent;
    item['inputJob'] = this._profileInfo.textContent;
    return item
  }

  ///Get new user data and add them on page///
  setUserInfo({ name, about}) {
    this._profileName.textContent = name;
    this._profileInfo.textContent = about;
  }

  setAvatar(src) {
    this._avatar.src = src;
  }
}
