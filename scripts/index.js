const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_input_name');
const jobInput = document.querySelector('.popup__input_input_job');


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
