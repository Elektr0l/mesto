let PopupValueName = document.querySelector(`.popup__input_type_name`);
let PopupValueDescription = document.querySelector(`.popup__input_type_description`);

let ProfileValueName = document.querySelector(`.profile__value-name`);
let ProfileValueDescription = document.querySelector(`.profile__value-description`);

let PopupSaveButton = document.querySelector(`.popup__save-button`);

let ProfileEditButton = document.querySelector(`.profile__edit-button`);
let PopupCloseButton = document.querySelector(`.popup__close-button`);

let Popup = document.querySelector(`.popup`);
let PopupContent = document.querySelector(`.popup__content`);
//Открытие попапа
function Add_Popup() {
  Popup.classList.add("popup_opened"); // Функция открытия попапа
  PopupValueName.value = ProfileValueName.textContent;
  PopupValueDescription.value = ProfileValueDescription.textContent;
}

//Закрытие попапа
function Remove_Popup() {
  Popup.classList.remove("popup_opened");
}

// Функция изменения Profile-элементов
function EditProfileElement(event) {
  event.preventDefault();
  ProfileValueName.textContent = PopupValueName.value;
  ProfileValueDescription.textContent = PopupValueDescription.value;
  Remove_Popup();
}

ProfileEditButton.addEventListener("click", Add_Popup);

PopupCloseButton.addEventListener("click", Remove_Popup);

PopupSaveButton.addEventListener("click", EditProfileElement);
