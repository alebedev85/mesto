let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_input_name');
let jobInput = document.querySelector('.popup__input_input_job');


function openForm() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

function closeForm() {
    popup.classList.remove('popup_opened');
};

function handleFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeForm();
};

formElement.addEventListener('submit', handleFormSubmit);


editButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);
