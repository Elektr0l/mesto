let Popup__ValueName = document.querySelector(`.popup__value-name`);
let Popup__ValueDescription = document.querySelector(`.popup__value-description`);

let Info__ValueName = document.querySelector(`.Info__value-name`);
let Info__ValueDescription = document.querySelector(`.Info__value-description`);

let Popup__SaveButton = document.querySelector(`.popup__save-button`);

let Info__EditButton = document.querySelector(`.Info__Edit-Button`);
let Popup__CloseButton = document.querySelector(`.popup__close-button`);

let Popup = document.querySelector(`.popup`);

let Cards = document.querySelector(`.elements__wrapper`);
//Открытие попапа
function Add_Popup() {
  Popup.classList.add("popup_opened"); // Функция открытия попапа
}

//Закрытие попапа
function Remove_Popup() {
  Popup.classList.remove("popup_opened"); // Функция закрытия попапа
}

//Заполнение плейсхолдеров попапа из Info-элементов
function Placeholder_Popup() {
  Popup__ValueName.setAttribute("placeholder", Info__ValueName.textContent);
  Popup__ValueDescription.setAttribute(
    "placeholder",
    Info__ValueDescription.textContent
  );
}
Placeholder_Popup();

// Функция изменения Info-элементов
function Edit_InfoElement() {
  Info__ValueName.textContent = Popup__ValueName.value;
  Info__ValueDescription.textContent = Popup__ValueDescription.value;
  Popup__ValueName.value = "";
  Popup__ValueDescription.value = "";
}

Info__EditButton.addEventListener("click", Add_Popup); //Нажать на Info__EditButton для открытия попапа

Popup__CloseButton.addEventListener("click", Remove_Popup);
Popup__SaveButton.addEventListener("click", Edit_InfoElement);
Popup__SaveButton.addEventListener("click", Remove_Popup);
Popup__SaveButton.addEventListener("click", Placeholder_Popup);
