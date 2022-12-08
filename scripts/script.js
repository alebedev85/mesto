let editButton = document.querySelector('.edit-button')
let popup = document.querySelector('.popup')
let closeButton = document.querySelector('.popup__close-button')


editButton.addEventListener('click', function () {popup.classList.toggle('popup_opened')})
closeButton.addEventListener('click', function () {popup.classList.toggle('popup_opened')})
