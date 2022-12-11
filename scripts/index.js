let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');

let profileName = document.querySelector('.profile__name').textContent;
let profileJob = document.querySelector('.profile__job').textContent;

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#user-name');
let jobInput = document.querySelector('#user-job');


function openForm() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName;
    jobInput.value = profileJob;
};

function closeForm() {
    popup.classList.remove('popup_opened');
};

function handleFormSubmit(evt) {
    evt.preventDefault();

    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__job').textContent = jobInput.value;
    closeForm();
};

formElement.addEventListener('submit', handleFormSubmit);


editButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);
