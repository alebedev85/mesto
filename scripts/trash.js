//Open Popup//
//Close Popup with Esc//
function closePopupWithEsc(evt) {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupWithEsc);
  document.addEventListener('click', closePopupWithOverlay);
};

//Close Popup//
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupWithEsc);
  document.removeEventListener('click', closePopupWithOverlay);
};

//Close Popup with Overlay//
function closePopupWithOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
}

//Handle Edit Form//
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
};

//Handle Add Form//
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  renderCard(cardNameImput.value, cardLinkImput.value);
};

// //Submit Edit Profile//
// formEditProfile.addEventListener('submit', (evt) => {
//   handleEditFormSubmit(evt);
//   closePopup(popupEditProfile);
// });

//Open Edit Popup//
// buttonEditProfile.addEventListener('click', () => {
//   profileNameInput.value = profileName.textContent;
//   profileJobInput.value = profileJob.textContent;
//   formsCollection['formEditProfile'].resetInputError();
//   openPopup(popupEditProfile);
// });

//Close Edit Popup//
// buttonClosePopupEditProfile.addEventListener('click', () => closePopup(popupEditProfile));


// //Close Add Popup//
// buttonClosePopupAddCard.addEventListener('click', () => closePopup(popupAddCard));

//Close Edit Picture//
// buttonClosePicturePopup.addEventListener('click', () => closePopup(popupPicture));


//Submit Edd Card//
// formEddCard.addEventListener('submit', (evt) => {
//   handleAddFormSubmit(evt);
//   closePopup(popupAddCard);
//   evt.target.reset();
// });
