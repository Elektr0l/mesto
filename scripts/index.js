//Объявление попапов
const popupProfile = document.querySelector(".popup_type_profile");
const popupCard = document.querySelector(".popup_type_card");
const popupCardOpened = document.querySelector(".popup_type_card-opened");
const popups = document.querySelectorAll(".popup");
//Объявление Profile элементов
const profileValueName = document.querySelector(".profile__value-name");
const profileValueDescription = document.querySelector(
  ".profile__value-description"
);

//Объявление попап-Profile элементов
const popupProfileName = document.querySelector(".popup__input_type_name");
const popupProfileDescription = document.querySelector(
  ".popup__input_type_description"
);

//Объявление попап-Card элементов
const popupCardTitle = document.querySelector(".popup__input_type_title");
const popupCardLink = document.querySelector(".popup__input_type_link");

//Объявление попап-Card-opened элементов
const popupCardOpenedImage = document.querySelector(".popup__image");
const popupCardOpenedTitle = document.querySelector(
  ".popup__image-description"
);

//Объявление кнопок
const popupSaveButtonProfile = document.querySelector(
  ".popup__save-button_profile"
);
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");

//Объявление форм
const popupContentProfile = document.querySelector(".popup__content_profile");
const popupContentCard = document.querySelector(".popup__content_card");

// Объявление template
const template = document
  .querySelector(".cards-template")
  .content.querySelector(".element");

//Объявление контейнера карточек
const cards = document.querySelector(".elements__wrapper");

//Функция создания карточки
function createCard(item) {
  const card = template.cloneNode(true);
  const elementTitle = card.querySelector(".element__title");
  const elementImage = card.querySelector(".element__image");

  elementTitle.textContent = item.name;
  elementImage.src = item.link;
  elementImage.alt = item.name;
  card
    .querySelector(".element__button-like")
    .addEventListener("click", likeCard);
  card
    .querySelector(".element__button-trash")
    .addEventListener("click", trashButton);
  elementImage.addEventListener("click", () => {
    openPopupCard(item);
  });
  return card;
}

//Отображение карточек из массива
function addTemplateCard(item) {
  const cardAdded = createCard(item);
  cards.prepend(cardAdded);
}
initialCards.map(addTemplateCard);

//Функцуия добавления карточки
function addCard(event) {
  event.preventDefault();
  const cardTitle = popupCardTitle.value;
  const cardLink = popupCardLink.value;
  addTemplateCard({ name: cardTitle, link: cardLink });
  removePopup(popupCard);
}

// Открытие картинки в попап
function openPopupCard(item) {
  popupCardOpenedImage.src = item.link;
  popupCardOpenedImage.alt = item.name;
  popupCardOpenedTitle.textContent = item.name;
  addPopup(popupCardOpened);
}

// Функция лайка карточки
function likeCard(event) {
  const likeButton = event.target;
  likeButton.classList.toggle("element__button-like_active");
}

// Функция удаления карточки
function trashButton(event) {
  const card = event.target.closest(".element");
  card.remove();
}

//Функция изменения Profile-элементов
function editProfileElement(event) {
  event.preventDefault();
  profileValueName.textContent = popupProfileName.value;
  profileValueDescription.textContent = popupProfileDescription.value;
  removePopup(popupProfile);
}

//Открытие попапа
function addPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", escPopup);
}

//Закрытие попапа
function removePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", escPopup);
}

//Закрытие попапа на Esc
function escPopup(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    removePopup(popupOpened);
  }
}

//Функция открытия profile-элементов
function addValueProfileInpits() {
  popupProfileName.value = profileValueName.textContent;
  popupProfileDescription.value = profileValueDescription.textContent;
}

//Слушатели откытия попапов
profileEditButton.addEventListener("click", () => {
  addPopup(popupProfile);
  addValueProfileInpits();
});

profileAddButton.addEventListener("click", () => {
  addPopup(popupCard);
});

//Слушатели на кнопки закрытия попапов
popups.forEach((popup) => {
  const popupCloseButton = popup.querySelector(".popup__close-button");
  popupCloseButton.addEventListener("click", () => {
    removePopup(popup);
  });
});
//Слушатели на оверлеи закрытия попапов
popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup_opened")) {
      removePopup(popup);
    }
  });
});

//Слушатели отправки форм
popupContentProfile.addEventListener("submit", editProfileElement);
popupContentCard.addEventListener("submit", addCard);
