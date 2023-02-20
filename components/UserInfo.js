export default class UserInfo {
  constructor(selectors) {
    this._profileName = document.querySelector(selectors.name);
    this._profileInfo = document.querySelector(selectors.info);
  }

  ///Return odject with user data///
  getUserInfo() {
    const item = {};
    item['name'] = this._profileName;
    item['info'] = this._profileInfo;
    return item
  }

  ///Get new user data and add them on page///
  setUserInfo(data) {
    this._profileName = data.name;
    this._profileInfo = data.info;
    document.querySelector(selectors.name) = this._profileName;
    document.querySelector(selectors.info) = this._profileInfo;
  }
}
