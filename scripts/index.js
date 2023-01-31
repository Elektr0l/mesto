let popupValueName = document.querySelector(".popup__input_type_name");
let popupValueDescription = document.querySelector(".popup__input_type_description");

let profileValueName = document.querySelector(".profile__value-name");
let profileValueDescription = document.querySelector(".profile__value-description");

let popupSaveButton = document.querySelector(".popup__save-button");

let profileEditButton = document.querySelector(".profile__edit-button");
let popupCloseButton = document.querySelector(".popup__close-button");

let popup = document.querySelector(".popup");
let popupContent = document.querySelector(".popup__content");

//Открытие попапа
function addPopup() {
  popup.classList.add("popup_opened");
  popupValueName.value = profileValueName.textContent;
  popupValueDescription.value = profileValueDescription.textContent;
}

//Закрытие попапа
function removePopup() {
  popup.classList.remove("popup_opened");
}

//Функция изменения Profile-элементов
function editProfileElement(event) {
  event.preventDefault();
  profileValueName.textContent = popupValueName.value;
  profileValueDescription.textContent = popupValueDescription.value;
  removePopup(popup);
}

profileEditButton.addEventListener("click", addPopup);

popupCloseButton.addEventListener("click", removePopup);

popupContent.addEventListener("submit", editProfileElement);
