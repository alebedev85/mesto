import './index.css';
import {
  buttonEditProfile,
  buttonAddNewCard,
  buttonEditAvatar,
  buttonSaveNewCard,
  buttonSaveProfile,
  buttonSaveAvatar,
  buttonDeleteCard
} from '../scripts/constants.js';
import selectors from '../scripts/selectors.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js'
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js'

//VARS//

let user_id;

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-61', '3e070c18-b10f-4e80-b715-68fa3cc00268');

Promise.all([api.getCards(), api.getCurrentUser()])
  .then(([items, user]) => {
    userInfo.setAvatar(user.avatar);
    user_id = user._id;
    cardsSection.renderItems(items, user_id);
    userInfo.setUserInfo(user);
  })
  .catch(err => {
    alert(err);
    console.log(err);
  })

const handelLikeClick = {
  addLike: (ip, element) => addLike(ip, element),
  deleteLike: (ip, element) => deleteLike(ip, element)
}

function addLike(ip, element) {
  api.addLike(ip)
    .then(res => element.updateLikes(res.likes))
    .catch(err => {
      alert(err);
      console.log(err);
    })
}
function deleteLike(ip, element) {
  api.deleteLike(ip)
    .then(res => element.updateLikes(res.likes))
    .catch(err => {
      alert(err);
      console.log(err);
    })
}

const formValidators = {};

const userInfo = new UserInfo({
  selectorUserName: '.profile__name',
  selectorUserInfo: '.profile__job',
  avatarSelector: '.profile__avatar'
});

//Creat Cards From Array//
const cardsSection = new Section({
  renderer: createCard
},
  '.elements')

///Popup With Image///
//Creat element//
const popupWithImage = new PopupWithImage('.popup_type_picture')
popupWithImage.setEventListeners();

///Form edit profile///
//Creat element//
const popupEditProfile = new PopupWithForm('.popup_type_edit', ({ inputName: name, inputJob: about }) => editUserInfo(name, about))

///Form add new card///
//Creat element//
const popupAddCard = new PopupWithForm('.popup_type_add', ({ cardLinkImput: link, cardNameImput: name }) => addNewCard(name, link))

///Form delete card///
//Creat element//
const popupDeleteCard = new PopupWithConfirmation('.popup_type_delete', deleteCard);

///Form edit avatar///
//Creat element//
const popupEditAvatar = new PopupWithForm('.popup_type_edit-avatar', setNewAvatar)


//FUNCTIONS//

//Creat Card//
function createCard(item) {
  const card = new Card(item, '.element-temlate', () => {
    popupWithImage.open(item);
  },
    user_id,
    (element, id) => popupDeleteCard.open(element, id),
    handelLikeClick);
  return card.createCard();
}

//Add new card//
function addNewCard(name, link) {
  buttonSaveNewCard.textContent = 'Сохранение...'
  api.addNewCard({ name, link })
    .then((item) => {
      cardsSection.addItem(item, user_id)
    })
    .catch(err => {
      alert(err)
      console.log(err)
    })
    .finally(() => {
      popupAddCard.close()
      buttonSaveNewCard.textContent = 'Создать'
    })
}

//Delete Card//
function deleteCard(id) {
  buttonDeleteCard.textContent = 'Удаление...';
  return api.deleteCard(id)
    .catch(err => {
      alert(err)
      console.log(err)
    })
    .finally(() => {
      popupDeleteCard.close()
      buttonDeleteCard.textContent = 'Да'
    })
}

//Edit user info//
function editUserInfo(name, about) {
  buttonSaveProfile.textContent = 'Сохранение...'
  api.setUserInfo(name, about)
    .then(res => {
      userInfo.setUserInfo(res)
    })
    .catch(err => {
      alert(err)
      console.log(err)
    })
    .finally(() => {
      popupEditProfile.close()
      buttonSaveProfile.textContent = 'Сохранить';
    })
}

//Set new avatar//
function setNewAvatar(input) {
  buttonSaveAvatar.textContent = 'Сохранение...';
  api.setNewAvatar(input)
    .then((res) => {
      userInfo.setAvatar(res.avatar);
    })
    .catch(err => {
      alert(err)
      console.log(err)
    })
    .finally(() => {
      popupEditAvatar.close()
      buttonSaveAvatar.textContent = 'Создать'
    })
}

//Set form Validation//
function enableValidation({ formSelector, ...rest }) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formValidators[formElement.name] = new FormValidator(formElement, rest);
    formValidators[formElement.name].enableValidation();
  });
};

//Main Funtions//

//Launch Form Validation//
enableValidation(selectors);

//Set listeners//
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupDeleteCard.setEventListeners();
popupEditAvatar.setEventListeners();

//Set listener for open edit form//
buttonEditProfile.addEventListener('click', () => {
  formValidators['formEditProfile'].resetInputError();
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  popupEditProfile.open();
});

//Set listener for open add new card form//
buttonAddNewCard.addEventListener('click', () => {
  formValidators['formAddCard'].resetInputError();
  popupAddCard.open();
});

//Set listener for open edit form//
buttonEditAvatar.addEventListener('click', () => {
  formValidators['formEditAvatar'].resetInputError();
  popupEditAvatar.open();
})
