export default class UserInfo {
  constructor({ selectorUserName, selectorUserInfo }) {
    this._profileName = document.querySelector(selectorUserName);
    this._profileInfo = document.querySelector(selectorUserInfo);
  }

  ///Return odject with user data///
  getUserInfo() {
    const item = {};
    item['name'] = this._profileName.textContent;
    item['info'] = this._profileInfo.textContent;
    return item
  }

  ///Get new user data and add them on page///
  setUserInfo({ inputName, inputJob}) {
    this._profileName.textContent = inputName;
    this._profileInfo.textContent = inputJob;
  }
}
